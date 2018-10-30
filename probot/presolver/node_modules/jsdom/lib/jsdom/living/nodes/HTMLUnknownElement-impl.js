"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;

class HTMLUnknownElementImpl extends HTMLElementImpl { }

module.exports = {
  implementation: HTMLUnknownElementImpl
};
