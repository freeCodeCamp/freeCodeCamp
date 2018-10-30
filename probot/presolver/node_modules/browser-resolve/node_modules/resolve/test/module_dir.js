var path = require('path');
var test = require('tape');
var resolve = require('../');

test('moduleDirectory strings', function (t) {
    t.plan(4);
    var dir = __dirname + '/module_dir';
    var xopts = {
        basedir : dir,
        moduleDirectory: 'xmodules'
    };
    resolve('aaa', xopts, function (err, res, pkg) {
        t.ifError(err);
        t.equal(res, dir + '/xmodules/aaa/index.js');
    });
    
    var yopts = {
        basedir : dir,
        moduleDirectory: 'ymodules'
    };
    resolve('aaa', yopts, function (err, res, pkg) {
        t.ifError(err);
        t.equal(res, dir + '/ymodules/aaa/index.js');
    });
});

test('moduleDirectory array', function (t) {
    t.plan(6);
    var dir = __dirname + '/module_dir';
    var aopts = {
        basedir : dir,
        moduleDirectory: [ 'xmodules', 'ymodules', 'zmodules' ]
    };
    resolve('aaa', aopts, function (err, res, pkg) {
        t.ifError(err);
        t.equal(res, dir + '/xmodules/aaa/index.js');
    });
    
    var bopts = {
        basedir : dir,
        moduleDirectory: [ 'zmodules', 'ymodules', 'xmodules' ]
    };
    resolve('aaa', bopts, function (err, res, pkg) {
        t.ifError(err);
        t.equal(res, dir + '/ymodules/aaa/index.js');
    });
    
    var copts = {
        basedir : dir,
        moduleDirectory: [ 'xmodules', 'ymodules', 'zmodules' ]
    };
    resolve('bbb', copts, function (err, res, pkg) {
        t.ifError(err);
        t.equal(res, dir + '/zmodules/bbb/main.js');
    });
});
