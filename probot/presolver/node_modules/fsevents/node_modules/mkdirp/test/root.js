var mkdirp = require('../');
var path = require('path');
var fs = require('fs');
var test = require('tap').test;
var _0755 = parseInt('0755', 8);

test('root', function (t) {
    // '/' on unix, 'c:/' on windows.
    var file = path.resolve('/');

    mkdirp(file, _0755, function (err) {
        if (err) throw err
        fs.stat(file, function (er, stat) {
            if (er) throw er
            t.ok(stat.isDirectory(), 'target is a directory');
            t.end();
        })
    });
});
