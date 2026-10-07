"use strict";

const produceXMLSerialization = require("w3c-xmlserializer");
const parse5 = require("parse5");
const DOMException = require("../generated/DOMException");
const { domSymbolTree } = require("../helpers/internal-constants");
const utils = require("../generated/utils");
const treeAdapter = require("./parse5-adapter-serialization");
const NODE_TYPE = require("../node-type");

module.exports.fragmentSerialization = (node, { outer, requireWellFormed, globalObject }) => {
  const contextDocument =
    node.nodeType === NODE_TYPE.DOCUMENT_NODE ? node : node._ownerDocument;
  if (contextDocument._parsingMode === "html") {
    const config = {
      ...contextDocument._parseOptions,
      treeAdapter
    };
    return outer ? parse5.serializeOuter(node, config) : parse5.serialize(node, config);
  }

  const childNodes = outer ? [node] : domSymbolTree.childrenToArray(node);

  try {
    let serialized = "";
    for (let i = 0; i < childNodes.length; ++i) {
      serialized += produceXMLSerialization(
        utils.wrapperForImpl(childNodes[i]),
        { requireWellFormed }
      );
    }
    return serialized;
  } catch (e) {
    throw DOMException.create(globalObject, [e.message, "InvalidStateError"]);
  }
};
