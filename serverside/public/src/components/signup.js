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

      /* <div className="signup form">
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
      </div> */
    
   <>
    <form class="col s12" style={{ margin: "5rem"}}>
      <div class="row">
        <div class="input-field col s20">
       
        <input
            type="text"
            name="name"
            id="name"
           
            value={user.name}
            onChange={handleInput}
          />
          
          <label for="first_name"> Name</label>
        </div>
        </div>
        <div class="row">
        <div class="input-field col s12">
        <input
            type="text"
            name="email"
            id="email"
           
            value={user.email}
            onChange={handleInput}
          />
          <label for="email">Email</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s6">
        <input
            type="text"
            name="phone"
            id="phone"
          
            value={user.phone}
            onChange={handleInput}
          />
          <label for="mobile_no">Phone no.</label>
        </div>
        </div>
      
     
      
      <div class="row">
        <div class="input-field col s12">
        <input
            type="password"
            name="pass"
            id="cpass"
            value={user.pass}
            onChange={handleInput}
          />
          <label for="password">Password</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
        <input
            type="password"
            name="cpass"
            id="cpass"
            value={user.cpass}
            onChange={handleInput}
          />
          <label for="password">Confirm Password</label>
        </div>
      </div>
     
    </form>
    

    <div className="col s12" style={{ margin: "5rem"}}> 
          <button
          style={{
            width: "150px",
            borderRadius: "3px",
            letterSpacing: "1.5px",
         
          }}
            type="submit"
            name="signup"
            id="signup"
            className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            placeholder=""
            value="register"
            onClick={PostingData}>
          Sign IN</button>
        </div>
        <NavLink to="/login" className="signin">
          {" "}
          I'hve got an account{" "}
        </NavLink>
    
    </>
   
  
        

      
  
  );
};

export default Signup;
