"use strict";

const Event = require("../generated/Event.js");

const HTMLElementImpl = require("./HTMLElement-impl").implementation;

class HTMLDetailsElementImpl extends HTMLElementImpl {
  constructor(args, privateData) {
    super(args, privateData);

    this._taskQueue = null;
  }

  _dispatchToggleEvent() {
    this._taskQueue = null;

    this._dispatch(Event.createImpl(
      [
        "toggle",
        { bubbles: false, cancelable: false }
      ],
      { isTrusted: true }
    ));
  }

  _attrModified(name, value, oldValue) {
    super._attrModified(name, value, oldValue);

    if (name === "open" && this._taskQueue === null) {
      // Check that the attribute is added or removed, not merely changed
      if ((value !== oldValue && value !== null && oldValue === null) ||
          (value === null && oldValue !== null)) {
        this._taskQueue = setTimeout(this._dispatchToggleEvent.bind(this), 0);
      }
    }
  }
}

module.exports = {
  implementation: HTMLDetailsElementImpl
};
