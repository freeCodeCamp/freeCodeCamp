"use strict";

var path  = require("path");
var shjs  = require("shelljs");
var sinon = require("sinon");

var cliPath = path.resolve(__dirname, "../src/cli.js");
var cli;

exports.setUp = function(done) {
  this.sinon = sinon.sandbox.create();

  // The CLI module maintains some internal state in order to optimize
  // filesystem operations. This state can lead to undesirable test case
  // interdependencies. While re-loading the CLI module for every test may
  // negatively effect the execution time of this test suite, it is the most
  // maintainable way to avoid any current or future problems relating to
  // shared internal state.
  cli = require("../src/cli.js");

  done();
};

exports.tearDown = function(done) {
  this.sinon.restore();

  cli = null;
  delete require.cache[cliPath];

  done();
};

exports.group = {
  setUp: function (cb) {
    this.sinon.stub(cli, "exit");
    cb();
  },

  config: {
    setUp: function (done) {
      this.sinon.stub(shjs, "cat")
        .withArgs(sinon.match(/file\.js$/))
          .returns("var a = function () {}; a();")
        .withArgs(sinon.match(/file1\.json$/))
          .returns("wat")
        .withArgs(sinon.match(/file2\.json$/))
          .returns("{\"node\":true,\"globals\":{\"foo\":true,\"bar\":true}}")
        .withArgs(sinon.match(/file4\.json$/))
          .returns("{\"extends\":\"file3.json\"}")
        .withArgs(sinon.match(/file5\.json$/))
          .returns("{\"extends\":\"file2.json\"}")
        .withArgs(sinon.match(/file6\.json$/))
          .returns("{\"extends\":\"file2.json\",\"node\":false}")
        .withArgs(sinon.match(/file7\.json$/))
          .returns("{\"extends\":\"file2.json\",\"globals\":{\"bar\":false,\"baz\":true}}")
        .withArgs(sinon.match(/file8\.json$/)).returns(JSON.stringify({
          extends: "file7.json",
          overrides: {
            "file.js": {
              globals: {
                foo: true,
                bar: true
              }
            }
          }
        }))
        .withArgs(sinon.match(/file9\.json$/)).returns(JSON.stringify({
          extends: "file8.json",
          overrides: {
            "file.js": {
              globals: {
                baz: true,
                bar: false
              }
            }
          }
        }));

      this.sinon.stub(shjs, "test")
        .withArgs("-e", sinon.match(/file\.js$/)).returns(true)
        .withArgs("-e", sinon.match(/file1\.json$/)).returns(true)
        .withArgs("-e", sinon.match(/file2\.json$/)).returns(true)
        .withArgs("-e", sinon.match(/file3\.json$/)).returns(false)
        .withArgs("-e", sinon.match(/file4\.json$/)).returns(true)
        .withArgs("-e", sinon.match(/file5\.json$/)).returns(true)
        .withArgs("-e", sinon.match(/file6\.json$/)).returns(true);

      var _cli = require("cli");
      this.out = this.sinon.stub(_cli, "error");

      done();
    },

    normal: function (test) {
      this.sinon.stub(cli, "run").returns(true);

      // Merges existing valid files
      cli.interpret([
        "node", "jshint", "file.js", "--config", "file5.json"
      ]);
      test.equal(cli.run.lastCall.args[0].config.node, true);
      test.equal(cli.run.lastCall.args[0].config['extends'], void 0);

      // Overwrites options after extending
      cli.interpret([
        "node", "jshint", "file.js", "--config", "file6.json"
      ]);
      test.equal(cli.run.lastCall.args[0].config.node, false);

      // Valid config
      cli.interpret([
        "node", "jshint", "file.js", "--config", "file2.json"
      ]);

      // Performs a deep merge of configuration
      cli.interpret([
        "node", "jshint", "file2.js", "--config", "file7.json"
      ]);
      test.deepEqual(cli.run.lastCall.args[0].config.globals, { foo: true, bar: false, baz: true });

      // Performs a deep merge of configuration with overrides
      cli.interpret([
        "node", "jshint", "file.js", "--config", "file8.json"
      ]);
      test.deepEqual(cli.run.lastCall.args[0].config.overrides["file.js"].globals, { foo: true, bar: true });

      // Performs a deep merge of configuration with overrides for the same glob
      cli.interpret([
        "node", "jshint", "file.js", "--config", "file9.json"
      ]);
      test.deepEqual(cli.run.lastCall.args[0].config.overrides["file.js"].globals, { foo: true, bar: false, baz: true });

      test.done();
    },

    failure: function (test) {
      var out = this.out;
      cli.exit.throws("ProcessExit");

      // File doesn't exist.
      try {
        cli.interpret([
          "node", "jshint", "file.js", "--config", "file3.json"
        ]);
      } catch (err) {
        var msg = out.args[0][0];
        test.equal(msg.slice(0, 23), "Can't find config file:");
        test.equal(msg.slice(msg.length - 10), "file3.json");
        test.equal(err, "ProcessExit");
      }

      // Invalid config
      try {
        cli.interpret([
          "node", "jshint", "file.js", "--config", "file1.json"
        ]);
      } catch (err) {
        var msg = out.args[1][0];
        test.equal(msg.slice(0, 24), "Can't parse config file:");
        test.equal(msg.slice(25, 35), "file1.json");
        test.equal(err, "ProcessExit");
      }

      // Invalid merged filed
      try {
        cli.interpret([
          "node", "jshint", "file.js", "--config", "file4.json"
        ]);
      } catch (err) {
        var msg = out.args[2][0];
        test.equal(msg.slice(0, 23), "Can't find config file:");
        test.equal(msg.slice(msg.length - 10), "file3.json");
        test.equal(err, "ProcessExit");
      }


      test.done();
    }
  },

  testPrereq: function (test) {
    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/file\.js$/)).returns("a();")
      .withArgs(sinon.match(/prereq.js$/)).returns("var a = 1;")
      .withArgs(sinon.match(/config.json$/))
        .returns("{\"undef\":true,\"prereq\":[\"prereq.js\", \"prereq2.js\"]}");

    this.sinon.stub(shjs, "test")
      .withArgs("-e", sinon.match(/file\.js$/)).returns(true)
      .withArgs("-e", sinon.match(/prereq.js$/)).returns(true)
      .withArgs("-e", sinon.match(/config.json$/)).returns(true);

    cli.exit.withArgs(0).returns(true)
      .withArgs(2).throws("ProcessExit");

    cli.interpret([
      "node", "jshint", "file.js", "--config", "config.json"
    ]);

    shjs.cat.restore();
    shjs.test.restore();

    test.done();
  },

  // CLI prereqs
  testPrereqCLIOption: function (test) {
    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/file\.js$/)).returns("a();")
      .withArgs(sinon.match(/prereq.js$/)).returns("var a = 1;")
      .withArgs(sinon.match(/config.json$/)).returns("{\"undef\":true}");

    this.sinon.stub(shjs, "test")
      .withArgs("-e", sinon.match(/file\.js$/)).returns(true)
      .withArgs("-e", sinon.match(/prereq.js$/)).returns(true)
      .withArgs("-e", sinon.match(/config.json$/)).returns(true);

    cli.exit.restore();
    this.sinon.stub(cli, "exit")
      .withArgs(0).returns(true)
      .withArgs(2).throws("ProcessExit");

    cli.interpret([
      "node", "jshint", "file.js",
      "--config", "config.json",
      "--prereq", "prereq.js  , prereq2.js"
    ]);

    shjs.cat.restore();
    shjs.test.restore();

    test.done();
  },

  // CLI prereqs should get merged with config prereqs
  testPrereqBothConfigAndCLIOption: function (test) {
    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/file\.js$/)).returns("a(); b();")
      .withArgs(sinon.match(/prereq.js$/)).returns("var a = 1;")
      .withArgs(sinon.match(/prereq2.js$/)).returns("var b = 2;")
      .withArgs(sinon.match(/config.json$/))
        .returns("{\"undef\":true,\"prereq\":[\"prereq.js\"]}");

    this.sinon.stub(shjs, "test")
      .withArgs("-e", sinon.match(/file\.js$/)).returns(true)
      .withArgs("-e", sinon.match(/prereq.js$/)).returns(true)
      .withArgs("-e", sinon.match(/prereq2.js$/)).returns(true)
      .withArgs("-e", sinon.match(/config.json$/)).returns(true);

    cli.exit.restore();
    this.sinon.stub(cli, "exit")
      .withArgs(0).returns(true)
      .withArgs(2).throws("ProcessExit");

    cli.interpret([
      "node", "jshint", "file.js",
      "--config", "config.json",
      "--prereq", "prereq2.js,prereq3.js"
    ]);

    shjs.cat.restore();
    shjs.test.restore();

    test.done();
  },

  testOverrides: function (test) {
    var dir = __dirname + "/../examples/";
    var rep = require("../examples/reporter.js");
    var config = {
      "asi": true,
      "overrides": {
        "bar.js": {
          "asi": false
        }
      }
    };

    this.sinon.stub(process, "cwd").returns(dir);
    this.sinon.stub(rep, "reporter");
    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/foo\.js$/)).returns("a()")
      .withArgs(sinon.match(/bar\.js$/)).returns("a()")
      .withArgs(sinon.match(/config\.json$/))
        .returns(JSON.stringify(config));

    this.sinon.stub(shjs, "test")
      .withArgs("-e", sinon.match(/foo\.js$/)).returns(true)
      .withArgs("-e", sinon.match(/bar\.js$/)).returns(true)
      .withArgs("-e", sinon.match(/config\.json$/)).returns(true);

    cli.exit.withArgs(0).returns(true)
      .withArgs(1).throws("ProcessExit");

    // Test successful file
    cli.interpret([
      "node", "jshint", "foo.js", "--config", "config.json", "--reporter", "reporter.js"
    ]);
    test.ok(rep.reporter.args[0][0].length === 0);

    // Test overriden, failed file
    cli.interpret([
      "node", "jshint", "bar.js", "--config", "config.json", "--reporter", "reporter.js"
    ]);
    test.ok(rep.reporter.args[1][0].length > 0, "Error was expected but not thrown");
    test.equal(rep.reporter.args[1][0][0].error.code, "W033");

    test.done();
  },

  testOverridesMatchesRelativePaths: function (test) {
    var dir = __dirname + "/../examples/";
    var rep = require("../examples/reporter.js");
    var config = {
      "asi": true,
      "overrides": {
        "src/bar.js": {
          "asi": false
        }
      }
    };

    this.sinon.stub(process, "cwd").returns(dir);
    this.sinon.stub(rep, "reporter");
    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/bar\.js$/)).returns("a()")
      .withArgs(sinon.match(/config\.json$/))
        .returns(JSON.stringify(config));

    this.sinon.stub(shjs, "test")
      .withArgs("-e", sinon.match(/bar\.js$/)).returns(true)
      .withArgs("-e", sinon.match(/config\.json$/)).returns(true);

    cli.exit.withArgs(0).returns(true)
      .withArgs(1).throws("ProcessExit");

    cli.interpret([
      "node", "jshint", "./src/bar.js", "--config", "config.json", "--reporter", "reporter.js"
    ]);
    test.ok(rep.reporter.args[0][0].length === 1);

    test.done();
  },

  testReporter: function (test) {
    test.expect(5);

    var _cli = require("cli");
    var rep = require("../examples/reporter.js");
    var run = this.sinon.stub(cli, "run");
    var out = this.sinon.stub(_cli, "error");
    var dir = __dirname + "/../examples/";
    this.sinon.stub(process, "cwd").returns(dir);

    cli.exit.throws("ProcessExit");

    // Test failed attempt.
    try {
      cli.interpret([
        "node", "jshint", "file.js", "--reporter", "invalid.js"
      ]);
    } catch (err) {
      var msg = out.args[0][0];
      test.equal(msg.slice(0, 25), "Can't load reporter file:");
      test.equal(msg.slice(msg.length - 10), "invalid.js");
      test.equal(err, "ProcessExit");
    }

    // Test successful attempt.
    run.restore();
    this.sinon.stub(rep, "reporter");
    this.sinon.stub(shjs, "test")
      .withArgs("-e", sinon.match(/file\.js$/)).returns(true);

    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/file\.js$/)).returns("func()");

    try {
      cli.interpret([
        "node", "jshint", "file.js", "--reporter", "reporter.js"
      ]);
    } catch (err) {
      if (err.name !== "ProcessExit") {
        throw err;
      }

      test.equal(rep.reporter.args[0][0][0].error.raw, "Missing semicolon.");
      test.ok(rep.reporter.calledOnce);
    }

    test.done();
  },

  testJSLintReporter: function (test) {
    var rep = require("../src/reporters/jslint_xml.js");
    var run = this.sinon.stub(cli, "run");

    cli.interpret([
      "node", "jshint", "file.js", "--reporter", "jslint"
    ]);
    test.equal(run.args[0][0].reporter, rep.reporter);

    cli.interpret([
      "node", "jshint", "file.js", "--jslint-reporter"
    ]);
    test.equal(run.args[1][0].reporter, rep.reporter);

    test.done();
  },

  testCheckStyleReporter: function (test) {
    var rep = require("../src/reporters/checkstyle.js");
    var run = this.sinon.stub(cli, "run");

    cli.interpret([
      "node", "jshint", "file.js", "--reporter", "checkstyle"
    ]);
    test.equal(run.args[0][0].reporter, rep.reporter);

    cli.interpret([
      "node", "jshint", "file.js", "--checkstyle-reporter"
    ]);
    test.equal(run.args[1][0].reporter, rep.reporter);

    test.done();
  },

  testShowNonErrors: function (test) {
    var rep = require("../src/reporters/non_error.js");
    var run = this.sinon.stub(cli, "run");

    cli.interpret([
      "node", "jshint", "file.js", "--show-non-errors"
    ]);
    test.equal(run.args[0][0].reporter, rep.reporter);

    test.done();
  },

  testExtensions: function (test) {
    var run = this.sinon.stub(cli, "run");

    cli.interpret([
      "node", "jshint", "file.js"
    ]);
    test.equal(run.args[0][0].extensions, "");

    cli.interpret([
      "node", "jshint", "file.js", "--extra-ext", ".json"
    ]);
    test.equal(run.args[1][0].extensions, ".json");

    test.done();
  },

  testMalformedNpmFile: function (test) {
    this.sinon.stub(process, "cwd").returns(__dirname);
    var localNpm = path.normalize(__dirname + "/package.json");
    var localRc = path.normalize(__dirname + "/.jshintrc");
    var testStub = this.sinon.stub(shjs, "test");
    var catStub = this.sinon.stub(shjs, "cat");

    // stub rc file
    testStub.withArgs("-e", localRc).returns(true);
    catStub.withArgs(localRc).returns('{"evil": true}');

    // stub npm file
    testStub.withArgs("-e", localNpm).returns(true);
    catStub.withArgs(localNpm).returns('{'); // malformed package.json

    // stub src file
    testStub.withArgs("-e", sinon.match(/file\.js$/)).returns(true);
    catStub.withArgs(sinon.match(/file\.js$/)).returns("eval('a=2');");

    cli.interpret([
      "node", "jshint", "file.js"
    ]);
    test.equal(cli.exit.args[0][0], 0); // lint with wrong package.json

    test.done();
  },

  testRcFile: function (test) {
    this.sinon.stub(process, "cwd").returns(__dirname);
    var localRc = path.normalize(__dirname + "/.jshintrc");
    var testStub = this.sinon.stub(shjs, "test");
    var catStub = this.sinon.stub(shjs, "cat");

    // stub rc file
    testStub.withArgs("-e", localRc).returns(true);
    catStub.withArgs(localRc).returns('{"evil": true}');

    // stub src file
    testStub.withArgs("-e", sinon.match(/file\.js$/)).returns(true);
    catStub.withArgs(sinon.match(/file\.js$/)).returns("eval('a=2');");

    cli.interpret([
      "node", "jshint", "file.js"
    ]);
    test.equal(cli.exit.args[0][0], 0); // eval allowed = rc file found

    test.done();
  },

  testHomeRcFile: function (test) {
    var homeRc = path.join(process.env.HOME || process.env.HOMEPATH, ".jshintrc");
    var testStub = this.sinon.stub(shjs, "test");
    var catStub = this.sinon.stub(shjs, "cat");

    // stub rc file
    testStub.withArgs("-e", homeRc).returns(true);
    catStub.withArgs(homeRc).returns('{"evil": true}');

    // stub src file (in root where we are unlikely to find a .jshintrc)
    testStub.withArgs("-e", sinon.match(/\/file\.js$/)).returns(true);
    catStub.withArgs(sinon.match(/\/file\.js$/)).returns("eval('a=2');");

    cli.interpret([
      "node", "jshint", "/file.js"
    ]);
    test.equal(cli.exit.args[0][0], 0); // eval allowed = rc file found

    test.done();
  },

  testNoHomeDir: function (test) {
    var prevEnv = {};

    // Remove all home dirs from env.
    [ 'USERPROFILE', 'HOME', 'HOMEPATH' ].forEach(function (key) {
      prevEnv[key] = process.env[key];
      delete process.env[key];
    });

    this.sinon.stub(process, "cwd").returns(__dirname);
    var localRc = path.normalize(__dirname + "/.jshintrc");
    var testStub = this.sinon.stub(shjs, "test");
    var catStub = this.sinon.stub(shjs, "cat");

    // stub rc file
    testStub.withArgs("-e", localRc).returns(true);
    catStub.withArgs(localRc).returns('{"evil": true}');

    // stub src file
    testStub.withArgs("-e", sinon.match(/file\.js$/)).returns(true);
    catStub.withArgs(sinon.match(/file\.js$/)).returns("eval('a=2');");

    cli.interpret([
      "node", "jshint", "file.js"
    ]);
    test.equal(cli.exit.args[0][0], 0); // eval allowed = rc file found

    test.done();

    // Restore environemnt
    Object.keys(prevEnv).forEach(function (key) {
      process.env[key] = prevEnv[key];
    });
  },

  testOneLevelRcLookup: function (test) {
    var srcDir = __dirname + "../src/";
    var parentRc = path.join(srcDir, ".jshintrc");

    var cliDir = path.join(srcDir, "cli/");
    this.sinon.stub(process, "cwd").returns(cliDir);

    var testStub = this.sinon.stub(shjs, "test");
    var catStub = this.sinon.stub(shjs, "cat");

    // stub rc file
    testStub.withArgs("-e", parentRc).returns(true);
    catStub.withArgs(parentRc).returns('{"evil": true}');

    // stub src file
    testStub.withArgs("-e", sinon.match(/file\.js$/)).returns(true);
    catStub.withArgs(sinon.match(/file\.js$/)).returns("eval('a=2');");

    cli.interpret([
      "node", "jshint", "file.js"
    ]);
    test.equal(cli.exit.args[0][0], 0); // eval allowed = rc file found

    test.done();
  },

  testTargetRelativeRcLookup: function (test) {
    // working from outside the project
    this.sinon.stub(process, "cwd").returns(process.env.HOME || process.env.HOMEPATH);
    var projectRc = path.normalize(__dirname + "/.jshintrc");
    var srcFile = __dirname + "/sub/file.js";
    var testStub = this.sinon.stub(shjs, "test");
    var catStub = this.sinon.stub(shjs, "cat");

    // stub rc file
    testStub.withArgs("-e", projectRc).returns(true);
    catStub.withArgs(projectRc).returns('{"evil": true}');

    // stub src file
    testStub.withArgs("-e", srcFile).returns(true);
    catStub.withArgs(srcFile).returns("eval('a=2');");

    cli.interpret([
      "node", "jshint", srcFile
    ]);
    test.equal(cli.exit.args[0][0], 0); // eval allowed = rc file found

    test.done();
  },

  testIgnores: function (test) {
    var run = this.sinon.stub(cli, "run");
    var dir = __dirname + "/../examples/";
    this.sinon.stub(process, "cwd").returns(dir);

    cli.interpret([
      "node", "jshint", "file.js", "--exclude=exclude.js"
    ]);

    test.equal(run.args[0][0].ignores[0], path.resolve(dir, "exclude.js"));
    test.equal(run.args[0][0].ignores[1], path.resolve(dir, "ignored.js"));
    test.equal(run.args[0][0].ignores[2], path.resolve(dir, "another.js"));

    run.restore();
    process.cwd.returns(__dirname + "/../");

    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/file.js$/)).returns("console.log('Hello');")
      .withArgs(sinon.match(/\.jshintignore$/)).returns("examples");

    test.equal(shjs.cat.args.length, 0);

    test.done();
  },

  testIgnoresWithSpecialChars: function (test) {
    this.sinon.stub(process, "cwd").returns(path.resolve(__dirname, "special++chars"));
    this.sinon.stub(shjs, "test").withArgs(sinon.match(/-[ed]/), ".").returns(true);
    this.sinon.stub(shjs, "ls").withArgs(".").returns([]);
    test.doesNotThrow(function() {
      cli.interpret(["node", "jshint", ".", "--exclude=exclude1.js"]);
    });
    test.done();
  },

  testMultipleIgnores: function (test) {
    var run = this.sinon.stub(cli, "run");
    var dir = __dirname + "/../examples/";
    this.sinon.stub(process, "cwd").returns(dir);

    cli.interpret([
      "node", "jshint", "file.js", "--exclude=foo.js,bar.js"
    ]);

    test.equal(run.args[0][0].ignores[0], path.resolve(dir, "foo.js"));
    test.equal(run.args[0][0].ignores[1], path.resolve(dir, "bar.js"));

    test.done();
  },

  testExcludePath: function (test) {
    var run = this.sinon.stub(cli, "run");
    var dir = __dirname + "/../examples/";
    this.sinon.stub(process, "cwd").returns(dir);

    cli.interpret([
      "node", "jshint", "file.js", "--exclude-path=../examples/.customignore"
    ]);

    test.equal(run.args[0][0].ignores[0], path.resolve(dir, "exclude.js"));

    run.restore();
    process.cwd.returns(__dirname + "/../");

    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/file.js$/)).returns("console.log('Hello');")
      .withArgs(sinon.match(/\.jshintignore$/)).returns("examples");

    test.equal(shjs.cat.args.length, 0);

    test.done();
  },

  testAPIIgnores: function (test) {
    var dir = __dirname + "/../data/";
    this.sinon.stub(process, "cwd").returns(dir);
    var result = null;

    cli.run({
      args: [dir + "../tests/unit/fixtures/ignored.js"],
      cwd: dir + "../tests/unit/fixtures/",
      reporter: function (results) { result = results; }
    });

    test.deepEqual(result, []);

    test.done();
  },

  testCollectFiles: function (test) {
    var gather = this.sinon.stub(cli, "gather");
    var args = [];

    gather.returns([]);

    this.sinon.stub(shjs, "test")
      .withArgs("-e", sinon.match(/.*/)).returns(true);

    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/file2?\.js$/)).returns("console.log('Hello');")
      .withArgs(sinon.match(/ignore[\/\\]file\d\.js$/)).returns("console.log('Hello, ignore me');")
      .withArgs(sinon.match(/ignore[\/\\]dir[\/\\]file\d\.js$/)).returns("print('Ignore me');")
      .withArgs(sinon.match(/node_script$/)).returns("console.log('Hello, ignore me');")
      .withArgs(sinon.match(/\.jshintignore$/)).returns(path.join("ignore", "**"));

    cli.interpret([
      "node", "jshint", "file.js", "file2.js", "node_script", path.join("ignore", "file1.js"),
      path.join("ignore", "file2.js"), path.join("ignore", "dir", "file1.js")
    ]);

    args = gather.args[0][0];

    test.equal(args.args[0], "file.js");
    test.equal(args.args[1], "file2.js");
    test.equal(args.args[2], "node_script");
    test.equal(args.args[3], path.join("ignore", "file1.js"));
    test.equal(args.args[4], path.join("ignore", "file2.js"));
    test.equal(args.args[5], path.join("ignore", "dir", "file1.js"));
    test.equal(args.ignores, path.resolve(path.join("ignore", "**")));

    shjs.cat.restore();

    shjs.test.withArgs("-d", sinon.match(/src$/)).returns(true)
      .withArgs("-d", sinon.match(/src[\/\\]lib$/)).returns(true);

    this.sinon.stub(shjs, "ls")
      .withArgs(sinon.match(/src$/)).returns(["lib", "file4.js"])
      .withArgs(sinon.match(/src[\/\\]lib$/)).returns(["file5.js"]);

    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/file2?\.js$/)).returns("console.log('Hello');")
      .withArgs(sinon.match(/file3\.json$/)).returns("{}")
      .withArgs(sinon.match(/src[\/\\]file4\.js$/)).returns("print('Hello');")
      .withArgs(sinon.match(/src[\/\\]lib[\/\\]file5\.js$/)).returns("print('Hello');")
      .withArgs(sinon.match(/\.jshintignore$/)).returns("");

    cli.interpret([
      "node", "jshint", "file.js", "file2.js", "file3.json", "--extra-ext=json", "src"
    ]);

    args = gather.args[1][0];

    test.equal(args.args.length, 4);
    test.equal(args.args[0], "file.js");
    test.equal(args.args[1], "file2.js");
    test.equal(args.args[2], "file3.json");
    test.equal(args.args[3], "src");
    test.equal(args.ignores, false);

    shjs.cat
      .withArgs(sinon.match(/reporter\.js$/)).returns("console.log('Hello');");

    cli.interpret([
      "node", "jshint", "examples"
    ]);

    args = gather.args[2][0];

    test.equal(args.args.length, 1);
    test.equal(args.args[0], "examples");
    test.equal(args.ignores.length, 0);

    test.done();
  },

  testGatherOptionalParameters: function (test) {
    this.sinon.stub(shjs, "test")
      .withArgs("-e", sinon.match(/file.js$/)).returns(true);

    var files = cli.gather({
      args: ["file.js"]
    });

    test.equal(files.length, 1);
    test.equal(files[0], "file.js");

    test.done();
  },

  testGather: function (test) {
    var dir = __dirname + "/../examples/";
    var files = [];
    this.sinon.stub(process, "cwd").returns(dir);

    var demoFiles = [
      [ /file2?\.js$/, "console.log('Hello');" ],
      [ /ignore[\/\\]file\d\.js$/, "console.log('Hello, ignore me');" ],
      [ /ignore[\/\\]dir[\/\\]file\d\.js$/, "print('Ignore me');" ],
      [ /node_script$/, "console.log('Hello, ignore me');" ]
    ];

    var testStub = this.sinon.stub(shjs, "test");
    demoFiles.forEach(function (file) {
      testStub = testStub.withArgs("-e", sinon.match(file[0])).returns(true);
    });

    var catStub = this.sinon.stub(shjs, "cat");
    demoFiles.forEach(function (file) {
      catStub = catStub.withArgs(sinon.match(file[0])).returns(file[1]);
    });

    files = cli.gather({
      args: ["file.js", "file2.js", "node_script",
        path.join("ignore", "file1.js"),
        path.join("ignore", "file2.js"),
        path.join("ignore", "dir", "file1.js")
      ],
      ignores: [path.join("ignore", "**")],
      extensions: ""
    });

    test.equal(shjs.cat.args.length, 0);
    test.equal(files.length, 3);
    test.equal(files[0], "file.js");
    test.equal(files[1], "file2.js");
    test.equal(files[2], "node_script");

    demoFiles = [
      [ /file2?\.js$/, "console.log('Hello');" ],
      [ /file3\.json$/, "{}" ],
      [ /src[\/\\]file4\.js$/, "print('Hello');" ],
      [ /src[\/\\]lib[\/\\]file5\.js$/, "print('Hello'); "]
    ];

    demoFiles.forEach(function (file) {
      testStub = testStub.withArgs("-e", sinon.match(file[0])).returns(true);
    });

    testStub = testStub
      .withArgs("-e", sinon.match(/src$/)).returns(true)
      .withArgs("-e", sinon.match(/src[\/\\]lib$/)).returns(true)
      .withArgs("-d", sinon.match(/src$/)).returns(true)
      .withArgs("-d", sinon.match(/src[\/\\]lib$/)).returns(true);

    this.sinon.stub(shjs, "ls")
      .withArgs(sinon.match(/src$/)).returns(["lib", "file4.js"])
      .withArgs(sinon.match(/src[\/\\]lib$/)).returns(["file5.js"]);

    demoFiles.forEach(function (file) {
      catStub = catStub.withArgs(sinon.match(file[0])).returns(file[1]);
    });

    cli.interpret([
      "node", "jshint", "file.js", "file2.js", "file3.json", "--extra-ext=json", "src"
    ]);

    files = cli.gather({
      args: ["file.js", "file2.js", "file3.json", "src"],
      extensions: "json",
      ignores: []
    });

    test.equal(shjs.cat.args.length, 5);
    test.equal(files.length, 5);
    test.equal(files[0], "file.js");
    test.equal(files[1], "file2.js");
    test.equal(files[2], "file3.json");
    test.equal(files[3], path.join("src", "lib", "file5.js"));
    test.equal(files[4], path.join("src", "file4.js"));

    shjs.test.restore();
    shjs.ls.restore();
    shjs.cat.restore();
    process.cwd.restore();

    this.sinon.stub(process, "cwd").returns(__dirname + "/../");
    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/reporter\.js$/)).returns("console.log('Hello');");

    files = cli.gather({
      args: ["examples"],
      extensions: "json",
      ignores: []
    });

    test.equal(shjs.cat.args.length, 0);
    test.equal(files.length, 1);
    test.equal(files[0], path.join("examples", "reporter.js"));

    test.done();
  },

  testStatusCode: function (test) {
    var rep = require("../examples/reporter.js");
    var dir = __dirname + "/../examples/";
    this.sinon.stub(rep, "reporter");
    this.sinon.stub(process, "cwd").returns(dir);

    this.sinon.stub(shjs, "test")
      .withArgs("-e", sinon.match(/(pass\.js|fail\.js)$/)).returns(true);

    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/pass\.js$/)).returns("function test() { return 0; }")
      .withArgs(sinon.match(/fail\.js$/)).returns("console.log('Hello')");

    cli.interpret([
      "node", "jshint", "pass.js", "--reporter=reporter.js"
    ]);

    cli.interpret([
      "node", "jshint", "fail.js", "--reporter=reporter.js"
    ]);

    test.strictEqual(cli.exit.args[0][0], 0);
    test.equal(cli.exit.args[1][0], 2);

    test.done();
  }
};

