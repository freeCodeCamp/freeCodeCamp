"use strict";

const { domSymbolTree } = require("../helpers/internal-constants");
const { SVG_NS } = require("../helpers/namespaces");
const { mixin } = require("../../utils");
const SVGAnimatedString = require("../generated/SVGAnimatedString");
const ElementImpl = require("./Element-impl").implementation;
const ElementCSSInlineStyleImpl = require("./ElementCSSInlineStyle-impl").implementation;
const GlobalEventHandlersImpl = require("./GlobalEventHandlers-impl").implementation;
const HTMLAndSVGElementSharedImpl = require("./HTMLAndSVGElementShared-impl").implementation;

class SVGElementImpl extends ElementImpl {
  constructor(args, privateData) {
    super(args, privateData);
    this._initHTMLAndSVGElement();
    this._initElementCSSInlineStyle();
    this._initGlobalEvents();
  }

  get className() {
    return SVGAnimatedString.createImpl([], {
      element: this,
      attribute: "class"
    });
  }

  get ownerSVGElement() {
    let e = domSymbolTree.parent(this);
    while (e && e.namespaceURI === SVG_NS) {
      if (e.localName === "svg") {
        return e;
      }
      e = domSymbolTree.parent(e);
    }

    return null;
  }

  get viewportElement() {
    // TODO: <symbol>/<use> may make this different from ownerSVGElement.
    return this.ownerSVGElement;
  }
}

SVGElementImpl.attributeRegistry = new Map();

mixin(SVGElementImpl.prototype, ElementCSSInlineStyleImpl.prototype);
mixin(SVGElementImpl.prototype, GlobalEventHandlersImpl.prototype);
mixin(SVGElementImpl.prototype, HTMLAndSVGElementSharedImpl.prototype);

exports.implementation = SVGElementImpl;
