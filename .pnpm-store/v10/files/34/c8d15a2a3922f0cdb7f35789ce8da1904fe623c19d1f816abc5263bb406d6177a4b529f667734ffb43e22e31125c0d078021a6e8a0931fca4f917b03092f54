Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugBuild = require('../debug-build.js');
const integration = require('../integration.js');
const beforeSendSpan = require('../tracing/spans/beforeSendSpan.js');
const captureSpan = require('../tracing/spans/captureSpan.js');
const hasSpanStreamingEnabled = require('../tracing/spans/hasSpanStreamingEnabled.js');
const spanBuffer = require('../tracing/spans/spanBuffer.js');
const debugLogger = require('../utils/debug-logger.js');
const spanUtils = require('../utils/spanUtils.js');

const spanStreamingIntegration = integration.defineIntegration(() => {
  return {
    name: "SpanStreaming",
    setup(client) {
      const initialMessage = "SpanStreaming integration requires";
      const fallbackMsg = "Falling back to static trace lifecycle.";
      const clientOptions = client.getOptions();
      if (!hasSpanStreamingEnabled.hasSpanStreamingEnabled(client)) {
        clientOptions.traceLifecycle = "static";
        debugBuild.DEBUG_BUILD && debugLogger.debug.warn(`${initialMessage} \`traceLifecycle\` to be set to "stream"! ${fallbackMsg}`);
        return;
      }
      const beforeSendSpan$1 = clientOptions.beforeSendSpan;
      if (beforeSendSpan$1 && !beforeSendSpan.isStreamedBeforeSendSpanCallback(beforeSendSpan$1)) {
        clientOptions.traceLifecycle = "static";
        debugBuild.DEBUG_BUILD && debugLogger.debug.warn(`${initialMessage} a beforeSendSpan callback using \`withStreamedSpan\`! ${fallbackMsg}`);
        return;
      }
      const buffer = new spanBuffer.SpanBuffer(client);
      client.on("afterSpanEnd", (span) => {
        if (!spanUtils.spanIsSampled(span)) {
          return;
        }
        buffer.add(captureSpan.captureSpan(span, client));
      });
    }
  };
});

exports.spanStreamingIntegration = spanStreamingIntegration;
//# sourceMappingURL=spanStreaming.js.map
