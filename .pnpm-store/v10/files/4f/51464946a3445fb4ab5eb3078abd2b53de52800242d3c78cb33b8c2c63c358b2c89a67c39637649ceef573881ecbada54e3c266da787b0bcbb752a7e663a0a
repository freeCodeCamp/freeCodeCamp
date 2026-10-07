Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

let cachedDebuggerEnabled;
async function isDebuggerEnabled() {
  if (cachedDebuggerEnabled === void 0) {
    try {
      const inspector = await import('node:inspector');
      cachedDebuggerEnabled = !!inspector.url();
    } catch {
      cachedDebuggerEnabled = false;
    }
  }
  return cachedDebuggerEnabled;
}

exports.isDebuggerEnabled = isDebuggerEnabled;
//# sourceMappingURL=debug.js.map
