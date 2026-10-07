"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.customizeSchema = customizeSchema;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _createSchemaCustomization = require("../utils/create-schema-customization");
async function customizeSchema({
  parentSpan,
  deferNodeMutation,
  refresh // webhookBody,//coming soon
}) {
  const activity = _reporter.default.activityTimer(`createSchemaCustomization`, {
    parentSpan
  });
  activity.start();
  await (0, _createSchemaCustomization.createSchemaCustomization)({
    parentSpan,
    refresh,
    deferNodeMutation
    // webhookBody,
  });

  activity.end();
}
//# sourceMappingURL=customize-schema.js.map