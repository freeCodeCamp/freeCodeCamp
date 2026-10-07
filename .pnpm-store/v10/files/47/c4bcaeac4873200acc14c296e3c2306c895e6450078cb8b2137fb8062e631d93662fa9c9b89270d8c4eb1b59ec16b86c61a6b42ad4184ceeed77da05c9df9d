"use strict";

/** @typedef {import('eslint').ESLint} ESLint */

/** @typedef {import('eslint').ESLint.Options} ESLintOptions */
Object.assign(module.exports, {
  lintFiles,
  setup
});
/** @type {{ new (arg0: import("eslint").ESLint.Options): import("eslint").ESLint; outputFixes: (arg0: import("eslint").ESLint.LintResult[]) => any; }} */

let ESLint;
/** @type {ESLint} */

let eslint;
/** @type {boolean} */

let fix;
/**
 * @typedef {object} setupOptions
 * @property {string=} eslintPath - import path of eslint
 * @property {ESLintOptions=} eslintOptions - linter options
 *
 * @param {setupOptions} arg0 - setup worker
 */

function setup({
  eslintPath,
  eslintOptions = {}
}) {
  fix = !!(eslintOptions && eslintOptions.fix);
  ({
    ESLint
  } = require(eslintPath || 'eslint'));
  eslint = new ESLint(eslintOptions);
}
/**
 * @param {string | string[]} files
 */


async function lintFiles(files) {
  const result = await eslint.lintFiles(files); // if enabled, use eslint autofixing where possible

  if (fix) {
    await ESLint.outputFixes(result);
  }

  return result;
}