import { f as YAMLReferenceError, T as Type, b as YAMLSemanticError, _ as _defineProperty } from './PlainValue-183afbad.js';
import { j as resolveString, b as binaryOptions, c as stringifyString, h as resolveSeq, P as Pair, d as YAMLMap, Y as YAMLSeq, t as toJSON, S as Scalar, l as findPair, g as resolveMap, k as stringifyNumber } from './resolveSeq-67caf78a.js';

/* global atob, btoa, Buffer */
const binary = {
  identify: value => value instanceof Uint8Array,
  // Buffer inherits from Uint8Array
  default: false,
  tag: 'tag:yaml.org,2002:binary',
  /**
   * Returns a Buffer in node and an Uint8Array in browsers
   *
   * To use the resulting buffer as an image, you'll want to do something like:
   *
   *   const blob = new Blob([buffer], { type: 'image/jpeg' })
   *   document.querySelector('#photo').src = URL.createObjectURL(blob)
   */
  resolve: (doc, node) => {
    const src = resolveString(doc, node);
    if (typeof Buffer === 'function') {
      return Buffer.from(src, 'base64');
    } else if (typeof atob === 'function') {
      // On IE 11, atob() can't handle newlines
      const str = atob(src.replace(/[\n\r]/g, ''));
      const buffer = new Uint8Array(str.length);
      for (let i = 0; i < str.length; ++i) buffer[i] = str.charCodeAt(i);
      return buffer;
    } else {
      const msg = 'This environment does not support reading binary tags; either Buffer or atob is required';
      doc.errors.push(new YAMLReferenceError(node, msg));
      return null;
    }
  },
  options: binaryOptions,
  stringify: ({
    comment,
    type,
    value
  }, ctx, onComment, onChompKeep) => {
    let src;
    if (typeof Buffer === 'function') {
      src = value instanceof Buffer ? value.toString('base64') : Buffer.from(value.buffer).toString('base64');
    } else if (typeof btoa === 'function') {
      let s = '';
      for (let i = 0; i < value.length; ++i) s += String.fromCharCode(value[i]);
      src = btoa(s);
    } else {
      throw new Error('This environment does not support writing binary tags; either Buffer or btoa is required');
    }
    if (!type) type = binaryOptions.defaultType;
    if (type === Type.QUOTE_DOUBLE) {
      value = src;
    } else {
      const {
        lineWidth
      } = binaryOptions;
      const n = Math.ceil(src.length / lineWidth);
      const lines = new Array(n);
      for (let i = 0, o = 0; i < n; ++i, o += lineWidth) {
        lines[i] = src.substr(o, lineWidth);
      }
      value = lines.join(type === Type.BLOCK_LITERAL ? '\n' : ' ');
    }
    return stringifyString({
      comment,
      type,
      value
    }, ctx, onComment, onChompKeep);
  }
};

function parsePairs(doc, cst) {
  const seq = resolveSeq(doc, cst);
  for (let i = 0; i < seq.items.length; ++i) {
    let item = seq.items[i];
    if (item instanceof Pair) continue;else if (item instanceof YAMLMap) {
      if (item.items.length > 1) {
        const msg = 'Each pair must have its own sequence indicator';
        throw new YAMLSemanticError(cst, msg);
      }
      const pair = item.items[0] || new Pair();
      if (item.commentBefore) pair.commentBefore = pair.commentBefore ? `${item.commentBefore}\n${pair.commentBefore}` : item.commentBefore;
      if (item.comment) pair.comment = pair.comment ? `${item.comment}\n${pair.comment}` : item.comment;
      item = pair;
    }
    seq.items[i] = item instanceof Pair ? item : new Pair(item);
  }
  return seq;
}
function createPairs(schema, iterable, ctx) {
  const pairs = new YAMLSeq(schema);
  pairs.tag = 'tag:yaml.org,2002:pairs';
  for (const it of iterable) {
    let key, value;
    if (Array.isArray(it)) {
      if (it.length === 2) {
        key = it[0];
        value = it[1];
      } else throw new TypeError(`Expected [key, value] tuple: ${it}`);
    } else if (it && it instanceof Object) {
      const keys = Object.keys(it);
      if (keys.length === 1) {
        key = keys[0];
        value = it[key];
      } else throw new TypeError(`Expected { key: value } tuple: ${it}`);
    } else {
      key = it;
    }
    const pair = schema.createPair(key, value, ctx);
    pairs.items.push(pair);
  }
  return pairs;
}
const pairs = {
  default: false,
  tag: 'tag:yaml.org,2002:pairs',
  resolve: parsePairs,
  createNode: createPairs
};

