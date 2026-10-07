"use strict";

// https://dom.spec.whatwg.org/#abstractrange
class AbstractRangeImpl {
  constructor(globalObject, args, privateData) {
    const { start, end } = privateData;

    this._start = start;
    this._end = end;

    this._globalObject = globalObject;
  }

  // https://dom.spec.whatwg.org/#dom-range-startcontainer
  get startContainer() {
    return this._start.node;
  }

  // https://dom.spec.whatwg.org/#dom-range-startoffset
  get startOffset() {
    return this._start.offset;
  }

  // https://dom.spec.whatwg.org/#dom-range-endcontainer
  get endContainer() {
    return this._end.node;
  }

  // https://dom.spec.whatwg.org/#dom-range-endoffset
  get endOffset() {
    return this._end.offset;
  }

  // https://dom.spec.whatwg.org/#dom-range-collapsed
  get collapsed() {
    const { _start, _end } = this;
    return _start.node === _end.node && _start.offset === _end.offset;
  }
}

module.exports = {
  implementation: AbstractRangeImpl
};
