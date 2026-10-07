export { getLocalName } from "./getRole.mjs";
import getRole, { getLocalName } from "./getRole.mjs";
export function isElement(node) {
  return node !== null && node.nodeType === node.ELEMENT_NODE;
}
export function isHTMLTableCaptionElement(node) {
  return isElement(node) && getLocalName(node) === "caption";
}
export function isHTMLInputElement(node) {
  return isElement(node) && getLocalName(node) === "input";
}
export function isHTMLOptGroupElement(node) {
  return isElement(node) && getLocalName(node) === "optgroup";
}
export function isHTMLSelectElement(node) {
  return isElement(node) && getLocalName(node) === "select";
}
export function isHTMLTableElement(node) {
  return isElement(node) && getLocalName(node) === "table";
}
export function isHTMLTextAreaElement(node) {
  return isElement(node) && getLocalName(node) === "textarea";
}
export function safeWindow(node) {
  var _ref = node.ownerDocument === null ? node : node.ownerDocument,
    defaultView = _ref.defaultView;
  if (defaultView === null) {
    throw new TypeError("no window available");
  }
  return defaultView;
}
export function isHTMLFieldSetElement(node) {
  return isElement(node) && getLocalName(node) === "fieldset";
}
export function isHTMLLegendElement(node) {
  return isElement(node) && getLocalName(node) === "legend";
}
export function isHTMLSlotElement(node) {
  return isElement(node) && getLocalName(node) === "slot";
}
export function isSVGElement(node) {
  return isElement(node) && node.ownerSVGElement !== undefined;
}
export function isSVGSVGElement(node) {
  return isElement(node) && getLocalName(node) === "svg";
}
export function isSVGTitleElement(node) {
  return isSVGElement(node) && getLocalName(node) === "title";
}

/**
 *
 * @param {Node} node -
 * @param {string} attributeName -
 * @returns {Element[]} -
 */
export function queryIdRefs(node, attributeName) {
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
export function hasAnyConcreteRoles(node, roles) {
  if (isElement(node)) {
    return roles.indexOf(getRole(node)) !== -1;
  }
  return false;
}
//# sourceMappingURL=util.mjs.map