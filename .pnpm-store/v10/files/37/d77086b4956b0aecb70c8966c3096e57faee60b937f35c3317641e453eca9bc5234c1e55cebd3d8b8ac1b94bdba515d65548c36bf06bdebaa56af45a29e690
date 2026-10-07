"use strict";
const DOMException = require("../generated/DOMException");

class SVGRectImplRecord {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  }
}

class SVGRectImplReflection {
  constructor(privateData) {
    this._reflectedElement = privateData.reflectedElement;
    this._reflectedAttribute = privateData.reflectedAttribute;
    this._parser = privateData.parser;
  }

  // https://svgwg.org/svg2-draft/types.html#TermReserialize
  _reserialize({ x, y, width, height }) {
    this._reflectedElement.setAttributeNS(null, this._reflectedAttribute, `${x} ${y} ${width} ${height}`);
  }

  get x() {
    const attr = this._reflectedElement.getAttributeNS(null, this._reflectedAttribute);
    return this._parser(attr).x;
  }

  set x(newX) {
    const { y, width, height } = this;
    this._reserialize({
      x: newX,
      y,
      width,
      height
    });
  }

  get y() {
    const attr = this._reflectedElement.getAttributeNS(null, this._reflectedAttribute);
    return this._parser(attr).y;
  }

  set y(newY) {
    const { x, width, height } = this;
    this._reserialize({
      x,
      y: newY,
      width,
      height
    });
  }

  get width() {
    const attr = this._reflectedElement.getAttributeNS(null, this._reflectedAttribute);
    return this._parser(attr).width;
  }

  set width(newWidth) {
    const { x, y, height } = this;
    this._reserialize({
      x,
      y,
      width: newWidth,
      height
    });
  }

  get height() {
    const attr = this._reflectedElement.getAttributeNS(null, this._reflectedAttribute);
    return this._parser(attr).height;
  }

  set height(newHeight) {
    const { x, y, width } = this;
    this._reserialize({
      x,
      y,
      width,
      height: newHeight
    });
  }
}

class SVGRectImpl {
  constructor(globalObject, args, { readOnly = false, ...privateData } = {}) {
    this._globalObject = globalObject;

    this._readOnly = readOnly;
    if (privateData.reflectedElement) {
      this._impl = new SVGRectImplReflection(privateData);
    } else {
      this._impl = new SVGRectImplRecord();
    }
  }

  get x() {
    return this._impl.x;
  }

  set x(newX) {
    if (this._readOnly) {
      throw DOMException.create(this._globalObject, ["This SVGRect is read-only", "NO_MODIFICATION_ALLOWED_ERR"]);
    }
    this._impl.x = newX;
  }

  get y() {
    return this._impl.y;
  }

  set y(newY) {
    if (this._readOnly) {
      throw DOMException.create(this._globalObject, ["This SVGRect is read-only", "NO_MODIFICATION_ALLOWED_ERR"]);
    }
    this._impl.y = newY;
  }

  get width() {
    return this._impl.width;
  }

  set width(newWidth) {
    if (this._readOnly) {
      throw DOMException.create(this._globalObject, ["This SVGRect is read-only", "NO_MODIFICATION_ALLOWED_ERR"]);
    }
    this._impl.width = newWidth;
  }

  get height() {
    return this._impl.height;
  }

  set height(newHeight) {
    if (this._readOnly) {
      throw DOMException.create(this._globalObject, ["This SVGRect is read-only", "NO_MODIFICATION_ALLOWED_ERR"]);
    }
    this._impl.height = newHeight;
  }
}

exports.implementation = SVGRectImpl;
