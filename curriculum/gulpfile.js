const fs = require('fs-extra');
const gulp = require('gulp');
const through2 = require('through2');

const { locale } = require('../config/env.json');
const { getChallengesForLang } = require('./getChallenges');
const { testedLang } = require('./utils');
const lintMarkdown = require('../tools/scripts/lint');

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
  return gulp.src(globLang(testedLang()), { read: false }).pipe(
    through2.obj(function obj(file, enc, next) {
      lintMarkdown(file, next);
    })
  );
}

const defaultTask = gulp.series(generateCurriculum, watchFiles);

/**
 * Helper functions
 **/

function globLang(lang) {
  return `./challenges/${lang}/**/*.md`;
}

gulp.task('default', defaultTask);
gulp.task('build', generateCurriculum);
gulp.task('lint', lint);
