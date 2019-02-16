const fs = require('fs-extra');
const gulp = require('gulp');

const {
  locale
} = require('../config/env.json');

const {
  getChallengesForLang
} = require('./getChallenges');

function generateCurriculum(done) {
  return getChallengesForLang(locale)
    .then(curriculum => {
      fs.ensureFileSync(`./build/curriculum-${locale}.json`);
      fs.writeFile(
        `./build/curriculum-${locale}.json`,
        JSON.stringify(curriculum)
      );
    })
    .then(done);
}

function watchFiles() {
  return gulp.watch('./challenges/**/*.md', generateCurriculum);
}

const defaultTask = gulp.series(generateCurriculum, watchFiles);

gulp.task('default', defaultTask);
gulp.task('build', generateCurriculum);
