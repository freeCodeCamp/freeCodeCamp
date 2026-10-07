"use strict";
const SlotableMixinImpl = require("./Slotable-impl").implementation;
const CharacterDataImpl = require("./CharacterData-impl").implementation;
const idlUtils = require("../generated/utils");
const { domSymbolTree } = require("../helpers/internal-constants");
const DOMException = require("domexception/webidl2js-wrapper");
const NODE_TYPE = require("../node-type");
const { mixin } = require("../../utils");

// https://dom.spec.whatwg.org/#text
class TextImpl extends CharacterDataImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, {
      data: args[0],
      ownerDocument: idlUtils.implForWrapper(globalObject._document),
      ...privateData
    });

    this._initSlotableMixin();

    this.nodeType = NODE_TYPE.TEXT_NODE;
  }

  // https://dom.spec.whatwg.org/#dom-text-splittext
  // https://dom.spec.whatwg.org/#concept-text-split
  splitText(offset) {
    const { length } = this;

    if (offset > length) {
      throw DOMException.create(this._globalObject, ["The index is not in the allowed range.", "IndexSizeError"]);
    }

    const count = length - offset;
    const newData = this.substringData(offset, count);

    const newNode = this._ownerDocument.createTextNode(newData);

    const parent = domSymbolTree.parent(this);

    if (parent !== null) {
      parent._insert(newNode, this.nextSibling);

      for (const range of this._referencedRanges) {
        const { _start, _end } = range;

        if (_start.node === this && _start.offset > offset) {
          range._setLiveRangeStart(newNode, _start.offset - offset);
        }

        if (_end.node === this && _end.offset > offset) {
          range._setLiveRangeEnd(newNode, _end.offset - offset);
        }
      }

      const nodeIndex = domSymbolTree.index(this);
      for (const range of parent._referencedRanges) {
        const { _start, _end } = range;

        if (_start.node === parent && _start.offset === nodeIndex + 1) {
          range._setLiveRangeStart(parent, _start.offset + 1);
        }

        if (_end.node === parent && _end.offset === nodeIndex + 1) {
          range._setLiveRangeEnd(parent, _end.offset + 1);
        }
      }
    }

    this.replaceData(offset, count, "");

    return newNode;
  }

  // https://dom.spec.whatwg.org/#dom-text-wholetext
  get wholeText() {
    let wholeText = this.textContent;
    let next;
    let current = this;
    while ((next = domSymbolTree.previousSibling(current)) && next.nodeType === NODE_TYPE.TEXT_NODE) {
      wholeText = next.textContent + wholeText;
      current = next;
    }
    current = this;
    while ((next = domSymbolTree.nextSibling(current)) && next.nodeType === NODE_TYPE.TEXT_NODE) {
      wholeText += next.textContent;
      current = next;
    }
    return wholeText;
  }
}

mixin(TextImpl.prototype, SlotableMixinImpl.prototype);

module.exports = {
  implementation: TextImpl
};
