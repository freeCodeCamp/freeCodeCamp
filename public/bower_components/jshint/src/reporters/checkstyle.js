// Author: Boy Baukema
// http://github.com/relaxnow
module.exports =
{
  reporter: function(results, data, opts) {
    "use strict";

    var files = {},
      out = [],
      pairs = {
        "&": "&amp;",
        '"': "&quot;",
        "'": "&apos;",
        "<": "&lt;",
        ">": "&gt;"
      },
      fileName, i, issue, errorMessage;

    opts = opts || {};

    function encode(s) {
      for (var r in pairs) {
        if (typeof(s) !== "undefined") {
          s = s.replace(new RegExp(r, "g"), pairs[r]);
        }
      }
      return s || "";
    }

    results.forEach(function(result) {
      // Register the file
      result.file = result.file.replace(/^\.\//, '');
      if (!files[result.file]) {
        files[result.file] = [];
      }

      // Create the error message
      errorMessage = result.error.reason;
      if (opts.verbose) {
        errorMessage += ' (' + result.error.code + ')';
      }

      var typeNo = result.error.code;
      var severity = '';
      switch (typeNo[0]) {
        case 'I':
          severity = 'info';
          break;
        case 'W':
          severity = 'warning';
          break;
        case 'E':
          severity = 'error';
          break;
      }

      // Add the error
      files[result.file].push({
        severity: severity,
        line: result.error.line,
        column: result.error.character,
        message: errorMessage,
        source: 'jshint.' + result.error.code
      });
    });


    out.push("<?xml version=\"1.0\" encoding=\"utf-8\"?>");
    out.push("<checkstyle version=\"4.3\">");

    for (fileName in files) {
      if (files.hasOwnProperty(fileName)) {
        out.push("\t<file name=\"" + fileName + "\">");
        for (i = 0; i < files[fileName].length; i++) {
          issue = files[fileName][i];
          out.push(
            "\t\t<error " +
              "line=\"" + issue.line + "\" " +
              "column=\"" + issue.column + "\" " +
              "severity=\"" + issue.severity + "\" " +
              "message=\"" + encode(issue.message) + "\" " +
              "source=\"" + encode(issue.source) + "\" " +
              "/>"
          );
        }
        out.push("\t</file>");
      }
    }

    out.push("</checkstyle>");

    console.log(out.join("\n"));
  }
};
