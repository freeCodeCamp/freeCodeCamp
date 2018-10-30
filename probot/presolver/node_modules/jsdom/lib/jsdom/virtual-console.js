"use strict";
const { EventEmitter } = require("events");

module.exports = class VirtualConsole extends EventEmitter {
  constructor() {
    super();

    this.on("error", () => {
      // If "error" event has no listeners,
      // EventEmitter throws an exception
    });
  }

  sendTo(anyConsole, options) {
    if (options === undefined) {
      options = {};
    }

    for (const method of Object.keys(anyConsole)) {
      if (typeof anyConsole[method] === "function") {
        function onMethodCall() {
          anyConsole[method](...arguments);
        }
        this.on(method, onMethodCall);
      }
    }

    if (!options.omitJSDOMErrors) {
      this.on("jsdomError", e => anyConsole.error(e.stack, e.detail));
    }

    return this;
  }
};
