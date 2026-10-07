"use strict";

const { parseFragment } = require("../../browser/parser");
const { HTML_NS } = require("../helpers/namespaces.js");
const { isShadowRoot } = require("../helpers/shadow-dom.js");
const NODE_TYPE = require("../node-type.js");
const { fragmentSerialization } = require("./serialization.js");

// https://w3c.github.io/DOM-Parsing/#the-innerhtml-mixin
exports.implementation = class InnerHTMLImpl {
  // https://w3c.github.io/DOM-Parsing/#dom-innerhtml-innerhtml
  get innerHTML() {
    return fragmentSerialization(this, {
      outer: false,
      requireWellFormed: true,
      globalObject: this._globalObject
    });
  }
  set innerHTML(markup) {
    const contextElement = isShadowRoot(this) ? this.host : this;
    const fragment = parseFragment(markup, contextElement);

    let contextObject = this;
    if (this.nodeType === NODE_TYPE.ELEMENT_NODE && this.localName === "template" && this.namespaceURI === HTML_NS) {
      contextObject = this._templateContents;
    }

    contextObject._replaceAll(fragment);
  }
};
