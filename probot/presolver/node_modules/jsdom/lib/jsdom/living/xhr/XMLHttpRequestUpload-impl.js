"use strict";
const XMLHttpRequestEventTargetImpl = require("./XMLHttpRequestEventTarget-impl").implementation;

exports.implementation = class XMLHttpRequestUploadImpl extends XMLHttpRequestEventTargetImpl {};
