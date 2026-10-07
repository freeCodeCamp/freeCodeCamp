"use strict";
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { formOwner } = require("../helpers/form-controls");
const { HTML_NS } = require("../helpers/namespaces");

class HTMLLegendElementImpl extends HTMLElementImpl {
  get form() {
    const parent = this.parentNode;
    if (parent && parent._localName === "fieldset" && parent.namespaceURI === HTML_NS) {
      return formOwner(parent);
    }
    return null;
  }
}

module.exports = {
  implementation: HTMLLegendElementImpl
};
