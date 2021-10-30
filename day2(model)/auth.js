const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.send('hello from the server router');

})

router.post('/register',(req, res) => {
    const {name, email, phone, college, pass, cpass} = req.body;
    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(college);
    console.log(pass);
    console.log(cpass);
    res.send("my registerrrrrr page");
    // res.json({message: res.body});
})




module.exports = router;