var test = require('tape');
var resolve = require('../');

test('faulty basedir must produce error in windows', { skip: process.platform !== 'win32' }, function (t) {
    t.plan(1);

    var resolverDir = 'C:\\a\\b\\c\\d';

    resolve('tape/lib/test.js', { basedir: resolverDir }, function (err, res, pkg) {
        t.equal(true, !!err);
    });

});
