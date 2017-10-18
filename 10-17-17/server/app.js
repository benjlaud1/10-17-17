const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

// Define port
const port = process.env.PORT || 3001;

// Middleware
app.use(express.static(path.joins(__dirname,'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extened: true}));

app.get('/', function (req, res) {
    res.sendFile('../public/views/index.html');
})

// Spin up server
app.listen(port, function (req, res) {
    console.log('====================================');
    console.log('server listening on port: ', port);
    console.log('====================================');
});