import React, {useState} from 'react';
import {useHistory} from 'react-router-dom'

const Login = (props) => {
  
  const [email,setEmail] = useState()
  const [password,setPassword] = useState()
  let history = useHistory();

  const loginBtn = () => {
    console.log(email,password)
    let payload = {
      email: email,
      password: password
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }

    fetch("http://localhost:7860/login",requestOptions)
      .then(res => res.json())
      .then(data => {
        console.log(data)  
        if (data.error !== undefined) {
          props.setMessage(data.error);
          props.setSeverity("error")
          props.setOpen(true);
        }  
        else if (data.message === "Login successfuly") {
          localStorage.accessToken = data.accessToken;
          localStorage.refreshToken = data.refreshToken;
          localStorage.name = data.name;
          localStorage.email = data.email;
          localStorage.userId = data.userId;
          props.setMessage(data.message);
          props.setSeverity("success")
          props.setOpen(true);
          setTimeout(() => {
            if (data.type === 2) history.push('/form')
            else if(data.type === 1) history.push('/admin')
          }, 2000);
        }
        else {
          props.setMessage(data.message);
          props.setSeverity("warning")
          props.setOpen(true);
        }
      })
    }
  

    return (
          <form id="login-form" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input type="text" name="email" placeholder="Email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input type="password" name="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
            </div>
            <input type="button" value="Login" className="btn solid" onClick={loginBtn}/>
          </form>
    ) 
}

export default Login;