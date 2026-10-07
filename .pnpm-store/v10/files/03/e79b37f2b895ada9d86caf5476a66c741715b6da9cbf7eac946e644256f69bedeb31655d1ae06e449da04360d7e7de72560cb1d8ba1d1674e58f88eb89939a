'use strict'

const { readdir: _readdir, readdirSync } = require('fs')
const { platform } = require('os')
const { isAbsolute, normalize } = require('path')
const { promisify: pify } = require('util')

const readdir = pify(_readdir)
const isWindows = platform() === 'win32'
const delimiter = isWindows ? '\\' : '/'

module.exports = {
  trueCasePath: _trueCasePath({ sync: false }),
  trueCasePathSync: _trueCasePath({ sync: true })
}

function getRelevantFilePathSegments(filePath) {
  return filePath.split(delimiter).filter((s) => s !== '')
}

function escapeString(str) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

function matchCaseInsensitive(fileOrDirectory, directoryContents, filePath) {
  const caseInsensitiveRegex = new RegExp(
    `^${escapeString(fileOrDirectory)}$`,
    'i'
  )
  for (const file of directoryContents) {
    if (caseInsensitiveRegex.test(file)) return file
  }
  throw new Error(
    `[true-case-path]: Called with ${filePath}, but no matching file exists`
  )
}

function _trueCasePath({ sync }) {
  return (filePath, basePath) => {
    if (basePath) {
      if (!isAbsolute(basePath)) {
        throw new Error(
          `[true-case-path]: basePath argument must be absolute. Received "${basePath}"`
        )
      }
      basePath = normalize(basePath)
    }
    filePath = normalize(filePath)
    const segments = getRelevantFilePathSegments(filePath)
    if (isAbsolute(filePath)) {
      if (basePath) {
        throw new Error(
          '[true-case-path]: filePath must be relative when used with basePath'
        )
      }
      basePath = isWindows
        ? segments.shift().toUpperCase() // drive letter
        : ''
    } else if (!basePath) {
      basePath = process.cwd()
    }
    return sync
      ? iterateSync(basePath, filePath, segments)
      : iterateAsync(basePath, filePath, segments)
  }
}

function iterateSync(basePath, filePath, segments) {
  return segments.reduce(
    (realPath, fileOrDirectory) =>
      realPath +
      delimiter +
      matchCaseInsensitive(
        fileOrDirectory,
        readdirSync(realPath + delimiter),
        filePath
      ),
    basePath
  )
}

async function iterateAsync(basePath, filePath, segments) {
  return await segments.reduce(
    async (realPathPromise, fileOrDirectory) =>
      (await realPathPromise) +
      delimiter +
      matchCaseInsensitive(
        fileOrDirectory,
        await readdir((await realPathPromise) + delimiter),
        filePath
      ),
    basePath
  )
}
