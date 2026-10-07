"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.setFeedbackDisabledValue = setFeedbackDisabledValue;
exports.showFeedbackRequest = showFeedbackRequest;
exports.showSevenDayFeedbackRequest = showSevenDayFeedbackRequest;
exports.userGetsSevenDayFeedback = userGetsSevenDayFeedback;
exports.userPassesFeedbackRequestHeuristic = userPassesFeedbackRequestHeuristic;
var _reporter = _interopRequireDefault(require("gatsby-cli/lib/reporter"));
var _gatsbyCoreUtils = require("gatsby-core-utils");
var _getDayOfYear = _interopRequireDefault(require("date-fns/getDayOfYear"));
const feedbackKey = `feedback.disabled`;
const lastDateKey = `feedback.lastRequestDate`;
const firstDateKey = `feedback.firstCheckDate`;
const sevenDayKey = `feedback.sevenDayFeedbackDate`;

// This function is designed to be used by `gatsby feedback --disable`
// and `gatsby feedback --enable`. This key is used to determine
// if a user is allowed to be solicited for feedback
function setFeedbackDisabledValue(enabled) {
  (0, _gatsbyCoreUtils.getConfigStore)().set(feedbackKey, enabled);
}

// Print the feedback request to the user
function showFeedbackRequest() {
  (0, _gatsbyCoreUtils.getConfigStore)().set(lastDateKey, Date.now());
  _reporter.default.log(`\n\nHello! Will you help Gatsby improve by taking a four question survey?\nIt takes less than five minutes and your ideas and feedback will be very helpful.`);
  _reporter.default.log(`\nGive us your feedback here: https://gatsby.dev/feedback\n\n`);
}
function showSevenDayFeedbackRequest() {
  (0, _gatsbyCoreUtils.getConfigStore)().set(sevenDayKey, Date.now());
  _reporter.default.log(`\n\nHi there! Will you tell us about how you're learning Gatsby? \nIt takes less than 5 minutes and your feedback will help us make installing and using Gatsby so much better.`);
  _reporter.default.log(`\nGive us your feedback here: https://gatsby.dev/feedback-survey\n\n`);
}
const randomChanceToBeTrue = () => {
  // This is spreading the request volume over the quarter.
  // We are grabbing a randomNumber within the spread of a first day
  // of a quarter, to the last day
  const currentQuarter = Math.floor((new Date().getMonth() + 3) / 3);
  const randomNumber = Math.floor(Math.random() * (
  // One quarter year in days (roughly)
  30 * 3));
  const randomNumberWithinQuarter = randomNumber + 30 * 3 * (currentQuarter - 1);
  return randomNumberWithinQuarter === (0, _getDayOfYear.default)(new Date());
};

// We are only showing feedback requests to users in if they pass a few checks:
// 1. They pass a Math.random() check. This is a skateboard version of not sending out all requests in one day.
// 2. Gatsby is not running in CI
// 3. They don't have the environment variable to disable feedback present
// 4. They haven't disabled the feedback mechanism
// 5. It's been at least 3 months since the last feedback request
// 6. They are on the most recent version of Gatsby
async function userPassesFeedbackRequestHeuristic() {
  // Heuristic 1
  // We originally wrote this to have a single chance of hitting.
  // We wanted to up the chance by 5x, so this is our crude - temporary -
  // way of giving the user 5 chances to passing.
  const randomlyPassingHeuristic = randomChanceToBeTrue() || randomChanceToBeTrue() || randomChanceToBeTrue() || randomChanceToBeTrue() || randomChanceToBeTrue();
  if (!randomlyPassingHeuristic) {
    return false;
  }
  if (isFeedbackDisabled()) {
    return false;
  }

  // Heuristic 5
  const lastDateValue = (0, _gatsbyCoreUtils.getConfigStore)().get(lastDateKey);
  // 5.a if the user has never received the feedback request, this is undefined
  //     Which is effectively a pass, because it's been ~infinity~ since they last
  //     received a request from us.
  if (lastDateValue) {
    const lastDate = new Date(lastDateValue);
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    if (lastDate > threeMonthsAgo) {
      return false;
    }
  }

  // 5.b
  // we don't want to give them this survey right after the seven day feedback survey
  const sevenDayFeedback = (0, _gatsbyCoreUtils.getConfigStore)().get(sevenDayKey);
  if (sevenDayFeedback) {
    const sevenDayDate = new Date(sevenDayFeedback);
    const threeMonthsAgo = new Date();
    threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
    if (sevenDayDate > threeMonthsAgo) {
      return false;
    }
  }

  // Heuristic 6
  const versionPoints = (0, _gatsbyCoreUtils.getGatsbyVersion)().split(`.`);
  let latestVersionPoints = [];
  try {
    const {
      default: latestVersion
    } = await import(`latest-version`);
    latestVersionPoints = (await latestVersion(`gatsby`)).split(`.`);
  } catch (e) {
    // do nothing.
    // if the request fails, then we should just not show the feedback request
    // because this in theory could happen often and we don't want to be spammy.
    // In this case, we are guaranteed to have `versionsMatchOnMajorAndMinor` === false
  }

  // Since we push versions very frequently. So thinking that users will
  // be on the latest patch is potentially unrealistic. So we are just
  // comparing on major and minor version points.
  const versionsMatchOnMajorAndMinor = versionPoints[0] === latestVersionPoints[0] && versionPoints[1] === latestVersionPoints[1];
  if (versionsMatchOnMajorAndMinor === false) {
    return false;
  }

  // If all of the above passed, then the user is able to be prompted
  // for feedback
  return true;
}
function isFeedbackDisabled() {
  // Reasoning for this order: Checking for CI fixes issues like
  // https://github.com/gatsbyjs/gatsby/issues/30647
  // TODO: Additionally prevent getConfigStore from erroring

  // Heuristic 2
  if ((0, _gatsbyCoreUtils.isCI)()) {
    return true;
  }

  // Heuristic 3
  if (process.env.GATSBY_FEEDBACK_DISABLED === `1`) {
    return true;
  }

  // Heuristic 4
  if ((0, _gatsbyCoreUtils.getConfigStore)().get(feedbackKey) === true) {
    return true;
  }
  return false;
}
async function userGetsSevenDayFeedback() {
  if (isFeedbackDisabled()) return false;
  if ((0, _gatsbyCoreUtils.getConfigStore)().get(sevenDayKey)) return false;
  const firstDateValue = (0, _gatsbyCoreUtils.getConfigStore)().get(firstDateKey);
  if (!firstDateValue) {
    (0, _gatsbyCoreUtils.getConfigStore)().set(firstDateKey, Date.now()); // set this for the first time
    return false;
  } else {
    const lastDate = new Date(firstDateValue);
    const sevenDaysAgo = new Date();
    sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
    if (lastDate > sevenDaysAgo) {
      return false;
    }
  }
  return true;
}
//# sourceMappingURL=feedback.js.map