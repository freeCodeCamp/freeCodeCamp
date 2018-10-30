var test = require('tape');
var resolve = require('../');

test('mock', function (t) {
    t.plan(4);
    
    var files = {
        '/foo/bar/baz.js' : 'beep'
    };
    
    function opts (basedir) {
        return {
            basedir : basedir,
            isFile : function (file) {
                return files.hasOwnProperty(file)
            },
            readFileSync : function (file) {
                return files[file]
            }
        }
    }
    
    t.equal(
        resolve.sync('./baz', opts('/foo/bar')),
        '/foo/bar/baz.js'
    );
    
    t.equal(
        resolve.sync('./baz.js', opts('/foo/bar')),
        '/foo/bar/baz.js'
    );
    
    t.throws(function () {
        resolve.sync('baz', opts('/foo/bar'));
    });

    t.throws(function () {
        resolve.sync('../baz', opts('/foo/bar'));
    });
});

test('mock package', function (t) {
    t.plan(1);
    
    var files = {
        '/foo/node_modules/bar/baz.js' : 'beep',
        '/foo/node_modules/bar/package.json' : JSON.stringify({
            main : './baz.js'
        })
    };
    
    function opts (basedir) {
        return {
            basedir : basedir,
            isFile : function (file) {
                return files.hasOwnProperty(file)
            },
            readFileSync : function (file) {
                return files[file]
            }
        }
    }
    
    t.equal(
        resolve.sync('bar', opts('/foo')),
        '/foo/node_modules/bar/baz.js'
    );
});
