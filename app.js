const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();


const DB = process.env.DATABASE;


dotenv.config({path: './config.env'});
require('./day1(connect)/connect');

app.use(express.json());
app.use(require('./day2(model)/auth'));

const User = (require('./day2(model)/userSchema')); 

mongoose.connect(DB, { useNewUrlParser: true }).then(()=>{ 
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

app.listen(3000, ()=>{
    console.log('listening on port 3000'); 
})
