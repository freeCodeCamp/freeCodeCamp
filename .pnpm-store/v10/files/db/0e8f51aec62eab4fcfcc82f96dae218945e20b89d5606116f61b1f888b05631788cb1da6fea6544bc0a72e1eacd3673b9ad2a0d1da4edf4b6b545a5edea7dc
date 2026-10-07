"use strict";

const { mixin } = require("../../utils");
const SVGNumber = require("../generated/SVGNumber");
const SVGRect = require("../generated/SVGRect");
const SVGGraphicsElementImpl = require("./SVGGraphicsElement-impl").implementation;
const WindowEventHandlersImpl = require("./WindowEventHandlers-impl").implementation;
const { domSymbolTree } = require("../helpers/internal-constants");
const { ELEMENT_NODE } = require("../node-type");

class SVGSVGElementImpl extends SVGGraphicsElementImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);
    this._proxyWindowEventsToWindow();
  }

  createSVGNumber() {
    return SVGNumber.createImpl(this._globalObject, [], {});
  }

  createSVGRect() {
    return SVGRect.createImpl(this._globalObject, [], {});
  }

  getElementById(elementId) {
    // TODO: optimize with _ids caching trick; see Document class.
    for (const node of domSymbolTree.treeIterator(this)) {
      if (node.nodeType === ELEMENT_NODE && node.getAttributeNS(null, "id") === elementId) {
        return node;
      }
    }
    return null;
  }

  suspendRedraw() {
    return 1;
  }
  unsuspendRedraw() {}
  unsuspendRedrawAll() {}
  forceRedraw() {}
}

mixin(SVGSVGElementImpl.prototype, WindowEventHandlersImpl.prototype);

module.exports = {
  implementation: SVGSVGElementImpl
};
