import { _ as _defineProperty, T as Type, f as YAMLReferenceError, b as YAMLSemanticError, e as defaultTags, a as YAMLWarning, c as YAMLError, C as Char, Y as YAMLSyntaxError, P as PlainValue } from './PlainValue-183afbad.js';

function addCommentBefore(str, indent, comment) {
  if (!comment) return str;
  const cc = comment.replace(/[\s\S]^/gm, `$&${indent}#`);
  return `#${cc}\n${indent}${str}`;
}
function addComment(str, indent, comment) {
  return !comment ? str : comment.indexOf('\n') === -1 ? `${str} #${comment}` : `${str}\n` + comment.replace(/^/gm, `${indent || ''}#`);
}

class Node {}

function toJSON(value, arg, ctx) {
  if (Array.isArray(value)) return value.map((v, i) => toJSON(v, String(i), ctx));
  if (value && typeof value.toJSON === 'function') {
    const anchor = ctx && ctx.anchors && ctx.anchors.get(value);
    if (anchor) ctx.onCreate = res => {
      anchor.res = res;
      delete ctx.onCreate;
    };
    const res = value.toJSON(arg, ctx);
    if (anchor && ctx.onCreate) ctx.onCreate(res);
    return res;
  }
  if ((!ctx || !ctx.keep) && typeof value === 'bigint') return Number(value);
  return value;
}

class Scalar extends Node {
  constructor(value) {
    super();
    this.value = value;
  }
  toJSON(arg, ctx) {
    return ctx && ctx.keep ? this.value : toJSON(this.value, arg, ctx);
  }
  toString() {
    return String(this.value);
  }
}

function collectionFromPath(schema, path, value) {
  let v = value;
  for (let i = path.length - 1; i >= 0; --i) {
    const k = path[i];
    if (Number.isInteger(k) && k >= 0) {
      const a = [];
      a[k] = v;
      v = a;
    } else {
      const o = {};
      Object.defineProperty(o, k, {
        value: v,
        writable: true,
        enumerable: true,
        configurable: true
      });
      v = o;
    }
  }
  return schema.createNode(v, false);
}

// null, undefined, or an empty non-string iterable (e.g. [])
const isEmptyPath = path => path == null || typeof path === 'object' && path[Symbol.iterator]().next().done;
class Collection extends Node {
  constructor(schema) {
    super();
    _defineProperty(this, "items", []);
    this.schema = schema;
  }
  addIn(path, value) {
    if (isEmptyPath(path)) this.add(value);else {
      const [key, ...rest] = path;
      const node = this.get(key, true);
      if (node instanceof Collection) node.addIn(rest, value);else if (node === undefined && this.schema) this.set(key, collectionFromPath(this.schema, rest, value));else throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
    }
  }
  deleteIn([key, ...rest]) {
    if (rest.length === 0) return this.delete(key);
    const node = this.get(key, true);
    if (node instanceof Collection) return node.deleteIn(rest);else throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
  }
  getIn([key, ...rest], keepScalar) {
    const node = this.get(key, true);
    if (rest.length === 0) return !keepScalar && node instanceof Scalar ? node.value : node;else return node instanceof Collection ? node.getIn(rest, keepScalar) : undefined;
  }
  hasAllNullValues() {
    return this.items.every(node => {
      if (!node || node.type !== 'PAIR') return false;
      const n = node.value;
      return n == null || n instanceof Scalar && n.value == null && !n.commentBefore && !n.comment && !n.tag;
    });
  }
  hasIn([key, ...rest]) {
    if (rest.length === 0) return this.has(key);
    const node = this.get(key, true);
    return node instanceof Collection ? node.hasIn(rest) : false;
  }
  setIn([key, ...rest], value) {
    if (rest.length === 0) {
      this.set(key, value);
    } else {
      const node = this.get(key, true);
      if (node instanceof Collection) node.setIn(rest, value);else if (node === undefined && this.schema) this.set(key, collectionFromPath(this.schema, rest, value));else throw new Error(`Expected YAML collection at ${key}. Remaining path: ${rest}`);
    }
  }

  // overridden in implementations
  /* istanbul ignore next */
  toJSON() {
    return null;
  }
  toString(ctx, {
    blockItem,
    flowChars,
    isMap,
    itemIndent
  }, onComment, onChompKeep) {
    const {
      indent,
      indentStep,
      stringify
    } = ctx;
    const inFlow = this.type === Type.FLOW_MAP || this.type === Type.FLOW_SEQ || ctx.inFlow;
    if (inFlow) itemIndent += indentStep;
    const allNullValues = isMap && this.hasAllNullValues();
    ctx = Object.assign({}, ctx, {
      allNullValues,
      indent: itemIndent,
      inFlow,
      type: null
    });
    let chompKeep = false;
    let hasItemWithNewLine = false;
    const nodes = this.items.reduce((nodes, item, i) => {
      let comment;
      if (item) {
        if (!chompKeep && item.spaceBefore) nodes.push({
          type: 'comment',
          str: ''
        });
        if (item.commentBefore) item.commentBefore.match(/^.*$/gm).forEach(line => {
          nodes.push({
            type: 'comment',
            str: `#${line}`
          });
        });
        if (item.comment) comment = item.comment;
        if (inFlow && (!chompKeep && item.spaceBefore || item.commentBefore || item.comment || item.key && (item.key.commentBefore || item.key.comment) || item.value && (item.value.commentBefore || item.value.comment))) hasItemWithNewLine = true;
      }
      chompKeep = false;
      let str = stringify(item, ctx, () => comment = null, () => chompKeep = true);
      if (inFlow && !hasItemWithNewLine && str.includes('\n')) hasItemWithNewLine = true;
      if (inFlow && i < this.items.length - 1) str += ',';
      str = addComment(str, itemIndent, comment);
      if (chompKeep && (comment || inFlow)) chompKeep = false;
      nodes.push({
        type: 'item',
        str
      });
      return nodes;
    }, []);
    let str;
    if (nodes.length === 0) {
      str = flowChars.start + flowChars.end;
    } else if (inFlow) {
      const {
        start,
        end
      } = flowChars;
      const strings = nodes.map(n => n.str);
      if (hasItemWithNewLine || strings.reduce((sum, str) => sum + str.length + 2, 2) > Collection.maxFlowStringSingleLineLength) {
        str = start;
        for (const s of strings) {
          str += s ? `\n${indentStep}${indent}${s}` : '\n';
        }
        str += `\n${indent}${end}`;
      } else {
        str = `${start} ${strings.join(' ')} ${end}`;
      }
    } else {
      const strings = nodes.map(blockItem);
      str = strings.shift();
      for (const s of strings) str += s ? `\n${indent}${s}` : '\n';
    }
    if (this.comment) {
      str += '\n' + this.comment.replace(/^/gm, `${indent}#`);
      if (onComment) onComment();
    } else if (chompKeep && onChompKeep) onChompKeep();
    return str;
  }
}
_defineProperty(Collection, "maxFlowStringSingleLineLength", 60);

