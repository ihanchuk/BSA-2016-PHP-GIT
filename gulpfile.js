/* Require section*/
var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    concatCss = require('gulp-concat-css'),
    rename = require("gulp-rename"),
    autoprefixer = require('gulp-autoprefixer');

/* Gulp tasks*/
gulp.task('default', function () {
  return gulp.src('lib/css/*.css')
    .pipe(concatCss("styles/index.css"))
    .pipe(autoprefixer({
			browsers: ['last 6 versions'],
			cascade: false
		}))
    .pipe(cleanCSS({compatibility: 'ie8'}))
     .pipe(rename("styles/index-min.css"))
    .pipe(gulp.dest('.'));
});