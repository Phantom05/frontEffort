const gulp = require('gulp');
const uglify = require('gulp-uglify');
const minifyhtml = require('gulp-minify-html');
const sass = require('gulp-sass');
const babel = require('gulp-babel');
const uglifycss =require('gulp-uglifycss');
const concat = require('gulp-concat');
const imagemin = require('gulp-imagemin');

const src='public/src';
const dist='public/dist';

const srcPaths = {
  js: src+'/assets/javascript/*.js',
  scss:src+'/assets/scss/*.scss',
  html:src+'/assets/**/*.html',
  imgPng:src+'/assets/image/*.png',
  imgJpg:src+'/assets/image/*.jpg',
};
const distPaths = {
  js: dist+'/assets/javascript/extra',
  scss:dist+'/assets/scss/',
  html:dist+'/assets/',
  img:dist+'/assets/image/',
  mcss:dist+'/assets/stylesheets/'
};

gulp.task('minifyhtml',function(){
  return gulp.src(srcPaths.html)
  .pipe(minifyhtml())
  .pipe(gulp.dest(distPaths.html+'test'))
});

gulp.task('babel',function(){
  return gulp.src(srcPaths.js)
  .pipe(babel())
  .pipe(gulp.dest(dist+'/assets/javascript/extra'))
});

gulp.task('default',['babel','minifyhtml']);