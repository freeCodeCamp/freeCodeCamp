import { DEBUG_BUILD } from '../debug-build.js';
import { debug } from './debug-logger.js';
import { stringMatchesSomePattern } from './string.js';

const NOT_PROPAGATED_MESSAGE = "[Tracing] Not injecting trace data for url because it does not match tracePropagationTargets:";
function shouldPropagateTraceForUrl(url, tracePropagationTargets, decisionMap) {
  if (typeof url !== "string" || !tracePropagationTargets) {
    return true;
  }
  const cachedDecision = decisionMap?.get(url);
  if (cachedDecision !== void 0) {
    DEBUG_BUILD && !cachedDecision && debug.log(NOT_PROPAGATED_MESSAGE, url);
    return cachedDecision;
  }
  const decision = stringMatchesSomePattern(url, tracePropagationTargets);
  decisionMap?.set(url, decision);
  DEBUG_BUILD && !decision && debug.log(NOT_PROPAGATED_MESSAGE, url);
  return decision;
}

export { shouldPropagateTraceForUrl };
//# sourceMappingURL=tracePropagationTargets.js.map
