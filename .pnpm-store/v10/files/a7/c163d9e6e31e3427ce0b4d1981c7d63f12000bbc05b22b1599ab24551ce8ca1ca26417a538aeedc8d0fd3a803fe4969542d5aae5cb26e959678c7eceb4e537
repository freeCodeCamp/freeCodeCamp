import { parseSemver, forEachEnvelopeItem, createEnvelope, debug, dsnToString, uuid4, getDebugImagesForResources, spanIsSampled, spanToJSON, LRUMap, defineIntegration, consoleSandbox, getRootSpan, getIsolationScope, getCurrentScope, getGlobalScope } from '@sentry/core';
import { CpuProfilerBindings, ProfileFormat } from '@sentry-internal/node-cpu-profiler';
import { isMainThread, threadId } from 'worker_threads';
import * as os from 'os';
import { env, versions } from 'process';

const DEBUG_BUILD = (typeof __SENTRY_DEBUG__ === 'undefined' || __SENTRY_DEBUG__);

const NODE_VERSION = parseSemver(process.versions.node);
const NODE_MAJOR = NODE_VERSION.major;

const PROFILER_THREAD_ID_STRING = String(threadId);
const PROFILER_THREAD_NAME = isMainThread ? "main" : "worker";
const FORMAT_VERSION = "1";
const CONTINUOUS_FORMAT_VERSION = "2";
const PLATFORM = os.platform();
const RELEASE = os.release();
const VERSION = os.version();
const TYPE = os.type();
const MODEL = os.machine();
const ARCH = os.arch();
function isRawThreadCpuProfile(profile) {
  return !("thread_metadata" in profile);
}
function enrichWithThreadInformation(profile) {
  if (!isRawThreadCpuProfile(profile)) {
    return profile;
  }
  return {
    samples: profile.samples,
    frames: profile.frames,
    stacks: profile.stacks,
    thread_metadata: {
      [PROFILER_THREAD_ID_STRING]: {
        name: PROFILER_THREAD_NAME
      }
    }
  };
}
function createProfilingEvent(client, profile, event) {
  if (!isValidProfile(profile)) {
    return null;
  }
  return createProfilePayload(client, profile, {
    release: event.release ?? "",
    environment: event.environment ?? "",
    event_id: event.event_id ?? "",
    transaction: event.transaction ?? "",
    start_timestamp: event.start_timestamp ? event.start_timestamp * 1e3 : Date.now(),
    trace_id: event.contexts?.trace?.trace_id ?? "",
    profile_id: profile.profile_id
  });
}
function createProfilePayload(client, cpuProfile, {
  release,
  environment,
  event_id,
  transaction,
  start_timestamp,
  trace_id,
  profile_id
}) {
  if (trace_id?.length !== 32) {
    DEBUG_BUILD && debug.log(`[Profiling] Invalid traceId: ${trace_id} on profiled event`);
  }
  const enrichedThreadProfile = enrichWithThreadInformation(cpuProfile);
  const profile = {
    event_id: profile_id,
    timestamp: new Date(start_timestamp).toISOString(),
    platform: "node",
    version: FORMAT_VERSION,
    release,
    environment,
    measurements: cpuProfile.measurements,
    runtime: {
      name: "node",
      version: versions.node || ""
    },
    os: {
      name: PLATFORM,
      version: RELEASE,
      build_number: VERSION
    },
    device: {
      locale: env["LC_ALL"] || env["LC_MESSAGES"] || env["LANG"] || env["LANGUAGE"] || "",
      model: MODEL,
      manufacturer: TYPE,
      architecture: ARCH,
      is_emulator: false
    },
    debug_meta: {
      images: applyDebugMetadata(client, cpuProfile.resources)
    },
    profile: enrichedThreadProfile,
    transaction: {
      name: transaction,
      id: event_id,
      trace_id: trace_id || "",
      active_thread_id: PROFILER_THREAD_ID_STRING
    }
  };
  return profile;
}
function createProfileChunkPayload(client, cpuProfile, {
  release,
  environment,
  trace_id,
  profiler_id,
  chunk_id,
  sdk
}) {
  if (trace_id?.length !== 32) {
    DEBUG_BUILD && debug.log(`[Profiling] Invalid traceId: ${trace_id} on profiled event`);
  }
  const enrichedThreadProfile = enrichWithThreadInformation(cpuProfile);
  const profile = {
    chunk_id,
    client_sdk: {
      name: sdk?.name ?? "sentry.javascript.node",
      version: sdk?.version ?? "0.0.0"
    },
    profiler_id,
    platform: "node",
    version: CONTINUOUS_FORMAT_VERSION,
    release,
    environment,
    measurements: cpuProfile.measurements,
    debug_meta: {
      images: applyDebugMetadata(client, cpuProfile.resources)
    },
    profile: enrichedThreadProfile
  };
  return profile;
}
function createProfilingChunkEvent(client, options, profile, sdk, identifiers) {
  if (!isValidProfileChunk(profile)) {
    return null;
  }
  return createProfileChunkPayload(client, profile, {
    release: options.release ?? "",
    environment: options.environment ?? "",
    trace_id: identifiers.trace_id ?? "",
    chunk_id: identifiers.chunk_id,
    profiler_id: identifiers.profiler_id,
    sdk
  });
}
function isValidSampleRate(rate) {
  if (typeof rate !== "number" && typeof rate !== "boolean" || typeof rate === "number" && isNaN(rate)) {
    DEBUG_BUILD && debug.warn(
      `[Profiling] Invalid sample rate. Sample rate must be a boolean or a number between 0 and 1. Got ${JSON.stringify(
        rate
      )} of type ${JSON.stringify(typeof rate)}.`
    );
    return false;
  }
  if (rate === true || rate === false) {
    return true;
  }
  if (rate < 0 || rate > 1) {
    DEBUG_BUILD && debug.warn(`[Profiling] Invalid sample rate. Sample rate must be between 0 and 1. Got ${rate}.`);
    return false;
  }
  return true;
}
function isValidProfile(profile) {
  if (profile.samples.length <= 1) {
    DEBUG_BUILD && // Log a warning if the profile has less than 2 samples so users can know why
    // they are not seeing any profiling data and we cant avoid the back and forth
    // of asking them to provide us with a dump of the profile data.
    debug.log("[Profiling] Discarding profile because it contains less than 2 samples");
    return false;
  }
  if (!profile.profile_id) {
    return false;
  }
  return true;
}
function isValidProfileChunk(profile) {
  if (profile.samples.length <= 1) {
    DEBUG_BUILD && // Log a warning if the profile has less than 2 samples so users can know why
    // they are not seeing any profiling data and we cant avoid the back and forth
    // of asking them to provide us with a dump of the profile data.
    debug.log("[Profiling] Discarding profile chunk because it contains less than 2 samples");
    return false;
  }
  return true;
}
function addProfilesToEnvelope(envelope, profiles) {
  if (!profiles.length) {
    return envelope;
  }
  for (const profile of profiles) {
    envelope[1].push([{ type: "profile" }, profile]);
  }
  return envelope;
}
function findProfiledTransactionsFromEnvelope(envelope) {
  const events = [];
  forEachEnvelopeItem(envelope, (item, type) => {
    if (type !== "transaction") {
      return;
    }
    for (let j = 1; j < item.length; j++) {
      const event = item[j];
      if (!event) {
        continue;
      }
      const profile_id = event.contexts?.profile?.profile_id;
      if (event && profile_id) {
        events.push(event);
      }
    }
  });
  return events;
}
function createEventEnvelopeHeaders(sdkInfo, tunnel, dsn) {
  return {
    event_id: uuid4(),
    sent_at: (/* @__PURE__ */ new Date()).toISOString(),
    ...sdkInfo && { sdk: sdkInfo },
    ...!!tunnel && dsn && { dsn: dsnToString(dsn) }
  };
}
function makeProfileChunkEnvelope(platform, chunk, sdkInfo, tunnel, dsn) {
  const profileChunkHeader = {
    type: "profile_chunk",
    platform
  };
  return createEnvelope(createEventEnvelopeHeaders(sdkInfo, tunnel, dsn), [
    [profileChunkHeader, chunk]
  ]);
}
function applyDebugMetadata(client, resource_paths) {
  const options = client.getOptions();
  if (!options?.stackParser) {
    return [];
  }
  return getDebugImagesForResources(options.stackParser, resource_paths);
}

