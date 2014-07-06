var gulp = require('gulp');
var fs = require('fs');

var prefix = "var jade = require('jade'); console.log(jade); module.exports = ";

var mkdirp = require('mkdirp');

module.exports = function() {
    mkdirp.sync(__dirname + '/../../public/jade/');
    var files = getFiles(__dirname + '/../../public/jade/');
    files.forEach(function(filePath) {
        var data = fs.readFileSync(filePath, "utf8");
        fs.writeFileSync(filePath, prefix + data.toString(), "utf8");
    });
}

function getFiles(dir, files_) {
    files_ = files_ || [];
    if (typeof files_ === 'undefined ') files_ = [];
    var files = fs.readdirSync(dir);
    for (var i in files) {
        if (!files.hasOwnProperty(i)) continue;
        var name = dir + '/' + files[i];
        if (fs.statSync(name).isDirectory()) {
            getFiles(name, files_);
        } else {
            files_.push(name);
        }
    }
    return files_;
}