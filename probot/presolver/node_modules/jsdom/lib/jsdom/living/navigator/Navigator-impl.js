"use strict";
const { mixin } = require("../../utils");
const NavigatorIDImpl = require("./NavigatorID-impl").implementation;
const NavigatorLanguageImpl = require("./NavigatorLanguage-impl").implementation;
const NavigatorOnLineImpl = require("./NavigatorOnLine-impl").implementation;
const NavigatorCookiesImpl = require("./NavigatorCookies-impl").implementation;
const NavigatorPluginsImpl = require("./NavigatorPlugins-impl").implementation;
const NavigatorConcurrentHardwareImpl = require("./NavigatorConcurrentHardware-impl").implementation;

class NavigatorImpl {
  constructor(args, privateData) {
    this.userAgent = privateData.userAgent;
    this.languages = Object.freeze(["en-US", "en"]);
  }
}

mixin(NavigatorImpl.prototype, NavigatorIDImpl.prototype);
mixin(NavigatorImpl.prototype, NavigatorLanguageImpl.prototype);
mixin(NavigatorImpl.prototype, NavigatorOnLineImpl.prototype);
mixin(NavigatorImpl.prototype, NavigatorCookiesImpl.prototype);
mixin(NavigatorImpl.prototype, NavigatorPluginsImpl.prototype);
mixin(NavigatorImpl.prototype, NavigatorConcurrentHardwareImpl.prototype);

exports.implementation = NavigatorImpl;
