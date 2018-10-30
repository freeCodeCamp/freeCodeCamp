'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toDate = require('./lib/toDate');

var _toDate2 = _interopRequireDefault(_toDate);

var _toFloat = require('./lib/toFloat');

var _toFloat2 = _interopRequireDefault(_toFloat);

var _toInt = require('./lib/toInt');

var _toInt2 = _interopRequireDefault(_toInt);

var _toBoolean = require('./lib/toBoolean');

var _toBoolean2 = _interopRequireDefault(_toBoolean);

var _equals = require('./lib/equals');

var _equals2 = _interopRequireDefault(_equals);

var _contains = require('./lib/contains');

var _contains2 = _interopRequireDefault(_contains);

var _matches = require('./lib/matches');

var _matches2 = _interopRequireDefault(_matches);

var _isEmail = require('./lib/isEmail');

var _isEmail2 = _interopRequireDefault(_isEmail);

var _isURL = require('./lib/isURL');

var _isURL2 = _interopRequireDefault(_isURL);

var _isMACAddress = require('./lib/isMACAddress');

var _isMACAddress2 = _interopRequireDefault(_isMACAddress);

var _isIP = require('./lib/isIP');

var _isIP2 = _interopRequireDefault(_isIP);

var _isIPRange = require('./lib/isIPRange');

var _isIPRange2 = _interopRequireDefault(_isIPRange);

var _isFQDN = require('./lib/isFQDN');

var _isFQDN2 = _interopRequireDefault(_isFQDN);

var _isBoolean = require('./lib/isBoolean');

var _isBoolean2 = _interopRequireDefault(_isBoolean);

var _isAlpha = require('./lib/isAlpha');

var _isAlpha2 = _interopRequireDefault(_isAlpha);

var _isAlphanumeric = require('./lib/isAlphanumeric');

var _isAlphanumeric2 = _interopRequireDefault(_isAlphanumeric);

var _isNumeric = require('./lib/isNumeric');

var _isNumeric2 = _interopRequireDefault(_isNumeric);

var _isPort = require('./lib/isPort');

var _isPort2 = _interopRequireDefault(_isPort);

var _isLowercase = require('./lib/isLowercase');

var _isLowercase2 = _interopRequireDefault(_isLowercase);

var _isUppercase = require('./lib/isUppercase');

var _isUppercase2 = _interopRequireDefault(_isUppercase);

var _isAscii = require('./lib/isAscii');

var _isAscii2 = _interopRequireDefault(_isAscii);

var _isFullWidth = require('./lib/isFullWidth');

var _isFullWidth2 = _interopRequireDefault(_isFullWidth);

var _isHalfWidth = require('./lib/isHalfWidth');

var _isHalfWidth2 = _interopRequireDefault(_isHalfWidth);

var _isVariableWidth = require('./lib/isVariableWidth');

var _isVariableWidth2 = _interopRequireDefault(_isVariableWidth);

var _isMultibyte = require('./lib/isMultibyte');

var _isMultibyte2 = _interopRequireDefault(_isMultibyte);

var _isSurrogatePair = require('./lib/isSurrogatePair');

var _isSurrogatePair2 = _interopRequireDefault(_isSurrogatePair);

var _isInt = require('./lib/isInt');

var _isInt2 = _interopRequireDefault(_isInt);

var _isFloat = require('./lib/isFloat');

var _isFloat2 = _interopRequireDefault(_isFloat);

var _isDecimal = require('./lib/isDecimal');

var _isDecimal2 = _interopRequireDefault(_isDecimal);

var _isHexadecimal = require('./lib/isHexadecimal');

var _isHexadecimal2 = _interopRequireDefault(_isHexadecimal);

var _isDivisibleBy = require('./lib/isDivisibleBy');

var _isDivisibleBy2 = _interopRequireDefault(_isDivisibleBy);

var _isHexColor = require('./lib/isHexColor');

var _isHexColor2 = _interopRequireDefault(_isHexColor);

var _isISRC = require('./lib/isISRC');

var _isISRC2 = _interopRequireDefault(_isISRC);

var _isMD = require('./lib/isMD5');

