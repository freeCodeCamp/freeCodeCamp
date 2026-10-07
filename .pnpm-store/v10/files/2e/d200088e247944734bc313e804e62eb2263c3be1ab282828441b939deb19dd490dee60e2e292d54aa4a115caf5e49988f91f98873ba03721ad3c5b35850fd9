#!/usr/bin/env node
"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = function(cb, mod) {
  return function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
};

// node_modules/semver-compare/index.js
var require_semver_compare = __commonJS({
  "node_modules/semver-compare/index.js": function(exports2, module2) {
    module2.exports = function cmp(a, b) {
      var pa = a.split(".");
      var pb = b.split(".");
      for (var i = 0; i < 3; i++) {
        var na = Number(pa[i]);
        var nb = Number(pb[i]);
        if (na > nb) return 1;
        if (nb > na) return -1;
        if (!isNaN(na) && isNaN(nb)) return 1;
        if (isNaN(na) && !isNaN(nb)) return -1;
      }
      return 0;
    };
  }
});

// node_modules/please-upgrade-node/index.js
var require_please_upgrade_node = __commonJS({
  "node_modules/please-upgrade-node/index.js": function(exports2, module2) {
    var semverCompare = require_semver_compare();
    module2.exports = function pleaseUpgradeNode2(pkg, opts) {
      var opts = opts || {};
      var requiredVersion = pkg.engines.node.replace(">=", "");
      var currentVersion = process.version.replace("v", "");
      if (semverCompare(currentVersion, requiredVersion) === -1) {
        if (opts.message) {
          console.error(opts.message(requiredVersion));
        } else {
          console.error(
            pkg.name + " requires at least version " + requiredVersion + " of Node, please upgrade"
          );
        }
        if (opts.hasOwnProperty("exitCode")) {
          process.exit(opts.exitCode);
        } else {
          process.exit(1);
        }
      }
    };
  }
});

// bin/prettier.cjs
var nodeModule = require("module");
if (typeof nodeModule.enableCompileCache === "function") {
  nodeModule.enableCompileCache();
}
var pleaseUpgradeNode = require_please_upgrade_node();
var packageJson = require("../package.json");
pleaseUpgradeNode(packageJson);
var dynamicImport = new Function("module", "return import(module)");
var promise;
var index = process.argv.indexOf("--experimental-cli");
if (process.env.PRETTIER_EXPERIMENTAL_CLI || index !== -1) {
  if (index !== -1) {
    process.argv.splice(index, 1);
  }
  promise = dynamicImport("../internal/experimental-cli.mjs").then(
    function(cli) {
      return cli.__promise;
    }
  );
} else {
  promise = dynamicImport("../internal/legacy-cli.mjs").then(function runCli(cli) {
    return cli.run();
  });
}
module.exports.__promise = promise;
