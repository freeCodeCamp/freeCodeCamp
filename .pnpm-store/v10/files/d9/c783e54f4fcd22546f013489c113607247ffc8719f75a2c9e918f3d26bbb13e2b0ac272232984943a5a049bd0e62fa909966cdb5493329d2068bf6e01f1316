const polyfills$1 = {
  fetch: globalThis.fetch ? globalThis.fetch.bind(globalThis) : undefined,
  SubtleCrypto: globalThis.crypto ? globalThis.crypto.subtle : undefined,
  EventSource: globalThis.EventSource
};
function getPolyfills() {
  return polyfills$1;
}
function hashFnv32a(str) {
  let hval = 0x811c9dc5;
  const l = str.length;
  for (let i = 0; i < l; i++) {
    hval ^= str.charCodeAt(i);
    hval += (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }
  return hval >>> 0;
}
function hash(seed, value, version) {
  // New unbiased hashing algorithm
  if (version === 2) {
    return hashFnv32a(hashFnv32a(seed + value) + "") % 10000 / 10000;
  }
  // Original biased hashing algorithm (keep for backwards compatibility)
  if (version === 1) {
    return hashFnv32a(value + seed) % 1000 / 1000;
  }

  // Unknown hash version
  return null;
}
function getEqualWeights(n) {
  if (n <= 0) return [];
  return new Array(n).fill(1 / n);
}
function inRange(n, range) {
  return n >= range[0] && n < range[1];
}
function inNamespace(hashValue, namespace) {
  const n = hash("__" + namespace[0], hashValue, 1);
  if (n === null) return false;
  return n >= namespace[1] && n < namespace[2];
}
function chooseVariation(n, ranges) {
  for (let i = 0; i < ranges.length; i++) {
    if (inRange(n, ranges[i])) {
      return i;
    }
  }
  return -1;
}
function getUrlRegExp(regexString) {
  try {
    const escaped = regexString.replace(/([^\\])\//g, "$1\\/");
    return new RegExp(escaped);
  } catch (e) {
    console.error(e);
    return undefined;
  }
}
function isURLTargeted(url, targets) {
  if (!targets.length) return false;
  let hasIncludeRules = false;
  let isIncluded = false;
  for (let i = 0; i < targets.length; i++) {
    const match = _evalURLTarget(url, targets[i].type, targets[i].pattern);
    if (targets[i].include === false) {
      if (match) return false;
    } else {
      hasIncludeRules = true;
      if (match) isIncluded = true;
    }
  }
  return isIncluded || !hasIncludeRules;
}
function _evalSimpleUrlPart(actual, pattern, isPath) {
  try {
    // Escape special regex characters and change wildcard `_____` to `.*`
    let escaped = pattern.replace(/[*.+?^${}()|[\]\\]/g, "\\$&").replace(/_____/g, ".*");
    if (isPath) {
      // When matching pathname, make leading/trailing slashes optional
      escaped = "\\/?" + escaped.replace(/(^\/|\/$)/g, "") + "\\/?";
    }
    const regex = new RegExp("^" + escaped + "$", "i");
    return regex.test(actual);
  } catch (e) {
    return false;
  }
}
function _evalSimpleUrlTarget(actual, pattern) {
  try {
    // If a protocol is missing, but a host is specified, add `https://` to the front
    // Use "_____" as the wildcard since `*` is not a valid hostname in some browsers
    const expected = new URL(pattern.replace(/^([^:/?]*)\./i, "https://$1.").replace(/\*/g, "_____"), "https://_____");

    // Compare each part of the URL separately
    const comps = [[actual.host, expected.host, false], [actual.pathname, expected.pathname, true]];
    // We only want to compare hashes if it's explicitly being targeted
    if (expected.hash) {
      comps.push([actual.hash, expected.hash, false]);
    }
    expected.searchParams.forEach((v, k) => {
      comps.push([actual.searchParams.get(k) || "", v, false]);
    });

    // If any comparisons fail, the whole thing fails
    return !comps.some(data => !_evalSimpleUrlPart(data[0], data[1], data[2]));
  } catch (e) {
    return false;
  }
}
function _evalURLTarget(url, type, pattern) {
  try {
    const parsed = new URL(url, "https://_");
    if (type === "regex") {
      const regex = getUrlRegExp(pattern);
      if (!regex) return false;
      return regex.test(parsed.href) || regex.test(parsed.href.substring(parsed.origin.length));
    } else if (type === "simple") {
      return _evalSimpleUrlTarget(parsed, pattern);
    }
    return false;
  } catch (e) {
    return false;
  }
}
function getBucketRanges(numVariations, coverage, weights) {
  coverage = coverage === undefined ? 1 : coverage;

  // Make sure coverage is within bounds
  if (coverage < 0) {
    coverage = 0;
  } else if (coverage > 1) {
    coverage = 1;
  }

  // Default to equal weights if missing or invalid
  const equal = getEqualWeights(numVariations);
  weights = weights || equal;
  if (weights.length !== numVariations) {
    weights = equal;
  }

  // If weights don't add up to 1 (or close to it), default to equal weights
  const totalWeight = weights.reduce((w, sum) => sum + w, 0);
  if (totalWeight < 0.99 || totalWeight > 1.01) {
    weights = equal;
  }

  // Covert weights to ranges
  let cumulative = 0;
  return weights.map(w => {
    const start = cumulative;
    cumulative += w;
    return [start, start + coverage * w];
  });
}
function getQueryStringOverride(id, url, numVariations) {
  if (!url) {
    return null;
  }
  const search = url.split("?")[1];
  if (!search) {
    return null;
  }
  const match = search.replace(/#.*/, "") // Get rid of anchor
  .split("&") // Split into key/value pairs
  .map(kv => kv.split("=", 2)).filter(([k]) => k === id) // Look for key that matches the experiment id
  .map(([, v]) => parseInt(v)); // Parse the value into an integer

  if (match.length > 0 && match[0] >= 0 && match[0] < numVariations) return match[0];
  return null;
}
function isIncluded(include) {
  try {
    return include();
  } catch (e) {
    console.error(e);
    return false;
  }
}
const base64ToBuf = b => Uint8Array.from(atob(b), c => c.charCodeAt(0));
async function decrypt(encryptedString, decryptionKey, subtle) {
  decryptionKey = decryptionKey || "";
  subtle = subtle || globalThis.crypto && globalThis.crypto.subtle || polyfills$1.SubtleCrypto;
  if (!subtle) {
    throw new Error("No SubtleCrypto implementation found");
  }
  try {
    const key = await subtle.importKey("raw", base64ToBuf(decryptionKey), {
      name: "AES-CBC",
      length: 128
    }, true, ["encrypt", "decrypt"]);
    const [iv, cipherText] = encryptedString.split(".");
    const plainTextBuffer = await subtle.decrypt({
      name: "AES-CBC",
      iv: base64ToBuf(iv)
    }, key, base64ToBuf(cipherText));
    return new TextDecoder().decode(plainTextBuffer);
  } catch (e) {
    throw new Error("Failed to decrypt");
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function toString(input) {
  if (typeof input === "string") return input;
  return JSON.stringify(input);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function paddedVersionString(input) {
  if (typeof input === "number") {
    input = input + "";
  }
  if (!input || typeof input !== "string") {
    input = "0";
  }
  // Remove build info and leading `v` if any
  // Split version into parts (both core version numbers and pre-release tags)
  // "v1.2.3-rc.1+build123" -> ["1","2","3","rc","1"]
  const parts = input.replace(/(^v|\+.*$)/g, "").split(/[-.]/);

  // If it's SemVer without a pre-release, add `~` to the end
  // ["1","0","0"] -> ["1","0","0","~"]
  // "~" is the largest ASCII character, so this will make "1.0.0" greater than "1.0.0-beta" for example
  if (parts.length === 3) {
    parts.push("~");
  }

  // Left pad each numeric part with spaces so string comparisons will work ("9">"10", but " 9"<"10")
  // Then, join back together into a single string
  return parts.map(v => v.match(/^[0-9]+$/) ? v.padStart(5, " ") : v).join("-");
}
function loadSDKVersion() {
  let version;
  try {
    // @ts-expect-error right-hand value to be replaced by build with string literal
    version = "1.6.5";
  } catch (e) {
    version = "";
  }
  return version;
}
function mergeQueryStrings(oldUrl, newUrl) {
  let currUrl;
  let redirectUrl;
  try {
    currUrl = new URL(oldUrl);
    redirectUrl = new URL(newUrl);
  } catch (e) {
    console.error(`Unable to merge query strings: ${e}`);
    return newUrl;
  }
  currUrl.searchParams.forEach((value, key) => {
    // skip  if search param already exists in redirectUrl
    if (redirectUrl.searchParams.has(key)) {
      return;
    }
    redirectUrl.searchParams.set(key, value);
  });
  return redirectUrl.toString();
}
function isObj(x) {
  return typeof x === "object" && x !== null;
}
function getAutoExperimentChangeType(exp) {
  if (exp.urlPatterns && exp.variations.some(variation => isObj(variation) && "urlRedirect" in variation)) {
    return "redirect";
  } else if (exp.variations.some(variation => isObj(variation) && (variation.domMutations || "js" in variation || "css" in variation))) {
    return "visual";
  }
  return "unknown";
}

// Guarantee the promise always resolves within {timeout} ms
// Resolved value will be `null` when there's an error or it takes too long
// Note: The promise will continue running in the background, even if the timeout is hit
async function promiseTimeout(promise, timeout) {
  return new Promise(resolve => {
    let resolved = false;
    let timer;
    const finish = data => {
      if (resolved) return;
      resolved = true;
      timer && clearTimeout(timer);
      resolve(data || null);
    };
    if (timeout) {
      timer = setTimeout(() => finish(), timeout);
    }
    promise.then(data => finish(data)).catch(() => finish());
  });
}

// Config settings
const cacheSettings = {
  // Consider a fetch stale after 1 minute
  staleTTL: 1000 * 60,
  // Max time to keep a fetch in cache (4 hours default)
  maxAge: 1000 * 60 * 60 * 4,
  cacheKey: "gbFeaturesCache",
  backgroundSync: true,
  maxEntries: 10,
  disableIdleStreams: false,
  idleStreamInterval: 20000,
  disableCache: false
};
const polyfills = getPolyfills();
const helpers = {
  fetchFeaturesCall: ({
    host,
    clientKey,
    headers
  }) => {
    return polyfills.fetch(`${host}/api/features/${clientKey}`, {
      headers
    });
  },
  fetchRemoteEvalCall: ({
    host,
    clientKey,
    payload,
    headers
  }) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers
      },
      body: JSON.stringify(payload)
    };
    return polyfills.fetch(`${host}/api/eval/${clientKey}`, options);
  },
  eventSourceCall: ({
    host,
    clientKey,
    headers
  }) => {
    if (headers) {
      return new polyfills.EventSource(`${host}/sub/${clientKey}`, {
        headers
      });
    }
    return new polyfills.EventSource(`${host}/sub/${clientKey}`);
  },
  startIdleListener: () => {
    let idleTimeout;
    const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
    if (!isBrowser) return;
    const onVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        window.clearTimeout(idleTimeout);
        onVisible();
      } else if (document.visibilityState === "hidden") {
        idleTimeout = window.setTimeout(onHidden, cacheSettings.idleStreamInterval);
      }
    };
    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  },
  stopIdleListener: () => {
    // No-op, replaced by startIdleListener
  }
};
try {
  if (globalThis.localStorage) {
    polyfills.localStorage = globalThis.localStorage;
  }
} catch (e) {
  // Ignore localStorage errors
}

// Global state
const subscribedInstances = new Map();
let cacheInitialized = false;
const cache = new Map();
const activeFetches = new Map();
const streams = new Map();
const supportsSSE = new Set();

// Public functions
function setPolyfills(overrides) {
  Object.assign(polyfills, overrides);
}
function configureCache(overrides) {
  Object.assign(cacheSettings, overrides);
  if (!cacheSettings.backgroundSync) {
    clearAutoRefresh();
  }
}
async function clearCache() {
  cache.clear();
  activeFetches.clear();
  clearAutoRefresh();
  cacheInitialized = false;
  await updatePersistentCache();
}

// Get or fetch features and refresh the SDK instance
async function refreshFeatures({
  instance,
  timeout,
  skipCache,
  allowStale,
  backgroundSync
}) {
  if (!backgroundSync) {
    cacheSettings.backgroundSync = false;
  }
  return fetchFeaturesWithCache({
    instance,
    allowStale,
    timeout,
    skipCache
  });
}

// Subscribe a GrowthBook instance to feature changes
function subscribe(instance) {
  const key = getKey(instance);
  const subs = subscribedInstances.get(key) || new Set();
  subs.add(instance);
  subscribedInstances.set(key, subs);
}
function unsubscribe(instance) {
  subscribedInstances.forEach(s => s.delete(instance));
}
function onHidden() {
  streams.forEach(channel => {
    if (!channel) return;
    channel.state = "idle";
    disableChannel(channel);
  });
}
function onVisible() {
  streams.forEach(channel => {
    if (!channel) return;
    if (channel.state !== "idle") return;
    enableChannel(channel);
  });
}

// Private functions

async function updatePersistentCache() {
  try {
    if (!polyfills.localStorage) return;
    await polyfills.localStorage.setItem(cacheSettings.cacheKey, JSON.stringify(Array.from(cache.entries())));
  } catch (e) {
    // Ignore localStorage errors
  }
}

// SWR wrapper for fetching features. May indirectly or directly start SSE streaming.
async function fetchFeaturesWithCache({
  instance,
  allowStale,
  timeout,
  skipCache
}) {
  const key = getKey(instance);
  const cacheKey = getCacheKey(instance);
  const now = new Date();
  const minStaleAt = new Date(now.getTime() - cacheSettings.maxAge + cacheSettings.staleTTL);
  await initializeCache();
  const existing = !cacheSettings.disableCache && !skipCache ? cache.get(cacheKey) : undefined;
  if (existing && (allowStale || existing.staleAt > now) && existing.staleAt > minStaleAt) {
    // Restore from cache whether SSE is supported
    if (existing.sse) supportsSSE.add(key);

    // Reload features in the background if stale
    if (existing.staleAt < now) {
      fetchFeatures(instance);
    }
    // Otherwise, if we don't need to refresh now, start a background sync
    else {
      startAutoRefresh(instance);
    }
    return {
      data: existing.data,
      success: true,
      source: "cache"
    };
  } else {
    const res = await promiseTimeout(fetchFeatures(instance), timeout);
    return res || {
      data: null,
      success: false,
      source: "timeout",
      error: new Error("Timeout")
    };
  }
}
function getKey(instance) {
  const [apiHost, clientKey] = instance.getApiInfo();
  return `${apiHost}||${clientKey}`;
}
function getCacheKey(instance) {
  const baseKey = getKey(instance);
  if (!("isRemoteEval" in instance) || !instance.isRemoteEval()) return baseKey;
  const attributes = instance.getAttributes();
  const cacheKeyAttributes = instance.getCacheKeyAttributes() || Object.keys(instance.getAttributes());
  const ca = {};
  cacheKeyAttributes.forEach(key => {
    ca[key] = attributes[key];
  });
  const fv = instance.getForcedVariations();
  const url = instance.getUrl();
  return `${baseKey}||${JSON.stringify({
    ca,
    fv,
    url
  })}`;
}

// Populate cache from localStorage (if available)
async function initializeCache() {
  if (cacheInitialized) return;
  cacheInitialized = true;
  try {
    if (polyfills.localStorage) {
      const value = await polyfills.localStorage.getItem(cacheSettings.cacheKey);
      if (!cacheSettings.disableCache && value) {
        const parsed = JSON.parse(value);
        if (parsed && Array.isArray(parsed)) {
          parsed.forEach(([key, data]) => {
            cache.set(key, {
              ...data,
              staleAt: new Date(data.staleAt)
            });
          });
        }
        cleanupCache();
      }
    }
  } catch (e) {
    // Ignore localStorage errors
  }
  if (!cacheSettings.disableIdleStreams) {
    const cleanupFn = helpers.startIdleListener();
    if (cleanupFn) {
      helpers.stopIdleListener = cleanupFn;
    }
  }
}

// Enforce the maxEntries limit
function cleanupCache() {
  const entriesWithTimestamps = Array.from(cache.entries()).map(([key, value]) => ({
    key,
    staleAt: value.staleAt.getTime()
  })).sort((a, b) => a.staleAt - b.staleAt);
  const entriesToRemoveCount = Math.min(Math.max(0, cache.size - cacheSettings.maxEntries), cache.size);
  for (let i = 0; i < entriesToRemoveCount; i++) {
    cache.delete(entriesWithTimestamps[i].key);
  }
}

// Called whenever new features are fetched from the API
function onNewFeatureData(key, cacheKey, data) {
  // If contents haven't changed, ignore the update, extend the stale TTL
  const version = data.dateUpdated || "";
  const staleAt = new Date(Date.now() + cacheSettings.staleTTL);
  const existing = !cacheSettings.disableCache ? cache.get(cacheKey) : undefined;
  if (existing && version && existing.version === version) {
    existing.staleAt = staleAt;
    updatePersistentCache();
    return;
  }
  if (!cacheSettings.disableCache) {
    // Update in-memory cache
    cache.set(cacheKey, {
      data,
      version,
      staleAt,
      sse: supportsSSE.has(key)
    });
    cleanupCache();
  }
  // Update local storage (don't await this, just update asynchronously)
  updatePersistentCache();

  // Update features for all subscribed GrowthBook instances
  const instances = subscribedInstances.get(key);
  instances && instances.forEach(instance => refreshInstance(instance, data));
}
async function refreshInstance(instance, data) {
  await instance.setPayload(data || instance.getPayload());
}

// Fetch the features payload from helper function or from in-mem injected payload
async function fetchFeatures(instance) {
  const {
    apiHost,
    apiRequestHeaders
  } = instance.getApiHosts();
  const clientKey = instance.getClientKey();
  const remoteEval = "isRemoteEval" in instance && instance.isRemoteEval();
  const key = getKey(instance);
  const cacheKey = getCacheKey(instance);
  let promise = activeFetches.get(cacheKey);
  if (!promise) {
    const fetcher = remoteEval ? helpers.fetchRemoteEvalCall({
      host: apiHost,
      clientKey,
      payload: {
        attributes: instance.getAttributes(),
        forcedVariations: instance.getForcedVariations(),
        forcedFeatures: Array.from(instance.getForcedFeatures().entries()),
        url: instance.getUrl()
      },
      headers: apiRequestHeaders
    }) : helpers.fetchFeaturesCall({
      host: apiHost,
      clientKey,
      headers: apiRequestHeaders
    });

    // TODO: auto-retry if status code indicates a temporary error
    promise = fetcher.then(res => {
      if (!res.ok) {
        throw new Error(`HTTP error: ${res.status}`);
      }
      if (res.headers.get("x-sse-support") === "enabled") {
        supportsSSE.add(key);
      }
      return res.json();
    }).then(data => {
      onNewFeatureData(key, cacheKey, data);
      startAutoRefresh(instance);
      activeFetches.delete(cacheKey);
      return {
        data,
        success: true,
        source: "network"
      };
    }).catch(e => {
      activeFetches.delete(cacheKey);
      return {
        data: null,
        source: "error",
        success: false,
        error: e
      };
    });
    activeFetches.set(cacheKey, promise);
  }
  return promise;
}

// Start SSE streaming, listens to feature payload changes and triggers a refresh or re-fetch
function startAutoRefresh(instance, forceSSE = false) {
  const key = getKey(instance);
  const cacheKey = getCacheKey(instance);
  const {
    streamingHost,
    streamingHostRequestHeaders
  } = instance.getApiHosts();
  const clientKey = instance.getClientKey();
  if (forceSSE) {
    supportsSSE.add(key);
  }
  if (cacheSettings.backgroundSync && supportsSSE.has(key) && polyfills.EventSource) {
    if (streams.has(key)) return;
    const channel = {
      src: null,
      host: streamingHost,
      clientKey,
      headers: streamingHostRequestHeaders,
      cb: event => {
        try {
          if (event.type === "features-updated") {
            const instances = subscribedInstances.get(key);
            instances && instances.forEach(instance => {
              fetchFeatures(instance);
            });
          } else if (event.type === "features") {
            const json = JSON.parse(event.data);
            onNewFeatureData(key, cacheKey, json);
          }
          // Reset error count on success
          channel.errors = 0;
        } catch (e) {
          onSSEError(channel);
        }
      },
      errors: 0,
      state: "active"
    };
    streams.set(key, channel);
    enableChannel(channel);
  }
}
function onSSEError(channel) {
  if (channel.state === "idle") return;
  channel.errors++;
  if (channel.errors > 3 || channel.src && channel.src.readyState === 2) {
    // exponential backoff after 4 errors, with jitter
    const delay = Math.pow(3, channel.errors - 3) * (1000 + Math.random() * 1000);
    disableChannel(channel);
    setTimeout(() => {
      if (["idle", "active"].includes(channel.state)) return;
      enableChannel(channel);
    }, Math.min(delay, 300000)); // 5 minutes max
  }
}
function disableChannel(channel) {
  if (!channel.src) return;
  channel.src.onopen = null;
  channel.src.onerror = null;
  channel.src.close();
  channel.src = null;
  if (channel.state === "active") {
    channel.state = "disabled";
  }
}
function enableChannel(channel) {
  channel.src = helpers.eventSourceCall({
    host: channel.host,
    clientKey: channel.clientKey,
    headers: channel.headers
  });
  channel.state = "active";
  channel.src.addEventListener("features", channel.cb);
  channel.src.addEventListener("features-updated", channel.cb);
  channel.src.onerror = () => onSSEError(channel);
  channel.src.onopen = () => {
    channel.errors = 0;
  };
}
function destroyChannel(channel, key) {
  disableChannel(channel);
  streams.delete(key);
}
function clearAutoRefresh() {
  // Clear list of which keys are auto-updated
  supportsSSE.clear();

  // Stop listening for any SSE events
  streams.forEach(destroyChannel);

  // Remove all references to GrowthBook instances
  subscribedInstances.clear();

  // Run the idle stream cleanup function
  helpers.stopIdleListener();
}
function startStreaming(instance, options) {
  if (options.streaming) {
    if (!instance.getClientKey()) {
      throw new Error("Must specify clientKey to enable streaming");
    }
    if (options.payload) {
      startAutoRefresh(instance, true);
    }
    subscribe(instance);
  }
}

var validAttributeName = /^[a-zA-Z:_][a-zA-Z0-9:_.-]*$/;
var nullController = {
  revert: function revert() {}
};
var elements = /*#__PURE__*/new Map();
var mutations = /*#__PURE__*/new Set();
function getObserverInit(attr) {
  return attr === 'html' ? {
    childList: true,
    subtree: true,
    attributes: true,
    characterData: true
  } : {
    childList: false,
    subtree: false,
    attributes: true,
    attributeFilter: [attr]
  };
}
function getElementRecord(element) {
  var record = elements.get(element);
  if (!record) {
    record = {
      element: element,
      attributes: {}
    };
    elements.set(element, record);
  }
  return record;
}
function createElementPropertyRecord(el, attr, getCurrentValue, setValue, mutationRunner) {
  var currentValue = getCurrentValue(el);
  var record = {
    isDirty: false,
    originalValue: currentValue,
    virtualValue: currentValue,
    mutations: [],
    el: el,
    _positionTimeout: null,
    observer: new MutationObserver(function () {
      // enact a 1 second timeout that blocks subsequent firing of the
      // observer until the timeout is complete. This will prevent multiple
      // mutations from firing in quick succession, which can cause the
      // mutation to be reverted before the DOM has a chance to update.
      if (attr === 'position' && record._positionTimeout) return;else if (attr === 'position') record._positionTimeout = setTimeout(function () {
        record._positionTimeout = null;
      }, 1000);
      var currentValue = getCurrentValue(el);
      if (attr === 'position' && currentValue.parentNode === record.virtualValue.parentNode && currentValue.insertBeforeNode === record.virtualValue.insertBeforeNode) return;
      if (currentValue === record.virtualValue) return;
      record.originalValue = currentValue;
      mutationRunner(record);
    }),
    mutationRunner: mutationRunner,
    setValue: setValue,
    getCurrentValue: getCurrentValue
  };
  if (attr === 'position' && el.parentNode) {
    record.observer.observe(el.parentNode, {
      childList: true,
      subtree: true,
      attributes: false,
      characterData: false
    });
  } else {
    record.observer.observe(el, getObserverInit(attr));
  }
  return record;
}
function queueIfNeeded(val, record) {
  var currentVal = record.getCurrentValue(record.el);
  record.virtualValue = val;
  if (val && typeof val !== 'string') {
    if (!currentVal || val.parentNode !== currentVal.parentNode || val.insertBeforeNode !== currentVal.insertBeforeNode) {
      record.isDirty = true;
      runDOMUpdates();
    }
  } else if (val !== currentVal) {
    record.isDirty = true;
    runDOMUpdates();
  }
}
function htmlMutationRunner(record) {
  var val = record.originalValue;
  record.mutations.forEach(function (m) {
    return val = m.mutate(val);
  });
  queueIfNeeded(getTransformedHTML(val), record);
}
function classMutationRunner(record) {
  var val = new Set(record.originalValue.split(/\s+/).filter(Boolean));
  record.mutations.forEach(function (m) {
    return m.mutate(val);
  });
  queueIfNeeded(Array.from(val).filter(Boolean).join(' '), record);
}
function attrMutationRunner(record) {
  var val = record.originalValue;
  record.mutations.forEach(function (m) {
    return val = m.mutate(val);
  });
  queueIfNeeded(val, record);
}
function _loadDOMNodes(_ref) {
  var parentSelector = _ref.parentSelector,
    insertBeforeSelector = _ref.insertBeforeSelector;
  var parentNode = document.querySelector(parentSelector);
  if (!parentNode) return null;
  var insertBeforeNode = insertBeforeSelector ? document.querySelector(insertBeforeSelector) : null;
  if (insertBeforeSelector && !insertBeforeNode) return null;
  return {
    parentNode: parentNode,
    insertBeforeNode: insertBeforeNode
  };
}
function positionMutationRunner(record) {
  var val = record.originalValue;
  record.mutations.forEach(function (m) {
    var selectors = m.mutate();
    var newNodes = _loadDOMNodes(selectors);
    val = newNodes || val;
  });
  queueIfNeeded(val, record);
}
var getHTMLValue = function getHTMLValue(el) {
  return el.innerHTML;
};
var setHTMLValue = function setHTMLValue(el, value) {
  return el.innerHTML = value;
};
function getElementHTMLRecord(element) {
  var elementRecord = getElementRecord(element);
  if (!elementRecord.html) {
    elementRecord.html = createElementPropertyRecord(element, 'html', getHTMLValue, setHTMLValue, htmlMutationRunner);
  }
  return elementRecord.html;
}
var getElementPosition = function getElementPosition(el) {
  return {
    parentNode: el.parentElement,
    insertBeforeNode: el.nextElementSibling
  };
};
var setElementPosition = function setElementPosition(el, value) {
  if (value.insertBeforeNode && !value.parentNode.contains(value.insertBeforeNode)) {
    // skip position mutation - insertBeforeNode not a child of parent. happens
    // when mutation observer for indvidual element fires out of order
    return;
  }
  value.parentNode.insertBefore(el, value.insertBeforeNode);
};
function getElementPositionRecord(element) {
  var elementRecord = getElementRecord(element);
  if (!elementRecord.position) {
    elementRecord.position = createElementPropertyRecord(element, 'position', getElementPosition, setElementPosition, positionMutationRunner);
  }
  return elementRecord.position;
}
var setClassValue = function setClassValue(el, val) {
  return val ? el.className = val : el.removeAttribute('class');
};
var getClassValue = function getClassValue(el) {
  return el.className;
};
function getElementClassRecord(el) {
  var elementRecord = getElementRecord(el);
  if (!elementRecord.classes) {
    elementRecord.classes = createElementPropertyRecord(el, 'class', getClassValue, setClassValue, classMutationRunner);
  }
  return elementRecord.classes;
}
var getAttrValue = function getAttrValue(attrName) {
  return function (el) {
    var _el$getAttribute;
    return (_el$getAttribute = el.getAttribute(attrName)) != null ? _el$getAttribute : null;
  };
};
var setAttrValue = function setAttrValue(attrName) {
  return function (el, val) {
    return val !== null ? el.setAttribute(attrName, val) : el.removeAttribute(attrName);
  };
};
function getElementAttributeRecord(el, attr) {
  var elementRecord = getElementRecord(el);
  if (!elementRecord.attributes[attr]) {
    elementRecord.attributes[attr] = createElementPropertyRecord(el, attr, getAttrValue(attr), setAttrValue(attr), attrMutationRunner);
  }
  return elementRecord.attributes[attr];
}
function deleteElementPropertyRecord(el, attr) {
  var element = elements.get(el);
  if (!element) return;
  if (attr === 'html') {
    var _element$html, _element$html$observe;
    (_element$html = element.html) == null ? void 0 : (_element$html$observe = _element$html.observer) == null ? void 0 : _element$html$observe.disconnect();
    delete element.html;
  } else if (attr === 'class') {
    var _element$classes, _element$classes$obse;
    (_element$classes = element.classes) == null ? void 0 : (_element$classes$obse = _element$classes.observer) == null ? void 0 : _element$classes$obse.disconnect();
    delete element.classes;
  } else if (attr === 'position') {
    var _element$position, _element$position$obs;
    (_element$position = element.position) == null ? void 0 : (_element$position$obs = _element$position.observer) == null ? void 0 : _element$position$obs.disconnect();
    delete element.position;
  } else {
    var _element$attributes, _element$attributes$a, _element$attributes$a2;
    (_element$attributes = element.attributes) == null ? void 0 : (_element$attributes$a = _element$attributes[attr]) == null ? void 0 : (_element$attributes$a2 = _element$attributes$a.observer) == null ? void 0 : _element$attributes$a2.disconnect();
    delete element.attributes[attr];
  }
}
var transformContainer;
function getTransformedHTML(html) {
  if (!transformContainer) {
    transformContainer = document.createElement('div');
  }
  transformContainer.innerHTML = html;
  return transformContainer.innerHTML;
}
function setPropertyValue(el, attr, m) {
  if (!m.isDirty) return;
  m.isDirty = false;
  var val = m.virtualValue;
  if (!m.mutations.length) {
    deleteElementPropertyRecord(el, attr);
  }
  m.setValue(el, val);
}
function setValue(m, el) {
  m.html && setPropertyValue(el, 'html', m.html);
  m.classes && setPropertyValue(el, 'class', m.classes);
  m.position && setPropertyValue(el, 'position', m.position);
  Object.keys(m.attributes).forEach(function (attr) {
    setPropertyValue(el, attr, m.attributes[attr]);
  });
}
function runDOMUpdates() {
  elements.forEach(setValue);
} // find or create ElementPropertyRecord, add mutation to it, then run

function startMutating(mutation, element) {
  var record = null;
  if (mutation.kind === 'html') {
    record = getElementHTMLRecord(element);
  } else if (mutation.kind === 'class') {
    record = getElementClassRecord(element);
  } else if (mutation.kind === 'attribute') {
    record = getElementAttributeRecord(element, mutation.attribute);
  } else if (mutation.kind === 'position') {
    record = getElementPositionRecord(element);
  }
  if (!record) return;
  record.mutations.push(mutation);
  record.mutationRunner(record);
} // get (existing) ElementPropertyRecord, remove mutation from it, then run

function stopMutating(mutation, el) {
  var record = null;
  if (mutation.kind === 'html') {
    record = getElementHTMLRecord(el);
  } else if (mutation.kind === 'class') {
    record = getElementClassRecord(el);
  } else if (mutation.kind === 'attribute') {
    record = getElementAttributeRecord(el, mutation.attribute);
  } else if (mutation.kind === 'position') {
    record = getElementPositionRecord(el);
  }
  if (!record) return;
  var index = record.mutations.indexOf(mutation);
  if (index !== -1) record.mutations.splice(index, 1);
  record.mutationRunner(record);
} // maintain list of elements associated with mutation

function refreshElementsSet(mutation) {
  // if a position mutation has already found an element to move, don't move
  // any more elements
  if (mutation.kind === 'position' && mutation.elements.size === 1) return;
  var existingElements = new Set(mutation.elements);
  var matchingElements = document.querySelectorAll(mutation.selector);
  matchingElements.forEach(function (el) {
    if (!existingElements.has(el)) {
      mutation.elements.add(el);
      startMutating(mutation, el);
    }
  });
}
function revertMutation(mutation) {
  mutation.elements.forEach(function (el) {
    return stopMutating(mutation, el);
  });
  mutation.elements.clear();
  mutations["delete"](mutation);
}
function refreshAllElementSets() {
  mutations.forEach(refreshElementsSet);
} // Observer for elements that don't exist in the DOM yet

var observer;
function connectGlobalObserver() {
  if (typeof document === 'undefined') return;
  if (!observer) {
    observer = new MutationObserver(function () {
      refreshAllElementSets();
    });
  }
  refreshAllElementSets();
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: false,
    characterData: false
  });
} // run on init