class YAMLOMap extends YAMLSeq {
  constructor() {
    super();
    _defineProperty(this, "add", YAMLMap.prototype.add.bind(this));
    _defineProperty(this, "delete", YAMLMap.prototype.delete.bind(this));
    _defineProperty(this, "get", YAMLMap.prototype.get.bind(this));
    _defineProperty(this, "has", YAMLMap.prototype.has.bind(this));
    _defineProperty(this, "set", YAMLMap.prototype.set.bind(this));
    this.tag = YAMLOMap.tag;
  }
  toJSON(_, ctx) {
    const map = new Map();
    if (ctx && ctx.onCreate) ctx.onCreate(map);
    for (const pair of this.items) {
      let key, value;
      if (pair instanceof Pair) {
        key = toJSON(pair.key, '', ctx);
        value = toJSON(pair.value, key, ctx);
      } else {
        key = toJSON(pair, '', ctx);
      }
      if (map.has(key)) throw new Error('Ordered maps must not include duplicate keys');
      map.set(key, value);
    }
    return map;
  }
}
_defineProperty(YAMLOMap, "tag", 'tag:yaml.org,2002:omap');
function parseOMap(doc, cst) {
  const pairs = parsePairs(doc, cst);
  const seenKeys = [];
  for (const {
    key
  } of pairs.items) {
    if (key instanceof Scalar) {
      if (seenKeys.includes(key.value)) {
        const msg = 'Ordered maps must not include duplicate keys';
        throw new YAMLSemanticError(cst, msg);
      } else {
        seenKeys.push(key.value);
      }
    }
  }
  return Object.assign(new YAMLOMap(), pairs);
}
function createOMap(schema, iterable, ctx) {
  const pairs = createPairs(schema, iterable, ctx);
  const omap = new YAMLOMap();
  omap.items = pairs.items;
  return omap;
}
const omap = {
  identify: value => value instanceof Map,
  nodeClass: YAMLOMap,
  default: false,
  tag: 'tag:yaml.org,2002:omap',
  resolve: parseOMap,
  createNode: createOMap
};

class YAMLSet extends YAMLMap {
  constructor() {
    super();
    this.tag = YAMLSet.tag;
  }
  add(key) {
    const pair = key instanceof Pair ? key : new Pair(key);
    const prev = findPair(this.items, pair.key);
    if (!prev) this.items.push(pair);
  }
  get(key, keepPair) {
    const pair = findPair(this.items, key);
    return !keepPair && pair instanceof Pair ? pair.key instanceof Scalar ? pair.key.value : pair.key : pair;
  }
  set(key, value) {
    if (typeof value !== 'boolean') throw new Error(`Expected boolean value for set(key, value) in a YAML set, not ${typeof value}`);
    const prev = findPair(this.items, key);
    if (prev && !value) {
      this.items.splice(this.items.indexOf(prev), 1);
    } else if (!prev && value) {
      this.items.push(new Pair(key));
    }
  }
  toJSON(_, ctx) {
    return super.toJSON(_, ctx, Set);
  }
  toString(ctx, onComment, onChompKeep) {
    if (!ctx) return JSON.stringify(this);
    if (this.hasAllNullValues()) return super.toString(ctx, onComment, onChompKeep);else throw new Error('Set items must all have null values');
  }
}
_defineProperty(YAMLSet, "tag", 'tag:yaml.org,2002:set');
function parseSet(doc, cst) {
  const map = resolveMap(doc, cst);
  if (!map.hasAllNullValues()) throw new YAMLSemanticError(cst, 'Set items must all have null values');
  return Object.assign(new YAMLSet(), map);
}
function createSet(schema, iterable, ctx) {
  const set = new YAMLSet();
  for (const value of iterable) set.items.push(schema.createPair(value, null, ctx));
  return set;
}
const set = {
  identify: value => value instanceof Set,
  nodeClass: YAMLSet,
  default: false,
  tag: 'tag:yaml.org,2002:set',
  resolve: parseSet,
  createNode: createSet
};

const parseSexagesimal = (sign, parts) => {
  const n = parts.split(':').reduce((n, p) => n * 60 + Number(p), 0);
  return sign === '-' ? -n : n;
};

