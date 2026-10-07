"use strict";

var _synckit = require("synckit");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function (e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != typeof e && "function" != typeof e) return { default: e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && {}.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n.default = e, t && t.set(e, n), n; }
(0, _synckit.runAsWorker)(async imprt => {
  const {
    parseImports
  } = await Promise.resolve().then(() => _interopRequireWildcard(require('parse-imports')));
  try {
    // ESLint doesn't support async rules
    return [...(await parseImports(imprt))];
  } catch (err) {
    return false;
  }
});
//# sourceMappingURL=import-worker.cjs.map