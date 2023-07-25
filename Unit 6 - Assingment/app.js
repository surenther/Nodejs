const express = require ('express');
const bodyParser = require('body-parser');


const inputData = require ('./routes/input');
const userData = require ('./routes/user');

const app = express();

app.set('view engine','ejs');
app.set('views','views');

app.use(bodyParser.urlencoded({extended: false}));

app.use(inputData.route);
app.use(userData.route);

app.listen (3000);