function asItemIndex(key) {
  let idx = key instanceof Scalar ? key.value : key;
  if (idx && typeof idx === 'string') idx = Number(idx);
  return Number.isInteger(idx) && idx >= 0 ? idx : null;
}
class YAMLSeq extends Collection {
  add(value) {
    this.items.push(value);
  }
  delete(key) {
    const idx = asItemIndex(key);
    if (typeof idx !== 'number') return false;
    const del = this.items.splice(idx, 1);
    return del.length > 0;
  }
  get(key, keepScalar) {
    const idx = asItemIndex(key);
    if (typeof idx !== 'number') return undefined;
    const it = this.items[idx];
    return !keepScalar && it instanceof Scalar ? it.value : it;
  }
  has(key) {
    const idx = asItemIndex(key);
    return typeof idx === 'number' && idx < this.items.length;
  }
  set(key, value) {
    const idx = asItemIndex(key);
    if (typeof idx !== 'number') throw new Error(`Expected a valid index, not ${key}.`);
    this.items[idx] = value;
  }
  toJSON(_, ctx) {
    const seq = [];
    if (ctx && ctx.onCreate) ctx.onCreate(seq);
    let i = 0;
    for (const item of this.items) seq.push(toJSON(item, String(i++), ctx));
    return seq;
  }
  toString(ctx, onComment, onChompKeep) {
    if (!ctx) return JSON.stringify(this);
    return super.toString(ctx, {
      blockItem: n => n.type === 'comment' ? n.str : `- ${n.str}`,
      flowChars: {
        start: '[',
        end: ']'
      },
      isMap: false,
      itemIndent: (ctx.indent || '') + '  '
    }, onComment, onChompKeep);
  }
}

const stringifyKey = (key, jsKey, ctx) => {
  if (jsKey === null) return '';
  if (typeof jsKey !== 'object') return String(jsKey);
  if (key instanceof Node && ctx && ctx.doc) return key.toString({
    anchors: Object.create(null),
    doc: ctx.doc,
    indent: '',
    indentStep: ctx.indentStep,
    inFlow: true,
    inStringifyKey: true,
    stringify: ctx.stringify
  });
  return JSON.stringify(jsKey);
};
class Pair extends Node {
  constructor(key, value = null) {
    super();
    this.key = key;
    this.value = value;
    this.type = Pair.Type.PAIR;
  }
  get commentBefore() {
    return this.key instanceof Node ? this.key.commentBefore : undefined;
  }
  set commentBefore(cb) {
    if (this.key == null) this.key = new Scalar(null);
    if (this.key instanceof Node) this.key.commentBefore = cb;else {
      const msg = 'Pair.commentBefore is an alias for Pair.key.commentBefore. To set it, the key must be a Node.';
      throw new Error(msg);
    }
  }
  addToJSMap(ctx, map) {
    const key = toJSON(this.key, '', ctx);
    if (map instanceof Map) {
      const value = toJSON(this.value, key, ctx);
      map.set(key, value);
    } else if (map instanceof Set) {
      map.add(key);
    } else {
      const stringKey = stringifyKey(this.key, key, ctx);
      const value = toJSON(this.value, stringKey, ctx);
      if (stringKey in map) Object.defineProperty(map, stringKey, {
        value,
        writable: true,
        enumerable: true,
        configurable: true
      });else map[stringKey] = value;
    }
    return map;
  }
  toJSON(_, ctx) {
    const pair = ctx && ctx.mapAsMap ? new Map() : {};
    return this.addToJSMap(ctx, pair);
  }
  toString(ctx, onComment, onChompKeep) {
    if (!ctx || !ctx.doc) return JSON.stringify(this);
    const {
      indent: indentSize,
      indentSeq,
      simpleKeys
    } = ctx.doc.options;
    let {
      key,
      value
    } = this;
    let keyComment = key instanceof Node && key.comment;
    if (simpleKeys) {
      if (keyComment) {
        throw new Error('With simple keys, key nodes cannot have comments');
      }
      if (key instanceof Collection) {
        const msg = 'With simple keys, collection cannot be used as a key value';
        throw new Error(msg);
      }
    }
    let explicitKey = !simpleKeys && (!key || keyComment || (key instanceof Node ? key instanceof Collection || key.type === Type.BLOCK_FOLDED || key.type === Type.BLOCK_LITERAL : typeof key === 'object'));
    const {
      doc,
      indent,
      indentStep,
      stringify
    } = ctx;
    ctx = Object.assign({}, ctx, {
      implicitKey: !explicitKey,
      indent: indent + indentStep
    });
    let chompKeep = false;
    let str = stringify(key, ctx, () => keyComment = null, () => chompKeep = true);
    str = addComment(str, ctx.indent, keyComment);
    if (!explicitKey && str.length > 1024) {
      if (simpleKeys) throw new Error('With simple keys, single line scalar must not span more than 1024 characters');
      explicitKey = true;
    }
    if (ctx.allNullValues && !simpleKeys) {
      if (this.comment) {
        str = addComment(str, ctx.indent, this.comment);
        if (onComment) onComment();
      } else if (chompKeep && !keyComment && onChompKeep) onChompKeep();
      return ctx.inFlow && !explicitKey ? str : `? ${str}`;
    }
    str = explicitKey ? `? ${str}\n${indent}:` : `${str}:`;
    if (this.comment) {
      // expected (but not strictly required) to be a single-line comment
      str = addComment(str, ctx.indent, this.comment);
      if (onComment) onComment();
    }
    let vcb = '';
    let valueComment = null;
    if (value instanceof Node) {
      if (value.spaceBefore) vcb = '\n';
      if (value.commentBefore) {
        const cs = value.commentBefore.replace(/^/gm, `${ctx.indent}#`);
        vcb += `\n${cs}`;
      }
      valueComment = value.comment;
    } else if (value && typeof value === 'object') {
      value = doc.schema.createNode(value, true);
    }
    ctx.implicitKey = false;
    if (!explicitKey && !this.comment && value instanceof Scalar) ctx.indentAtStart = str.length + 1;
    chompKeep = false;
    if (!indentSeq && indentSize >= 2 && !ctx.inFlow && !explicitKey && value instanceof YAMLSeq && value.type !== Type.FLOW_SEQ && !value.tag && !doc.anchors.getName(value)) {
      // If indentSeq === false, consider '- ' as part of indentation where possible
      ctx.indent = ctx.indent.substr(2);
    }
    const valueStr = stringify(value, ctx, () => valueComment = null, () => chompKeep = true);
    let ws = ' ';
    if (vcb || this.comment) {
      ws = `${vcb}\n${ctx.indent}`;
    } else if (!explicitKey && value instanceof Collection) {
      const flow = valueStr[0] === '[' || valueStr[0] === '{';
      if (!flow || valueStr.includes('\n')) ws = `\n${ctx.indent}`;
    } else if (valueStr[0] === '\n') ws = '';
    if (chompKeep && !valueComment && onChompKeep) onChompKeep();
    return addComment(str + ws + valueStr, ctx.indent, valueComment);
  }
}
_defineProperty(Pair, "Type", {
  PAIR: 'PAIR',
  MERGE_PAIR: 'MERGE_PAIR'
});

const getAliasCount = (node, anchors) => {
  if (node instanceof Alias) {
    const anchor = anchors.get(node.source);
    return anchor.count * anchor.aliasCount;
  } else if (node instanceof Collection) {
    let count = 0;
    for (const item of node.items) {
      const c = getAliasCount(item, anchors);
      if (c > count) count = c;
    }
    return count;
  } else if (node instanceof Pair) {
    const kc = getAliasCount(node.key, anchors);
    const vc = getAliasCount(node.value, anchors);
    return Math.max(kc, vc);
  }
  return 1;
};
class Alias extends Node {
  static stringify({
    range,
    source
  }, {
    anchors,
    doc,
    implicitKey,
    inStringifyKey
  }) {
    let anchor = Object.keys(anchors).find(a => anchors[a] === source);
    if (!anchor && inStringifyKey) anchor = doc.anchors.getName(source) || doc.anchors.newName();
    if (anchor) return `*${anchor}${implicitKey ? ' ' : ''}`;
    const msg = doc.anchors.getName(source) ? 'Alias node must be after source node' : 'Source node not found for alias node';
    throw new Error(`${msg} [${range}]`);
  }
  constructor(source) {
    super();
    this.source = source;
    this.type = Type.ALIAS;
  }
  set tag(t) {
    throw new Error('Alias nodes cannot have tags');
  }
  toJSON(arg, ctx) {
    if (!ctx) return toJSON(this.source, arg, ctx);
    const {
      anchors,
      maxAliasCount
    } = ctx;
    const anchor = anchors.get(this.source);
    /* istanbul ignore if */
    if (!anchor || anchor.res === undefined) {
      const msg = 'This should not happen: Alias anchor was not resolved?';
      if (this.cstNode) throw new YAMLReferenceError(this.cstNode, msg);else throw new ReferenceError(msg);
    }
    if (maxAliasCount >= 0) {
      anchor.count += 1;
      if (anchor.aliasCount === 0) anchor.aliasCount = getAliasCount(this.source, anchors);
      if (anchor.count * anchor.aliasCount > maxAliasCount) {
        const msg = 'Excessive alias count indicates a resource exhaustion attack';
        if (this.cstNode) throw new YAMLReferenceError(this.cstNode, msg);else throw new ReferenceError(msg);
      }
    }
    return anchor.res;
  }

