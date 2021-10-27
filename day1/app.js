const express = require('express');
const mongoose = require('mongoose');
const app = express();

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
