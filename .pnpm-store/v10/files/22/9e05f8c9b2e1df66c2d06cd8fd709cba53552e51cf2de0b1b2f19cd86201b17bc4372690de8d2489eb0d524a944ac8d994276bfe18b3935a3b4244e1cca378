'use strict';
/**
 * Contains `lookupFiles`, which takes some globs/dirs/options and returns a list of files.
 * @module
 * @private
 */

var fs = require('fs');
var path = require('path');
var glob = require('glob');
var errors = require('../errors');
var createNoFilesMatchPatternError = errors.createNoFilesMatchPatternError;
var createMissingArgumentError = errors.createMissingArgumentError;
const debug = require('debug')('mocha:cli:lookup-files');

/**
 * Determines if pathname would be a "hidden" file (or directory) on UN*X.
 *
 * @description
 * On UN*X, pathnames beginning with a full stop (aka dot) are hidden during
 * typical usage. Dotfiles, plain-text configuration files, are prime examples.
 *
 * @see {@link http://xahlee.info/UnixResource_dir/writ/unix_origin_of_dot_filename.html|Origin of Dot File Names}
 *
 * @private
 * @param {string} pathname - Pathname to check for match.
 * @return {boolean} whether pathname would be considered a hidden file.
 * @example
 * isHiddenOnUnix('.profile'); // => true
 */
const isHiddenOnUnix = pathname => path.basename(pathname).startsWith('.');

/**
 * Determines if pathname has a matching file extension.
 *
 * Supports multi-part extensions.
 *
 * @private
 * @param {string} pathname - Pathname to check for match.
 * @param {string[]} exts - List of file extensions, w/-or-w/o leading period
 * @return {boolean} `true` if file extension matches.
 * @example
 * hasMatchingExtname('foo.html', ['js', 'css']); // false
 * hasMatchingExtname('foo.js', ['.js']); // true
 * hasMatchingExtname('foo.js', ['js']); // ture
 */
const hasMatchingExtname = (pathname, exts = []) =>
  exts
    .map(ext => (ext.startsWith('.') ? ext : `.${ext}`))
    .some(ext => pathname.endsWith(ext));

/**
 * Lookup file names at the given `path`.
 *
 * @description
 * Filenames are returned in _traversal_ order by the OS/filesystem.
 * **Make no assumption that the names will be sorted in any fashion.**
 *
 * @public
 * @alias module:lib/cli.lookupFiles
 * @param {string} filepath - Base path to start searching from.
 * @param {string[]} [extensions=[]] - File extensions to look for.
 * @param {boolean} [recursive=false] - Whether to recurse into subdirectories.
 * @return {string[]} An array of paths.
 * @throws {Error} if no files match pattern.
 * @throws {TypeError} if `filepath` is directory and `extensions` not provided.
 */
module.exports = function lookupFiles(
  filepath,
  extensions = [],
  recursive = false
) {
  const files = [];
  let stat;

  if (!fs.existsSync(filepath)) {
    let pattern;
    if (glob.hasMagic(filepath, {windowsPathsNoEscape: true})) {
      // Handle glob as is without extensions
      pattern = filepath;
    } else {
      // glob pattern e.g. 'filepath+(.js|.ts)'
      const strExtensions = extensions
        .map(ext => (ext.startsWith('.') ? ext : `.${ext}`))
        .join('|');
      pattern = `${filepath}+(${strExtensions})`;
      debug('looking for files using glob pattern: %s', pattern);
    }
    files.push(
      ...glob.sync(pattern, {
        nodir: true,
        windowsPathsNoEscape: true
      })
    );
    if (!files.length) {
      throw createNoFilesMatchPatternError(
        `Cannot find any files matching pattern "${filepath}"`,
        filepath
      );
    }
    return files;
  }

  // Handle file
  try {
    stat = fs.statSync(filepath);
    if (stat.isFile()) {
      return filepath;
    }
  } catch (err) {
    // ignore error
    return;
  }

  // Handle directory
  fs.readdirSync(filepath).forEach(dirent => {
    const pathname = path.join(filepath, dirent);
    let stat;

    try {
      stat = fs.statSync(pathname);
      if (stat.isDirectory()) {
        if (recursive) {
          files.push(...lookupFiles(pathname, extensions, recursive));
        }
        return;
      }
    } catch (ignored) {
      return;
    }
    if (!extensions.length) {
      throw createMissingArgumentError(
        `Argument '${extensions}' required when argument '${filepath}' is a directory`,
        'extensions',
        'array'
      );
    }

    if (
      !stat.isFile() ||
      !hasMatchingExtname(pathname, extensions) ||
      isHiddenOnUnix(pathname)
    ) {
      return;
    }
    files.push(pathname);
  });

  return files;
};
