import {
  AutoExperiment,
  AutoExperimentChangeType,
  Polyfills,
  UrlTarget,
  UrlTargetType,
  VariationRange,
} from "./types/growthbook";

const polyfills: Polyfills = {
  fetch: globalThis.fetch ? globalThis.fetch.bind(globalThis) : undefined,
  SubtleCrypto: globalThis.crypto ? globalThis.crypto.subtle : undefined,
  EventSource: globalThis.EventSource,
};
export function getPolyfills(): Polyfills {
  return polyfills;
}

function hashFnv32a(str: string): number {
  let hval = 0x811c9dc5;
  const l = str.length;

  for (let i = 0; i < l; i++) {
    hval ^= str.charCodeAt(i);
    hval +=
      (hval << 1) + (hval << 4) + (hval << 7) + (hval << 8) + (hval << 24);
  }
  return hval >>> 0;
}

export function hash(
  seed: string,
  value: string,
  version: number,
): number | null {
  // New unbiased hashing algorithm
  if (version === 2) {
    return (hashFnv32a(hashFnv32a(seed + value) + "") % 10000) / 10000;
  }
  // Original biased hashing algorithm (keep for backwards compatibility)
  if (version === 1) {
    return (hashFnv32a(value + seed) % 1000) / 1000;
  }

  // Unknown hash version
  return null;
}

export function getEqualWeights(n: number): number[] {
  if (n <= 0) return [];
  return new Array(n).fill(1 / n);
}

export function inRange(n: number, range: VariationRange): boolean {
  return n >= range[0] && n < range[1];
}

export function inNamespace(
  hashValue: string,
  namespace: [string, number, number],
): boolean {
  const n = hash("__" + namespace[0], hashValue, 1);
  if (n === null) return false;
  return n >= namespace[1] && n < namespace[2];
}

export function chooseVariation(n: number, ranges: VariationRange[]): number {
  for (let i = 0; i < ranges.length; i++) {
    if (inRange(n, ranges[i])) {
      return i;
    }
  }
  return -1;
}

