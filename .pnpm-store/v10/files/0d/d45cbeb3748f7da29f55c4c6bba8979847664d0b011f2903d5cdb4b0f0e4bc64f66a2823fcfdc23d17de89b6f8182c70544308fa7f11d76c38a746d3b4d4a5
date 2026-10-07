"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateObjSchema = exports.enumArraySchema = exports.arraySchema = void 0;
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
/**
 * JSON schema to accept an array of unique strings
 */
var arraySchema = exports.arraySchema = {
  type: 'array',
  items: {
    type: 'string'
  },
  uniqueItems: true,
  additionalItems: false
};

/**
 * JSON schema to accept an array of unique strings from an enumerated list.
 */
var enumArraySchema = exports.enumArraySchema = function enumArraySchema() {
  var enumeratedList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var minItems = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return _objectSpread(_objectSpread({}, arraySchema), {}, {
    items: {
      type: 'string',
      "enum": enumeratedList
    },
    minItems
  });
};

/**
 * Factory function to generate an object schema
 * with specified properties object
 */
var generateObjSchema = exports.generateObjSchema = function generateObjSchema() {
  var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  var required = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : undefined;
  return {
    type: 'object',
    properties,
    required
  };
};