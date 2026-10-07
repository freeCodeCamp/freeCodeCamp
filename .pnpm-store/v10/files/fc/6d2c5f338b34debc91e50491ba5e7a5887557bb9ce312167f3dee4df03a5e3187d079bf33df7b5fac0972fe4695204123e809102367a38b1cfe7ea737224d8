'use strict';
var tape = require('tape');
var path = require('../');

tape('path.win32.isAbsolute', { skip: true }, function (t) {
  t.strictEqual(path.win32.isAbsolute('/'), true);
  t.strictEqual(path.win32.isAbsolute('//'), true);
  t.strictEqual(path.win32.isAbsolute('//server'), true);
  t.strictEqual(path.win32.isAbsolute('//server/file'), true);
  t.strictEqual(path.win32.isAbsolute('\\\\server\\file'), true);
  t.strictEqual(path.win32.isAbsolute('\\\\server'), true);
  t.strictEqual(path.win32.isAbsolute('\\\\'), true);
  t.strictEqual(path.win32.isAbsolute('c'), false);
  t.strictEqual(path.win32.isAbsolute('c:'), false);
  t.strictEqual(path.win32.isAbsolute('c:\\'), true);
  t.strictEqual(path.win32.isAbsolute('c:/'), true);
  t.strictEqual(path.win32.isAbsolute('c://'), true);
  t.strictEqual(path.win32.isAbsolute('C:/Users/'), true);
  t.strictEqual(path.win32.isAbsolute('C:\\Users\\'), true);
  t.strictEqual(path.win32.isAbsolute('C:cwd/another'), false);
  t.strictEqual(path.win32.isAbsolute('C:cwd\\another'), false);
  t.strictEqual(path.win32.isAbsolute('directory/directory'), false);
  t.strictEqual(path.win32.isAbsolute('directory\\directory'), false);
  t.end();
});

tape('path.posix.isAbsolute', function (t) {
  t.strictEqual(path.posix.isAbsolute('/home/foo'), true);
  t.strictEqual(path.posix.isAbsolute('/home/foo/..'), true);
  t.strictEqual(path.posix.isAbsolute('bar/'), false);
  t.strictEqual(path.posix.isAbsolute('./baz'), false);
  t.end();
});
