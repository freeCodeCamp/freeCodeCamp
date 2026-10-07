'use strict';
const { compare, intersection, semver } = require('./helpers');
const modulesByVersions = require('./modules-by-versions');
const modules = require('./modules');

module.exports = function (raw) {
  const corejs = semver(raw);
  if (corejs.major !== 3) {
    throw RangeError('This version of `core-js-compat` works only with `core-js@3`.');
  }
  const result = [];
  for (const version of Object.keys(modulesByVersions)) {
    if (compare(version, '<=', corejs)) {
      result.push(...modulesByVersions[version]);
    }
  }
  return intersection(result, modules);
};
