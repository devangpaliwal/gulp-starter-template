var jade = require('jade'); console.log(jade); module.exports = function template(locals) {
var buf = [];
var jade_mixins = {};
var jade_interp;

buf.push("<div id=\"container\" class=\"col\"><p>Jade is a terse and simple\ntemplating language with a\nstrong focus on performance\nand powerful features.</p></div>");;return buf.join("");
}