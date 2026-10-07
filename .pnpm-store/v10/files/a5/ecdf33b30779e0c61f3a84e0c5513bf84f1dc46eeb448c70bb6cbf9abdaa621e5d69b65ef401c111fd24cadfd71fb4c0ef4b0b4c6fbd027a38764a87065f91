'use strict';

const path = require('path');
const pkgUp = require('./pkgUp').default;

exports.__esModule = true;

/** @type {import('./pkgDir').default} */
exports.default = function (cwd) {
  const fp = pkgUp({ cwd });
  return fp ? path.dirname(fp) : null;
};
