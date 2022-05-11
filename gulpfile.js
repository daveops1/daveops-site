var gulp = require('gulp');
var concat = require('gulp-concat');

const { parallel } = require('gulp');

function javascript(cb) {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/foundation-sites/dist/js/foundation.min.js',
        'node_modules/typed.js/dist/typed.min.js',
        'node_modules/jqcloud2/dist/jqcloud.min.js',
        'node_modules/custombox/dist/custombox.min.js'])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('public/build/js'));
  //cb();
}

function css(cb) {
    return gulp.src([
        'node_modules/foundation-sites/dist/css/foundation-float.min.css',
        'node_modules/normalize.css/normalize.css',
        'node_modules/jqcloud2/dist/jqcloud.min.css',
        'node_modules/custombox/dist/custombox.min.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(gulp.dest('public/build/css'));
  //cb();
}

function html(cb) {
  return gulp.src('*.html')
      .pipe(gulp.dest('public/build'));
//cb();
}

function assets(cb) {
  return gulp.src('assets/*')
      .pipe(gulp.dest('public/build/assets'));
//cb();
}

exports.default = parallel(javascript, css, html, assets);