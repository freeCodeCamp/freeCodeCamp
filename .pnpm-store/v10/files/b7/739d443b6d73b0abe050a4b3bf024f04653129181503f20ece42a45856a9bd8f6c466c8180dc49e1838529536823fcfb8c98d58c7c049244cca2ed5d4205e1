'use strict';

const fs = require('fs');
const path = require('path');
const ansi = require('ansi-colors');
const debug = require('debug')('mocha:cli:run:helpers');
const minimatch = require('minimatch');
const {NO_FILES_MATCH_PATTERN} = require('../errors').constants;
const lookupFiles = require('./lookup-files');
const {castArray} = require('../utils');

/**
 * Exports a function that collects test files from CLI parameters.
 * @see module:lib/cli/run-helpers
 * @see module:lib/cli/watch-run
 * @module
 * @private
 */

/**
 * Smash together an array of test files in the correct order
 * @param {FileCollectionOptions} [opts] - Options
 * @returns {FileCollectionResponse} An object containing a list of files to test and unmatched files.
 * @private
 */
module.exports = ({
  ignore,
  extension,
  file: fileArgs,
  recursive,
  sort,
  spec
} = {}) => {
  const unmatchedSpecFiles = [];
  const specFiles = spec.reduce((specFiles, arg) => {
    try {
      const moreSpecFiles = castArray(lookupFiles(arg, extension, recursive))
        .filter(filename =>
          ignore.every(
            pattern =>
              !minimatch(filename, pattern, {windowsPathsNoEscape: true})
          )
        )
        .map(filename => path.resolve(filename));
      return [...specFiles, ...moreSpecFiles];
    } catch (err) {
      if (err.code === NO_FILES_MATCH_PATTERN) {
        unmatchedSpecFiles.push({message: err.message, pattern: err.pattern});
        return specFiles;
      }

      throw err;
    }
  }, []);

  // check that each file passed in to --file exists

  const unmatchedFiles = [];
  fileArgs.forEach(file => {
    const fileAbsolutePath = path.resolve(file);
    try {
      // Used instead of fs.existsSync to ensure that file-ending less files are still resolved correctly
      require.resolve(fileAbsolutePath);
    } catch (err) {
      if (err.code === 'MODULE_NOT_FOUND') {
        unmatchedFiles.push({
          pattern: file,
          absolutePath: fileAbsolutePath
        });
        return;
      }

      throw err;
    }
  });

  // ensure we don't sort the stuff from fileArgs; order is important!
  if (sort) {
    specFiles.sort();
  }

  // add files given through --file to be ran first
  const files = [
    ...fileArgs.map(filepath => path.resolve(filepath)),
    ...specFiles
  ];
  debug('test files (in order): ', files);

  if (!files.length) {
    // give full message details when only 1 file is missing
    const noneFoundMsg =
      unmatchedSpecFiles.length === 1
        ? `Error: No test files found: ${JSON.stringify(
            unmatchedSpecFiles[0].pattern
          )}` // stringify to print escaped characters raw
        : 'Error: No test files found';
    console.error(ansi.red(noneFoundMsg));
    process.exit(1);
  } else {
    // print messages as a warning
    unmatchedSpecFiles.forEach(warning => {
      console.warn(ansi.yellow(`Warning: ${warning.message}`));
    });
  }

  return {
    files,
    unmatchedFiles
  };
};

/**
 * An object to configure how Mocha gathers test files
 * @private
 * @typedef {Object} FileCollectionOptions
 * @property {string[]} extension - File extensions to use
 * @property {string[]} spec - Files, dirs, globs to run
 * @property {string[]} ignore - Files, dirs, globs to ignore
 * @property {string[]} file - List of additional files to include
 * @property {boolean} recursive - Find files recursively
 * @property {boolean} sort - Sort test files
 */

/**
 * Diagnostic object containing unmatched files
 * @typedef {Object} UnmatchedFile -
 * @property {string} absolutePath - A list of unmatched files derived from the file arguments passed in.
 * @property {string} pattern - A list of unmatched files derived from the file arguments passed in.
 *
 */

/**
 * Response object containing a list of files to test and unmatched files.
 * @typedef {Object} FileCollectionResponse
 * @property {string[]} files - A list of files to test
 * @property {UnmatchedFile[]} unmatchedFiles - A list of unmatched files derived from the file arguments passed in.
 */
