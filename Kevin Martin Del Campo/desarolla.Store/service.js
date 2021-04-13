const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const PORT = 666;

const uri = "mongodb+srv://kmcf:spgg2021@cluster0.lh9dp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, error => {
    if(error) {
        console.log('Error connecting to the database');
        console.log(error);
    } else {
        console.log('Succesfully connected to the mongo database server (Cluster)');
        console.log('Server cluster: ' + mongoose.connection.host);
        console.log('Server cluster Port: ' + mongoose.connection.port);
    }
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var routerUsers = require('./routers/users');
app.use('/users', routerUsers);

var routerProducts = require('./routers/products');
app.use('/products', routerProducts);

app.listen(PORT);