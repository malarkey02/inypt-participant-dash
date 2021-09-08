const express = require("express")

const path = require('path')

const multer = require("multer")

const cors = require("cors")

const mongoose = require("mongoose")

const zipFolder = require('zip-a-folder')

require('dotenv').config()

const app = express()


//MIDDLEWARE

const whitelist = ["http://localhost:3000"]

const corsOptions = {

  origin: function (origin, callback) {

    if (!origin || whitelist.indexOf(origin) !== -1) {

      callback(null, true)

    } else {

      callback(new Error("Not allowed by CORS"))

    }

  },

  credentials: true,

}

app.use(cors(corsOptions))

app.use(express.json({ limit: "1mb" }));

app.use(express.static(path.resolve(__dirname, '../participant-dash/build')))

//Multer Storage set-up for file-upload
const storage = multer.diskStorage({

  //Specify the destination directory where the file needs to be saved

  destination: function (req, file, cb) {

    cb(null, "./uploads")

  },

  //Specify the name of the file. The date is prefixed to avoid overwriting of files.

  filename: function (req, file, cb) {
    const ext = file.mimetype.split("/")[1];
    cb(null, `${file.originalname}.${ext}`);

  },

})

const upload = multer({

  storage: storage,

})


const DB = 'mongodb+srv://admin-harsh:' + process.env.DB_PASS + '@cluster0.8y5it.mongodb.net/test-uploads?retryWrites=true&w=majority';

mongoose.connect('mongodb+srv://admin-harsh:7hoPUeNHT2b42upX@cluster0.8y5it.mongodb.net/test-uploads?retryWrites=true&w=majority');

//mongoSchema for adding file name only

const fileSchema = new mongoose.Schema({
  createdAt: {
    type: Date,
    default: Date.now,
  },
  name: {
    type: String,
    required: [true, "Uploaded file must have a name"],
  },
});

// Creating a Model from that Schema
const File = mongoose.model("File", fileSchema);


//File Upload route
app.post("/upload_file", upload.single("file"), function (req, res) {

  if (!req.file) {

    //If the file is not uploaded, then throw custom error with message: FILE_MISSING

    throw Error("FILE_MISSING")

  } else {

    //If the file is uploaded, then send a success response.
    const newFile = new File({
      name: req.file.filename,
    });
    newFile.save();
    res.send({ status: "success" })

  }

})

//Express Error Handling - Don't touch

app.use(function (err, req, res, next) {

  // Check if the error is thrown from multer

  if (err instanceof multer.MulterError) {

    res.statusCode = 400

    res.send({ code: err.code })

  } else if (err) {

    // If it is not multer error then check if it is our custom error for FILE_MISSING

    if (err.message === "FILE_MISSING") {

      res.statusCode = 400

      res.send({ code: "FILE_MISSING" })

    } else {

      //For any other errors set code as GENERIC_ERROR

      res.statusCode = 500

      res.send({ code: "GENERIC_ERROR" })

    }

  }

})





//Creating .zip file request

async function createZip() {
  await zipFolder.zip('./uploads', './archive.zip');
}

app.get("/createzip", function(req, res){
  createZip().then(()=>{
    res.send({
      status: "complete"
    })
  });

  })

  //Downloading the created zip file
  app.get("/downloadzip", function(req, res){
    const file = `${__dirname}/archive.zip`;
    res.download(file)
      
    })
//Handling other get requests that don't match

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../participant-dash/build', 'index.html'));
    // res.send("Welcome to InYPT Dev!")
  });


//Start the server in port 8081

const PORT = process.env.PORT || 8081;

app.listen(PORT, function () {
  console.log(`App started at http://localhost:${PORT}`)

})