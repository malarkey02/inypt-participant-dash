import React, {useState} from "react";
import PropTypes from 'prop-types';


import "../../styles/login.css";
import loginLogo from "../../image-assets/LoginLogo.svg"



function Login ({setToken}){

    const [userid, setuserid] = useState('');
    const [pass, setpass] = useState(''); 


    async function loginUser(credentials){
        return fetch ('https://inypt-participant-dash.herokuapp.com/api/user/login', {
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
                password: pass
            });
            setToken(token);
        }
      

        
        document.body.style="padding: 10% 15%";
    return (
    <div className="portal-login">
        <div className="logo-box">
            <img src={loginLogo} alt=''></img>
        </div>
        <div className="login-box"> 
            <h1>InYPT Portal</h1>
            

            <form onSubmit={handleSubmit}> 
                
                <div>
                    <label className="login-input-label" for="username">Email</label>
                    <input className="login-input" name="email" onChange={e => setuserid(e.target.value)} type="email"></input>
                </div>

                <div>
                    <label className="login-input-label" for="password">Password</label>
                    <input className="login-input" id="password" name="password" onChange={e => setpass(e.target.value)} type="password"></input>
                </div>
                <button className="sign-in-button" type="submit">Sign In</button>

            </form>
            <div className="login-redirect-links">
            <a className="login-redirects" href="/forgot-password">Forgot password</a>
            <a className="login-redirects" href="/register">New here? Sign-up now</a>
            </div>
        </div>
    </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }

export default Login;