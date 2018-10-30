"use strict";

const DOMException = require("domexception");
const StorageEvent = require("../generated/StorageEvent");
const idlUtils = require("../generated/utils");

// https://html.spec.whatwg.org/multipage/webstorage.html#the-storage-interface
class StorageImpl {
  constructor(args, { associatedWindow, storageArea, url, type, storageQuota }) {
    this._associatedWindow = associatedWindow;
    this._items = storageArea;
    this._url = url;
    this._type = type;
    this._quota = storageQuota;
  }

  _dispatchStorageEvent(key, oldValue, newValue) {
    return this._associatedWindow._currentOriginData.windowsInSameOrigin
      .filter(target => target !== this._associatedWindow)
      .forEach(target => target.dispatchEvent(StorageEvent.create([
        "storage",
        {
          bubbles: false,
          cancelable: false,
          key,
          oldValue,
          newValue,
          url: this._url,
          storageArea: target["_" + this._type]
        }
      ])));
  }

  get length() {
    return this._items.size;
  }

  key(n) {
    if (n >= this._items.size) {
      return null;
    }
    return [...this._items.keys()][n];
  }

  getItem(key) {
    if (this._items.has(key)) {
      return this._items.get(key);
    }
    return null;
  }

  setItem(key, value) {
    const oldValue = this._items.get(key) || null;

    if (oldValue === value) {
      return;
    }

    // Concatenate all keys and values to measure their length against the quota
    let itemsTotalLength = key.length + value.length;
    for (const [curKey, curValue] of this._items) {
      // If the key already exists, skip it as it will be set to the new value instead
      if (key !== curKey) {
        itemsTotalLength += curKey.length + curValue.length;
      }
    }
    if (itemsTotalLength > this._quota) {
      throw new DOMException(`The ${this._quota}-code unit storage quota has been exceeded.`, "QuotaExceededError");
    }

    setTimeout(this._dispatchStorageEvent.bind(this), 0, key, oldValue, value);

    this._items.set(key, value);
  }

  removeItem(key) {
    if (this._items.has(key)) {
      setTimeout(this._dispatchStorageEvent.bind(this), 0, key, this._items.get(key), null);

      this._items.delete(key);
    }
  }

  clear() {
    if (this._items.size > 0) {
      setTimeout(this._dispatchStorageEvent.bind(this), 0, null, null, null);

      this._items.clear();
    }
  }

  get [idlUtils.supportedPropertyNames]() {
    return this._items.keys();
  }
}

module.exports = {
  implementation: StorageImpl
};
