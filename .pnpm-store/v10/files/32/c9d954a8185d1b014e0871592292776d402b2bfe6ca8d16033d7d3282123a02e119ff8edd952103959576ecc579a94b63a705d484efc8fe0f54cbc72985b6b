"use strict";
const whatwgURL = require("whatwg-url");
const { parseURLToResultingURLRecord } = require("../helpers/document-base-url");
const { asciiCaseInsensitiveMatch } = require("../helpers/strings");
const { navigate } = require("../window/navigation");

exports.implementation = class HTMLHyperlinkElementUtilsImpl {
  _htmlHyperlinkElementUtilsSetup() {
    this.url = null;
  }

  // https://html.spec.whatwg.org/multipage/links.html#cannot-navigate
  _cannotNavigate() {
    // TODO: Correctly check if the document is fully active
    return this._localName !== "a" && !this.isConnected;
  }

  // https://html.spec.whatwg.org/multipage/semantics.html#get-an-element's-target
  _getAnElementsTarget() {
    if (this.hasAttributeNS(null, "target")) {
      return this.getAttributeNS(null, "target");
    }

    const baseEl = this._ownerDocument.querySelector("base[target]");

    if (baseEl) {
      return baseEl.getAttributeNS(null, "target");
    }

    return "";
  }

  // https://html.spec.whatwg.org/multipage/browsers.html#the-rules-for-choosing-a-browsing-context-given-a-browsing-context-name
  _chooseABrowsingContext(name, current) {
    let chosen = null;

    if (name === "" || asciiCaseInsensitiveMatch(name, "_self")) {
      chosen = current;
    } else if (asciiCaseInsensitiveMatch(name, "_parent")) {
      chosen = current.parent;
    } else if (asciiCaseInsensitiveMatch(name, "_top")) {
      chosen = current.top;
    } else if (!asciiCaseInsensitiveMatch(name, "_blank")) {
      // https://github.com/whatwg/html/issues/1440
    }

    // TODO: Create new browsing context, handle noopener

    return chosen;
  }

  // https://html.spec.whatwg.org/multipage/links.html#following-hyperlinks-2
  _followAHyperlink() {
    if (this._cannotNavigate()) {
      return;
    }

    const source = this._ownerDocument._defaultView;
    let targetAttributeValue = "";

    if (this._localName === "a" || this._localName === "area") {
      targetAttributeValue = this._getAnElementsTarget();
    }

    const noopener = this.relList.contains("noreferrer") || this.relList.contains("noopener");

    const target = this._chooseABrowsingContext(targetAttributeValue, source, noopener);

    if (target === null) {
      return;
    }

    const url = parseURLToResultingURLRecord(this.href, this._ownerDocument);

    if (url === null) {
      return;
    }

    // TODO: Handle hyperlink suffix and referrerpolicy
    setTimeout(() => {
      navigate(target, url, {});
    }, 0);
  }

  toString() {
    return this.href;
  }

  get href() {
    reinitializeURL(this);
    const { url } = this;

    if (url === null) {
      const href = this.getAttributeNS(null, "href");
      return href === null ? "" : href;
    }

    return whatwgURL.serializeURL(url);
  }

  set href(v) {
    this.setAttributeNS(null, "href", v);
  }

  get origin() {
    reinitializeURL(this);

    if (this.url === null) {
      return "";
    }

    return whatwgURL.serializeURLOrigin(this.url);
  }

  get protocol() {
    reinitializeURL(this);

    if (this.url === null) {
      return ":";
    }

    return this.url.scheme + ":";
  }

  set protocol(v) {
    reinitializeURL(this);

    if (this.url === null) {
      return;
    }

    whatwgURL.basicURLParse(v + ":", { url: this.url, stateOverride: "scheme start" });
    updateHref(this);
  }

  get username() {
    reinitializeURL(this);

    if (this.url === null) {
      return "";
    }

    return this.url.username;
  }

  set username(v) {
    reinitializeURL(this);
    const { url } = this;

    if (url === null || url.host === null || url.host === "" || url.cannotBeABaseURL || url.scheme === "file") {
      return;
    }

    whatwgURL.setTheUsername(url, v);
    updateHref(this);
  }

  get password() {
    reinitializeURL(this);
    const { url } = this;

    if (url === null) {
      return "";
    }

    return url.password;
  }

  set password(v) {
    reinitializeURL(this);
    const { url } = this;

    if (url === null || url.host === null || url.host === "" || url.cannotBeABaseURL || url.scheme === "file") {
      return;
    }

    whatwgURL.setThePassword(url, v);
    updateHref(this);
  }

  get host() {
    reinitializeURL(this);
    const { url } = this;

    if (url === null || url.host === null) {
      return "";
    }

    if (url.port === null) {
      return whatwgURL.serializeHost(url.host);
    }

    return whatwgURL.serializeHost(url.host) + ":" + whatwgURL.serializeInteger(url.port);
  }

  set host(v) {
    reinitializeURL(this);
    const { url } = this;

    if (url === null || url.cannotBeABaseURL) {
      return;
    }

    whatwgURL.basicURLParse(v, { url, stateOverride: "host" });
    updateHref(this);
  }

  get hostname() {
    reinitializeURL(this);
    const { url } = this;

    if (url === null || url.host === null) {
      return "";
    }

    return whatwgURL.serializeHost(url.host);
  }

  set hostname(v) {
    reinitializeURL(this);
    const { url } = this;

    if (url === null || url.cannotBeABaseURL) {
      return;
    }

    whatwgURL.basicURLParse(v, { url, stateOverride: "hostname" });
    updateHref(this);
  }

  get port() {
    reinitializeURL(this);
    const { url } = this;

    if (url === null || url.port === null) {
      return "";
    }

    return whatwgURL.serializeInteger(url.port);
  }

  set port(v) {
    reinitializeURL(this);
    const { url } = this;

    if (url === null || url.host === null || url.host === "" || url.cannotBeABaseURL || url.scheme === "file") {
      return;
    }

    if (v === "") {
      url.port = null;
    } else {
      whatwgURL.basicURLParse(v, { url, stateOverride: "port" });
    }
    updateHref(this);
  }

  get pathname() {
    reinitializeURL(this);
    const { url } = this;

    if (url === null) {
      return "";
    }

    if (url.cannotBeABaseURL) {
      return url.path[0];
    }

    return "/" + url.path.join("/");
  }

  set pathname(v) {
    reinitializeURL(this);
    const { url } = this;

    if (url === null || url.cannotBeABaseURL) {
      return;
    }

    url.path = [];
    whatwgURL.basicURLParse(v, { url, stateOverride: "path start" });
    updateHref(this);
  }

  get search() {
    reinitializeURL(this);
    const { url } = this;

    if (url === null || url.query === null || url.query === "") {
      return "";
    }

    return "?" + url.query;
  }

  set search(v) {
    reinitializeURL(this);
    const { url } = this;

    if (url === null) {
      return;
    }

    if (v === "") {
      url.query = null;
    } else {
      const input = v[0] === "?" ? v.substring(1) : v;
      url.query = "";
      whatwgURL.basicURLParse(input, {
        url,
        stateOverride: "query",
        encodingOverride: this._ownerDocument.charset
      });
    }
    updateHref(this);
  }

  get hash() {
    reinitializeURL(this);
    const { url } = this;

    if (url === null || url.fragment === null || url.fragment === "") {
      return "";
    }

    return "#" + url.fragment;
  }

  set hash(v) {
    reinitializeURL(this);
    const { url } = this;

    if (url === null) {
      return;
    }

    if (v === "") {
      url.fragment = null;
    } else {
      const input = v[0] === "#" ? v.substring(1) : v;
      url.fragment = "";
      whatwgURL.basicURLParse(input, { url, stateOverride: "fragment" });
    }
    updateHref(this);
  }
};

function reinitializeURL(hheu) {
  if (hheu.url !== null && hheu.url.scheme === "blob" && hheu.url.cannotBeABaseURL) {
    return;
  }

  setTheURL(hheu);
}

function setTheURL(hheu) {
  const href = hheu.getAttributeNS(null, "href");
  if (href === null) {
    hheu.url = null;
    return;
  }

  const parsed = parseURLToResultingURLRecord(href, hheu._ownerDocument);

  hheu.url = parsed === null ? null : parsed;
}

function updateHref(hheu) {
  hheu.setAttributeNS(null, "href", whatwgURL.serializeURL(hheu.url));
}
