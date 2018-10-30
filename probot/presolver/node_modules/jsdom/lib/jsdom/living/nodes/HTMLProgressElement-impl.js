"use strict";

const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { getLabelsForLabelable } = require("../helpers/form-controls");

class HTMLProgressElementImpl extends HTMLElementImpl {
  constructor(args, privateData) {
    super(args, privateData);
    this._labels = null;
  }

  get labels() {
    return getLabelsForLabelable(this);
  }
}

module.exports = {
  implementation: HTMLProgressElementImpl
};
