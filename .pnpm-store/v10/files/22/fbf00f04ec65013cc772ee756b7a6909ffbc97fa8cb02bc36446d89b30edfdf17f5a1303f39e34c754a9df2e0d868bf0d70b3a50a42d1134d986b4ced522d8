"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.writeOutRequires = writeOutRequires;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _requiresWriter = require("../bootstrap/requires-writer");
var _assertStore = require("../utils/assert-store");
async function writeOutRequires({
  store,
  parentSpan
}) {
  (0, _assertStore.assertStore)(store);

  // Write out files.
  const activity = _reporter.default.activityTimer(`write out requires`, {
    parentSpan
  });
  activity.start();
  try {
    await (0, _requiresWriter.writeAll)(store.getState());
  } catch (err) {
    _reporter.default.panic(`Failed to write out requires`, err);
  }
  activity.end();
}
//# sourceMappingURL=write-out-requires.js.map