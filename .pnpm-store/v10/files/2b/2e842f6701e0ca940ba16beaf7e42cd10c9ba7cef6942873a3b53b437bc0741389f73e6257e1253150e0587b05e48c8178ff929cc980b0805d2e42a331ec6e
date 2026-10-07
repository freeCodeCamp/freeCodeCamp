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

const util_js_1 = require("../util.cjs");

const order = ['end', 'description', 'postType', 'type', 'postName', 'name', 'postTag', 'tag', 'postDelimiter', 'delimiter', 'start'];

function crlf(ending) {
  function update(line) {
    return Object.assign(Object.assign({}, line), {
      tokens: Object.assign(Object.assign({}, line.tokens), {
        lineEnd: ending === 'LF' ? '' : '\r'
      })
    });
  }

  return _a => {
    var {
      source
    } = _a,
        fields = __rest(_a, ["source"]);

    return (0, util_js_1.rewireSource)(Object.assign(Object.assign({}, fields), {
      source: source.map(update)
    }));
  };
}

exports.default = crlf;
//# sourceMappingURL=crlf.cjs.map
