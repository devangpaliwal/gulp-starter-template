var gulp = require('gulp');
var jade = require('gulp-jade');

var fs = require('fs');


module.exports = function() {
    return gulp.src(__dirname + '/../../jade/**/*.jade')
        .pipe(jade({
            client: true
        }))
        .pipe(gulp.dest(__dirname + '/../../public/jade/'));

}