"use strict";

var __rest = this && this.__rest || function (s, e) {
  var t = {};

  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

const primitives_js_1 = require("../primitives.cjs");

const util_js_1 = require("../util.cjs");

const zeroWidth = {
  start: 0,
  tag: 0,
  type: 0,
  name: 0
};

const getWidth = (markers = primitives_js_1.Markers) => (w, {
  tokens: t
}) => ({
  start: t.delimiter === markers.start ? t.start.length : w.start,
  tag: Math.max(w.tag, t.tag.length),
  type: Math.max(w.type, t.type.length),
  name: Math.max(w.name, t.name.length)
});

const space = len => ''.padStart(len, ' ');

function align(markers = primitives_js_1.Markers) {
  let intoTags = false;
  let w;

  function update(line) {
    const tokens = Object.assign({}, line.tokens);
    if (tokens.tag !== '') intoTags = true;
    const isEmpty = tokens.tag === '' && tokens.name === '' && tokens.type === '' && tokens.description === ''; // dangling '*/'

    if (tokens.end === markers.end && isEmpty) {
      tokens.start = space(w.start + 1);
      return Object.assign(Object.assign({}, line), {
        tokens
      });
    }

    switch (tokens.delimiter) {
      case markers.start:
        tokens.start = space(w.start);
        break;

      case markers.delim:
        tokens.start = space(w.start + 1);
        break;

      default:
        tokens.delimiter = '';
        tokens.start = space(w.start + 2);
      // compensate delimiter
    }

    if (!intoTags) {
      tokens.postDelimiter = tokens.description === '' ? '' : ' ';
      return Object.assign(Object.assign({}, line), {
        tokens
      });
    }

    const nothingAfter = {
      delim: false,
      tag: false,
      type: false,
      name: false
    };

    if (tokens.description === '') {
      nothingAfter.name = true;
      tokens.postName = '';

      if (tokens.name === '') {
        nothingAfter.type = true;
        tokens.postType = '';

        if (tokens.type === '') {
          nothingAfter.tag = true;
          tokens.postTag = '';

          if (tokens.tag === '') {
            nothingAfter.delim = true;
          }
        }
      }
    }

    tokens.postDelimiter = nothingAfter.delim ? '' : ' ';
    if (!nothingAfter.tag) tokens.postTag = space(w.tag - tokens.tag.length + 1);
    if (!nothingAfter.type) tokens.postType = space(w.type - tokens.type.length + 1);
    if (!nothingAfter.name) tokens.postName = space(w.name - tokens.name.length + 1);
    return Object.assign(Object.assign({}, line), {
      tokens
    });
  }

  return _a => {
    var {
      source
    } = _a,
        fields = __rest(_a, ["source"]);

    w = source.reduce(getWidth(markers), Object.assign({}, zeroWidth));
    return (0, util_js_1.rewireSource)(Object.assign(Object.assign({}, fields), {
      source: source.map(update)
    }));
  };
}

exports.default = align;
//# sourceMappingURL=align.cjs.map
