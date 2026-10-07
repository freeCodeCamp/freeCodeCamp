"use strict";

const { mixin } = require("../../utils");
const EventModifierMixinImpl = require("./EventModifierMixin-impl").implementation;
const UIEventImpl = require("./UIEvent-impl").implementation;

const MouseEventInit = require("../generated/MouseEventInit");

class MouseEventImpl extends UIEventImpl {
  get x() {
    return this.clientX;
  }
  get y() {
    return this.clientY;
  }
  get pageX() {
    // TODO: consider dispatch flag and return page-relative event coordinate once layout is supported
    return this.clientX; // TODO: add horizontal scroll offset once jsdom implements scrolling support
  }
  get pageY() {
    // TODO: consider dispatch flag and return page-relative event coordinate once layout is supported
    return this.clientY; // TODO: add vertical scroll offset once jsdom implements scrolling support
  }
  get offsetX() {
    // TODO: consider dispatch flag and return target-relative event coordinate once layout is supported
    return this.pageX;
  }
  get offsetY() {
    // TODO: consider dispatch flag and return target-relative event coordinate once layout is supported
    return this.pageY;
  }

  initMouseEvent(
    type,
    bubbles,
    cancelable,
    view,
    detail,
    screenX,
    screenY,
    clientX,
    clientY,
    ctrlKey,
    altKey,
    shiftKey,
    metaKey,
    button,
    relatedTarget
  ) {
    if (this._dispatchFlag) {
      return;
    }

    this.initUIEvent(type, bubbles, cancelable, view, detail);
    this.screenX = screenX;
    this.screenY = screenY;
    this.clientX = clientX;
    this.clientY = clientY;
    this.ctrlKey = ctrlKey;
    this.altKey = altKey;
    this.shiftKey = shiftKey;
    this.metaKey = metaKey;
    this.button = button;
    this.relatedTarget = relatedTarget;
  }
}
mixin(MouseEventImpl.prototype, EventModifierMixinImpl.prototype);
MouseEventImpl.defaultInit = MouseEventInit.convert(undefined, undefined);

module.exports = {
  implementation: MouseEventImpl
};
