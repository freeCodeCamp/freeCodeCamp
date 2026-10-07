'use strict';
var tape = require('tape');
var path = require('../');

var relativeTests = {
  win32:
    // arguments                     result
    [['c:/blah\\blah', 'd:/games', 'd:\\games'],
     ['c:/aaaa/bbbb', 'c:/aaaa', '..'],
     ['c:/aaaa/bbbb', 'c:/cccc', '..\\..\\cccc'],
     ['c:/aaaa/bbbb', 'c:/aaaa/bbbb', ''],
     ['c:/aaaa/bbbb', 'c:/aaaa/cccc', '..\\cccc'],
     ['c:/aaaa/', 'c:/aaaa/cccc', 'cccc'],
     ['c:/', 'c:\\aaaa\\bbbb', 'aaaa\\bbbb'],
     ['c:/aaaa/bbbb', 'd:\\', 'd:\\'],
     ['c:/AaAa/bbbb', 'c:/aaaa/bbbb', ''],
     ['c:/aaaaa/', 'c:/aaaa/cccc', '..\\aaaa\\cccc'],
     ['C:\\foo\\bar\\baz\\quux', 'C:\\', '..\\..\\..\\..'],
     ['C:\\foo\\test', 'C:\\foo\\test\\bar\\package.json', 'bar\\package.json'],
     ['C:\\foo\\bar\\baz-quux', 'C:\\foo\\bar\\baz', '..\\baz'],
     ['C:\\foo\\bar\\baz', 'C:\\foo\\bar\\baz-quux', '..\\baz-quux'],
     ['\\\\foo\\bar', '\\\\foo\\bar\\baz', 'baz'],
     ['\\\\foo\\bar\\baz', '\\\\foo\\bar', '..'],
     ['\\\\foo\\bar\\baz-quux', '\\\\foo\\bar\\baz', '..\\baz'],
     ['\\\\foo\\bar\\baz', '\\\\foo\\bar\\baz-quux', '..\\baz-quux'],
     ['C:\\baz-quux', 'C:\\baz', '..\\baz'],
     ['C:\\baz', 'C:\\baz-quux', '..\\baz-quux'],
     ['\\\\foo\\baz-quux', '\\\\foo\\baz', '..\\baz'],
     ['\\\\foo\\baz', '\\\\foo\\baz-quux', '..\\baz-quux'],
     ['C:\\baz', '\\\\foo\\bar\\baz', '\\\\foo\\bar\\baz'],
     ['\\\\foo\\bar\\baz', 'C:\\baz', 'C:\\baz']
    ],
  posix:
    // arguments          result
    [['/var/lib', '/var', '..'],
     ['/var/lib', '/bin', '../../bin'],
     ['/var/lib', '/var/lib', ''],
     ['/var/lib', '/var/apache', '../apache'],
     ['/var/', '/var/lib', 'lib'],
     ['/', '/var/lib', 'var/lib'],
     ['/foo/test', '/foo/test/bar/package.json', 'bar/package.json'],
     ['/Users/a/web/b/test/mails', '/Users/a/web/b', '../..'],
     ['/foo/bar/baz-quux', '/foo/bar/baz', '../baz'],
     ['/foo/bar/baz', '/foo/bar/baz-quux', '../baz-quux'],
     ['/baz-quux', '/baz', '../baz'],
     ['/baz', '/baz-quux', '../baz-quux']
    ]
};

tape('path.posix.relative', function (t) {
  relativeTests.posix.forEach(function (p) {
    var expected = p[2];
    var actual = path.posix.relative(p[0], p[1]);
    t.strictEqual(actual, expected);
  });
  t.end();
});

tape('path.win32.relative', { skip: true }, function (t) {
  relativeTests.win32.forEach(function (p) {
    var expected = p[2];
    var actual = path.win32.relative(p[0], p[1]);
    t.strictEqual(actual, expected);
  });
  t.end();
});
