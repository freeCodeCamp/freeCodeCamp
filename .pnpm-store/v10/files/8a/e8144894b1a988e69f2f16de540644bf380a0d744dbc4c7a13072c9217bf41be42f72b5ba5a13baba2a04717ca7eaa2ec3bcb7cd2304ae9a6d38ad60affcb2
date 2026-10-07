"use strict";

const DOMException = require("../generated/DOMException");

const { mixin } = require("../../utils");
const NodeImpl = require("./Node-impl").implementation;
const ChildNodeImpl = require("./ChildNode-impl").implementation;
const NonDocumentTypeChildNodeImpl = require("./NonDocumentTypeChildNode-impl").implementation;

const { TEXT_NODE } = require("../node-type");
const { MUTATION_TYPE, queueMutationRecord } = require("../helpers/mutation-observers");

// https://dom.spec.whatwg.org/#characterdata
class CharacterDataImpl extends NodeImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    this._data = privateData.data;
  }

  // https://dom.spec.whatwg.org/#dom-characterdata-data
  get data() {
    return this._data;
  }
  set data(data) {
    this.replaceData(0, this.length, data);
  }

  // https://dom.spec.whatwg.org/#dom-characterdata-length
  get length() {
    return this._data.length;
  }

  // https://dom.spec.whatwg.org/#dom-characterdata-substringdata
  // https://dom.spec.whatwg.org/#concept-cd-substring
  substringData(offset, count) {
    const { length } = this;

    if (offset > length) {
      throw DOMException.create(this._globalObject, ["The index is not in the allowed range.", "IndexSizeError"]);
    }

    if (offset + count > length) {
      return this._data.slice(offset);
    }

    return this._data.slice(offset, offset + count);
  }

  // https://dom.spec.whatwg.org/#dom-characterdata-appenddata
  appendData(data) {
    this.replaceData(this.length, 0, data);
  }

  // https://dom.spec.whatwg.org/#dom-characterdata-insertdata
  insertData(offset, data) {
    this.replaceData(offset, 0, data);
  }

  // https://dom.spec.whatwg.org/#dom-characterdata-deletedata
  deleteData(offset, count) {
    this.replaceData(offset, count, "");
  }

  // https://dom.spec.whatwg.org/#dom-characterdata-replacedata
  // https://dom.spec.whatwg.org/#concept-cd-replace
  replaceData(offset, count, data) {
    const { length } = this;

    if (offset > length) {
      throw DOMException.create(this._globalObject, [
        "The index is not in the allowed range.",
        "IndexSizeError"
      ]);
    }

    if (offset + count > length) {
      count = length - offset;
    }

    queueMutationRecord(MUTATION_TYPE.CHARACTER_DATA, this, null, null, this._data, [], [], null, null);

    const start = this._data.slice(0, offset);
    const end = this._data.slice(offset + count);
    this._data = start + data + end;

    for (const range of this._referencedRanges) {
      const { _start, _end } = range;

      if (_start.node === this && _start.offset > offset && _start.offset <= offset + count) {
        range._setLiveRangeStart(this, offset);
      }

      if (_end.node === this && _end.offset > offset && _end.offset <= offset + count) {
        range._setLiveRangeEnd(this, offset);
      }

      if (_start.node === this && _start.offset > offset + count) {
        range._setLiveRangeStart(this, _start.offset + data.length - count);
      }

      if (_end.node === this && _end.offset > offset + count) {
        range._setLiveRangeEnd(this, _end.offset + data.length - count);
      }
    }

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
