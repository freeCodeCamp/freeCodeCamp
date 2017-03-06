"use strict";

// Reporter that respects Unix output conventions
// frequently employed by preprocessors and compilers.
// The format is "FILENAME:LINE:COL: MESSAGE".

module.exports = {
  reporter: function(results, data, opts) {
    var len = results.length;
    var str = "";
    var prevfile;

    opts = opts || {};

    results.forEach(function(result) {
      var file = result.file;
      var error = result.error;

      if (prevfile && prevfile !== file) {
        str += "\n";
      }
      prevfile = file;

      str += file + ":" + error.line + ":" + error.character + ": " + error.reason;

      if (opts.verbose) {
        str += " (" + error.code + ")";
      }

      str += "\n";
    });

    if (str) {
      console.log(str + "\n" + len + " error" + ((len === 1) ? "" : "s"));
    }
  }
};
