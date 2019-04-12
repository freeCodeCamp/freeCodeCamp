const fs = require('fs-extra');
const gulp = require('gulp');
const through2 = require('through2');
const markdownlint = require('markdownlint');

const { locale } = require('../config/env.json');
const { getChallengesForLang } = require('./getChallenges');
const { testedLangs } = require('./utils');
const lintYAML = require('./tools/markdown-yaml');
const lintConfig = require('./tools/.markdownlintrc.js');

/**
 * Tasks
 **/

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

function lint() {
  return gulp.src(globLangs(testedLangs()), { read: false }).pipe(
    through2.obj(function obj(file, enc, next) {
      const options = {
        files: [file.path],
        config: lintConfig,
        customRules: [lintYAML]
      };
      markdownlint(options, function callback(err, result) {
        const resultString = (result || '').toString();
        if (resultString) {
          process.exitCode = 1;
          console.log(resultString);
        }
        next(err, file);
      });
    })
  );
}

const defaultTask = gulp.series(generateCurriculum, watchFiles);

/**
 * Helper functions
 **/

function globLangs(langs) {
  return langs.map(lang => `./challenges/${lang}/**/*.md`);
}

gulp.task('default', defaultTask);
gulp.task('build', generateCurriculum);
gulp.task('lint', lint);
