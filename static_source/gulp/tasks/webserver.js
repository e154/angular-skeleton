var gulp = require('gulp'),
    connect = require('gulp-connect'),
    config = require('../config').webserver;

gulp.task('webserver', function() {
    connect.server({
        root: config.root,
        livereload: config.livereload,
        port: config.port
    });

    console.log('Server listening on http://localhost:'+config.port);
});