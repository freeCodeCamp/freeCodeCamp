import { GLOBAL_OBJ } from './worldwide.js';

function vercelWaitUntil(task) {
  if (typeof EdgeRuntime !== "string") {
    return;
  }
  const vercelRequestContextGlobal = (
    // @ts-expect-error This is not typed
    GLOBAL_OBJ[/* @__PURE__ */ Symbol.for("@vercel/request-context")]
  );
  const ctx = vercelRequestContextGlobal?.get?.();
  if (ctx?.waitUntil) {
    ctx.waitUntil(task);
  }
}

export { vercelWaitUntil };
//# sourceMappingURL=vercelWaitUntil.js.map
