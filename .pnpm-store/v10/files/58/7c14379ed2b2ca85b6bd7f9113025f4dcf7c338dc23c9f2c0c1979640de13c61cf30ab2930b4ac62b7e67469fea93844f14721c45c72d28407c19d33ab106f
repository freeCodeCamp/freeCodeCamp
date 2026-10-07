"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defineCommonJSHook = defineCommonJSHook;
exports.makeInvokers = makeInvokers;
const commonJSHooksKey = "@babel/plugin-transform-modules-commonjs/customWrapperPlugin";
function defineCommonJSHook(file, hook) {
  let hooks = file.get(commonJSHooksKey);
  if (!hooks) file.set(commonJSHooksKey, hooks = []);
  hooks.push(hook);
}
function findMap(arr, cb) {
  if (arr) {
    for (const el of arr) {
      const res = cb(el);
      if (res != null) return res;
    }
  }
}
function makeInvokers(file) {
  const hooks = file.get(commonJSHooksKey);
  return {
    getWrapperPayload(...args) {
      return findMap(hooks, hook => hook.getWrapperPayload == null ? void 0 : hook.getWrapperPayload(...args));
    },
    wrapReference(...args) {
      return findMap(hooks, hook => hook.wrapReference == null ? void 0 : hook.wrapReference(...args));
    },
    buildRequireWrapper(...args) {
      return findMap(hooks, hook => hook.buildRequireWrapper == null ? void 0 : hook.buildRequireWrapper(...args));
    }
  };
}

//# sourceMappingURL=hooks.js.map
