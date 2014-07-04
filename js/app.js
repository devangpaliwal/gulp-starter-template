var jade = require("jade");
var jadeTmlp = require("../public/jade/hello");

var $ = require('jquery');


var html = jadeTmlp();

$(".dummy").html(html);