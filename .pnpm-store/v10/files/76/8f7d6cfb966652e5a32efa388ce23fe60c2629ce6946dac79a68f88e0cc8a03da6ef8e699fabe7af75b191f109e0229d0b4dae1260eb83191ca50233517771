import { getClient, withIsolationScope } from './currentScopes.js';
import { captureException } from './exports.js';
import { SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN, SEMANTIC_ATTRIBUTE_SENTRY_SOURCE } from './semanticAttributes.js';
import { normalize } from './utils/normalize.js';
import { startSpanManual } from './tracing/trace.js';
import { setNormalizationDepthOverrideHint } from './utils/normalizationHints.js';

const trpcCaptureContext = { mechanism: { handled: false, type: "auto.rpc.trpc.middleware" } };
function captureIfError(nextResult) {
  if (typeof nextResult === "object" && nextResult !== null && "ok" in nextResult && !nextResult.ok && "error" in nextResult) {
    captureException(nextResult.error, trpcCaptureContext);
  }
}
function trpcMiddleware(options = {}) {
  return async function(opts) {
    const { path, type, next, rawInput, getRawInput } = opts;
    const client = getClient();
    const clientOptions = client?.getOptions();
    const dataCollection = client?.getDataCollectionOptions();
    const trpcContext = {
      procedure_path: path,
      procedure_type: type
    };
    setNormalizationDepthOverrideHint(
      trpcContext,
      1 + // 1 for context.input + the normal normalization depth
      (clientOptions?.normalizeDepth ?? 5)
      // 5 is a sane depth
    );
    if (options.attachRpcInput !== void 0 ? options.attachRpcInput : dataCollection?.httpBodies.includes("incomingRequest")) {
      if (rawInput !== void 0) {
        trpcContext.input = normalize(rawInput);
      }
      if (getRawInput !== void 0 && typeof getRawInput === "function") {
        try {
          const rawRes = await getRawInput();
          trpcContext.input = normalize(rawRes);
        } catch {
        }
      }
    }
    return withIsolationScope((scope) => {
      scope.setContext("trpc", trpcContext);
      return startSpanManual(
        {
          name: `trpc/${path}`,
          op: "rpc.server",
          attributes: {
            [SEMANTIC_ATTRIBUTE_SENTRY_SOURCE]: "route",
            [SEMANTIC_ATTRIBUTE_SENTRY_ORIGIN]: "auto.rpc.trpc"
          },
          forceTransaction: !!options.forceTransaction
        },
        async (span) => {
          try {
            const nextResult = await next();
            captureIfError(nextResult);
            span.end();
            return nextResult;
          } catch (e) {
            captureException(e, trpcCaptureContext);
            span.end();
            throw e;
          }
        }
      );
    });
  };
}

export { trpcMiddleware };
//# sourceMappingURL=trpc.js.map
