const express = require('express');
const router = express.Router();
require("../day1(connect)/connect");
const User = require("./userSchema");

router.get('/',(req, res) => {
    res.send('hello from the server router');

})

router.post('/register',(req, res) => {

//part 1
    // const {name, email, phone, college, pass, cpass} = req.body;
    // console.log(name);
    // console.log(email);
    // console.log(phone);
    // console.log(college);
    // console.log(pass);
    // console.log(cpass);

//part 2 (form filling err)
    const {name, email, phone, college, pass, cpass} = req.body;
    if(!name || !email || !phone || !college || !pass || !cpass){
        return res.status(422).json({error: "are bhai pura form to fill karo"}); //to change the error
    }

    User.findOne({email: email})
    .then((userHai)=>{
        if(userHai){
            return res.status(422).json({error: "email already exists"})
        }
        const user = new User({name, email, phone,college, pass, cpass});
        user.save().then(()=>{
            res.status(201).json({message: "user registered successfully"});
        }).catch((err)=> res.status(500).json({error: "failed to register"}));


    })
    .catch(err=>{ console.log(err);});
    // res.json({message: res.body});
})




module.exports = router;