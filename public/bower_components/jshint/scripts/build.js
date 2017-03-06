"use strict";

var browserify = require("browserify");
var path       = require("path");
var version    = require("../package.json").version;

var srcDir     = path.join(__dirname, "../src");

var targets = ["web", "rhino"];

module.exports = function(target, done) {
  var bundle = browserify();

  done = done || function() {};

  if (targets.indexOf(target) === -1) {
    done(new Error("Unrecognized target: '" + target + "'"));
    return;
  }

  bundle.require(srcDir + "/jshint.js", { expose: "jshint" });

  return bundle.bundle(function(err, src) {
    var wrapped;

    if (err) {
      done(err);
      return;
    }

    wrapped = [ "/*! " + version + " */",
      "var JSHINT;",
      "if (typeof window === 'undefined') window = {};",
      "(function () {",
        "var require;",
        src,
        "JSHINT = require('jshint').JSHINT;",
        "if (typeof exports === 'object' && exports) exports.JSHINT = JSHINT;",
      "}());"
    ];

    if (target === "rhino") {
      wrapped.splice(0, 0, "#!/usr/bin/env rhino", "var window = {};");
    }

    done(null, version, wrapped.join("\n"));
  });
};
