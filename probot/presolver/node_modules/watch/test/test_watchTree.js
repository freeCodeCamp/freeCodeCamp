var fs = require('fs')
  , watch = require('../main')
  , assert = require('assert')
  ;

//
// Demonstrate that the function of 'filter' is semantically inconsistent with
// usual convention, that returning true means 'keep this'.
//
function isDirOrQ(f, stat) { return stat.isDirectory() || f === 'Q'; }

watch.watchTree(__dirname, { filter: isDirOrQ }, function (f, curr, prev) {
  if (typeof f == 'object' && prev === null && curr === null) {
    Object.keys(f).forEach(function(name) {
      var stat = f[name];
      assert(isDirOrQ(name, stat));
    });

    // If the process never exits then `unwatchTree` failed to unwatch all
    // the files.
    watch.unwatchTree(__dirname);
  }
});
