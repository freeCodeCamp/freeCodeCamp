import { DEBUG_BUILD } from '../debug-build.js';
import { defineIntegration } from '../integration.js';
import { isStreamedBeforeSendSpanCallback } from '../tracing/spans/beforeSendSpan.js';
import { captureSpan } from '../tracing/spans/captureSpan.js';
import { hasSpanStreamingEnabled } from '../tracing/spans/hasSpanStreamingEnabled.js';
import { SpanBuffer } from '../tracing/spans/spanBuffer.js';
import { debug } from '../utils/debug-logger.js';
import { spanIsSampled } from '../utils/spanUtils.js';

const spanStreamingIntegration = defineIntegration(() => {
  return {
    name: "SpanStreaming",
    setup(client) {
      const initialMessage = "SpanStreaming integration requires";
      const fallbackMsg = "Falling back to static trace lifecycle.";
      const clientOptions = client.getOptions();
      if (!hasSpanStreamingEnabled(client)) {
        clientOptions.traceLifecycle = "static";
        DEBUG_BUILD && debug.warn(`${initialMessage} \`traceLifecycle\` to be set to "stream"! ${fallbackMsg}`);
        return;
      }
      const beforeSendSpan = clientOptions.beforeSendSpan;
      if (beforeSendSpan && !isStreamedBeforeSendSpanCallback(beforeSendSpan)) {
        clientOptions.traceLifecycle = "static";
        DEBUG_BUILD && debug.warn(`${initialMessage} a beforeSendSpan callback using \`withStreamedSpan\`! ${fallbackMsg}`);
        return;
      }
      const buffer = new SpanBuffer(client);
      client.on("afterSpanEnd", (span) => {
        if (!spanIsSampled(span)) {
          return;
        }
        buffer.add(captureSpan(span, client));
      });
    }
  };
});

export { spanStreamingIntegration };
//# sourceMappingURL=spanStreaming.js.map
