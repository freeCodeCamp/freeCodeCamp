'use strict';
var tape = require('tape');
var path = require('../');

tape('path.posix.dirname', function (t) {
  t.strictEqual(path.posix.dirname('/a/b/'), '/a');
  t.strictEqual(path.posix.dirname('/a/b'), '/a');
  t.strictEqual(path.posix.dirname('/a'), '/');
  t.strictEqual(path.posix.dirname(''), '.');
  t.strictEqual(path.posix.dirname('/'), '/');
  t.strictEqual(path.posix.dirname('////'), '/');
  t.strictEqual(path.posix.dirname('//a'), '//');
  t.strictEqual(path.posix.dirname('foo'), '.');
  t.end();
});

tape('path.win32.dirname', { skip: true }, function (t) {
  t.strictEqual(path.win32.dirname('c:\\'), 'c:\\');
  t.strictEqual(path.win32.dirname('c:\\foo'), 'c:\\');
  t.strictEqual(path.win32.dirname('c:\\foo\\'), 'c:\\');
  t.strictEqual(path.win32.dirname('c:\\foo\\bar'), 'c:\\foo');
  t.strictEqual(path.win32.dirname('c:\\foo\\bar\\'), 'c:\\foo');
  t.strictEqual(path.win32.dirname('c:\\foo\\bar\\baz'), 'c:\\foo\\bar');
  t.strictEqual(path.win32.dirname('\\'), '\\');
  t.strictEqual(path.win32.dirname('\\foo'), '\\');
  t.strictEqual(path.win32.dirname('\\foo\\'), '\\');
  t.strictEqual(path.win32.dirname('\\foo\\bar'), '\\foo');
  t.strictEqual(path.win32.dirname('\\foo\\bar\\'), '\\foo');
  t.strictEqual(path.win32.dirname('\\foo\\bar\\baz'), '\\foo\\bar');
  t.strictEqual(path.win32.dirname('c:'), 'c:');
  t.strictEqual(path.win32.dirname('c:foo'), 'c:');
  t.strictEqual(path.win32.dirname('c:foo\\'), 'c:');
  t.strictEqual(path.win32.dirname('c:foo\\bar'), 'c:foo');
  t.strictEqual(path.win32.dirname('c:foo\\bar\\'), 'c:foo');
  t.strictEqual(path.win32.dirname('c:foo\\bar\\baz'), 'c:foo\\bar');
  t.strictEqual(path.win32.dirname('file:stream'), '.');
  t.strictEqual(path.win32.dirname('dir\\file:stream'), 'dir');
  t.strictEqual(path.win32.dirname('\\\\unc\\share'),
                '\\\\unc\\share');
  t.strictEqual(path.win32.dirname('\\\\unc\\share\\foo'),
                '\\\\unc\\share\\');
  t.strictEqual(path.win32.dirname('\\\\unc\\share\\foo\\'),
                '\\\\unc\\share\\');
  t.strictEqual(path.win32.dirname('\\\\unc\\share\\foo\\bar'),
                '\\\\unc\\share\\foo');
  t.strictEqual(path.win32.dirname('\\\\unc\\share\\foo\\bar\\'),
                '\\\\unc\\share\\foo');
  t.strictEqual(path.win32.dirname('\\\\unc\\share\\foo\\bar\\baz'),
                '\\\\unc\\share\\foo\\bar');
  t.strictEqual(path.win32.dirname('/a/b/'), '/a');
  t.strictEqual(path.win32.dirname('/a/b'), '/a');
  t.strictEqual(path.win32.dirname('/a'), '/');
  t.strictEqual(path.win32.dirname(''), '.');
  t.strictEqual(path.win32.dirname('/'), '/');
  t.strictEqual(path.win32.dirname('////'), '/');
  t.strictEqual(path.win32.dirname('foo'), '.');
  t.end();
});
