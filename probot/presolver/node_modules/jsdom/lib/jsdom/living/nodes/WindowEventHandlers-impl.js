"use strict";

const { createEventAccessor } = require("../helpers/create-event-accessor");

const events = new Set([
  // WindowEventHandlers
  "afterprint",
  "beforeprint",
  "beforeunload",
  "hashchange",
  "languagechange",
  "message",
  "messageerror",
  "offline",
  "online",
  "pagehide",
  "pageshow",
  "popstate",
  "rejectionhandled",
  "storage",
  "unhandledrejection",
  "unload",

  // inherited and overridden
  "blur",
  "error",
  "focus",
  "load",
  "resize",
  "scroll"
]);

// This class builds on GlobalEventHandlers, which must be mixed in first.
class WindowEventHandlersImpl {
  _proxyWindowEventsToWindow() {
    // We're a <body> or <frameset>, so we need to proxy these specific events to the Window (if it exists)
    this._getEventHandlerTarget = event => {
      if (events.has(event)) {
        return this.ownerDocument.defaultView || null;
      }
      return this;
    };
  }
}

for (const event of events) {
  createEventAccessor(WindowEventHandlersImpl.prototype, event);
}

module.exports = {
  implementation: WindowEventHandlersImpl
};
