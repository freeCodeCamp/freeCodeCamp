"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { getLabelsForLabelable } = require("../helpers/form-controls");
const { parseFloatingPointNumber } = require("../helpers/strings");

class HTMLProgressElementImpl extends HTMLElementImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);
    this._labels = null;
  }

  get _isDeterminate() {
    return this.hasAttributeNS(null, "value");
  }

  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-progress-value
  get _value() {
    const valueAttr = this.getAttributeNS(null, "value");
    const parsedValue = parseFloatingPointNumber(valueAttr);
    if (parsedValue !== null && parsedValue > 0) {
      return parsedValue;
    }
    return 0;
  }

  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-progress-current-value
  get _currentValue() {
    const value = this._value;
    return value > this.max ? this.max : value;
  }

  get value() {
    if (this._isDeterminate) {
      return this._currentValue;
    }
    return 0;
  }
  set value(value) {
    this.setAttributeNS(null, "value", value);
  }

  get max() {
    const max = this.getAttributeNS(null, "max");
    if (max !== null) {
      const parsedMax = parseFloatingPointNumber(max);
      if (parsedMax !== null && parsedMax > 0) {
        return parsedMax;
      }
    }
    return 1.0;
  }
  set max(value) {
    if (value > 0) {
      this.setAttributeNS(null, "max", value);
    }
  }

  get position() {
    if (!this._isDeterminate) {
      return -1;
    }

    return this._currentValue / this.max;
  }

  get labels() {
    return getLabelsForLabelable(this);
  }
}

module.exports = {
  implementation: HTMLProgressElementImpl
};
