"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
exports.__esModule = true;
exports.getCIName = getCIName;
exports.isCI = isCI;
var _ciInfo = _interopRequireDefault(require("ci-info"));
const CI_DEFINITIONS = [getEnvDetect({
  key: `NOW_BUILDER_ANNOTATE`,
  name: `ZEIT Now`
}), getEnvDetect({
  key: `NOW_REGION`,
  name: `ZEIT Now v1`
}), getEnvDetect({
  key: `VERCEL_URL`,
  name: `Vercel Now`
}), getEnvDetect({
  key: `NOW_BUILDER`,
  name: `Vercel Now`
}), getEnvDetect({
  key: `VERCEL_BUILDER`,
  name: `Vercel Now`
}), getEnvDetect({
  key: `CODESANDBOX_SSE`,
  name: `CodeSandbox`
}), getEnvDetect({
  key: `GITHUB_ACTIONS`,
  name: `GitHub Actions`
}), getEnvDetect({
  key: `CIRCLE_BRANCH`,
  name: `CircleCI`
}), getEnvDetect({
  key: `CIRCLECI`,
  name: `CircleCI`
}), envFromCIAndCIName, herokuDetect, getEnvFromCIInfo, envFromCIWithNoName];
function lookupCI() {
  for (const fn of CI_DEFINITIONS) {
    try {
      const res = fn();
      if (res) {
        return res;
      }
    } catch (e) {
      // ignore
    }
  }
  return null;
}
const CIName = lookupCI();

/**
 * Determines whether the environment where the code is running is in CI
 * @return true if the environment is in CI, false otherwise
 */

function isCI() {
  return !!CIName;
}

/**
 * Gets the name of the CI environment (e.g. "Vercel", "Heroku", etc.)
 * @return The name of the CI if available. Defaults to null if not in CI
 */

function getCIName() {
  if (!isCI()) {
    return null;
  }
  return CIName;
}
function getEnvFromCIInfo() {
  if (_ciInfo.default.isCI) return _ciInfo.default.name || `ci-info detected w/o name`;
  return null;
}
function getEnvDetect({
  key,
  name
}) {
  return function () {
    if (process.env[key]) {
      return name;
    }
    return null;
  };
}
function herokuDetect() {
  return typeof process.env.NODE === `string` && /\.heroku\/node\/bin\/node/.test(process.env.NODE) && `Heroku`;
}
function envFromCIAndCIName() {
  if (process.env.CI_NAME && process.env.CI) {
    return process.env.CI_NAME;
  }
  return null;
}
function envFromCIWithNoName() {
  if (process.env.CI) {
    return `CI detected without name`;
  }
  return null;
}