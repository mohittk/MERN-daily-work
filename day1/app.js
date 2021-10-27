const express = require('express');
const mongoose = require('mongoose');
const app = express();

const DB = 'mongodb+srv://Mohit:mk142434@cluster0.dc5ep.mongodb.net/prac1?retryWrites=true&w=majority';
mongoose.connect(DB).then(()=>{
    console.log('connection successful');
}). catch(err => console.log(err));
//middlewareb 

const middleware = (req, res, next) => {
    console.log('hello middleware');
    next();
    

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