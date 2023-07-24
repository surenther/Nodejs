const express = require ('express');

const app = express();

app.use('/add-product',(req,res,next) => {
    console.log ('In the Another middleware');
    res.send('<h1>The add Productpage</h1>');
});

app.use('/',(req,res,next) => {
    console.log ('In the Another middleware');
    res.send('<h1>Hello from Express</h1>');
});

app.listen (3000)