import React, {useState} from "react";
import axiosInstance from "../axios";
import { Row, Col, Form, Button, ProgressBar, Alert } from "react-bootstrap"
import Modal from 'react-bootstrap/Modal'
import { useHistory } from 'react-router-dom';

import backBlack from "../image-assets/Backblack.svg"

import "../styles/upload.css"

function Upload(){

  const history = useHistory();

const [selectedFiles, setSelectedFiles] = useState([])

  const [progress, setProgress] = useState(null)

  const [error, setError] = useState()

  const [fileSelect, setFileSelect] = useState(false);
  const [modalShow, setModalShow] = useState(false);



  const submitHandler = e => {

    e.preventDefault() //prevent the form from submitting

    


 

    // const PORT = process.env.PORT || 8081;

    let email = document.getElementById("email").value;
    let fName = document.getElementById("firstName").value;
    let lName = document.getElementById("lastName").value;
    let projectLink = document.getElementById("projectLink").value;

    let textData = {
      firstName: fName, 
      lastName: lName, 
      projectLink: projectLink,
      email: email
    }

    console.log(textData)
    

    fetch('https://inypt-participant-dash.herokuapp.com/submission', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(textData),
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch((error) => {
      console.error('Error:', error);
      setError("Sorry! Something went wrong. Please try again later")
    });

    let formData = new FormData()

    formData.append("file", selectedFiles[0])
 
    //CHANGE WHEN PUSHING https://inypt-participant-dash.herokuapp.com/upload_file
  
    axiosInstance.post(`https://inypt-participant-dash.herokuapp.com/upload_file`, formData, {

      headers: {

        "Content-Type": "multipart/form-data",

      },

      onUploadProgress: data => {

        //Set the progress value to show the progress bar

        setProgress(Math.round((100 * data.loaded) / data.total))

      },

    
    }).then(function (response) {

      if(response.status===200){
        setModalShow(true);
      }

      
      
    }).catch(error => {

      const { code } = error?.response?.data

      

      switch (code) {

        case "FILE_MISSING":

          setError("Please select a file before uploading!")
          setProgress(null);
          setModalShow(false);

          setTimeout(()=>{
            setError(null)
          }, 2000)

          break

        default:

          setError("Sorry! Something went wrong. Please try again later")

          break

      }

    })

  }

  


//   const handleStringSubmit  = (e) => {
    
//     alert("It works!")
//     e.preventDefault();
//     // let formDataText = new FormData()
    
//     // formDataText.append("firstName", "lastName", "projectLink", "email")

//     // console.log(formDataText)
//     let emailText = document.getElementById("email").value;
//     console.log(emailText);

//     axiosInstance({
//       method: "post",
//       url: "http://localhost:8081/submission",
//       body: {email: emailText},
//       headers: { "Content-Type": "multipart/form-data" },
//     })
//       .then(function (response) {
//         //handle success
//         console.log(response);
//       })
//       .catch(function (response) {
//         //handle error
//         console.log(response);
//       });
    
//     console.log("This baby can submit 2 things")
// }

  if(progress===100){
      setTimeout(()=>{
                
          setProgress(null)
        
      }, 700)    

  }

  document.body.style= 'padding: 5% 15%; background: #d9d9d9;'

 

  return(
    <div className="wrapper">
      <span className="navbar-back-upload" onClick={()=>{history.push('/')}}><img src={backBlack} alt=''></img></span>
       <div className="project-submission-part">

        <h1 className="project-submission-title"> Project Submission </h1>
      
        {/* <form  id="text-form"
               action="http://localhost:8081/submission"
               encType="multipart/form-data"
               method="post"
              onSubmit={handleStringSubmit} >

              
              <input  type="submit" value="Submit Text" onClick={submitForms}  className="submit-btn"></input>
        </form> */}

    

    <Row>
      
                
    <Col>
        <Form

          action="https://inypt-participant-dash.herokuapp.com/upload_file"

          method="post"

          encType="multipart/form-data"

          id="file-form"

          onSubmit={submitHandler}

        >
          
          
          
          <Form.Group>

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
            

            <input  type="submit" value="Submit"   className="submit-btn"></input>

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
              <li> Check if all videos embedded in your presentation are <a style={{color: '#fff'}} target="_blank" rel="noreferrer" href="https://www.uscreen.tv/blog/5-ways-to-make-video-files-smaller/">compressed.</a>  </li>
              <li>Save your file at an <a style={{color: '#fff'}} target="_blank" rel="noreferrer" href="https://support.microsoft.com/en-us/office/reduce-the-file-size-of-your-powerpoint-presentations-9548ffd4-d853-41e7-8e40-b606bca036b4"> optimised setting. </a> </li>
               </ul> 

            <p className="guideline-instruction-titles">If you’re unable to reach file limit...</p>
            <ol className="guideline-instruction-text"> 
              <li> Save the presentation as a pdf and <a style={{color: '#fff'}} target="_blank" rel="noreferrer" href="https://smallpdf.com/compress-pdf"> compress </a> if required and submit here.  </li>
              <li>Upload your original presentation to your personal cloud drive (Google preferrably).</li>
              <li>Share the file with <strong>inypt@gmail.com with edit privileges.</strong>  </li>
              <li>Copy the share link and paste it in the <strong>‘Project Link’</strong> section of the form.</li>
            
            *Project link is recommended not required. Files edited after submission will result in elimination.
            </ol> 
            <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

    </div>
  </div>
  );

}

export default Upload 

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          We have your Submission!
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        <p>
          Congratulations on all that hardwork. We're sure you've done well. 
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Back to Dashboard</Button>
      </Modal.Footer>
    </Modal>
  );
}