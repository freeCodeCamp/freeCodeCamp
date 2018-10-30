'use strict';
const globalDirs = require('global-dirs');
const isPathInside = require('is-path-inside');

module.exports = isPathInside(__dirname, globalDirs.yarn.packages) || isPathInside(__dirname, globalDirs.npm.packages);
