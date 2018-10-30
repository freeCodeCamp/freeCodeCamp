"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;

class HTMLTitleElementImpl extends HTMLElementImpl {
  get text() {
    // TODO this is quite incorrect
    return this.innerHTML;
  }

  set text(s) {
    this.textContent = s;
  }
}

module.exports = {
  implementation: HTMLTitleElementImpl
};
