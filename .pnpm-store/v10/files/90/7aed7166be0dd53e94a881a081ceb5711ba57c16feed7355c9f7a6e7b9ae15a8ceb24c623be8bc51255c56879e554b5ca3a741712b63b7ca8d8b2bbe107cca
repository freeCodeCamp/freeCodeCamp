"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
exports.__esModule = true;
exports.hasAnyConcreteRoles = hasAnyConcreteRoles;
exports.isElement = isElement;
exports.isHTMLFieldSetElement = isHTMLFieldSetElement;
exports.isHTMLInputElement = isHTMLInputElement;
exports.isHTMLLegendElement = isHTMLLegendElement;
exports.isHTMLOptGroupElement = isHTMLOptGroupElement;
exports.isHTMLSelectElement = isHTMLSelectElement;
exports.isHTMLSlotElement = isHTMLSlotElement;
exports.isHTMLTableCaptionElement = isHTMLTableCaptionElement;
exports.isHTMLTableElement = isHTMLTableElement;
exports.isHTMLTextAreaElement = isHTMLTextAreaElement;
exports.isSVGElement = isSVGElement;
exports.isSVGSVGElement = isSVGSVGElement;
exports.isSVGTitleElement = isSVGTitleElement;
exports.presentationRoles = void 0;
exports.queryIdRefs = queryIdRefs;
exports.safeWindow = safeWindow;
var _getRole = _interopRequireWildcard(require("./getRole"));
exports.getLocalName = _getRole.getLocalName;
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
var presentationRoles = ["presentation", "none"];
exports.presentationRoles = presentationRoles;
function isElement(node) {
  return node !== null && node.nodeType === node.ELEMENT_NODE;
}
function isHTMLTableCaptionElement(node) {
  return isElement(node) && (0, _getRole.getLocalName)(node) === "caption";
}
function isHTMLInputElement(node) {
  return isElement(node) && (0, _getRole.getLocalName)(node) === "input";
}
function isHTMLOptGroupElement(node) {
  return isElement(node) && (0, _getRole.getLocalName)(node) === "optgroup";
}
function isHTMLSelectElement(node) {
  return isElement(node) && (0, _getRole.getLocalName)(node) === "select";
}
function isHTMLTableElement(node) {
  return isElement(node) && (0, _getRole.getLocalName)(node) === "table";
}
function isHTMLTextAreaElement(node) {
  return isElement(node) && (0, _getRole.getLocalName)(node) === "textarea";
}
function safeWindow(node) {
  var _ref = node.ownerDocument === null ? node : node.ownerDocument,
    defaultView = _ref.defaultView;
  if (defaultView === null) {
    throw new TypeError("no window available");
  }
  return defaultView;
}
function isHTMLFieldSetElement(node) {
  return isElement(node) && (0, _getRole.getLocalName)(node) === "fieldset";
}
function isHTMLLegendElement(node) {
  return isElement(node) && (0, _getRole.getLocalName)(node) === "legend";
}
function isHTMLSlotElement(node) {
  return isElement(node) && (0, _getRole.getLocalName)(node) === "slot";
}
function isSVGElement(node) {
  return isElement(node) && node.ownerSVGElement !== undefined;
}
function isSVGSVGElement(node) {
  return isElement(node) && (0, _getRole.getLocalName)(node) === "svg";
}
function isSVGTitleElement(node) {
  return isSVGElement(node) && (0, _getRole.getLocalName)(node) === "title";
}

/**
 *
 * @param {Node} node -
 * @param {string} attributeName -
 * @returns {Element[]} -
 */
function queryIdRefs(node, attributeName) {
  if (isElement(node) && node.hasAttribute(attributeName)) {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe due to hasAttribute check
    var ids = node.getAttribute(attributeName).split(" ");

    // Browsers that don't support shadow DOM won't have getRootNode
    var root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    return ids.map(function (id) {
      return root.getElementById(id);
    }).filter(function (element) {
      return element !== null;
    }
    // TODO: why does this not narrow?
    );
  }

  return [];
}
function hasAnyConcreteRoles(node, roles) {
  if (isElement(node)) {
    return roles.indexOf((0, _getRole.default)(node)) !== -1;
  }
  return false;
}
//# sourceMappingURL=util.js.map