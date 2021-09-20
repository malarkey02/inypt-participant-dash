import React, {useState} from "react";
import PropTypes from 'prop-types';


import "../../styles/login.css";
import loginLogo from "../../image-assets/LoginLogo.svg"




function ForgotPass ({setToken}){

    const [userid, setuserid] = useState('');
    const [securityQuestion, setSecurityQuestion]=useState('');
    const [status, setStatus] = useState(false);
    const [securityAnswer, setSecurityAnswer] = useState(''); 


    async function loginUser(credentials){
        return fetch ('https://inypt-participant-dash.herokuapp.com/api/user/login/security-question', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            }, 
            body: JSON.stringify(credentials)
           })
           .then(data=>data.json());
        }
    


        const handleSubmit = async e => {
            e.preventDefault(); 
            const token = await loginUser({
                email: userid, 
                securityAnswer: securityAnswer
            });
            setToken(token);
        }

        const fetchQuestion = async () =>{
            fetch ('https://inypt-participant-dash.herokuapp.com/api/user/fetch-security-question', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json' 
            }, 
            body: JSON.stringify({
                email: userid
            })
           })
           .then(data=>data.json())
           .then(response=>{
            setSecurityQuestion(response.securityQuestion);
            setStatus(true);
           })

        }
      

        
        document.body.style="padding: 10% 15%";
    return (
    <div className="portal-login">
        <div className="logo-box">
            <img src={loginLogo} alt=''></img>
        </div>
        <div className="login-box"> 
            <h1>Forgot Password</h1>
            

            <form onSubmit={handleSubmit}> 
                
                <div>
                    <label className="login-input-label" for="username">Email</label>
                    <input className="login-input" name="username" onChange={e => setuserid(e.target.value)} type="email"></input>
                </div>

                {status && <div>
                    <label className="login-input-label" for="password">{securityQuestion}</label>
                    <input className="login-input" placeholder="Security Answer" name="securityAnswer" onChange={e => setSecurityAnswer(e.target.value)} type="text"></input>
                </div>}
                {status ? <button className="sign-in-button" type="submit">Sign In</button>: <button className="sign-in-button" onClick={fetchQuestion}>Next</button>}
                 

            </form>
            <div className="login-redirect-links">
            <a href="mailto:inypt.info@gmail.com"className="login-redirects">Email us if you can't login inypt.info@gmail.com</a>
            
            </div>
        </div>
    </div>
    )
}

ForgotPass.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default ForgotPass;