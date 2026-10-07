"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unnested = exports.patch = exports.nested = exports.mapName = exports.empty = exports.andThen = void 0;
var RA = _interopRequireWildcard(require("../../Array.js"));
var Either = _interopRequireWildcard(require("../../Either.js"));
var _Function = require("../../Function.js");
var List = _interopRequireWildcard(require("../../List.js"));
var Option = _interopRequireWildcard(require("../../Option.js"));
var configError = _interopRequireWildcard(require("../configError.js"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function (e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, default: e }; if (null === e || "object" != typeof e && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (const t in e) "default" !== t && {}.hasOwnProperty.call(e, t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, t)) && (i.get || i.set) ? o(f, t, i) : f[t] = e[t]); return f; })(e, t); }
/** @internal */
const empty = exports.empty = {
  _tag: "Empty"
};
/** @internal */
const andThen = exports.andThen = /*#__PURE__*/(0, _Function.dual)(2, (self, that) => ({
  _tag: "AndThen",
  first: self,
  second: that
}));
/** @internal */
const mapName = exports.mapName = /*#__PURE__*/(0, _Function.dual)(2, (self, f) => andThen(self, {
  _tag: "MapName",
  f
}));
/** @internal */
const nested = exports.nested = /*#__PURE__*/(0, _Function.dual)(2, (self, name) => andThen(self, {
  _tag: "Nested",
  name
}));
/** @internal */
const unnested = exports.unnested = /*#__PURE__*/(0, _Function.dual)(2, (self, name) => andThen(self, {
  _tag: "Unnested",
  name
}));
/** @internal */
const patch = exports.patch = /*#__PURE__*/(0, _Function.dual)(2, (path, patch) => {
  let input = List.of(patch);
  let output = path;
  while (List.isCons(input)) {
    const patch = input.head;
    switch (patch._tag) {
      case "Empty":
        {
          input = input.tail;
          break;
        }
      case "AndThen":
        {
          input = List.cons(patch.first, List.cons(patch.second, input.tail));
          break;
        }
      case "MapName":
        {
          output = RA.map(output, patch.f);
          input = input.tail;
          break;
        }
      case "Nested":
        {
          output = RA.prepend(output, patch.name);
          input = input.tail;
          break;
        }
      case "Unnested":
        {
          const containsName = (0, _Function.pipe)(RA.head(output), Option.contains(patch.name));
          if (containsName) {
            output = RA.tailNonEmpty(output);
            input = input.tail;
          } else {
            return Either.left(configError.MissingData(output, `Expected ${patch.name} to be in path in ConfigProvider#unnested`));
          }
          break;
        }
    }
  }
  return Either.right(output);
});
//# sourceMappingURL=pathPatch.js.map