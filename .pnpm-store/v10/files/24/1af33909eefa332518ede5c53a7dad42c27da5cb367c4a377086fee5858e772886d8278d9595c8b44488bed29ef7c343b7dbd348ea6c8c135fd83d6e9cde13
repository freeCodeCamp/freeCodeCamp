'use strict';
var tape = require('tape');
var path = require('../');

var windowsTests =
    // arguments                               result
    [[['c:/blah\\blah', 'd:/games', 'c:../a'], 'c:\\blah\\a'],
     [['c:/ignore', 'd:\\a/b\\c/d', '\\e.exe'], 'd:\\e.exe'],
     [['c:/ignore', 'c:/some/file'], 'c:\\some\\file'],
     [['d:/ignore', 'd:some/dir//'], 'd:\\ignore\\some\\dir'],
     [['.'], process.cwd()],
     [['//server/share', '..', 'relative\\'], '\\\\server\\share\\relative'],
     [['c:/', '//'], 'c:\\'],
     [['c:/', '//dir'], 'c:\\dir'],
     [['c:/', '//server/share'], '\\\\server\\share\\'],
     [['c:/', '//server//share'], '\\\\server\\share\\'],
     [['c:/', '///some//dir'], 'c:\\some\\dir'],
     [['C:\\foo\\tmp.3\\', '..\\tmp.3\\cycles\\root.js'],
      'C:\\foo\\tmp.3\\cycles\\root.js']
    ];
var posixTests =
    // arguments                    result
    [[['/var/lib', '../', 'file/'], '/var/file'],
     [['/var/lib', '/../', 'file/'], '/file'],
     [['a/b/c/', '../../..'], process.cwd()],
     [['.'], process.cwd()],
     [['/some/dir', '.', '/absolute/'], '/absolute'],
     [['/foo/tmp.3/', '../tmp.3/cycles/root.js'], '/foo/tmp.3/cycles/root.js']
    ];

tape('path.posix.resolve', function (t) {
  posixTests.forEach(function (p) {
    var actual = path.posix.resolve.apply(null, p[0]);
    t.strictEqual(actual, p[1]);
  });
  t.end();
});

tape('path.win32.resolve', { skip: true }, function (t) {
  windowsTests.forEach(function (p) {
    var actual = path.win32.resolve.apply(null, p[0]);
    t.strictEqual(actual, p[1]);
  });
  t.end();
});
