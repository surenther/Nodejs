const express = require ('express');
const path = require ('path');

const route = express.Router();

route.get('/',(req,res,next) => {
    res.render('input',{title:'input'});
});

exports.route = route;