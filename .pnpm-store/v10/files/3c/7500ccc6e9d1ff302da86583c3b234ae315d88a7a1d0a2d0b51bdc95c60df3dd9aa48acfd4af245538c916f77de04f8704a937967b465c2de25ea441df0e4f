"use strict";

exports.__esModule = true;
exports.register = register;
function register() {
  // no-op
  //
  // We are actually failing the build when `ts-node` exists in webpack's dependency graph
  // because it's known to not work and cause failures.
  //
  // This shim for `ts-node` just skips trying to bundle the actual `ts-node`
  // so webpack has less work to do during bundling.
  //
  // Using or not this shim, functionally doesn't make a difference - we will still
  // fail the build with same actionable error anyway.
}
//# sourceMappingURL=ts-node.js.map