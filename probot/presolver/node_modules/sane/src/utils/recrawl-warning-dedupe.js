'use strict';

var RECRAWL_WARNINGS = []; // shared structure, one per process.
var REG = /Recrawled this watch (\d+) times, most recently because:\n([^:]+)/;

module.exports = RecrawlWarning;
function RecrawlWarning(root, count) {
  this.root = root;
  this.count = count;
}

RecrawlWarning.RECRAWL_WARNINGS = RECRAWL_WARNINGS;
RecrawlWarning.REGEXP = REG;

RecrawlWarning.findByRoot = function(root) {
  for (var i = 0; i < RECRAWL_WARNINGS.length; i++) {
    var warning = RECRAWL_WARNINGS[i];
    if (warning.root === root) {
      return warning;
    }
  }
};

RecrawlWarning.isRecrawlWarningDupe = function(warningMessage) {
  if (typeof warningMessage !== 'string') {
    return false;
  }
  var match = warningMessage.match(REG);
  if (!match) {
    return false;
  }
  var count = Number(match[1]);
  var root = match[2];

  var warning = RecrawlWarning.findByRoot(root);

  if (warning) {
    // only keep the highest count, assume count to either stay the same or
    // increase.
    if (warning.count >= count) {
      return true;
    } else {
      // update the existing warning to the latest (highest) count
      warning.count = count;
      return false;
    }
  } else {
    RECRAWL_WARNINGS.push(new RecrawlWarning(root, count));
    return false;
  }
};
