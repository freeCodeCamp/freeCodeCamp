"use strict";
const whatwgURL = require("whatwg-url");
const { parseURLToResultingURLRecord } = require("../helpers/document-base-url");

exports.implementation = class HTMLHyperlinkElementUtilsImpl {
  _htmlHyperlinkElementUtilsSetup() {
    this.url = null;
  }

  toString() {
    return this.href;
  }

  get href() {
    reinitializeURL(this);
    const { url } = this;

    if (url === null) {
      const href = this.getAttribute("href");
      return href === null ? "" : href;
    }

    return whatwgURL.serializeURL(url);
  }

  set href(v) {
    this.setAttribute("href", v);
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
  const href = hheu.getAttribute("href");
  if (href === null) {
    hheu.url = null;
    return;
  }

  const parsed = parseURLToResultingURLRecord(href, hheu._ownerDocument);

  hheu.url = parsed === null ? null : parsed;
}

function updateHref(hheu) {
  hheu.setAttribute("href", whatwgURL.serializeURL(hheu.url));
}
