var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: String,
    password: String
});

var users = mongoose.model('users', userSchema);

module.exports = users