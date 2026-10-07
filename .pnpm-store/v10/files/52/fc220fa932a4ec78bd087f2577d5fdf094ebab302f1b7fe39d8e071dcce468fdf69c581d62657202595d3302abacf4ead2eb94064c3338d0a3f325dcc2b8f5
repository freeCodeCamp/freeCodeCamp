Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const debugBuild = require('../debug-build.js');
const debugLogger = require('../utils/debug-logger.js');
const hasSpansEnabled = require('../utils/hasSpansEnabled.js');
const parseSampleRate = require('../utils/parseSampleRate.js');

function sampleSpan(options, samplingContext, sampleRand) {
  if (!hasSpansEnabled.hasSpansEnabled(options)) {
    return [false];
  }
  let localSampleRateWasApplied = void 0;
  let sampleRate;
  if (typeof options.tracesSampler === "function") {
    sampleRate = options.tracesSampler({
      ...samplingContext,
      inheritOrSampleWith: (fallbackSampleRate) => {
        if (typeof samplingContext.parentSampleRate === "number") {
          return samplingContext.parentSampleRate;
        }
        if (typeof samplingContext.parentSampled === "boolean") {
          return Number(samplingContext.parentSampled);
        }
        return fallbackSampleRate;
      }
    });
    localSampleRateWasApplied = true;
  } else if (samplingContext.parentSampled !== void 0) {
    sampleRate = samplingContext.parentSampled;
  } else if (typeof options.tracesSampleRate !== "undefined") {
    sampleRate = options.tracesSampleRate;
    localSampleRateWasApplied = true;
  }
  const parsedSampleRate = parseSampleRate.parseSampleRate(sampleRate);
  if (parsedSampleRate === void 0) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.warn(
      `[Tracing] Discarding root span because of invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
        sampleRate
      )} of type ${JSON.stringify(typeof sampleRate)}.`
    );
    return [false];
  }
  if (!parsedSampleRate) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.log(
      `[Tracing] Discarding transaction because ${typeof options.tracesSampler === "function" ? "tracesSampler returned 0 or false" : "a negative sampling decision was inherited or tracesSampleRate is set to 0"}`
    );
    return [false, parsedSampleRate, localSampleRateWasApplied];
  }
  const shouldSample = sampleRand < parsedSampleRate;
  if (!shouldSample) {
    debugBuild.DEBUG_BUILD && debugLogger.debug.log(
      `[Tracing] Discarding transaction because it's not included in the random sample (sampling rate = ${Number(
        sampleRate
      )})`
    );
  }
  return [shouldSample, parsedSampleRate, localSampleRateWasApplied];
}

exports.sampleSpan = sampleSpan;
//# sourceMappingURL=sampling.js.map
