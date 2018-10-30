"use strict";
const whatwgURL = require("whatwg-url");
const DOMException = require("domexception");
const { documentBaseURL, parseURLToResultingURLRecord } = require("../helpers/document-base-url");
const { navigate } = require("./navigation");

// Not implemented: use of entry settings object's API base URL in href setter, assign, and replace. Instead we just
// use the document base URL. The difference matters in the case of cross-frame calls.

exports.implementation = class LocationImpl {
  constructor(args, privateData) {
    this._relevantDocument = privateData.relevantDocument;
    this.url = null;
  }

  get _url() {
    return this._relevantDocument._URL;
  }

  _locationObjectSetterNavigate(url) {
    // Not implemented: extra steps here to determine replacement flag.

    return this._locationObjectNavigate(url);
  }

  _locationObjectNavigate(url, { replacement = false } = {}) {
    // Not implemented: the setup for calling navigate, which doesn't apply to our stub navigate anyway.

    navigate(this._relevantDocument._defaultView, url, { replacement, exceptionsEnabled: true });
  }

  toString() {
    return this.href;
  }

  get href() {
    return whatwgURL.serializeURL(this._url);
  }
  set href(v) {
    const newURL = whatwgURL.parseURL(v, { baseURL: documentBaseURL(this._relevantDocument) });
    if (newURL === null) {
      throw new TypeError(`Could not parse "${v}" as a URL`);
    }

    this._locationObjectSetterNavigate(newURL);
  }

  get origin() {
    return whatwgURL.serializeURLOrigin(this._url);
  }

  get protocol() {
    return this._url.scheme + ":";
  }
  set protocol(v) {
    const copyURL = Object.assign({}, this._url);

    const possibleFailure = whatwgURL.basicURLParse(v + ":", { url: copyURL, stateOverride: "scheme start" });
    if (possibleFailure === null) {
      throw new TypeError(`Could not parse the URL after setting the procol to "${v}"`);
    }

    if (copyURL.scheme !== "http" && copyURL.scheme !== "https") {
      return;
    }

    this._locationObjectSetterNavigate(copyURL);
  }

  get host() {
    const url = this._url;

    if (url.host === null) {
      return "";
    }
    if (url.port === null) {
      return whatwgURL.serializeHost(url.host);
    }

    return whatwgURL.serializeHost(url.host) + ":" + whatwgURL.serializeInteger(url.port);
  }
  set host(v) {
    const copyURL = Object.assign({}, this._url);

    if (copyURL.cannotBeABaseURL) {
      return;
    }

    whatwgURL.basicURLParse(v, { url: copyURL, stateOverride: "host" });

    this._locationObjectSetterNavigate(copyURL);
  }

  get hostname() {
    if (this._url.host === null) {
      return "";
    }

    return whatwgURL.serializeHost(this._url.host);
  }
  set hostname(v) {
    const copyURL = Object.assign({}, this._url);

    if (copyURL.cannotBeABaseURL) {
      return;
    }

    whatwgURL.basicURLParse(v, { url: copyURL, stateOverride: "hostname" });

    this._locationObjectSetterNavigate(copyURL);
  }

  get port() {
    if (this._url.port === null) {
      return "";
    }

    return whatwgURL.serializeInteger(this._url.port);
  }
  set port(v) {
    const copyURL = Object.assign({}, this._url);

    if (copyURL.host === null || copyURL.cannotBeABaseURL || copyURL.scheme === "file") {
      return;
    }

    whatwgURL.basicURLParse(v, { url: copyURL, stateOverride: "port" });

    this._locationObjectSetterNavigate(copyURL);
  }

  get pathname() {
    const url = this._url;

    if (url.cannotBeABaseURL) {
      return url.path[0];
    }

    return "/" + url.path.join("/");
  }
  set pathname(v) {
    const copyURL = Object.assign({}, this._url);

    if (copyURL.cannotBeABaseURL) {
      return;
    }

    copyURL.path = [];
    whatwgURL.basicURLParse(v, { url: copyURL, stateOverride: "path start" });

    this._locationObjectSetterNavigate(copyURL);
  }

  get search() {
    if (this._url.query === null || this._url.query === "") {
      return "";
    }

    return "?" + this._url.query;
  }
  set search(v) {
    const copyURL = Object.assign({}, this._url);

    if (v === "") {
      copyURL.query = null;
    } else {
      const input = v[0] === "?" ? v.substring(1) : v;
      copyURL.query = "";
      whatwgURL.basicURLParse(input, {
        url: copyURL,
        stateOverride: "query",
        encodingOverride: this._relevantDocument.charset
      });
    }

    this._locationObjectSetterNavigate(copyURL);
  }

  get hash() {
    if (this._url.fragment === null || this._url.fragment === "") {
      return "";
    }

    return "#" + this._url.fragment;
  }
  set hash(v) {
    const copyURL = Object.assign({}, this._url);

    if (copyURL.scheme === "javascript") {
      return;
    }

    if (v === "") {
      copyURL.fragment = null;
    } else {
      const input = v[0] === "#" ? v.substring(1) : v;
      copyURL.fragment = "";
      whatwgURL.basicURLParse(input, { url: copyURL, stateOverride: "fragment" });
    }

    this._locationObjectSetterNavigate(copyURL);
  }

  assign(url) {
    // Should be entry settings object; oh well
    const parsedURL = parseURLToResultingURLRecord(url, this._relevantDocument);

    if (parsedURL === null) {
      throw new DOMException(`Could not resolve the given string "${url}" relative to the ` +
        `base URL "${this._relevantDocument.URL}"`, "SyntaxError");
    }

    this._locationObjectNavigate(parsedURL);
  }

  replace(url) {
    // Should be entry settings object; oh well
    const parsedURL = parseURLToResultingURLRecord(url, this._relevantDocument);

    if (parsedURL === null) {
      throw new DOMException(`Could not resolve the given string "${url}" relative to the ` +
        `base URL "${this._relevantDocument.URL}"`, "SyntaxError");
    }

    this._locationObjectNavigate(parsedURL, { replacement: true });
  }

  reload() {
    const flags = { replace: true, reloadTriggered: true, exceptionsEnabled: true };
    navigate(this._relevantDocument._defaultView, this._url, flags);
  }
};
