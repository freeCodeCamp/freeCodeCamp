"use strict";

const NodeList = require("../generated/NodeList");

// https://dom.spec.whatwg.org/#mutationrecord
class MutationRecordImpl {
  constructor(globalObject, args, privateData) {
    this._globalObject = globalObject;

    this.type = privateData.type;
    this.target = privateData.target;
    this.previousSibling = privateData.previousSibling;
    this.nextSibling = privateData.nextSibling;
    this.attributeName = privateData.attributeName;
    this.attributeNamespace = privateData.attributeNamespace;
    this.oldValue = privateData.oldValue;

    this._addedNodes = privateData.addedNodes;
    this._removedNodes = privateData.removedNodes;
  }

  get addedNodes() {
    return NodeList.createImpl(this._globalObject, [], {
      nodes: this._addedNodes
    });
  }

  get removedNodes() {
    return NodeList.createImpl(this._globalObject, [], {
      nodes: this._removedNodes
    });
  }
}

module.exports = {
  implementation: MutationRecordImpl
};