  // Only called when stringifying an alias mapping key while constructing
  // Object output.
  toString(ctx) {
    return Alias.stringify(this, ctx);
  }
}
_defineProperty(Alias, "default", true);

function findPair(items, key) {
  const k = key instanceof Scalar ? key.value : key;
  for (const it of items) {
    if (it instanceof Pair) {
      if (it.key === key || it.key === k) return it;
      if (it.key && it.key.value === k) return it;
    }
  }
  return undefined;
}
class YAMLMap extends Collection {
  add(pair, overwrite) {
    if (!pair) pair = new Pair(pair);else if (!(pair instanceof Pair)) pair = new Pair(pair.key || pair, pair.value);
    const prev = findPair(this.items, pair.key);
    const sortEntries = this.schema && this.schema.sortMapEntries;
    if (prev) {
      if (overwrite) prev.value = pair.value;else throw new Error(`Key ${pair.key} already set`);
    } else if (sortEntries) {
      const i = this.items.findIndex(item => sortEntries(pair, item) < 0);
      if (i === -1) this.items.push(pair);else this.items.splice(i, 0, pair);
    } else {
      this.items.push(pair);
    }
  }
  delete(key) {
    const it = findPair(this.items, key);
    if (!it) return false;
    const del = this.items.splice(this.items.indexOf(it), 1);
    return del.length > 0;
  }
  get(key, keepScalar) {
    const it = findPair(this.items, key);
    const node = it && it.value;
    return !keepScalar && node instanceof Scalar ? node.value : node;
  }
  has(key) {
    return !!findPair(this.items, key);
  }
  set(key, value) {
    this.add(new Pair(key, value), true);
  }

  /**
   * @param {*} arg ignored
   * @param {*} ctx Conversion context, originally set in Document#toJSON()
   * @param {Class} Type If set, forces the returned collection type
   * @returns {*} Instance of Type, Map, or Object
   */
  toJSON(_, ctx, Type) {
    const map = Type ? new Type() : ctx && ctx.mapAsMap ? new Map() : {};
    if (ctx && ctx.onCreate) ctx.onCreate(map);
    for (const item of this.items) item.addToJSMap(ctx, map);
    return map;
  }
  toString(ctx, onComment, onChompKeep) {
    if (!ctx) return JSON.stringify(this);
    for (const item of this.items) {
      if (!(item instanceof Pair)) throw new Error(`Map items must all be pairs; found ${JSON.stringify(item)} instead`);
    }
    return super.toString(ctx, {
      blockItem: n => n.str,
      flowChars: {
        start: '{',
        end: '}'
      },
      isMap: true,
      itemIndent: ctx.indent || ''
    }, onComment, onChompKeep);
  }
}

const MERGE_KEY = '<<';
class Merge extends Pair {
  constructor(pair) {
    if (pair instanceof Pair) {
      let seq = pair.value;
      if (!(seq instanceof YAMLSeq)) {
        seq = new YAMLSeq();
        seq.items.push(pair.value);
        seq.range = pair.value.range;
      }
      super(pair.key, seq);
      this.range = pair.range;
    } else {
      super(new Scalar(MERGE_KEY), new YAMLSeq());
    }
    this.type = Pair.Type.MERGE_PAIR;
  }

  // If the value associated with a merge key is a single mapping node, each of
  // its key/value pairs is inserted into the current mapping, unless the key
  // already exists in it. If the value associated with the merge key is a
  // sequence, then this sequence is expected to contain mapping nodes and each
  // of these nodes is merged in turn according to its order in the sequence.
  // Keys in mapping nodes earlier in the sequence override keys specified in
  // later mapping nodes. -- http://yaml.org/type/merge.html
  addToJSMap(ctx, map) {
    for (const {
      source
    } of this.value.items) {
      if (!(source instanceof YAMLMap)) throw new Error('Merge sources must be maps');
      const srcMap = source.toJSON(null, ctx, Map);
      for (const [key, value] of srcMap) {
        if (map instanceof Map) {
          if (!map.has(key)) map.set(key, value);
        } else if (map instanceof Set) {
          map.add(key);
        } else if (!Object.prototype.hasOwnProperty.call(map, key)) {
          Object.defineProperty(map, key, {
            value,
            writable: true,
            enumerable: true,
            configurable: true
          });
        }
      }
    }
    return map;
  }
  toString(ctx, onComment) {
    const seq = this.value;
    if (seq.items.length > 1) return super.toString(ctx, onComment);
    this.value = seq.items[0];
    const str = super.toString(ctx, onComment);
    this.value = seq;
    return str;
  }
}

const binaryOptions = {
  defaultType: Type.BLOCK_LITERAL,
  lineWidth: 76
};
const boolOptions = {
  trueStr: 'true',
  falseStr: 'false'
};
const intOptions = {
  asBigInt: false
};
const nullOptions = {
  nullStr: 'null'
};
const strOptions = {
  defaultType: Type.PLAIN,
  doubleQuoted: {
    jsonEncoding: false,
    minMultiLineLength: 40
  },
  fold: {
    lineWidth: 80,
    minContentWidth: 20
  }
};

// falls back to string on no match
function resolveScalar(str, tags, scalarFallback) {
  for (const {
    format,
    test,
    resolve
  } of tags) {
    if (test) {
      const match = str.match(test);
      if (match) {
        let res = resolve.apply(null, match);
        if (!(res instanceof Scalar)) res = new Scalar(res);
        if (format) res.format = format;
        return res;
      }
    }
  }
  if (scalarFallback) str = scalarFallback(str);
  return new Scalar(str);
}

const FOLD_FLOW = 'flow';
const FOLD_BLOCK = 'block';
const FOLD_QUOTED = 'quoted';

// presumes i+1 is at the start of a line
// returns index of last newline in more-indented block
const consumeMoreIndentedLines = (text, i) => {
  let ch = text[i + 1];
  while (ch === ' ' || ch === '\t') {
    do {
      ch = text[i += 1];
    } while (ch && ch !== '\n');
    ch = text[i + 1];
  }
  return i;
};

/**
 * Tries to keep input at up to `lineWidth` characters, splitting only on spaces
 * not followed by newlines or spaces unless `mode` is `'quoted'`. Lines are
 * terminated with `\n` and started with `indent`.
 *
 * @param {string} text
 * @param {string} indent
 * @param {string} [mode='flow'] `'block'` prevents more-indented lines
 *   from being folded; `'quoted'` allows for `\` escapes, including escaped
 *   newlines
 * @param {Object} options
 * @param {number} [options.indentAtStart] Accounts for leading contents on
 *   the first line, defaulting to `indent.length`
 * @param {number} [options.lineWidth=80]
 * @param {number} [options.minContentWidth=20] Allow highly indented lines to
 *   stretch the line width or indent content from the start
 * @param {function} options.onFold Called once if the text is folded
 * @param {function} options.onFold Called once if any line of text exceeds
 *   lineWidth characters
 */
