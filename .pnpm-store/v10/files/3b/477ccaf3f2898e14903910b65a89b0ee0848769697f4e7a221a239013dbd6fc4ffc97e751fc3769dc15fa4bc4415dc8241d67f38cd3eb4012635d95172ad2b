"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toDate = _interopRequireDefault(require("./lib/toDate"));
var _toFloat = _interopRequireDefault(require("./lib/toFloat"));
var _toInt = _interopRequireDefault(require("./lib/toInt"));
var _toBoolean = _interopRequireDefault(require("./lib/toBoolean"));
var _equals = _interopRequireDefault(require("./lib/equals"));
var _contains = _interopRequireDefault(require("./lib/contains"));
var _matches = _interopRequireDefault(require("./lib/matches"));
var _isEmail = _interopRequireDefault(require("./lib/isEmail"));
var _isURL = _interopRequireDefault(require("./lib/isURL"));
var _isMACAddress = _interopRequireDefault(require("./lib/isMACAddress"));
var _isIP = _interopRequireDefault(require("./lib/isIP"));
var _isIPRange = _interopRequireDefault(require("./lib/isIPRange"));
var _isFQDN = _interopRequireDefault(require("./lib/isFQDN"));
var _isDate = _interopRequireDefault(require("./lib/isDate"));
var _isTime = _interopRequireDefault(require("./lib/isTime"));
var _isBoolean = _interopRequireDefault(require("./lib/isBoolean"));
var _isLocale = _interopRequireDefault(require("./lib/isLocale"));
var _isAbaRouting = _interopRequireDefault(require("./lib/isAbaRouting"));
var _isAlpha = _interopRequireWildcard(require("./lib/isAlpha"));
var _isAlphanumeric = _interopRequireWildcard(require("./lib/isAlphanumeric"));
var _isNumeric = _interopRequireDefault(require("./lib/isNumeric"));
var _isPassportNumber = _interopRequireWildcard(require("./lib/isPassportNumber"));
var _isPort = _interopRequireDefault(require("./lib/isPort"));
var _isLowercase = _interopRequireDefault(require("./lib/isLowercase"));
var _isUppercase = _interopRequireDefault(require("./lib/isUppercase"));
var _isIMEI = _interopRequireDefault(require("./lib/isIMEI"));
var _isAscii = _interopRequireDefault(require("./lib/isAscii"));
var _isFullWidth = _interopRequireDefault(require("./lib/isFullWidth"));
var _isHalfWidth = _interopRequireDefault(require("./lib/isHalfWidth"));
var _isVariableWidth = _interopRequireDefault(require("./lib/isVariableWidth"));
var _isMultibyte = _interopRequireDefault(require("./lib/isMultibyte"));
var _isSemVer = _interopRequireDefault(require("./lib/isSemVer"));
var _isSurrogatePair = _interopRequireDefault(require("./lib/isSurrogatePair"));
var _isInt = _interopRequireDefault(require("./lib/isInt"));
var _isFloat = _interopRequireWildcard(require("./lib/isFloat"));
var _isDecimal = _interopRequireDefault(require("./lib/isDecimal"));
var _isHexadecimal = _interopRequireDefault(require("./lib/isHexadecimal"));
var _isOctal = _interopRequireDefault(require("./lib/isOctal"));
var _isDivisibleBy = _interopRequireDefault(require("./lib/isDivisibleBy"));
var _isHexColor = _interopRequireDefault(require("./lib/isHexColor"));
var _isRgbColor = _interopRequireDefault(require("./lib/isRgbColor"));
var _isHSL = _interopRequireDefault(require("./lib/isHSL"));
var _isISRC = _interopRequireDefault(require("./lib/isISRC"));
var _isIBAN = _interopRequireWildcard(require("./lib/isIBAN"));
var _isBIC = _interopRequireDefault(require("./lib/isBIC"));
var _isMD = _interopRequireDefault(require("./lib/isMD5"));
var _isHash = _interopRequireDefault(require("./lib/isHash"));
var _isJWT = _interopRequireDefault(require("./lib/isJWT"));
var _isJSON = _interopRequireDefault(require("./lib/isJSON"));
var _isEmpty = _interopRequireDefault(require("./lib/isEmpty"));
var _isLength = _interopRequireDefault(require("./lib/isLength"));
var _isByteLength = _interopRequireDefault(require("./lib/isByteLength"));
var _isULID = _interopRequireDefault(require("./lib/isULID"));
var _isUUID = _interopRequireDefault(require("./lib/isUUID"));
var _isMongoId = _interopRequireDefault(require("./lib/isMongoId"));
var _isAfter = _interopRequireDefault(require("./lib/isAfter"));
var _isBefore = _interopRequireDefault(require("./lib/isBefore"));
var _isIn = _interopRequireDefault(require("./lib/isIn"));
var _isLuhnNumber = _interopRequireDefault(require("./lib/isLuhnNumber"));
var _isCreditCard = _interopRequireDefault(require("./lib/isCreditCard"));
var _isIdentityCard = _interopRequireDefault(require("./lib/isIdentityCard"));
var _isEAN = _interopRequireDefault(require("./lib/isEAN"));
var _isISIN = _interopRequireDefault(require("./lib/isISIN"));
var _isISBN = _interopRequireDefault(require("./lib/isISBN"));
var _isISSN = _interopRequireDefault(require("./lib/isISSN"));
var _isTaxID = _interopRequireDefault(require("./lib/isTaxID"));
var _isMobilePhone = _interopRequireWildcard(require("./lib/isMobilePhone"));
var _isEthereumAddress = _interopRequireDefault(require("./lib/isEthereumAddress"));
var _isCurrency = _interopRequireDefault(require("./lib/isCurrency"));
var _isBtcAddress = _interopRequireDefault(require("./lib/isBtcAddress"));
var _isISO = require("./lib/isISO6346");
var _isISO2 = _interopRequireDefault(require("./lib/isISO6391"));
var _isISO3 = _interopRequireDefault(require("./lib/isISO8601"));
var _isRFC = _interopRequireDefault(require("./lib/isRFC3339"));
var _isISO4 = _interopRequireDefault(require("./lib/isISO15924"));
var _isISO31661Alpha = _interopRequireDefault(require("./lib/isISO31661Alpha2"));
var _isISO31661Alpha2 = _interopRequireDefault(require("./lib/isISO31661Alpha3"));
var _isISO31661Numeric = _interopRequireDefault(require("./lib/isISO31661Numeric"));
var _isISO5 = _interopRequireDefault(require("./lib/isISO4217"));
var _isBase = _interopRequireDefault(require("./lib/isBase32"));
var _isBase2 = _interopRequireDefault(require("./lib/isBase58"));
var _isBase3 = _interopRequireDefault(require("./lib/isBase64"));
var _isDataURI = _interopRequireDefault(require("./lib/isDataURI"));
var _isMagnetURI = _interopRequireDefault(require("./lib/isMagnetURI"));
var _isMailtoURI = _interopRequireDefault(require("./lib/isMailtoURI"));
var _isMimeType = _interopRequireDefault(require("./lib/isMimeType"));
var _isLatLong = _interopRequireDefault(require("./lib/isLatLong"));
var _isPostalCode = _interopRequireWildcard(require("./lib/isPostalCode"));
var _ltrim = _interopRequireDefault(require("./lib/ltrim"));
var _rtrim = _interopRequireDefault(require("./lib/rtrim"));
var _trim = _interopRequireDefault(require("./lib/trim"));
var _escape = _interopRequireDefault(require("./lib/escape"));
var _unescape = _interopRequireDefault(require("./lib/unescape"));
var _stripLow = _interopRequireDefault(require("./lib/stripLow"));
var _whitelist = _interopRequireDefault(require("./lib/whitelist"));
var _blacklist = _interopRequireDefault(require("./lib/blacklist"));
var _isWhitelisted = _interopRequireDefault(require("./lib/isWhitelisted"));
var _normalizeEmail = _interopRequireDefault(require("./lib/normalizeEmail"));
var _isSlug = _interopRequireDefault(require("./lib/isSlug"));
var _isLicensePlate = _interopRequireDefault(require("./lib/isLicensePlate"));
var _isStrongPassword = _interopRequireDefault(require("./lib/isStrongPassword"));
var _isVAT = _interopRequireDefault(require("./lib/isVAT"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
var version = '13.15.35';
var validator = {
  version: version,
  toDate: _toDate.default,
  toFloat: _toFloat.default,
  toInt: _toInt.default,
  toBoolean: _toBoolean.default,
  equals: _equals.default,
  contains: _contains.default,
  matches: _matches.default,
  isEmail: _isEmail.default,
  isURL: _isURL.default,
  isMACAddress: _isMACAddress.default,
  isIP: _isIP.default,
  isIPRange: _isIPRange.default,
  isFQDN: _isFQDN.default,
  isBoolean: _isBoolean.default,
  isIBAN: _isIBAN.default,
  isBIC: _isBIC.default,
  isAbaRouting: _isAbaRouting.default,
  isAlpha: _isAlpha.default,
  isAlphaLocales: _isAlpha.locales,
  isAlphanumeric: _isAlphanumeric.default,
  isAlphanumericLocales: _isAlphanumeric.locales,
  isNumeric: _isNumeric.default,
  isPassportNumber: _isPassportNumber.default,
  passportNumberLocales: _isPassportNumber.locales,
  isPort: _isPort.default,
  isLowercase: _isLowercase.default,
  isUppercase: _isUppercase.default,
  isAscii: _isAscii.default,
  isFullWidth: _isFullWidth.default,
  isHalfWidth: _isHalfWidth.default,
  isVariableWidth: _isVariableWidth.default,
  isMultibyte: _isMultibyte.default,
  isSemVer: _isSemVer.default,
  isSurrogatePair: _isSurrogatePair.default,
  isInt: _isInt.default,
  isIMEI: _isIMEI.default,
  isFloat: _isFloat.default,
  isFloatLocales: _isFloat.locales,
  isDecimal: _isDecimal.default,
  isHexadecimal: _isHexadecimal.default,
  isOctal: _isOctal.default,
  isDivisibleBy: _isDivisibleBy.default,
  isHexColor: _isHexColor.default,
  isRgbColor: _isRgbColor.default,
  isHSL: _isHSL.default,
  isISRC: _isISRC.default,
  isMD5: _isMD.default,
  isHash: _isHash.default,
  isJWT: _isJWT.default,
  isJSON: _isJSON.default,
  isEmpty: _isEmpty.default,
  isLength: _isLength.default,
  isLocale: _isLocale.default,
  isByteLength: _isByteLength.default,
  isULID: _isULID.default,
  isUUID: _isUUID.default,
  isMongoId: _isMongoId.default,
  isAfter: _isAfter.default,
  isBefore: _isBefore.default,
  isIn: _isIn.default,
  isLuhnNumber: _isLuhnNumber.default,
  isCreditCard: _isCreditCard.default,
  isIdentityCard: _isIdentityCard.default,
  isEAN: _isEAN.default,
  isISIN: _isISIN.default,
  isISBN: _isISBN.default,
  isISSN: _isISSN.default,
  isMobilePhone: _isMobilePhone.default,
  isMobilePhoneLocales: _isMobilePhone.locales,
  isPostalCode: _isPostalCode.default,
  isPostalCodeLocales: _isPostalCode.locales,
  isEthereumAddress: _isEthereumAddress.default,
  isCurrency: _isCurrency.default,
  isBtcAddress: _isBtcAddress.default,
  isISO6346: _isISO.isISO6346,
  isFreightContainerID: _isISO.isFreightContainerID,
  isISO6391: _isISO2.default,
  isISO8601: _isISO3.default,
  isISO15924: _isISO4.default,
  isRFC3339: _isRFC.default,
  isISO31661Alpha2: _isISO31661Alpha.default,
  isISO31661Alpha3: _isISO31661Alpha2.default,
  isISO31661Numeric: _isISO31661Numeric.default,
  isISO4217: _isISO5.default,
  isBase32: _isBase.default,
  isBase58: _isBase2.default,
  isBase64: _isBase3.default,
  isDataURI: _isDataURI.default,
  isMagnetURI: _isMagnetURI.default,
  isMailtoURI: _isMailtoURI.default,
  isMimeType: _isMimeType.default,
  isLatLong: _isLatLong.default,
  ltrim: _ltrim.default,
  rtrim: _rtrim.default,
  trim: _trim.default,
  escape: _escape.default,
  unescape: _unescape.default,
  stripLow: _stripLow.default,
  whitelist: _whitelist.default,
  blacklist: _blacklist.default,
  isWhitelisted: _isWhitelisted.default,
  normalizeEmail: _normalizeEmail.default,
  toString: toString,
  isSlug: _isSlug.default,
  isStrongPassword: _isStrongPassword.default,
  isTaxID: _isTaxID.default,
  isDate: _isDate.default,
  isTime: _isTime.default,
  isLicensePlate: _isLicensePlate.default,
  isVAT: _isVAT.default,
  ibanLocales: _isIBAN.locales
};
var _default = exports.default = validator;
module.exports = exports.default;
module.exports.default = exports.default;