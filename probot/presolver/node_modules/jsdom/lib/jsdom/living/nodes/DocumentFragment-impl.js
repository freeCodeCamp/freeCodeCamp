"use strict";
const { mixin } = require("../../utils");
const { domSymbolTree } = require("../helpers/internal-constants");
const NODE_TYPE = require("../node-type");
const NodeImpl = require("./Node-impl").implementation;
const NonElementParentNodeImpl = require("./NonElementParentNode-impl").implementation;
const ParentNodeImpl = require("./ParentNode-impl").implementation;

class DocumentFragmentImpl extends NodeImpl {
  constructor(args, privateData) {
    super(args, privateData);

    this.nodeType = NODE_TYPE.DOCUMENT_FRAGMENT_NODE;
  }

  // This is implemented separately for Document (which has a _ids cache) and DocumentFragment (which does not).
  getElementById(id) {
    if (id === "") {
      return null;
    }

    for (const descendant of domSymbolTree.treeIterator(this)) {
      if (descendant.nodeType === NODE_TYPE.ELEMENT_NODE && descendant.getAttributeNS(null, "id") === id) {
        return descendant;
      }
    }

    return null;
  }
}

mixin(DocumentFragmentImpl.prototype, NonElementParentNodeImpl.prototype);
mixin(DocumentFragmentImpl.prototype, ParentNodeImpl.prototype);

module.exports = {
  implementation: DocumentFragmentImpl
};
