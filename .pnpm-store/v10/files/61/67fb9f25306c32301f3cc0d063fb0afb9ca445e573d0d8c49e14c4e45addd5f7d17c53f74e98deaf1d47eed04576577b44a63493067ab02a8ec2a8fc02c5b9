"use strict";

const { domSymbolTree } = require("../helpers/internal-constants");
const { SVG_NS } = require("../helpers/namespaces");
const { mixin } = require("../../utils");
const ElementImpl = require("./Element-impl").implementation;
const ElementCSSInlineStyleImpl = require("./ElementCSSInlineStyle-impl").implementation;
const GlobalEventHandlersImpl = require("./GlobalEventHandlers-impl").implementation;
const HTMLOrSVGElementImpl = require("./HTMLOrSVGElement-impl").implementation;

class SVGElementImpl extends ElementImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);
    this._initHTMLOrSVGElement();
    this._initElementCSSInlineStyle();
    this._initGlobalEvents();
  }

  // Keep in sync with HTMLElement. https://github.com/jsdom/jsdom/issues/2599
  _attrModified(name, value, oldValue) {
    if (name === "style" && value !== oldValue && !this._settingCssText) {
      this._settingCssText = true;
      this._style.cssText = value;
      this._settingCssText = false;
    } else if (name.startsWith("on")) {
      this._globalEventChanged(name.substring(2));
    }

    super._attrModified(name, value, oldValue);
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
    // Get the nearest ancestor that establishes the viewport.
    // https://svgwg.org/svg2-draft/coords.html#EstablishingANewSVGViewport
    let e = domSymbolTree.parent(this);
    while (e && e.namespaceURI === SVG_NS) {
      if (e.localName === "svg" || e.localName === "symbol") {
        return e;
      }
      e = domSymbolTree.parent(e);
    }
    return null;
  }
}

SVGElementImpl.attributeRegistry = new Map();

mixin(SVGElementImpl.prototype, ElementCSSInlineStyleImpl.prototype);
mixin(SVGElementImpl.prototype, GlobalEventHandlersImpl.prototype);
mixin(SVGElementImpl.prototype, HTMLOrSVGElementImpl.prototype);

exports.implementation = SVGElementImpl;
