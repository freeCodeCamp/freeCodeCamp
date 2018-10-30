"use strict";

module.exports = require("./DOMException").interface;

Object.setPrototypeOf(module.exports.prototype, Error.prototype);
