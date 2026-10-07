"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.buildSchema = buildSchema;
var _schema = require("../schema");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
async function buildSchema({
  parentSpan,
  refresh
}) {
  if (refresh && Boolean(process.env.GATSBY_EXPERIMENTAL_DISABLE_SCHEMA_REBUILD)) {
    return;
  }
  const activity = _reporter.default.activityTimer(`building schema`, {
    parentSpan
  });
  activity.start();
  await (0, _schema.build)({
    parentSpan: activity.span
  });
  activity.end();
}
//# sourceMappingURL=build-schema.js.map