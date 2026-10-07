"use strict";

exports.__esModule = true;
exports.reportError = exports.clearError = void 0;
const errorMap = {};
const handleErrorOverlay = () => {
  const errors = Object.values(errorMap);
  let errorsToDisplay = [];
  if (errors.length > 0) {
    errorsToDisplay = errors.flatMap(e => e).filter(Boolean);
  }
  if (errorsToDisplay.length > 0) {
    window._gatsbyEvents.push([`FAST_REFRESH`, {
      action: `SHOW_GRAPHQL_ERRORS`,
      payload: errorsToDisplay
    }]);
  } else {
    window._gatsbyEvents.push([`FAST_REFRESH`, {
      action: `CLEAR_GRAPHQL_ERRORS`
    }]);
  }
};
const clearError = errorID => {
  delete errorMap[errorID];
  handleErrorOverlay();
};
exports.clearError = clearError;
const reportError = (errorID, error) => {
  if (error) {
    errorMap[errorID] = error;
  }
  handleErrorOverlay();
};
exports.reportError = reportError;
//# sourceMappingURL=error-overlay-handler.js.map