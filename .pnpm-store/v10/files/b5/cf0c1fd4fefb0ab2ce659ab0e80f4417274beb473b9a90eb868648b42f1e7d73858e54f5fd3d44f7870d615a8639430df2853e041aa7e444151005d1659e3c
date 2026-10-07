"use strict";

const { fireAnEvent } = require("../helpers/events");

const HTMLElementImpl = require("./HTMLElement-impl").implementation;

class HTMLDetailsElementImpl extends HTMLElementImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    this._taskQueue = null;
  }

  _dispatchToggleEvent() {
    this._taskQueue = null;

    fireAnEvent("toggle", this);
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
