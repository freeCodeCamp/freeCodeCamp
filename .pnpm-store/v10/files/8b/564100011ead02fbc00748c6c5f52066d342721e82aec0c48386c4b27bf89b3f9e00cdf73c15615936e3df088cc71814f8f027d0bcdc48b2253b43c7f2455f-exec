#!/usr/bin/env node

'use strict';

var path = require('path');
var fs = require('fs');

if (
    String(process.env.npm_lifecycle_script).slice(0, 8) !== 'resolve '
    && (
        !process.argv
        || process.argv.length < 2
        || (process.argv[1] !== __filename && fs.statSync(process.argv[1]).ino !== fs.statSync(__filename).ino)
        || (process.env.npm_lifecycle_event !== 'npx' && process.env._ && fs.realpathSync(path.resolve(process.env._)) !== __filename)
    )
) {
    console.error('Error: `resolve` must be run directly as an executable');
    process.exit(1);
}

var supportsPreserveSymlinkFlag = require('supports-preserve-symlinks-flag');

var preserveSymlinks = false;
for (var i = 2; i < process.argv.length; i += 1) {
    if (process.argv[i].slice(0, 2) === '--') {
        if (supportsPreserveSymlinkFlag && process.argv[i] === '--preserve-symlinks') {
            preserveSymlinks = true;
        } else if (process.argv[i].length > 2) {
            console.error('Unknown argument ' + process.argv[i].replace(/[=].*$/, ''));
            process.exit(2);
        }
        process.argv.splice(i, 1);
        i -= 1;
        if (process.argv[i] === '--') { break; } // eslint-disable-line no-restricted-syntax
    }
}

if (process.argv.length < 3) {
    console.error('Error: `resolve` expects a specifier');
    process.exit(2);
}

var resolve = require('../');

var result = resolve.sync(process.argv[2], {
    basedir: process.cwd(),
    preserveSymlinks: preserveSymlinks
});

console.log(result);
