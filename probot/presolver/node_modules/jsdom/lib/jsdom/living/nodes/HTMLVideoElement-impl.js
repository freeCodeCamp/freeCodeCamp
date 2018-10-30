"use strict";

const HTMLMediaElementImpl = require("./HTMLMediaElement-impl").implementation;
const { reflectURLAttribute } = require("../../utils");

class HTMLVideoElementImpl extends HTMLMediaElementImpl {
  get poster() {
    return reflectURLAttribute(this, "poster");
  }

  set poster(value) {
    this.setAttribute("poster", value);
  }

  get videoWidth() {
    return 0;
  }

  get videoHeight() {
    return 0;
  }
}

module.exports = {
  implementation: HTMLVideoElementImpl
};
