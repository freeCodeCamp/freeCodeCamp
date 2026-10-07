"use strict";
const CharacterDataImpl = require("./CharacterData-impl").implementation;
const idlUtils = require("../generated/utils");
const NODE_TYPE = require("../node-type");

class CommentImpl extends CharacterDataImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, {
      data: args[0],
      ownerDocument: idlUtils.implForWrapper(globalObject._document),
      ...privateData
    });

    this.nodeType = NODE_TYPE.COMMENT_NODE;
  }
}

module.exports = {
  implementation: CommentImpl
};
