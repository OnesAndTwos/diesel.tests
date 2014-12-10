var gulp = require('gulp');

var dalek = require('gulp-dalek');
var mocha = require('gulp-mocha');
var casperJs = require('gulp-casperjs');

gulp.task('dalek', function () {
  return gulp.src(['dalek/shopping_basket.js'])
      .pipe(dalek({
        browser: ['phantomjs'],
        reporter: ['console']
      }));
});

gulp.task('zombie', function () {
  return gulp.src('zombie/*.js', {read: false})
      .pipe(mocha({timeout: 5000}));
});

gulp.task('casper', function () {
  return gulp.src('casper/*.js')
      .pipe(casperJs({command: 'test'}));
});


