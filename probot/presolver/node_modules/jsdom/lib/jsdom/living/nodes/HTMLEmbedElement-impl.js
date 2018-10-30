"use strict";
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { reflectURLAttribute } = require("../../utils");

class HTMLEmbedElementImpl extends HTMLElementImpl {
  get src() {
    return reflectURLAttribute(this, "src");
  }

  set src(value) {
    this.setAttribute("src", value);
  }
}

module.exports = {
  implementation: HTMLEmbedElementImpl
};
