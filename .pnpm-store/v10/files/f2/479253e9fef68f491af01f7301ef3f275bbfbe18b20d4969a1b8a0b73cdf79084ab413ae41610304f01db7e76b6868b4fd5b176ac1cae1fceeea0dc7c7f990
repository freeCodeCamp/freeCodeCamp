var test = require('tape');
var commondir = require('../');

test('common', function (t) {
    t.equal(
        commondir([ '/foo', '//foo/bar', '/foo//bar/baz' ]),
        '/foo'
    );
    t.equal(
        commondir([ '/a/b/c', '/a/b', '/a/b/c/d/e' ]),
        '/a/b'
    );
    t.equal(
        commondir([ '/x/y/z/w', '/xy/z', '/x/y/z' ]),
        '/'
    );
    t.equal(
        commondir([ 'X:\\foo', 'X:\\\\foo\\bar', 'X://foo/bar/baz' ]),
        'X:/foo'
    );
    t.equal(
        commondir([ 'X:\\a\\b\\c', 'X:\\a\\b', 'X:\\a\\b\\c\\d\\e' ]),
        'X:/a/b'
    );
    t.equal(
        commondir([ 'X:\\x\\y\\z\\w', '\\\\xy\\z', '\\x\\y\\z' ]),
        '/'
    );
    t.throws(function () {
        commondir([ '/x/y/z/w', 'qrs', '/x/y/z' ]);
    });
    t.end();
});

test('base', function (t) {
    t.equal(
        commondir('/foo/bar', [ 'baz', './quux', '../bar/bazzy' ]),
        '/foo/bar'
    );
    t.equal(
        commondir('/a/b', [ 'c', '../b/.', '../../a/b/e' ]),
        '/a/b'
    );
    t.equal(
        commondir('/a/b/c', [ '..', '../d', '../../a/z/e' ]),
        '/a'
    );
    t.equal(
        commondir('/foo/bar', [ 'baz', '.\\quux', '..\\bar\\bazzy' ]),
        '/foo/bar'
    );
    // Tests including X:\ basedirs must wait until path.resolve supports
    // Windows-style paths, starting in Node.js v0.5.X
    t.end();
});
