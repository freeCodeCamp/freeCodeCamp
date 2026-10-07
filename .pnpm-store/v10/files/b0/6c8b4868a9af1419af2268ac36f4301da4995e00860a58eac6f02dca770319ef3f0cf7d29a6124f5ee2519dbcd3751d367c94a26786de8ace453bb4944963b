import { debug } from './debug-logger.js';
import { baggageHeaderToDynamicSamplingContext } from './baggage.js';
import { extractOrgIdFromClient } from './dsn.js';
import { parseSampleRate } from './parseSampleRate.js';
import { generateTraceId, generateSpanId } from './propagationContext.js';
import { safeMathRandom } from './randomSafeContext.js';

const TRACEPARENT_REGEXP = new RegExp(
  "^[ \\t]*([0-9a-f]{32})?-?([0-9a-f]{16})?-?([01])?[ \\t]*$"
  // whitespace
);
function extractTraceparentData(traceparent) {
  if (!traceparent) {
    return void 0;
  }
  const matches = traceparent.match(TRACEPARENT_REGEXP);
  if (!matches) {
    return void 0;
  }
  let parentSampled;
  if (matches[3] === "1") {
    parentSampled = true;
  } else if (matches[3] === "0") {
    parentSampled = false;
  }
  return {
    traceId: matches[1],
    parentSampled,
    parentSpanId: matches[2]
  };
}
function propagationContextFromHeaders(sentryTrace, baggage) {
  const traceparentData = extractTraceparentData(sentryTrace);
  const dynamicSamplingContext = baggageHeaderToDynamicSamplingContext(baggage);
  if (!traceparentData?.traceId) {
    return {
      traceId: generateTraceId(),
      sampleRand: safeMathRandom()
    };
  }
  const sampleRand = getSampleRandFromTraceparentAndDsc(traceparentData, dynamicSamplingContext);
  if (dynamicSamplingContext) {
    dynamicSamplingContext.sample_rand = sampleRand.toString();
  }
  const { traceId, parentSpanId, parentSampled } = traceparentData;
  return {
    traceId,
    parentSpanId,
    sampled: parentSampled,
    dsc: dynamicSamplingContext || {},
    // If we have traceparent data but no DSC it means we are not head of trace and we must freeze it
    sampleRand
  };
}
function generateSentryTraceHeader(traceId = generateTraceId(), spanId = generateSpanId(), sampled) {
  let sampledString = "";
  if (sampled !== void 0) {
    sampledString = sampled ? "-1" : "-0";
  }
  return `${traceId}-${spanId}${sampledString}`;
}
function generateTraceparentHeader(traceId = generateTraceId(), spanId = generateSpanId(), sampled) {
  return `00-${traceId}-${spanId}-${sampled ? "01" : "00"}`;
}
function getSampleRandFromTraceparentAndDsc(traceparentData, dsc) {
  const parsedSampleRand = parseSampleRate(dsc?.sample_rand);
  if (parsedSampleRand !== void 0) {
    return parsedSampleRand;
  }
  const parsedSampleRate = parseSampleRate(dsc?.sample_rate);
  if (parsedSampleRate && traceparentData?.parentSampled !== void 0) {
    return traceparentData.parentSampled ? (
      // Returns a sample rand with positive sampling decision [0, sampleRate)
      safeMathRandom() * parsedSampleRate
    ) : (
      // Returns a sample rand with negative sampling decision [sampleRate, 1)
      parsedSampleRate + safeMathRandom() * (1 - parsedSampleRate)
    );
  } else {
    return safeMathRandom();
  }
}
function shouldContinueTrace(client, baggageOrgId) {
  const clientOrgId = extractOrgIdFromClient(client);
  if (baggageOrgId && clientOrgId && baggageOrgId !== clientOrgId) {
    debug.log(
      `Won't continue trace because org IDs don't match (incoming baggage: ${baggageOrgId}, SDK options: ${clientOrgId})`
    );
    return false;
  }
  const strictTraceContinuation = client.getOptions().strictTraceContinuation || false;
  if (strictTraceContinuation) {
    if (baggageOrgId && !clientOrgId || !baggageOrgId && clientOrgId) {
      debug.log(
        `Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${baggageOrgId}, Sentry client: ${clientOrgId})`
      );
      return false;
    }
  }
  return true;
}

export { TRACEPARENT_REGEXP, extractTraceparentData, generateSentryTraceHeader, generateTraceparentHeader, propagationContextFromHeaders, shouldContinueTrace };
//# sourceMappingURL=tracing.js.map
