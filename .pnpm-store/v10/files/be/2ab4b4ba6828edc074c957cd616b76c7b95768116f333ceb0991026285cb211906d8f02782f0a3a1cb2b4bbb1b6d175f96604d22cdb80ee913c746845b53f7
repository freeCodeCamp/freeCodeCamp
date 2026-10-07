"use strict";

exports.__esModule = true;
exports.isDisabled = isDisabled;
var _getRole = require("./getRole");
var elementsSupportingDisabledAttribute = new Set(["button", "fieldset", "input", "optgroup", "option", "select", "textarea"]);

/**
 * Check if an element is disabled
 * https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings
 * https://www.w3.org/TR/wai-aria-1.1/#aria-disabled
 *
 * @param element
 * @returns {boolean} true if disabled, otherwise false
 */
function isDisabled(element) {
  var localName = (0, _getRole.getLocalName)(element);
  return elementsSupportingDisabledAttribute.has(localName) && element.hasAttribute("disabled") ? true : element.getAttribute("aria-disabled") === "true";
}
//# sourceMappingURL=is-disabled.js.map