Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugBuild = require('../debug-build.js');
const debugLogger = require('./debug-logger.js');
const string = require('./string.js');

const NOT_PROPAGATED_MESSAGE = "[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:";
function shouldPropagateTraceForUrl(url, tracePropagationTargets, decisionMap) {
  if (typeof url !== "string" || !tracePropagationTargets) {
    return true;
  }
  const cachedDecision = decisionMap?.get(url);
  if (cachedDecision !== void 0) {
    debugBuild.DEBUG_BUILD && !cachedDecision && debugLogger.debug.log(NOT_PROPAGATED_MESSAGE, url);
    return cachedDecision;
  }
  const decision = string.stringMatchesSomePattern(url, tracePropagationTargets);
  decisionMap?.set(url, decision);
  debugBuild.DEBUG_BUILD && !decision && debugLogger.debug.log(NOT_PROPAGATED_MESSAGE, url);
  return decision;
}

exports.shouldPropagateTraceForUrl = shouldPropagateTraceForUrl;
//# sourceMappingURL=tracePropagationTargets.js.map
