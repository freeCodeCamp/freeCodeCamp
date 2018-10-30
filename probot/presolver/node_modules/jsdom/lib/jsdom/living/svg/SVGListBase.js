"use strict";

const DOMException = require("domexception");
const idlUtils = require("../generated/utils");
const { attach, detach } = require("../helpers/svg/basic-types");

// https://svgwg.org/svg2-draft/types.html#ListInterfaces

// Child classes must implement _reserialize()
class List {
  _initList({
    element,
    attribute,
    readOnly = false
  }) {
    this._element = element;
    this._attribute = attribute;
    this._attributeRegistryEntry = element.constructor.attributeRegistry.get(attribute);
    this._readOnly = readOnly;
    this._list = [];
    this._version = -1;
  }

  get _needsResync() {
    return this._version < this._element._version;
  }

  _synchronize() {
    if (!this._needsResync) {
      return;
    }
    let value = [];
    if (this._element.hasAttribute(this._attribute)) {
      value = this._attributeRegistryEntry.getValue(this._element.getAttribute(this._attribute));
    }
    if (value.length === 0 && this._attributeRegistryEntry.initialValue !== undefined) {
      value = this._attributeRegistryEntry.getValue(this._attributeRegistryEntry.initialValue);
    }
    // TODO: support non-DOMString lists.
    this._list = value;
    this._version = this._element._version;
  }

  _reserialize() {
    const elements = this._list;
    this._element.setAttribute(this._attribute, this._attributeRegistryEntry.serialize(elements));
    // Prevent ping-ponging back and forth between _reserialize() and _synchronize().
    this._version = this._element._version;
  }

  [idlUtils.supportsPropertyIndex](index) {
    this._synchronize();
    return index >= 0 && index < this.length;
  }

  get [idlUtils.supportedPropertyIndices]() {
    this._synchronize();
    return this._list.keys();
  }

  get length() {
    this._synchronize();
    return this._list.length;
  }

  get numberOfItems() {
    this._synchronize();
    return this._list.length;
  }

  clear() {
    this._synchronize();
    if (this._readOnly) {
      throw new DOMException("Attempting to modify a read-only list", "NoModificationAllowedError");
    }
    for (const item of this._list) {
      detach(item);
    }
    this._list.length = 0;
    this._reserialize();
  }

  initialize(newItem) {
    this._synchronize();
    if (this._readOnly) {
      throw new DOMException("Attempting to modify a read-only list", "NoModificationAllowedError");
    }
    for (const item of this._list) {
      detach(item);
    }
    this._list.length = 0;
    // TODO: clone non-DOMString list elements.
    attach(newItem, this);
    this._list.push(newItem);
    this._reserialize();
  }

  getItem(index) {
    this._synchronize();
    if (index >= this._list.length) {
      throw new DOMException(
        `The index provided (${index}) is greater than or equal to the maximum bound (${this._list.length}).`,
        "IndexSizeError"
      );
    }
    return this._list[index];
  }

  insertItemBefore(newItem, index) {
    this._synchronize();
    if (this._readOnly) {
      throw new DOMException("Attempting to modify a read-only list", "NoModificationAllowedError");
    }
    // TODO: clone non-DOMString list elements.
    if (index > this._list.length) {
      index = this._list.length;
    }
    this._list.splice(index, 0, newItem);
    attach(newItem, this);
    this._reserialize();
    return newItem;
  }

  replaceItem(newItem, index) {
    this._synchronize();
    if (this._readOnly) {
      throw new DOMException("Attempting to modify a read-only list", "NoModificationAllowedError");
    }
    if (index >= this._list.length) {
      throw new DOMException(
        `The index provided (${index}) is greater than or equal to the maximum bound (${this._list.length}).`,
        "IndexSizeError"
      );
    }
    // TODO: clone non-DOMString list elements.
    detach(this._list[index]);
    this._list[index] = newItem;
    attach(newItem, this);
    this._reserialize();
    return newItem;
  }

  removeItem(index) {
    this._synchronize();
    if (this._readOnly) {
      throw new DOMException("Attempting to modify a read-only list", "NoModificationAllowedError");
    }
    if (index >= this._list.length) {
      throw new DOMException(
        `The index provided (${index}) is greater than or equal to the maximum bound (${this._list.length}).`,
        "IndexSizeError"
      );
    }
    const item = this._list[index];
    detach(item);
    this._list.splice(index, 1);
    this._reserialize();
    return item;
  }

  appendItem(newItem) {
    this._synchronize();
    // TODO: clone non-DOMString list elements.
    this._list.push(newItem);
    attach(newItem, this);
    this._reserialize();
    return newItem;
  }

  [idlUtils.indexedSetNew](index, value) {
    // Note: this will always throw a IndexSizeError.
    this.replaceItem(value, index);
  }

  [idlUtils.indexedSetExisting](index, value) {
    this.replaceItem(value, index);
  }
}

module.exports = List;
