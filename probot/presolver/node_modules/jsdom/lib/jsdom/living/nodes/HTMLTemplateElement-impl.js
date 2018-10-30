"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;

const { cloningSteps, domSymbolTree } = require("../helpers/internal-constants");
const { clone } = require("../node");

class HTMLTemplateElementImpl extends HTMLElementImpl {
  constructor(args, privateData) {
    super(args, privateData);
    this._templateContents = this._ownerDocument.createDocumentFragment();
  }

  get content() {
    return this._templateContents;
  }

  [cloningSteps](copy, node, document, cloneChildren) {
    if (!cloneChildren) {
      return;
    }

    for (const child of domSymbolTree.childrenIterator(node._templateContents)) {
      const childCopy = clone(child, copy._templateContents._ownerDocument, true);
      copy._templateContents.appendChild(childCopy);
    }
  }
}

module.exports = {
  implementation: HTMLTemplateElementImpl
};
