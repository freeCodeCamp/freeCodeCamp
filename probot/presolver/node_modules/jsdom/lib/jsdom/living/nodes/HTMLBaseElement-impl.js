"use strict";
const whatwgURL = require("whatwg-url");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const { fallbackBaseURL } = require("../helpers/document-base-url");

class HTMLBaseElementImpl extends HTMLElementImpl {
  get href() {
    const document = this._ownerDocument;

    const url = this.hasAttribute("href") ? this.getAttribute("href") : "";
    const parsed = whatwgURL.parseURL(url, { baseURL: fallbackBaseURL(document) });

    if (parsed === null) {
      return url;
    }

    return whatwgURL.serializeURL(parsed);
  }

  set href(value) {
    this.setAttribute("href", value);
  }
}

module.exports = {
  implementation: HTMLBaseElementImpl
};
