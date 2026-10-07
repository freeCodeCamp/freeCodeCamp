"use strict";

const { domSymbolTree } = require("../helpers/internal-constants");
const NODE_TYPE = require("../node-type");

class NonDocumentTypeChildNodeImpl {
  get nextElementSibling() {
    for (const sibling of domSymbolTree.nextSiblingsIterator(this)) {
      if (sibling.nodeType === NODE_TYPE.ELEMENT_NODE) {
        return sibling;
      }
    }
    return null;
  }

  get previousElementSibling() {
    for (const sibling of domSymbolTree.previousSiblingsIterator(this)) {
      if (sibling.nodeType === NODE_TYPE.ELEMENT_NODE) {
        return sibling;
      }
    }
    return null;
  }
}

module.exports = {
  implementation: NonDocumentTypeChildNodeImpl
};
