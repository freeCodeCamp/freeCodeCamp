"use strict";
const { domSymbolTree } = require("./internal-constants");
const { CDATA_SECTION_NODE, TEXT_NODE } = require("../node-type");

//
// https://dom.spec.whatwg.org/#concept-child-text-content
//
exports.childTextContent = node => {
  let result = "";
  const iterator = domSymbolTree.childrenIterator(node);
  for (const child of iterator) {
    if (child.nodeType === TEXT_NODE ||
        // The CDataSection extends Text.
        child.nodeType === CDATA_SECTION_NODE) {
      result += child.data;
    }
  }
  return result;
};