connectGlobalObserver();
function newMutation(m) {
  // Not in a browser
  if (typeof document === 'undefined') return nullController; // add to global index of mutations

  mutations.add(m); // run refresh on init to establish list of elements associated w/ mutation

  refreshElementsSet(m);
  return {
    revert: function revert() {
      revertMutation(m);
    }
  };
}
function html(selector, mutate) {
  return newMutation({
    kind: 'html',
    elements: new Set(),
    mutate: mutate,
    selector: selector
  });
}
function position(selector, mutate) {
  return newMutation({
    kind: 'position',
    elements: new Set(),
    mutate: mutate,
    selector: selector
  });
}
function classes(selector, mutate) {
  return newMutation({
    kind: 'class',
    elements: new Set(),
    mutate: mutate,
    selector: selector
  });
}
function attribute(selector, attribute, mutate) {
  if (!validAttributeName.test(attribute)) return nullController;
  if (attribute === 'class' || attribute === 'className') {
    return classes(selector, function (classnames) {
      var mutatedClassnames = mutate(Array.from(classnames).join(' '));
      classnames.clear();
      if (!mutatedClassnames) return;
      mutatedClassnames.split(/\s+/g).filter(Boolean).forEach(function (c) {
        return classnames.add(c);
      });
    });
  }
  return newMutation({
    kind: 'attribute',
    attribute: attribute,
    elements: new Set(),
    mutate: mutate,
    selector: selector
  });
}
function declarative(_ref2) {
  var selector = _ref2.selector,
    action = _ref2.action,
    value = _ref2.value,
    attr = _ref2.attribute,
    parentSelector = _ref2.parentSelector,
    insertBeforeSelector = _ref2.insertBeforeSelector;
  if (attr === 'html') {
    if (action === 'append') {
      return html(selector, function (val) {
        return val + (value != null ? value : '');
      });
    } else if (action === 'set') {
      return html(selector, function () {
        return value != null ? value : '';
      });
    }
  } else if (attr === 'class') {
    if (action === 'append') {
      return classes(selector, function (val) {
        if (value) val.add(value);
      });
    } else if (action === 'remove') {
      return classes(selector, function (val) {
        if (value) val["delete"](value);
      });
    } else if (action === 'set') {
      return classes(selector, function (val) {
        val.clear();
        if (value) val.add(value);
      });
    }
  } else if (attr === 'position') {
    if (action === 'set' && parentSelector) {
      return position(selector, function () {
        return {
          insertBeforeSelector: insertBeforeSelector,
          parentSelector: parentSelector
        };
      });
    }
  } else {
    if (action === 'append') {
      return attribute(selector, attr, function (val) {
        return val !== null ? val + (value != null ? value : '') : value != null ? value : '';
      });
    } else if (action === 'set') {
      return attribute(selector, attr, function () {
        return value != null ? value : '';
      });
    } else if (action === 'remove') {
      return attribute(selector, attr, function () {
        return null;
      });
    }
  }
  return nullController;
}
var index = {
  html: html,
  classes: classes,
  attribute: attribute,
  position: position,
  declarative: declarative
};

