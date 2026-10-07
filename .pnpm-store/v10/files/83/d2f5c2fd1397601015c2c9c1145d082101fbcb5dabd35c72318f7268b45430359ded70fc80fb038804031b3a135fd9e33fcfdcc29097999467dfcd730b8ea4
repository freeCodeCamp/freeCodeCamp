Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });

const normalizationHints = require('./normalizationHints.js');
const object = require('./object.js');
const stacktrace = require('./stacktrace.js');

let stringifier;
function setNormalizeStringifier(newStringifier) {
  stringifier = newStringifier;
}
function normalize(input, depth = 100, maxProperties = Infinity) {
  try {
    return visit("", input, depth, maxProperties);
  } catch (err) {
    return { ERROR: `**non-serializable** (${err})` };
  }
}
function normalizeToSize(object, depth = 3, maxSize = 100 * 1024) {
  const normalized = normalize(object, depth);
  if (jsonSize(normalized) > maxSize) {
    return normalizeToSize(object, depth - 1, maxSize);
  }
  return normalized;
}
function visit(key, value, depth = Infinity, maxProperties = Infinity, memo = memoBuilder()) {
  const [memoize, unmemoize] = memo;
  if (value == null || // this matches null and undefined -> eqeq not eqeqeq
  ["boolean", "string"].includes(typeof value) || typeof value === "number" && Number.isFinite(value)) {
    return value;
  }
  const stringified = stringifyValue(key, value);
  if (!stringified.startsWith("[object ")) {
    return stringified;
  }
  if (normalizationHints.hasSkipNormalizationHint(value)) {
    return value;
  }
  const overrideDepth = normalizationHints.getNormalizationDepthOverrideHint(value);
  const remainingDepth = overrideDepth !== void 0 ? overrideDepth : depth;
  if (remainingDepth === 0) {
    return stringified.replace("object ", "");
  }
  if (memoize(value)) {
    return "[Circular ~]";
  }
  const valueWithToJSON = value;
  if (valueWithToJSON && typeof valueWithToJSON.toJSON === "function") {
    try {
      const jsonValue = valueWithToJSON.toJSON();
      return visit("", jsonValue, remainingDepth - 1, maxProperties, memo);
    } catch {
    }
  }
  const normalized = Array.isArray(value) ? [] : {};
  let numAdded = 0;
  const visitable = object.convertToPlainObject(value);
  for (const visitKey in visitable) {
    if (!Object.prototype.hasOwnProperty.call(visitable, visitKey)) {
      continue;
    }
    if (numAdded >= maxProperties) {
      normalized[visitKey] = "[MaxProperties ~]";
      break;
    }
    const visitValue = visitable[visitKey];
    normalized[visitKey] = visit(visitKey, visitValue, remainingDepth - 1, maxProperties, memo);
    numAdded++;
  }
  unmemoize(value);
  return normalized;
}
function stringifyValue(key, value) {
  try {
    if (stringifier) {
      const stringified = stringifier(value);
      if (stringified) {
        return stringified;
      }
    }
    if (typeof global !== "undefined" && value === global) {
      return "[Global]";
    }
    if (typeof value === "number" && !Number.isFinite(value)) {
      return `[${value}]`;
    }
    if (typeof value === "function") {
      return `[Function: ${stacktrace.getFunctionName(value)}]`;
    }
    if (typeof value === "symbol") {
      return `[${String(value)}]`;
    }
    if (typeof value === "bigint") {
      return `[BigInt: ${String(value)}]`;
    }
    const objName = getConstructorName(value);
    return `[object ${objName}]`;
  } catch (err) {
    return `**non-serializable** (${err})`;
  }
}
function getConstructorName(value) {
  const prototype = Object.getPrototypeOf(value);
  return prototype?.constructor ? prototype.constructor.name : "null prototype";
}
function utf8Length(value) {
  return ~-encodeURI(value).split(/%..|./).length;
}
function jsonSize(value) {
  return utf8Length(JSON.stringify(value));
}
function normalizeUrlToBase(url, basePath) {
  const escapedBase = basePath.replace(/\\/g, "/").replace(/[|\\{}()[\]^$+*?.]/g, "\\$&");
  let newUrl = url;
  try {
    newUrl = decodeURI(url);
  } catch {
  }
  return newUrl.replace(/\\/g, "/").replace(/webpack:\/?/g, "").replace(new RegExp(`(file://)?/*${escapedBase}/*`, "ig"), "app:///");
}
function memoBuilder() {
  const inner = /* @__PURE__ */ new WeakSet();
  function memoize(obj) {
    if (inner.has(obj)) {
      return true;
    }
    inner.add(obj);
    return false;
  }
  function unmemoize(obj) {
    inner.delete(obj);
  }
  return [memoize, unmemoize];
}

exports.normalize = normalize;
exports.normalizeToSize = normalizeToSize;
exports.normalizeUrlToBase = normalizeUrlToBase;
exports.setNormalizeStringifier = setNormalizeStringifier;
exports.stringifyValue = stringifyValue;
//# sourceMappingURL=normalize.js.map
