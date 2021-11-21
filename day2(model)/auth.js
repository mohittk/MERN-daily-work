const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require("../day1(connect)/connect");
const User = require("./userSchema");

router.get('/',(req, res) => {
    res.send('hello from the server router');

})

//USING PROMISES

// router.post('/register',(req, res) => {

// //part 1
//     // const {name, email, phone, college, pass, cpass} = req.body;
//     // console.log(name);
//     // console.log(email);
//     // console.log(phone);
//     // console.log(college);
//     // console.log(pass);
//     // console.log(cpass);

// //part 2 (form filling err)
//     const {name, email, phone, college, pass, cpass} = req.body;
//     if(!name || !email || !phone || !college || !pass || !cpass){
//         return res.status(422).json({error: "are bhai pura form to fill karo"}); //to change the error
//     }

//     User.findOne({email: email})
//     .then((userHai)=>{
//         if(userHai){
//             return res.status(422).json({error: "email already exists"})
//         }
//         const user = new User({name, email, phone,college, pass, cpass});
//         user.save().then(()=>{
//             res.status(201).json({message: "user registered successfully"});
//         }).catch((err)=> res.status(500).json({error: "failed to register"}));


//     })
//     .catch(err=>{ console.log(err);});

//     // res.json({message: res.body});
// })


router.post('/register',async(req, res) => {



//part 2 (form filling err)
    const {name, email, phone, college, pass, cpass} = req.body;
    if(!name || !email || !phone || !college || !pass || !cpass){
        return res.status(422).json({error: "are chacha pura form to fill karo"}); //to change the error
    }
    try{
        const userHai= await User.findOne({email: email}) 
        if(userHai){
            return res.status(422).json({error: "email registered hai"});
        }
        else if(pass !=  cpass){
            return res.status(422).json({error:"aram se bharo bhai password match nhi ho raha"});
        }
        else{
            const user = new User({name, email, phone,college, pass, cpass});
            await user.save();
        res.status(201).json({message: "user registered successfully"});

        }
        
        
      

        
 
    }
    catch(err){
        console.log(err);

    }
    
})

//login route 
router.post('/signin',async(req, res)=>{
    try{
        let token;
        const {email, pass} = req.body;
        if(!email || !pass){
            return res.status(403).json({error:"are chacha thik se fill karo"})
        }

        const userLogin = await User.findOne({email: email}); ///isme ye check kiya ki email jo hai wo databse se match hua ya nhi
        if(userLogin){
            const isMatching = await bcrypt.compare(pass, userLogin.pass)

            token  = userLogin.generateAuthToken();
            console.log(token);
            if(!isMatching){
            res.status(400).json({error: "invalid credentials"});
            }
            else{
            res.json({message: "user signin successful"})
        }
    }
    else{
        res.status(400).json({error: "invalid credentials"})
    }
         console.log(userLogin);
       
        
    }
    catch(err){console.log(err);}



})



module.exports = router;