import React, { useState, useHistory} from "react";

import { NavLink } from "react-router-dom";

const Signup = () => {
    const history = useHistory;
    const [user, setUser] = useState({
    name: "",
    email: "",
    phoneno: "",
    college:"",
    pass: "",
    cpass: "",
  });

  var name, value;

  const handleInput = (e) => {
      console.log(e);
      name = e.target.name;
      value = e.target.value;
      setUser({...user, [name]:value});

      
  }

  const PostingData = async(e)=>{
      e.preventDefault();

      const {name, email, phone, college, pass, cpass} = user;
      const res = await fetch('/register',{
          method: 'POST',
          Headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(
              {name, email, phone, college, pass, cpass}
          )
        });

        const data = await res.json();

        if(data.status === 422 || data.status !== data ){
            window.alert("Registration INvalid!");
            console.log("Registration Invalid!");
        }else{
            window.alert("Registration Successful!");
            console.log("Registration Successful!");
            history.push("/login");
            
        }
       


  }





  return (
    <>
      <div className="signup form">
        <h2 className="form-title"> Sign Up </h2>
        <div className="form-group">
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
            name="phoneno"
            id="phoneno"
            placeholder="apna number dalo"
            value={user.phoneno}
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
