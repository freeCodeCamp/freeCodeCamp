// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';
var tape = require('tape');
var path = require('../');

var winPaths = [
  // [path, root]
  ['C:\\path\\dir\\index.html', 'C:\\'],
  ['C:\\another_path\\DIR\\1\\2\\33\\\\index', 'C:\\'],
  ['another_path\\DIR with spaces\\1\\2\\33\\index', ''],
  ['\\', '\\'],
  ['\\foo\\C:', '\\'],
  ['file', ''],
  ['file:stream', ''],
  ['.\\file', ''],
  ['C:', 'C:'],
  ['C:.', 'C:'],
  ['C:..', 'C:'],
  ['C:abc', 'C:'],
  ['C:\\', 'C:\\'],
  ['C:\\abc', 'C:\\' ],
  ['', ''],

  // unc
  ['\\\\server\\share\\file_path', '\\\\server\\share\\'],
  ['\\\\server two\\shared folder\\file path.zip',
   '\\\\server two\\shared folder\\'],
  ['\\\\teela\\admin$\\system32', '\\\\teela\\admin$\\'],
  ['\\\\?\\UNC\\server\\share', '\\\\?\\UNC\\']
];

var winSpecialCaseParseTests = [
  ['/foo/bar', { root: '/' }],
];

var winSpecialCaseFormatTests = [
  [{ dir: 'some\\dir' }, 'some\\dir\\'],
  [{ base: 'index.html' }, 'index.html'],
  [{ root: 'C:\\' }, 'C:\\'],
  [{ name: 'index', ext: '.html' }, 'index.html'],
  [{ dir: 'some\\dir', name: 'index', ext: '.html' }, 'some\\dir\\index.html'],
  [{ root: 'C:\\', name: 'index', ext: '.html' }, 'C:\\index.html'],
  [{}, '']
];

var unixPaths = [
  // [path, root]
  ['/home/user/dir/file.txt', '/'],
  ['/home/user/a dir/another File.zip', '/'],
  ['/home/user/a dir//another&File.', '/'],
  ['/home/user/a$$$dir//another File.zip', '/'],
  ['user/dir/another File.zip', ''],
  ['file', ''],
  ['.\\file', ''],
  ['./file', ''],
  ['C:\\foo', ''],
  ['/', '/'],
  ['', ''],
  ['.', ''],
  ['..', ''],
  ['/foo', '/'],
  ['/foo.', '/'],
  ['/foo.bar', '/'],
  ['/.', '/'],
  ['/.foo', '/'],
  ['/.foo.bar', '/'],
  ['/foo/bar.baz', '/']
];

var unixSpecialCaseFormatTests = [
  [{ dir: 'some/dir' }, 'some/dir/'],
  [{ base: 'index.html' }, 'index.html'],
  [{ root: '/' }, '/'],
  [{ name: 'index', ext: '.html' }, 'index.html'],
  [{ dir: 'some/dir', name: 'index', ext: '.html' }, 'some/dir/index.html'],
  [{ root: '/', name: 'index', ext: '.html' }, '/index.html'],
  [{}, '']
];

var errors = [
  { method: 'parse', input: [null], message: TypeError },
  { method: 'parse', input: [{}], message: TypeError },
  { method: 'parse', input: [true], message: TypeError },
  { method: 'parse', input: [1], message: TypeError },
  { method: 'parse', input: [], message: TypeError },
  { method: 'format', input: [null], message: TypeError },
  { method: 'format', input: [''], message: TypeError },
  { method: 'format', input: [true], message: TypeError },
  { method: 'format', input: [1], message: TypeError },
];

tape('path.win32.parse', { skip: true }, function (t) {
  checkParseFormat(t, path.win32, winPaths);
  checkSpecialCaseParseFormat(t, path.win32, winSpecialCaseParseTests);
  t.end();
});

tape('path.posix.parse', function (t) {
  checkParseFormat(t, path.posix, unixPaths);
  t.end();
});

