"use strict";
const { reflectURLAttribute } = require("../../utils");
const HTMLElementImpl = require("./HTMLElement-impl").implementation;
const idlUtils = require("../generated/utils");
const { fetchStylesheet } = require("../helpers/stylesheets");
const { parseURLToResultingURLRecord } = require("../helpers/document-base-url");
const whatwgURL = require("whatwg-url");

// Important reading: "appropriate times to obtain the resource" in
// https://html.spec.whatwg.org/multipage/semantics.html#link-type-stylesheet

class HTMLLinkElementImpl extends HTMLElementImpl {
  constructor(args, privateData) {
    super(args, privateData);

    this.sheet = null;
  }

  _attach() {
    super._attach();

    if (isExternalResourceLink(this)) {
      obtainTheResource(this);
    }
  }

  _attrModified(name, value, oldValue) {
    super._attrModified(name, value, oldValue);

    if (name === "href" && this._attached && isExternalResourceLink(this)) {
      obtainTheResource(this);
    }
  }

  get _accept() {
    return "text/css,*/*;q=0.1";
  }

  get href() {
    return reflectURLAttribute(this, "href");
  }

  set href(value) {
    this.setAttribute("href", value);
  }
}

module.exports = {
  implementation: HTMLLinkElementImpl
};

function obtainTheResource(el) {
  const href = el.getAttribute("href");

  if (href === null || href === "") {
    return;
  }

  const url = parseURLToResultingURLRecord(href, el._ownerDocument);
  if (url === null) {
    return;
  }

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

  return Boolean(el.href);
}
