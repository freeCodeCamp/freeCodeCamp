"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;

class HTMLOListElementImpl extends HTMLElementImpl {
  get start() {
    const value = parseInt(this.getAttributeNS(null, "start"));

    if (!isNaN(value)) {
      return value;
    }

    return 1;
  }
  set start(value) {
    this.setAttributeNS(null, "start", value);
  }
}

module.exports = {
  implementation: HTMLOListElementImpl
};
