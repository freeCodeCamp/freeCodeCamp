/**
 * Partial implementation https://www.w3.org/TR/wai-aria-1.2/#tree_exclusion
 * which should only be used for elements with a non-presentational role i.e.
 * `role="none"` and `role="presentation"` will not be excluded.
 *
 * Implements aria-hidden semantics (i.e. parent overrides child)
 * Ignores "Child Presentational: True" characteristics
 *
 * @param element
 * @param options
 * @returns {boolean} true if excluded, otherwise false
 */
export function isInaccessible(element) {
  var _element$ownerDocumen;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$getComputedS = options.getComputedStyle,
    getComputedStyle = _options$getComputedS === void 0 ? (_element$ownerDocumen = element.ownerDocument.defaultView) === null || _element$ownerDocumen === void 0 ? void 0 : _element$ownerDocumen.getComputedStyle : _options$getComputedS,
    _options$isSubtreeIna = options.isSubtreeInaccessible,
    isSubtreeInaccessibleImpl = _options$isSubtreeIna === void 0 ? isSubtreeInaccessible : _options$isSubtreeIna;
  if (typeof getComputedStyle !== "function") {
    throw new TypeError("Owner document of the element needs to have an associated window.");
  }
  // since visibility is inherited we can exit early
  if (getComputedStyle(element).visibility === "hidden") {
    return true;
  }
  var currentElement = element;
  while (currentElement) {
    if (isSubtreeInaccessibleImpl(currentElement, {
      getComputedStyle: getComputedStyle
    })) {
      return true;
    }
    currentElement = currentElement.parentElement;
  }
  return false;
}
/**
 *
 * @param element
 * @param options
 * @returns {boolean} - `true` if every child of the element is inaccessible
 */
export function isSubtreeInaccessible(element) {
  var _element$ownerDocumen2;
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$getComputedS2 = options.getComputedStyle,
    getComputedStyle = _options$getComputedS2 === void 0 ? (_element$ownerDocumen2 = element.ownerDocument.defaultView) === null || _element$ownerDocumen2 === void 0 ? void 0 : _element$ownerDocumen2.getComputedStyle : _options$getComputedS2;
  if (typeof getComputedStyle !== "function") {
    throw new TypeError("Owner document of the element needs to have an associated window.");
  }
  if (element.hidden === true) {
    return true;
  }
  if (element.getAttribute("aria-hidden") === "true") {
    return true;
  }
  if (getComputedStyle(element).display === "none") {
    return true;
  }
  return false;
}
//# sourceMappingURL=is-inaccessible.mjs.map