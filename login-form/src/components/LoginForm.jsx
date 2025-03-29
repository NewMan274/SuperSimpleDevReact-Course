import { useState } from 'react'
import './LoginForm.css'

function LoginForm(){
  const [showPassword, setShowPassword] = useState(true)

  function hideAndSeek() {
    showPassword === true ? setShowPassword(false) : setShowPassword(true)
  }

  return(
    <>
      <div>
        <input className="email-input" placeholder="Email" /><br />
        <input className="password-input" placeholder="Password" type={showPassword ? "password" : "text"} />
        <button onClick={hideAndSeek} className="hideAndSeek">{showPassword ? "Show" : "Hide"}</button>
      </div>
      <button className="login-button">Login</button>
      <button className="signUp-button">Sign Up</button>
    </>
  );
}

export default LoginForm