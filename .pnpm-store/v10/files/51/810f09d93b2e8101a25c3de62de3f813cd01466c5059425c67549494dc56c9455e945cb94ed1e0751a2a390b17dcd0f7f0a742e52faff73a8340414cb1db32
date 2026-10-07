"use strict";
const { mixin } = require("../../utils");
const DOMTokenList = require("../generated/DOMTokenList");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const HTMLHyperlinkElementUtilsImpl = require("./HTMLHyperlinkElementUtils-impl").implementation;

class HTMLAreaElementImpl extends HTMLElementImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    this._htmlHyperlinkElementUtilsSetup();

    this._hasActivationBehavior = true;
  }

  _activationBehavior() {
    this._followAHyperlink();
  }

  get relList() {
    if (this._relList === undefined) {
      this._relList = DOMTokenList.createImpl(this._globalObject, [], {
        element: this,
        attributeLocalName: "rel"
      });
    }
    return this._relList;
  }

  _attrModified(name, value, oldValue) {
    super._attrModified(name, value, oldValue);

    if (name === "rel" && this._relList !== undefined) {
      this._relList.attrModified();
    }
  }
}

mixin(HTMLAreaElementImpl.prototype, HTMLHyperlinkElementUtilsImpl.prototype);

module.exports = {
  implementation: HTMLAreaElementImpl
};
