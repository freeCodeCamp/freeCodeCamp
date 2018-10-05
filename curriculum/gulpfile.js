const fs = require('fs-extra');
const gulp = require('gulp');

const { getChallengesForLang } = require('./getChallenges');
const { supportedLangs } = require('./utils');

function generateCurricula(done) {
  const promises = supportedLangs.map(lang => getChallengesForLang(lang));
  return Promise.all(promises)
    .then(allLangCurriculum =>
      allLangCurriculum.reduce(
        (map, current, i) => ({ ...map, [supportedLangs[i]]: current }),
        {}
      )
    )
    .then(curricula =>
      fs.writeFile('./curricula.json', JSON.stringify(curricula))
    )
    .then(done);
}

function watchFiles() {
  return gulp.watch('./challenges/**/*.md', generateCurricula);
}

const defaultTask = gulp.series(generateCurricula, watchFiles);

gulp.task('default', defaultTask);
gulp.task('build', generateCurricula);
