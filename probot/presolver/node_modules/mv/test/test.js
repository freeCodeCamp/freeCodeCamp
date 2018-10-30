var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');
var describe = global.describe;
var it = global.it;
var mv = require('../');

var realFsRename = fs.rename;
function overrideFsRename() {
  // makes fs.rename return cross-device error.
  fs.rename = function(src, dest, cb) {
    setTimeout(function() {
      var err = new Error();
      err.code = 'EXDEV';
      cb(err);
    }, 10);
  };
}

function restoreFsRename() {
  fs.rename = realFsRename;
}

describe("mv", function() {
  it("should rename a file on the same device", function (done) {
    mv("test/a-file", "test/a-file-dest", function (err) {
      assert.ifError(err);
      fs.readFile("test/a-file-dest", 'utf8', function (err, contents) {
        assert.ifError(err);
        assert.strictEqual(contents, "sonic the hedgehog\n");
        // move it back
        mv("test/a-file-dest", "test/a-file", done);
      });
    });
  });

  it("should not overwrite if clobber = false", function (done) {
    mv("test/a-file", "test/a-folder/another-file", {clobber: false}, function (err) {
      assert.ok(err && err.code === 'EEXIST', "throw EEXIST");
      done();
    });
  });

  it("should not create directory structure by default", function (done) {
    mv("test/a-file", "test/does/not/exist/a-file-dest", function (err) {
      assert.strictEqual(err.code, 'ENOENT');
      done();
    });
  });

  it("should create directory structure when mkdirp option set", function (done) {
    mv("test/a-file", "test/does/not/exist/a-file-dest", {mkdirp: true}, function (err) {
      assert.ifError(err);
      fs.readFile("test/does/not/exist/a-file-dest", 'utf8', function (err, contents) {
        assert.ifError(err);
        assert.strictEqual(contents, "sonic the hedgehog\n");
        // move it back
        mv("test/does/not/exist/a-file-dest", "test/a-file", function(err) {
          assert.ifError(err);
          rimraf("test/does", { disableGlob: true }, done);
        });
      });
    });
  });

  it("should work across devices", function (done) {
    overrideFsRename();
    mv("test/a-file", "test/a-file-dest", function (err) {
      assert.ifError(err);
      fs.readFile("test/a-file-dest", 'utf8', function (err, contents) {
        assert.ifError(err);
        assert.strictEqual(contents, "sonic the hedgehog\n");
        // move it back
        mv("test/a-file-dest", "test/a-file", function(err) {
          restoreFsRename();
          done(err);
        });
      });
    });
  });

  it("should work across devices, even with special characters", function (done) {
    overrideFsRename();
    mv("test/a-file", "test/a-*", function (err) {
      assert.ifError(err);
      fs.readFile("test/a-*", 'utf8', function (err, contents) {
        assert.ifError(err);
        assert.strictEqual(contents, "sonic the hedgehog\n");
        // move it back
        mv("test/a-*", "test/a-file", function(err) {
          assert.ifError(err);
          fs.readFile("test/a-file", 'utf8', function (err, contents) {
            assert.ifError(err);
            assert.strictEqual(contents, "sonic the hedgehog\n");
            restoreFsRename();
            done(err);
          });
        });
      });
    });
  });

  it("should move folders", function (done) {
    mv("test/a-folder", "test/a-folder-dest", function (err) {
      assert.ifError(err);
      fs.readFile("test/a-folder-dest/another-file", 'utf8', function (err, contents) {
        assert.ifError(err);
        assert.strictEqual(contents, "tails\n");
        // move it back
        mv("test/a-folder-dest", "test/a-folder", done);
      });
    });
  });

  it("should move folders across devices", function (done) {
    overrideFsRename();
    mv("test/a-folder", "test/a-folder-dest", function (err) {
      assert.ifError(err);
      fs.readFile("test/a-folder-dest/another-folder/file3", 'utf8', function (err, contents) {
        assert.ifError(err);
        assert.strictEqual(contents, "knuckles\n");
        // move it back
        mv("test/a-folder-dest", "test/a-folder", function(err) {
          restoreFsRename();
          done(err);
        });
      });
    });
  });

  it("should move folders across devices, even with special characters", function (done) {
    overrideFsRename();
    mv("test/a-folder", "test/a-*", function (err) {
      assert.ifError(err);
      fs.readFile("test/a-*/another-folder/file3", 'utf8', function (err, contents) {
        assert.ifError(err);
        assert.strictEqual(contents, "knuckles\n");
        // move it back
        mv("test/a-*", "test/a-folder", function(err) {
          assert.ifError(err);
          fs.readFile("test/a-folder/another-folder/file3", 'utf8', function (err, contents) {
            assert.ifError(err);
            assert.strictEqual(contents, "knuckles\n");
            restoreFsRename();
            done(err);
          });
        });
      });
    });
  });
});
