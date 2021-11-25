import React from 'react';


const Login = () =>{
    return(
        <>
         <div className="signinform">
            <h2 className="form-title"> Sign In </h2>
            <div className="form-group">
                
                <label htmlFor="email">
                </label>
                <input type="text" name="email" id="email" autoComplete="off" placeholder="apna email dalo">
                </input>
            
                <label htmlFor="pass">
                </label>
                <input type="text" name="pass" id="pass" autoComplete="off" placeholder="apni password dalo">
                </input>
                <label htmlFor="cpass">
                </label>
                <input type="text" name="cpass" id="cpass" autoComplete="off" placeholder="apni passworddalo">
                </input>
            </div>
            <div className="form-group form-button">
                <input type="submit" name="signup" id="signup" className="form-submit" autocomplete="off" placeholder=""
                value="Sign In" />
            </div>
          
        </div>


        </>
    )

}

export default Login;