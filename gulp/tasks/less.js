var gless = require('gulp-less'),
    size = require('gulp-filesize'),
    gulp = require('gulp'),
    path = require('path'),
    gutil = require('gulp-util');

module.exports = function() {
    return gulp.src(__dirname + '/../../less/**/*.less')
        .pipe(gless({
            paths: [path.join(__dirname, 'less', 'includes')]
        }))
        .pipe(gulp.dest(__dirname + '/../../public/css'))
        .pipe(size())
        .on('error', gutil.log);
}