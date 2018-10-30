"use strict";

const { mixin } = require("../../utils");
const NodeImpl = require("./Node-impl").implementation;
const ChildNodeImpl = require("./ChildNode-impl").implementation;
const NonDocumentTypeChildNodeImpl = require("./NonDocumentTypeChildNode-impl").implementation;
const DOMException = require("domexception");
const { TEXT_NODE } = require("../node-type");

class CharacterDataImpl extends NodeImpl {
  constructor(args, privateData) {
    super(args, privateData);

    this._data = privateData.data;
  }

  get data() {
    return this._data;
  }
  set data(data) {
    this.replaceData(0, this.length, data);
  }

  get length() {
    return this._data.length;
  }

  substringData(offset, count) {
    const { length } = this;

    if (offset > length) {
      throw new DOMException("The index is not in the allowed range.", "IndexSizeError");
    }

    if (offset + count > length) {
      return this._data.substring(offset);
    }

    return this._data.substring(offset, offset + count);
  }

  appendData(data) {
    this.replaceData(this.length, 0, data);
  }

  insertData(offset, data) {
    this.replaceData(offset, 0, data);
  }

  deleteData(offset, count) {
    this.replaceData(offset, count, "");
  }

  replaceData(offset, count, data) {
    const { length } = this;

    if (offset > length) {
      throw new DOMException("The index is not in the allowed range.", "IndexSizeError");
    }

    if (offset + count > length) {
      count = length - offset;
    }

    const start = this._data.substring(0, offset);
    const end = this._data.substring(offset + count);

    this._data = start + data + end;

    // TODO: range stuff

    if (this.nodeType === TEXT_NODE && this.parentNode) {
      this.parentNode._childTextContentChangeSteps();
    }
  }
}

mixin(CharacterDataImpl.prototype, NonDocumentTypeChildNodeImpl.prototype);
mixin(CharacterDataImpl.prototype, ChildNodeImpl.prototype);

module.exports = {
  implementation: CharacterDataImpl
};
