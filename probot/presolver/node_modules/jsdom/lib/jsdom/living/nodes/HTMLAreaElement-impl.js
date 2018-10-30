"use strict";
const { mixin } = require("../../utils");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const HTMLHyperlinkElementUtilsImpl = require("./HTMLHyperlinkElementUtils-impl").implementation;

class HTMLAreaElementImpl extends HTMLElementImpl {
  constructor(args, privateData) {
    super(args, privateData);

    this._htmlHyperlinkElementUtilsSetup();
  }
}

mixin(HTMLAreaElementImpl.prototype, HTMLHyperlinkElementUtilsImpl.prototype);

module.exports = {
  implementation: HTMLAreaElementImpl
};
