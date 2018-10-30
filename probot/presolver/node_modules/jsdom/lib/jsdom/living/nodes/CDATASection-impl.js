"use strict";

const TextImpl = require("./Text-impl").implementation;
const NODE_TYPE = require("../node-type");

class CDATASectionImpl extends TextImpl {
  constructor(args, privateData) {
    super(args, privateData);

    this.nodeType = NODE_TYPE.CDATA_SECTION_NODE;
  }
}

module.exports = {
  implementation: CDATASectionImpl
};
