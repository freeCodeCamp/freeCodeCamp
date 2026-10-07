'use strict';
var tape = require('tape');
var path = require('../');

tape('path.basename', function (t) {
  t.strictEqual(path.basename(__filename), 'test-path-basename.js');
  t.strictEqual(path.basename(__filename, '.js'), 'test-path-basename');
  t.strictEqual(path.basename('.js', '.js'), '');
  t.strictEqual(path.basename(''), '');
  t.strictEqual(path.basename('/dir/basename.ext'), 'basename.ext');
  t.strictEqual(path.basename('/basename.ext'), 'basename.ext');
  t.strictEqual(path.basename('basename.ext'), 'basename.ext');
  t.strictEqual(path.basename('basename.ext/'), 'basename.ext');
  t.strictEqual(path.basename('basename.ext//'), 'basename.ext');
  t.strictEqual(path.basename('aaa/bbb', '/bbb'), 'bbb');
  t.strictEqual(path.basename('aaa/bbb', 'a/bbb'), 'bbb');
  t.strictEqual(path.basename('aaa/bbb', 'bbb'), 'bbb');
  t.strictEqual(path.basename('aaa/bbb//', 'bbb'), 'bbb');
  t.strictEqual(path.basename('aaa/bbb', 'bb'), 'b');
  t.strictEqual(path.basename('aaa/bbb', 'b'), 'bb');
  t.strictEqual(path.basename('/aaa/bbb', '/bbb'), 'bbb');
  t.strictEqual(path.basename('/aaa/bbb', 'a/bbb'), 'bbb');
  t.strictEqual(path.basename('/aaa/bbb', 'bbb'), 'bbb');
  t.strictEqual(path.basename('/aaa/bbb//', 'bbb'), 'bbb');
  t.strictEqual(path.basename('/aaa/bbb', 'bb'), 'b');
  t.strictEqual(path.basename('/aaa/bbb', 'b'), 'bb');
  t.strictEqual(path.basename('/aaa/bbb'), 'bbb');
  t.strictEqual(path.basename('/aaa/'), 'aaa');
  t.strictEqual(path.basename('/aaa/b'), 'b');
  t.strictEqual(path.basename('/a/b'), 'b');
  t.strictEqual(path.basename('//a'), 'a');
  t.end();
})

tape('path.win32.basename', { skip: true }, function (t) {
  // On Windows a backslash acts as a path separator.
  t.strictEqual(path.win32.basename('\\dir\\basename.ext'), 'basename.ext');
  t.strictEqual(path.win32.basename('\\basename.ext'), 'basename.ext');
  t.strictEqual(path.win32.basename('basename.ext'), 'basename.ext');
  t.strictEqual(path.win32.basename('basename.ext\\'), 'basename.ext');
  t.strictEqual(path.win32.basename('basename.ext\\\\'), 'basename.ext');
  t.strictEqual(path.win32.basename('foo'), 'foo');
  t.strictEqual(path.win32.basename('aaa\\bbb', '\\bbb'), 'bbb');
  t.strictEqual(path.win32.basename('aaa\\bbb', 'a\\bbb'), 'bbb');
  t.strictEqual(path.win32.basename('aaa\\bbb', 'bbb'), 'bbb');
  t.strictEqual(path.win32.basename('aaa\\bbb\\\\\\\\', 'bbb'), 'bbb');
  t.strictEqual(path.win32.basename('aaa\\bbb', 'bb'), 'b');
  t.strictEqual(path.win32.basename('aaa\\bbb', 'b'), 'bb');
  t.strictEqual(path.win32.basename('C:'), '');
  t.strictEqual(path.win32.basename('C:.'), '.');
  t.strictEqual(path.win32.basename('C:\\'), '');
  t.strictEqual(path.win32.basename('C:\\dir\\base.ext'), 'base.ext');
  t.strictEqual(path.win32.basename('C:\\basename.ext'), 'basename.ext');
  t.strictEqual(path.win32.basename('C:basename.ext'), 'basename.ext');
  t.strictEqual(path.win32.basename('C:basename.ext\\'), 'basename.ext');
  t.strictEqual(path.win32.basename('C:basename.ext\\\\'), 'basename.ext');
  t.strictEqual(path.win32.basename('C:foo'), 'foo');
  t.strictEqual(path.win32.basename('file:stream'), 'file:stream');
  t.end();
});

tape('On unix a backslash is just treated as any other character.', function (t) {
  t.strictEqual(path.posix.basename('\\dir\\basename.ext'),
                     '\\dir\\basename.ext');
  t.strictEqual(path.posix.basename('\\basename.ext'), '\\basename.ext');
  t.strictEqual(path.posix.basename('basename.ext'), 'basename.ext');
  t.strictEqual(path.posix.basename('basename.ext\\'), 'basename.ext\\');
  t.strictEqual(path.posix.basename('basename.ext\\\\'), 'basename.ext\\\\');
  t.strictEqual(path.posix.basename('foo'), 'foo');
  t.end();
});

tape('POSIX filenames may include control characters', function (t) {
  // c.f. http://www.dwheeler.com/essays/fixing-unix-linux-filenames.html
  var controlCharFilename = "Icon" + (String.fromCharCode(13));
  t.strictEqual(path.posix.basename(("/a/b/" + controlCharFilename)),
                     controlCharFilename);
  t.end();
});