exports.extract = {
  setUp: function (cb) {
    this.sinon.stub(cli, "exit");
    cb();
  },

  basic: function (test) {
    var html = "<html>text<script>var a = 1;</script></html>";
    var text = "hello world";
    var js   = "var a = 1;";

    test.equal(cli.extract(html, "never"), html);
    test.equal(cli.extract(html, "auto"), js);
    test.equal(cli.extract(html, "always"), js);

    test.equal(cli.extract(js, "never"), js);
    test.equal(cli.extract(js, "auto"), js);
    test.equal(cli.extract(js, "always"), "");

    test.equal(cli.extract(text, "never"), text);
    test.equal(cli.extract(text, "auto"), text);
    test.equal(cli.extract(text, "always"), "");

    html = [
      "<html>",
        "<script type='text/javascript'>",
          "var a = 1;",
        "</script>",
        "<h1>Hello!</h1>",
        "<script type='text/coffeescript'>",
          "a = 1",
        "</script>",
        "<script>",
          "var b = 1;",
        "</script>",
      "</html>" ].join("\n");

    js = ["\n", "var a = 1;", "\n\n\n\n\n", "var b = 1;\n" ].join("\n");

    test.equal(cli.extract(html, "auto"), js);
    test.done();
  },

  withIndent: function (test) {
    var html = [
      "<html>",
        "<script type='text/javascript'>",
        "  var a = 1;",
        "    var b = 1;",
        "</script>",
      "</html>" ].join("\n");

    // leading whitespace is removed by amount from first js line
    var js = ["\n", "var a = 1;", "  var b = 1;\n"].join("\n");

    test.equal(cli.extract(html, "auto"), js);
    test.done();
  },

  withIndentReportLocation: function (test) {
    var rep = require("../examples/reporter.js");
    var errors = [];
    this.sinon.stub(rep, "reporter", function (res) {
      errors = errors.concat(res);
    });

    var dir = __dirname + "/../examples/";
    this.sinon.stub(process, "cwd").returns(dir);

    var html = [
      "<html>",
      "<script type='text/javascript'>",
      "  /* jshint indent: 2*/",
      "  var a = 1;",
      "    var b = 1",
      "</script>",
      "</html>"
    ].join("\n");

    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/indent\.html$/)).returns(html);

    this.sinon.stub(shjs, "test")
      .withArgs("-e", sinon.match(/indent\.html$/)).returns(true);

    cli.interpret([
      "node", "jshint", "indent.html", "--extract", "always", "--reporter=reporter.js"
    ]);
    test.equal(cli.exit.args[0][0], 2);

    test.equal(errors.length, 1, "found single error");
    var lintError = errors[0].error;
    test.ok(lintError, "have error object");
    test.equal(lintError.code, "W033", "found missing semicolon warning");
    test.equal(lintError.line, 5, "misaligned line");
    test.equal(lintError.character, 14, "first misaligned character at column 5");

    test.done();
  },

  withIndentReportLocationMultipleFragments: function (test) {
    var rep = require("../examples/reporter.js");
    var errors = [];
    this.sinon.stub(rep, "reporter", function (res) {
      errors = errors.concat(res);
    });

    var dir = __dirname + "/../examples/";
    this.sinon.stub(process, "cwd").returns(dir);

    var html = [
      "<html>",
      "<script type='text/javascript'>",
      "  /* jshint indent: 2*/",
      "  var a = 1;",
      "    var b = 1", // misindented on purpose
      "</script>",
      "<p>nothing</p>",
      "<script type='text/javascript'>",
      "  /* jshint indent: 2*/",
      "      var a = 1", // misindented on purpose
      "</script>",
      "</html>"
    ].join("\n");

    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/indent\.html$/)).returns(html);

    this.sinon.stub(shjs, "test")
      .withArgs("-e", sinon.match(/indent\.html$/)).returns(true);

    cli.interpret([
      "node", "jshint", "indent.html", "--extract", "always", "--reporter=reporter.js"
    ]);
    test.equal(cli.exit.args[0][0], 2);

    test.equal(errors.length, 2, "found two errors");

    test.equal(errors[0].error.line, 5, "first error line");
    test.equal(errors[0].error.character, 14, "first error column");

    test.equal(errors[1].error.line, 10, "second error line");
    test.equal(errors[1].error.character, 16, "second error column");

    test.done();
  },

  firstLine: function (test) {
    var rep = require("../examples/reporter.js");
    var errors = [];
    this.sinon.stub(rep, "reporter", function (res) {
      errors = errors.concat(res);
    });

    var dir = __dirname + "/../examples/";
    this.sinon.stub(process, "cwd").returns(dir);

    var html = [
      "<script>",
      "  function a() {",
      "    return 5;",
      "  }",
      "</script>"
    ].join("\n");

    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/firstLine\.html$/)).returns(html);

    this.sinon.stub(shjs, "test")
      .withArgs("-e", sinon.match(/firstLine\.html$/)).returns(true);

    cli.interpret([
      "node", "jshint", "firstLine.html", "--extract", "always", "--reporter=reporter.js"
    ]);
    test.equal(cli.exit.args[0][0], 0);

    test.equal(errors.length, 0, "found no errors");

    var js = [
      "",
      "function a() {",
      "  return 5;",
      "}",
      ""
    ].join("\n");

    test.equal(cli.extract(html, "auto"), js);

    test.done();
  },

  sameLine: function (test) {
    var rep = require("../examples/reporter.js");
    var errors = [];
    this.sinon.stub(rep, "reporter", function (res) {
      errors = errors.concat(res);
    });

    var dir = __dirname + "/../examples/";
    this.sinon.stub(process, "cwd").returns(dir);

    var html = [
    "<script>",
    "  function a() {",
    "    return 5;",
    "  }",
    "</script><script>",
    "  function b() {",
    "    return 'hello world';",
    "  }",
    "</script>"
    ].join("\n");

    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/sameLine\.html$/)).returns(html);

    this.sinon.stub(shjs, "test")
      .withArgs("-e", sinon.match(/sameLine\.html$/)).returns(true);

    cli.interpret([
      "node", "jshint", "sameLine.html", "--extract", "always", "--reporter=reporter.js"
    ]);
    test.equal(cli.exit.args[0][0], 0);

    test.equal(errors.length, 0, "found no errors");

    var js = [
      "",
      "function a() {",
      "  return 5;",
      "}",
      "",
      "function b() {",
      "  return 'hello world';",
      "}",
      ""
    ].join("\n");

    test.equal(cli.extract(html, "auto"), js);

    test.done();
  },

  usingMultipleFiles: function (test) {
    var rep = require("../examples/reporter.js");
    var errors = [];
    this.sinon.stub(rep, "reporter", function (res) {
      errors = errors.concat(res);
    });

    var dir = __dirname + "/../examples/";
    this.sinon.stub(process, "cwd").returns(dir);

    var html = [
      "<script type='text/javascript'>",
      "  a()",
      "</script>",
    ].join("\n");

    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/indent\.html$/)).returns(html)
      .withArgs(sinon.match(/another\.html$/)).returns("\n\n<script>a && a();</script>");

    this.sinon.stub(shjs, "test")
      .withArgs("-e", sinon.match(/indent\.html$/)).returns(true)
      .withArgs("-e", sinon.match(/another\.html$/)).returns(true);

    cli.interpret([
      "node", "jshint", "indent.html", "another.html", "--extract", "auto", "--reporter=reporter.js"
    ]);
    test.equal(cli.exit.args[0][0], 2);

    test.equal(errors.length, 2, "found two errors");
    var lintError = errors[0].error;
    test.ok(lintError, "have error object");
    test.equal(lintError.code, "W033", "found missing semicolon warning");
    test.equal(lintError.line, 2, "misaligned line");
    test.equal(lintError.character, 6, "first misaligned character at column 2");

    lintError = errors[1].error;
    test.ok(lintError, "have error object");
    test.equal(lintError.code, "W030", "found an expression warning");
    test.equal(lintError.line, 3, "misaligned line");
    test.equal(lintError.character, 8, "first misaligned character at column 8");

    test.done();
  },

  "\\r\\n as line terminator (gh-2825)": function (test) {
    var html = [
      "<script>",
      "  var a = 3;",
      "</script>"
    ].join("\r\n");

    var js = "\nvar a = 3;\n";

    test.equal(cli.extract(html, "auto"), js);

    test.done();
  }
};