/* eslint-disable @typescript-eslint/no-explicit-any */

const _regexCache = {};

// The top-level condition evaluation function
function evalCondition(obj, condition,
// Must be included for `condition` to correctly evaluate group Operators
savedGroups) {
  savedGroups = savedGroups || {};
  // Condition is an object, keys are either specific operators or object paths
  // values are either arguments for operators or conditions for paths
  for (const [k, v] of Object.entries(condition)) {
    switch (k) {
      case "$or":
        if (!evalOr(obj, v, savedGroups)) return false;
        break;
      case "$nor":
        if (evalOr(obj, v, savedGroups)) return false;
        break;
      case "$and":
        if (!evalAnd(obj, v, savedGroups)) return false;
        break;
      case "$not":
        if (evalCondition(obj, v, savedGroups)) return false;
        break;
      default:
        if (!evalConditionValue(v, getPath(obj, k), savedGroups)) return false;
    }
  }
  return true;
}

// Return value at dot-separated path of an object
function getPath(obj, path) {
  const parts = path.split(".");
  let current = obj;
  for (let i = 0; i < parts.length; i++) {
    if (current && typeof current === "object" && parts[i] in current) {
      current = current[parts[i]];
    } else {
      return null;
    }
  }
  return current;
}

// Transform a regex string into a real RegExp object
function getRegex(regex, insensitive = false) {
  const cacheKey = `${regex}${insensitive ? "/i" : ""}`;
  if (!_regexCache[cacheKey]) {
    _regexCache[cacheKey] = new RegExp(regex.replace(/([^\\])\//g, "$1\\/"), insensitive ? "i" : undefined);
  }
  return _regexCache[cacheKey];
}

// Evaluate a single value against a condition
function evalConditionValue(condition, value, savedGroups, insensitive = false) {
  // Simple equality comparisons
  if (typeof condition === "string") {
    if (insensitive) {
      return String(value).toLowerCase() === condition.toLowerCase();
    }
    return value + "" === condition;
  }
  if (typeof condition === "number") {
    return value * 1 === condition;
  }
  if (typeof condition === "boolean") {
    return value !== null && !!value === condition;
  }
  if (condition === null) {
    return value === null;
  }
  if (Array.isArray(condition) || !isOperatorObject(condition)) {
    return JSON.stringify(value) === JSON.stringify(condition);
  }

  // This is a special operator condition and we should evaluate each one separately
  for (const op in condition) {
    if (!evalOperatorCondition(op, value, condition[op], savedGroups)) {
      return false;
    }
  }
  return true;
}

// If the object has only keys that start with '$'
function isOperatorObject(obj) {
  const keys = Object.keys(obj);
  return keys.length > 0 && keys.filter(k => k[0] === "$").length === keys.length;
}

// Return the data type of a value
function getType(v) {
  if (v === null) return "null";
  if (Array.isArray(v)) return "array";
  const t = typeof v;
  if (["string", "number", "boolean", "object", "undefined"].includes(t)) {
    return t;
  }
  return "unknown";
}

// At least one element of actual must match the expected condition/value
function elemMatch(actual, expected, savedGroups) {
  if (!Array.isArray(actual)) return false;
  const check = isOperatorObject(expected) ? v => evalConditionValue(expected, v, savedGroups) : v => evalCondition(v, expected, savedGroups);
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] && check(actual[i])) {
      return true;
    }
  }
  return false;
}
function isIn(actual, expected, insensitive = false) {
  if (insensitive) {
    const caseFold = val => typeof val === "string" ? val.toLowerCase() : val;
    // Do an intersection if attribute is an array (insensitive)
    if (Array.isArray(actual)) {
      return actual.some(el => expected.some(exp => caseFold(el) === caseFold(exp)));
    }
    return expected.some(exp => caseFold(actual) === caseFold(exp));
  }
  // Do an intersection if attribute is an array
  if (Array.isArray(actual)) {
    return actual.some(el => expected.includes(el));
  }
  return expected.includes(actual);
}
function isInAll(actual, expected, savedGroups, insensitive = false) {
  if (!Array.isArray(actual)) return false;
  for (let i = 0; i < expected.length; i++) {
    let passed = false;
    for (let j = 0; j < actual.length; j++) {
      if (evalConditionValue(expected[i], actual[j], savedGroups, insensitive)) {
        passed = true;
        break;
      }
    }
    if (!passed) return false;
  }
  return true;
}

