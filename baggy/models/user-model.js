const mongoose = require('mongoose');

mongoose. connect ("mongodb://127.0.0.1:27017/baggy")

const userSchema = mongoose.Schema({
    fullname : String,
email  : String,
password  : String,
cart  : [],
isadmin : Boolean,
order : [],
contact : number,
picture : String

})

module.exports = mongoose.model("user" , userSchema);

