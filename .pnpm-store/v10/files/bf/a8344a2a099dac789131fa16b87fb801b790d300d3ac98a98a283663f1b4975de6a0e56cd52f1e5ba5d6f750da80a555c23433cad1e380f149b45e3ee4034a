"use strict";

var replace = String.prototype.replace, re = /-([a-z0-9])/g;
var toUpperCase = function (ignored, a) { return a.toUpperCase(); };

module.exports = function () { return replace.call(this, re, toUpperCase); };
