"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;

class HTMLMetaElementImpl extends HTMLElementImpl { }

module.exports = {
  implementation: HTMLMetaElementImpl
};
