"use strict";

const EventImpl = require("./Event-impl").implementation;

const PageTransitionEventInit = require("../generated/PageTransitionEventInit");

// https://html.spec.whatwg.org/multipage/browsing-the-web.html#pagetransitionevent
class PageTransitionEventImpl extends EventImpl {
  initPageTransitionEvent(type, bubbles, cancelable, persisted) {
    if (this._dispatchFlag) {
      return;
    }

    this.initEvent(type, bubbles, cancelable);
    this.persisted = persisted;
  }
}
PageTransitionEventImpl.defaultInit = PageTransitionEventInit.convert(undefined);

exports.implementation = PageTransitionEventImpl;
