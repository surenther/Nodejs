const path = require ('path');
const express = require ('express');
const main = require ('./routes/main');
const users = require ('./routes/users');

const app = express();
app.use(express.static(path.join(__dirname,'public')));

app.use(main);
app.use(users);

app.use ((req,res,next) => {
    res.status(404).sendFile(path.join(__dirname,'views','404.html'));
});

app.listen(3000);