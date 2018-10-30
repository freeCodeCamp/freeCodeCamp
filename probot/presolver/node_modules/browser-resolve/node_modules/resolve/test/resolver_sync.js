var test = require('tape');
var resolve = require('../');

test('foo', function (t) {
    var dir = __dirname + '/resolver';
    
    t.equal(
        resolve.sync('./foo', { basedir : dir }),
        dir + '/foo.js'
    );
    
    t.equal(
        resolve.sync('./foo.js', { basedir : dir }),
        dir + '/foo.js'
    );
    
    t.throws(function () {
        resolve.sync('foo', { basedir : dir });
    });
    
    t.end();
});

test('bar', function (t) {
    var dir = __dirname + '/resolver';
    
    t.equal(
        resolve.sync('foo', { basedir : dir + '/bar' }),
        dir + '/bar/node_modules/foo/index.js'
    );
    t.end();
});

test('baz', function (t) {
    var dir = __dirname + '/resolver';
    
    t.equal(
        resolve.sync('./baz', { basedir : dir }),
        dir + '/baz/quux.js'
    );
    t.end();
});

test('biz', function (t) {
    var dir = __dirname + '/resolver/biz/node_modules';
    t.equal(
        resolve.sync('./grux', { basedir : dir }),
        dir + '/grux/index.js'
    );
    
    t.equal(
        resolve.sync('tiv', { basedir : dir + '/grux' }),
        dir + '/tiv/index.js'
    );
    
    t.equal(
        resolve.sync('grux', { basedir : dir + '/tiv' }),
        dir + '/grux/index.js'
    );
    t.end();
});

test('normalize', function (t) {
    var dir = __dirname + '/resolver/biz/node_modules/grux';
    t.equal(
        resolve.sync('../grux', { basedir : dir }),
        dir + '/index.js'
    );
    t.end();
});

test('cup', function (t) {
    var dir = __dirname + '/resolver';
    t.equal(
        resolve.sync('./cup', {
            basedir : dir,
            extensions : [ '.js', '.coffee' ]
        }),
        dir + '/cup.coffee'
    );
    
    t.equal(
        resolve.sync('./cup.coffee', {
            basedir : dir
        }),
        dir + '/cup.coffee'
    );
    
    t.throws(function () {
        resolve.sync('./cup', {
            basedir : dir,
            extensions : [ '.js' ]
        })
    });
    
    t.end();
});

test('mug', function (t) {
    var dir = __dirname + '/resolver';
    t.equal(
        resolve.sync('./mug', { basedir : dir }),
        dir + '/mug.js'
    );
    
    t.equal(
        resolve.sync('./mug', {
            basedir : dir,
            extensions : [ '.coffee', '.js' ]
        }),
        dir + '/mug.coffee'
    );
    
    t.equal(
        resolve.sync('./mug', {
            basedir : dir,
            extensions : [ '.js', '.coffee' ]
        }),
        dir + '/mug.js'
    );
    
    t.end();
});

test('other path', function (t) {
    var resolverDir = __dirname + '/resolver';
    var dir = resolverDir + '/bar';
    var otherDir = resolverDir + '/other_path';

    var path = require('path');
    
    t.equal(
        resolve.sync('root', {
            basedir : dir,
            paths: [otherDir] }),
        resolverDir + '/other_path/root.js'
    );
    
    t.equal(
        resolve.sync('lib/other-lib', {
            basedir : dir,
            paths: [otherDir] }),
        resolverDir + '/other_path/lib/other-lib.js'
    );

    t.throws(function () {
        resolve.sync('root', { basedir : dir, });
    });
    
    t.throws(function () {
        resolve.sync('zzz', {
            basedir : dir,
            paths: [otherDir] });
    });
    
    t.end();
});

test('incorrect main', function (t) {
    var resolverDir = __dirname + '/resolver';
    var dir = resolverDir + '/incorrect_main';

    t.equal(
        resolve.sync('./incorrect_main', { basedir : resolverDir }),
        dir + '/index.js'
    )

    t.end()
});

test('#25: node modules with the same name as node stdlib modules', function (t) {
    var resolverDir = __dirname + '/resolver/punycode';

    t.equal(
        resolve.sync('punycode', { basedir : resolverDir }),
        resolverDir + '/node_modules/punycode/index.js'
    )

    t.end()
});
