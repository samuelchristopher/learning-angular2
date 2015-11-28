var gulp    = require('gulp');
var ts      = require('gulp-typescript');
var connect = require('gulp-connect');

gulp.task('ts', function() {
  var config = {
    out: 'bundle.js'
  };
  return gulp.src('src/ts/**/*.ts')
        .pipe(ts(config))
        .pipe(gulp.dest('public/js/'))
        connect.reload();
});

gulp.task('connect', function () {
  connect.server({
    root: 'public',
    livereload: true
  });
});


gulp.task('watch', function() {
  gulp.watch('ts/**/*.ts', ['ts']);
});

gulp.task('default', ['ts', 'connect', 'watch']);
