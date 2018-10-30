"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { parseFloatingPointNumber } = require("../helpers/strings");
const { getLabelsForLabelable } = require("../helpers/form-controls");

class HTMLMeterElementImpl extends HTMLElementImpl {
  constructor(args, privateData) {
    super(args, privateData);
    this._labels = null;
  }

  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-meter-minimum
  get _minimumValue() {
    const min = this.getAttribute("min");
    if (min === null) {
      return 0;
    }
    const parsed = parseFloatingPointNumber(min);
    if (Number.isNaN(parsed)) {
      return 0;
    }
    return parsed;
  }

  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-meter-maximum
  get _maximumValue() {
    let candidate = 1.0;

    const max = this.getAttribute("max");
    if (max !== null) {
      const parsed = parseFloatingPointNumber(max);
      if (!Number.isNaN(parsed)) {
        candidate = parsed;
      }
    }

    const minimumValue = this._minimumValue;
    return candidate >= minimumValue ? candidate : minimumValue;
  }

  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-meter-actual
  get _actualValue() {
    let candidate = 0;

    const value = this.getAttribute("value");
    if (value !== null) {
      const parsed = parseFloatingPointNumber(value);
      if (!Number.isNaN(parsed)) {
        candidate = parsed;
      }
    }

    const minimumValue = this._minimumValue;
    if (candidate < minimumValue) {
      return minimumValue;
    }

    const maximumValue = this._maximumValue;
    return candidate > maximumValue ? maximumValue : candidate;
  }

  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-meter-low
  get _lowBoundary() {
    const minimumValue = this._minimumValue;
    let candidate = minimumValue;

    const low = this.getAttribute("low");
    if (low !== null) {
      const parsed = parseFloatingPointNumber(low);
      if (!Number.isNaN(parsed)) {
        candidate = parsed;
      }
    }

    if (candidate < minimumValue) {
      return minimumValue;
    }

    const maximumValue = this._maximumValue;
    return candidate > maximumValue ? maximumValue : candidate;
  }

  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-meter-high
  get _highBoundary() {
    const maximumValue = this._maximumValue;
    let candidate = maximumValue;

    const high = this.getAttribute("high");
    if (high !== null) {
      const parsed = parseFloatingPointNumber(high);
      if (!Number.isNaN(parsed)) {
        candidate = parsed;
      }
    }

    const lowBoundary = this._lowBoundary;
    if (candidate < lowBoundary) {
      return lowBoundary;
    }

    return candidate > maximumValue ? maximumValue : candidate;
  }

  // https://html.spec.whatwg.org/multipage/form-elements.html#concept-meter-optimum
  get _optimumPoint() {
    const minimumValue = this._minimumValue;
    const maximumValue = this._maximumValue;
    let candidate = (minimumValue + maximumValue) / 2;

    const optimum = this.getAttribute("optimum");
    if (optimum !== null) {
      const parsed = parseFloatingPointNumber(optimum);
      if (!Number.isNaN(parsed)) {
        candidate = parsed;
      }
    }

    if (candidate < minimumValue) {
      return minimumValue;
    }

    return candidate > maximumValue ? maximumValue : candidate;
  }

  get labels() {
    return getLabelsForLabelable(this);
  }

  get value() {
    return this._actualValue;
  }

  set value(val) {
    this.setAttribute("value", String(val));
  }

  get min() {
    return this._minimumValue;
  }

  set min(val) {
    this.setAttribute("min", String(val));
  }

  get max() {
    return this._maximumValue;
  }

  set max(val) {
    this.setAttribute("max", String(val));
  }

  get low() {
    return this._lowBoundary;
  }

  set low(val) {
    this.setAttribute("low", String(val));
  }

  get high() {
    return this._highBoundary;
  }

  set high(val) {
    this.setAttribute("high", String(val));
  }

  get optimum() {
    return this._optimumPoint;
  }

  set optimum(val) {
    this.setAttribute("optimum", String(val));
  }
}

module.exports = {
  implementation: HTMLMeterElementImpl
};
