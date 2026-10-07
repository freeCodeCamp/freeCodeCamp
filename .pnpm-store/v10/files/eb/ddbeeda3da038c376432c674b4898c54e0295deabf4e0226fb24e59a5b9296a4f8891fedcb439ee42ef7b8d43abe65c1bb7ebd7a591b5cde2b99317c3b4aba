"use strict";

const DOMException = require("domexception/webidl2js-wrapper");

const NODE_TYPE = require("../node-type");

const AbstractRangeImpl = require("./AbstractRange-impl").implementation;

// https://dom.spec.whatwg.org/#staticrange
class StaticRangeImpl extends AbstractRangeImpl {
  // https://dom.spec.whatwg.org/#dom-staticrange-staticrange
  constructor(globalObject, args) {
    const { startContainer, startOffset, endContainer, endOffset } = args[0];

    if (
      startContainer.nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE ||
      startContainer.nodeType === NODE_TYPE.ATTRIBUTE_NODE ||
      endContainer.nodeType === NODE_TYPE.DOCUMENT_TYPE_NODE ||
      endContainer.nodeType === NODE_TYPE.ATTRIBUTE_NODE
    ) {
      throw DOMException.create(globalObject, ["The supplied node is incorrect.", "InvalidNodeTypeError"]);
    }

    super(globalObject, [], {
      start: {
        node: startContainer,
        offset: startOffset
      },
      end: {
        node: endContainer,
        offset: endOffset
      }
    });
  }
}

module.exports = {
  implementation: StaticRangeImpl
};