// Evaluate a single operator condition
function evalOperatorCondition(operator, actual, expected, savedGroups) {
  switch (operator) {
    case "$veq":
      return paddedVersionString(actual) === paddedVersionString(expected);
    case "$vne":
      return paddedVersionString(actual) !== paddedVersionString(expected);
    case "$vgt":
      return paddedVersionString(actual) > paddedVersionString(expected);
    case "$vgte":
      return paddedVersionString(actual) >= paddedVersionString(expected);
    case "$vlt":
      return paddedVersionString(actual) < paddedVersionString(expected);
    case "$vlte":
      return paddedVersionString(actual) <= paddedVersionString(expected);
    case "$eq":
      return actual === expected;
    case "$ne":
      return actual !== expected;
    case "$lt":
      return actual < expected;
    case "$lte":
      return actual <= expected;
    case "$gt":
      return actual > expected;
    case "$gte":
      return actual >= expected;
    case "$exists":
      // Using `!=` and `==` instead of strict checks so it also matches for undefined
      return expected ? actual != null : actual == null;
    case "$in":
      if (!Array.isArray(expected)) return false;
      return isIn(actual, expected);
    case "$ini":
      if (!Array.isArray(expected)) return false;
      return isIn(actual, expected, true);
    case "$inGroup":
      return isIn(actual, savedGroups[expected] || []);
    case "$notInGroup":
      return !isIn(actual, savedGroups[expected] || []);
    case "$nin":
      if (!Array.isArray(expected)) return false;
      return !isIn(actual, expected);
    case "$nini":
      if (!Array.isArray(expected)) return false;
      return !isIn(actual, expected, true);
    case "$not":
      return !evalConditionValue(expected, actual, savedGroups);
    case "$size":
      if (!Array.isArray(actual)) return false;
      return evalConditionValue(expected, actual.length, savedGroups);
    case "$elemMatch":
      return elemMatch(actual, expected, savedGroups);
    case "$all":
      if (!Array.isArray(expected)) return false;
      return isInAll(actual, expected, savedGroups);
    case "$alli":
      if (!Array.isArray(expected)) return false;
      return isInAll(actual, expected, savedGroups, true);
    case "$regex":
      try {
        return getRegex(expected).test(actual);
      } catch (e) {
        return false;
      }
    case "$regexi":
      try {
        return getRegex(expected, true).test(actual);
      } catch (e) {
        return false;
      }
    case "$type":
      return getType(actual) === expected;
    default:
      console.error("Unknown operator: " + operator);
      return false;
  }
}

// Recursive $or rule
function evalOr(obj, conditions, savedGroups) {
  if (!conditions.length) return true;
  for (let i = 0; i < conditions.length; i++) {
    if (evalCondition(obj, conditions[i], savedGroups)) {
      return true;
    }
  }
  return false;
}

// Recursive $and rule
function evalAnd(obj, conditions, savedGroups) {
  for (let i = 0; i < conditions.length; i++) {
    if (!evalCondition(obj, conditions[i], savedGroups)) {
      return false;
    }
  }
  return true;
}

