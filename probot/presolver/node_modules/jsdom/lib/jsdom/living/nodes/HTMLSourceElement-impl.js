"use strict";
const conversions = require("webidl-conversions");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { reflectURLAttribute } = require("../../utils");

class HTMLSourceElementImpl extends HTMLElementImpl {
  get src() {
    return reflectURLAttribute(this, "src");
  }

  set src(value) {
    this.setAttribute("src", value);
  }

  get srcset() {
    return conversions.USVString(this.getAttribute("srcset"));
  }

  set srcset(value) {
    this.setAttribute("srcset", value);
  }
}

module.exports = {
  implementation: HTMLSourceElementImpl
};
