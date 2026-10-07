"use strict";
const { mixin } = require("../../utils");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const WindowEventHandlersImpl = require("./WindowEventHandlers-impl").implementation;

class HTMLBodyElementImpl extends HTMLElementImpl {
  constructor(...args) {
    super(...args);
    this._proxyWindowEventsToWindow();
  }
}

mixin(HTMLBodyElementImpl.prototype, WindowEventHandlersImpl.prototype);

module.exports = {
  implementation: HTMLBodyElementImpl
};
