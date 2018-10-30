var mkdirp = require('../');
var path = require('path');
var fs = require('fs');
var exists = fs.exists || path.exists;
var test = require('tap').test;
var _0777 = parseInt('0777', 8);
var _0755 = parseInt('0755', 8);

test('async perm', function (t) {
    t.plan(5);
    var file = '/tmp/' + (Math.random() * (1<<30)).toString(16);
    
    mkdirp(file, _0755, function (err) {
        t.ifError(err);
        exists(file, function (ex) {
            t.ok(ex, 'file created');
            fs.stat(file, function (err, stat) {
                t.ifError(err);
                t.equal(stat.mode & _0777, _0755);
                t.ok(stat.isDirectory(), 'target not a directory');
            })
        })
    });
});

test('async root perm', function (t) {
    mkdirp('/tmp', _0755, function (err) {
        if (err) t.fail(err);
        t.end();
    });
    t.end();
});
