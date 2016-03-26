var webpack = require('webpack-stream');
var gulp = require('gulp');
var webpackConfig = require('./webpack.config.js');
gulp.task('webpack', function() {
  gulp.src('./entry/*.js')
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('./src/'));
});

gulp.task('default',['webpack']);

gulp.watch(['./scss/*','./entryjs/*','./demo/*'],['webpack']);