const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userSchema =  new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    college: {
        type: String,
        required: true,
    },
    pass: {
        type: String,
        required: true,
    },
    cpass: {
        type: String,
        required: true,

    },
    tokens:[
        {
            token:{
                type: String,
                required: true
            }
        }
    ]

})


//password hashing 
userSchema.pre('save', async function (next){
    console.log('hey! from inside')
    if(this.isModified('pass')){
        var salt = bcrypt.genSaltSync(12);
        this.pass=  bcrypt.hashSync(this.pass,salt);
        this.cpass= bcrypt.hashSync(this.cpass,salt);
       
    }
    next();
})


//generateAuthToken

userSchema.methods.generateAuthToken = async function(){
    try{
        let token = jwt.sign({_id:this._id}, process.env.TOPSECRET_KEY);
        this.token = this.tokens.concat({token: token});
        await this.save();
        return token;


    }catch(err){
        console.log(err);

    }
}


const User = mongoose.model('REGISTRATION', userSchema);

module.exports = User;
