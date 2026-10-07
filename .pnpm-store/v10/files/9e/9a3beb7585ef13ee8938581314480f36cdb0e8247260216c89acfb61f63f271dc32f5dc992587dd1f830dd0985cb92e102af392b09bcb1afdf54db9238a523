"use strict";

const { mixin } = require("../../utils");
const SVGElementImpl = require("./SVGElement-impl").implementation;
const SVGTestsImpl = require("./SVGTests-impl").implementation;

class SVGGraphicsElementImpl extends SVGElementImpl {}

SVGGraphicsElementImpl.attributeRegistry = new Map([
  ...SVGElementImpl.attributeRegistry,
  ...SVGTestsImpl.attributeRegistry
]);

mixin(SVGGraphicsElementImpl.prototype, SVGTestsImpl.prototype);

exports.implementation = SVGGraphicsElementImpl;
