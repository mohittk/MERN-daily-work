const express = require('express');
const router = express.Router();
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
        
        const user = new User({name, email, phone,college, pass, cpass});
        const userRegister = await user.save();
        if(userRegister){
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
        const {email, pass} = req.body;
        if(!email || !pass){
            return res.status(403).json({error:"are chacha thik se fill karo"})
        }

        const userLogin = await User.findOne({email: email});
        console.log(userLogin);
        if(!userLogin){
            res.status(400).json({error: "kuch to gadbad hai"})

        }else{
            res.json({message:"user signed in sucksesfully"})

        }
        




    }
    catch(err){console.log(err);}



})



module.exports = router;