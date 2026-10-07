var mkdirp = require('../');
var path = require('path');
var fs = require('fs');
var test = require('tap').test;

test('async perm', function (t) {
    t.plan(2);
    var file = '/tmp/' + (Math.random() * (1<<30)).toString(16);
    
    mkdirp(file, 0755, function (err) {
        if (err) t.fail(err);
        else path.exists(file, function (ex) {
            if (!ex) t.fail('file not created')
            else fs.stat(file, function (err, stat) {
                if (err) t.fail(err)
                else {
                    t.equal(stat.mode & 0777, 0755);
                    t.ok(stat.isDirectory(), 'target not a directory');
                    t.end();
                }
            })
        })
    });
});

test('async root perm', function (t) {
    mkdirp('/tmp', 0755, function (err) {
        if (err) t.fail(err);
        t.end();
    });
    t.end();
});