const MAX_PROFILE_DURATION_MS = 30 * 1e3;
function maybeProfileSpan(client, span, customSamplingContext) {
  if (!isMainThread) {
    DEBUG_BUILD && debug.log("[Profiling] Skipping span profiling in worker thread.");
    return;
  }
  if (!spanIsSampled(span)) {
    return;
  }
  if (!client) {
    DEBUG_BUILD && debug.log("[Profiling] Profiling disabled, no client found.");
    return;
  }
  const options = client.getOptions();
  if (!options) {
    DEBUG_BUILD && debug.log("[Profiling] Profiling disabled, no options found.");
    return;
  }
  const profilesSampler = options.profilesSampler;
  let profilesSampleRate = options.profilesSampleRate;
  if (typeof profilesSampler === "function") {
    const { description: spanName = "<unknown>", data } = spanToJSON(span);
    const parentSampled = true;
    profilesSampleRate = profilesSampler({
      name: spanName,
      attributes: data,
      parentSampled,
      ...customSamplingContext
    });
  }
  if (!isValidSampleRate(profilesSampleRate)) {
    DEBUG_BUILD && debug.warn("[Profiling] Discarding profile because of invalid sample rate.");
    return;
  }
  if (!profilesSampleRate) {
    DEBUG_BUILD && debug.log(
      `[Profiling] Discarding profile because ${typeof profilesSampler === "function" ? "profileSampler returned 0 or false" : "a negative sampling decision was inherited or profileSampleRate is set to 0"}`
    );
    return;
  }
  const sampled = profilesSampleRate === true ? true : Math.random() < profilesSampleRate;
  if (!sampled) {
    DEBUG_BUILD && debug.log(
      `[Profiling] Discarding profile because it's not included in the random sample (sampling rate = ${Number(
        profilesSampleRate
      )})`
    );
    return;
  }
  const profile_id = uuid4();
  CpuProfilerBindings.startProfiling(profile_id);
  DEBUG_BUILD && debug.log(`[Profiling] started profiling transaction: ${spanToJSON(span).description}`);
  return profile_id;
}
function stopSpanProfile(span, profile_id) {
  if (!profile_id) {
    return null;
  }
  const profile = CpuProfilerBindings.stopProfiling(profile_id, 0);
  DEBUG_BUILD && debug.log(`[Profiling] stopped profiling of transaction: ${spanToJSON(span).description}`);
  if (!profile) {
    DEBUG_BUILD && debug.log(
      `[Profiling] profiler returned null profile for: ${spanToJSON(span).description}`,
      "this may indicate an overlapping span or a call to stopProfiling with a profile title that was never started"
    );
    return null;
  }
  profile.profile_id = profile_id;
  return profile;
}

