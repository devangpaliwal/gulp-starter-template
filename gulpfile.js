// Registers all gulp tasks
var gulp = require('./gulp')([
    "less", "watch", "browserify", 'clean', "jade", "commonjs", "public"
]);

var runSequence = require('run-sequence');
// REMOVES PUBLIC FOLDER
gulp.task('del', ['clean']);

// BUILDS JADE TEMPLATES 
gulp.task('templates', function() {
    runSequence('public', 'jade', 'commonjs');
});

gulp.task('build', function() {
    runSequence('templates', 'less', 'browserify');
});


gulp.task('default', ['build', 'watch']);