// hhhh:mm:ss.sss
const stringifySexagesimal = ({
  value
}) => {
  if (isNaN(value) || !isFinite(value)) return stringifyNumber(value);
  let sign = '';
  if (value < 0) {
    sign = '-';
    value = Math.abs(value);
  }
  const parts = [value % 60]; // seconds, including ms
  if (value < 60) {
    parts.unshift(0); // at least one : is required
  } else {
    value = Math.round((value - parts[0]) / 60);
    parts.unshift(value % 60); // minutes
    if (value >= 60) {
      value = Math.round((value - parts[0]) / 60);
      parts.unshift(value); // hours
    }
  }
  return sign + parts.map(n => n < 10 ? '0' + String(n) : String(n)).join(':').replace(/000000\d*$/, '') // % 60 may introduce error
;
};
const intTime = {
  identify: value => typeof value === 'number',
  default: true,
  tag: 'tag:yaml.org,2002:int',
  format: 'TIME',
  test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+)$/,
  resolve: (str, sign, parts) => parseSexagesimal(sign, parts.replace(/_/g, '')),
  stringify: stringifySexagesimal
};
const floatTime = {
  identify: value => typeof value === 'number',
  default: true,
  tag: 'tag:yaml.org,2002:float',
  format: 'TIME',
  test: /^([-+]?)([0-9][0-9_]*(?::[0-5]?[0-9])+\.[0-9_]*)$/,
  resolve: (str, sign, parts) => parseSexagesimal(sign, parts.replace(/_/g, '')),
  stringify: stringifySexagesimal
};
const timestamp = {
  identify: value => value instanceof Date,
  default: true,
  tag: 'tag:yaml.org,2002:timestamp',
  // If the time zone is omitted, the timestamp is assumed to be specified in UTC. The time part
  // may be omitted altogether, resulting in a date format. In such a case, the time part is
  // assumed to be 00:00:00Z (start of day, UTC).
  test: RegExp('^(?:' + '([0-9]{4})-([0-9]{1,2})-([0-9]{1,2})' +
  // YYYY-Mm-Dd
  '(?:(?:t|T|[ \\t]+)' +
  // t | T | whitespace
  '([0-9]{1,2}):([0-9]{1,2}):([0-9]{1,2}(\\.[0-9]+)?)' +
  // Hh:Mm:Ss(.ss)?
  '(?:[ \\t]*(Z|[-+][012]?[0-9](?::[0-9]{2})?))?' +
  // Z | +5 | -03:30
  ')?' + ')$'),
  resolve: (str, year, month, day, hour, minute, second, millisec, tz) => {
    if (millisec) millisec = (millisec + '00').substr(1, 3);
    let date = Date.UTC(year, month - 1, day, hour || 0, minute || 0, second || 0, millisec || 0);
    if (tz && tz !== 'Z') {
      let d = parseSexagesimal(tz[0], tz.slice(1));
      if (Math.abs(d) < 30) d *= 60;
      date -= 60000 * d;
    }
    return new Date(date);
  },
  stringify: ({
    value
  }) => value.toISOString().replace(/((T00:00)?:00)?\.000Z$/, '')
};

/* global console, process, YAML_SILENCE_DEPRECATION_WARNINGS, YAML_SILENCE_WARNINGS */

function shouldWarn(deprecation) {
  const env = typeof process !== 'undefined' && process.env || {};
  if (deprecation) {
    if (typeof YAML_SILENCE_DEPRECATION_WARNINGS !== 'undefined') return !YAML_SILENCE_DEPRECATION_WARNINGS;
    return !env.YAML_SILENCE_DEPRECATION_WARNINGS;
  }
  if (typeof YAML_SILENCE_WARNINGS !== 'undefined') return !YAML_SILENCE_WARNINGS;
  return !env.YAML_SILENCE_WARNINGS;
}
function warn(warning, type) {
  if (shouldWarn(false)) {
    const emit = typeof process !== 'undefined' && process.emitWarning;
    // This will throw in Jest if `warning` is an Error instance due to
    // https://github.com/facebook/jest/issues/2549
    if (emit) emit(warning, type);else {
      // eslint-disable-next-line no-console
      console.warn(type ? `${type}: ${warning}` : warning);
    }
  }
}
function warnFileDeprecation(filename) {
  if (shouldWarn(true)) {
    const path = filename.replace(/.*yaml[/\\]/i, '').replace(/\.js$/, '').replace(/\\/g, '/');
    warn(`The endpoint 'yaml/${path}' will be removed in a future release.`, 'DeprecationWarning');
  }
}
const warned = {};
function warnOptionDeprecation(name, alternative) {
  if (!warned[name] && shouldWarn(true)) {
    warned[name] = true;
    let msg = `The option '${name}' will be removed in a future release`;
    msg += alternative ? `, use '${alternative}' instead.` : '.';
    warn(msg, 'DeprecationWarning');
  }
}

export { warnOptionDeprecation as a, binary as b, warnFileDeprecation as c, floatTime as f, intTime as i, omap as o, pairs as p, set as s, timestamp as t, warn as w };
