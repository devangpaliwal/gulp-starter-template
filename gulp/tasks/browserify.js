var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');

module.exports = function() {
    browserify(__dirname + '/../../js/app.js')
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(__dirname + '/../../public/js/'));
}