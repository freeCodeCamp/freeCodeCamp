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

export { isDebuggerEnabled };
//# sourceMappingURL=debug.js.map
