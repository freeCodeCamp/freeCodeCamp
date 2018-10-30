"use strict";
const { mixin } = require("../../utils");
const NodeImpl = require("./Node-impl").implementation;
const ChildNodeImpl = require("./ChildNode-impl").implementation;

const NODE_TYPE = require("../node-type");

class DocumentTypeImpl extends NodeImpl {
  constructor(args, privateData) {
    super(args, privateData);

    this.nodeType = NODE_TYPE.DOCUMENT_TYPE_NODE;

    this.name = privateData.name;
    this.publicId = privateData.publicId;
    this.systemId = privateData.systemId;
  }
}

mixin(DocumentTypeImpl.prototype, ChildNodeImpl.prototype);

module.exports = {
  implementation: DocumentTypeImpl
};
