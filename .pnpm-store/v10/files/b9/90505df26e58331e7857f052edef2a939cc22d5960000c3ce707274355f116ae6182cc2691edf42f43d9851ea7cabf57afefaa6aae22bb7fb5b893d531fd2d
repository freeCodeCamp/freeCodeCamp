"use strict";
const DOMRectReadOnlyImpl = require("./DOMRectReadOnly-impl").implementation;
const DOMRect = require("../generated/DOMRect");

class DOMRectImpl extends DOMRectReadOnlyImpl {
  static fromRect(globalObject, other) {
    return DOMRect.createImpl(globalObject, [other.x, other.y, other.width, other.height]);
  }

  get x() {
    return super.x;
  }
  set x(newX) {
    this._x = newX;
  }

  get y() {
    return super.y;
  }
  set y(newY) {
    this._y = newY;
  }

  get width() {
    return super.width;
  }
  set width(newWidth) {
    this._width = newWidth;
  }

  get height() {
    return super.height;
  }
  set height(newHeight) {
    this._height = newHeight;
  }
}

exports.implementation = DOMRectImpl;
