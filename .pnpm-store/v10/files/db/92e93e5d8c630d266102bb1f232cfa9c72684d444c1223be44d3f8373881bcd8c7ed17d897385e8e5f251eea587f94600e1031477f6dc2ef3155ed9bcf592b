"use strict";

const SVGPreserveAspectRatio = require("../generated/SVGPreserveAspectRatio");

class SVGAnimatedPreserveAspectRatioImpl {
  constructor(globalObject, args, privateData) {
    this._globalObject = globalObject;
    this._element = privateData.element;
  }

  get baseVal() {
    return SVGPreserveAspectRatio.createImpl(this._globalObject, [], {
      element: this._element
    });
  }

  get animVal() {
    return SVGPreserveAspectRatio.createImpl(this._globalObject, [], {
      element: this._element
    });
  }
}

exports.implementation = SVGAnimatedPreserveAspectRatioImpl;
