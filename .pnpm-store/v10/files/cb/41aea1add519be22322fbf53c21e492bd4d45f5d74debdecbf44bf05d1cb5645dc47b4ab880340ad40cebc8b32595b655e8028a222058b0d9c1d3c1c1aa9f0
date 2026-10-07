"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

const util_js_1 = require("../util.cjs");

const zeroWidth = {
  line: 0,
  start: 0,
  delimiter: 0,
  postDelimiter: 0,
  tag: 0,
  postTag: 0,
  name: 0,
  postName: 0,
  type: 0,
  postType: 0,
  description: 0,
  end: 0,
  lineEnd: 0
};
const headers = {
  lineEnd: 'CR'
};
const fields = Object.keys(zeroWidth);

const repr = x => (0, util_js_1.isSpace)(x) ? `{${x.length}}` : x;

const frame = line => '|' + line.join('|') + '|';

const align = (width, tokens) => Object.keys(tokens).map(k => repr(tokens[k]).padEnd(width[k]));

function inspect({
  source
}) {
  var _a, _b;

  if (source.length === 0) return '';
  const width = Object.assign({}, zeroWidth);

  for (const f of fields) width[f] = ((_a = headers[f]) !== null && _a !== void 0 ? _a : f).length;

  for (const {
    number,
    tokens
  } of source) {
    width.line = Math.max(width.line, number.toString().length);

    for (const k in tokens) width[k] = Math.max(width[k], repr(tokens[k]).length);
  }

  const lines = [[], []];

  for (const f of fields) lines[0].push(((_b = headers[f]) !== null && _b !== void 0 ? _b : f).padEnd(width[f]));

  for (const f of fields) lines[1].push('-'.padEnd(width[f], '-'));

  for (const {
    number,
    tokens
  } of source) {
    const line = number.toString().padStart(width.line);
    lines.push([line, ...align(width, tokens)]);
  }

  return lines.map(frame).join('\n');
}

exports.default = inspect;
//# sourceMappingURL=inspect.cjs.map
