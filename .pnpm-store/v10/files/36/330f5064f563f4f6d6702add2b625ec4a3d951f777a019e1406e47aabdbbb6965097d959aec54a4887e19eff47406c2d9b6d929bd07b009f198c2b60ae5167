"use strict";

exports.__esModule = true;
exports.createPhantomReporter = void 0;
var _constants = require("./constants");
const createPhantomReporter = ({
  text,
  id,
  span,
  reporterActions
}) => {
  return {
    start() {
      reporterActions.startActivity({
        id,
        text,
        type: _constants.ActivityTypes.Hidden
      });
    },
    end() {
      span.finish();
      reporterActions.endActivity({
        id,
        status: _constants.ActivityStatuses.Success
      });
    },
    span
  };
};
exports.createPhantomReporter = createPhantomReporter;