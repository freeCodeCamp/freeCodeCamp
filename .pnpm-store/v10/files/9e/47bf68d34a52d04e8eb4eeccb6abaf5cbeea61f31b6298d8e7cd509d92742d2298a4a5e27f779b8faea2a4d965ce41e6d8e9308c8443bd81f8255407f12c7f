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
    if (valueAttr !== null) {
      const parsedValue = parseFloatingPointNumber(valueAttr);
      if (parsedValue !== null && parsedValue > 0) {
        return parsedValue;
      }
    }
    return 0;
  }

  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-progress-current-value
  get _currentValue() {
    const value = this._value;
    return value > this._maximumValue ? this._maximumValue : value;
  }

  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-progress-maximum
  get _maximumValue() {
    const maxAttr = this.getAttributeNS(null, "max");
    if (maxAttr !== null) {
      const parsedMax = parseFloatingPointNumber(maxAttr);
      if (parsedMax !== null && parsedMax > 0) {
        return parsedMax;
      }
    }
    return 1.0;
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

  get position() {
    if (!this._isDeterminate) {
      return -1;
    }

    return this._currentValue / this._maximumValue;
  }

  get labels() {
    return getLabelsForLabelable(this);
  }
}

module.exports = {
  implementation: HTMLProgressElementImpl
};
