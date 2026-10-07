"use strict";

const HTMLCollection = require("../generated/HTMLCollection");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;

const { descendantsByLocalName } = require("../helpers/traversal");

class HTMLDataListElementImpl extends HTMLElementImpl {
  // https://html.spec.whatwg.org/multipage/form-elements.html#dom-datalist-options
  get options() {
    return HTMLCollection.createImpl(this._globalObject, [], {
      element: this,
      query: () => descendantsByLocalName(this, "option")
    });
  }
}

module.exports = {
  implementation: HTMLDataListElementImpl
};
