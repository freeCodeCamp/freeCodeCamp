"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isDataURI;
var _assertString = _interopRequireDefault(require("./util/assertString"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var validMediaType = /^[a-z]+\/[a-z0-9\-\+\._]+$/i;
var validAttribute = /^[a-z\-]+=[a-z0-9\-]+$/i;
var validData = /^[a-z0-9!\$&'\(\)\*\+,;=\-\._~:@\/\?%\s]*$/i;
function isDataURI(str) {
  (0, _assertString.default)(str);
  var data = str.split(',');
  if (data.length < 2) {
    return false;
  }
  var attributes = data.shift().trim().split(';');
  var schemeAndMediaType = attributes.shift();
  if (schemeAndMediaType.slice(0, 5) !== 'data:') {
    return false;
  }
  var mediaType = schemeAndMediaType.slice(5);
  if (mediaType !== '' && !validMediaType.test(mediaType)) {
    return false;
  }
  for (var i = 0; i < attributes.length; i++) {
    if (!(i === attributes.length - 1 && attributes[i].toLowerCase() === 'base64') && !validAttribute.test(attributes[i])) {
      return false;
    }
  }
  for (var _i = 0; _i < data.length; _i++) {
    if (!validData.test(data[_i])) {
      return false;
    }
  }
  return true;
}
module.exports = exports.default;
module.exports.default = exports.default;