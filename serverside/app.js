const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const app = express();


const DB = process.env.DATABASE;


dotenv.config({path: './config.env'});

require('./connection/connect');

app.use(express.json());
app.use(cors());
app.use(require('./model/auth'));

const User = (require('./model/userSchema')); 

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

app.listen(5000, ()=>{
    console.log('listening on port 5000'); 
})

