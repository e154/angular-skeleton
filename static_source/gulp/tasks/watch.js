/**
 * Created by delta54 on 01.12.14.
 */
var gulp = require('gulp'),
    config = require('../config');

gulp.task('watch', function() {

    //  ...
    //================//
    gulp.watch(config.build_coffee_js.watch, function() {
        gulp.run('build_coffee_js');
    });
    gulp.watch(config.build_less.watch, function() {
        gulp.run('build_less');
    });
});
