var mkdirp = require('../').mkdirp;
var path = require('path');
var fs = require('fs');
var exists = fs.exists || path.exists;
var test = require('tap').test;
var _0777 = parseInt('0777', 8);
var _0755 = parseInt('0755', 8);

test('race', function (t) {
    t.plan(10);
    var ps = [ '', 'tmp' ];
    
    for (var i = 0; i < 25; i++) {
        var dir = Math.floor(Math.random() * Math.pow(16,4)).toString(16);
        ps.push(dir);
    }
    var file = ps.join('/');
    
    var res = 2;
    mk(file);
    
    mk(file);
    
    function mk (file, cb) {
        mkdirp(file, _0755, function (err) {
            t.ifError(err);
            exists(file, function (ex) {
                t.ok(ex, 'file created');
                fs.stat(file, function (err, stat) {
                    t.ifError(err);
                    t.equal(stat.mode & _0777, _0755);
                    t.ok(stat.isDirectory(), 'target not a directory');
                });
            })
        });
    }
});
