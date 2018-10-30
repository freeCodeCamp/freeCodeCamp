"use strict";

class SVGAnimatedStringImpl {
  constructor(args, privateData) {
    this._element = privateData.element;
    this._attribute = privateData.attribute;
    this._attributeDeprecated = privateData.attributeDeprecated; // can be undefined
    this._initialValue = privateData.initialValue; // can be undefined
  }

  get baseVal() {
    if (!this._element.hasAttribute(this._attribute)) {
      if (this._attributeDeprecated !== undefined && this._element.hasAttribute(this._attributeDeprecated)) {
        return this._element.getAttribute(this._attributeDeprecated);
      } else if (this._initialValue !== undefined) {
        return this._initialValue;
      }
      return "";
    }
    return this._element.getAttribute(this._attribute);
  }

  get animVal() {
    return this.baseVal;
  }

  set baseVal(base) {
    if (!this._element.hasAttribute(this._attribute) &&
        this._attributeDeprecated !== undefined &&
        this._element.hasAttribute(this._attributeDeprecated)) {
      this._element.setAttribute(this._attributeDeprecated, base);
    } else {
      this._element.setAttribute(this._attribute, base);
    }
  }
}

exports.implementation = SVGAnimatedStringImpl;