var _isMD2 = _interopRequireDefault(_isMD);

var _isHash = require('./lib/isHash');

var _isHash2 = _interopRequireDefault(_isHash);

var _isJWT = require('./lib/isJWT');

var _isJWT2 = _interopRequireDefault(_isJWT);

var _isJSON = require('./lib/isJSON');

var _isJSON2 = _interopRequireDefault(_isJSON);

var _isEmpty = require('./lib/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _isLength = require('./lib/isLength');

var _isLength2 = _interopRequireDefault(_isLength);

var _isByteLength = require('./lib/isByteLength');

var _isByteLength2 = _interopRequireDefault(_isByteLength);

var _isUUID = require('./lib/isUUID');

var _isUUID2 = _interopRequireDefault(_isUUID);

var _isMongoId = require('./lib/isMongoId');

var _isMongoId2 = _interopRequireDefault(_isMongoId);

var _isAfter = require('./lib/isAfter');

var _isAfter2 = _interopRequireDefault(_isAfter);

var _isBefore = require('./lib/isBefore');

var _isBefore2 = _interopRequireDefault(_isBefore);

var _isIn = require('./lib/isIn');

var _isIn2 = _interopRequireDefault(_isIn);

var _isCreditCard = require('./lib/isCreditCard');

var _isCreditCard2 = _interopRequireDefault(_isCreditCard);

var _isIdentityCard = require('./lib/isIdentityCard');

var _isIdentityCard2 = _interopRequireDefault(_isIdentityCard);

var _isISIN = require('./lib/isISIN');

var _isISIN2 = _interopRequireDefault(_isISIN);

var _isISBN = require('./lib/isISBN');

var _isISBN2 = _interopRequireDefault(_isISBN);

var _isISSN = require('./lib/isISSN');

var _isISSN2 = _interopRequireDefault(_isISSN);

var _isMobilePhone = require('./lib/isMobilePhone');

var _isMobilePhone2 = _interopRequireDefault(_isMobilePhone);

var _isCurrency = require('./lib/isCurrency');

var _isCurrency2 = _interopRequireDefault(_isCurrency);

var _isISO = require('./lib/isISO8601');

var _isISO2 = _interopRequireDefault(_isISO);

var _isRFC = require('./lib/isRFC3339');

var _isRFC2 = _interopRequireDefault(_isRFC);

var _isISO31661Alpha = require('./lib/isISO31661Alpha2');

var _isISO31661Alpha2 = _interopRequireDefault(_isISO31661Alpha);

var _isISO31661Alpha3 = require('./lib/isISO31661Alpha3');

var _isISO31661Alpha4 = _interopRequireDefault(_isISO31661Alpha3);

var _isBase = require('./lib/isBase64');

var _isBase2 = _interopRequireDefault(_isBase);

var _isDataURI = require('./lib/isDataURI');

var _isDataURI2 = _interopRequireDefault(_isDataURI);

var _isMagnetURI = require('./lib/isMagnetURI');

var _isMagnetURI2 = _interopRequireDefault(_isMagnetURI);

var _isMimeType = require('./lib/isMimeType');

var _isMimeType2 = _interopRequireDefault(_isMimeType);

var _isLatLong = require('./lib/isLatLong');

var _isLatLong2 = _interopRequireDefault(_isLatLong);

var _isPostalCode = require('./lib/isPostalCode');

var _isPostalCode2 = _interopRequireDefault(_isPostalCode);

var _ltrim = require('./lib/ltrim');

var _ltrim2 = _interopRequireDefault(_ltrim);

var _rtrim = require('./lib/rtrim');

var _rtrim2 = _interopRequireDefault(_rtrim);

var _trim = require('./lib/trim');

var _trim2 = _interopRequireDefault(_trim);

var _escape = require('./lib/escape');

var _escape2 = _interopRequireDefault(_escape);

var _unescape = require('./lib/unescape');

var _unescape2 = _interopRequireDefault(_unescape);

var _stripLow = require('./lib/stripLow');

var _stripLow2 = _interopRequireDefault(_stripLow);

var _whitelist = require('./lib/whitelist');

var _whitelist2 = _interopRequireDefault(_whitelist);

var _blacklist = require('./lib/blacklist');

var _blacklist2 = _interopRequireDefault(_blacklist);

var _isWhitelisted = require('./lib/isWhitelisted');

var _isWhitelisted2 = _interopRequireDefault(_isWhitelisted);

var _normalizeEmail = require('./lib/normalizeEmail');

var _normalizeEmail2 = _interopRequireDefault(_normalizeEmail);

var _toString = require('./lib/util/toString');

var _toString2 = _interopRequireDefault(_toString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var version = '10.8.0';

var validator = {
  version: version,
  toDate: _toDate2.default,
  toFloat: _toFloat2.default,
  toInt: _toInt2.default,
  toBoolean: _toBoolean2.default,
  equals: _equals2.default,
  contains: _contains2.default,
  matches: _matches2.default,
  isEmail: _isEmail2.default,
  isURL: _isURL2.default,
  isMACAddress: _isMACAddress2.default,
  isIP: _isIP2.default,
  isIPRange: _isIPRange2.default,
  isFQDN: _isFQDN2.default,
  isBoolean: _isBoolean2.default,
  isAlpha: _isAlpha2.default,
  isAlphaLocales: _isAlpha.locales,
  isAlphanumeric: _isAlphanumeric2.default,
  isAlphanumericLocales: _isAlphanumeric.locales,
  isNumeric: _isNumeric2.default,
  isPort: _isPort2.default,
  isLowercase: _isLowercase2.default,
  isUppercase: _isUppercase2.default,
  isAscii: _isAscii2.default,
  isFullWidth: _isFullWidth2.default,
  isHalfWidth: _isHalfWidth2.default,
  isVariableWidth: _isVariableWidth2.default,
  isMultibyte: _isMultibyte2.default,
  isSurrogatePair: _isSurrogatePair2.default,
  isInt: _isInt2.default,
  isFloat: _isFloat2.default,
  isFloatLocales: _isFloat.locales,
  isDecimal: _isDecimal2.default,
  isHexadecimal: _isHexadecimal2.default,
  isDivisibleBy: _isDivisibleBy2.default,
  isHexColor: _isHexColor2.default,
  isISRC: _isISRC2.default,
  isMD5: _isMD2.default,
  isHash: _isHash2.default,
  isJWT: _isJWT2.default,
  isJSON: _isJSON2.default,
  isEmpty: _isEmpty2.default,
  isLength: _isLength2.default,
  isByteLength: _isByteLength2.default,
  isUUID: _isUUID2.default,
  isMongoId: _isMongoId2.default,
  isAfter: _isAfter2.default,
  isBefore: _isBefore2.default,
  isIn: _isIn2.default,
  isCreditCard: _isCreditCard2.default,
  isIdentityCard: _isIdentityCard2.default,
  isISIN: _isISIN2.default,
  isISBN: _isISBN2.default,
  isISSN: _isISSN2.default,
  isMobilePhone: _isMobilePhone2.default,
  isMobilePhoneLocales: _isMobilePhone.locales,
  isPostalCode: _isPostalCode2.default,
  isPostalCodeLocales: _isPostalCode.locales,
  isCurrency: _isCurrency2.default,
  isISO8601: _isISO2.default,
  isRFC3339: _isRFC2.default,
  isISO31661Alpha2: _isISO31661Alpha2.default,
  isISO31661Alpha3: _isISO31661Alpha4.default,
  isBase64: _isBase2.default,
  isDataURI: _isDataURI2.default,
  isMagnetURI: _isMagnetURI2.default,
  isMimeType: _isMimeType2.default,
  isLatLong: _isLatLong2.default,
  ltrim: _ltrim2.default,
  rtrim: _rtrim2.default,
  trim: _trim2.default,
  escape: _escape2.default,
  unescape: _unescape2.default,
  stripLow: _stripLow2.default,
  whitelist: _whitelist2.default,
  blacklist: _blacklist2.default,
  isWhitelisted: _isWhitelisted2.default,
  normalizeEmail: _normalizeEmail2.default,
  toString: _toString2.default
};

exports.default = validator;
module.exports = exports['default'];