tape('path.win32.parse errors', { skip: true }, function (t) {
  checkErrors(t, path.win32);
  t.end();
});

tape('path.posix.parse errors', function (t) {
  checkErrors(t, path.posix);
  t.end();
});

tape('path.win32.format', { skip: true }, function (t) {
  checkFormat(t, path.win32, winSpecialCaseFormatTests);
  t.end();
});

tape('path.posix.format', function (t) {
  checkFormat(t, path.posix, unixSpecialCaseFormatTests);
  t.end();
});

// Test removal of trailing path separators
var windowsTrailingTests =
    [['.\\', { root: '', dir: '', base: '.', ext: '', name: '.' }],
     ['\\\\', { root: '\\', dir: '\\', base: '', ext: '', name: '' }],
     ['\\\\', { root: '\\', dir: '\\', base: '', ext: '', name: '' }],
     ['c:\\foo\\\\\\',
      { root: 'c:\\', dir: 'c:\\', base: 'foo', ext: '', name: 'foo' }],
     ['D:\\foo\\\\\\bar.baz',
      { root: 'D:\\',
        dir: 'D:\\foo\\\\',
        base: 'bar.baz',
        ext: '.baz',
        name: 'bar'
      }
     ]
    ];
var posixTrailingTests =
    [['./', { root: '', dir: '', base: '.', ext: '', name: '.' }],
     ['//', { root: '/', dir: '/', base: '', ext: '', name: '' }],
     ['///', { root: '/', dir: '/', base: '', ext: '', name: '' }],
     ['/foo///', { root: '/', dir: '/', base: 'foo', ext: '', name: 'foo' }],
     ['/foo///bar.baz',
      { root: '/', dir: '/foo//', base: 'bar.baz', ext: '.baz', name: 'bar' }
     ]
    ];

tape('path.win32.parse trailing', { skip: true }, function (t) {
  windowsTrailingTests.forEach(function (p) {
    var actual = path.win32.parse(p[0]);
    var expected = p[1];
    t.deepEqual(actual, expected)
  });
  t.end();
});

tape('path.posix.parse trailing', function (t) {
  posixTrailingTests.forEach(function (p) {
    var actual = path.posix.parse(p[0]);
    var expected = p[1];
    t.deepEqual(actual, expected)
  });
  t.end();
});

function checkErrors(t, path) {
  errors.forEach(function(errorCase) {
    t.throws(function () {
      path[errorCase.method].apply(path, errorCase.input);
    }, errorCase.message);
  });
}

function checkParseFormat(t, path, paths) {
  paths.forEach(function(p) {
    var element = p[0];
    var root = p[1];
    var output = path.parse(element);
    t.strictEqual(typeof output.root, 'string');
    t.strictEqual(typeof output.dir, 'string');
    t.strictEqual(typeof output.base, 'string');
    t.strictEqual(typeof output.ext, 'string');
    t.strictEqual(typeof output.name, 'string');
    t.strictEqual(path.format(output), element);
    t.strictEqual(output.root, root);
    t.ok(output.dir.startsWith(output.root));
    t.strictEqual(output.dir, output.dir ? path.dirname(element) : '');
    t.strictEqual(output.base, path.basename(element));
    t.strictEqual(output.ext, path.extname(element));
  });
}

function checkSpecialCaseParseFormat(t, path, testCases) {
  testCases.forEach(function(testCase) {
    var element = testCase[0];
    var expect = testCase[1];
    var output = path.parse(element);
    Object.keys(expect).forEach(function(key) {
      t.strictEqual(output[key], expect[key]);
    });
  });
}

function checkFormat(t, path, testCases) {
  testCases.forEach(function(testCase) {
    t.strictEqual(path.format(testCase[0]), testCase[1]);
  });

  [null, undefined, 1, true, false, 'string'].forEach(function (pathObject) {
    t.throws(function() {
      path.format(pathObject);
    }, /The "pathObject" argument must be of type Object. Received type (\w+)/);
  });
}
