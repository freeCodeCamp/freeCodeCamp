function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { computeTextAlternative } from "./accessible-name-and-description.mjs";
import { queryIdRefs } from "./util.mjs";

/**
 * @param root
 * @param options
 * @returns
 */
export function computeAccessibleDescription(root) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var description = queryIdRefs(root, "aria-describedby").map(function (element) {
    return computeTextAlternative(element, _objectSpread(_objectSpread({}, options), {}, {
      compute: "description"
    }));
  }).join(" ");

  // TODO: Technically we need to make sure that node wasn't used for the accessible name
  //       This causes `description_1.0_combobox-focusable-manual` to fail

  // https://w3c.github.io/aria/#aria-description
  // mentions that aria-description should only be calculated if aria-describedby didn't provide
  // a description
  if (description === "") {
    var ariaDescription = root.getAttribute("aria-description");
    description = ariaDescription === null ? "" : ariaDescription;
  }

  // https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation
  // says for so many elements to use the `title` that we assume all elements are considered
  if (description === "") {
    var title = root.getAttribute("title");
    description = title === null ? "" : title;
  }
  return description;
}
//# sourceMappingURL=accessible-description.mjs.map