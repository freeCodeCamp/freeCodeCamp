"use strict";

const { mixin } = require("../../utils");
const SVGListBase = require("./SVGListBase");

class SVGStringListImpl {
  constructor(args, privateData) {
    this._initList(privateData);
  }
}

mixin(SVGStringListImpl.prototype, SVGListBase.prototype);

exports.implementation = SVGStringListImpl;
