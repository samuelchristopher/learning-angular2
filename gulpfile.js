var gulp       = require('gulp');
var ts         = require('gulp-typescript');
var connect    = require('gulp-connect');
var stream     = require('vinyl-source-stream');
var browserify = require('browserify');

gulp.task('ts', function() {
  var config = {
    out: 'ts.js'
  };
  return gulp.src('src/ts/**/*.ts')
        .pipe(ts(config))
        .pipe(gulp.dest('build'))
        .pipe(connect.reload());
});

gulp.task('browserify', function() {
  return browserify('main.js', { debug: true })
        .bundle()
        .pipe(stream('bundle.js'))
        .pipe(gulp.dest('public/js'))
        .pipe(connect.reload());
});

gulp.task('connect', function () {
  connect.server({
    root: 'public',
    livereload: true
  });
});


gulp.task('watch', function() {
  gulp.watch('src/ts/**/*.ts', ['ts']);
});


gulp.task('default', ['ts', 'browserify', 'connect', 'watch']);
