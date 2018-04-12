const User = require('../models/user.model')
const jwt = require('jsonwebtoken')

module.exports = {
    signUp : function(req, res) {
        let newUser = new User({
           email: req.body.email,
           password: req.body.password
        })

        newUser.save(function(err){
            if(err) {
                res.status(500).json({
                    message: "Sign up user fail",
                    err: err
                })
            } else {
                res.status(201).json({
                    message: "success sign user up",
                })
            }
        })
    },

    signIn: function(req, res) {
        User.findOne({
            email: req.body.email
        }).exec()
        .then(function(user){
            let token = jwt.sign({ email: user.email }, process.env.SECRET);
            if(user.password === req.body.password) {
                res.status(200).json({
                    message: "sign in succeed",
                    data: user,
                    token: token
                })
            } else {
                res.status(400).json({
                    message: 'wrong username / password'
                })
            }
        })
        .catch(function(err){
            res.status(500).json({
                message: "fail to obtain user",
                err: err
            })
        })
    }
}