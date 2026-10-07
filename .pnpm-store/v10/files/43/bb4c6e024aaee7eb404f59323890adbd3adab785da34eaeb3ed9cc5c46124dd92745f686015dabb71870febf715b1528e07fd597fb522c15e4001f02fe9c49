"use strict";

const {
  validate
} = require('schema-utils'); // @ts-ignore


const schema = require('./options.json');
/** @typedef {import("eslint").ESLint.Options} ESLintOptions */

/** @typedef {import('eslint').ESLint.LintResult} LintResult */

/** @typedef {import('eslint').ESLint.LintResultData} LintResultData */

/**
 * @callback FormatterFunction
 * @param {LintResult[]} results
 * @param {LintResultData=} data
 * @returns {string}
 */

/**
 * @typedef {Object} OutputReport
 * @property {string=} filePath
 * @property {string|FormatterFunction=} formatter
 */

/**
 * @typedef {Object} PluginOptions
 * @property {string=} context
 * @property {boolean=} emitError
 * @property {boolean=} emitWarning
 * @property {string=} eslintPath
 * @property {string|string[]=} exclude
 * @property {string|string[]=} extensions
 * @property {boolean=} failOnError
 * @property {boolean=} failOnWarning
 * @property {string|string[]=} files
 * @property {boolean=} fix
 * @property {string|FormatterFunction=} formatter
 * @property {boolean=} lintDirtyModulesOnly
 * @property {boolean=} quiet
 * @property {OutputReport=} outputReport
 * @property {number|boolean=} threads
 */

/** @typedef {PluginOptions & ESLintOptions} Options */

/**
 * @param {Options} pluginOptions
 * @returns {PluginOptions}
 */


function getOptions(pluginOptions) {
  const options = {
    extensions: 'js',
    emitError: true,
    emitWarning: true,
    failOnError: true,
    ...pluginOptions,
    ...(pluginOptions.quiet ? {
      emitError: true,
      emitWarning: false
    } : {})
  }; // @ts-ignore

  validate(schema, options, {
    name: 'ESLint Webpack Plugin',
    baseDataPath: 'options'
  });
  return options;
}
/**
 * @param {Options} loaderOptions
 * @returns {ESLintOptions}
 */


function getESLintOptions(loaderOptions) {
  const eslintOptions = { ...loaderOptions
  }; // Keep the fix option because it is common to both the loader and ESLint.

  const {
    fix,
    extensions,
    ...eslintOnlyOptions
  } = schema.properties; // No need to guard the for-in because schema.properties has hardcoded keys.
  // eslint-disable-next-line guard-for-in

  for (const option in eslintOnlyOptions) {
    // @ts-ignore
    delete eslintOptions[option];
  }

  return eslintOptions;
}

module.exports = {
  getOptions,
  getESLintOptions
};