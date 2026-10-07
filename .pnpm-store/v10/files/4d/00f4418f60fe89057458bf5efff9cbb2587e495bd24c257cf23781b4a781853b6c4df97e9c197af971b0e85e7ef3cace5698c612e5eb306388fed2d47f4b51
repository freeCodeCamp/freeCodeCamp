"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.createNoticeMessage = void 0;
exports.showExperimentNoticeAfterTimeout = showExperimentNoticeAfterTimeout;
exports.showExperimentNotices = void 0;
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _chalk = _interopRequireDefault(require("chalk"));
const ONE_DAY = 24 * 60 * 60 * 1000;
const noticesToShow = [];
const configStoreKey = experimentIdentifier => `lastExperimentNotice.${experimentIdentifier}`;
function showExperimentNoticeAfterTimeout(experimentIdentifier, umbrellaLink, noticeText, showNoticeAfterMs, minimumIntervalBetweenNoticesMs = ONE_DAY) {
  const lastTimeWeShowedNotice = (0, _gatsbyCoreUtils.getConfigStore)().get(configStoreKey(experimentIdentifier));
  if (lastTimeWeShowedNotice) {
    if (Date.now() - lastTimeWeShowedNotice < minimumIntervalBetweenNoticesMs) {
      return undefined;
    }
  }
  const noticeTimeout = setTimeout(() => {
    noticesToShow.push({
      noticeText,
      umbrellaLink,
      experimentIdentifier
    });
  }, showNoticeAfterMs);
  return function clearNoticeTimeout() {
    clearTimeout(noticeTimeout);
  };
}
const createNoticeMessage = notices => {
  let message = `\nHi from the Gatsby maintainers! Based on what we see in your site, these coming
features may help you. All of these can be enabled within gatsby-config.js via
flags (samples below)`;
  notices.forEach(notice => message += `

${_chalk.default.bgBlue.bold(notice.experimentIdentifier)} (${notice.umbrellaLink}), ${notice.noticeText}\n`);
  return message;
};
exports.createNoticeMessage = createNoticeMessage;
const showExperimentNotices = () => {
  if (noticesToShow.length > 0) {
    // Store that we're showing the invite.
    noticesToShow.forEach(notice => (0, _gatsbyCoreUtils.getConfigStore)().set(configStoreKey(notice.experimentIdentifier), Date.now()));
    const message = createNoticeMessage(noticesToShow);
    _reporter.default.info(message);
  }
};
exports.showExperimentNotices = showExperimentNotices;
//# sourceMappingURL=show-experiment-notice.js.map