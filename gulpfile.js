// Registers all gulp tasks
var gulp = require('./gulp')([
    "less", "watch", "browserify", 'clean', "jade", "commonjs"
]);

// REMOVES PUBLIC FOLDER
gulp.task('del', ['clean']);

// BUILDS JADE TEMPLATES 
gulp.task('templates', ['jade']);

gulp.task('build', ['less', 'browserify', 'commonjs']);
gulp.task('default', ['build', 'watch']);