import React, { useState } from "react";

import { NavLink, useNavigate } from "react-router-dom";

const Signup = () => {

   const history = useNavigate();
  
    const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    college:"",
    pass: "",
    cpass: "",
  });

  let name, value;

  const handleInput = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
      setUser({...user, [name]:value,});
      

      
  }

  const PostingData = async(e)=>{
      e.preventDefault();

      const {name, email, phone, college, pass, cpass} = user;
      const res = await fetch('http://localhost:5000/register',{
          method: 'POST',
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(
              {name:name, email:email, phone:phone, college: college, pass:pass, cpass:cpass}
          )
        });

        const data = await res.json();

        if(res.status === 422 || !data){
            window.alert("Registration INvalid!");
            console.log("Registration Invalid!");
        }else{
            window.alert("Registration Successful!");
            console.log("Registration Successful!");
           history('/login');
            
            
        }
       


  }





  return (
    <>
      <div className="signup form">
        <h2 className="form-title"> Sign Up </h2>
        <div className="form-group">

          <form method="POST" className="register-form" id="register-form" >
          <label htmlFor="name"></label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="apna naam dalo"
            value={user.name}
            onChange={handleInput}
          />

          <label htmlFor="name"></label>
          <input
            type="text"
            name="email"
            id="email"
            placeholder="apna email dalo"
            value={user.email}
            onChange={handleInput}
          />

          <label htmlFor="name"></label>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="apna number dalo"
            value={user.phone}
            onChange={handleInput}
          />
          <label htmlFor="name"></label>
          <input
            type="text"
            name="college"
            id="college"
            placeholder="apna college ka naam dalo"
            value={user.college}
            onChange={handleInput}
          />

          <label htmlFor="name"></label>
          <input
            type="password"
            name="pass"
            id="cpass"
            placeholder="apni password dalo"
            value={user.pass}
            onChange={handleInput}
          />

          <label htmlFor="name"></label>
          <input
            type="password"
            name="cpass"
            id="cpass"
            placeholder="apni password confirm karo"
            value={user.cpass}
            onChange={handleInput}
          />
          </form>
        </div>
      



        <div className="form-group form-button">
          <input
            type="submit"
            name="signup"
            id="signup"
            className="form-submit"
            autocomplete="off"
            placeholder=""
            value="register"
            onClick={PostingData}
          />
        </div>
        <NavLink to="/login" className="signin">
          {" "}
          I'hve got an account{" "}
        </NavLink>
      </div>
    </>
  );
};

export default Signup;
