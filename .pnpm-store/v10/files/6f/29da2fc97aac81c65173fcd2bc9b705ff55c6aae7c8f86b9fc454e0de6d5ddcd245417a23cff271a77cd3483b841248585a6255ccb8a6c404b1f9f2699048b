function replaceExports(exports, exportName, wrappedConstructor) {
  const original = exports[exportName];
  if (typeof original !== "function") {
    return;
  }
  try {
    exports[exportName] = wrappedConstructor;
  } catch {
    Object.defineProperty(exports, exportName, {
      value: wrappedConstructor,
      writable: true,
      configurable: true,
      enumerable: true
    });
  }
  if (exports.default === original) {
    try {
      exports.default = wrappedConstructor;
    } catch {
      Object.defineProperty(exports, "default", {
        value: wrappedConstructor,
        writable: true,
        configurable: true,
        enumerable: true
      });
    }
  }
}

export { replaceExports };
//# sourceMappingURL=exports.js.map
