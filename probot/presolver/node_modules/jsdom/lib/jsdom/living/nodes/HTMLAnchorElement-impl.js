"use strict";
const { mixin } = require("../../utils");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const HTMLHyperlinkElementUtilsImpl = require("./HTMLHyperlinkElementUtils-impl").implementation;

class HTMLAnchorElementImpl extends HTMLElementImpl {
  constructor(args, privateData) {
    super(args, privateData);

    this._htmlHyperlinkElementUtilsSetup();
  }

  get text() {
    return this.textContent;
  }
  set text(v) {
    this.textContent = v;
  }
}

mixin(HTMLAnchorElementImpl.prototype, HTMLHyperlinkElementUtilsImpl.prototype);

module.exports = {
  implementation: HTMLAnchorElementImpl
};
