"use strict";

const EventInit = require("../generated/EventInit");

class EventImpl {
  constructor(args, privateData) {
    const [type, eventInitDict = this.constructor.defaultInit] = args;

    this.type = type;

    this.bubbles = false;
    this.cancelable = false;
    for (const key in eventInitDict) {
      if (key in this.constructor.defaultInit) {
        this[key] = eventInitDict[key];
      }
    }
    for (const key in this.constructor.defaultInit) {
      if (!(key in this)) {
        this[key] = this.constructor.defaultInit[key];
      }
    }

    this.target = null;
    this.currentTarget = null;
    this.eventPhase = 0;

    this._initializedFlag = true;
    this._stopPropagationFlag = false;
    this._stopImmediatePropagationFlag = false;
    this._canceledFlag = false;
    this._dispatchFlag = false;

    this.isTrusted = privateData.isTrusted || false;
    this.timeStamp = Date.now();
  }

  get srcElement() {
    return this.target;
  }

  get returnValue() {
    return !this._canceledFlag;
  }

  set returnValue(v) {
    if (this.cancelable && v === false) {
      this._canceledFlag = true;
    }
  }

  get defaultPrevented() {
    return this._canceledFlag;
  }

  stopPropagation() {
    this._stopPropagationFlag = true;
  }

  get cancelBubble() {
    return this._stopPropagationFlag;
  }

  set cancelBubble(v) {
    if (v) {
      this._stopPropagationFlag = true;
    }
  }

  stopImmediatePropagation() {
    this._stopPropagationFlag = true;
    this._stopImmediatePropagationFlag = true;
  }

  preventDefault() {
    if (this.cancelable) {
      this._canceledFlag = true;
    }
  }

  _initialize(type, bubbles, cancelable) {
    this.type = type;
    this._initializedFlag = true;

    this._stopPropagationFlag = false;
    this._stopImmediatePropagationFlag = false;
    this._canceledFlag = false;

    this.isTrusted = false;
    this.target = null;
    this.bubbles = bubbles;
    this.cancelable = cancelable;
  }

  initEvent(type, bubbles, cancelable) {
    if (this._dispatchFlag) {
      return;
    }

    this._initialize(type, bubbles, cancelable);
  }
}
EventImpl.defaultInit = EventInit.convert(undefined);

module.exports = {
  implementation: EventImpl
};
