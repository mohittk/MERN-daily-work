const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();


const DB = process.env.DATABASE;
const PORT = process.env.PORT;

dotenv.config({path: './config.env'});
require('./day1(connect)/connect');
const User = require('./day2(model)/userSchema');


mongoose.connect(DB).then(()=>{
    console.log('connection successful');
}).catch(err => console.log('no connection'));


 
//middleware

const middleware = (req, res, next) => {
    console.log('hello middleware');
}
 
middleware();

app.get('/',(req,res) => {
    res.send(`hello world from mohit`);

}); 

app.get('/about',middleware,(req,res) => {
    res.send(`hello to aboyt world`);
})

app.listen(PORT, ()=>{
    console.log('listening on port 3000'); 
})
