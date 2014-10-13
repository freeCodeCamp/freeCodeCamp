var gulp = require('gulp'),
    bower = require('bower-main-files'), 
    inject = require('gulp-inject');

gulp.task('inject', function() {
  gulp.src('views/home.jade')
    .pipe(inject(gulp.src(bower()), {
      //ignorePath: '/public'
    }))
    .pipe(gulp.dest('views'));
});


