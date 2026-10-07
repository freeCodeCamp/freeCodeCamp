"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getBrowserScope = exports.setBrowserScope = exports.getLatestStableBrowsers = exports.find = exports.isSupported = exports.getSupport = exports.features = undefined;

var _lodash = require("lodash.memoize");

var _lodash2 = _interopRequireDefault(_lodash);

var _browserslist = require("browserslist");

var _browserslist2 = _interopRequireDefault(_browserslist);

var _caniuseLite = require("caniuse-lite");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var featuresList = Object.keys(_caniuseLite.features);

var browsers = void 0;
function setBrowserScope(browserList) {
  browsers = (0, _utils.cleanBrowsersList)(browserList);
}

function getBrowserScope() {
  return browsers;
}

var parse = (0, _lodash2.default)(_utils.parseCaniuseData, function (feat, browsers) {
  return feat.title + browsers;
});

function getSupport(query) {
  var feature = void 0;
  try {
    feature = (0, _caniuseLite.feature)(_caniuseLite.features[query]);
  } catch (e) {
    var res = find(query);
    if (res.length === 1) return getSupport(res[0]);
    throw new ReferenceError("Please provide a proper feature name. Cannot find " + query);
  }
  return parse(feature, browsers);
}

function isSupported(feature, browsers) {
  var data = void 0;
  try {
    data = (0, _caniuseLite.feature)(_caniuseLite.features[feature]);
  } catch (e) {
    var res = find(feature);
    if (res.length === 1) {
      data = _caniuseLite.features[res[0]];
    } else {
      throw new ReferenceError("Please provide a proper feature name. Cannot find " + feature);
    }
  }

  return (0, _browserslist2.default)(browsers, { ignoreUnknownVersions: true }).map(function (browser) {
    return browser.split(" ");
  }).every(function (browser) {
    return data.stats[browser[0]] && data.stats[browser[0]][browser[1]] === "y";
  });
}

function find(query) {
  if (typeof query !== "string") {
    throw new TypeError("The `query` parameter should be a string.");
  }

  if (~featuresList.indexOf(query)) {
    // exact match
    return query;
  }

  return featuresList.filter(function (file) {
    return (0, _utils.contains)(file, query);
  });
}

function getLatestStableBrowsers() {
  return (0, _browserslist2.default)("last 1 version");
}

setBrowserScope();

exports.features = featuresList;
exports.getSupport = getSupport;
exports.isSupported = isSupported;
exports.find = find;
exports.getLatestStableBrowsers = getLatestStableBrowsers;
exports.setBrowserScope = setBrowserScope;
exports.getBrowserScope = getBrowserScope;