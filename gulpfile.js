// VARIABLES
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('gulp-autoprefixer');
var connect = require('gulp-connect');
var webserver = require('gulp-webserver');
var lib = require('bower-files')();
var express = require('express');

var app = express();

/*Path Files*/
var paths = {
    index: 'www/index.html',
    htmlTemplates: ['www/*.html'],
    vendorStyles: [
        'www/bower_components/animate.css/animate.min.css',
        'www/bower_components/bootstrap/dist/css/bootstrap.min.css',
    ],
    inputSass: 'www/theme/**/*.scss',
    outputSass: 'www/theme/',
    sassdocOptions: {dest: './www/css/doc'}
};

/**
 * LOCAL SERVER
 * @desc This task is the responsible to run a local server in order to work locally
 */

gulp.task('webserver', function() {
  connect.server({
    root: 'www',
    livereload: true,
    middleware: function(connect, opt) {
      return [app];
    },
    fallback: 'www/index.html'
  });
});

/**
 * SASS to CSS - based on http://www.sitepoint.com/simple-gulpy-workflow-sass/
 * @desc This task take app.scss and transform this to .css,
         after that put each new .css into App_Web -> dist -> styles
 */

var sassOptions = {
    outputStyle: 'compressed',
    errLogToConsole: true
};

gulp.task('sass', function() {
  gulp
    .src(paths.inputSass)
    .pipe(sourcemaps.init())
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(paths.outputSass))
    .pipe(connect.reload());
});

/**
 * HTML RELOAD
 * @desc This task is the responsible to reload browser when one html has changed
 */

gulp.task('html', function () {
  gulp.src(paths.htmlTemplates)
    .pipe(connect.reload());
});

/**
 * BUILD VENDOR CSS
 * @desc This task is responsible for building vendor styles to one vendor css
 */

gulp.task('vendorCSS', function () {
  return gulp.src(paths.vendorStyles)
    .pipe(concat('vendor.min.css'))
    .pipe(gulp.dest('www/build/css'));
});

/**
 * BUILD BOWER JS
 * @desc This task is responsible for building vendor js based on bower files
 */

gulp.task('bowerJS', function () {
  return gulp.src(lib.ext('js').files)
    .pipe(concat('vendor.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('www/build/js'));
});

/**
 * WATCH METHOD
 * @desc This task is the responsible to listen each change on some files in
 * order to reload browser or
 * doing some special task
 */

gulp.task('watch', function() {
    gulp.watch(paths.inputSass, ['sass', 'vendorCSS']);
    gulp.watch([paths.htmlTemplates], ['html']);
});

/* BUILD VENDOR */
gulp.task('build-vendor', ['bowerJS', 'vendorCSS']);
/* LAUNCH LOCALSERVER */
gulp.task('start', ['sass', 'html', 'webserver', 'build-vendor', 'watch']);
