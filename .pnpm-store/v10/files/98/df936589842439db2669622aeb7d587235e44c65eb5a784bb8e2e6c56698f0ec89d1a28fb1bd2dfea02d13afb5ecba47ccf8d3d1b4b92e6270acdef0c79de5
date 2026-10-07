Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const worldwide = require('./worldwide.js');

function vercelWaitUntil(task) {
  if (typeof EdgeRuntime !== "string") {
    return;
  }
  const vercelRequestContextGlobal = (
    // @ts-expect-error This is not typed
    worldwide.GLOBAL_OBJ[/* @__PURE__ */ Symbol.for("@vercel/request-context")]
  );
  const ctx = vercelRequestContextGlobal?.get?.();
  if (ctx?.waitUntil) {
    ctx.waitUntil(task);
  }
}

exports.vercelWaitUntil = vercelWaitUntil;
//# sourceMappingURL=vercelWaitUntil.js.map
