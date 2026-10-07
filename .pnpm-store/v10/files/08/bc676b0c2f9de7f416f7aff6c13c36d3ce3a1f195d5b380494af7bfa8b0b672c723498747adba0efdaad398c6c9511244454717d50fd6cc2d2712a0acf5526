import { isBrowser } from '../../utils/isBrowser.js';
import { hasSpanStreamingEnabled } from './hasSpanStreamingEnabled.js';
import { spanJsonToSerializedStreamedSpan } from './spanJsonToStreamedSpan.js';

function extractGenAiSpansFromEvent(event, client) {
  if (event.type !== "transaction" || !event.spans?.length || !event.sdkProcessingMetadata?.hasGenAiSpans || !client.getOptions().streamGenAiSpans || hasSpanStreamingEnabled(client)) {
    return void 0;
  }
  const genAiSpans = [];
  const remainingSpans = [];
  for (const span of event.spans) {
    if (span.op?.startsWith("gen_ai.")) {
      genAiSpans.push(spanJsonToSerializedStreamedSpan(span));
    } else {
      remainingSpans.push(span);
    }
  }
  if (genAiSpans.length === 0) {
    return void 0;
  }
  event.spans = remainingSpans;
  const inferSetting = client.getOptions().sendDefaultPii ? "auto" : "never";
  return [
    { type: "span", item_count: genAiSpans.length, content_type: "application/vnd.sentry.items.span.v2+json" },
    {
      version: 2,
      ...isBrowser() && {
        ingest_settings: { infer_ip: inferSetting, infer_user_agent: inferSetting }
      },
      items: genAiSpans
    }
  ];
}

export { extractGenAiSpansFromEvent };
//# sourceMappingURL=extractGenAiSpans.js.map
