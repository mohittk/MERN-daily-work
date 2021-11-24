import React from 'react';
import {NavLink} from 'react-router-dom';

const Signup = () =>{
    return(
        <>
        <div className="signup form">
            <h2 className="form-title"> Sign Up </h2>
            <div className="form-group">
                <label htmlFor="name">
                </label>
                <input type="text" name="name" id="name" autoComplete="off" placeholder="apna naam dalo">
                </input>
                <label htmlFor="name">
                </label>
                <input type="text" name="email" id="email" autoComplete="off" placeholder="apna email dalo">
                </input>
                <label htmlFor="name">
                </label>
                <input type="text" name="phoneno" id="phoneno" autoComplete="off" placeholder="apni gf ka number dalo">
                </input>
                <label htmlFor="name">
                </label>
                <input type="text" name="pass" id="cpass" autoComplete="off" placeholder="apni password dalo">
                </input>
                <label htmlFor="name">
                </label>
                <input type="text" name="cpass" id="cpass" autoComplete="off" placeholder="apni passworddalo">
                </input>
            </div>
            <div className="form-group form-button">
                <input type="submit" name="signup" id="signup" className="form-submit" autocomplete="off" placeholder=""
                value="register" />
            </div>
            <NavLink to="/login" className="signin" >   I'hve got an account </NavLink>
        </div>

        </>
    )

}

export default Signup;