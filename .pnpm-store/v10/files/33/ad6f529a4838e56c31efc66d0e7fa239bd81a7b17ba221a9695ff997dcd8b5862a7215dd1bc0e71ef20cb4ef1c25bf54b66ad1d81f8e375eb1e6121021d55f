Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugLogger = require('./debug-logger.js');
const baggage = require('./baggage.js');
const dsn = require('./dsn.js');
const parseSampleRate = require('./parseSampleRate.js');
const propagationContext = require('./propagationContext.js');
const randomSafeContext = require('./randomSafeContext.js');

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
function propagationContextFromHeaders(sentryTrace, baggage$1) {
  const traceparentData = extractTraceparentData(sentryTrace);
  const dynamicSamplingContext = baggage.baggageHeaderToDynamicSamplingContext(baggage$1);
  if (!traceparentData?.traceId) {
    return {
      traceId: propagationContext.generateTraceId(),
      sampleRand: randomSafeContext.safeMathRandom()
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
function generateSentryTraceHeader(traceId = propagationContext.generateTraceId(), spanId = propagationContext.generateSpanId(), sampled) {
  let sampledString = "";
  if (sampled !== void 0) {
    sampledString = sampled ? "-1" : "-0";
  }
  return `${traceId}-${spanId}${sampledString}`;
}
function generateTraceparentHeader(traceId = propagationContext.generateTraceId(), spanId = propagationContext.generateSpanId(), sampled) {
  return `00-${traceId}-${spanId}-${sampled ? "01" : "00"}`;
}
function getSampleRandFromTraceparentAndDsc(traceparentData, dsc) {
  const parsedSampleRand = parseSampleRate.parseSampleRate(dsc?.sample_rand);
  if (parsedSampleRand !== void 0) {
    return parsedSampleRand;
  }
  const parsedSampleRate = parseSampleRate.parseSampleRate(dsc?.sample_rate);
  if (parsedSampleRate && traceparentData?.parentSampled !== void 0) {
    return traceparentData.parentSampled ? (
      // Returns a sample rand with positive sampling decision [0, sampleRate)
      randomSafeContext.safeMathRandom() * parsedSampleRate
    ) : (
      // Returns a sample rand with negative sampling decision [sampleRate, 1)
      parsedSampleRate + randomSafeContext.safeMathRandom() * (1 - parsedSampleRate)
    );
  } else {
    return randomSafeContext.safeMathRandom();
  }
}
function shouldContinueTrace(client, baggageOrgId) {
  const clientOrgId = dsn.extractOrgIdFromClient(client);
  if (baggageOrgId && clientOrgId && baggageOrgId !== clientOrgId) {
    debugLogger.debug.log(
      `Won't continue trace because org IDs don't match (incoming baggage: ${baggageOrgId}, SDK options: ${clientOrgId})`
    );
    return false;
  }
  const strictTraceContinuation = client.getOptions().strictTraceContinuation || false;
  if (strictTraceContinuation) {
    if (baggageOrgId && !clientOrgId || !baggageOrgId && clientOrgId) {
      debugLogger.debug.log(
        `Starting a new trace because strict trace continuation is enabled but one org ID is missing (incoming baggage: ${baggageOrgId}, Sentry client: ${clientOrgId})`
      );
      return false;
    }
  }
  return true;
}

exports.TRACEPARENT_REGEXP = TRACEPARENT_REGEXP;
exports.extractTraceparentData = extractTraceparentData;
exports.generateSentryTraceHeader = generateSentryTraceHeader;
exports.generateTraceparentHeader = generateTraceparentHeader;
exports.propagationContextFromHeaders = propagationContextFromHeaders;
exports.shouldContinueTrace = shouldContinueTrace;
//# sourceMappingURL=tracing.js.map
