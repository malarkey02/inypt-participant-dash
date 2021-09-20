import React, {useState} from "react";
import {Row, Col, Button} from "react-bootstrap";
import Modal from 'react-bootstrap/Modal';
import "../../styles/register.css"
import { useHistory } from 'react-router-dom';



function Register(){

    

    document.body.style="background: #FF7A00; padding: 5% 15%"


    //There will be several hooks for this - it's an elaborate form
    //HOOKS

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [school, setSchool] = useState('');
    const [grade, setGrade] = useState(9);
    const [board, setBoard] = useState('CBSE');
    const [city, setCity] = useState('');
    const [phone, setPhone] = useState('');

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [securityQuestion, setSecurityQuestion] = useState('What is/was your childhood nickname?');
    const [securityAnswer, setSecurityAnswer] = useState('');

    //Modal Hooks
    const [modalShow, setModalShow] = useState(false);

    //END of HOOKS

    //handling Submit
    function handleSubmit(e){
        e.preventDefault();

        const userData = {
            firstName: fName,
            lastName: lName, 
            school: school,
            grade: grade, 
            board: board, 
            city: city, 
            phone: phone, 

            email: email, 
            password: pass, 
            securityQuestion: securityQuestion,
            securityAnswer: securityAnswer
        } 

        fetch ('https://inypt-participant-dash.herokuapp.com/api/user/signup', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            }, 
            body: JSON.stringify(userData)
           })
           .then(data=>data.json())
           .then(response => {
               console.log(response);
                if(response.message==='user-added'){
                setModalShow(true);
               }
           });
        
    }

    return (
        <div className="registration-form-sheet">
            <div className="registration-title-container">
                <h1 className="registration-title">indian young physicists' tournament</h1>
                <p className="registration-subtitle">Registration Form</p>
            </div>
            <div className="form-wrapper">
            
                <form onSubmit={handleSubmit}> 
                
                    <Row>
                        <Col>
                        <label className="registration-input-label">First Name</label>
                        <input className="registration-input" onChange={e => setFName(e.target.value)} name="firstName" type="text" required></input>
                        </Col>
                        <Col>
                        <label className="registration-input-label">Last Name</label>
                        <input className="registration-input" onChange={e => setLName(e.target.value)} name="lastName" type="text" required></input>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <label className="registration-input-label">School</label>
                        <input className="registration-input" onChange={e => setSchool(e.target.value)} name="school" type="text" required></input>
                        </Col>
                        <Col>
                        <label className="registration-input-label">Grade</label>
                        {/* <input className="registration-input"  name="grade" type="number" min="9" max="12" required></input> */}
                        <select className="registration-input" onChange={e => setGrade(e.target.value)} required  name="grade">
                            <option value="9">9th</option>
                            <option value="10">10th</option>
                            <option value="11">11th</option>
                            <option value="12">12th</option>
                        </select>
                        </Col>
                        <Col>
                        <label className="registration-input-label">Board</label>
                        {/* <input className="registration-input"  name="board" type="text" required></input> */}
                        <select className="registration-input" onChange={e => setBoard(e.target.value)} required  name="board">
                            <option value="CBSE">CBSE</option>
                            <option value="ISC/ISCE">ISC/ISCE</option>
                            <option value="State Board">State Board</option>
                            <option value="A Levels">A Levels</option>
                            <option value="IGCSE">IGCSE</option>
                            <option value="IB">IB</option>
                            <option value="Other">IGCSE</option>
                        </select>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <label className="registration-input-label">City</label>
                        <input className="registration-input" onChange={e => setCity(e.target.value)} name="city" type="text" required></input>
                        </Col>
                        <Col>
                        <label className="registration-input-label">Phone (Optional)</label>
                        <input className="registration-input" onChange={e => setPhone(e.target.value)} name="phone" type="text"></input>
                        </Col>
                    </Row>

                    <h2 className="registration-subtitle">Portal Login Credentials</h2>
                    <Row>
                        <Col>
                        <label className="registration-input-label">Email</label>
                        <input className="registration-input" onChange={e => setEmail(e.target.value)} name="email" type="email" required></input>
                        </Col>
                        <Col>
                        <label className="registration-input-label">Password (Save this)</label>
                        <input className="registration-input" onChange={e => setPass(e.target.value)} name="password" pattern="(?=.*\d)(?=.*[a-z]).{8,}" title=" Must contain at least one number and one lowercase letter, and at least 8 or more characters" type="password" required></input>
                        </Col>
                    </Row>

                    <Row>
                        <Col>
                        <label className="registration-input-label">Security Question</label>
                        {/* <input className="registration-input"  name="securityQuestion" type="text" required></input> */}
                        <select className="registration-input" onChange={e => setSecurityQuestion(e.target.value)} required  name="securityQuestion">
                            <option value="What is/was your childhood nickname?">What is/was your childhood nickname?</option>
                            <option value="What is your favourite subject?">What is your favourite subject?</option>
                            <option value="What school did you attend for sixth grade?">What school did you attend for sixth grade?</option>
                            <option value=" What is your maternal grandmother's maiden name?"> What is your maternal grandmother's maiden name?</option>
                            
                        </select>
                        </Col>
                        <Col>
                        <label className="registration-input-label"  >Security Answer</label>
                        <input className="registration-input" onChange={e => setSecurityAnswer(e.target.value)} name="securityAnswer" type="text" required></input>
                        </Col>
                    </Row>

                    <div className="acknowledgements">
                        <input type="checkbox" id="achnowledgement" name="scales" required
                                ></input>
                        <label className="acknowledgement-label" for="achnowledgement">By clicking this checkbox, I acknowledge that the Indian Young Physics Tournament (InYPT) is completely <em> free of costs.</em> However, if I am offered to represent Team India at the International Young Physicists' Tournament (IYPT), there are associated costs which must be <em>bourne by me/my sponsor.</em> By clicking 'Submit', I relieve InYPT of costs affiliated to the international tournament and my elligibility at IYPT is dependant on my financial ability.</label>
                </div>

                    <input type="submit" className="registration-submit-btn" value="Submit"></input>
                </form>
                
            </div>
            <MyVerticallyCenteredModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />

        </div>
    )

}

export default Register;

function MyVerticallyCenteredModal(props) {
    const history = useHistory();
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Your registration was successful!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <p>
            You may now enter your portal and learn all about IYPT and your task. 
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={()=>{history.push('/')}}>Head to Portal</Button>
        </Modal.Footer>
      </Modal>
    );
  }