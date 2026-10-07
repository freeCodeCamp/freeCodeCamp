"use strict";

exports.__esModule = true;
exports.createTimerReporter = void 0;
var _constants = require("./constants");
/*
 * This module is used when calling reporter.
 * these logs
 */

const createTimerReporter = ({
  text,
  id,
  span,
  reporter,
  reporterActions,
  pluginName
}) => {
  return {
    start() {
      reporterActions.startActivity({
        id,
        text: text || `__timer__`,
        type: _constants.ActivityTypes.Spinner
      });
    },
    setStatus(statusText) {
      reporterActions.setActivityStatusText({
        id,
        statusText
      });
    },
    panicOnBuild(errorMeta, error) {
      span.finish();
      reporterActions.setActivityErrored({
        id
      });
      return reporter.panicOnBuild(errorMeta, error, pluginName);
    },
    panic(errorMeta, error) {
      span.finish();
      reporterActions.endActivity({
        id,
        status: _constants.ActivityStatuses.Failed
      });
      return reporter.panic(errorMeta, error, pluginName);
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
exports.createTimerReporter = createTimerReporter;