const express = require('express');
const router = express.Router();

router.get('/',(req, res) => {
    res.send('hello from the server router');

})

router.post('/register',(req, res) => {
    console.log(req.body);
    res.json({message: res.body});
})



module.exports = router;