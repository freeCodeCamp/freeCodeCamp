"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { childTextContent } = require("../helpers/text");

class HTMLTitleElementImpl extends HTMLElementImpl {
  get text() {
    return childTextContent(this);
  }

  set text(value) {
    this.textContent = value;
  }
}

module.exports = {
  implementation: HTMLTitleElementImpl
};
