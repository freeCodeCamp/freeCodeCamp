"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ariaQuery = require("aria-query");
var _jsxAstUtils = require("jsx-ast-utils");
var _schemas = require("../util/schemas");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); } /**
 * @fileoverview Enforce onmouseover/onmouseout are
 *  accompanied by onfocus/onblur.
 * @author Ethan Cohen
 * 
 */ // ----------------------------------------------------------------------------
// Rule Definition
// ----------------------------------------------------------------------------
var schema = (0, _schemas.generateObjSchema)({
  hoverInHandlers: _objectSpread(_objectSpread({}, _schemas.arraySchema), {}, {
    description: 'An array of events that need to be accompanied by `onFocus`'
  }),
  hoverOutHandlers: _objectSpread(_objectSpread({}, _schemas.arraySchema), {}, {
    description: 'An array of events that need to be accompanied by `onBlur`'
  })
});

// Use `onMouseOver` and `onMouseOut` by default if no config is
// passed in for backwards compatibility
var DEFAULT_HOVER_IN_HANDLERS = ['onMouseOver'];
var DEFAULT_HOVER_OUT_HANDLERS = ['onMouseOut'];
var _default = exports["default"] = {
  meta: {
    docs: {
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/mouse-events-have-key-events.md',
      description: 'Enforce that `onMouseOver`/`onMouseOut` are accompanied by `onFocus`/`onBlur` for keyboard-only users.'
    },
    schema: [schema]
  },
  create: function create(context) {
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        var _options$0$hoverInHan, _options$, _options$0$hoverOutHa, _options$2;
        var name = node.name.name;
        if (!_ariaQuery.dom.get(name)) {
          return;
        }
        var options = context.options;
        var hoverInHandlers = (_options$0$hoverInHan = (_options$ = options[0]) === null || _options$ === void 0 ? void 0 : _options$.hoverInHandlers) !== null && _options$0$hoverInHan !== void 0 ? _options$0$hoverInHan : DEFAULT_HOVER_IN_HANDLERS;
        var hoverOutHandlers = (_options$0$hoverOutHa = (_options$2 = options[0]) === null || _options$2 === void 0 ? void 0 : _options$2.hoverOutHandlers) !== null && _options$0$hoverOutHa !== void 0 ? _options$0$hoverOutHa : DEFAULT_HOVER_OUT_HANDLERS;
        var attributes = node.attributes;

        // Check hover in / onfocus pairing
        var firstHoverInHandlerWithValue = hoverInHandlers.find(function (handler) {
          var prop = (0, _jsxAstUtils.getProp)(attributes, handler);
          var propValue = (0, _jsxAstUtils.getPropValue)(prop);
          return propValue != null;
        });
        if (firstHoverInHandlerWithValue != null) {
          var hasOnFocus = (0, _jsxAstUtils.getProp)(attributes, 'onFocus');
          var onFocusValue = (0, _jsxAstUtils.getPropValue)(hasOnFocus);
          if (hasOnFocus === false || onFocusValue === null || onFocusValue === undefined) {
            context.report({
              node: (0, _jsxAstUtils.getProp)(attributes, firstHoverInHandlerWithValue),
              message: "".concat(firstHoverInHandlerWithValue, " must be accompanied by onFocus for accessibility.")
            });
          }
        }

        // Check hover out / onblur pairing
        var firstHoverOutHandlerWithValue = hoverOutHandlers.find(function (handler) {
          var prop = (0, _jsxAstUtils.getProp)(attributes, handler);
          var propValue = (0, _jsxAstUtils.getPropValue)(prop);
          return propValue != null;
        });
        if (firstHoverOutHandlerWithValue != null) {
          var hasOnBlur = (0, _jsxAstUtils.getProp)(attributes, 'onBlur');
          var onBlurValue = (0, _jsxAstUtils.getPropValue)(hasOnBlur);
          if (hasOnBlur === false || onBlurValue === null || onBlurValue === undefined) {
            context.report({
              node: (0, _jsxAstUtils.getProp)(attributes, firstHoverOutHandlerWithValue),
              message: "".concat(firstHoverOutHandlerWithValue, " must be accompanied by onBlur for accessibility.")
            });
          }
        }
      }
    };
  }
};
module.exports = exports.default;