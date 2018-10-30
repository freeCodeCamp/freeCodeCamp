"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;

class HTMLMapElementImpl extends HTMLElementImpl {
  get areas() {
    return this.getElementsByTagName("AREA");
  }
}

module.exports = {
  implementation: HTMLMapElementImpl
};
