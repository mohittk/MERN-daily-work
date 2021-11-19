const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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

    }

})


//password hashing 

userSchema.pre('save', async function (next){
    console.log('hey! from inside')
    if(this.isModified('pass')){
        var salt = bcrypt.genSaltSync(12);
        this.pass=bcrypt.hashSync(this.pass,salt);
        this.cpass=bcrypt.hashSync(this.cpass,salt);
      
    }
    next();
})

const User = mongoose.model('REGISTRATION', userSchema);

module.exports = User;