const CHUNK_INTERVAL_MS = 1e3 * 60;
const PROFILE_MAP = new LRUMap(50);
const PROFILE_TIMEOUTS = {};
function addToProfileQueue(profile_id, profile) {
  PROFILE_MAP.set(profile_id, profile);
}
function takeFromProfileQueue(profile_id) {
  const profile = PROFILE_MAP.get(profile_id);
  PROFILE_MAP.remove(profile_id);
  return profile;
}
class ContinuousProfiler {
  constructor() {
    this._client = void 0;
    this._chunkData = void 0;
    this._mode = void 0;
    this._legacyProfilerMode = void 0;
    this._profileLifecycle = void 0;
    this._sampled = void 0;
    this._sessionSamplingRate = void 0;
  }
  /**
   * Called when the profiler is attached to the client (continuous mode is enabled). If of the profiler
   * methods called before the profiler is initialized will result in a noop action with debug logs.
   * @param client
   */
  initialize(client) {
    if (!isMainThread) {
      DEBUG_BUILD && debug.warn(
        "[Profiling] nodeProfilingIntegration() does not support worker threads \u2014 profiling will be disabled for this thread."
      );
      return;
    }
    this._client = client;
    const options = client.getOptions();
    this._mode = getProfilingMode(options);
    this._sessionSamplingRate = Math.random();
    this._sampled = this._sessionSamplingRate < (options.profileSessionSampleRate ?? 0);
    this._profileLifecycle = options.profileLifecycle ?? "manual";
    switch (this._mode) {
      case "legacy": {
        this._legacyProfilerMode = "profilesSampleRate" in options || "profilesSampler" in options ? "span" : "continuous";
        DEBUG_BUILD && debug.log(`[Profiling] Profiling mode is ${this._legacyProfilerMode}.`);
        switch (this._legacyProfilerMode) {
          case "span": {
            this._setupAutomaticSpanProfiling();
            break;
          }
          case "continuous": {
            break;
          }
          default: {
            DEBUG_BUILD && debug.warn(
              `[Profiling] Unknown profiler mode: ${this._legacyProfilerMode}, profiler was not initialized`
            );
            break;
          }
        }
        break;
      }
      case "current": {
        this._setupSpanChunkInstrumentation();
        DEBUG_BUILD && debug.log(`[Profiling] Profiling mode is ${this._profileLifecycle}.`);
        switch (this._profileLifecycle) {
          case "trace": {
            this._startTraceLifecycleProfiling();
            break;
          }
          case "manual": {
            break;
          }
          default: {
            DEBUG_BUILD && debug.warn(`[Profiling] Unknown profiler mode: ${this._profileLifecycle}, profiler was not initialized`);
            break;
          }
        }
        break;
      }
      default: {
        DEBUG_BUILD && debug.warn(`[Profiling] Unknown profiler mode: ${this._mode}, profiler was not initialized`);
        break;
      }
    }
    this._client.on("beforeSendEvent", this._onBeforeSendThreadContextAssignment.bind(this));
  }
  /**
   * Initializes a new profilerId session and schedules chunk profiling.
   * @returns void
   */
  start() {
    if (this._mode === "current") {
      this._startProfiler();
      return;
    }
    if (!this._client) {
      DEBUG_BUILD && debug.log("[Profiling] Failed to start, sentry client was never attached to the profiler.");
      return;
    }
    if (this._mode !== "legacy") {
      DEBUG_BUILD && debug.log("[Profiling] Continuous profiling is not supported in the current mode.");
      return;
    }
    if (this._legacyProfilerMode === "span") {
      DEBUG_BUILD && debug.log("[Profiling] Calls to profiler.start() are not supported in span profiling mode.");
      return;
    }
    this._stopChunkProfiling();
    this._setupSpanChunkInstrumentation();
    this._restartChunkProfiling();
  }
  /**
   * Stops the current chunk and flushes the profile to Sentry.
   * @returns void
   */
  stop() {
    if (this._mode === "current") {
      this._stopProfiler();
      return;
    }
    if (!this._client) {
      DEBUG_BUILD && debug.log("[Profiling] Failed to stop, sentry client was never attached to the profiler.");
      return;
    }
    if (this._mode !== "legacy") {
      DEBUG_BUILD && debug.log("[Profiling] Continuous profiling is not supported in the current mode.");
      return;
    }
    if (this._legacyProfilerMode === "span") {
      DEBUG_BUILD && debug.log("[Profiling] Calls to profiler.stop() are not supported in span profiling mode.");
      return;
    }
    this._stopChunkProfiling();
    this._teardownSpanChunkInstrumentation();
  }
  _startProfiler() {
    if (this._mode !== "current") {
      DEBUG_BUILD && debug.log("[Profiling] Continuous profiling is not supported in the current mode.");
      return;
    }
    if (this._chunkData !== void 0) {
      DEBUG_BUILD && debug.log("[Profiling] Profile session already running, no-op.");
      return;
    }
    if (this._mode === "current") {
      if (!this._sampled) {
        DEBUG_BUILD && debug.log("[Profiling] Profile session not sampled, no-op.");
        return;
      }
    }
    if (this._profileLifecycle === "trace") {
      DEBUG_BUILD && debug.log(
        "[Profiling] You are using the trace profile lifecycle, manual calls to profiler.startProfiler() and profiler.stopProfiler() will be ignored."
      );
      return;
    }
    this._startChunkProfiling();
  }
  _stopProfiler() {
    if (this._mode !== "current") {
      DEBUG_BUILD && debug.log("[Profiling] Continuous profiling is not supported in the current mode.");
      return;
    }
    if (this._profileLifecycle === "trace") {
      DEBUG_BUILD && debug.log(
        "[Profiling] You are using the trace profile lifecycle, manual calls to profiler.startProfiler() and profiler.stopProfiler() will be ignored."
      );
      return;
    }
    if (!this._chunkData) {
      DEBUG_BUILD && debug.log("[Profiling] No profile session running, no-op.");
      return;
    }
    this._stopChunkProfiling();
  }
  /**
   * Starts trace lifecycle profiling. Profiling will remain active as long as there is an active span.
   */
  _startTraceLifecycleProfiling() {
    if (!this._client) {
      DEBUG_BUILD && debug.log(
        "[Profiling] Failed to start trace lifecycle profiling, sentry client was never attached to the profiler."
      );
      return;
    }
    let activeSpanCounter = 0;
    this._client.on("spanStart", (_span) => {
      if (activeSpanCounter === 0) {
        this._startChunkProfiling();
      }
      activeSpanCounter++;
    });
    this._client.on("spanEnd", (_span) => {
      if (activeSpanCounter === 1) {
        this._stopChunkProfiling();
      }
      activeSpanCounter--;
    });
  }
  _setupAutomaticSpanProfiling() {
    if (!this._client) {
      DEBUG_BUILD && debug.log(
        "[Profiling] Failed to setup automatic span profiling, sentry client was never attached to the profiler."
      );
      return;
    }
    const spanToProfileIdMap = /* @__PURE__ */ new WeakMap();
    this._client.on("spanStart", (span) => {
      if (span !== getRootSpan(span)) {
        return;
      }
      const profile_id = maybeProfileSpan(this._client, span);
      if (profile_id) {
        const options = this._client.getOptions();
        const maxProfileDurationMs = options._experiments?.maxProfileDurationMs || MAX_PROFILE_DURATION_MS;
        if (PROFILE_TIMEOUTS[profile_id]) {
          global.clearTimeout(PROFILE_TIMEOUTS[profile_id]);
          delete PROFILE_TIMEOUTS[profile_id];
        }
        const timeout = global.setTimeout(() => {
          DEBUG_BUILD && debug.log(
            "[Profiling] max profile duration elapsed, stopping profiling for:",
            spanToJSON(span).description
          );
          const profile = stopSpanProfile(span, profile_id);
          if (profile) {
            addToProfileQueue(profile_id, profile);
          }
        }, maxProfileDurationMs);
        timeout.unref();
        getIsolationScope().setContext("profile", { profile_id });
        spanToProfileIdMap.set(span, profile_id);
      }
    });
    this._client.on("spanEnd", (span) => {
      const profile_id = spanToProfileIdMap.get(span);
      if (profile_id) {
        if (PROFILE_TIMEOUTS[profile_id]) {
          global.clearTimeout(PROFILE_TIMEOUTS[profile_id]);
          delete PROFILE_TIMEOUTS[profile_id];
        }
        const profile = stopSpanProfile(span, profile_id);
        if (profile) {
          addToProfileQueue(profile_id, profile);
        }
      }
    });
    this._client.on("beforeEnvelope", (envelope) => {
      if (!PROFILE_MAP.size) {
        return;
      }
      const profiledTransactionEvents = findProfiledTransactionsFromEnvelope(envelope);
      if (!profiledTransactionEvents.length) {
        return;
      }
      const profilesToAddToEnvelope = [];
      for (const profiledTransaction of profiledTransactionEvents) {
        const profileContext = profiledTransaction.contexts?.profile;
        const profile_id = profileContext?.profile_id;
        if (!profile_id) {
          throw new TypeError("[Profiling] cannot find profile for a transaction without a profile context");
        }
        if (profileContext) {
          delete profiledTransaction.contexts?.profile;
        }
        const cpuProfile = takeFromProfileQueue(profile_id);
        if (!cpuProfile) {
          DEBUG_BUILD && debug.log(`[Profiling] Could not retrieve profile for transaction: ${profile_id}`);
          continue;
        }
        const profile = createProfilingEvent(this._client, cpuProfile, profiledTransaction);
        if (!profile) return;
        profilesToAddToEnvelope.push(profile);
        this._client.emit("preprocessEvent", profile, {
          event_id: profiledTransaction.event_id
        });
        this._client.emit("postprocessEvent", profile, {
          event_id: profiledTransaction.event_id
        });
      }
      addProfilesToEnvelope(envelope, profilesToAddToEnvelope);
    });
  }
  /**
   * Stop profiler and initializes profiling of the next chunk
   */
  _restartChunkProfiling() {
    if (!this._client) {
      DEBUG_BUILD && debug.log("[Profiling] Profiler was never attached to the client.");
      return;
    }
    if (this._chunkData) {
      DEBUG_BUILD && debug.log(
        `[Profiling] Chunk with chunk_id ${this._chunkData.id} is still running, current chunk will be stopped a new chunk will be started.`
      );
      this._stopChunkProfiling();
    }
    this._startChunkProfiling();
  }
  /**
   * Stops profiling of the current chunks and flushes the profile to Sentry
   */
  _stopChunkProfiling() {
    if (!this._chunkData) {
      DEBUG_BUILD && debug.log("[Profiling] No chunk data found, no-op.");
      return;
    }
    if (this._chunkData?.timer) {
      global.clearTimeout(this._chunkData.timer);
      this._chunkData.timer = void 0;
      DEBUG_BUILD && debug.log(`[Profiling] Stopping profiling chunk: ${this._chunkData.id}`);
    }
    if (!this._client) {
      DEBUG_BUILD && debug.log("[Profiling] Failed to collect profile, sentry client was never attached to the profiler.");
      this._resetChunkData();
      return;
    }
    if (!this._chunkData?.id) {
      DEBUG_BUILD && debug.log(`[Profiling] Failed to collect profile for: ${this._chunkData?.id}, the chunk_id is missing.`);
      this._resetChunkData();
      return;
    }
    const profile = CpuProfilerBindings.stopProfiling(this._chunkData.id, ProfileFormat.CHUNK);
    if (!profile) {
      DEBUG_BUILD && debug.log(`[Profiling] Failed to collect profile for: ${this._chunkData.id}`);
      this._resetChunkData();
      return;
    }
    if (!this._profilerId) {
      DEBUG_BUILD && debug.log("[Profiling] Profile chunk does not contain a valid profiler_id, this is a bug in the SDK");
      this._resetChunkData();
      return;
    }
    if (profile) {
      DEBUG_BUILD && debug.log(`[Profiling] Sending profile chunk ${this._chunkData.id}.`);
    }
    DEBUG_BUILD && debug.log(`[Profiling] Profile chunk ${this._chunkData.id} sent to Sentry.`);
    const chunk = createProfilingChunkEvent(
      this._client,
      this._client.getOptions(),
      profile,
      this._client.getSdkMetadata()?.sdk,
      {
        chunk_id: this._chunkData.id,
        trace_id: this._chunkData.startTraceID,
        profiler_id: this._profilerId
      }
    );
    if (!chunk) {
      DEBUG_BUILD && debug.log(`[Profiling] Failed to create profile chunk for: ${this._chunkData.id}`);
      this._resetChunkData();
      return;
    }
    this._flush(chunk);
    this._resetChunkData();
  }
  /**
   * Flushes the profile chunk to Sentry.
   * @param chunk
   */
  _flush(chunk) {
    if (!this._client) {
      DEBUG_BUILD && debug.log("[Profiling] Failed to collect profile, sentry client was never attached to the profiler.");
      return;
    }
    const transport = this._client.getTransport();
    if (!transport) {
      DEBUG_BUILD && debug.log("[Profiling] No transport available to send profile chunk.");
      return;
    }
    const dsn = this._client.getDsn();
    const metadata = this._client.getSdkMetadata();
    const tunnel = this._client.getOptions().tunnel;
    const envelope = makeProfileChunkEnvelope("node", chunk, metadata?.sdk, tunnel, dsn);
    transport.send(envelope).then(null, (reason) => {
      DEBUG_BUILD && debug.error("Error while sending profile chunk envelope:", reason);
    });
  }
  /**
   * Starts the profiler and registers the flush timer for a given chunk.
   * @param chunk
   */
  _startChunkProfiling() {
    if (this._chunkData) {
      DEBUG_BUILD && debug.log("[Profiling] Chunk is already running, no-op.");
      return;
    }
    const traceId = getCurrentScope().getPropagationContext().traceId || getIsolationScope().getPropagationContext().traceId;
    const chunk = this._initializeChunk(traceId);
    CpuProfilerBindings.startProfiling(chunk.id);
    DEBUG_BUILD && debug.log(`[Profiling] starting profiling chunk: ${chunk.id}`);
    chunk.timer = global.setTimeout(() => {
      DEBUG_BUILD && debug.log(`[Profiling] Stopping profiling chunk: ${chunk.id}`);
      this._stopChunkProfiling();
      DEBUG_BUILD && debug.log("[Profiling] Starting new profiling chunk.");
      setImmediate(this._restartChunkProfiling.bind(this));
    }, CHUNK_INTERVAL_MS);
    chunk.timer.unref();
  }
  /**
   * Attaches profiling information to spans that were started
   * during a profiling session.
   */
  _setupSpanChunkInstrumentation() {
    if (!this._client) {
      DEBUG_BUILD && debug.log("[Profiling] Failed to initialize span profiling, sentry client was never attached to the profiler.");
      return;
    }
    this._profilerId = uuid4();
    getGlobalScope().setContext("profile", {
      profiler_id: this._profilerId
    });
  }
  /**
   * Assigns thread_id and thread name context to a profiled event if there is an active profiler session
   */
  _onBeforeSendThreadContextAssignment(event) {
    if (!this._client || !this._profilerId) return;
    this._assignThreadIdContext(event);
  }
  /**
   * Clear profiling information from global context when a profile is not running.
   */
  _teardownSpanChunkInstrumentation() {
    this._profilerId = void 0;
    const globalScope = getGlobalScope();
    globalScope.setContext("profile", {});
  }
  /**
   * Initializes new profile chunk metadata
   */
  _initializeChunk(traceId) {
    this._chunkData = {
      id: uuid4(),
      startTraceID: traceId,
      timer: void 0
    };
    return this._chunkData;
  }
  /**
   * Assigns thread_id and thread name context to a profiled event.
   */
  _assignThreadIdContext(event) {
    if (!event?.contexts?.profile) {
      return;
    }
    if (!event.contexts) {
      return;
    }
    event.contexts.trace = {
      ...event.contexts?.trace ?? {},
      data: {
        ...event.contexts?.trace?.data ?? {},
        ["thread.id"]: PROFILER_THREAD_ID_STRING,
        ["thread.name"]: PROFILER_THREAD_NAME
      }
    };
  }
  /**
   * Resets the current chunk state.
   */
  _resetChunkData() {
    this._chunkData = void 0;
  }
}
const _nodeProfilingIntegration = (() => {
  if (![16, 18, 20, 22, 24, 26].includes(NODE_MAJOR)) {
    consoleSandbox(() => {
      console.warn(
        `[Sentry Profiling] You are using a Node.js version that does not have prebuilt binaries (${NODE_MAJOR}).`,
        "The @sentry/profiling-node package only has prebuilt support for the following LTS versions of Node.js: 16, 18, 20, 22, 24.",
        "To use the @sentry/profiling-node package with this version of Node.js, you will need to compile the native addon from source.",
        "See: https://github.com/getsentry/sentry-javascript/tree/develop/packages/profiling-node#building-the-package-from-source"
      );
    });
  }
  return {
    name: "ProfilingIntegration",
    _profiler: new ContinuousProfiler(),
    setup(client) {
      DEBUG_BUILD && debug.log("[Profiling] Profiling integration setup.");
      this._profiler.initialize(client);
      return;
    }
  };
});
function getProfilingMode(options) {
  if ("profilesSampleRate" in options || "profilesSampler" in options) {
    return "legacy";
  }
  if ("profileSessionSampleRate" in options || "profileLifecycle" in options) {
    return "current";
  }
  return "legacy";
}
const nodeProfilingIntegration = defineIntegration(_nodeProfilingIntegration);

export { nodeProfilingIntegration };
//# sourceMappingURL=index.js.map
