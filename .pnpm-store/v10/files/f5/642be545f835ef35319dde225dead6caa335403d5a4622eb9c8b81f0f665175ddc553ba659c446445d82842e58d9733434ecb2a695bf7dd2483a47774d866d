/* eslint-env mocha */
var assert = require("assert");
var p = require("path");
var readdir = require("../index");

function getAbsolutePath(file) {
  return p.join(__dirname, file);
}

function getAbsolutePaths(files) {
  return files.map(getAbsolutePath);
}

describe("readdir", function() {
  it("correctly lists all files in nested directories", function(done) {
    var expectedFiles = getAbsolutePaths([
      "/testdir/a/a",
      "/testdir/a/beans",
      "/testdir/b/123",
      "/testdir/b/b/hurp-durp",
      "/testdir/c.txt",
      "/testdir/d.txt"
    ]);

    readdir(p.join(__dirname, "testdir"), function(err, list) {
      assert.ifError(err);
      assert.deepEqual(list.sort(), expectedFiles.sort());
      done();
    });
  });

  it("ignores the files listed in the ignores array", function(done) {
    var notExpectedFiles = getAbsolutePaths([
      "/testdir/d.txt",
      "/testdir/a/beans"
    ]);

    readdir(p.join(__dirname, "testdir"), ["d.txt", "beans"], function(
      err,
      list
    ) {
      assert.ifError(err);
      list.forEach(function(file) {
        assert.equal(
          notExpectedFiles.indexOf(file),
          -1,
          'Failed to ignore file "' + file + '".'
        );
      });
      done();
    });
  });

  it("ignores the directories listed in the ignores array", function(done) {
    var notExpectedFiles = getAbsolutePaths([
      "/testdir/a/a",
      "/testdir/a/beans"
    ]);

    readdir(p.join(__dirname, "testdir"), ["**/testdir/a"], function(
      err,
      list
    ) {
      assert.ifError(err);
      list.forEach(function(file) {
        assert.equal(
          notExpectedFiles.indexOf(file),
          -1,
          'Failed to ignore file "' + file + '".'
        );
      });
      done();
    });
  });

  it("ignores symlinked files and directories listed in the ignores array", function(
    done
  ) {
    var notExpectedFiles = getAbsolutePaths([
      "/testsymlinks/testdir/linkeddir/hi.docx",
      "/testsymlinks/testdir/linkedfile.wmf"
    ]);
    readdir(
      p.join(__dirname, "testsymlinks/testdir"),
      ["linkeddir", "linkedfile.wmf"],
      function(err, list) {
        assert.ifError(err);
        list.forEach(function(file) {
          assert.equal(
            notExpectedFiles.indexOf(file),
            -1,
            'Failed to ignore file "' + file + '".'
          );
        });
        done();
      }
    );
  });

  it("supports ignoring files with just basename globbing", function(done) {
    var notExpectedFiles = getAbsolutePaths([
      "/testdir/d.txt",
      "/testdir/a/beans"
    ]);

    readdir(p.join(__dirname, "testdir"), ["*.txt", "beans"], function(
      err,
      list
    ) {
      assert.ifError(err);
      list.forEach(function(file) {
        assert.equal(
          notExpectedFiles.indexOf(file),
          -1,
          'Failed to ignore file "' + file + '".'
        );
      });
      done();
    });
  });

  it("supports ignoring files with the globstar syntax", function(done) {
    var notExpectedFiles = getAbsolutePaths([
      "/testdir/d.txt",
      "/testdir/a/beans"
    ]);

    var ignores = ["**/*.txt", "**/a/beans"];

    readdir(p.join(__dirname, "testdir"), ignores, function(err, list) {
      assert.ifError(err);
      list.forEach(function(file) {
        assert.equal(
          notExpectedFiles.indexOf(file),
          -1,
          'Failed to ignore file "' + file + '".'
        );
      });
      done();
    });
  });

  context("when there is a function in the ignores array", function() {
    it("passes each file and directory path to the function", function(done) {
      var expectedPaths = getAbsolutePaths([
        "/testdir/a",
        "/testdir/a/a",
        "/testdir/a/beans",
        "/testdir/b",
        "/testdir/b/123",
        "/testdir/b/b",
        "/testdir/b/b/hurp-durp",
        "/testdir/c.txt",
        "/testdir/d.txt"
      ]);
      var paths = [];
      function ignoreFunction(path) {
        paths.push(path);
        return false;
      }
      readdir(p.join(__dirname, "testdir"), [ignoreFunction], function(
        err,
        list
      ) {
        assert.ifError(err);
        assert.deepEqual(paths.sort(), expectedPaths.sort());
        done();
      });
    });

    it("passes the stat object of each file to the function as its second argument", function(
      done
    ) {
      var paths = {};
      function ignoreFunction(path, stats) {
        paths[path] = stats;
        return false;
      }
      readdir(p.join(__dirname, "testdir"), [ignoreFunction], function(
        err,
        list
      ) {
        assert.ifError(err);
        assert(paths[getAbsolutePath("/testdir/a")].isDirectory());
        assert(paths[getAbsolutePath("/testdir/c.txt")].isFile());
        done();
      });
    });

    it("ignores files that the function returns true for", function(done) {
      var ignoredFiles = getAbsolutePaths([
        "/testdir/d.txt",
        "/testdir/a/beans"
      ]);
      function ignoreFunction(path) {
        return ignoredFiles.indexOf(path) != -1;
      }

      readdir(p.join(__dirname, "testdir"), [ignoreFunction], function(
        err,
        list
      ) {
        assert.ifError(err);
        list.forEach(function(file) {
          assert.equal(
            ignoredFiles.indexOf(file),
            -1,
            'Failed to ignore file "' + file + '".'
          );
        });
        done();
      });
    });

    it("does not ignore files that the function returns false for", function(
      done
    ) {
      var notIgnoredFiles = getAbsolutePaths([
        "/testdir/d.txt",
        "/testdir/a/beans"
      ]);
      function ignoreFunction(path) {
        return notIgnoredFiles.indexOf(path) == -1;
      }

      readdir(p.join(__dirname, "testdir"), [ignoreFunction], function(
        err,
        list
      ) {
        assert.ifError(err);
        notIgnoredFiles.forEach(function(file) {
          assert.notEqual(
            notIgnoredFiles.indexOf(file),
            -1,
            'Incorrectly ignored file "' + file + '".'
          );
        });
        done();
      });
    });

    it("ignores directories that the function returns true for", function(
      done
    ) {
      var ignoredDirectory = getAbsolutePath("/testdir/a");
      var ignoredFiles = getAbsolutePaths(["/testdir/a/a", "/testdir/a/beans"]);
      function ignoreFunction(path) {
        return ignoredDirectory == path;
      }

      readdir(p.join(__dirname, "testdir"), [ignoreFunction], function(
        err,
        list
      ) {
        assert.ifError(err);
        list.forEach(function(file) {
          assert.equal(
            ignoredFiles.indexOf(file),
            -1,
            'Failed to ignore file "' + file + '".'
          );
        });
        done();
      });
    });

    it("does not ignore directories that the function returns false for", function(
      done
    ) {
      var ignoredDirectory = getAbsolutePath("/testdir/a");
      var notIgnoredFiles = getAbsolutePaths([
        "/testdir/b/123",
        "/testdir/b/b/hurp-durp"
      ]);
      function ignoreFunction(path) {
        return ignoredDirectory == path;
      }

      readdir(p.join(__dirname, "testdir"), [ignoreFunction], function(
        err,
        list
      ) {
        assert.ifError(err);
        notIgnoredFiles.forEach(function(file) {
          assert.notEqual(
            notIgnoredFiles.indexOf(file),
            -1,
            'Incorrectly ignored file "' + file + '".'
          );
        });
        done();
      });
    });

    it("does not descend into directories that the function returns true for", function(
      done
    ) {
      var ignoredDirectory = getAbsolutePath("/testdir/a");
      var ignoredFiles = getAbsolutePaths(["/testdir/a/a", "/testdir/a/beans"]);
      var paths = [];
      function ignoreFunction(path) {
        paths.push(path);
        return ignoredDirectory == path;
      }

      readdir(p.join(__dirname, "testdir"), [ignoreFunction], function(
        err,
        list
      ) {
        assert.ifError(err);
        paths.forEach(function(file) {
          assert.equal(
            ignoredFiles.indexOf(file),
            -1,
            'Transversed file in ignored directory "' + file + '".'
          );
        });
        done();
      });
    });
  });

  it("works when there are no files to report except ignored files", function(
    done
  ) {
    readdir(p.join(__dirname, "testdirBeta"), ["*"], function(err, list) {
      assert.ifError(err);
      assert.equal(list.length, 0, "expect to report 0 files");
      done();
    });
  });

  it("works when negated ignore list is given", function(done) {
    var expectedFiles = getAbsolutePaths(["/testdirBeta/ignore.txt"]);

    readdir(p.join(__dirname, "testdirBeta"), ["!*.txt"], function(err, list) {
      assert.ifError(err);
      assert.deepEqual(
        list.sort(),
        expectedFiles,
        "Failed to find expected files."
      );
      done();
    });
  });

  it("traverses directory and file symbolic links", function(done) {
    var expectedFiles = getAbsolutePaths([
      "/testsymlinks/testdir/linkeddir/hi.docx",
      "/testsymlinks/testdir/linkedfile.wmf"
    ]);

    readdir(p.join(__dirname, "testsymlinks", "testdir"), function(err, list) {
      assert.ifError(err);
      assert.deepEqual(
        list.sort(),
        expectedFiles,
        "Failed to find expected files."
      );
      done();
    });
  });

  if (!global.Promise) {
    console.log("Native Promise not supported - skipping tests");
  } else {
    it("works with promises", function(done) {
      var expectedFiles = getAbsolutePaths([
        "/testdir/a/a",
        "/testdir/a/beans",
        "/testdir/b/123",
        "/testdir/b/b/hurp-durp",
        "/testdir/c.txt",
        "/testdir/d.txt"
      ]);

      readdir(p.join(__dirname, "testdir"))
        .then(function(list) {
          assert.deepEqual(list.sort(), expectedFiles.sort());
          done();
        })
        .catch(done);
    });

    it("correctly ignores when using promises", function(done) {
      var expectedFiles = getAbsolutePaths([
        "/testdir/a/a",
        "/testdir/a/beans",
        "/testdir/b/123",
        "/testdir/b/b/hurp-durp"
      ]);

      readdir(p.join(__dirname, "testdir"), ["*.txt"])
        .then(function(list) {
          assert.deepEqual(list.sort(), expectedFiles.sort());
          done();
        })
        .catch(done);
    });
  }
});
