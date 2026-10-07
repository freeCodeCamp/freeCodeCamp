import { getLocalName } from "./getRole.mjs";
var elementsSupportingDisabledAttribute = new Set(["button", "fieldset", "input", "optgroup", "option", "select", "textarea"]);

/**
 * Check if an element is disabled
 * https://www.w3.org/TR/html-aam-1.0/#html-attribute-state-and-property-mappings
 * https://www.w3.org/TR/wai-aria-1.1/#aria-disabled
 *
 * @param element
 * @returns {boolean} true if disabled, otherwise false
 */
export function isDisabled(element) {
  var localName = getLocalName(element);
  return elementsSupportingDisabledAttribute.has(localName) && element.hasAttribute("disabled") ? true : element.getAttribute("aria-disabled") === "true";
}
//# sourceMappingURL=is-disabled.mjs.map