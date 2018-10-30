"use strict";

const EventImpl = require("./Event-impl").implementation;

const CustomEventInit = require("../generated/CustomEventInit");

class CustomEventImpl extends EventImpl {
  initCustomEvent(type, bubbles, cancelable, detail) {
    if (this._dispatchFlag) {
      return;
    }

    this.initEvent(type, bubbles, cancelable);
    this.detail = detail;
  }
}
CustomEventImpl.defaultInit = CustomEventInit.convert(undefined);

module.exports = {
  implementation: CustomEventImpl
};
