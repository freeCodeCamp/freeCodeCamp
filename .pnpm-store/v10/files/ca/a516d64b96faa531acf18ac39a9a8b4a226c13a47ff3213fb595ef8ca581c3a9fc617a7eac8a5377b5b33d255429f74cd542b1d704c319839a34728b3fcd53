/**
 * Reimplementation of "normalize-path"
 * @see https://github.com/jonschlinkert/normalize-path/blob/52c3a95ebebc2d98c1ad7606cbafa7e658656899/index.js
 */

/*!
 * normalize-path <https://github.com/jonschlinkert/normalize-path>
 *
 * Copyright (c) 2014-2018, Jon Schlinkert.
 * Released under the MIT License.
 */

import path from 'node:path'

/**
 * A file starting with \\?\
 * @see https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#win32-file-namespaces
 */
const WIN32_FILE_NS = '\\\\?\\'

/**
 * A file starting with \\.\
 * @see https://learn.microsoft.com/en-us/windows/win32/fileio/naming-a-file#win32-file-namespaces
 */
const WIN32_DEVICE_NS = '\\\\.\\'

/**
 * Normalize input file path to use POSIX separators
 * @param {String} input
 * @returns String
 */
export const normalizePath = (input) => {
  if (input === path.posix.sep || input === path.win32.sep) {
    return path.posix.sep
  }

  let normalized = input.split(/[/\\]+/).join(path.posix.sep)

  /** Handle win32 Namespaced paths by changing e.g. \\.\ to //./ */
  if (input.startsWith(WIN32_FILE_NS) || input.startsWith(WIN32_DEVICE_NS)) {
    normalized = normalized.replace(/^\/(\.|\?)/, '//$1')
  }

  /** Remove trailing slash */
  if (normalized.endsWith(path.posix.sep)) {
    normalized = normalized.slice(0, -1)
  }

  return normalized
}
