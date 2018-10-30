"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;

class HTMLDivElementImpl extends HTMLElementImpl { }

module.exports = {
  implementation: HTMLDivElementImpl
};
