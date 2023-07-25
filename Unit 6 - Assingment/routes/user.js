const express = require('express');
const path = require('path');

const route = express.Router();

const users = [];

route.get('/users',(req,res,next) => {
    res.render('users',{users:users,title:'users'});
});

route.post('/users',(req,res,next) => {
    users.push({user: req.body.user});
    res.redirect('/users');
});

exports.route = route;
exports.users = users;