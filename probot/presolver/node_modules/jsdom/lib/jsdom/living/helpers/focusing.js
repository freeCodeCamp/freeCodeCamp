"use strict";
const nodeType = require("../node-type.js");
const FocusEvent = require("../generated/FocusEvent.js");
const idlUtils = require("../generated/utils.js");
const { isDisabled } = require("./form-controls.js");
const { HTML_NS } = require("./namespaces");

const focusableFormElements = new Set(["input", "select", "textarea", "button"]);

// https://html.spec.whatwg.org/multipage/interaction.html#focusable-area, but also some of
// https://html.spec.whatwg.org/multipage/interaction.html#focusing-steps: e.g., Documents are not actually focusable
// areas, but their viewports are, and the first step of the latter algorithm translates Documents to their viewports.
// And also https://html.spec.whatwg.org/multipage/interaction.html#specially-focusable!
exports.isFocusableAreaElement = elImpl => {
  if (!elImpl._ownerDocument._defaultView && !elImpl._defaultView) {
    return false;
  }

  if (elImpl._nodeType === nodeType.DOCUMENT_NODE) {
    return true;
  }

  if (!Number.isNaN(parseInt(elImpl.getAttribute("tabindex")))) {
    return true;
  }

  if (elImpl._namespaceURI === HTML_NS) {
    if (elImpl._localName === "iframe") {
      return true;
    }

    if (elImpl._localName === "a" && elImpl.hasAttribute("href")) {
      return true;
    }

    if (focusableFormElements.has(elImpl._localName) && !isDisabled(elImpl)) {
      if (elImpl._localName === "input" && elImpl.type === "hidden") {
        return false;
      }

      return true;
    }
  }

  return false;
};

// https://html.spec.whatwg.org/multipage/interaction.html#fire-a-focus-event plus the steps of
// https://html.spec.whatwg.org/multipage/interaction.html#focus-update-steps that adjust Documents to Windows
exports.fireFocusEventWithTargetAdjustment = (name, target, relatedTarget) => {
  if (target === null) {
    // E.g. firing blur with nothing previously focused.
    return;
  }

  const event = FocusEvent.createImpl(
    [
      name,
      {
        bubbles: false,
        cancelable: false,
        relatedTarget,
        view: target._ownerDocument._defaultView,
        detail: 0
      }
    ],
    {
      isTrusted: true
    }
  );

  if (target._defaultView) {
    target = idlUtils.implForWrapper(target._defaultView);
  }

  // _dispatch allows setting isTrusted
  target._dispatch(event);
};
