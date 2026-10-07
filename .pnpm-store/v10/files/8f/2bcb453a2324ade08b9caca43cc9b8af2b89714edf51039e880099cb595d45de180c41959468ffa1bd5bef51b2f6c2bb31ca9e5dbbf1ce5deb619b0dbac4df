"use strict";
const DOMRectReadOnly = require("../generated/DOMRectReadOnly");

class DOMRectReadOnlyImpl {
  constructor(globalObject, [x = 0, y = 0, width = 0, height = 0]) {
    this._globalObject = globalObject;
    this._x = x;
    this._y = y;
    this._width = width;
    this._height = height;
  }

  static fromRect(globalObject, other) {
    return DOMRectReadOnly.createImpl(globalObject, [other.x, other.y, other.width, other.height]);
  }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  get width() {
    return this._width;
  }

  get height() {
    return this._height;
  }

  get top() {
    const { height, y } = this;
    // We use Math.min's built-in NaN handling: https://github.com/w3c/fxtf-drafts/issues/222
    return Math.min(y, y + height);
  }

  get right() {
    const { width, x } = this;
    // We use Math.max's built-in NaN handling: https://github.com/w3c/fxtf-drafts/issues/222
    return Math.max(x, x + width);
  }

  get bottom() {
    const { height, y } = this;
    // We use Math.max's built-in NaN handling: https://github.com/w3c/fxtf-drafts/issues/222
    return Math.max(y, y + height);
  }

  get left() {
    const { width, x } = this;
    // We use Math.min's built-in NaN handling: https://github.com/w3c/fxtf-drafts/issues/222
    return Math.min(x, x + width);
  }

  // Could be removed after https://github.com/jsdom/webidl2js/issues/185 gets fixed.
  toJSON() {
    return {
      x: this.x,
      y: this.y,
      width: this.width,
      height: this.height,
      top: this.top,
      right: this.right,
      bottom: this.bottom,
      left: this.left
    };
  }
}

exports.implementation = DOMRectReadOnlyImpl;
