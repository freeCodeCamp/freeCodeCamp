import { GLOBAL_OBJ } from './worldwide.js';

let RESOLVED_RUNNER;
function withRandomSafeContext(cb) {
  if (RESOLVED_RUNNER !== void 0) {
    return RESOLVED_RUNNER ? RESOLVED_RUNNER(cb) : cb();
  }
  const sym = /* @__PURE__ */ Symbol.for("__SENTRY_SAFE_RANDOM_ID_WRAPPER__");
  const globalWithSymbol = GLOBAL_OBJ;
  if (sym in globalWithSymbol && typeof globalWithSymbol[sym] === "function") {
    RESOLVED_RUNNER = globalWithSymbol[sym];
    return RESOLVED_RUNNER(cb);
  }
  RESOLVED_RUNNER = null;
  return cb();
}
function safeMathRandom() {
  return withRandomSafeContext(() => Math.random());
}
function safeDateNow() {
  return withRandomSafeContext(() => Date.now());
}

export { safeDateNow, safeMathRandom, withRandomSafeContext };
//# sourceMappingURL=randomSafeContext.js.map
