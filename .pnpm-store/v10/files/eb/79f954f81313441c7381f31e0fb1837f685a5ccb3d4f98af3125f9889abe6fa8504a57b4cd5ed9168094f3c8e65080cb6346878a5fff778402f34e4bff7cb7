import { flush } from '../exports.js';
import { debug } from './debug-logger.js';
import { vercelWaitUntil } from './vercelWaitUntil.js';
import { GLOBAL_OBJ } from './worldwide.js';

async function flushWithTimeout(timeout) {
  try {
    debug.log("Flushing events...");
    await flush(timeout);
    debug.log("Done flushing events");
  } catch (e) {
    debug.log("Error while flushing events:\n", e);
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
  if (GLOBAL_OBJ[/* @__PURE__ */ Symbol.for("@vercel/request-context")]) {
    vercelWaitUntil(flushWithTimeout(timeout));
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

export { flushIfServerless };
//# sourceMappingURL=flushIfServerless.js.map
