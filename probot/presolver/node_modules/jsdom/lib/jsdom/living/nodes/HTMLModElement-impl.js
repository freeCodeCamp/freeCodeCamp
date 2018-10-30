"use strict";

const conversions = require("webidl-conversions");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;

class HTMLModElementImpl extends HTMLElementImpl {
  get cite() {
    return conversions.USVString(this.getAttribute("cite"));
  }

  set cite(value) {
    this.setAttribute("cite", value);
  }
}

module.exports = {
  implementation: HTMLModElementImpl
};
