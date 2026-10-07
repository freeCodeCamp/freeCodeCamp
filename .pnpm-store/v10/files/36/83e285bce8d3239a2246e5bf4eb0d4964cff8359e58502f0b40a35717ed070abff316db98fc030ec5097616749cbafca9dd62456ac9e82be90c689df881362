"use strict";

const conversions = require("webidl-conversions");
const { isSummaryForParentDetails } = require("../helpers/details");
const focusing = require("../helpers/focusing");
const { HTML_NS, SVG_NS } = require("../helpers/namespaces");
const DOMStringMap = require("../generated/DOMStringMap");

const tabIndexReflectAllowedHTMLElements = new Set([
  "a", "area", "button", "frame", "iframe",
  "input", "object", "select", "textarea"
]);

class HTMLOrSVGElementImpl {
  _initHTMLOrSVGElement() {
    this._tabIndex = 0;
    this._dataset = null;
  }

  get dataset() {
    if (!this._dataset) {
      this._dataset = DOMStringMap.createImpl(this._globalObject, [], { element: this });
    }
    return this._dataset;
  }

  // TODO this should be [Reflect]able if we added default value support to webidl2js's [Reflect]
  get tabIndex() {
    if (!this.hasAttributeNS(null, "tabindex")) {
      if ((this.namespaceURI === HTML_NS && (tabIndexReflectAllowedHTMLElements.has(this._localName) ||
                                             (this._localName === "summary" && isSummaryForParentDetails(this)))) ||
          (this.namespaceURI === SVG_NS && this._localName === "a")) {
        return 0;
      }
      return -1;
    }
    return conversions.long(this.getAttributeNS(null, "tabindex"));
  }

  set tabIndex(value) {
    this.setAttributeNS(null, "tabindex", String(value));
  }

  focus() {
    if (!focusing.isFocusableAreaElement(this)) {
      return;
    }
    const ownerDocument = this._ownerDocument;
    const previous = ownerDocument._lastFocusedElement;

    if (previous === this) {
      return;
    }

    ownerDocument._lastFocusedElement = null;
    if (previous) {
      focusing.fireFocusEventWithTargetAdjustment("blur", previous, this);
      focusing.fireFocusEventWithTargetAdjustment("focusout", previous, this, { bubbles: true });
    } else {
      const frameElement = ownerDocument._defaultView._frameElement;
      if (frameElement) {
        const frameLastFocusedElement = frameElement.ownerDocument._lastFocusedElement;
        frameElement.ownerDocument._lastFocusedElement = null;
        focusing.fireFocusEventWithTargetAdjustment("blur", frameLastFocusedElement, null);
        focusing.fireFocusEventWithTargetAdjustment("focusout", frameLastFocusedElement, null, { bubbles: true });
        frameElement.ownerDocument._lastFocusedElement = frameElement;
      }
    }

    ownerDocument._lastFocusedElement = this;
    focusing.fireFocusEventWithTargetAdjustment("focus", this, previous);
    focusing.fireFocusEventWithTargetAdjustment("focusin", this, previous, { bubbles: true });
    ownerDocument.getSelection().collapse(this, 0);
  }

  blur() {
    if (this._ownerDocument._lastFocusedElement !== this || !focusing.isFocusableAreaElement(this)) {
      return;
    }

    this._ownerDocument._lastFocusedElement = null;
    focusing.fireFocusEventWithTargetAdjustment("blur", this, null);
    focusing.fireFocusEventWithTargetAdjustment("focusout", this, null, { bubbles: true });
    this._ownerDocument.getSelection().empty();
  }
}

exports.implementation = HTMLOrSVGElementImpl;
