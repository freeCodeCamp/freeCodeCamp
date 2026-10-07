var a = require.resolve('buffer/').replace(process.cwd(), '$CWD');
var b = require('resolve').sync('buffer/', { preserveSymlinks: true }).replace(process.cwd(), '$CWD');
var c = require('resolve').sync('buffer/', { preserveSymlinks: false }).replace(process.cwd(), '$CWD');

console.log(a, ': require.resolve, preserveSymlinks ' + (process.execArgv.indexOf('preserve-symlinks') > -1 ? 'true' : 'false'));
console.log(b, ': preserveSymlinks true');
console.log(c, ': preserveSymlinks false');

if (a !== b && a !== c) {
    throw 'sync: no match';
}
console.log('sync: success! a matched either b or c\n');
