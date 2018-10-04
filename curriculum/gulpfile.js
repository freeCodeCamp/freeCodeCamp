const gulp = require('gulp');
const babel = require('gulp-babel');
const rename = require('gulp-rename');

gulp.task('babel-getChallenges', () =>
  gulp.src('./getChallenges.js')
    .pipe(babel({
      presets: ['env']
    }))
    .pipe(gulp.dest('dist'))
);

gulp.task('babel', ['babel-getChallenges'], () =>
  gulp.src('./package-entry.js')
  .pipe(rename('./index.js'))
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(gulp.dest('dist/'))
);
