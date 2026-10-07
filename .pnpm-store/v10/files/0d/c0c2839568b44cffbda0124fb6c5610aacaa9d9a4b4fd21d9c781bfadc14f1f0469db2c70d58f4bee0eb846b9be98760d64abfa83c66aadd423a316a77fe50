"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compareArrayBuffers = compareArrayBuffers;

// this are dev dependencies
var diff = require("jest-diff");

var _require = require("jest-diff/build/constants"),
    NO_DIFF_MESSAGE = _require.NO_DIFF_MESSAGE;

var _require2 = require("@webassemblyjs/wasm-parser"),
    decode = _require2.decode;

var oldConsoleLog = console.log;

function compareArrayBuffers(l, r) {
  /**
   * Decode left
   */
  var bufferL = "";

  console.log = function () {
    for (var _len = arguments.length, texts = new Array(_len), _key = 0; _key < _len; _key++) {
      texts[_key] = arguments[_key];
    }

    return bufferL += texts.join("") + "\n";
  };

  try {
    decode(l, {
      dump: true
    });
  } catch (e) {
    console.error(bufferL);
    console.error(e);
    throw e;
  }
  /**
   * Decode right
   */


  var bufferR = "";

  console.log = function () {
    for (var _len2 = arguments.length, texts = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      texts[_key2] = arguments[_key2];
    }

    return bufferR += texts.join("") + "\n";
  };

  try {
    decode(r, {
      dump: true
    });
  } catch (e) {
    console.error(bufferR);
    console.error(e);
    throw e;
  }

  console.log = oldConsoleLog;
  var out = diff(bufferL, bufferR);

  if (out !== null && out !== NO_DIFF_MESSAGE) {
    throw new Error("\n" + out);
  }
}