"use strict";

exports.__esModule = true;
exports.computeTextAlternative = computeTextAlternative;
var _array = _interopRequireDefault(require("./polyfills/array.from"));
var _SetLike = _interopRequireDefault(require("./polyfills/SetLike"));
var _util = require("./util");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/**
 * implements https://w3c.github.io/accname/
 */

/**
 *
 * @param {string} string -
 * @returns {FlatString} -
 */
function asFlatString(s) {
  return s.trim().replace(/\s\s+/g, " ");
}

/**
 *
 * @param node -
 * @param options - These are not optional to prevent accidentally calling it without options in `computeAccessibleName`
 * @returns {boolean} -
 */
function isHidden(node, getComputedStyleImplementation) {
  if (!(0, _util.isElement)(node)) {
    return false;
  }
  if (node.hasAttribute("hidden") || node.getAttribute("aria-hidden") === "true") {
    return true;
  }
  var style = getComputedStyleImplementation(node);
  return style.getPropertyValue("display") === "none" || style.getPropertyValue("visibility") === "hidden";
}

/**
 * @param {Node} node -
 * @returns {boolean} - As defined in step 2E of https://w3c.github.io/accname/#mapping_additional_nd_te
 */
function isControl(node) {
  return (0, _util.hasAnyConcreteRoles)(node, ["button", "combobox", "listbox", "textbox"]) || hasAbstractRole(node, "range");
}
function hasAbstractRole(node, role) {
  if (!(0, _util.isElement)(node)) {
    return false;
  }
  switch (role) {
    case "range":
      return (0, _util.hasAnyConcreteRoles)(node, ["meter", "progressbar", "scrollbar", "slider", "spinbutton"]);
    default:
      throw new TypeError("No knowledge about abstract role '".concat(role, "'. This is likely a bug :("));
  }
}

/**
 * element.querySelectorAll but also considers owned tree
 * @param element
 * @param selectors
 */
function querySelectorAllSubtree(element, selectors) {
  var elements = (0, _array.default)(element.querySelectorAll(selectors));
  (0, _util.queryIdRefs)(element, "aria-owns").forEach(function (root) {
    // babel transpiles this assuming an iterator
    elements.push.apply(elements, (0, _array.default)(root.querySelectorAll(selectors)));
  });
  return elements;
}
function querySelectedOptions(listbox) {
  if ((0, _util.isHTMLSelectElement)(listbox)) {
    // IE11 polyfill
    return listbox.selectedOptions || querySelectorAllSubtree(listbox, "[selected]");
  }
  return querySelectorAllSubtree(listbox, '[aria-selected="true"]');
}
function isMarkedPresentational(node) {
  return (0, _util.hasAnyConcreteRoles)(node, ["none", "presentation"]);
}

/**
 * Elements specifically listed in html-aam
 *
 * We don't need this for `label` or `legend` elements.
 * Their implicit roles already allow "naming from content".
 *
 * sources:
 *
 * - https://w3c.github.io/html-aam/#table-element
 */
function isNativeHostLanguageTextAlternativeElement(node) {
  return (0, _util.isHTMLTableCaptionElement)(node);
}

/**
 * https://w3c.github.io/aria/#namefromcontent
 */
function allowsNameFromContent(node) {
  return (0, _util.hasAnyConcreteRoles)(node, ["button", "cell", "checkbox", "columnheader", "gridcell", "heading", "label", "legend", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "row", "rowheader", "switch", "tab", "tooltip", "treeitem"]);
}

/**
 * TODO https://github.com/eps1lon/dom-accessibility-api/issues/100
 */
