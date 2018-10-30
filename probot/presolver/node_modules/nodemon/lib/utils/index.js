var noop = function () { };
var path = require('path');
const semver = require('semver');
var version = process.versions.node.split('.') || [null, null, null];

var utils = (module.exports = {
  semver: semver,
  satisfies: test => semver.satisfies(process.versions.node, test),
  version: {
    major: parseInt(version[0] || 0, 10),
    minor: parseInt(version[1] || 0, 10),
    patch: parseInt(version[2] || 0, 10),
  },
  clone: require('./clone'),
  merge: require('./merge'),
  bus: require('./bus'),
  isWindows: process.platform === 'win32',
  isMac: process.platform === 'darwin',
  isLinux: process.platform === 'linux',
  isRequired: (function () {
    var p = module.parent;
    while (p) {
      // in electron.js engine it happens
      if (!p.filename) {
        return true;
      }
      if (p.filename.indexOf('bin' + path.sep + 'nodemon.js') !== -1) {
        return false;
      }
      p = p.parent;
    }

    return true;
  })(),
  home: process.env.HOME || process.env.HOMEPATH,
  quiet: function () {
    // nukes the logging
    if (!this.debug) {
      for (var method in utils.log) {
        if (typeof utils.log[method] === 'function') {
          utils.log[method] = noop;
        }
      }
    }
  },
  reset: function () {
    if (!this.debug) {
      for (var method in utils.log) {
        if (typeof utils.log[method] === 'function') {
          delete utils.log[method];
        }
      }
    }
    this.debug = false;
  },
  regexpToText: function (t) {
    return t
      .replace(/\.\*\\./g, '*.')
      .replace(/\\{2}/g, '^^')
      .replace(/\\/g, '')
      .replace(/\^\^/g, '\\');
  },
  stringify: function (exec, args) {
    // serializes an executable string and array of arguments into a string
    args = args || [];

    return [exec]
      .concat(
      args.map(function (arg) {
        // if an argument contains a space, we want to show it with quotes
        // around it to indicate that it is a single argument
        if (arg.indexOf(' ') === -1) {
          return arg;
        }
        // this should correctly escape nested quotes
        return JSON.stringify(arg);
      })
      )
      .join(' ')
      .trim();
  },
});

utils.log = require('./log')(utils.isRequired);

Object.defineProperty(utils, 'debug', {
  set: function (value) {
    this.log.debug = value;
  },
  get: function () {
    return this.log.debug;
  },
});

Object.defineProperty(utils, 'colours', {
  set: function (value) {
    this.log.useColours = value;
  },
  get: function () {
    return this.log.useColours;
  },
});
