"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { reflectURLAttribute } = require("../../utils");

class HTMLTrackElementImpl extends HTMLElementImpl {
  get readyState() {
    return 0;
  }

  get src() {
    return reflectURLAttribute(this, "src");
  }
  set src(value) {
    this.setAttribute("src", value);
  }
}

module.exports = {
  implementation: HTMLTrackElementImpl
};
