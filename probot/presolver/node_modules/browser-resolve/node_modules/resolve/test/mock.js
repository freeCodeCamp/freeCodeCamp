var test = require('tape');
var resolve = require('../');

test('mock', function (t) {
    t.plan(6);
    
    var files = {
        '/foo/bar/baz.js' : 'beep'
    };
    
    function opts (basedir) {
        return {
            basedir : basedir,
            isFile : function (file, cb) {
                cb(null, files.hasOwnProperty(file));
            },
            readFile : function (file, cb) {
                cb(null, files[file]);
            }
        }
    }
    
    resolve('./baz', opts('/foo/bar'), function (err, res, pkg) {
        if (err) t.fail(err);
        t.equal(res, '/foo/bar/baz.js');
        t.equal(pkg, undefined);
    });
    
    resolve('./baz.js', opts('/foo/bar'), function (err, res, pkg) {
        if (err) t.fail(err);
        t.equal(res, '/foo/bar/baz.js');
        t.equal(pkg, undefined);
    });
    
    resolve('baz', opts('/foo/bar'), function (err, res) {
        t.equal(err.message, "Cannot find module 'baz' from '/foo/bar'");
    });
    
    resolve('../baz', opts('/foo/bar'), function (err, res) {
        t.equal(err.message, "Cannot find module '../baz' from '/foo/bar'");
    });
});

test('mock from package', function (t) {
    t.plan(6);
    
    var files = {
        '/foo/bar/baz.js' : 'beep'
    };
    
    function opts (basedir) {
        return {
            basedir : basedir,
            package : { main: 'bar' },
            isFile : function (file, cb) {
                cb(null, files.hasOwnProperty(file));
            },
            readFile : function (file, cb) {
                cb(null, files[file]);
            }
        }
    }
    
    resolve('./baz', opts('/foo/bar'), function (err, res, pkg) {
        if (err) t.fail(err);
        t.equal(res, '/foo/bar/baz.js');
        t.equal(pkg.main, 'bar');
    });
    
    resolve('./baz.js', opts('/foo/bar'), function (err, res, pkg) {
        if (err) t.fail(err);
        t.equal(res, '/foo/bar/baz.js');
        t.equal(pkg.main, 'bar');
    });
    
    resolve('baz', opts('/foo/bar'), function (err, res) {
        t.equal(err.message, "Cannot find module 'baz' from '/foo/bar'");
    });
    
    resolve('../baz', opts('/foo/bar'), function (err, res) {
        t.equal(err.message, "Cannot find module '../baz' from '/foo/bar'");
    });
});

test('mock package', function (t) {
    t.plan(2);
    
    var files = {
        '/foo/node_modules/bar/baz.js' : 'beep',
        '/foo/node_modules/bar/package.json' : JSON.stringify({
            main : './baz.js'
        })
    };
    
    function opts (basedir) {
        return {
            basedir : basedir,
            isFile : function (file, cb) {
                cb(null, files.hasOwnProperty(file));
            },
            readFile : function (file, cb) {
                cb(null, files[file]);
            }
        }
    }
    
    resolve('bar', opts('/foo'), function (err, res, pkg) {
        if (err) t.fail(err);
        t.equal(res, '/foo/node_modules/bar/baz.js');
        t.equal(pkg.main, './baz.js');
    });
});

test('mock package from package', function (t) {
    t.plan(2);
    
    var files = {
        '/foo/node_modules/bar/baz.js' : 'beep',
        '/foo/node_modules/bar/package.json' : JSON.stringify({
            main : './baz.js'
        })
    };
    
    function opts (basedir) {
        return {
            basedir : basedir,
            package : { main: 'bar' },
            isFile : function (file, cb) {
                cb(null, files.hasOwnProperty(file));
            },
            readFile : function (file, cb) {
                cb(null, files[file]);
            }
        }
    }
    
    resolve('bar', opts('/foo'), function (err, res, pkg) {
        if (err) t.fail(err);
        t.equal(res, '/foo/node_modules/bar/baz.js');
        t.equal(pkg.main, './baz.js');
    });
});