function foldFlowLines(text, indent, mode, {
  indentAtStart,
  lineWidth = 80,
  minContentWidth = 20,
  onFold,
  onOverflow
}) {
  if (!lineWidth || lineWidth < 0) return text;
  const endStep = Math.max(1 + minContentWidth, 1 + lineWidth - indent.length);
  if (text.length <= endStep) return text;
  const folds = [];
  const escapedFolds = {};
  let end = lineWidth - indent.length;
  if (typeof indentAtStart === 'number') {
    if (indentAtStart > lineWidth - Math.max(2, minContentWidth)) folds.push(0);else end = lineWidth - indentAtStart;
  }
  let split = undefined;
  let prev = undefined;
  let overflow = false;
  let i = -1;
  let escStart = -1;
  let escEnd = -1;
  if (mode === FOLD_BLOCK) {
    i = consumeMoreIndentedLines(text, i);
    if (i !== -1) end = i + endStep;
  }
  for (let ch; ch = text[i += 1];) {
    if (mode === FOLD_QUOTED && ch === '\\') {
      escStart = i;
      switch (text[i + 1]) {
        case 'x':
          i += 3;
          break;
        case 'u':
          i += 5;
          break;
        case 'U':
          i += 9;
          break;
        default:
          i += 1;
      }
      escEnd = i;
    }
    if (ch === '\n') {
      if (mode === FOLD_BLOCK) i = consumeMoreIndentedLines(text, i);
      end = i + endStep;
      split = undefined;
    } else {
      if (ch === ' ' && prev && prev !== ' ' && prev !== '\n' && prev !== '\t') {
        // space surrounded by non-space can be replaced with newline + indent
        const next = text[i + 1];
        if (next && next !== ' ' && next !== '\n' && next !== '\t') split = i;
      }
      if (i >= end) {
        if (split) {
          folds.push(split);
          end = split + endStep;
          split = undefined;
        } else if (mode === FOLD_QUOTED) {
          // white-space collected at end may stretch past lineWidth
          while (prev === ' ' || prev === '\t') {
            prev = ch;
            ch = text[i += 1];
            overflow = true;
          }
          // Account for newline escape, but don't break preceding escape
          const j = i > escEnd + 1 ? i - 2 : escStart - 1;
          // Bail out if lineWidth & minContentWidth are shorter than an escape string
          if (escapedFolds[j]) return text;
          folds.push(j);
          escapedFolds[j] = true;
          end = j + endStep;
          split = undefined;
        } else {
          overflow = true;
        }
      }
    }
    prev = ch;
  }
  if (overflow && onOverflow) onOverflow();
  if (folds.length === 0) return text;
  if (onFold) onFold();
  let res = text.slice(0, folds[0]);
  for (let i = 0; i < folds.length; ++i) {
    const fold = folds[i];
    const end = folds[i + 1] || text.length;
    if (fold === 0) res = `\n${indent}${text.slice(0, end)}`;else {
      if (mode === FOLD_QUOTED && escapedFolds[fold]) res += `${text[fold]}\\`;
      res += `\n${indent}${text.slice(fold + 1, end)}`;
    }
  }
  return res;
}

const getFoldOptions = ({
  indentAtStart
}) => indentAtStart ? Object.assign({
  indentAtStart
}, strOptions.fold) : strOptions.fold;

