"use strict";
const { mixin } = require("../../utils");
const ElementImpl = require("./Element-impl").implementation;
const DOMException = require("../generated/DOMException");
const MouseEvent = require("../generated/MouseEvent");
const ElementInternals = require("../generated/ElementInternals");
const ElementCSSInlineStyleImpl = require("./ElementCSSInlineStyle-impl").implementation;
const GlobalEventHandlersImpl = require("./GlobalEventHandlers-impl").implementation;
const HTMLOrSVGElementImpl = require("./HTMLOrSVGElement-impl").implementation;
const { firstChildWithLocalName } = require("../helpers/traversal");
const { isDisabled } = require("../helpers/form-controls");
const { fireAnEvent } = require("../helpers/events");
const { asciiLowercase } = require("../helpers/strings");
const { lookupCEDefinition } = require("../helpers/custom-elements");

class HTMLElementImpl extends ElementImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);
    this._initHTMLOrSVGElement();
    this._initElementCSSInlineStyle();
    this._initGlobalEvents();

    this._clickInProgress = false;

    // <summary> uses HTMLElement and has activation behavior
    this._hasActivationBehavior = this._localName === "summary";

    // https://html.spec.whatwg.org/#attached-internals
    this._attachedInternals = null;
  }

  _activationBehavior() {
    const parent = this.parentNode;
    if (parent && parent._localName === "details" &&
        this === firstChildWithLocalName(parent, "summary")) {
      if (parent.hasAttributeNS(null, "open")) {
        parent.removeAttributeNS(null, "open");
      } else {
        parent.setAttributeNS(null, "open", "");
      }
    }
  }

  // https://html.spec.whatwg.org/multipage/dom.html#the-translate-attribute
  get translate() {
    const translateAttr = this.getAttributeNS(null, "translate");
    const translateAttrString = asciiLowercase(translateAttr || "");

    if (translateAttrString === "yes" || (translateAttr && translateAttrString === "")) {
      return true;
    } else if (translateAttrString === "no") {
      return false;
    }

    if (this === this.ownerDocument.documentElement) {
      return true;
    }

    return this.parentElement && this.parentElement.translate;
  }
  set translate(value) {
    if (value === true) {
      this.setAttributeNS(null, "translate", "yes");
    } else {
      this.setAttributeNS(null, "translate", "no");
    }
  }

  click() {
    // https://html.spec.whatwg.org/multipage/interaction.html#dom-click
    // https://html.spec.whatwg.org/multipage/webappapis.html#fire-a-synthetic-mouse-event

    if (isDisabled(this)) {
      return;
    }

    if (this._clickInProgress) {
      return;
    }

    this._clickInProgress = true;

    // https://github.com/whatwg/html/issues/4451
    // https://github.com/whatwg/html/issues/4452
    fireAnEvent("click", this, MouseEvent, {
      bubbles: true,
      cancelable: true,
      composed: true,
      isTrusted: false,
      view: this.ownerDocument.defaultView
    });

    this._clickInProgress = false;
  }

  get draggable() {
    const attributeValue = asciiLowercase(this.getAttributeNS(null, "draggable") || "");

    if (attributeValue === "true") {
      return true;
    } else if (attributeValue === "false") {
      return false;
    }

    return this._localName === "img" || (this._localName === "a" && this.hasAttributeNS(null, "href"));
  }
  set draggable(value) {
    this.setAttributeNS(null, "draggable", String(value));
  }

  get dir() {
    let dirValue = this.getAttributeNS(null, "dir");
    if (dirValue !== null) {
      dirValue = dirValue.toLowerCase();

      if (["ltr", "rtl", "auto"].includes(dirValue)) {
        return dirValue;
      }
    }
    return "";
  }
  set dir(value) {
    this.setAttributeNS(null, "dir", value);
  }

  // https://html.spec.whatwg.org/#dom-attachinternals
  attachInternals() {
    if (this._isValue !== null) {
      throw DOMException.create(this._globalObject, [
        "Unable to attach ElementInternals to a customized built-in element.",
        "NotSupportedError"
      ]);
    }

    const definition = lookupCEDefinition(this._ownerDocument, this._namespaceURI, this._localName, null);

    if (definition === null) {
      throw DOMException.create(this._globalObject, [
        "Unable to attach ElementInternals to non-custom elements.",
        "NotSupportedError"
      ]);
    }

    if (definition.disableInternals === true) {
      throw DOMException.create(this._globalObject, [
        "ElementInternals is disabled by disabledFeature static field.",
        "NotSupportedError"
      ]);
    }

    if (this._attachedInternals !== null) {
      throw DOMException.create(this._globalObject, [
        "ElementInternals for the specified element was already attached.",
        "NotSupportedError"
      ]);
    }

    if (this._ceState !== "precustomized" && this._ceState !== "custom") {
      throw DOMException.create(this._globalObject, [
        "The attachInternals() function cannot be called prior to the execution of the custom element constructor.",
        "NotSupportedError"
      ]);
    }

    this._attachedInternals = ElementInternals.createImpl(this._globalObject, [], { targetElement: this });

    return this._attachedInternals;
  }

  // Keep in sync with SVGElement. https://github.com/jsdom/jsdom/issues/2599
  _attrModified(name, value, oldValue) {
    if (name === "style" && value !== oldValue && !this._settingCssText) {
      this._settingCssText = true;
      this._style.cssText = value;
      this._settingCssText = false;
    } else if (name.startsWith("on")) {
      this._globalEventChanged(name.substring(2));
    }

    super._attrModified(name, value, oldValue);
  }

  get offsetParent() {
    return null;
  }

  get offsetTop() {
    return 0;
  }

  get offsetLeft() {
    return 0;
  }

  get offsetWidth() {
    return 0;
  }

  get offsetHeight() {
    return 0;
  }
}

mixin(HTMLElementImpl.prototype, ElementCSSInlineStyleImpl.prototype);
mixin(HTMLElementImpl.prototype, GlobalEventHandlersImpl.prototype);
mixin(HTMLElementImpl.prototype, HTMLOrSVGElementImpl.prototype);

module.exports = {
  implementation: HTMLElementImpl
};
