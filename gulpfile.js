var gulp = require('gulp');
var concat = require('gulp-concat');

const { parallel } = require('gulp');

function javascript(cb) {
    return gulp.src([
        'node_modules/jquery/dist/jquery.min.js',
        'node_modules/foundation-sites/dist/js/foundation.min.js',
        'node_modules/typed.js/dist/typed.min.js',
        'node_modules/jqcloud2/dist/jqcloud.min.js',
        'node_modules/custombox/dist/custombox.min.js',
        'assets/scripts/bootstrap.min.js',
        'assets/scripts/jquery.isonscreen.js',
        'assets/scripts/jqueryanimateNumber.min.js',
        'assets/scripts/owl.carousel.min.js',
        //'assets/scripts/jquery.actual.min.js',
        'assets/scripts/app.js',])
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('public/build/js'));
  //cb();
}

function javascript2(cb) {
  return gulp.src([
      'assets/scripts/jquery-2.1.3.min.js',
      'assets/scripts/bootstrap.min.js',
      'assets/scripts/jquery.actual.min.js',
      'assets/scripts/isotope.pkgd.min.js',
      'assets/scripts/owl.carousel.min.js',
      'assets/scripts/jquery.isonscreen.js',
      'assets/scripts/main.min.js'])
      .pipe(concat('bundle.js'))
      .pipe(gulp.dest('public/build/js2'));
//cb();
}

function css(cb) {
    return gulp.src([
        'node_modules/foundation-sites/dist/css/foundation-float.min.css',
        'node_modules/normalize.css/normalize.css',
        'node_modules/jqcloud2/dist/jqcloud.min.css',
        'node_modules/custombox/dist/custombox.min.css',
        'assets/styles/styles.css',
        'assets/styles/main.css'])
        .pipe(concat('stylesheet.css'))
        .pipe(gulp.dest('public/build/css'));
  //cb();
}

function css2(cb) {
  return gulp.src([
      'assets/styles/owl.carousel.css',
      'assets/styles/owl.theme.min.css',
      'assets/styles/animate.css'])
      .pipe(concat('stylesheet.css'))
      .pipe(gulp.dest('public/build/css2'));
//cb();
}

function html(cb) {
  return gulp.src(['*.html', 'CNAME'])
      .pipe(gulp.dest('public/build'));
//cb();
}

function fonts(cb) {
  return gulp.src(['assets/fonts/foundation-icons/*'])
      .pipe(gulp.dest('public/build/assets/fonts/foundation-icons'));
//cb();
}

function maps(cb) {
  return gulp.src('node_modules/foundation-sites/dist/css/foundation-float.min.css.map')
      .pipe(gulp.dest('public/build/css'));
//cb();
}

function assets(cb) {
  return gulp.src('assets/*')
      .pipe(gulp.dest('public/build/assets'));
//cb();
}

function images(cb) {
  return gulp.src('assets/images/**')
      .pipe(gulp.dest('public/build/assets/images'));
//cb();
}

exports.default = parallel(javascript, javascript2, css, css2, html, assets, fonts, images, maps);