export function getUrlRegExp(regexString: string): RegExp | undefined {
  try {
    const escaped = regexString.replace(/([^\\])\//g, "$1\\/");
    return new RegExp(escaped);
  } catch (e) {
    console.error(e);
    return undefined;
  }
}

export function isURLTargeted(url: string, targets: UrlTarget[]) {
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

function _evalSimpleUrlPart(
  actual: string,
  pattern: string,
  isPath: boolean,
): boolean {
  try {
    // Escape special regex characters and change wildcard `_____` to `.*`
    let escaped = pattern
      .replace(/[*.+?^${}()|[\]\\]/g, "\\$&")
      .replace(/_____/g, ".*");

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

function _evalSimpleUrlTarget(actual: URL, pattern: string) {
  try {
    // If a protocol is missing, but a host is specified, add `https://` to the front
    // Use "_____" as the wildcard since `*` is not a valid hostname in some browsers
    const expected = new URL(
      pattern.replace(/^([^:/?]*)\./i, "https://$1.").replace(/\*/g, "_____"),
      "https://_____",
    );

    // Compare each part of the URL separately
    const comps: Array<[string, string, boolean]> = [
      [actual.host, expected.host, false],
      [actual.pathname, expected.pathname, true],
    ];
    // We only want to compare hashes if it's explicitly being targeted
    if (expected.hash) {
      comps.push([actual.hash, expected.hash, false]);
    }

    expected.searchParams.forEach((v, k) => {
      comps.push([actual.searchParams.get(k) || "", v, false]);
    });

    // If any comparisons fail, the whole thing fails
    return !comps.some(
      (data) => !_evalSimpleUrlPart(data[0], data[1], data[2]),
    );
  } catch (e) {
    return false;
  }
}

function _evalURLTarget(
  url: string,
  type: UrlTargetType,
  pattern: string,
): boolean {
  try {
    const parsed = new URL(url, "https://_");

    if (type === "regex") {
      const regex = getUrlRegExp(pattern);
      if (!regex) return false;
      return (
        regex.test(parsed.href) ||
        regex.test(parsed.href.substring(parsed.origin.length))
      );
    } else if (type === "simple") {
      return _evalSimpleUrlTarget(parsed, pattern);
    }

    return false;
  } catch (e) {
    return false;
  }
}

export function getBucketRanges(
  numVariations: number,
  coverage: number | undefined,
  weights?: number[],
): VariationRange[] {
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
      console.error(
        "Experiment.weights array must be the same length as Experiment.variations",
      );
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
  return weights.map((w) => {
    const start = cumulative;
    cumulative += w;
    return [start, start + (coverage as number) * w];
  }) as VariationRange[];
}

export function getQueryStringOverride(
  id: string,
  url: string,
  numVariations: number,
) {
  if (!url) {
    return null;
  }

  const search = url.split("?")[1];
  if (!search) {
    return null;
  }

  const match = search
    .replace(/#.*/, "") // Get rid of anchor
    .split("&") // Split into key/value pairs
    .map((kv) => kv.split("=", 2))
    .filter(([k]) => k === id) // Look for key that matches the experiment id
    .map(([, v]) => parseInt(v)); // Parse the value into an integer

  if (match.length > 0 && match[0] >= 0 && match[0] < numVariations)
    return match[0];

  return null;
}

export function isIncluded(include: () => boolean) {
  try {
    return include();
  } catch (e) {
    console.error(e);
    return false;
  }
}

const base64ToBuf = (b: string) =>
  Uint8Array.from(atob(b), (c) => c.charCodeAt(0));

export async function decrypt(
  encryptedString: string,
  decryptionKey?: string,
  subtle?: SubtleCrypto,
): Promise<string> {
  decryptionKey = decryptionKey || "";
  subtle =
    subtle ||
    (globalThis.crypto && globalThis.crypto.subtle) ||
    polyfills.SubtleCrypto;
  if (!subtle) {
    throw new Error("No SubtleCrypto implementation found");
  }
  try {
    const key = await subtle.importKey(
      "raw",
      base64ToBuf(decryptionKey),
      { name: "AES-CBC", length: 128 },
      true,
      ["encrypt", "decrypt"],
    );
    const [iv, cipherText] = encryptedString.split(".");
    const plainTextBuffer = await subtle.decrypt(
      { name: "AES-CBC", iv: base64ToBuf(iv) },
      key,
      base64ToBuf(cipherText),
    );

    return new TextDecoder().decode(plainTextBuffer);
  } catch (e) {
    throw new Error("Failed to decrypt");
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function toString(input: any): string {
  if (typeof input === "string") return input;
  return JSON.stringify(input);
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function paddedVersionString(input: any): string {
  if (typeof input === "number") {
    input = input + "";
  }
  if (!input || typeof input !== "string") {
    input = "0";
  }
  // Remove build info and leading `v` if any
  // Split version into parts (both core version numbers and pre-release tags)
  // "v1.2.3-rc.1+build123" -> ["1","2","3","rc","1"]
  const parts = (input as string).replace(/(^v|\+.*$)/g, "").split(/[-.]/);

  // If it's SemVer without a pre-release, add `~` to the end
  // ["1","0","0"] -> ["1","0","0","~"]
  // "~" is the largest ASCII character, so this will make "1.0.0" greater than "1.0.0-beta" for example
  if (parts.length === 3) {
    parts.push("~");
  }

  // Left pad each numeric part with spaces so string comparisons will work ("9">"10", but " 9"<"10")
  // Then, join back together into a single string
  return parts
    .map((v) => (v.match(/^[0-9]+$/) ? v.padStart(5, " ") : v))
    .join("-");
}

export function loadSDKVersion(): string {
  let version: string;
  try {
    // @ts-expect-error right-hand value to be replaced by build with string literal
    version = __SDK_VERSION__;
  } catch (e) {
    version = "";
  }
  return version;
}

export function mergeQueryStrings(oldUrl: string, newUrl: string): string {
  let currUrl: URL;
  let redirectUrl: URL;
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

function isObj(x: unknown): x is Record<string, unknown> {
  return typeof x === "object" && x !== null;
}

export function getAutoExperimentChangeType(
  exp: AutoExperiment,
): AutoExperimentChangeType {
  if (
    exp.urlPatterns &&
    exp.variations.some(
      (variation) => isObj(variation) && "urlRedirect" in variation,
    )
  ) {
    return "redirect";
  } else if (
    exp.variations.some(
      (variation) =>
        isObj(variation) &&
        (variation.domMutations || "js" in variation || "css" in variation),
    )
  ) {
    return "visual";
  }

  return "unknown";
}

// Guarantee the promise always resolves within {timeout} ms
// Resolved value will be `null` when there's an error or it takes too long
// Note: The promise will continue running in the background, even if the timeout is hit
export async function promiseTimeout<T>(
  promise: Promise<T>,
  timeout?: number,
): Promise<T | null> {
  return new Promise((resolve) => {
    let resolved = false;
    let timer: NodeJS.Timeout | undefined;
    const finish = (data?: T) => {
      if (resolved) return;
      resolved = true;
      timer && clearTimeout(timer);
      resolve(data || null);
    };

    if (timeout) {
      timer = setTimeout(() => finish(), timeout);
    }

    promise.then((data) => finish(data)).catch(() => finish());
  });
}
