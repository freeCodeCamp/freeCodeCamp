"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chooseVariation = chooseVariation;
exports.decrypt = decrypt;
exports.getAutoExperimentChangeType = getAutoExperimentChangeType;
exports.getBucketRanges = getBucketRanges;
exports.getEqualWeights = getEqualWeights;
exports.getPolyfills = getPolyfills;
exports.getQueryStringOverride = getQueryStringOverride;
exports.getUrlRegExp = getUrlRegExp;
exports.hash = hash;
exports.inNamespace = inNamespace;
exports.inRange = inRange;
exports.isIncluded = isIncluded;
exports.isURLTargeted = isURLTargeted;
exports.loadSDKVersion = loadSDKVersion;
exports.mergeQueryStrings = mergeQueryStrings;
exports.paddedVersionString = paddedVersionString;
exports.promiseTimeout = promiseTimeout;
exports.toString = toString;
const polyfills = {
  fetch: globalThis.fetch ? globalThis.fetch.bind(globalThis) : undefined,
  SubtleCrypto: globalThis.crypto ? globalThis.crypto.subtle : undefined,
  EventSource: globalThis.EventSource
};
function getPolyfills() {
  return polyfills;
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
    if (process.env.NODE_ENV !== "production") {
      console.error("Experiment.coverage must be greater than or equal to 0");
    }
    coverage = 0;
  } else if (coverage > 1) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Experiment.coverage must be less than or equal to 1");
    }
    coverage = 1;
  }

  // Default to equal weights if missing or invalid
  const equal = getEqualWeights(numVariations);
  weights = weights || equal;
  if (weights.length !== numVariations) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Experiment.weights array must be the same length as Experiment.variations");
    }
    weights = equal;
  }

  // If weights don't add up to 1 (or close to it), default to equal weights
  const totalWeight = weights.reduce((w, sum) => sum + w, 0);
  if (totalWeight < 0.99 || totalWeight > 1.01) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Experiment.weights must add up to 1");
    }
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
  subtle = subtle || globalThis.crypto && globalThis.crypto.subtle || polyfills.SubtleCrypto;
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
//# sourceMappingURL=util.js.map