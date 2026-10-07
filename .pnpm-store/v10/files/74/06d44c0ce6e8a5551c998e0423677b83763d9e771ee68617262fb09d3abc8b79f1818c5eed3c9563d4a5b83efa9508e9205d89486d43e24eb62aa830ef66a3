'use strict';
var tape = require('tape');
var path = require('../');

var slashRE = /\//g;

var pairs = [
  [__filename, '.js'],
  ['', ''],
  ['/path/to/file', ''],
  ['/path/to/file.ext', '.ext'],
  ['/path.to/file.ext', '.ext'],
  ['/path.to/file', ''],
  ['/path.to/.file', ''],
  ['/path.to/.file.ext', '.ext'],
  ['/path/to/f.ext', '.ext'],
  ['/path/to/..ext', '.ext'],
  ['/path/to/..', ''],
  ['file', ''],
  ['file.ext', '.ext'],
  ['.file', ''],
  ['.file.ext', '.ext'],
  ['/file', ''],
  ['/file.ext', '.ext'],
  ['/.file', ''],
  ['/.file.ext', '.ext'],
  ['.path/file.ext', '.ext'],
  ['file.ext.ext', '.ext'],
  ['file.', '.'],
  ['.', ''],
  ['./', ''],
  ['.file.ext', '.ext'],
  ['.file', ''],
  ['.file.', '.'],
  ['.file..', '.'],
  ['..', ''],
  ['../', ''],
  ['..file.ext', '.ext'],
  ['..file', '.file'],
  ['..file.', '.'],
  ['..file..', '.'],
  ['...', '.'],
  ['...ext', '.ext'],
  ['....', '.'],
  ['file.ext/', '.ext'],
  ['file.ext//', '.ext'],
  ['file/', ''],
  ['file//', ''],
  ['file./', '.'],
  ['file.//', '.'] ];

tape('path.posix.extname', function (t) {
  pairs.forEach(function (p) {
    var input = p[0];
    var expected = p[1];
    t.strictEqual(expected, path.posix.extname(input));
  });
  t.end();
});

tape('path.win32.extname', { skip: true }, function (t) {
  pairs.forEach(function (p) {
    var input = p[0].replace(slashRE, '\\');
    var expected = p[1];
    t.strictEqual(expected, path.win32.extname(input));
    t.strictEqual(expected, path.win32.extname("C:" + input));
  });
  t.end();
});

tape('path.win32.extname backslash', { skip: true }, function (t) {
  // On Windows, backslash is a path separator.
  t.strictEqual(path.win32.extname('.\\'), '');
  t.strictEqual(path.win32.extname('..\\'), '');
  t.strictEqual(path.win32.extname('file.ext\\'), '.ext');
  t.strictEqual(path.win32.extname('file.ext\\\\'), '.ext');
  t.strictEqual(path.win32.extname('file\\'), '');
  t.strictEqual(path.win32.extname('file\\\\'), '');
  t.strictEqual(path.win32.extname('file.\\'), '.');
  t.strictEqual(path.win32.extname('file.\\\\'), '.');
  t.end();
});

tape('path.posix.extname backslash', function (t) {
  // On *nix, backslash is a valid name component like any other character.
  t.strictEqual(path.posix.extname('.\\'), '');
  t.strictEqual(path.posix.extname('..\\'), '.\\');
  t.strictEqual(path.posix.extname('file.ext\\'), '.ext\\');
  t.strictEqual(path.posix.extname('file.ext\\\\'), '.ext\\\\');
  t.strictEqual(path.posix.extname('file\\'), '');
  t.strictEqual(path.posix.extname('file\\\\'), '');
  t.strictEqual(path.posix.extname('file.\\'), '.\\');
  t.strictEqual(path.posix.extname('file.\\\\'), '.\\\\');
  t.end();
});

