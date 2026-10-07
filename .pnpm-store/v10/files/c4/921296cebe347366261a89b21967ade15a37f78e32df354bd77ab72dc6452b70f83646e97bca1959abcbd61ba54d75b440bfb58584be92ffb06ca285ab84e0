"use strict";

var _feedback = require("../utils/feedback");
module.exports = async function feedback(program) {
  if (program.disable) {
    program.report.info(`Disabling gatsby feedback requests`);
    (0, _feedback.setFeedbackDisabledValue)(true);
    return;
  }
  if (program.enable) {
    program.report.info(`Enabling gatsby feedback requests`);
    (0, _feedback.setFeedbackDisabledValue)(false);
    return;
  }
  (0, _feedback.showFeedbackRequest)();
};
//# sourceMappingURL=feedback.js.map