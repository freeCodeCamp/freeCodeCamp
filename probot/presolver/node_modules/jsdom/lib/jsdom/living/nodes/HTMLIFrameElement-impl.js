"use strict";

const HTMLFrameElementImpl = require("./HTMLFrameElement-impl").implementation;

class HTMLIFrameElementImpl extends HTMLFrameElementImpl { }

module.exports = {
  implementation: HTMLIFrameElementImpl
};
