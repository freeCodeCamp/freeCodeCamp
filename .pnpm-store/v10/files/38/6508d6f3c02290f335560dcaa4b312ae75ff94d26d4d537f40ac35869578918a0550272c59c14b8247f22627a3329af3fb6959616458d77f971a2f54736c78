import { DEBUG_BUILD } from '../debug-build.js';
import { debug } from '../utils/debug-logger.js';
import { spanToJSON, getRootSpan, spanIsSampled } from '../utils/spanUtils.js';

function logSpanStart(span) {
  if (!DEBUG_BUILD) return;
  const { description = "< unknown name >", op = "< unknown op >", parent_span_id: parentSpanId } = spanToJSON(span);
  const { spanId } = span.spanContext();
  const sampled = spanIsSampled(span);
  const rootSpan = getRootSpan(span);
  const isRootSpan = rootSpan === span;
  const header = `[Tracing] Starting ${sampled ? "sampled" : "unsampled"} ${isRootSpan ? "root " : ""}span`;
  const infoParts = [`op: ${op}`, `name: ${description}`, `ID: ${spanId}`];
  if (parentSpanId) {
    infoParts.push(`parent ID: ${parentSpanId}`);
  }
  if (!isRootSpan) {
    const { op: op2, description: description2 } = spanToJSON(rootSpan);
    infoParts.push(`root ID: ${rootSpan.spanContext().spanId}`);
    if (op2) {
      infoParts.push(`root op: ${op2}`);
    }
    if (description2) {
      infoParts.push(`root description: ${description2}`);
    }
  }
  debug.log(`${header}
  ${infoParts.join("\n  ")}`);
}
function logSpanEnd(span) {
  if (!DEBUG_BUILD) return;
  const { description = "< unknown name >", op = "< unknown op >" } = spanToJSON(span);
  const { spanId } = span.spanContext();
  const rootSpan = getRootSpan(span);
  const isRootSpan = rootSpan === span;
  const msg = `[Tracing] Finishing "${op}" ${isRootSpan ? "root " : ""}span "${description}" with ID ${spanId}`;
  debug.log(msg);
}

export { logSpanEnd, logSpanStart };
//# sourceMappingURL=logSpans.js.map