// Also checks for lines starting with %, as parsing the output as YAML 1.1 will
// presume that's starting a new document.
const containsDocumentMarker = str => /^(%|---|\.\.\.)/m.test(str);
function lineLengthOverLimit(str, lineWidth, indentLength) {
  if (!lineWidth || lineWidth < 0) return false;
  const limit = lineWidth - indentLength;
  const strLen = str.length;
  if (strLen <= limit) return false;
  for (let i = 0, start = 0; i < strLen; ++i) {
    if (str[i] === '\n') {
      if (i - start > limit) return true;
      start = i + 1;
      if (strLen - start <= limit) return false;
    }
  }
  return true;
}
function doubleQuotedString(value, ctx) {
  const {
    implicitKey
  } = ctx;
  const {
    jsonEncoding,
    minMultiLineLength
  } = strOptions.doubleQuoted;
  const json = JSON.stringify(value);
  if (jsonEncoding) return json;
  const indent = ctx.indent || (containsDocumentMarker(value) ? '  ' : '');
  let str = '';
  let start = 0;
  for (let i = 0, ch = json[i]; ch; ch = json[++i]) {
    if (ch === ' ' && json[i + 1] === '\\' && json[i + 2] === 'n') {
      // space before newline needs to be escaped to not be folded
      str += json.slice(start, i) + '\\ ';
      i += 1;
      start = i;
      ch = '\\';
    }
    if (ch === '\\') switch (json[i + 1]) {
      case 'u':
        {
          str += json.slice(start, i);
          const code = json.substr(i + 2, 4);
          switch (code) {
            case '0000':
              str += '\\0';
              break;
            case '0007':
              str += '\\a';
              break;
            case '000b':
              str += '\\v';
              break;
            case '001b':
              str += '\\e';
              break;
            case '0085':
              str += '\\N';
              break;
            case '00a0':
              str += '\\_';
              break;
            case '2028':
              str += '\\L';
              break;
            case '2029':
              str += '\\P';
              break;
            default:
              if (code.substr(0, 2) === '00') str += '\\x' + code.substr(2);else str += json.substr(i, 6);
          }
          i += 5;
          start = i + 1;
        }
        break;
      case 'n':
        if (implicitKey || json[i + 2] === '"' || json.length < minMultiLineLength) {
          i += 1;
        } else {
          // folding will eat first newline
          str += json.slice(start, i) + '\n\n';
          while (json[i + 2] === '\\' && json[i + 3] === 'n' && json[i + 4] !== '"') {
            str += '\n';
            i += 2;
          }
          str += indent;
          // space after newline needs to be escaped to not be folded
          if (json[i + 2] === ' ') str += '\\';
          i += 1;
          start = i + 1;
        }
        break;
      default:
        i += 1;
    }
  }
  str = start ? str + json.slice(start) : json;
  return implicitKey ? str : foldFlowLines(str, indent, FOLD_QUOTED, getFoldOptions(ctx));
}
function singleQuotedString(value, ctx) {
  if (ctx.implicitKey) {
    if (/\n/.test(value)) return doubleQuotedString(value, ctx);
  } else {
    // single quoted string can't have leading or trailing whitespace around newline
    if (/[ \t]\n|\n[ \t]/.test(value)) return doubleQuotedString(value, ctx);
  }
  const indent = ctx.indent || (containsDocumentMarker(value) ? '  ' : '');
  const res = "'" + value.replace(/'/g, "''").replace(/\n+/g, `$&\n${indent}`) + "'";
  return ctx.implicitKey ? res : foldFlowLines(res, indent, FOLD_FLOW, getFoldOptions(ctx));
}
function blockString({
  comment,
  type,
  value
}, ctx, onComment, onChompKeep) {
  // 1. Block can't end in whitespace unless the last line is non-empty.
  // 2. Strings consisting of only whitespace are best rendered explicitly.
  if (/\n[\t ]+$/.test(value) || /^\s*$/.test(value)) {
    return doubleQuotedString(value, ctx);
  }
  const indent = ctx.indent || (ctx.forceBlockIndent || containsDocumentMarker(value) ? '  ' : '');
  const indentSize = indent ? '2' : '1'; // root is at -1
  const literal = type === Type.BLOCK_FOLDED ? false : type === Type.BLOCK_LITERAL ? true : !lineLengthOverLimit(value, strOptions.fold.lineWidth, indent.length);
  let header = literal ? '|' : '>';
  if (!value) return header + '\n';
  let wsStart = '';
  let wsEnd = '';
  value = value.replace(/[\n\t ]*$/, ws => {
    const n = ws.indexOf('\n');
    if (n === -1) {
      header += '-'; // strip
    } else if (value === ws || n !== ws.length - 1) {
      header += '+'; // keep
      if (onChompKeep) onChompKeep();
    }
    wsEnd = ws.replace(/\n$/, '');
    return '';
  }).replace(/^[\n ]*/, ws => {
    if (ws.indexOf(' ') !== -1) header += indentSize;
    const m = ws.match(/ +$/);
    if (m) {
      wsStart = ws.slice(0, -m[0].length);
      return m[0];
    } else {
      wsStart = ws;
      return '';
    }
  });
  if (wsEnd) wsEnd = wsEnd.replace(/\n+(?!\n|$)/g, `$&${indent}`);
  if (wsStart) wsStart = wsStart.replace(/\n+/g, `$&${indent}`);
  if (comment) {
    header += ' #' + comment.replace(/ ?[\r\n]+/g, ' ');
    if (onComment) onComment();
  }
  if (!value) return `${header}${indentSize}\n${indent}${wsEnd}`;
  if (literal) {
    value = value.replace(/\n+/g, `$&${indent}`);
    return `${header}\n${indent}${wsStart}${value}${wsEnd}`;
  }
  value = value.replace(/\n+/g, '\n$&').replace(/(?:^|\n)([\t ].*)(?:([\n\t ]*)\n(?![\n\t ]))?/g, '$1$2') // more-indented lines aren't folded
  //         ^ ind.line  ^ empty     ^ capture next empty lines only at end of indent
  .replace(/\n+/g, `$&${indent}`);
  const body = foldFlowLines(`${wsStart}${value}${wsEnd}`, indent, FOLD_BLOCK, strOptions.fold);
  return `${header}\n${indent}${body}`;
}
function plainString(item, ctx, onComment, onChompKeep) {
  const {
    comment,
    type,
    value
  } = item;
  const {
    actualString,
    implicitKey,
    indent,
    inFlow
  } = ctx;
  if (implicitKey && /[\n[\]{},]/.test(value) || inFlow && /[[\]{},]/.test(value)) {
    return doubleQuotedString(value, ctx);
  }
  if (!value || /^[\n\t ,[\]{}#&*!|>'"%@`]|^[?-]$|^[?-][ \t]|[\n:][ \t]|[ \t]\n|[\n\t ]#|[\n\t :]$/.test(value)) {
    // not allowed:
    // - empty string, '-' or '?'
    // - start with an indicator character (except [?:-]) or /[?-] /
    // - '\n ', ': ' or ' \n' anywhere
    // - '#' not preceded by a non-space char
    // - end with ' ' or ':'
    return implicitKey || inFlow || value.indexOf('\n') === -1 ? value.indexOf('"') !== -1 && value.indexOf("'") === -1 ? singleQuotedString(value, ctx) : doubleQuotedString(value, ctx) : blockString(item, ctx, onComment, onChompKeep);
  }
  if (!implicitKey && !inFlow && type !== Type.PLAIN && value.indexOf('\n') !== -1) {
    // Where allowed & type not set explicitly, prefer block style for multiline strings
    return blockString(item, ctx, onComment, onChompKeep);
  }
  if (indent === '' && containsDocumentMarker(value)) {
    ctx.forceBlockIndent = true;
    return blockString(item, ctx, onComment, onChompKeep);
  }
  const str = value.replace(/\n+/g, `$&\n${indent}`);
  // Verify that output will be parsed as a string, as e.g. plain numbers and
  // booleans get parsed with those types in v1.2 (e.g. '42', 'true' & '0.9e-3'),
  // and others in v1.1.
  if (actualString) {
    const {
      tags
    } = ctx.doc.schema;
    const resolved = resolveScalar(str, tags, tags.scalarFallback).value;
    if (typeof resolved !== 'string') return doubleQuotedString(value, ctx);
  }
  const body = implicitKey ? str : foldFlowLines(str, indent, FOLD_FLOW, getFoldOptions(ctx));
  if (comment && !inFlow && (body.indexOf('\n') !== -1 || comment.indexOf('\n') !== -1)) {
    if (onComment) onComment();
    return addCommentBefore(body, indent, comment);
  }
  return body;
}
function stringifyString(item, ctx, onComment, onChompKeep) {
  const {
    defaultType
  } = strOptions;
  const {
    implicitKey,
    inFlow
  } = ctx;
  let {
    type,
    value
  } = item;
  if (typeof value !== 'string') {
    value = String(value);
    item = Object.assign({}, item, {
      value
    });
  }
  const _stringify = _type => {
    switch (_type) {
      case Type.BLOCK_FOLDED:
      case Type.BLOCK_LITERAL:
        return blockString(item, ctx, onComment, onChompKeep);
      case Type.QUOTE_DOUBLE:
        return doubleQuotedString(value, ctx);
      case Type.QUOTE_SINGLE:
        return singleQuotedString(value, ctx);
      case Type.PLAIN:
        return plainString(item, ctx, onComment, onChompKeep);
      default:
        return null;
    }
  };
  if (type !== Type.QUOTE_DOUBLE && /[\x00-\x08\x0b-\x1f\x7f-\x9f]/.test(value)) {
    // force double quotes on control characters
    type = Type.QUOTE_DOUBLE;
  } else if ((implicitKey || inFlow) && (type === Type.BLOCK_FOLDED || type === Type.BLOCK_LITERAL)) {
    // should not happen; blocks are not valid inside flow containers
    type = Type.QUOTE_DOUBLE;
  }
  let res = _stringify(type);
  if (res === null) {
    res = _stringify(defaultType);
    if (res === null) throw new Error(`Unsupported default string type ${defaultType}`);
  }
  return res;
}

function stringifyNumber({
  format,
  minFractionDigits,
  tag,
  value
}) {
  if (typeof value === 'bigint') return String(value);
  if (!isFinite(value)) return isNaN(value) ? '.nan' : value < 0 ? '-.inf' : '.inf';
  let n = JSON.stringify(value);
  if (!format && minFractionDigits && (!tag || tag === 'tag:yaml.org,2002:float') && /^\d/.test(n)) {
    let i = n.indexOf('.');
    if (i < 0) {
      i = n.length;
      n += '.';
    }
    let d = minFractionDigits - (n.length - i - 1);
    while (d-- > 0) n += '0';
  }
  return n;
}

function checkFlowCollectionEnd(errors, cst) {
  let char, name;
  switch (cst.type) {
    case Type.FLOW_MAP:
      char = '}';
      name = 'flow map';
      break;
    case Type.FLOW_SEQ:
      char = ']';
      name = 'flow sequence';
      break;
    default:
      errors.push(new YAMLSemanticError(cst, 'Not a flow collection!?'));
      return;
  }
  let lastItem;
  for (let i = cst.items.length - 1; i >= 0; --i) {
    const item = cst.items[i];
    if (!item || item.type !== Type.COMMENT) {
      lastItem = item;
      break;
    }
  }
  if (lastItem && lastItem.char !== char) {
    const msg = `Expected ${name} to end with ${char}`;
    let err;
    if (typeof lastItem.offset === 'number') {
      err = new YAMLSemanticError(cst, msg);
      err.offset = lastItem.offset + 1;
    } else {
      err = new YAMLSemanticError(lastItem, msg);
      if (lastItem.range && lastItem.range.end) err.offset = lastItem.range.end - lastItem.range.start;
    }
    errors.push(err);
  }
}
function checkFlowCommentSpace(errors, comment) {
  const prev = comment.context.src[comment.range.start - 1];
  if (prev !== '\n' && prev !== '\t' && prev !== ' ') {
    const msg = 'Comments must be separated from other tokens by white space characters';
    errors.push(new YAMLSemanticError(comment, msg));
  }
}
function getLongKeyError(source, key) {
  const sk = String(key);
  const k = sk.substr(0, 8) + '...' + sk.substr(-8);
  return new YAMLSemanticError(source, `The "${k}" key is too long`);
}
function resolveComments(collection, comments) {
  for (const {
    afterKey,
    before,
    comment
  } of comments) {
    let item = collection.items[before];
    if (!item) {
      if (comment !== undefined) {
        if (collection.comment) collection.comment += '\n' + comment;else collection.comment = comment;
      }
    } else {
      if (afterKey && item.value) item = item.value;
      if (comment === undefined) {
        if (afterKey || !item.commentBefore) item.spaceBefore = true;
      } else {
        if (item.commentBefore) item.commentBefore += '\n' + comment;else item.commentBefore = comment;
      }
    }
  }
}

// on error, will return { str: string, errors: Error[] }
function resolveString(doc, node) {
  const res = node.strValue;
  if (!res) return '';
  if (typeof res === 'string') return res;
  res.errors.forEach(error => {
    if (!error.source) error.source = node;
    doc.errors.push(error);
  });
  return res.str;
}

function resolveTagHandle(doc, node) {
  const {
    handle,
    suffix
  } = node.tag;
  let prefix = doc.tagPrefixes.find(p => p.handle === handle);
  if (!prefix) {
    const dtp = doc.getDefaults().tagPrefixes;
    if (dtp) prefix = dtp.find(p => p.handle === handle);
    if (!prefix) throw new YAMLSemanticError(node, `The ${handle} tag handle is non-default and was not declared.`);
  }
  if (!suffix) throw new YAMLSemanticError(node, `The ${handle} tag has no suffix.`);
  if (handle === '!' && (doc.version || doc.options.version) === '1.0') {
    if (suffix[0] === '^') {
      doc.warnings.push(new YAMLWarning(node, 'YAML 1.0 ^ tag expansion is not supported'));
      return suffix;
    }
    if (/[:/]/.test(suffix)) {
      // word/foo -> tag:word.yaml.org,2002:foo
      const vocab = suffix.match(/^([a-z0-9-]+)\/(.*)/i);
      return vocab ? `tag:${vocab[1]}.yaml.org,2002:${vocab[2]}` : `tag:${suffix}`;
    }
  }
  return prefix.prefix + decodeURIComponent(suffix);
}
function resolveTagName(doc, node) {
  const {
    tag,
    type
  } = node;
  let nonSpecific = false;
  if (tag) {
    const {
      handle,
      suffix,
      verbatim
    } = tag;
    if (verbatim) {
      if (verbatim !== '!' && verbatim !== '!!') return verbatim;
      const msg = `Verbatim tags aren't resolved, so ${verbatim} is invalid.`;
      doc.errors.push(new YAMLSemanticError(node, msg));
    } else if (handle === '!' && !suffix) {
      nonSpecific = true;
    } else {
      try {
        return resolveTagHandle(doc, node);
      } catch (error) {
        doc.errors.push(error);
      }
    }
  }
  switch (type) {
    case Type.BLOCK_FOLDED:
    case Type.BLOCK_LITERAL:
    case Type.QUOTE_DOUBLE:
    case Type.QUOTE_SINGLE:
      return defaultTags.STR;
    case Type.FLOW_MAP:
    case Type.MAP:
      return defaultTags.MAP;
    case Type.FLOW_SEQ:
    case Type.SEQ:
      return defaultTags.SEQ;
    case Type.PLAIN:
      return nonSpecific ? defaultTags.STR : null;
    default:
      return null;
  }
}

function resolveByTagName(doc, node, tagName) {
  const {
    tags
  } = doc.schema;
  const matchWithTest = [];
  for (const tag of tags) {
    if (tag.tag === tagName) {
      if (tag.test) matchWithTest.push(tag);else {
        const res = tag.resolve(doc, node);
        return res instanceof Collection ? res : new Scalar(res);
      }
    }
  }
  const str = resolveString(doc, node);
  if (typeof str === 'string' && matchWithTest.length > 0) return resolveScalar(str, matchWithTest, tags.scalarFallback);
  return null;
}
function getFallbackTagName({
  type
}) {
  switch (type) {
    case Type.FLOW_MAP:
    case Type.MAP:
      return defaultTags.MAP;
    case Type.FLOW_SEQ:
    case Type.SEQ:
      return defaultTags.SEQ;
    default:
      return defaultTags.STR;
  }
}
function resolveTag(doc, node, tagName) {
  try {
    const res = resolveByTagName(doc, node, tagName);
    if (res) {
      if (tagName && node.tag) res.tag = tagName;
      return res;
    }
  } catch (error) {
    if (error instanceof YAMLError) {
      if (!error.source) error.source = node;
      doc.errors.push(error);
    } else {
      const msg = error instanceof Error ? error.message : String(error);
      doc.errors.push(new YAMLSemanticError(node, msg));
    }
    return null;
  }
  try {
    const fallback = getFallbackTagName(node);
    if (!fallback) throw new Error(`The tag ${tagName} is unavailable`);
    const msg = `The tag ${tagName} is unavailable, falling back to ${fallback}`;
    doc.warnings.push(new YAMLWarning(node, msg));
    const res = resolveByTagName(doc, node, fallback);
    res.tag = tagName;
    return res;
  } catch (error) {
    const refError = new YAMLReferenceError(node, error.message);
    refError.stack = error.stack;
    doc.errors.push(refError);
    return null;
  }
}

const isCollectionItem = node => {
  if (!node) return false;
  const {
    type
  } = node;
  return type === Type.MAP_KEY || type === Type.MAP_VALUE || type === Type.SEQ_ITEM;
};
function resolveNodeProps(errors, node) {
  const comments = {
    before: [],
    after: []
  };
  let hasAnchor = false;
  let hasTag = false;
  const props = isCollectionItem(node.context.parent) ? node.context.parent.props.concat(node.props) : node.props;
  for (const {
    start,
    end
  } of props) {
    switch (node.context.src[start]) {
      case Char.COMMENT:
        {
          if (!node.commentHasRequiredWhitespace(start)) {
            const msg = 'Comments must be separated from other tokens by white space characters';
            errors.push(new YAMLSemanticError(node, msg));
          }
          const {
            header,
            valueRange
          } = node;
          const cc = valueRange && (start > valueRange.start || header && start > header.start) ? comments.after : comments.before;
          cc.push(node.context.src.slice(start + 1, end));
          break;
        }

      // Actual anchor & tag resolution is handled by schema, here we just complain
      case Char.ANCHOR:
        if (hasAnchor) {
          const msg = 'A node can have at most one anchor';
          errors.push(new YAMLSemanticError(node, msg));
        }
        hasAnchor = true;
        break;
      case Char.TAG:
        if (hasTag) {
          const msg = 'A node can have at most one tag';
          errors.push(new YAMLSemanticError(node, msg));
        }
        hasTag = true;
        break;
    }
  }
  return {
    comments,
    hasAnchor,
    hasTag
  };
}
function resolveNodeValue(doc, node) {
  const {
    anchors,
    errors,
    schema
  } = doc;
  if (node.type === Type.ALIAS) {
    const name = node.rawValue;
    const src = anchors.getNode(name);
    if (!src) {
      const msg = `Aliased anchor not found: ${name}`;
      errors.push(new YAMLReferenceError(node, msg));
      return null;
    }

    // Lazy resolution for circular references
    const res = new Alias(src);
    anchors._cstAliases.push(res);
    return res;
  }
  const tagName = resolveTagName(doc, node);
  if (tagName) return resolveTag(doc, node, tagName);
  if (node.type !== Type.PLAIN) {
    const msg = `Failed to resolve ${node.type} node here`;
    errors.push(new YAMLSyntaxError(node, msg));
    return null;
  }
  try {
    const str = resolveString(doc, node);
    return resolveScalar(str, schema.tags, schema.tags.scalarFallback);
  } catch (error) {
    if (!error.source) error.source = node;
    errors.push(error);
    return null;
  }
}

// sets node.resolved on success
function resolveNode(doc, node) {
  if (!node) return null;
  if (node.error) doc.errors.push(node.error);
  const {
    comments,
    hasAnchor,
    hasTag
  } = resolveNodeProps(doc.errors, node);
  if (hasAnchor) {
    const {
      anchors
    } = doc;
    const name = node.anchor;
    const prev = anchors.getNode(name);
    // At this point, aliases for any preceding node with the same anchor
    // name have already been resolved, so it may safely be renamed.
    if (prev) anchors.map[anchors.newName(name)] = prev;
    // During parsing, we need to store the CST node in anchors.map as
    // anchors need to be available during resolution to allow for
    // circular references.
    anchors.map[name] = node;
  }
  if (node.type === Type.ALIAS && (hasAnchor || hasTag)) {
    const msg = 'An alias node must not specify any properties';
    doc.errors.push(new YAMLSemanticError(node, msg));
  }
  const res = resolveNodeValue(doc, node);
  if (res) {
    res.range = [node.range.start, node.range.end];
    if (doc.options.keepCstNodes) res.cstNode = node;
    if (doc.options.keepNodeTypes) res.type = node.type;
    const cb = comments.before.join('\n');
    if (cb) {
      res.commentBefore = res.commentBefore ? `${res.commentBefore}\n${cb}` : cb;
    }
    const ca = comments.after.join('\n');
    if (ca) res.comment = res.comment ? `${res.comment}\n${ca}` : ca;
  }
  return node.resolved = res;
}

function resolveMap(doc, cst) {
  if (cst.type !== Type.MAP && cst.type !== Type.FLOW_MAP) {
    const msg = `A ${cst.type} node cannot be resolved as a mapping`;
    doc.errors.push(new YAMLSyntaxError(cst, msg));
    return null;
  }
  const {
    comments,
    items
  } = cst.type === Type.FLOW_MAP ? resolveFlowMapItems(doc, cst) : resolveBlockMapItems(doc, cst);
  const map = new YAMLMap();
  map.items = items;
  resolveComments(map, comments);
  let hasCollectionKey = false;
  for (let i = 0; i < items.length; ++i) {
    const {
      key: iKey
    } = items[i];
    if (iKey instanceof Collection) hasCollectionKey = true;
    if (doc.schema.merge && iKey && iKey.value === MERGE_KEY) {
      items[i] = new Merge(items[i]);
      const sources = items[i].value.items;
      let error = null;
      sources.some(node => {
        if (node instanceof Alias) {
          // During parsing, alias sources are CST nodes; to account for
          // circular references their resolved values can't be used here.
          const {
            type
          } = node.source;
          if (type === Type.MAP || type === Type.FLOW_MAP) return false;
          return error = 'Merge nodes aliases can only point to maps';
        }
        return error = 'Merge nodes can only have Alias nodes as values';
      });
      if (error) doc.errors.push(new YAMLSemanticError(cst, error));
    } else {
      for (let j = i + 1; j < items.length; ++j) {
        const {
          key: jKey
        } = items[j];
        if (iKey === jKey || iKey && jKey && Object.prototype.hasOwnProperty.call(iKey, 'value') && iKey.value === jKey.value) {
          const msg = `Map keys must be unique; "${iKey}" is repeated`;
          doc.errors.push(new YAMLSemanticError(cst, msg));
          break;
        }
      }
    }
  }
  if (hasCollectionKey && !doc.options.mapAsMap) {
    const warn = 'Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.';
    doc.warnings.push(new YAMLWarning(cst, warn));
  }
  cst.resolved = map;
  return map;
}
const valueHasPairComment = ({
  context: {
    lineStart,
    node,
    src
  },
  props
}) => {
  if (props.length === 0) return false;
  const {
    start
  } = props[0];
  if (node && start > node.valueRange.start) return false;
  if (src[start] !== Char.COMMENT) return false;
  for (let i = lineStart; i < start; ++i) if (src[i] === '\n') return false;
  return true;
};
function resolvePairComment(item, pair) {
  if (!valueHasPairComment(item)) return;
  const comment = item.getPropValue(0, Char.COMMENT, true);
  let found = false;
  const cb = pair.value.commentBefore;
  if (cb && cb.startsWith(comment)) {
    pair.value.commentBefore = cb.substr(comment.length + 1);
    found = true;
  } else {
    const cc = pair.value.comment;
    if (!item.node && cc && cc.startsWith(comment)) {
      pair.value.comment = cc.substr(comment.length + 1);
      found = true;
    }
  }
  if (found) pair.comment = comment;
}
function resolveBlockMapItems(doc, cst) {
  const comments = [];
  const items = [];
  let key = undefined;
  let keyStart = null;
  for (let i = 0; i < cst.items.length; ++i) {
    const item = cst.items[i];
    switch (item.type) {
      case Type.BLANK_LINE:
        comments.push({
          afterKey: !!key,
          before: items.length
        });
        break;
      case Type.COMMENT:
        comments.push({
          afterKey: !!key,
          before: items.length,
          comment: item.comment
        });
        break;
      case Type.MAP_KEY:
        if (key !== undefined) items.push(new Pair(key));
        if (item.error) doc.errors.push(item.error);
        key = resolveNode(doc, item.node);
        keyStart = null;
        break;
      case Type.MAP_VALUE:
        {
          if (key === undefined) key = null;
          if (item.error) doc.errors.push(item.error);
          if (!item.context.atLineStart && item.node && item.node.type === Type.MAP && !item.node.context.atLineStart) {
            const msg = 'Nested mappings are not allowed in compact mappings';
            doc.errors.push(new YAMLSemanticError(item.node, msg));
          }
          let valueNode = item.node;
          if (!valueNode && item.props.length > 0) {
            // Comments on an empty mapping value need to be preserved, so we
            // need to construct a minimal empty node here to use instead of the
            // missing `item.node`. -- eemeli/yaml#19
            valueNode = new PlainValue(Type.PLAIN, []);
            valueNode.context = {
              parent: item,
              src: item.context.src
            };
            const pos = item.range.start + 1;
            valueNode.range = {
              start: pos,
              end: pos
            };
            valueNode.valueRange = {
              start: pos,
              end: pos
            };
            if (typeof item.range.origStart === 'number') {
              const origPos = item.range.origStart + 1;
              valueNode.range.origStart = valueNode.range.origEnd = origPos;
              valueNode.valueRange.origStart = valueNode.valueRange.origEnd = origPos;
            }
          }
          const pair = new Pair(key, resolveNode(doc, valueNode));
          resolvePairComment(item, pair);
          items.push(pair);
          if (key && typeof keyStart === 'number') {
            if (item.range.start > keyStart + 1024) doc.errors.push(getLongKeyError(cst, key));
          }
          key = undefined;
          keyStart = null;
        }
        break;
      default:
        if (key !== undefined) items.push(new Pair(key));
        key = resolveNode(doc, item);
        keyStart = item.range.start;
        if (item.error) doc.errors.push(item.error);
        next: for (let j = i + 1;; ++j) {
          const nextItem = cst.items[j];
          switch (nextItem && nextItem.type) {
            case Type.BLANK_LINE:
            case Type.COMMENT:
              continue next;
            case Type.MAP_VALUE:
              break next;
            default:
              {
                const msg = 'Implicit map keys need to be followed by map values';
                doc.errors.push(new YAMLSemanticError(item, msg));
                break next;
              }
          }
        }
        if (item.valueRangeContainsNewline) {
          const msg = 'Implicit map keys need to be on a single line';
          doc.errors.push(new YAMLSemanticError(item, msg));
        }
    }
  }
  if (key !== undefined) items.push(new Pair(key));
  return {
    comments,
    items
  };
}
function resolveFlowMapItems(doc, cst) {
  const comments = [];
  const items = [];
  let key = undefined;
  let explicitKey = false;
  let next = '{';
  for (let i = 0; i < cst.items.length; ++i) {
    const item = cst.items[i];
    if (typeof item.char === 'string') {
      const {
        char,
        offset
      } = item;
      if (char === '?' && key === undefined && !explicitKey) {
        explicitKey = true;
        next = ':';
        continue;
      }
      if (char === ':') {
        if (key === undefined) key = null;
        if (next === ':') {
          next = ',';
          continue;
        }
      } else {
        if (explicitKey) {
          if (key === undefined && char !== ',') key = null;
          explicitKey = false;
        }
        if (key !== undefined) {
          items.push(new Pair(key));
          key = undefined;
          if (char === ',') {
            next = ':';
            continue;
          }
        }
      }
      if (char === '}') {
        if (i === cst.items.length - 1) continue;
      } else if (char === next) {
        next = ':';
        continue;
      }
      const msg = `Flow map contains an unexpected ${char}`;
      const err = new YAMLSyntaxError(cst, msg);
      err.offset = offset;
      doc.errors.push(err);
    } else if (item.type === Type.BLANK_LINE) {
      comments.push({
        afterKey: !!key,
        before: items.length
      });
    } else if (item.type === Type.COMMENT) {
      checkFlowCommentSpace(doc.errors, item);
      comments.push({
        afterKey: !!key,
        before: items.length,
        comment: item.comment
      });
    } else if (key === undefined) {
      if (next === ',') doc.errors.push(new YAMLSemanticError(item, 'Separator , missing in flow map'));
      key = resolveNode(doc, item);
    } else {
      if (next !== ',') doc.errors.push(new YAMLSemanticError(item, 'Indicator : missing in flow map entry'));
      items.push(new Pair(key, resolveNode(doc, item)));
      key = undefined;
      explicitKey = false;
    }
  }
  checkFlowCollectionEnd(doc.errors, cst);
  if (key !== undefined) items.push(new Pair(key));
  return {
    comments,
    items
  };
}

function resolveSeq(doc, cst) {
  if (cst.type !== Type.SEQ && cst.type !== Type.FLOW_SEQ) {
    const msg = `A ${cst.type} node cannot be resolved as a sequence`;
    doc.errors.push(new YAMLSyntaxError(cst, msg));
    return null;
  }
  const {
    comments,
    items
  } = cst.type === Type.FLOW_SEQ ? resolveFlowSeqItems(doc, cst) : resolveBlockSeqItems(doc, cst);
  const seq = new YAMLSeq();
  seq.items = items;
  resolveComments(seq, comments);
  if (!doc.options.mapAsMap && items.some(it => it instanceof Pair && it.key instanceof Collection)) {
    const warn = 'Keys with collection values will be stringified as YAML due to JS Object restrictions. Use mapAsMap: true to avoid this.';
    doc.warnings.push(new YAMLWarning(cst, warn));
  }
  cst.resolved = seq;
  return seq;
}
function resolveBlockSeqItems(doc, cst) {
  const comments = [];
  const items = [];
  for (let i = 0; i < cst.items.length; ++i) {
    const item = cst.items[i];
    switch (item.type) {
      case Type.BLANK_LINE:
        comments.push({
          before: items.length
        });
        break;
      case Type.COMMENT:
        comments.push({
          comment: item.comment,
          before: items.length
        });
        break;
      case Type.SEQ_ITEM:
        if (item.error) doc.errors.push(item.error);
        items.push(resolveNode(doc, item.node));
        if (item.hasProps) {
          const msg = 'Sequence items cannot have tags or anchors before the - indicator';
          doc.errors.push(new YAMLSemanticError(item, msg));
        }
        break;
      default:
        if (item.error) doc.errors.push(item.error);
        doc.errors.push(new YAMLSyntaxError(item, `Unexpected ${item.type} node in sequence`));
    }
  }
  return {
    comments,
    items
  };
}
function resolveFlowSeqItems(doc, cst) {
  const comments = [];
  const items = [];
  let explicitKey = false;
  let key = undefined;
  let keyStart = null;
  let next = '[';
  let prevItem = null;
  for (let i = 0; i < cst.items.length; ++i) {
    const item = cst.items[i];
    if (typeof item.char === 'string') {
      const {
        char,
        offset
      } = item;
      if (char !== ':' && (explicitKey || key !== undefined)) {
        if (explicitKey && key === undefined) key = next ? items.pop() : null;
        items.push(new Pair(key));
        explicitKey = false;
        key = undefined;
        keyStart = null;
      }
      if (char === next) {
        next = null;
      } else if (!next && char === '?') {
        explicitKey = true;
      } else if (next !== '[' && char === ':' && key === undefined) {
        if (next === ',') {
          key = items.pop();
          if (key instanceof Pair) {
            const msg = 'Chaining flow sequence pairs is invalid';
            const err = new YAMLSemanticError(cst, msg);
            err.offset = offset;
            doc.errors.push(err);
          }
          if (!explicitKey && typeof keyStart === 'number') {
            const keyEnd = item.range ? item.range.start : item.offset;
            if (keyEnd > keyStart + 1024) doc.errors.push(getLongKeyError(cst, key));
            const {
              src
            } = prevItem.context;
            for (let i = keyStart; i < keyEnd; ++i) if (src[i] === '\n') {
              const msg = 'Implicit keys of flow sequence pairs need to be on a single line';
              doc.errors.push(new YAMLSemanticError(prevItem, msg));
              break;
            }
          }
        } else {
          key = null;
        }
        keyStart = null;
        explicitKey = false;
        next = null;
      } else if (next === '[' || char !== ']' || i < cst.items.length - 1) {
        const msg = `Flow sequence contains an unexpected ${char}`;
        const err = new YAMLSyntaxError(cst, msg);
        err.offset = offset;
        doc.errors.push(err);
      }
    } else if (item.type === Type.BLANK_LINE) {
      comments.push({
        before: items.length
      });
    } else if (item.type === Type.COMMENT) {
      checkFlowCommentSpace(doc.errors, item);
      comments.push({
        comment: item.comment,
        before: items.length
      });
    } else {
      if (next) {
        const msg = `Expected a ${next} in flow sequence`;
        doc.errors.push(new YAMLSemanticError(item, msg));
      }
      const value = resolveNode(doc, item);
      if (key === undefined) {
        items.push(value);
        prevItem = item;
      } else {
        items.push(new Pair(key, value));
        key = undefined;
      }
      keyStart = item.range.start;
      next = ',';
    }
  }
  checkFlowCollectionEnd(doc.errors, cst);
  if (key !== undefined) items.push(new Pair(key));
  return {
    comments,
    items
  };
}

export { Alias as A, Collection as C, Merge as M, Node as N, Pair as P, Scalar as S, YAMLSeq as Y, boolOptions as a, binaryOptions as b, stringifyString as c, YAMLMap as d, isEmptyPath as e, addComment as f, resolveMap as g, resolveSeq as h, intOptions as i, resolveString as j, stringifyNumber as k, findPair as l, nullOptions as n, resolveNode as r, strOptions as s, toJSON as t };
