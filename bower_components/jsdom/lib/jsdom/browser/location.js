"use strict";

var URL = require("url");
var NOT_IMPLEMENTED = require("./utils").NOT_IMPLEMENTED;

module.exports = Location;

function Location(urlString, window) {
  this._url = URL.parse(urlString);
  this._window = window;
}

Location.prototype = {
  constructor: Location,
  reload: function () {
    NOT_IMPLEMENTED(this._window, "location.reload")();
  },
  get protocol() { return this._url.protocol || ":"; },
  get host() { return this._url.host || ""; },
  get auth() { return this._url.auth; },
  get hostname() { return this._url.hostname || ""; },
  get origin() { return ((this._url.protocol !== undefined && this._url.protocol !== null) ? this._url.protocol + "//" : this._url.protocol) + this._url.host || ""; },
  get port() { return this._url.port || ""; },
  get pathname() { return this._url.pathname || ""; },
  get href() { return this._url.href; },
  get hash() { return this._url.hash || ""; },
  get search() { return this._url.search || ""; },

  set href(val) {
    var oldUrl = this._url.href;
    var oldProtocol = this._url.protocol;
    var oldHost = this._url.host;
    var oldPathname = this._url.pathname;
    var oldHash = this._url.hash || "";

    this._url = URL.parse(URL.resolve(oldUrl, val));
    var newUrl = this._url.href;
    var newProtocol = this._url.protocol;
    var newHost = this._url.host;
    var newPathname = this._url.pathname;
    var newHash = this._url.hash || "";

    if (oldProtocol === newProtocol && oldHost === newHost && oldPathname === newPathname && oldHash !== newHash) {
      this._signalHashChange(oldUrl, newUrl);
    } else {
      NOT_IMPLEMENTED(this._window, "location.href (no reload)")();
    }
  },

  set hash(val) {
    var oldUrl = this._url.href;
    var oldHash = this._url.hash || "";

    if (val.lastIndexOf("#", 0) !== 0) {
      val = "#" + val;
    }

    this._url = URL.parse(URL.resolve(oldUrl, val));
    var newUrl = this._url.href;
    var newHash = this._url.hash || "";

    if (oldHash !== newHash) {
      this._signalHashChange(oldUrl, newUrl);
    }
  },

  set search(val) {
    var oldUrl = this._url.href;
    var oldHash = this._url.hash || "";
    if (val.length) {
      if (val.lastIndexOf("?", 0) !== 0) {
        val = "?" + val;
      }
      this._url = URL.parse(URL.resolve(oldUrl, val + oldHash));
    } else {
      this._url = URL.parse(oldUrl.replace(/\?([^#]+)/, ""));
    }
  },

  replace: function (val) {
    this.href = val;
  },

  toString: function () {
    return this._url.href;
  },

  _signalHashChange: function (oldUrl, newUrl) {
    if (this._window.document) {
      var ev = this._window.document.createEvent("HTMLEvents");
      ev.initEvent("hashchange", false, false);
      ev.oldUrl = oldUrl;
      ev.newUrl = newUrl;
      process.nextTick(function () {
        this._window.dispatchEvent(ev);
      }.bind(this));
    }
  }
};
