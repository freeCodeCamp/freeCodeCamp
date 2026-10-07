"use strict";

const EventImpl = require("./Event-impl").implementation;

const StorageEventInit = require("../generated/StorageEventInit");

// https://html.spec.whatwg.org/multipage/webstorage.html#the-storageevent-interface
class StorageEventImpl extends EventImpl {
  initStorageEvent(type, bubbles, cancelable, key, oldValue, newValue, url, storageArea) {
    if (this._dispatchFlag) {
      return;
    }

    this.initEvent(type, bubbles, cancelable);
    this.key = key;
    this.oldValue = oldValue;
    this.newValue = newValue;
    this.url = url;
    this.storageArea = storageArea;
  }
}
StorageEventImpl.defaultInit = StorageEventInit.convert(undefined);

module.exports = {
  implementation: StorageEventImpl
};
