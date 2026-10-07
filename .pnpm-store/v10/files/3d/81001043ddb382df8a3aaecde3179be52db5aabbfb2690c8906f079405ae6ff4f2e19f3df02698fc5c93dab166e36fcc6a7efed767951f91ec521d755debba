"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.writeOutRedirects = writeOutRedirects;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _redirectsWriter = require("../bootstrap/redirects-writer");
async function writeOutRedirects({
  parentSpan
}) {
  // Write out redirects.
  const activity = _reporter.default.activityTimer(`write out redirect data`, {
    parentSpan
  });
  activity.start();
  await (0, _redirectsWriter.writeRedirects)();
  (0, _redirectsWriter.startRedirectListener)();
  activity.end();
}
//# sourceMappingURL=write-out-redirects.js.map