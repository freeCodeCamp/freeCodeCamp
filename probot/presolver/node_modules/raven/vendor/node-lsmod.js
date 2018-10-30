'use strict';

// Original repository: https://github.com/defunctzombie/node-lsmod/
//
// [2018-02-09] @kamilogorek - Handle scoped packages structure

// builtin
var fs = require('fs');
var path = require('path');

// node 0.6 support
fs.existsSync = fs.existsSync || path.existsSync;

// mainPaths are the paths where our mainprog will be able to load from
// we store these to avoid grabbing the modules that were loaded as a result
// of a dependency module loading its dependencies, we only care about deps our
// mainprog loads
var mainPaths = (require.main && require.main.paths) || [];

module.exports = function() {
  var paths = Object.keys(require.cache || []);

  // module information
  var infos = {};

  // paths we have already inspected to avoid traversing again
  var seen = {};

  paths.forEach(function(p) {
    /* eslint-disable consistent-return */

    var dir = p;

    (function updir() {
      var orig = dir;
      dir = path.dirname(orig);

      if (/@[^/]+$/.test(dir)) {
        dir = path.dirname(dir);
      }

      if (!dir || orig === dir || seen[orig]) {
        return;
      } else if (mainPaths.indexOf(dir) < 0) {
        return updir();
      }

      var pkgfile = path.join(orig, 'package.json');
      var exists = fs.existsSync(pkgfile);

      seen[orig] = true;

      // travel up the tree if no package.json here
      if (!exists) {
        return updir();
      }

      try {
        var info = JSON.parse(fs.readFileSync(pkgfile, 'utf8'));
        infos[info.name] = info.version;
      } catch (e) {}
    })();

    /* eslint-enable consistent-return */
  });

  return infos;
};
