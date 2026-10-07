Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const exports$1 = require('../exports.js');
const debugLogger = require('./debug-logger.js');
const vercelWaitUntil = require('./vercelWaitUntil.js');
const worldwide = require('./worldwide.js');

async function flushWithTimeout(timeout) {
  try {
    debugLogger.debug.log("Flushing events...");
    await exports$1.flush(timeout);
    debugLogger.debug.log("Done flushing events");
  } catch (e) {
    debugLogger.debug.log("Error while flushing events:\n", e);
  }
}
async function flushIfServerless(params = {}) {
  const { timeout = 2e3 } = params;
  if ("cloudflareWaitUntil" in params && typeof params?.cloudflareWaitUntil === "function") {
    params.cloudflareWaitUntil(flushWithTimeout(timeout));
    return;
  }
  if ("cloudflareCtx" in params && typeof params.cloudflareCtx?.waitUntil === "function") {
    params.cloudflareCtx.waitUntil(flushWithTimeout(timeout));
    return;
  }
  if (worldwide.GLOBAL_OBJ[/* @__PURE__ */ Symbol.for("@vercel/request-context")]) {
    vercelWaitUntil.vercelWaitUntil(flushWithTimeout(timeout));
    return;
  }
  if (typeof process === "undefined") {
    return;
  }
  const isServerless = !!process.env.FUNCTIONS_WORKER_RUNTIME || // Azure Functions
  !!process.env.LAMBDA_TASK_ROOT || // AWS Lambda
  !!process.env.K_SERVICE || // Google Cloud Run
  !!process.env.CF_PAGES || // Cloudflare Pages
  !!process.env.VERCEL || !!process.env.NETLIFY;
  if (isServerless) {
    await flushWithTimeout(timeout);
  }
}

exports.flushIfServerless = flushIfServerless;
//# sourceMappingURL=flushIfServerless.js.map
