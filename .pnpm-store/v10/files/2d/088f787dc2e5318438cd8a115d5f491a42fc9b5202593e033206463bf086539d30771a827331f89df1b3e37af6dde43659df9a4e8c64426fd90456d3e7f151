"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.contains = contains;
exports.parseCaniuseData = parseCaniuseData;
exports.cleanBrowsersList = cleanBrowsersList;

var _lodash = require("lodash.uniq");

var _lodash2 = _interopRequireDefault(_lodash);

var _browserslist = require("browserslist");

var _browserslist2 = _interopRequireDefault(_browserslist);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function contains(str, substr) {
  return !!~str.indexOf(substr);
}

function parseCaniuseData(feature, browsers) {
  var support = {};
  var letters;
  var letter;

  browsers.forEach(function (browser) {
    support[browser] = {};
    for (var info in feature.stats[browser]) {
      letters = feature.stats[browser][info].replace(/#\d+/, "").trim().split(" ");
      info = parseFloat(info.split("-")[0]); //if info is a range, take the left
      if (isNaN(info)) continue;
      for (var i = 0; i < letters.length; i++) {
        letter = letters[i];
        if (letter === "d") {
          // skip this letter, we don't support it yet
          continue;
        } else if (letter === "y") {
          // min support asked, need to find the min value
          if (typeof support[browser][letter] === "undefined" || info < support[browser][letter]) {
            support[browser][letter] = info;
          }
        } else {
          // any other support, need to find the max value
          if (typeof support[browser][letter] === "undefined" || info > support[browser][letter]) {
            support[browser][letter] = info;
          }
        }
      }
    }
  });

  return support;
}

function cleanBrowsersList(browserList) {
  return (0, _lodash2.default)((0, _browserslist2.default)(browserList).map(function (browser) {
    return browser.split(" ")[0];
  }));
}