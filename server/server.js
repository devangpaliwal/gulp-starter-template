var express = require('express');
var path = require('path');

var app = express();
app.set('view engine', 'jade');

var jadeTmlp = require("../public/jade/hello");



app.use(express.static(__dirname + '/../public/'));

app.get('/', function(req, res) {
    var str = jadeTmlp();
    res.send(str);
});

app.get('/client', function(req, res) {
    res.sendfile(path.resolve('html/index.html'));
});




app.listen(3000);