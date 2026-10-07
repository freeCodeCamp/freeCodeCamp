'use strict';

var assert = require('assert');
var path = require('path');
var resolve = require('resolve');

var basedir = __dirname + '/node_modules/@my-scope/package-b';

var expected = path.join(__dirname, '../../node_modules/jquery/dist/jquery.js');

/*
 * preserveSymlinks === false
 * will search NPM package from
 * - packages/package-b/node_modules
 * - packages/node_modules
 * - node_modules
 */
assert.equal(resolve.sync('jquery', { basedir: basedir, preserveSymlinks: false }), expected);
assert.equal(resolve.sync('../../node_modules/jquery', { basedir: basedir, preserveSymlinks: false }), expected);

/*
 * preserveSymlinks === true
 * will search NPM package from
 * - packages/package-a/node_modules/@my-scope/packages/package-b/node_modules
 * - packages/package-a/node_modules/@my-scope/packages/node_modules
 * - packages/package-a/node_modules/@my-scope/node_modules
 * - packages/package-a/node_modules/node_modules
 * - packages/package-a/node_modules
 * - packages/node_modules
 * - node_modules
 */
assert.equal(resolve.sync('jquery', { basedir: basedir, preserveSymlinks: true }), expected);
assert.equal(resolve.sync('../../../../../node_modules/jquery', { basedir: basedir, preserveSymlinks: true }), expected);

console.log(' * all monorepo paths successfully resolved through symlinks');
