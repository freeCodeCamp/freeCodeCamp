"use strict";

const {
  inspect,
  types
} = require('util');

const opener = require('opener');

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
exports.createAssetsFilter = createAssetsFilter;

function createAssetsFilter(excludePatterns) {
  const excludeFunctions = (Array.isArray(excludePatterns) ? excludePatterns : [excludePatterns]).filter(Boolean).map(pattern => {
    if (typeof pattern === 'string') {
      pattern = new RegExp(pattern, 'u');
    }

    if (types.isRegExp(pattern)) {
      return asset => pattern.test(asset);
    }

    if (typeof pattern !== 'function') {
      throw new TypeError(`Pattern should be either string, RegExp or a function, but "${inspect(pattern, {
        depth: 0
      })}" got.`);
    }

    return pattern;
  });

  if (excludeFunctions.length) {
    return asset => excludeFunctions.every(fn => fn(asset) !== true);
  } else {
    return () => true;
  }
}
/**
 * @desc get string of current time
 * format: dd/MMM HH:mm
 * */


exports.defaultTitle = function () {
  const time = new Date();
  const year = time.getFullYear();
  const month = MONTHS[time.getMonth()];
  const day = time.getDate();
  const hour = `0${time.getHours()}`.slice(-2);
  const minute = `0${time.getMinutes()}`.slice(-2);
  const currentTime = `${day} ${month} ${year} at ${hour}:${minute}`;
  return `${process.env.npm_package_name || 'Webpack Bundle Analyzer'} [${currentTime}]`;
};

exports.defaultAnalyzerUrl = function (options) {
  const {
    listenHost,
    boundAddress
  } = options;
  return `http://${listenHost}:${boundAddress.port}`;
};
/**
 * Calls opener on a URI, but silently try / catches it.
 */


exports.open = function (uri, logger) {
  try {
    opener(uri);
  } catch (err) {
    logger.debug(`Opener failed to open "${uri}":\n${err}`);
  }
};