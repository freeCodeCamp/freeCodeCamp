var a = require.resolve('buffer/').replace(process.cwd(), '$CWD');
var b;
var c;

var test = function test() {
    console.log(a, ': require.resolve, preserveSymlinks ' + (process.execArgv.indexOf('preserve-symlinks') > -1 ? 'true' : 'false'));
    console.log(b, ': preserveSymlinks true');
    console.log(c, ': preserveSymlinks false');

    if (a !== b && a !== c) {
        throw 'async: no match';
    }
    console.log('async: success! a matched either b or c\n');
};

require('resolve')('buffer/', { preserveSymlinks: true }, function (err, result) {
    if (err) { throw err; }
    b = result.replace(process.cwd(), '$CWD');
    if (b && c) { test(); }
});
require('resolve')('buffer/', { preserveSymlinks: false }, function (err, result) {
    if (err) { throw err; }
    c = result.replace(process.cwd(), '$CWD');
    if (b && c) { test(); }
});

