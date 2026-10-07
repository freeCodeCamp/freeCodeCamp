"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _ariaQuery = require("aria-query");
var _jsxAstUtils = require("jsx-ast-utils");
var _getElementType = _interopRequireDefault(require("../util/getElementType"));
var _schemas = require("../util/schemas");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
var errorMessage = 'Use {{tag}} instead of the "{{role}}" role to ensure accessibility across all devices.';
var schema = (0, _schemas.generateObjSchema)();
var formatTag = function formatTag(tag) {
  if (!tag.attributes) {
    return "<".concat(tag.name, ">");
  }
  var _tag$attributes = _slicedToArray(tag.attributes, 1),
    attribute = _tag$attributes[0];
  var value = attribute.value ? "\"".concat(attribute.value, "\"") : '...';
  return "<".concat(tag.name, " ").concat(attribute.name, "=").concat(value, ">");
};
var getLastPropValue = function getLastPropValue(rawProp) {
  var propValue = (0, _jsxAstUtils.getPropValue)(rawProp);
  if (!propValue) {
    return propValue;
  }
  var lastSpaceIndex = propValue.lastIndexOf(' ');
  return lastSpaceIndex === -1 ? propValue : propValue.substring(lastSpaceIndex + 1);
};
var _default = exports["default"] = {
  meta: {
    docs: {
      description: 'Enforces using semantic DOM elements over the ARIA `role` property.',
      url: 'https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/tree/HEAD/docs/rules/prefer-tag-over-role.md'
    },
    schema: [schema]
  },
  create: function create(context) {
    var elementType = (0, _getElementType["default"])(context);
    return {
      JSXOpeningElement: function JSXOpeningElement(node) {
        var role = getLastPropValue((0, _jsxAstUtils.getProp)(node.attributes, 'role'));
        if (!role) {
          return;
        }
        var matchedTagsSet = _ariaQuery.roleElements.get(role);
        if (!matchedTagsSet) {
          return;
        }
        var matchedTags = Array.from(matchedTagsSet);
        if (matchedTags.some(function (matchedTag) {
          return matchedTag.name === elementType(node);
        })) {
          return;
        }
        context.report({
          data: {
            tag: matchedTags.length === 1 ? formatTag(matchedTags[0]) : [matchedTags.slice(0, matchedTags.length - 1).map(formatTag).join(', '), formatTag(matchedTags[matchedTags.length - 1])].join(', or '),
            role
          },
          node,
          message: errorMessage
        });
      }
    };
  }
};
module.exports = exports.default;