var gulp = require('gulp'),
    sass = require('gulp-ruby-sass'),
    uglifyCss = require('gulp-uglifycss'),
    notify = require('gulp-notify');

gulp.task('styles', function(){
  sass('scss/style.scss', {style: 'expanded'})
      .pipe(uglifyCss())
      .pipe(gulp.dest('css'))
      .pipe(notify('Styles have been compiled'));
});

gulp.task('watch', function(){
  gulp.watch('scss/*.scss', ['styles']);
});

gulp.task('default', [styles]);