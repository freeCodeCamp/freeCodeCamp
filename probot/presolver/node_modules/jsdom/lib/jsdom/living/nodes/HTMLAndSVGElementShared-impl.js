"use strict";

const conversions = require("webidl-conversions");
const focusing = require("../helpers/focusing");
const DOMStringMap = require("../generated/DOMStringMap");

class HTMLAndSVGElementSharedImpl {
  _initHTMLAndSVGElement() {
    this._tabIndex = 0;
    this._dataset = DOMStringMap.createImpl([], { element: this });
  }

  get dataset() {
    return this._dataset;
  }

  // TODO this should be [Reflect]able if we added default value support to webidl2js's [Reflect]
  get tabIndex() {
    if (!this.hasAttribute("tabindex")) {
      return focusing.isFocusableAreaElement(this) ? 0 : -1;
    }
    return conversions.long(this.getAttribute("tabindex"));
  }

  set tabIndex(value) {
    this.setAttribute("tabindex", String(value));
  }

  focus() {
    if (!focusing.isFocusableAreaElement(this)) {
      return;
    }

    const previous = this._ownerDocument._lastFocusedElement;

    focusing.fireFocusEventWithTargetAdjustment("blur", previous, this);
    this._ownerDocument._lastFocusedElement = this;
    focusing.fireFocusEventWithTargetAdjustment("focus", this, previous);

    if (this._ownerDocument._defaultView._frameElement) {
      this._ownerDocument._defaultView._frameElement.focus();
    }
  }

  blur() {
    if (this._ownerDocument._lastFocusedElement !== this || !focusing.isFocusableAreaElement(this)) {
      return;
    }

    focusing.fireFocusEventWithTargetAdjustment("blur", this, this._ownerDocument);
    this._ownerDocument._lastFocusedElement = null;
    focusing.fireFocusEventWithTargetAdjustment("focus", this._ownerDocument, this);
  }
}

exports.implementation = HTMLAndSVGElementSharedImpl;
