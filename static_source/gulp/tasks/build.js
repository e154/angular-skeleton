/**
 * Created by delta54 on 01.12.14.
 */
var gulp = require('gulp'),
    runSequence = require('run-sequence');

// build public dir <develop:mode>
gulp.task('default', function(cb) {
    runSequence(
        'build_lib_js',
        'build_coffee_js',
        'build_lib_css',
        'build_less',
        'webserver',
        'watch'
    );
});

gulp.task('pack', function(cb) {
    runSequence(
        'build_lib_js',
        'build_coffee_js',
        'build_lib_css',
        'build_less'
    );
});
