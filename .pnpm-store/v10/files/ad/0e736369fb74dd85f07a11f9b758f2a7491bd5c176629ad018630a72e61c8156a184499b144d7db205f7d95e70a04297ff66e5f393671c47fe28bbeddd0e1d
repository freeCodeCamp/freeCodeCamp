"use strict";
const whatwgURL = require("whatwg-url");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;

class HTMLBaseElementImpl extends HTMLElementImpl {
  get href() {
    const document = this._ownerDocument;

    const url = this.hasAttributeNS(null, "href") ? this.getAttributeNS(null, "href") : "";
    const parsed = whatwgURL.parseURL(url, { baseURL: document._fallbackBaseURL() });

    if (parsed === null) {
      return url;
    }

    return whatwgURL.serializeURL(parsed);
  }

  set href(value) {
    this.setAttributeNS(null, "href", value);
  }

  _attrModified(name, value, oldValue) {
    super._attrModified(name, value, oldValue);

    if (name === "href") {
      this._ownerDocument._clearBaseURLCache();
    }
  }

  _attach() {
    super._attach();
    this._ownerDocument._clearBaseURLCache();
  }

  _detach() {
    super._detach();
    this._ownerDocument._clearBaseURLCache();
  }
}

module.exports = {
  implementation: HTMLBaseElementImpl
};
