const express = require ('express');

const app = express();

app.use ('/users',(req,res,next) => {
    res.send ('<h1> User Page</h1>');
});

app.use ('/',(req,res,next) => {
    res.send ('<h1> Hello from Express</h1>');
});

app.listen (3000)