const EVENT_FEATURE_EVALUATED = "Feature Evaluated";
const EVENT_EXPERIMENT_VIEWED = "Experiment Viewed";
function getForcedFeatureValues(ctx) {
  // Merge user and global values
  const ret = new Map();
  if (ctx.global.forcedFeatureValues) {
    ctx.global.forcedFeatureValues.forEach((v, k) => ret.set(k, v));
  }
  if (ctx.user.forcedFeatureValues) {
    ctx.user.forcedFeatureValues.forEach((v, k) => ret.set(k, v));
  }
  return ret;
}
function getForcedVariations(ctx) {
  // Merge user and global values
  if (ctx.global.forcedVariations && ctx.user.forcedVariations) {
    return {
      ...ctx.global.forcedVariations,
      ...ctx.user.forcedVariations
    };
  } else if (ctx.global.forcedVariations) {
    return ctx.global.forcedVariations;
  } else if (ctx.user.forcedVariations) {
    return ctx.user.forcedVariations;
  } else {
    return {};
  }
}
async function safeCall(fn) {
  try {
    await fn();
  } catch (e) {
    // Do nothing
  }
}
function onExperimentViewed(ctx, experiment, result) {
  // Make sure a tracking callback is only fired once per unique experiment
  if (ctx.user.trackedExperiments) {
    const k = getExperimentDedupeKey(experiment, result);
    if (ctx.user.trackedExperiments.has(k)) {
      return [];
    }
    ctx.user.trackedExperiments.add(k);
  }
  if (ctx.user.enableDevMode && ctx.user.devLogs) {
    ctx.user.devLogs.push({
      experiment,
      result,
      timestamp: Date.now().toString(),
      logType: "experiment"
    });
  }
  const calls = [];
  if (ctx.global.trackingCallback) {
    const cb = ctx.global.trackingCallback;
    calls.push(safeCall(() => cb(experiment, result, ctx.user)));
  }
  if (ctx.user.trackingCallback) {
    const cb = ctx.user.trackingCallback;
    calls.push(safeCall(() => cb(experiment, result)));
  }
  if (ctx.global.eventLogger) {
    const cb = ctx.global.eventLogger;
    calls.push(safeCall(() => cb(EVENT_EXPERIMENT_VIEWED, {
      experimentId: experiment.key,
      variationId: result.key,
      hashAttribute: result.hashAttribute,
      hashValue: result.hashValue
    }, ctx.user)));
  }
  return calls;
}
function onFeatureUsage(ctx, key, ret) {
  // Only track a feature once, unless the assigned value changed
  if (ctx.user.trackedFeatureUsage) {
    const stringifiedValue = JSON.stringify(ret.value);
    if (ctx.user.trackedFeatureUsage[key] === stringifiedValue) return;
    ctx.user.trackedFeatureUsage[key] = stringifiedValue;
    if (ctx.user.enableDevMode && ctx.user.devLogs) {
      ctx.user.devLogs.push({
        featureKey: key,
        result: ret,
        timestamp: Date.now().toString(),
        logType: "feature"
      });
    }
  }
  if (ctx.global.onFeatureUsage) {
    const cb = ctx.global.onFeatureUsage;
    safeCall(() => cb(key, ret, ctx.user));
  }
  if (ctx.user.onFeatureUsage) {
    const cb = ctx.user.onFeatureUsage;
    safeCall(() => cb(key, ret));
  }
  if (ctx.global.eventLogger) {
    const cb = ctx.global.eventLogger;
    safeCall(() => cb(EVENT_FEATURE_EVALUATED, {
      feature: key,
      source: ret.source,
      value: ret.value,
      ruleId: ret.source === "defaultValue" ? "$default" : ret.ruleId || "",
      variationId: ret.experimentResult ? ret.experimentResult.key : ""
    }, ctx.user));
  }
}
function evalFeature(id, ctx) {
  if (ctx.stack.evaluatedFeatures.has(id)) {
    return getFeatureResult(ctx, id, null, "cyclicPrerequisite");
  }
  ctx.stack.evaluatedFeatures.add(id);
  ctx.stack.id = id;

  // Global override
  const forcedValues = getForcedFeatureValues(ctx);
  if (forcedValues.has(id)) {
    return getFeatureResult(ctx, id, forcedValues.get(id), "override");
  }

  // Unknown feature id
  if (!ctx.global.features || !ctx.global.features[id]) {
    return getFeatureResult(ctx, id, null, "unknownFeature");
  }

  // Get the feature
  const feature = ctx.global.features[id];

  // Loop through the rules
  if (feature.rules) {
    const evaluatedFeatures = new Set(ctx.stack.evaluatedFeatures);
    rules: for (const rule of feature.rules) {
      // If there are prerequisite flag(s), evaluate them
      if (rule.parentConditions) {
        for (const parentCondition of rule.parentConditions) {
          ctx.stack.evaluatedFeatures = new Set(evaluatedFeatures);
          const parentResult = evalFeature(parentCondition.id, ctx);
          // break out for cyclic prerequisites
          if (parentResult.source === "cyclicPrerequisite") {
            return getFeatureResult(ctx, id, null, "cyclicPrerequisite");
          }
          const evalObj = {
            value: parentResult.value
          };
          const evaled = evalCondition(evalObj, parentCondition.condition || {});
          if (!evaled) {
            // blocking prerequisite eval failed: feature evaluation fails
            if (parentCondition.gate) {
              return getFeatureResult(ctx, id, null, "prerequisite");
            }
            continue rules;
          }
        }
      }

      // If there are filters for who is included (e.g. namespaces)
      if (rule.filters && isFilteredOut(rule.filters, ctx)) {
        continue;
      }

      // Feature value is being forced
      if ("force" in rule) {
        // If it's a conditional rule, skip if the condition doesn't pass
        if (rule.condition && !conditionPasses(rule.condition, ctx)) {
          continue;
        }

        // If this is a percentage rollout, skip if not included
        if (!isIncludedInRollout(ctx, rule.seed || id, rule.hashAttribute, ctx.user.saveStickyBucketAssignmentDoc && !rule.disableStickyBucketing ? rule.fallbackAttribute : undefined, rule.range, rule.coverage, rule.hashVersion)) {
          continue;
        }

        // If this was a remotely evaluated experiment, fire the tracking callbacks
        if (rule.tracks) {
          rule.tracks.forEach(t => {
            const calls = onExperimentViewed(ctx, t.experiment, t.result);
            if (!calls.length && ctx.global.saveDeferredTrack) {
              ctx.global.saveDeferredTrack({
                experiment: t.experiment,
                result: t.result
              });
            }
          });
        }
        return getFeatureResult(ctx, id, rule.force, "force", rule.id);
      }
      if (!rule.variations) {
        continue;
      }

      // For experiment rules, run an experiment
      const exp = {
        variations: rule.variations,
        key: rule.key || id
      };
      if ("coverage" in rule) exp.coverage = rule.coverage;
      if (rule.weights) exp.weights = rule.weights;
      if (rule.hashAttribute) exp.hashAttribute = rule.hashAttribute;
      if (rule.fallbackAttribute) exp.fallbackAttribute = rule.fallbackAttribute;
      if (rule.disableStickyBucketing) exp.disableStickyBucketing = rule.disableStickyBucketing;
      if (rule.bucketVersion !== undefined) exp.bucketVersion = rule.bucketVersion;
      if (rule.minBucketVersion !== undefined) exp.minBucketVersion = rule.minBucketVersion;
      if (rule.namespace) exp.namespace = rule.namespace;
      if (rule.meta) exp.meta = rule.meta;
      if (rule.ranges) exp.ranges = rule.ranges;
      if (rule.name) exp.name = rule.name;
      if (rule.phase) exp.phase = rule.phase;
      if (rule.seed) exp.seed = rule.seed;
      if (rule.hashVersion) exp.hashVersion = rule.hashVersion;
      if (rule.filters) exp.filters = rule.filters;
      if (rule.condition) exp.condition = rule.condition;

      // Only return a value if the user is part of the experiment
      const {
        result
      } = runExperiment(exp, id, ctx);
      ctx.global.onExperimentEval && ctx.global.onExperimentEval(exp, result);
      if (result.inExperiment && !result.passthrough) {
        return getFeatureResult(ctx, id, result.value, "experiment", rule.id, exp, result);
      }
    }
  }

  // Fall back to using the default value
  return getFeatureResult(ctx, id, feature.defaultValue === undefined ? null : feature.defaultValue, "defaultValue");
}
function runExperiment(experiment, featureId, ctx) {
  const key = experiment.key;
  const numVariations = experiment.variations.length;

  // 1. If experiment has less than 2 variations, return immediately
  if (numVariations < 2) {
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }

  // 2. If the context is disabled, return immediately
  if (ctx.global.enabled === false || ctx.user.enabled === false) {
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }

  // 2.5. Merge in experiment overrides from the context
  experiment = mergeOverrides(experiment, ctx);

  // 2.6 New, more powerful URL targeting
  if (experiment.urlPatterns && !isURLTargeted(ctx.user.url || "", experiment.urlPatterns)) {
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }

  // 3. If a variation is forced from a querystring, return the forced variation
  const qsOverride = getQueryStringOverride(key, ctx.user.url || "", numVariations);
  if (qsOverride !== null) {
    return {
      result: getExperimentResult(ctx, experiment, qsOverride, false, featureId)
    };
  }

  // 4. If a variation is forced in the context, return the forced variation
  const forcedVariations = getForcedVariations(ctx);
  if (key in forcedVariations) {
    const variation = forcedVariations[key];
    return {
      result: getExperimentResult(ctx, experiment, variation, false, featureId)
    };
  }

  // 5. Exclude if a draft experiment or not active
  if (experiment.status === "draft" || experiment.active === false) {
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }

  // 6. Get the hash attribute and return if empty
  const {
    hashAttribute,
    hashValue
  } = getHashAttribute(ctx, experiment.hashAttribute, ctx.user.saveStickyBucketAssignmentDoc && !experiment.disableStickyBucketing ? experiment.fallbackAttribute : undefined);
  if (!hashValue) {
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  let assigned = -1;
  let foundStickyBucket = false;
  let stickyBucketVersionIsBlocked = false;
  if (ctx.user.saveStickyBucketAssignmentDoc && !experiment.disableStickyBucketing) {
    const {
      variation,
      versionIsBlocked
    } = getStickyBucketVariation({
      ctx,
      expKey: experiment.key,
      expBucketVersion: experiment.bucketVersion,
      expHashAttribute: experiment.hashAttribute,
      expFallbackAttribute: experiment.fallbackAttribute,
      expMinBucketVersion: experiment.minBucketVersion,
      expMeta: experiment.meta
    });
    foundStickyBucket = variation >= 0;
    assigned = variation;
    stickyBucketVersionIsBlocked = !!versionIsBlocked;
  }

  // Some checks are not needed if we already have a sticky bucket
  if (!foundStickyBucket) {
    // 7. Exclude if user is filtered out (used to be called "namespace")
    if (experiment.filters) {
      if (isFilteredOut(experiment.filters, ctx)) {
        return {
          result: getExperimentResult(ctx, experiment, -1, false, featureId)
        };
      }
    } else if (experiment.namespace && !inNamespace(hashValue, experiment.namespace)) {
      return {
        result: getExperimentResult(ctx, experiment, -1, false, featureId)
      };
    }

    // 7.5. Exclude if experiment.include returns false or throws
    if (experiment.include && !isIncluded(experiment.include)) {
      return {
        result: getExperimentResult(ctx, experiment, -1, false, featureId)
      };
    }

    // 8. Exclude if condition is false
    if (experiment.condition && !conditionPasses(experiment.condition, ctx)) {
      return {
        result: getExperimentResult(ctx, experiment, -1, false, featureId)
      };
    }

    // 8.05. Exclude if prerequisites are not met
    if (experiment.parentConditions) {
      const evaluatedFeatures = new Set(ctx.stack.evaluatedFeatures);
      for (const parentCondition of experiment.parentConditions) {
        ctx.stack.evaluatedFeatures = new Set(evaluatedFeatures);
        const parentResult = evalFeature(parentCondition.id, ctx);
        // break out for cyclic prerequisites
        if (parentResult.source === "cyclicPrerequisite") {
          return {
            result: getExperimentResult(ctx, experiment, -1, false, featureId)
          };
        }
        const evalObj = {
          value: parentResult.value
        };
        if (!evalCondition(evalObj, parentCondition.condition || {})) {
          return {
            result: getExperimentResult(ctx, experiment, -1, false, featureId)
          };
        }
      }
    }

    // 8.1. Exclude if user is not in a required group
    if (experiment.groups && !hasGroupOverlap(experiment.groups, ctx)) {
      return {
        result: getExperimentResult(ctx, experiment, -1, false, featureId)
      };
    }
  }

  // 8.2. Old style URL targeting
  if (experiment.url && !urlIsValid(experiment.url, ctx)) {
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }

  // 9. Get the variation from the sticky bucket or get bucket ranges and choose variation
  const n = hash(experiment.seed || key, hashValue, experiment.hashVersion || 1);
  if (n === null) {
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }
  if (!foundStickyBucket) {
    const ranges = experiment.ranges || getBucketRanges(numVariations, experiment.coverage === undefined ? 1 : experiment.coverage, experiment.weights);
    assigned = chooseVariation(n, ranges);
  }

  // 9.5 Unenroll if any prior sticky buckets are blocked by version
  if (stickyBucketVersionIsBlocked) {
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId, undefined, true)
    };
  }

  // 10. Return if not in experiment
  if (assigned < 0) {
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }

  // 11. Experiment has a forced variation
  if ("force" in experiment) {
    return {
      result: getExperimentResult(ctx, experiment, experiment.force === undefined ? -1 : experiment.force, false, featureId)
    };
  }

  // 12. Exclude if in QA mode
  if (ctx.global.qaMode || ctx.user.qaMode) {
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }

  // 12.5. Exclude if experiment is stopped
  if (experiment.status === "stopped") {
    return {
      result: getExperimentResult(ctx, experiment, -1, false, featureId)
    };
  }

  // 13. Build the result object
  const result = getExperimentResult(ctx, experiment, assigned, true, featureId, n, foundStickyBucket);

  // 13.5. Persist sticky bucket
  if (ctx.user.saveStickyBucketAssignmentDoc && !experiment.disableStickyBucketing) {
    const {
      changed,
      key: attrKey,
      doc
    } = generateStickyBucketAssignmentDoc(ctx, hashAttribute, toString(hashValue), {
      [getStickyBucketExperimentKey(experiment.key, experiment.bucketVersion)]: result.key
    });
    if (changed) {
      // update local docs
      ctx.user.stickyBucketAssignmentDocs = ctx.user.stickyBucketAssignmentDocs || {};
      ctx.user.stickyBucketAssignmentDocs[attrKey] = doc;
      // save doc
      ctx.user.saveStickyBucketAssignmentDoc(doc);
    }
  }

  // 14. Fire the tracking callback(s)
  // Store the promise in case we're awaiting it (ex: browser url redirects)
  const trackingCalls = onExperimentViewed(ctx, experiment, result);
  if (trackingCalls.length === 0 && ctx.global.saveDeferredTrack) {
    ctx.global.saveDeferredTrack({
      experiment,
      result
    });
  }
  const trackingCall = !trackingCalls.length ? undefined : trackingCalls.length === 1 ? trackingCalls[0] : Promise.all(trackingCalls).then(() => {});

  // 14.1 Keep track of completed changeIds
  "changeId" in experiment && experiment.changeId && ctx.global.recordChangeId && ctx.global.recordChangeId(experiment.changeId);
  return {
    result,
    trackingCall
  };
}
function getFeatureResult(ctx, key, value, source, ruleId, experiment, result) {
  const ret = {
    value,
    on: !!value,
    off: !value,
    source,
    ruleId: ruleId || ""
  };
  if (experiment) ret.experiment = experiment;
  if (result) ret.experimentResult = result;

  // Track the usage of this feature in real-time
  if (source !== "override") {
    onFeatureUsage(ctx, key, ret);
  }
  return ret;
}
function getAttributes(ctx) {
  return {
    ...ctx.user.attributes,
    ...ctx.user.attributeOverrides
  };
}
function conditionPasses(condition, ctx) {
  return evalCondition(getAttributes(ctx), condition, ctx.global.savedGroups || {});
}
function isFilteredOut(filters, ctx) {
  return filters.some(filter => {
    const {
      hashValue
    } = getHashAttribute(ctx, filter.attribute);
    if (!hashValue) return true;
    const n = hash(filter.seed, hashValue, filter.hashVersion || 2);
    if (n === null) return true;
    return !filter.ranges.some(r => inRange(n, r));
  });
}
function isIncludedInRollout(ctx, seed, hashAttribute, fallbackAttribute, range, coverage, hashVersion) {
  if (!range && coverage === undefined) return true;
  if (!range && coverage === 0) return false;
  const {
    hashValue
  } = getHashAttribute(ctx, hashAttribute, fallbackAttribute);
  if (!hashValue) {
    return false;
  }
  const n = hash(seed, hashValue, hashVersion || 1);
  if (n === null) return false;
  return range ? inRange(n, range) : coverage !== undefined ? n <= coverage : true;
}
function getExperimentResult(ctx, experiment, variationIndex, hashUsed, featureId, bucket, stickyBucketUsed) {
  let inExperiment = true;
  // If assigned variation is not valid, use the baseline and mark the user as not in the experiment
  if (variationIndex < 0 || variationIndex >= experiment.variations.length) {
    variationIndex = 0;
    inExperiment = false;
  }
  const {
    hashAttribute,
    hashValue
  } = getHashAttribute(ctx, experiment.hashAttribute, ctx.user.saveStickyBucketAssignmentDoc && !experiment.disableStickyBucketing ? experiment.fallbackAttribute : undefined);
  const meta = experiment.meta ? experiment.meta[variationIndex] : {};
  const res = {
    key: meta.key || "" + variationIndex,
    featureId,
    inExperiment,
    hashUsed,
    variationId: variationIndex,
    value: experiment.variations[variationIndex],
    hashAttribute,
    hashValue,
    stickyBucketUsed: !!stickyBucketUsed
  };
  if (meta.name) res.name = meta.name;
  if (bucket !== undefined) res.bucket = bucket;
  if (meta.passthrough) res.passthrough = meta.passthrough;
  return res;
}
function mergeOverrides(experiment, ctx) {
  const key = experiment.key;
  const o = ctx.global.overrides;
  if (o && o[key]) {
    experiment = Object.assign({}, experiment, o[key]);
    if (typeof experiment.url === "string") {
      experiment.url = getUrlRegExp(
      // eslint-disable-next-line
      experiment.url);
    }
  }
  return experiment;
}
function getHashAttribute(ctx, attr, fallback) {
  let hashAttribute = attr || "id";
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let hashValue = "";
  const attributes = getAttributes(ctx);
  if (attributes[hashAttribute]) {
    hashValue = attributes[hashAttribute];
  }

  // if no match, try fallback
  if (!hashValue && fallback) {
    if (attributes[fallback]) {
      hashValue = attributes[fallback];
    }
    if (hashValue) {
      hashAttribute = fallback;
    }
  }
  return {
    hashAttribute,
    hashValue
  };
}
function urlIsValid(urlRegex, ctx) {
  const url = ctx.user.url;
  if (!url) return false;
  const pathOnly = url.replace(/^https?:\/\//, "").replace(/^[^/]*\//, "/");
  if (urlRegex.test(url)) return true;
  if (urlRegex.test(pathOnly)) return true;
  return false;
}
function hasGroupOverlap(expGroups, ctx) {
  const groups = ctx.global.groups || {};
  for (let i = 0; i < expGroups.length; i++) {
    if (groups[expGroups[i]]) return true;
  }
  return false;
}
function getStickyBucketVariation({
  ctx,
  expKey,
  expBucketVersion,
  expHashAttribute,
  expFallbackAttribute,
  expMinBucketVersion,
  expMeta
}) {
  expBucketVersion = expBucketVersion || 0;
  expMinBucketVersion = expMinBucketVersion || 0;
  expHashAttribute = expHashAttribute || "id";
  expMeta = expMeta || [];
  const id = getStickyBucketExperimentKey(expKey, expBucketVersion);
  const assignments = getStickyBucketAssignments(ctx, expHashAttribute, expFallbackAttribute);

  // users with any blocked bucket version (0 to minExperimentBucketVersion - 1) are excluded from the test
  if (expMinBucketVersion > 0) {
    for (let i = 0; i < expMinBucketVersion; i++) {
      const blockedKey = getStickyBucketExperimentKey(expKey, i);
      if (assignments[blockedKey] !== undefined) {
        return {
          variation: -1,
          versionIsBlocked: true
        };
      }
    }
  }
  const variationKey = assignments[id];
  if (variationKey === undefined)
    // no assignment found
    return {
      variation: -1
    };
  const variation = expMeta.findIndex(m => m.key === variationKey);
  if (variation < 0)
    // invalid assignment, treat as "no assignment found"
    return {
      variation: -1
    };
  return {
    variation
  };
}
function getStickyBucketExperimentKey(experimentKey, experimentBucketVersion) {
  experimentBucketVersion = experimentBucketVersion || 0;
  return `${experimentKey}__${experimentBucketVersion}`;
}
function getStickyBucketAttributeKey(attributeName, attributeValue) {
  return `${attributeName}||${attributeValue}`;
}
function getStickyBucketAssignments(ctx, expHashAttribute, expFallbackAttribute) {
  if (!ctx.user.stickyBucketAssignmentDocs) return {};
  const {
    hashAttribute,
    hashValue
  } = getHashAttribute(ctx, expHashAttribute);
  const hashKey = getStickyBucketAttributeKey(hashAttribute, toString(hashValue));
  const {
    hashAttribute: fallbackAttribute,
    hashValue: fallbackValue
  } = getHashAttribute(ctx, expFallbackAttribute);
  const fallbackKey = fallbackValue ? getStickyBucketAttributeKey(fallbackAttribute, toString(fallbackValue)) : null;
  const assignments = {};
  if (fallbackKey && ctx.user.stickyBucketAssignmentDocs[fallbackKey]) {
    Object.assign(assignments, ctx.user.stickyBucketAssignmentDocs[fallbackKey].assignments || {});
  }
  if (ctx.user.stickyBucketAssignmentDocs[hashKey]) {
    Object.assign(assignments, ctx.user.stickyBucketAssignmentDocs[hashKey].assignments || {});
  }
  return assignments;
}
function generateStickyBucketAssignmentDoc(ctx, attributeName, attributeValue, assignments) {
  const key = getStickyBucketAttributeKey(attributeName, attributeValue);
  const existingAssignments = ctx.user.stickyBucketAssignmentDocs && ctx.user.stickyBucketAssignmentDocs[key] ? ctx.user.stickyBucketAssignmentDocs[key].assignments || {} : {};
  const newAssignments = {
    ...existingAssignments,
    ...assignments
  };
  const changed = JSON.stringify(existingAssignments) !== JSON.stringify(newAssignments);
  return {
    key,
    doc: {
      attributeName,
      attributeValue,
      assignments: newAssignments
    },
    changed
  };
}
function deriveStickyBucketIdentifierAttributes(ctx, data) {
  const attributes = new Set();
  const features = data && data.features ? data.features : ctx.global.features || {};
  const experiments = data && data.experiments ? data.experiments : ctx.global.experiments || [];
  Object.keys(features).forEach(id => {
    const feature = features[id];
    if (feature.rules) {
      for (const rule of feature.rules) {
        if (rule.variations) {
          attributes.add(rule.hashAttribute || "id");
          if (rule.fallbackAttribute) {
            attributes.add(rule.fallbackAttribute);
          }
        }
      }
    }
  });
  experiments.map(experiment => {
    attributes.add(experiment.hashAttribute || "id");
    if (experiment.fallbackAttribute) {
      attributes.add(experiment.fallbackAttribute);
    }
  });
  return Array.from(attributes);
}
async function getAllStickyBucketAssignmentDocs(ctx, stickyBucketService, data) {
  const attributes = getStickyBucketAttributes(ctx, data);
  return stickyBucketService.getAllAssignments(attributes);
}
function getStickyBucketAttributes(ctx, data) {
  const attributes = {};
  const stickyBucketIdentifierAttributes = deriveStickyBucketIdentifierAttributes(ctx, data);
  stickyBucketIdentifierAttributes.forEach(attr => {
    const {
      hashValue
    } = getHashAttribute(ctx, attr);
    attributes[attr] = toString(hashValue);
  });
  return attributes;
}
async function decryptPayload(data, decryptionKey, subtle) {
  data = {
    ...data
  };
  if (data.encryptedFeatures) {
    try {
      data.features = JSON.parse(await decrypt(data.encryptedFeatures, decryptionKey, subtle));
    } catch (e) {
      console.error(e);
    }
    delete data.encryptedFeatures;
  }
  if (data.encryptedExperiments) {
    try {
      data.experiments = JSON.parse(await decrypt(data.encryptedExperiments, decryptionKey, subtle));
    } catch (e) {
      console.error(e);
    }
    delete data.encryptedExperiments;
  }
  if (data.encryptedSavedGroups) {
    try {
      data.savedGroups = JSON.parse(await decrypt(data.encryptedSavedGroups, decryptionKey, subtle));
    } catch (e) {
      console.error(e);
    }
    delete data.encryptedSavedGroups;
  }
  return data;
}
function getApiHosts(options) {
  const defaultHost = options.apiHost || "https://cdn.growthbook.io";
  return {
    apiHost: defaultHost.replace(/\/*$/, ""),
    streamingHost: (options.streamingHost || defaultHost).replace(/\/*$/, ""),
    apiRequestHeaders: options.apiHostRequestHeaders,
    streamingHostRequestHeaders: options.streamingHostRequestHeaders
  };
}
function getExperimentDedupeKey(experiment, result) {
  return result.hashAttribute + result.hashValue + experiment.key + result.variationId;
}

const isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
const SDK_VERSION$1 = loadSDKVersion();
class GrowthBook {
  // context is technically private, but some tools depend on it so we can't mangle the name

  // Properties and methods that start with "_" are mangled by Terser (saves ~150 bytes)

  constructor(options) {
    options = options || {};
    // These properties are all initialized in the constructor instead of above
    // This saves ~80 bytes in the final output
    this.version = SDK_VERSION$1;
    this._options = this.context = options;
    this._renderer = options.renderer || null;
    this._trackedExperiments = new Set();
    this._completedChangeIds = new Set();
    this._trackedFeatures = {};
    this.debug = !!options.debug;
    this._subscriptions = new Set();
    this.ready = false;
    this._assigned = new Map();
    this._activeAutoExperiments = new Map();
    this._triggeredExpKeys = new Set();
    this._initialized = false;
    this._redirectedUrl = "";
    this._deferredTrackingCalls = new Map();
    this._autoExperimentsAllowed = !options.disableExperimentsOnLoad;
    this._destroyCallbacks = [];
    this.logs = [];
    this.log = this.log.bind(this);
    this._saveDeferredTrack = this._saveDeferredTrack.bind(this);
    this._onExperimentEval = this._onExperimentEval.bind(this);
    this._fireSubscriptions = this._fireSubscriptions.bind(this);
    this._recordChangedId = this._recordChangedId.bind(this);
    if (options.remoteEval) {
      if (options.decryptionKey) {
        throw new Error("Encryption is not available for remoteEval");
      }
      if (!options.clientKey) {
        throw new Error("Missing clientKey");
      }
      let isGbHost = false;
      try {
        isGbHost = !!new URL(options.apiHost || "").hostname.match(/growthbook\.io$/i);
      } catch (e) {
        // ignore invalid URLs
      }
      if (isGbHost) {
        throw new Error("Cannot use remoteEval on GrowthBook Cloud");
      }
    } else {
      if (options.cacheKeyAttributes) {
        throw new Error("cacheKeyAttributes are only used for remoteEval");
      }
    }
    if (options.stickyBucketService) {
      const s = options.stickyBucketService;
      this._saveStickyBucketAssignmentDoc = doc => {
        return s.saveAssignments(doc);
      };
    }
    if (options.plugins) {
      for (const plugin of options.plugins) {
        plugin(this);
      }
    }
    if (options.features) {
      this.ready = true;
    }
    if (isBrowser && options.enableDevMode) {
      window._growthbook = this;
      document.dispatchEvent(new Event("gbloaded"));
    }
    if (options.experiments) {
      this.ready = true;
      this._updateAllAutoExperiments();
    }

    // Hydrate sticky bucket service
    if (this._options.stickyBucketService && this._options.stickyBucketAssignmentDocs) {
      for (const key in this._options.stickyBucketAssignmentDocs) {
        const doc = this._options.stickyBucketAssignmentDocs[key];
        if (doc) {
          this._options.stickyBucketService.saveAssignments(doc).catch(() => {
            // Ignore hydration errors
          });
        }
      }
    }

    // Legacy - passing in features/experiments into the constructor instead of using init
    if (this.ready) {
      this.refreshStickyBuckets(this.getPayload());
    }
  }
  async setPayload(payload) {
    this._payload = payload;
    const data = await decryptPayload(payload, this._options.decryptionKey);
    this._decryptedPayload = data;
    await this.refreshStickyBuckets(data);
    if (data.features) {
      this._options.features = data.features;
    }
    if (data.savedGroups) {
      this._options.savedGroups = data.savedGroups;
    }
    if (data.experiments) {
      this._options.experiments = data.experiments;
      this._updateAllAutoExperiments();
    }
    this.ready = true;
    this._render();
  }
  initSync(options) {
    this._initialized = true;
    const payload = options.payload;
    if (payload.encryptedExperiments || payload.encryptedFeatures) {
      throw new Error("initSync does not support encrypted payloads");
    }
    if (this._options.stickyBucketService && !this._options.stickyBucketAssignmentDocs) {
      this._options.stickyBucketAssignmentDocs = this.generateStickyBucketAssignmentDocsSync(this._options.stickyBucketService, payload);
    }
    this._payload = payload;
    this._decryptedPayload = payload;
    if (payload.features) {
      this._options.features = payload.features;
    }
    if (payload.experiments) {
      this._options.experiments = payload.experiments;
      this._updateAllAutoExperiments();
    }
    this.ready = true;
    startStreaming(this, options);
    return this;
  }
  async init(options) {
    this._initialized = true;
    options = options || {};
    if (options.cacheSettings) {
      configureCache(options.cacheSettings);
    }
    if (options.payload) {
      await this.setPayload(options.payload);
      startStreaming(this, options);
      return {
        success: true,
        source: "init"
      };
    } else {
      const {
        data,
        ...res
      } = await this._refresh({
        ...options,
        allowStale: true
      });
      startStreaming(this, options);
      await this.setPayload(data || {});
      return res;
    }
  }

  /** @deprecated Use {@link init} */
  async loadFeatures(options) {
    options = options || {};
    await this.init({
      skipCache: options.skipCache,
      timeout: options.timeout,
      streaming: (this._options.backgroundSync ?? true) && (options.autoRefresh || this._options.subscribeToChanges)
    });
  }
  async refreshFeatures(options) {
    const res = await this._refresh({
      ...(options || {}),
      allowStale: false
    });
    if (res.data) {
      await this.setPayload(res.data);
    }
  }
  getApiInfo() {
    return [this.getApiHosts().apiHost, this.getClientKey()];
  }
  getApiHosts() {
    return getApiHosts(this._options);
  }
  getClientKey() {
    return this._options.clientKey || "";
  }
  getPayload() {
    return this._payload || {
      features: this.getFeatures(),
      experiments: this.getExperiments()
    };
  }
  getDecryptedPayload() {
    return this._decryptedPayload || this.getPayload();
  }
  isRemoteEval() {
    return this._options.remoteEval || false;
  }
  getCacheKeyAttributes() {
    return this._options.cacheKeyAttributes;
  }
  async _refresh({
    timeout,
    skipCache,
    allowStale,
    streaming
  }) {
    if (!this._options.clientKey) {
      throw new Error("Missing clientKey");
    }
    // Trigger refresh in feature repository
    return refreshFeatures({
      instance: this,
      timeout,
      skipCache: skipCache || this._options.disableCache,
      allowStale,
      backgroundSync: streaming ?? this._options.backgroundSync ?? true
    });
  }
  _render() {
    if (this._renderer) {
      try {
        this._renderer();
      } catch (e) {
        console.error("Failed to render", e);
      }
    }
  }

  /** @deprecated Use {@link setPayload} */
  setFeatures(features) {
    this._options.features = features;
    this.ready = true;
    this._render();
  }

  /** @deprecated Use {@link setPayload} */
  async setEncryptedFeatures(encryptedString, decryptionKey, subtle) {
    const featuresJSON = await decrypt(encryptedString, decryptionKey || this._options.decryptionKey, subtle);
    this.setFeatures(JSON.parse(featuresJSON));
  }

  /** @deprecated Use {@link setPayload} */
  setExperiments(experiments) {
    this._options.experiments = experiments;
    this.ready = true;
    this._updateAllAutoExperiments();
  }

  /** @deprecated Use {@link setPayload} */
  async setEncryptedExperiments(encryptedString, decryptionKey, subtle) {
    const experimentsJSON = await decrypt(encryptedString, decryptionKey || this._options.decryptionKey, subtle);
    this.setExperiments(JSON.parse(experimentsJSON));
  }
  async setAttributes(attributes) {
    this._options.attributes = attributes;
    if (this._options.stickyBucketService) {
      await this.refreshStickyBuckets();
    }
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render();
    this._updateAllAutoExperiments();
  }
  async updateAttributes(attributes) {
    return this.setAttributes({
      ...this._options.attributes,
      ...attributes
    });
  }
  async setAttributeOverrides(overrides) {
    this._options.attributeOverrides = overrides;
    if (this._options.stickyBucketService) {
      await this.refreshStickyBuckets();
    }
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render();
    this._updateAllAutoExperiments();
  }
  async setForcedVariations(vars) {
    this._options.forcedVariations = vars || {};
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      return;
    }
    this._render();
    this._updateAllAutoExperiments();
  }

  // eslint-disable-next-line
  setForcedFeatures(map) {
    this._options.forcedFeatureValues = map;
    this._render();
  }
  async setURL(url) {
    if (url === this._options.url) return;
    this._options.url = url;
    this._redirectedUrl = "";
    if (this._options.remoteEval) {
      await this._refreshForRemoteEval();
      this._updateAllAutoExperiments(true);
      return;
    }
    this._updateAllAutoExperiments(true);
  }
  getAttributes() {
    return {
      ...this._options.attributes,
      ...this._options.attributeOverrides
    };
  }
  getForcedVariations() {
    return this._options.forcedVariations || {};
  }
  getForcedFeatures() {
    // eslint-disable-next-line
    return this._options.forcedFeatureValues || new Map();
  }
  getStickyBucketAssignmentDocs() {
    return this._options.stickyBucketAssignmentDocs || {};
  }
  getUrl() {
    return this._options.url || "";
  }
  getFeatures() {
    return this._options.features || {};
  }
  getExperiments() {
    return this._options.experiments || [];
  }
  getCompletedChangeIds() {
    return Array.from(this._completedChangeIds);
  }
  subscribe(cb) {
    this._subscriptions.add(cb);
    return () => {
      this._subscriptions.delete(cb);
    };
  }
  async _refreshForRemoteEval() {
    if (!this._options.remoteEval) return;
    if (!this._initialized) return;
    const res = await this._refresh({
      allowStale: false
    });
    if (res.data) {
      await this.setPayload(res.data);
    }
  }
  getAllResults() {
    return new Map(this._assigned);
  }
  onDestroy(cb) {
    this._destroyCallbacks.push(cb);
  }
  isDestroyed() {
    return !!this._destroyed;
  }
  destroy(options) {
    options = options || {};
    this._destroyed = true;

    // Custom callbacks
    // Do this first in case it needs access to the below data that is cleared
    this._destroyCallbacks.forEach(cb => {
      try {
        cb();
      } catch (e) {
        console.error(e);
      }
    });

    // Release references to save memory
    this._subscriptions.clear();
    this._assigned.clear();
    this._trackedExperiments.clear();
    this._completedChangeIds.clear();
    this._deferredTrackingCalls.clear();
    this._trackedFeatures = {};
    this._destroyCallbacks = [];
    this._payload = undefined;
    this._saveStickyBucketAssignmentDoc = undefined;
    unsubscribe(this);
    if (options.destroyAllStreams) {
      clearAutoRefresh();
    }
    this.logs = [];
    if (isBrowser && window._growthbook === this) {
      delete window._growthbook;
    }

    // Undo any active auto experiments
    this._activeAutoExperiments.forEach(exp => {
      exp.undo();
    });
    this._activeAutoExperiments.clear();
    this._triggeredExpKeys.clear();
  }
  setRenderer(renderer) {
    this._renderer = renderer;
  }
  forceVariation(key, variation) {
    this._options.forcedVariations = this._options.forcedVariations || {};
    this._options.forcedVariations[key] = variation;
    if (this._options.remoteEval) {
      this._refreshForRemoteEval();
      return;
    }
    this._updateAllAutoExperiments();
    this._render();
  }
  run(experiment) {
    const {
      result
    } = runExperiment(experiment, null, this._getEvalContext());
    this._onExperimentEval(experiment, result);
    return result;
  }
  triggerExperiment(key) {
    this._triggeredExpKeys.add(key);
    if (!this._options.experiments) return null;
    const experiments = this._options.experiments.filter(exp => exp.key === key);
    return experiments.map(exp => {
      return this._runAutoExperiment(exp);
    }).filter(res => res !== null);
  }
  triggerAutoExperiments() {
    this._autoExperimentsAllowed = true;
    this._updateAllAutoExperiments(true);
  }
  _getEvalContext() {
    return {
      user: this._getUserContext(),
      global: this._getGlobalContext(),
      stack: {
        evaluatedFeatures: new Set()
      }
    };
  }
  _getUserContext() {
    return {
      attributes: this._options.user ? {
        ...this._options.user,
        ...this._options.attributes
      } : this._options.attributes,
      enableDevMode: this._options.enableDevMode,
      blockedChangeIds: this._options.blockedChangeIds,
      stickyBucketAssignmentDocs: this._options.stickyBucketAssignmentDocs,
      url: this._getContextUrl(),
      forcedVariations: this._options.forcedVariations,
      forcedFeatureValues: this._options.forcedFeatureValues,
      attributeOverrides: this._options.attributeOverrides,
      saveStickyBucketAssignmentDoc: this._saveStickyBucketAssignmentDoc,
      trackingCallback: this._options.trackingCallback,
      onFeatureUsage: this._options.onFeatureUsage,
      devLogs: this.logs,
      trackedExperiments: this._trackedExperiments,
      trackedFeatureUsage: this._trackedFeatures
    };
  }
  _getGlobalContext() {
    return {
      features: this._options.features,
      experiments: this._options.experiments,
      log: this.log,
      enabled: this._options.enabled,
      qaMode: this._options.qaMode,
      savedGroups: this._options.savedGroups,
      groups: this._options.groups,
      overrides: this._options.overrides,
      onExperimentEval: this._onExperimentEval,
      recordChangeId: this._recordChangedId,
      saveDeferredTrack: this._saveDeferredTrack,
      eventLogger: this._options.eventLogger
    };
  }
  _runAutoExperiment(experiment, forceRerun) {
    const existing = this._activeAutoExperiments.get(experiment);

    // If this is a manual experiment and it's not already running, skip
    if (experiment.manual && !this._triggeredExpKeys.has(experiment.key) && !existing) return null;

    // Check if this particular experiment is blocked by options settings
    // For example, if all visualEditor experiments are disabled
    const isBlocked = this._isAutoExperimentBlockedByContext(experiment);
    let result;
    let trackingCall;
    // Run the experiment (if blocked exclude)
    if (isBlocked) {
      result = getExperimentResult(this._getEvalContext(), experiment, -1, false, "");
    } else {
      ({
        result,
        trackingCall
      } = runExperiment(experiment, null, this._getEvalContext()));
      this._onExperimentEval(experiment, result);
    }

    // A hash to quickly tell if the assigned value changed
    const valueHash = JSON.stringify(result.value);

    // If the changes are already active, no need to re-apply them
    if (!forceRerun && result.inExperiment && existing && existing.valueHash === valueHash) {
      return result;
    }

    // Undo any existing changes
    if (existing) this._undoActiveAutoExperiment(experiment);

    // Apply new changes
    if (result.inExperiment) {
      const changeType = getAutoExperimentChangeType(experiment);
      if (changeType === "redirect" && result.value.urlRedirect && experiment.urlPatterns) {
        const url = experiment.persistQueryString ? mergeQueryStrings(this._getContextUrl(), result.value.urlRedirect) : result.value.urlRedirect;
        if (isURLTargeted(url, experiment.urlPatterns)) {
          this.log("Skipping redirect because original URL matches redirect URL", {
            id: experiment.key
          });
          return result;
        }
        this._redirectedUrl = url;
        const {
          navigate,
          delay
        } = this._getNavigateFunction();
        if (navigate) {
          if (isBrowser) {
            // Wait for the possibly-async tracking callback, bound by min and max delays
            Promise.all([...(trackingCall ? [promiseTimeout(trackingCall, this._options.maxNavigateDelay ?? 1000)] : []), new Promise(resolve => window.setTimeout(resolve, this._options.navigateDelay ?? delay))]).then(() => {
              try {
                navigate(url);
              } catch (e) {
                console.error(e);
              }
            });
          } else {
            try {
              navigate(url);
            } catch (e) {
              console.error(e);
            }
          }
        }
      } else if (changeType === "visual") {
        const undo = this._options.applyDomChangesCallback ? this._options.applyDomChangesCallback(result.value) : this._applyDOMChanges(result.value);
        if (undo) {
          this._activeAutoExperiments.set(experiment, {
            undo,
            valueHash
          });
        }
      }
    }
    return result;
  }
  _undoActiveAutoExperiment(exp) {
    const data = this._activeAutoExperiments.get(exp);
    if (data) {
      data.undo();
      this._activeAutoExperiments.delete(exp);
    }
  }
  _updateAllAutoExperiments(forceRerun) {
    if (!this._autoExperimentsAllowed) return;
    const experiments = this._options.experiments || [];

    // Stop any experiments that are no longer defined
    const keys = new Set(experiments);
    this._activeAutoExperiments.forEach((v, k) => {
      if (!keys.has(k)) {
        v.undo();
        this._activeAutoExperiments.delete(k);
      }
    });

    // Re-run all new/updated experiments
    for (const exp of experiments) {
      const result = this._runAutoExperiment(exp, forceRerun);

      // Once you're in a redirect experiment, break out of the loop and don't run any further experiments
      if (result && result.inExperiment && getAutoExperimentChangeType(exp) === "redirect") {
        break;
      }
    }
  }
  _onExperimentEval(experiment, result) {
    const prev = this._assigned.get(experiment.key);
    this._assigned.set(experiment.key, {
      experiment,
      result
    });
    if (this._subscriptions.size > 0) {
      this._fireSubscriptions(experiment, result, prev);
    }
  }
  _fireSubscriptions(experiment, result,
  // eslint-disable-next-line
  prev) {
    // If assigned variation has changed, fire subscriptions
    // TODO: what if the experiment definition has changed?
    if (!prev || prev.result.inExperiment !== result.inExperiment || prev.result.variationId !== result.variationId) {
      this._subscriptions.forEach(cb => {
        try {
          cb(experiment, result);
        } catch (e) {
          console.error(e);
        }
      });
    }
  }
  _recordChangedId(id) {
    this._completedChangeIds.add(id);
  }
  isOn(key) {
    return this.evalFeature(key).on;
  }
  isOff(key) {
    return this.evalFeature(key).off;
  }
  getFeatureValue(key, defaultValue) {
    const value = this.evalFeature(key).value;
    return value === null ? defaultValue : value;
  }

  /**
   * @deprecated Use {@link evalFeature}
   * @param id
   */

  feature(id) {
    return this.evalFeature(id);
  }
  evalFeature(id) {
    return evalFeature(id, this._getEvalContext());
  }
  log(msg, ctx) {
    if (!this.debug) return;
    if (this._options.log) this._options.log(msg, ctx);else console.log(msg, ctx);
  }
  getDeferredTrackingCalls() {
    return Array.from(this._deferredTrackingCalls.values());
  }
  setDeferredTrackingCalls(calls) {
    this._deferredTrackingCalls = new Map(calls.filter(c => c && c.experiment && c.result).map(c => {
      return [getExperimentDedupeKey(c.experiment, c.result), c];
    }));
  }
  async fireDeferredTrackingCalls() {
    if (!this._options.trackingCallback) return;
    const promises = [];
    this._deferredTrackingCalls.forEach(call => {
      if (!call || !call.experiment || !call.result) {
        console.error("Invalid deferred tracking call", {
          call: call
        });
      } else {
        promises.push(this._options.trackingCallback(call.experiment, call.result));
      }
    });
    this._deferredTrackingCalls.clear();
    await Promise.all(promises);
  }
  setTrackingCallback(callback) {
    this._options.trackingCallback = callback;
    this.fireDeferredTrackingCalls();
  }
  setFeatureUsageCallback(callback) {
    this._options.onFeatureUsage = callback;
  }
  setEventLogger(logger) {
    this._options.eventLogger = logger;
  }
  async logEvent(eventName, properties) {
    if (this._destroyed) {
      console.error("Cannot log event to destroyed GrowthBook instance");
      return;
    }
    if (this._options.enableDevMode) {
      this.logs.push({
        eventName,
        properties,
        timestamp: Date.now().toString(),
        logType: "event"
      });
    }
    if (this._options.eventLogger) {
      try {
        await this._options.eventLogger(eventName, properties || {}, this._getUserContext());
      } catch (e) {
        console.error(e);
      }
    } else {
      console.error("No event logger configured");
    }
  }
  _saveDeferredTrack(data) {
    this._deferredTrackingCalls.set(getExperimentDedupeKey(data.experiment, data.result), data);
  }
  _getContextUrl() {
    return this._options.url || (isBrowser ? window.location.href : "");
  }
  _isAutoExperimentBlockedByContext(experiment) {
    const changeType = getAutoExperimentChangeType(experiment);
    if (changeType === "visual") {
      if (this._options.disableVisualExperiments) return true;
      if (this._options.disableJsInjection) {
        if (experiment.variations.some(v => v.js)) {
          return true;
        }
      }
    } else if (changeType === "redirect") {
      if (this._options.disableUrlRedirectExperiments) return true;

      // Validate URLs
      try {
        const current = new URL(this._getContextUrl());
        for (const v of experiment.variations) {
          if (!v || !v.urlRedirect) continue;
          const url = new URL(v.urlRedirect);

          // If we're blocking cross origin redirects, block if the protocol or host is different
          if (this._options.disableCrossOriginUrlRedirectExperiments) {
            if (url.protocol !== current.protocol) return true;
            if (url.host !== current.host) return true;
          }
        }
      } catch (e) {
        // Problem parsing one of the URLs
        this.log("Error parsing current or redirect URL", {
          id: experiment.key,
          error: e
        });
        return true;
      }
    } else {
      // Block any unknown changeTypes
      return true;
    }
    if (experiment.changeId && (this._options.blockedChangeIds || []).includes(experiment.changeId)) {
      return true;
    }
    return false;
  }
  getRedirectUrl() {
    return this._redirectedUrl;
  }
  _getNavigateFunction() {
    if (this._options.navigate) {
      return {
        navigate: this._options.navigate,
        delay: 0
      };
    } else if (isBrowser) {
      return {
        navigate: url => {
          window.location.replace(url);
        },
        delay: 100
      };
    }
    return {
      navigate: null,
      delay: 0
    };
  }
  _applyDOMChanges(changes) {
    if (!isBrowser) return;
    const undo = [];
    if (changes.css) {
      const s = document.createElement("style");
      s.innerHTML = changes.css;
      document.head.appendChild(s);
      undo.push(() => s.remove());
    }
    if (changes.js) {
      const script = document.createElement("script");
      script.innerHTML = changes.js;
      if (this._options.jsInjectionNonce) {
        script.nonce = this._options.jsInjectionNonce;
      }
      document.head.appendChild(script);
      undo.push(() => script.remove());
    }
    if (changes.domMutations) {
      changes.domMutations.forEach(mutation => {
        undo.push(index.declarative(mutation).revert);
      });
    }
    return () => {
      undo.forEach(fn => fn());
    };
  }
  async refreshStickyBuckets(data) {
    if (this._options.stickyBucketService) {
      const ctx = this._getEvalContext();
      const docs = await getAllStickyBucketAssignmentDocs(ctx, this._options.stickyBucketService, data);
      this._options.stickyBucketAssignmentDocs = docs;
    }
  }
  generateStickyBucketAssignmentDocsSync(stickyBucketService, payload) {
    if (!("getAllAssignmentsSync" in stickyBucketService)) {
      console.error("generating StickyBucketAssignmentDocs docs requires StickyBucketServiceSync");
      return;
    }
    const ctx = this._getEvalContext();
    const attributes = getStickyBucketAttributes(ctx, payload);
    return stickyBucketService.getAllAssignmentsSync(attributes);
  }
  inDevMode() {
    return !!this._options.enableDevMode;
  }
}
async function prefetchPayload(options) {
  // Create a temporary instance, just to fetch the payload
  const instance = new GrowthBook(options);
  await refreshFeatures({
    instance,
    skipCache: options.skipCache,
    allowStale: false,
    backgroundSync: options.streaming
  });
  instance.destroy();
}

const SDK_VERSION = loadSDKVersion();
class GrowthBookClient {
  // Properties and methods that start with "_" are mangled by Terser (saves ~150 bytes)

  constructor(options) {
    options = options || {};
    // These properties are all initialized in the constructor instead of above
    // This saves ~80 bytes in the final output
    this.version = SDK_VERSION;
    this._options = options;
    this.debug = !!options.debug;
    this.ready = false;
    this._features = {};
    this._experiments = [];
    this.log = this.log.bind(this);
    if (options.plugins) {
      for (const plugin of options.plugins) {
        plugin(this);
      }
    }
  }
  async setPayload(payload) {
    this._payload = payload;
    const data = await decryptPayload(payload, this._options.decryptionKey);
    this._decryptedPayload = data;
    if (data.features) {
      this._features = data.features;
    }
    if (data.experiments) {
      this._experiments = data.experiments;
    }
    if (data.savedGroups) {
      this._options.savedGroups = data.savedGroups;
    }
    this.ready = true;
  }
  initSync(options) {
    const payload = options.payload;
    if (payload.encryptedExperiments || payload.encryptedFeatures) {
      throw new Error("initSync does not support encrypted payloads");
    }
    this._payload = payload;
    this._decryptedPayload = payload;
    if (payload.features) {
      this._features = payload.features;
    }
    if (payload.experiments) {
      this._experiments = payload.experiments;
    }
    this.ready = true;
    startStreaming(this, options);
    return this;
  }
  async init(options) {
    options = options || {};
    if (options.cacheSettings) {
      configureCache(options.cacheSettings);
    }
    if (options.payload) {
      await this.setPayload(options.payload);
      startStreaming(this, options);
      return {
        success: true,
        source: "init"
      };
    } else {
      const {
        data,
        ...res
      } = await this._refresh({
        ...options,
        allowStale: true
      });
      startStreaming(this, options);
      await this.setPayload(data || {});
      return res;
    }
  }
  async refreshFeatures(options) {
    const res = await this._refresh({
      ...(options || {}),
      allowStale: false
    });
    if (res.data) {
      await this.setPayload(res.data);
    }
  }
  getApiInfo() {
    return [this.getApiHosts().apiHost, this.getClientKey()];
  }
  getApiHosts() {
    return getApiHosts(this._options);
  }
  getClientKey() {
    return this._options.clientKey || "";
  }
  getPayload() {
    return this._payload || {
      features: this.getFeatures(),
      experiments: this._experiments || []
    };
  }
  getDecryptedPayload() {
    return this._decryptedPayload || this.getPayload();
  }
  async _refresh({
    timeout,
    skipCache,
    allowStale,
    streaming
  }) {
    if (!this._options.clientKey) {
      throw new Error("Missing clientKey");
    }
    // Trigger refresh in feature repository
    return refreshFeatures({
      instance: this,
      timeout,
      skipCache: skipCache || this._options.disableCache,
      allowStale,
      backgroundSync: streaming ?? true
    });
  }
  getFeatures() {
    return this._features || {};
  }
  getGlobalAttributes() {
    return this._options.globalAttributes || {};
  }
  setGlobalAttributes(attributes) {
    this._options.globalAttributes = attributes;
  }
  destroy(options) {
    options = options || {};
    this._destroyed = true;
    unsubscribe(this);
    if (options.destroyAllStreams) {
      clearAutoRefresh();
    }

    // Release references to save memory
    this._features = {};
    this._experiments = [];
    this._decryptedPayload = undefined;
    this._payload = undefined;
    this._options = {};
  }
  isDestroyed() {
    return !!this._destroyed;
  }
  setEventLogger(logger) {
    this._options.eventLogger = logger;
  }
  logEvent(eventName, properties, userContext) {
    if (this._options.eventLogger) {
      const ctx = this._getEvalContext(userContext);
      this._options.eventLogger(eventName, properties, ctx.user);
    }
  }
  runInlineExperiment(experiment, userContext) {
    const {
      result
    } = runExperiment(experiment, null, this._getEvalContext(userContext));
    return result;
  }
  _getEvalContext(userContext) {
    if (this._options.globalAttributes) {
      userContext = {
        ...userContext,
        attributes: {
          ...this._options.globalAttributes,
          ...userContext.attributes
        }
      };
    }
    return {
      user: userContext,
      global: this._getGlobalContext(),
      stack: {
        evaluatedFeatures: new Set()
      }
    };
  }
  _getGlobalContext() {
    return {
      features: this._features,
      experiments: this._experiments,
      log: this.log,
      enabled: this._options.enabled,
      qaMode: this._options.qaMode,
      savedGroups: this._options.savedGroups,
      forcedFeatureValues: this._options.forcedFeatureValues,
      forcedVariations: this._options.forcedVariations,
      trackingCallback: this._options.trackingCallback,
      onFeatureUsage: this._options.onFeatureUsage
    };
  }
  isOn(key, userContext) {
    return this.evalFeature(key, userContext).on;
  }
  isOff(key, userContext) {
    return this.evalFeature(key, userContext).off;
  }
  getFeatureValue(key, defaultValue, userContext) {
    const value = this.evalFeature(key, userContext).value;
    return value === null ? defaultValue : value;
  }
  evalFeature(id, userContext) {
    return evalFeature(id, this._getEvalContext(userContext));
  }
  log(msg, ctx) {
    if (!this.debug) return;
    if (this._options.log) this._options.log(msg, ctx);else console.log(msg, ctx);
  }
  setTrackingCallback(callback) {
    this._options.trackingCallback = callback;
  }
  setFeatureUsageCallback(callback) {
    this._options.onFeatureUsage = callback;
  }
  async applyStickyBuckets(partialContext, stickyBucketService) {
    const ctx = this._getEvalContext(partialContext);
    const stickyBucketAssignmentDocs = await getAllStickyBucketAssignmentDocs(ctx, stickyBucketService);
    return {
      ...partialContext,
      stickyBucketAssignmentDocs,
      saveStickyBucketAssignmentDoc: doc => stickyBucketService.saveAssignments(doc)
    };
  }
  createScopedInstance(userContext, userPlugins) {
    return new UserScopedGrowthBook(this, userContext, [...(this._options.plugins || []), ...(userPlugins || [])]);
  }
}
class UserScopedGrowthBook {
  constructor(gb, userContext, plugins) {
    this._gb = gb;
    this._userContext = userContext;
    this.logs = [];
    this._userContext.trackedExperiments = this._userContext.trackedExperiments || new Set();
    this._userContext.trackedFeatureUsage = this._userContext.trackedFeatureUsage || {};
    this._userContext.devLogs = this.logs;
    if (plugins) {
      for (const plugin of plugins) {
        plugin(this);
      }
    }
  }
  runInlineExperiment(experiment) {
    return this._gb.runInlineExperiment(experiment, this._userContext);
  }
  isOn(key) {
    return this._gb.isOn(key, this._userContext);
  }
  isOff(key) {
    return this._gb.isOff(key, this._userContext);
  }
  getFeatureValue(key, defaultValue) {
    return this._gb.getFeatureValue(key, defaultValue, this._userContext);
  }
  evalFeature(id) {
    return this._gb.evalFeature(id, this._userContext);
  }
  logEvent(eventName, properties) {
    if (this._userContext.enableDevMode) {
      this.logs.push({
        eventName,
        properties,
        timestamp: Date.now().toString(),
        logType: "event"
      });
    }
    this._gb.logEvent(eventName, properties || {}, this._userContext);
  }
  setTrackingCallback(cb) {
    this._userContext.trackingCallback = cb;
  }
  getApiInfo() {
    return this._gb.getApiInfo();
  }
  getClientKey() {
    return this._gb.getClientKey();
  }
  setURL(url) {
    this._userContext.url = url;
  }
  updateAttributes(attributes) {
    this._userContext.attributes = {
      ...this._userContext.attributes,
      ...attributes
    };
  }
  setAttributeOverrides(overrides) {
    this._userContext.attributeOverrides = overrides;
  }
  async setForcedVariations(vars) {
    this._userContext.forcedVariations = vars || {};
  }
  // eslint-disable-next-line
  setForcedFeatures(map) {
    this._userContext.forcedFeatureValues = map;
  }
  getUserContext() {
    return this._userContext;
  }
  getVersion() {
    return SDK_VERSION;
  }
  getDecryptedPayload() {
    return this._gb.getDecryptedPayload();
  }
  inDevMode() {
    return !!this._userContext.enableDevMode;
  }
}

/**
 * Responsible for reading and writing documents which describe sticky bucket assignments.
 */
class StickyBucketService {
  constructor(opts) {
    opts = opts || {};
    this.prefix = opts.prefix || "";
  }
  /**
   * The SDK calls getAllAssignments to populate sticky buckets. This in turn will
   * typically loop through individual getAssignments calls. However, some StickyBucketService
   * instances (i.e. Redis) will instead perform a multi-query inside getAllAssignments instead.
   */
  async getAllAssignments(attributes) {
    const docs = {};
    (await Promise.all(Object.entries(attributes).map(([attributeName, attributeValue]) => this.getAssignments(attributeName, attributeValue)))).forEach(doc => {
      if (doc) {
        const key = getStickyBucketAttributeKey(doc.attributeName, doc.attributeValue);
        docs[key] = doc;
      }
    });
    return docs;
  }
  getKey(attributeName, attributeValue) {
    return `${this.prefix}${attributeName}||${attributeValue}`;
  }
}
class StickyBucketServiceSync extends StickyBucketService {
  async getAssignments(attributeName, attributeValue) {
    return this.getAssignmentsSync(attributeName, attributeValue);
  }
  async saveAssignments(doc) {
    this.saveAssignmentsSync(doc);
  }
  getAllAssignmentsSync(attributes) {
    const docs = {};
    Object.entries(attributes).map(([attributeName, attributeValue]) => this.getAssignmentsSync(attributeName, attributeValue)).forEach(doc => {
      if (doc) {
        const key = getStickyBucketAttributeKey(doc.attributeName, doc.attributeValue);
        docs[key] = doc;
      }
    });
    return docs;
  }
}
class LocalStorageStickyBucketService extends StickyBucketService {
  constructor(opts) {
    opts = opts || {};
    super();
    this.prefix = opts.prefix || "gbStickyBuckets__";
    try {
      this.localStorage = opts.localStorage || globalThis.localStorage;
    } catch (e) {
      // Ignore localStorage errors
    }
  }
  async getAssignments(attributeName, attributeValue) {
    const key = this.getKey(attributeName, attributeValue);
    let doc = null;
    if (!this.localStorage) return doc;
    try {
      const raw = (await this.localStorage.getItem(key)) || "{}";
      const data = JSON.parse(raw);
      if (data.attributeName && data.attributeValue && data.assignments) {
        doc = data;
      }
    } catch (e) {
      // Ignore localStorage errors
    }
    return doc;
  }
  async saveAssignments(doc) {
    const key = this.getKey(doc.attributeName, doc.attributeValue);
    if (!this.localStorage) return;
    try {
      await this.localStorage.setItem(key, JSON.stringify(doc));
    } catch (e) {
      // Ignore localStorage errors
    }
  }
}
class ExpressCookieStickyBucketService extends StickyBucketServiceSync {
  /**
   * Intended to be used with cookieParser() middleware from npm: 'cookie-parser'.
   * Assumes:
   *  - reading a cookie is automatically decoded via decodeURIComponent() or similar
   *  - writing a cookie name & value must be manually encoded via encodeURIComponent() or similar
   *  - all cookie bodies are JSON encoded strings and are manually encoded/decoded
   */

  constructor({
    prefix = "gbStickyBuckets__",
    req,
    res,
    cookieAttributes = {
      maxAge: 180 * 24 * 3600 * 1000
    } // 180 days
  }) {
    super();
    this.prefix = prefix;
    this.req = req;
    this.res = res;
    this.cookieAttributes = cookieAttributes;
  }
  getAssignmentsSync(attributeName, attributeValue) {
    const key = this.getKey(attributeName, attributeValue);
    let doc = null;
    if (!this.req) return doc;
    try {
      const raw = this.req.cookies[key] || "{}";
      const data = JSON.parse(raw);
      if (data.attributeName && data.attributeValue && data.assignments) {
        doc = data;
      }
    } catch (e) {
      // Ignore cookie errors
    }
    return doc;
  }
  saveAssignmentsSync(doc) {
    const key = this.getKey(doc.attributeName, doc.attributeValue);
    if (!this.res) return;
    const str = JSON.stringify(doc);
    this.res.cookie(encodeURIComponent(key), encodeURIComponent(str), this.cookieAttributes);
  }
}
class BrowserCookieStickyBucketService extends StickyBucketServiceSync {
  /**
   * Intended to be used with npm: 'js-cookie'.
   * Assumes:
   *  - reading a cookie is automatically decoded via decodeURIComponent() or similar
   *  - writing a cookie name & value is automatically encoded via encodeURIComponent() or similar
   *  - all cookie bodies are JSON encoded strings and are manually encoded/decoded
   */

  constructor({
    prefix = "gbStickyBuckets__",
    jsCookie,
    cookieAttributes = {
      expires: 180
    } // 180 days
  }) {
    super();
    this.prefix = prefix;
    this.jsCookie = jsCookie;
    this.cookieAttributes = cookieAttributes;
  }
  getAssignmentsSync(attributeName, attributeValue) {
    const key = this.getKey(attributeName, attributeValue);
    let doc = null;
    if (!this.jsCookie) return doc;
    try {
      const raw = this.jsCookie.get(key);
      const data = JSON.parse(raw || "{}");
      if (data.attributeName && data.attributeValue && data.assignments) {
        doc = data;
      }
    } catch (e) {
      // Ignore cookie errors
    }
    return doc;
  }
  async saveAssignmentsSync(doc) {
    const key = this.getKey(doc.attributeName, doc.attributeValue);
    if (!this.jsCookie) return;
    const str = JSON.stringify(doc);
    this.jsCookie.set(key, str, this.cookieAttributes);
  }
}
class RedisStickyBucketService extends StickyBucketService {
  /** Intended to be used with npm: 'ioredis'. **/

  constructor({
    redis
  }) {
    super();
    this.redis = redis;
  }
  async getAllAssignments(attributes) {
    const docs = {};
    const keys = Object.entries(attributes).map(([attributeName, attributeValue]) => getStickyBucketAttributeKey(attributeName, attributeValue));
    if (!this.redis) return docs;
    await this.redis.mget(...keys).then(values => {
      values.forEach(raw => {
        try {
          const data = JSON.parse(raw || "{}");
          if (data.attributeName && "attributeValue" in data && data.assignments) {
            const key = getStickyBucketAttributeKey(data.attributeName, toString(data.attributeValue));
            docs[key] = data;
          }
        } catch (e) {
          // ignore redis doc parse errors
        }
      });
    });
    return docs;
  }
  async getAssignments(_attributeName, _attributeValue) {
    // not implemented
    return null;
  }
  async saveAssignments(doc) {
    const key = this.getKey(doc.attributeName, doc.attributeValue);
    if (!this.redis) return;
    await this.redis.set(key, JSON.stringify(doc));
  }
}

export { BrowserCookieStickyBucketService, EVENT_EXPERIMENT_VIEWED, EVENT_FEATURE_EVALUATED, ExpressCookieStickyBucketService, GrowthBook, GrowthBookClient, GrowthBookClient as GrowthBookMultiUser, LocalStorageStickyBucketService, RedisStickyBucketService, StickyBucketService, StickyBucketServiceSync, UserScopedGrowthBook, clearCache, configureCache, evalCondition, getAutoExperimentChangeType, getPolyfills, helpers, isURLTargeted, onHidden, onVisible, paddedVersionString, prefetchPayload, setPolyfills };
//# sourceMappingURL=esm.js.map
