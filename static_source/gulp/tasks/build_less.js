/**
 * Created by delta54 on 01.12.14.
 */
var gulp = require('gulp'),
    conf = require('../config').build_less,
    less = require('gulp-less'),
    concat = require('gulp-concat');

gulp.task('build_less', function() {
    return gulp.src(conf.source)
        .pipe(concat(conf.filename))
        .pipe(less())
        .on('error',function(e){console.log(e);})
        .pipe(gulp.dest(conf.dest));
});