var mkdirp = require('../').mkdirp;
var path = require('path');
var fs = require('fs');
var test = require('tap').test;

test('race', function (t) {
    t.plan(4);
    var ps = [ '', 'tmp' ];
    
    for (var i = 0; i < 25; i++) {
        var dir = Math.floor(Math.random() * Math.pow(16,4)).toString(16);
        ps.push(dir);
    }
    var file = ps.join('/');
    
    var res = 2;
    mk(file, function () {
        if (--res === 0) t.end();
    });
    
    mk(file, function () {
        if (--res === 0) t.end();
    });
    
    function mk (file, cb) {
        mkdirp(file, 0755, function (err) {
            if (err) t.fail(err);
            else path.exists(file, function (ex) {
                if (!ex) t.fail('file not created')
                else fs.stat(file, function (err, stat) {
                    if (err) t.fail(err)
                    else {
                        t.equal(stat.mode & 0777, 0755);
                        t.ok(stat.isDirectory(), 'target not a directory');
                        if (cb) cb();
                    }
                })
            })
        });
    }
});
