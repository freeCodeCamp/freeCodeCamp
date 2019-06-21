const gulp = require('gulp');
const through2 = require('through2');

const { testedLangs } = require('../../curriculum/utils');
const lintMarkdown = require('./lint-guide');

/**
 * Tasks
 **/

function lint() {
  return gulp.src(globLangs(testedLangs()), { read: false }).pipe(
    through2.obj(function obj(file, enc, next) {
      lintMarkdown(file, next);
    })
  );
}

/**
 * Helper functions
 **/

function globLangs(langs) {
  return langs.map(lang => `../../guide/${lang}/**/*.md`);
}

gulp.task('lint', lint);
