var test = require('tape');
var path = require('path');
var resolve = require('../');

test('faulty basedir must produce error in windows', { skip: process.platform !== 'win32' }, function (t) {
    t.plan(1);

    var resolverDir = 'C:\\a\\b\\c\\d';

    resolve('tape/lib/test.js', { basedir: resolverDir }, function (err, res, pkg) {
        t.equal(!!err, true);
    });
});

test('non-existent basedir should not throw when preserveSymlinks is false', function (t) {
    t.plan(2);

    var opts = {
        basedir: path.join(path.sep, 'unreal', 'path', 'that', 'does', 'not', 'exist'),
        preserveSymlinks: false
    };

    var module = './dotdot/abc';

    resolve(module, opts, function (err, res) {
        t.equal(err.code, 'INVALID_BASEDIR');
        t.equal(res, undefined);
    });
});