exports.useStdin = {
  setUp: function (cb) {
    this.stdin = require('mock-stdin').stdin();
    this.sinon.stub(cli, "exit");
    cb();
  },

  testFilenameOption: function (test) {
    var rep = require("../examples/reporter.js");
    var errors = [];
    this.sinon.stub(rep, "reporter", function (res) {
      errors = errors.concat(res);
    });

    var dir = __dirname + "/../examples/";
    this.sinon.stub(process, "cwd").returns(dir);

    var jshintrc = JSON.stringify({ undef: true });

    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/[\/\\]fake[\/\\]\.jshintrc$/)).returns(jshintrc);

    this.sinon.stub(shjs, "test")
      .withArgs("-e", sinon.match(/fake[\/\\]\.jshintrc$/)).returns(true);

    cli.interpret([
      "node", "jshint", "--filename", "fake/fakescript.js", "--reporter=reporter.js", "-"
    ]);

    var bad = [
      'function returnUndef() {',
      '  return undefinedVariable;',
      '}',
      'returnUndef();'
    ];

    this.stdin.send(bad);
    this.stdin.end();

    test.equal(errors.length, 1, "should be a single error.");
    test.equal(cli.exit.args[0][0], 2, "status code should be 2 when there is a linting error.");

    test.done();
  },

  testFilenameOverridesOption: function (test) {
    test.expect(4);
    var rep = require("../examples/reporter.js");
    var errors = [];
    this.sinon.stub(rep, "reporter", function (res) {
      errors = errors.concat(res);
    });

    var dir = __dirname + "/../examples/";
    this.sinon.stub(process, "cwd").returns(dir);

    var jshintrc = JSON.stringify({
      undef: false,
      overrides: {
        "**/fake/**": {
          undef: true
        }
      }
    });

    this.sinon.stub(shjs, "cat")
      .withArgs(sinon.match(/\.jshintrc$/)).returns(jshintrc);

    this.sinon.stub(shjs, "test")
      .withArgs("-e", sinon.match(/fake[\/\\]\.jshintrc$/)).returns(true)
      .withArgs("-e", sinon.match(/\.jshintrc$/)).returns(true);

    cli.interpret([
      "node", "jshint", "--filename", "fake/fakescript.js", "--reporter=reporter.js", "-"
    ]);

    var bad = [
      'function returnUndef() {',
      '  return undefinedVariable;',
      '}',
      'returnUndef();'
    ];

    this.stdin.send(bad);
    this.stdin.end();

    test.equal(errors.length, 1, "should be a single error.");
    test.equal(cli.exit.args[0][0], 2, "status code should be 2 when there is a linting error.");

    errors.length = 0;
    cli.exit.restore();
    this.sinon.stub(cli, "exit");

    this.stdin.restore();
    this.stdin = require('mock-stdin').stdin();
    cli.interpret([
      "node", "jshint", "--filename", "fake2/fakescript.js", "--reporter=reporter.js", "-"
    ]);

    this.stdin.send(bad);
    this.stdin.end();

    test.equal(errors.length, 0, "should be no errors.");
    test.equal(cli.exit.args[0][0], 0, "status code should be 0 when there is no linting error.");
    test.done();
  }
};