function isDescendantOfNativeHostLanguageTextAlternativeElement(
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- not implemented yet
node) {
  return false;
}
function getValueOfTextbox(element) {
  if ((0, _util.isHTMLInputElement)(element) || (0, _util.isHTMLTextAreaElement)(element)) {
    return element.value;
  }
  // https://github.com/eps1lon/dom-accessibility-api/issues/4
  return element.textContent || "";
}
function getTextualContent(declaration) {
  var content = declaration.getPropertyValue("content");
  if (/^["'].*["']$/.test(content)) {
    return content.slice(1, -1);
  }
  return "";
}

/**
 * https://html.spec.whatwg.org/multipage/forms.html#category-label
 * TODO: form-associated custom elements
 * @param element
 */
function isLabelableElement(element) {
  var localName = (0, _util.getLocalName)(element);
  return localName === "button" || localName === "input" && element.getAttribute("type") !== "hidden" || localName === "meter" || localName === "output" || localName === "progress" || localName === "select" || localName === "textarea";
}

/**
 * > [...], then the first such descendant in tree order is the label element's labeled control.
 * -- https://html.spec.whatwg.org/multipage/forms.html#labeled-control
 * @param element
 */
function findLabelableElement(element) {
  if (isLabelableElement(element)) {
    return element;
  }
  var labelableElement = null;
  element.childNodes.forEach(function (childNode) {
    if (labelableElement === null && (0, _util.isElement)(childNode)) {
      var descendantLabelableElement = findLabelableElement(childNode);
      if (descendantLabelableElement !== null) {
        labelableElement = descendantLabelableElement;
      }
    }
  });
  return labelableElement;
}

/**
 * Polyfill of HTMLLabelElement.control
 * https://html.spec.whatwg.org/multipage/forms.html#labeled-control
 * @param label
 */
function getControlOfLabel(label) {
  if (label.control !== undefined) {
    return label.control;
  }
  var htmlFor = label.getAttribute("for");
  if (htmlFor !== null) {
    return label.ownerDocument.getElementById(htmlFor);
  }
  return findLabelableElement(label);
}

/**
 * Polyfill of HTMLInputElement.labels
 * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/labels
 * @param element
 */
function getLabels(element) {
  var labelsProperty = element.labels;
  if (labelsProperty === null) {
    return labelsProperty;
  }
  if (labelsProperty !== undefined) {
    return (0, _array.default)(labelsProperty);
  }

  // polyfill
  if (!isLabelableElement(element)) {
    return null;
  }
  var document = element.ownerDocument;
  return (0, _array.default)(document.querySelectorAll("label")).filter(function (label) {
    return getControlOfLabel(label) === element;
  });
}

/**
 * Gets the contents of a slot used for computing the accname
 * @param slot
 */
function getSlotContents(slot) {
  // Computing the accessible name for elements containing slots is not
  // currently defined in the spec. This implementation reflects the
  // behavior of NVDA 2020.2/Firefox 81 and iOS VoiceOver/Safari 13.6.
  var assignedNodes = slot.assignedNodes();
  if (assignedNodes.length === 0) {
    // if no nodes are assigned to the slot, it displays the default content
    return (0, _array.default)(slot.childNodes);
  }
  return assignedNodes;
}

/**
 * implements https://w3c.github.io/accname/#mapping_additional_nd_te
 * @param root
 * @param options
 * @returns
 */
function computeTextAlternative(root) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var consultedNodes = new _SetLike.default();
  var window = (0, _util.safeWindow)(root);
  var _options$compute = options.compute,
    compute = _options$compute === void 0 ? "name" : _options$compute,
    _options$computedStyl = options.computedStyleSupportsPseudoElements,
    computedStyleSupportsPseudoElements = _options$computedStyl === void 0 ? options.getComputedStyle !== undefined : _options$computedStyl,
    _options$getComputedS = options.getComputedStyle,
    getComputedStyle = _options$getComputedS === void 0 ? window.getComputedStyle.bind(window) : _options$getComputedS,
    _options$hidden = options.hidden,
    hidden = _options$hidden === void 0 ? false : _options$hidden;

  // 2F.i
  function computeMiscTextAlternative(node, context) {
    var accumulatedText = "";
    if ((0, _util.isElement)(node) && computedStyleSupportsPseudoElements) {
      var pseudoBefore = getComputedStyle(node, "::before");
      var beforeContent = getTextualContent(pseudoBefore);
      accumulatedText = "".concat(beforeContent, " ").concat(accumulatedText);
    }

    // FIXME: Including aria-owns is not defined in the spec
    // But it is required in the web-platform-test
    var childNodes = (0, _util.isHTMLSlotElement)(node) ? getSlotContents(node) : (0, _array.default)(node.childNodes).concat((0, _util.queryIdRefs)(node, "aria-owns"));
    childNodes.forEach(function (child) {
      var result = computeTextAlternative(child, {
        isEmbeddedInLabel: context.isEmbeddedInLabel,
        isReferenced: false,
        recursion: true
      });
      // TODO: Unclear why display affects delimiter
      // see https://github.com/w3c/accname/issues/3
      var display = (0, _util.isElement)(child) ? getComputedStyle(child).getPropertyValue("display") : "inline";
      var separator = display !== "inline" ? " " : "";
      // trailing separator for wpt tests
      accumulatedText += "".concat(separator).concat(result).concat(separator);
    });
    if ((0, _util.isElement)(node) && computedStyleSupportsPseudoElements) {
      var pseudoAfter = getComputedStyle(node, "::after");
      var afterContent = getTextualContent(pseudoAfter);
      accumulatedText = "".concat(accumulatedText, " ").concat(afterContent);
    }
    return accumulatedText.trim();
  }

  /**
   *
   * @param element
   * @param attributeName
   * @returns A string non-empty string or `null`
   */
  function useAttribute(element, attributeName) {
    var attribute = element.getAttributeNode(attributeName);
    if (attribute !== null && !consultedNodes.has(attribute) && attribute.value.trim() !== "") {
      consultedNodes.add(attribute);
      return attribute.value;
    }
    return null;
  }
  function computeTooltipAttributeValue(node) {
    if (!(0, _util.isElement)(node)) {
      return null;
    }
    return useAttribute(node, "title");
  }
  function computeElementTextAlternative(node) {
    if (!(0, _util.isElement)(node)) {
      return null;
    }

    // https://w3c.github.io/html-aam/#fieldset-and-legend-elements
    if ((0, _util.isHTMLFieldSetElement)(node)) {
      consultedNodes.add(node);
      var children = (0, _array.default)(node.childNodes);
      for (var i = 0; i < children.length; i += 1) {
        var child = children[i];
        if ((0, _util.isHTMLLegendElement)(child)) {
          return computeTextAlternative(child, {
            isEmbeddedInLabel: false,
            isReferenced: false,
            recursion: false
          });
        }
      }
    } else if ((0, _util.isHTMLTableElement)(node)) {
      // https://w3c.github.io/html-aam/#table-element
      consultedNodes.add(node);
      var _children = (0, _array.default)(node.childNodes);
      for (var _i = 0; _i < _children.length; _i += 1) {
        var _child = _children[_i];
        if ((0, _util.isHTMLTableCaptionElement)(_child)) {
          return computeTextAlternative(_child, {
            isEmbeddedInLabel: false,
            isReferenced: false,
            recursion: false
          });
        }
      }
    } else if ((0, _util.isSVGSVGElement)(node)) {
      // https://www.w3.org/TR/svg-aam-1.0/
      consultedNodes.add(node);
      var _children2 = (0, _array.default)(node.childNodes);
      for (var _i2 = 0; _i2 < _children2.length; _i2 += 1) {
        var _child2 = _children2[_i2];
        if ((0, _util.isSVGTitleElement)(_child2)) {
          return _child2.textContent;
        }
      }
      return null;
    } else if ((0, _util.getLocalName)(node) === "img" || (0, _util.getLocalName)(node) === "area") {
      // https://w3c.github.io/html-aam/#area-element
      // https://w3c.github.io/html-aam/#img-element
      var nameFromAlt = useAttribute(node, "alt");
      if (nameFromAlt !== null) {
        return nameFromAlt;
      }
    } else if ((0, _util.isHTMLOptGroupElement)(node)) {
      var nameFromLabel = useAttribute(node, "label");
      if (nameFromLabel !== null) {
        return nameFromLabel;
      }
    }
    if ((0, _util.isHTMLInputElement)(node) && (node.type === "button" || node.type === "submit" || node.type === "reset")) {
      // https://w3c.github.io/html-aam/#input-type-text-input-type-password-input-type-search-input-type-tel-input-type-email-input-type-url-and-textarea-element-accessible-description-computation
      var nameFromValue = useAttribute(node, "value");
      if (nameFromValue !== null) {
        return nameFromValue;
      }

      // TODO: l10n
      if (node.type === "submit") {
        return "Submit";
      }
      // TODO: l10n
      if (node.type === "reset") {
        return "Reset";
      }
    }
    var labels = getLabels(node);
    if (labels !== null && labels.length !== 0) {
      consultedNodes.add(node);
      return (0, _array.default)(labels).map(function (element) {
        return computeTextAlternative(element, {
          isEmbeddedInLabel: true,
          isReferenced: false,
          recursion: true
        });
      }).filter(function (label) {
        return label.length > 0;
      }).join(" ");
    }

    // https://w3c.github.io/html-aam/#input-type-image-accessible-name-computation
    // TODO: wpt test consider label elements but html-aam does not mention them
    // We follow existing implementations over spec
    if ((0, _util.isHTMLInputElement)(node) && node.type === "image") {
      var _nameFromAlt = useAttribute(node, "alt");
      if (_nameFromAlt !== null) {
        return _nameFromAlt;
      }
      var nameFromTitle = useAttribute(node, "title");
      if (nameFromTitle !== null) {
        return nameFromTitle;
      }

      // TODO: l10n
      return "Submit Query";
    }
    if ((0, _util.hasAnyConcreteRoles)(node, ["button"])) {
      // https://www.w3.org/TR/html-aam-1.0/#button-element
      var nameFromSubTree = computeMiscTextAlternative(node, {
        isEmbeddedInLabel: false,
        isReferenced: false
      });
      if (nameFromSubTree !== "") {
        return nameFromSubTree;
      }
    }
    return null;
  }
  function computeTextAlternative(current, context) {
    if (consultedNodes.has(current)) {
      return "";
    }

    // 2A
    if (!hidden && isHidden(current, getComputedStyle) && !context.isReferenced) {
      consultedNodes.add(current);
      return "";
    }

    // 2B
    var labelAttributeNode = (0, _util.isElement)(current) ? current.getAttributeNode("aria-labelledby") : null;
    // TODO: Do we generally need to block query IdRefs of attributes we have already consulted?
    var labelElements = labelAttributeNode !== null && !consultedNodes.has(labelAttributeNode) ? (0, _util.queryIdRefs)(current, "aria-labelledby") : [];
    if (compute === "name" && !context.isReferenced && labelElements.length > 0) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- Can't be null here otherwise labelElements would be empty
      consultedNodes.add(labelAttributeNode);
      return labelElements.map(function (element) {
        // TODO: Chrome will consider repeated values i.e. use a node multiple times while we'll bail out in computeTextAlternative.
        return computeTextAlternative(element, {
          isEmbeddedInLabel: context.isEmbeddedInLabel,
          isReferenced: true,
          // this isn't recursion as specified, otherwise we would skip
          // `aria-label` in
          // <input id="myself" aria-label="foo" aria-labelledby="myself"
          recursion: false
        });
      }).join(" ");
    }

    // 2C
    // Changed from the spec in anticipation of https://github.com/w3c/accname/issues/64
    // spec says we should only consider skipping if we have a non-empty label
    var skipToStep2E = context.recursion && isControl(current) && compute === "name";
    if (!skipToStep2E) {
      var ariaLabel = ((0, _util.isElement)(current) && current.getAttribute("aria-label") || "").trim();
      if (ariaLabel !== "" && compute === "name") {
        consultedNodes.add(current);
        return ariaLabel;
      }

      // 2D
      if (!isMarkedPresentational(current)) {
        var elementTextAlternative = computeElementTextAlternative(current);
        if (elementTextAlternative !== null) {
          consultedNodes.add(current);
          return elementTextAlternative;
        }
      }
    }

    // special casing, cheating to make tests pass
    // https://github.com/w3c/accname/issues/67
    if ((0, _util.hasAnyConcreteRoles)(current, ["menu"])) {
      consultedNodes.add(current);
      return "";
    }

    // 2E
    if (skipToStep2E || context.isEmbeddedInLabel || context.isReferenced) {
      if ((0, _util.hasAnyConcreteRoles)(current, ["combobox", "listbox"])) {
        consultedNodes.add(current);
        var selectedOptions = querySelectedOptions(current);
        if (selectedOptions.length === 0) {
          // defined per test `name_heading_combobox`
          return (0, _util.isHTMLInputElement)(current) ? current.value : "";
        }
        return (0, _array.default)(selectedOptions).map(function (selectedOption) {
          return computeTextAlternative(selectedOption, {
            isEmbeddedInLabel: context.isEmbeddedInLabel,
            isReferenced: false,
            recursion: true
          });
        }).join(" ");
      }
      if (hasAbstractRole(current, "range")) {
        consultedNodes.add(current);
        if (current.hasAttribute("aria-valuetext")) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe due to hasAttribute guard
          return current.getAttribute("aria-valuetext");
        }
        if (current.hasAttribute("aria-valuenow")) {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion -- safe due to hasAttribute guard
          return current.getAttribute("aria-valuenow");
        }
        // Otherwise, use the value as specified by a host language attribute.
        return current.getAttribute("value") || "";
      }
      if ((0, _util.hasAnyConcreteRoles)(current, ["textbox"])) {
        consultedNodes.add(current);
        return getValueOfTextbox(current);
      }
    }

    // 2F: https://w3c.github.io/accname/#step2F
    if (allowsNameFromContent(current) || (0, _util.isElement)(current) && context.isReferenced || isNativeHostLanguageTextAlternativeElement(current) || isDescendantOfNativeHostLanguageTextAlternativeElement(current)) {
      var accumulatedText2F = computeMiscTextAlternative(current, {
        isEmbeddedInLabel: context.isEmbeddedInLabel,
        isReferenced: false
      });
      if (accumulatedText2F !== "") {
        consultedNodes.add(current);
        return accumulatedText2F;
      }
    }
    if (current.nodeType === current.TEXT_NODE) {
      consultedNodes.add(current);
      return current.textContent || "";
    }
    if (context.recursion) {
      consultedNodes.add(current);
      return computeMiscTextAlternative(current, {
        isEmbeddedInLabel: context.isEmbeddedInLabel,
        isReferenced: false
      });
    }
    var tooltipAttributeValue = computeTooltipAttributeValue(current);
    if (tooltipAttributeValue !== null) {
      consultedNodes.add(current);
      return tooltipAttributeValue;
    }

    // TODO should this be reachable?
    consultedNodes.add(current);
    return "";
  }
  return asFlatString(computeTextAlternative(root, {
    isEmbeddedInLabel: false,
    // by spec computeAccessibleDescription starts with the referenced elements as roots
    isReferenced: compute === "description",
    recursion: false
  }));
}
//# sourceMappingURL=accessible-name-and-description.js.map