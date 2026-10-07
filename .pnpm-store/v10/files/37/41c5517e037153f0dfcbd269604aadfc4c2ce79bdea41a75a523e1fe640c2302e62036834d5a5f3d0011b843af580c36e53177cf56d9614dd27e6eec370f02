"use strict";

class SVGAnimatedStringImpl {
  constructor(globalObject, args, privateData) {
    this._element = privateData.element;
    this._attribute = privateData.attribute;
    this._attributeDeprecated = privateData.attributeDeprecated; // can be undefined
    this._initialValue = privateData.initialValue; // can be undefined
  }

  get baseVal() {
    if (!this._element.hasAttributeNS(null, this._attribute)) {
      if (this._attributeDeprecated !== undefined && this._element.hasAttributeNS(null, this._attributeDeprecated)) {
        return this._element.getAttributeNS(null, this._attributeDeprecated);
      } else if (this._initialValue !== undefined) {
        return this._initialValue;
      }
      return "";
    }
    return this._element.getAttributeNS(null, this._attribute);
  }

  set baseVal(base) {
    if (!this._element.hasAttributeNS(null, this._attribute) &&
        this._attributeDeprecated !== undefined &&
        this._element.hasAttributeNS(null, this._attributeDeprecated)) {
      this._element.setAttributeNS(null, this._attributeDeprecated, base);
    } else {
      this._element.setAttributeNS(null, this._attribute, base);
    }
  }

  get animVal() {
    return this.baseVal;
  }
}

exports.implementation = SVGAnimatedStringImpl;
