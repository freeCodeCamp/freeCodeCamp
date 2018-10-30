"use strict";
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { closest } = require("../helpers/traversal");

class HTMLLegendElementImpl extends HTMLElementImpl {
  get form() {
    return closest(this, "form");
  }
}

module.exports = {
  implementation: HTMLLegendElementImpl
};
