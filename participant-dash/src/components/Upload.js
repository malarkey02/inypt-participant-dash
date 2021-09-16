import React, {useState} from "react";
import axiosInstance from "../axios";
import { Container, Row, Col, Form, Button, ProgressBar, Alert } from "react-bootstrap"

import "../styles/upload.css"

function Upload(){



const [selectedFiles, setSelectedFiles] = useState([])

  const [progress, setProgress] = useState(null)

  const [error, setError] = useState()

  const [fileSelect, setFileSelect] = useState(false);

  const [divHeight, setDivHeight] = useState();

  const submitHandler = e => {

    e.preventDefault() //prevent the form from submitting

    let formData = new FormData()

    formData.append("file", selectedFiles[0])

    

    const PORT = process.env.PORT || 8081;

    axiosInstance.post(`https://inypt-participant-dash.herokuapp.com/upload_file`, formData, {

      headers: {

        "Content-Type": "multipart/form-data",

      },

      onUploadProgress: data => {

        //Set the progress value to show the progress bar

        setProgress(Math.round((100 * data.loaded) / data.total))

      },

    }).catch(error => {

      const { code } = error?.response?.data

      switch (code) {

        case "FILE_MISSING":

          setError("Please select a file before uploading!")

          break

        default:

          setError("Sorry! Something went wrong. Please try again later")

          break

      }

    })

  }

  

  const handleStringSubmit = e => {
      e.preventDefault();
      
      console.log("This baby can submit 2 things")
  }

  function submitTextForm(){
      let textForm = document.getElementById('text-form');
      textForm.submit(e =>{ 
        e.preventDefault();
      });
      
  }


  if(progress==100){
    console.log("We can trigger events when it completes uploading")

  }

  document.body.style= 'padding: 5% 15%; background: #d9d9d9;'
  // let height = document.querySelector(".project-submission-part").offsetHeight;

  console.log();

  return(
    <div className="wrapper">
       <div className="project-submission-part">

        <h1 className="project-submission-title"> Project Submission </h1>
      
        <Form 
               action="/"

               method="post"
              onSubmit={handleStringSubmit} id="text-form">

              <Row>
                <Col>
                  <label className="text-input-label" htmlFor="firstname">First Name</label>
                  <input type="text" className="text-input-half" name="firstName" id="firstName" required></input>
                </Col>
                <Col> 
                  <label className="text-input-label" htmlFor="lastname">Last Name</label>
                  <input type="text" className="text-input-half" name="lastName" id="lastName" required></input>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label className="text-input-label" htmlFor="projectLink">Project Link*</label>
                  <input type="text" className="text-input-half" name="projectLink" id="projectLink"></input>
                </Col>
                
                <Col>
                  <label className="text-input-label" htmlFor="email" required>Email</label>
                  <input type="email" className="text-input-half" name="email" id="email"></input>
                </Col>
      
              </Row>

        </Form>

    

    <Row>
      
                
    <Col>
        <Form

          action="https://inypt-participant-dash.herokuapp.com/upload_file"

          method="post"

          encType="multipart/form-data"

          onSubmit={submitHandler}

        >
          
          
          
          <Form.Group>
            
              <label htmlFor="exampleFormControlFile1" className="custom-file-upload-btn">
                Browse...
              </label>
              <span className="file-select-text"> {fileSelect? "File Selected!" : "No File Selected"}</span>
              <span className="file-select-limit-text">File Size Limit - 40MB</span>

            <Form.File

              id="exampleFormControlFile1"

              // label="Select a File"

              name="file"

              
              
              onChange={e => {

                setSelectedFiles(e.target.files)
                setFileSelect(true);

              }}

            />

          </Form.Group>
                    
          <Form.Group>
            

            <input variant="info" type="submit" value="Submit" onClick={submitTextForm}  className="submit-btn"></input>

          </Form.Group>

          {error && <Alert variant="danger">{error}</Alert>}

          {!error && progress && (

            <ProgressBar now={progress} label={`${progress}%`} />

          )}

        </Form>
        </Col>
      </Row>
    </div>

    <div className="inypt-guidelines-part">
          
            <h1 className="guidelines-title">
            InYPT Guidelines
            </h1>

            <p className="guidelines-subtitle">
            submitting your work
            </p>

            <p className="guideline-instruction-titles">Naming Your Presentation</p>
            <p className="guideline-instruction-text"> Syntax - [(firstname)_(lastname)][problem-number] <br></br> Eg: Joe_Ramos14 </p>

            <p className="guideline-instruction-titles">Accepted File formats</p>
            <p className="guideline-instruction-text">  .pptx, .pdf, .key, and other presentation formats </p>

            <p className="guideline-instruction-titles">Keeping it within 40MB</p>
            <ul className="guideline-instruction-text">  
              <li> Check if all videos embedded in your presentation are <a style={{color: '#fff'}} target="_blank" href="https://www.uscreen.tv/blog/5-ways-to-make-video-files-smaller/">compressed.</a>  </li>
              <li>Save your file at an <a style={{color: '#fff'}} target="_blank" href="https://support.microsoft.com/en-us/office/reduce-the-file-size-of-your-powerpoint-presentations-9548ffd4-d853-41e7-8e40-b606bca036b4"> optimised setting. </a> </li>
               </ul> 

            <p className="guideline-instruction-titles">If you’re unable to reach file limit...</p>
            <ol className="guideline-instruction-text"> 
              <li> Save the presentation as a pdf and <a style={{color: '#fff'}} target="_blank" href="https://smallpdf.com/compress-pdf"> compress </a> if required and submit here.  </li>
              <li>Upload your original presentation to your personal cloud drive (Google preferrably).</li>
              <li>Share the file with <strong>inypt@gmail.com with edit privileges.</strong>  </li>
              <li>Copy the share link and paste it in the <strong>‘Project Link’</strong> section of the form.</li>
            
            *Project link is recommended not required. Files edited after submission will result in elimination.
            </ol> 
               

    </div>
  </div>
  );

}

export default Upload 