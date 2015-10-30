var source = "static_source";
var pub = "public";
var tmp = "tmp";

module.exports = {
    build_lib_js: {
        filename: 'lib.min.js',
        paths: {
            bowerDirectory: source + '/bower_components',
            bowerrc: '.bowerrc',
            bowerJson: 'bower.json'
        },
        dest: source + '/js'
    },
    build_coffee_js: {
        filename: 'app.min.js',
        source: [
            source + "/app/app.coffee",
            source + "/app/services/**/*.coffee",
            source + "/app/directives/**/*.coffee",
            source + "/app/controllers/**/*.coffee"
        ],
        watch: source + "/app/**/*.coffee",
        dest: source + '/js'
    },
    build_lib_css: {
        filename: 'lib.min.css',
        paths: {
            bowerDirectory: source + '/bower_components',
            bowerrc: '.bowerrc',
            bowerJson: 'bower.json'
        },
        dest: source + '/css'
    },
    build_less: {
        filename: 'app.min.css',
        source: [
            source + '/less/bootstrap.less',
            source + '/less/bootstrap-theme.less',
            source + '/less/app.less'
        ],
        dest: source + '/css',
        watch: source + '/less/**/*.less'
    },
    webserver: {
        root: [ source + '/templates', source],
        livereload: true,
        port: 8080
    }
};
