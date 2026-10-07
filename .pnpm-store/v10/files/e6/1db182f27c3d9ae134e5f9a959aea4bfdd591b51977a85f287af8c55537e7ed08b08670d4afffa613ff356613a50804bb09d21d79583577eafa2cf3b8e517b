'use strict'
// Copyright (c) 2018 inspiredware

var path = require('path')
var pkg = require(path.resolve('package.json'))

var versionArray = process.version
  .substr(1)
  .replace(/-.*$/, '')
  .split('.')
  .map(function (item) {
    return +item
  })

/**
 *
 * A set of utilities to assist developers of tools that build
 * [N-API](https://nodejs.org/api/n-api.html#n_api_n_api) native add-ons.
 *
 * The main repository can be found
 * [here](https://github.com/inspiredware/napi-build-utils#napi-build-utils).
 *
 * @module napi-build-utils
 */

/**
 * Implements a consistent name of `napi` for N-API runtimes.
 *
 * @param {string} runtime The runtime string.
 * @returns {boolean}
 */
exports.isNapiRuntime = function (runtime) {
  return runtime === 'napi'
}

/**
 * Determines whether the specified N-API version is supported
 * by both the currently running Node instance and the package.
 *
 * @param {string} napiVersion The N-API version to check.
 * @returns {boolean}
 */
exports.isSupportedVersion = function (napiVersion) {
  var version = parseInt(napiVersion, 10)
  return version <= exports.getNapiVersion() && exports.packageSupportsVersion(version)
}

/**
 * Determines whether the specified N-API version is supported by the package.
 * The N-API version must be present in the `package.json`
 * `binary.napi_versions` array.
 *
 * @param {number} napiVersion The N-API version to check.
 * @returns {boolean}
 * @private
 */
exports.packageSupportsVersion = function (napiVersion) {
  if (pkg.binary && pkg.binary.napi_versions &&
      pkg.binary.napi_versions instanceof Array) { // integer array
    for (var i = 0; i < pkg.binary.napi_versions.length; i++) {
      if (pkg.binary.napi_versions[i] === napiVersion) return true
    };
  };
  return false
}

/**
 * Issues a warning to the supplied log if the N-API version is not supported
 * by the current Node instance or if the N-API version is not supported
 * by the package.
 *
 * @param {string} napiVersion The N-API version to check.
 * @param {Object} log The log object to which the warnings are to be issued.
 * Must implement the `warn` method.
 */
exports.logUnsupportedVersion = function (napiVersion, log) {
  if (!exports.isSupportedVersion(napiVersion)) {
    if (exports.packageSupportsVersion(napiVersion)) {
      log.warn('This Node instance does not support N-API version ' + napiVersion)
    } else {
      log.warn('This package does not support N-API version ' + napiVersion)
    }
  }
}

/**
 * Issues warnings to the supplied log for those N-API versions not supported
 * by the N-API runtime or the package.
 *
 * Note that this function is specific to the
 * [`prebuild`](https://github.com/prebuild/prebuild#prebuild) package.
 *
 * `target` is the list of targets to be built and is determined in one of
 * three ways from the command line arguments:
 * (1) `--target` specifies a specific target to build.
 * (2) `--all` specifies all N-API versions supported by the package.
 * (3) Neither of these specifies to build the single "best version available."
 *
 * `prebuild` is an array of objects in the form `{runtime: 'napi', target: '2'}`.
 * The array contains the list of N-API versions that are supported by both the
 * package being built and the currently running Node instance.
 *
 * The objective of this function is to issue a warning for those items that appear
 * in the `target` argument but not in the `prebuild` argument.
 * If a specific target is supported by the package (`packageSupportsVersion`) but
 * but note in `prebuild`, the assumption is that the target is not supported by
 * Node.
 *
 * @param {(Array<string>|string)} target The N-API version(s) to check. Target is
 * @param {Array<Object>} prebuild A config object created by the `prebuild` package.
 * @param {Object} log The log object to which the warnings are to be issued.
 * Must implement the `warn` method.
 * @private
 */
exports.logMissingNapiVersions = function (target, prebuild, log) {
  if (exports.getNapiBuildVersions()) {
    var targets = [].concat(target)
    targets.forEach(function (napiVersion) {
      if (!prebuildExists(prebuild, napiVersion)) {
        if (exports.packageSupportsVersion(parseInt(napiVersion, 10))) {
          log.warn('This Node instance does not support N-API version ' + napiVersion)
        } else {
          log.warn('This package does not support N-API version ' + napiVersion)
        }
      }
    })
  } else {
    log.error('Builds with runtime \'napi\' require a binary.napi_versions ' +
              'property on the package.json file')
  }
}

/**
 * Determines whether the specified N-API version exists in the prebuild
 * configuration object.
 *
 * Note that this function is specific to the `prebuild` and `prebuild-install`
 * packages.
 *
 * @param {Object} prebuild A config object created by the `prebuild` package.
 * @param {string} napiVersion The N-APi version to be checked.
 * @return {boolean}
 * @private
 */
var prebuildExists = function (prebuild, napiVersion) {
  if (prebuild) {
    for (var i = 0; i < prebuild.length; i++) {
      if (prebuild[i].target === napiVersion) return true
    }
  }
  return false
}

/**
 * Returns the best N-API version to build given the highest N-API
 * version supported by the current Node instance and the N-API versions
 * supported by the package, or undefined if a suitable N-API version
 * cannot be determined.
 *
 * The best build version is the greatest N-API version supported by
 * the package that is less than or equal to the highest N-API version
 * supported by the current Node instance.
 *
 * @returns {number|undefined}
 */
exports.getBestNapiBuildVersion = function () {
  var bestNapiBuildVersion = 0
  var napiBuildVersions = exports.getNapiBuildVersions(pkg) // array of integer strings
  if (napiBuildVersions) {
    var ourNapiVersion = exports.getNapiVersion()
    napiBuildVersions.forEach(function (napiBuildVersionStr) {
      var napiBuildVersion = parseInt(napiBuildVersionStr, 10)
      if (napiBuildVersion > bestNapiBuildVersion &&
        napiBuildVersion <= ourNapiVersion) {
        bestNapiBuildVersion = napiBuildVersion
      }
    })
  }
  return bestNapiBuildVersion === 0 ? undefined : bestNapiBuildVersion
}

/**
 * Returns an array of N-API versions supported by the package.
 *
 * @returns {Array<string>|undefined}
 */
exports.getNapiBuildVersions = function () {
  var napiBuildVersions = []
  // remove duplicates, convert to text
  if (pkg.binary && pkg.binary.napi_versions) {
    pkg.binary.napi_versions.forEach(function (napiVersion) {
      var duplicated = napiBuildVersions.indexOf('' + napiVersion) !== -1
      if (!duplicated) {
        napiBuildVersions.push('' + napiVersion)
      }
    })
  }
  return napiBuildVersions.length ? napiBuildVersions : undefined
}

/**
 * Returns the highest N-API version supported by the current node instance
 * or undefined if N-API is not supported.
 *
 * @returns {string|undefined}
 */
exports.getNapiVersion = function () {
  var version = process.versions.napi // integer string, can be undefined
  if (!version) { // this code should never need to be updated
    if (versionArray[0] === 9 && versionArray[1] >= 3) version = '2' // 9.3.0+
    else if (versionArray[0] === 8) version = '1' // 8.0.0+
  }
  return version
}
