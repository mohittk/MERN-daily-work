import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {

    const history = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const loginUser = async(e)=>{
      e.preventDefault();
      const res = await fetch('http://localhost:5000/signin',{
          method: 'POST',
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({
              email: email, pass: pass, cpass:pass

          })
      })
      const data = res.json();
      if(res.status===400 || !data){
          window.alert("Invalid  credentials");
      }else{
          window.alert("login successful");
      }
      history('/');


  }

  

  return (
    <>
      <div className="signinform">
        <h2 className="form-title"> Sign In </h2>
        <div className="form-group">
          <label htmlFor="email"></label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            placeholder="apna email dalo"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>

          <label htmlFor="pass"></label>
          <input
            type="text"
            name="pass"
            id="pass"
            autoComplete="off"
            placeholder="apni password dalo"
            value={pass}
            onChange={(e)=> setPass(e.target.value)}
          ></input>
          <label htmlFor="cpass"></label>
          <input
            type="text"
            name="cpass"
            id="cpass"
            autoComplete="off"
            placeholder="apni passworddalo"
            value={pass}
            onChange={(e)=> setPass(e.target.value)}
          ></input>
        </div>
        <div className="form-group form-button">
          <input
            type="submit"
            name="signup"
            id="signup"
            className="form-submit"
            autocomplete="off"
            placeholder=""
            value="Sign In"
            onClick={loginUser}
          />
        </div>
      </div>
    </>
  );
};

export default Login;
