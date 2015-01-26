var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');
var webpack = require('webpack');

gulp.task('browserSync', ['startServer'], function () {
  browserSync({
    proxy: 'localhost:' + (process.env.NODE_PORT || 8080)
  });
});

gulp.task('startServer', function () {
  $.nodemon({ script: 'lib/server.js' });
});

gulp.task('browserSyncReload', function () {
  browserSync.reload();
});

gulp.task('6to5', function () {
  gulp.src('src/**/*.{js,jsx}')
    .pipe($.plumber())
    .pipe($['6to5']())
    .pipe(gulp.dest('lib'));
});

gulp.task('webpack', ['6to5'], function (done) {
  var config = require('./webpack.config');

  webpack(config, function (err, stats) {
    if (err) {
      throw new $.util.PluginError("webpack", err);
    }

    $.util.log('[webpack]', stats.toString({ chunks: false }));
    done();
  });
});

gulp.task('watch', ['webpack', 'browserSync'], function () {
  gulp.watch(['src/**/*.{js,jsx}'], ['webpack']);
  gulp.watch(['app/*.html', '.tmp/**/*.js'], ['browserSyncReload']);
});

gulp.task('default', ['watch']);
