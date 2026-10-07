"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _fsExtra = _interopRequireDefault(require("fs-extra"));
var _path = _interopRequireDefault(require("path"));
var _findCacheDir = _interopRequireDefault(require("find-cache-dir"));
var _feedback = require("../utils/feedback");
module.exports = async function clean(program) {
  const {
    directory,
    report
  } = program;
  const directories = [`.cache`, `public`,
  // Ensure we clean babel loader cache
  (0, _findCacheDir.default)({
    name: `babel-loader`
  }), (0, _findCacheDir.default)({
    name: `terser-webpack-plugin`
  })].filter(Boolean);
  report.info(`Deleting ${directories.join(`, `)}`);
  await Promise.all(directories.map(dir => _fsExtra.default.remove(_path.default.join(directory, dir))));
  report.info(`Successfully deleted directories`);
  if (await (0, _feedback.userGetsSevenDayFeedback)()) {
    (0, _feedback.showSevenDayFeedbackRequest)();
  } else if (await (0, _feedback.userPassesFeedbackRequestHeuristic)()) {
    (0, _feedback.showFeedbackRequest)();
  }
};
//# sourceMappingURL=clean.js.map