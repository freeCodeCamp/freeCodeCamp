"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createSchemaCustomization = void 0;
var _apiRunnerNode = _interopRequireDefault(require("./api-runner-node"));
var _redux = require("../redux");
const createSchemaCustomization = async ({
  refresh = false,
  parentSpan,
  deferNodeMutation
}) => {
  if (refresh) {
    _redux.store.dispatch({
      type: `CLEAR_SCHEMA_CUSTOMIZATION`
    });
  }
  await (0, _apiRunnerNode.default)(`createSchemaCustomization`, {
    parentSpan,
    deferNodeMutation,
    traceId: !refresh ? `initial-createSchemaCustomization` : `refresh-createSchemaCustomization`
  });
};
exports.createSchemaCustomization = createSchemaCustomization;
//# sourceMappingURL=create-schema-customization.js.map