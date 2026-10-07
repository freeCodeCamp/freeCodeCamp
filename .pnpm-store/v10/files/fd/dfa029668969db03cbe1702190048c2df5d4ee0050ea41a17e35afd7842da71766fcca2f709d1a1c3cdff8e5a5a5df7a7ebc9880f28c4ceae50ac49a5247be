"use strict";
const DOMTokenList = require("../generated/DOMTokenList");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const idlUtils = require("../generated/utils");
const { fetchStylesheet } = require("../helpers/stylesheets");
const { parseURLToResultingURLRecord } = require("../helpers/document-base-url");
const whatwgURL = require("whatwg-url");

// Important reading: "appropriate times to obtain the resource" in
// https://html.spec.whatwg.org/multipage/semantics.html#link-type-stylesheet

class HTMLLinkElementImpl extends HTMLElementImpl {
  constructor(globalObject, args, privateData) {
    super(globalObject, args, privateData);

    this.sheet = null;
  }

  get relList() {
    if (this._relList === undefined) {
      this._relList = DOMTokenList.createImpl(this._globalObject, [], {
        element: this,
        attributeLocalName: "rel",
        supportedTokens: new Set(["stylesheet"])
      });
    }
    return this._relList;
  }

  _attach() {
    super._attach();
    maybeFetchAndProcess(this);
  }

  _attrModified(name, value, oldValue) {
    super._attrModified(name, value, oldValue);

    if (name === "href") { // TODO crossorigin="" or type=""
      maybeFetchAndProcess(this);
    }

    if (name === "rel" && this._relList !== undefined) {
      this._relList.attrModified();
    }
  }

  get _accept() {
    return "text/css,*/*;q=0.1";
  }
}

module.exports = {
  implementation: HTMLLinkElementImpl
};

// https://html.spec.whatwg.org/multipage/links.html#link-type-stylesheet
function maybeFetchAndProcess(el) {
  if (!isExternalResourceLink(el)) {
    return;
  }

  // Browsing-context connected
  if (!el.isConnected || !el._ownerDocument._defaultView) {
    return;
  }

  fetchAndProcess(el);
}

// https://html.spec.whatwg.org/multipage/semantics.html#default-fetch-and-process-the-linked-resource
// TODO: refactor into general link-fetching like the spec.
function fetchAndProcess(el) {
  const href = el.getAttributeNS(null, "href");

  if (href === null || href === "") {
    return;
  }

  const url = parseURLToResultingURLRecord(href, el._ownerDocument);
  if (url === null) {
    return;
  }

  // TODO handle crossorigin="", nonce, integrity="", referrerpolicy=""

  const serialized = whatwgURL.serializeURL(url);

  fetchStylesheet(el, serialized);
}

function isExternalResourceLink(el) {
  // for our purposes, only stylesheets can be external resource links
  const wrapper = idlUtils.wrapperForImpl(el);
  if (!/(?:[ \t\n\r\f]|^)stylesheet(?:[ \t\n\r\f]|$)/i.test(wrapper.rel)) {
    // rel is a space-separated list of tokens, and the original rel types
    // are case-insensitive.
    return false;
  }

  return el.hasAttributeNS(null, "href");
}
