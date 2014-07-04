var gulp = require('gulp');

module.exports = function() {

    gulp.watch('./less/**/*.less', function() {
        gulp.run('less');
    });

    gulp.watch('./jade/**/*.jade', function() {
        gulp.run('jade');
        gulp.run('commonjs');
    });


    gulp.watch('./js/**/*.js', function() {
        gulp.run('browserify');
    });
}