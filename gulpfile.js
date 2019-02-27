var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var reload = browserSync.reload;

var src = {
  scss: 'app/scss/*.scss',
  css: 'app/css',
  html: 'app/*.html'
};

gulp.task('serve', ['sass'], function() {
  browserSync.init({
    server: './app'
  });

  gulp.watch(src.scss, ['sass']);
  gulp.watch(src.html).on('change', reload);
});

gulp.task('sass', function() {
  return gulp
    .src(src.scss)
    .pipe(sass())
    .pipe(gulp.dest(src.css))
    .pipe(reload({ stream: true }));
});

gulp.task('default', ['serve']);
