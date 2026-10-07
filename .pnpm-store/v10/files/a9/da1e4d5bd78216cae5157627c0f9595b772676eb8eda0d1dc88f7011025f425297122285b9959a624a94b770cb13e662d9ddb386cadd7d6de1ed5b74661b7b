"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const primitives_js_1 = require("../primitives.cjs");

const util_js_1 = require("../util.cjs");

function getParser({
  startLine = 0,
  markers = primitives_js_1.Markers
} = {}) {
  let block = null;
  let num = startLine;
  return function parseSource(source) {
    let rest = source;
    const tokens = (0, util_js_1.seedTokens)();
    [tokens.lineEnd, rest] = (0, util_js_1.splitCR)(rest);
    [tokens.start, rest] = (0, util_js_1.splitSpace)(rest);

    if (block === null && rest.startsWith(markers.start) && !rest.startsWith(markers.nostart)) {
      block = [];
      tokens.delimiter = rest.slice(0, markers.start.length);
      rest = rest.slice(markers.start.length);
      [tokens.postDelimiter, rest] = (0, util_js_1.splitSpace)(rest);
    }

    if (block === null) {
      num++;
      return null;
    }

    const isClosed = rest.trimRight().endsWith(markers.end);

    if (tokens.delimiter === '' && rest.startsWith(markers.delim) && !rest.startsWith(markers.end)) {
      tokens.delimiter = markers.delim;
      rest = rest.slice(markers.delim.length);
      [tokens.postDelimiter, rest] = (0, util_js_1.splitSpace)(rest);
    }

    if (isClosed) {
      const trimmed = rest.trimRight();
      tokens.end = rest.slice(trimmed.length - markers.end.length);
      rest = trimmed.slice(0, -markers.end.length);
    }

    tokens.description = rest;
    block.push({
      number: num,
      source,
      tokens
    });
    num++;

    if (isClosed) {
      const result = block.slice();
      block = null;
      return result;
    }

    return null;
  };
}

exports.default = getParser;
//# sourceMappingURL=source-parser.cjs.map
