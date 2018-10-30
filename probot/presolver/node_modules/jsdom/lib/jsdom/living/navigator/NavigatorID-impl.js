"use strict";

exports.implementation = class NavigatorIDImpl {
  get appCodeName() {
    return "Mozilla";
  }

  get appName() {
    return "Netscape";
  }

  get appVersion() {
    return "4.0";
  }

  get platform() {
    return "";
  }

  get product() {
    return "Gecko";
  }

  get productSub() {
    return "20030107";
  }

  // see Navigator constructor for userAgent

  get vendor() {
    return "Apple Computer, Inc.";
  }

  get vendorSub() {
    return "";
  }
};
