'use strict';

var PlainValue = require('./PlainValue-516d5bc2.js');
var resolveSeq = require('./resolveSeq-95613e94.js');
var Schema = require('./Schema-bcc6c2d7.js');

const defaultOptions = {
  anchorPrefix: 'a',
  customTags: null,
  indent: 2,
  indentSeq: true,
  keepCstNodes: false,
  keepNodeTypes: true,
  keepBlobsInJSON: true,
  mapAsMap: false,
  maxAliasCount: 100,
  prettyErrors: false,
  // TODO Set true in v2
  simpleKeys: false,
  version: '1.2'
};
const scalarOptions = {
  get binary() {
    return resolveSeq.binaryOptions;
  },
  set binary(opt) {
    Object.assign(resolveSeq.binaryOptions, opt);
  },
  get bool() {
    return resolveSeq.boolOptions;
  },
  set bool(opt) {
    Object.assign(resolveSeq.boolOptions, opt);
  },
  get int() {
    return resolveSeq.intOptions;
  },
  set int(opt) {
    Object.assign(resolveSeq.intOptions, opt);
  },
  get null() {
    return resolveSeq.nullOptions;
  },
  set null(opt) {
    Object.assign(resolveSeq.nullOptions, opt);
  },
  get str() {
    return resolveSeq.strOptions;
  },
  set str(opt) {
    Object.assign(resolveSeq.strOptions, opt);
  }
};
const documentOptions = {
  '1.0': {
    schema: 'yaml-1.1',
    merge: true,
    tagPrefixes: [{
      handle: '!',
      prefix: PlainValue.defaultTagPrefix
    }, {
      handle: '!!',
      prefix: 'tag:private.yaml.org,2002:'
    }]
  },
  1.1: {
    schema: 'yaml-1.1',
    merge: true,
    tagPrefixes: [{
      handle: '!',
      prefix: '!'
    }, {
      handle: '!!',
      prefix: PlainValue.defaultTagPrefix
    }]
  },
  1.2: {
    schema: 'core',
    merge: false,
    tagPrefixes: [{
      handle: '!',
      prefix: '!'
    }, {
      handle: '!!',
      prefix: PlainValue.defaultTagPrefix
    }]
  }
};

function stringifyTag(doc, tag) {
  if ((doc.version || doc.options.version) === '1.0') {
    const priv = tag.match(/^tag:private\.yaml\.org,2002:([^:/]+)$/);
    if (priv) return '!' + priv[1];
    const vocab = tag.match(/^tag:([a-zA-Z0-9-]+)\.yaml\.org,2002:(.*)/);
    return vocab ? `!${vocab[1]}/${vocab[2]}` : `!${tag.replace(/^tag:/, '')}`;
  }
  let p = doc.tagPrefixes.find(p => tag.indexOf(p.prefix) === 0);
  if (!p) {
    const dtp = doc.getDefaults().tagPrefixes;
    p = dtp && dtp.find(p => tag.indexOf(p.prefix) === 0);
  }
  if (!p) return tag[0] === '!' ? tag : `!<${tag}>`;
  const suffix = tag.substr(p.prefix.length).replace(/[!,[\]{}]/g, ch => ({
    '!': '%21',
    ',': '%2C',
    '[': '%5B',
    ']': '%5D',
    '{': '%7B',
    '}': '%7D'
  })[ch]);
  return p.handle + suffix;
}

function getTagObject(tags, item) {
  if (item instanceof resolveSeq.Alias) return resolveSeq.Alias;
  if (item.tag) {
    const match = tags.filter(t => t.tag === item.tag);
    if (match.length > 0) return match.find(t => t.format === item.format) || match[0];
  }
  let tagObj, obj;
  if (item instanceof resolveSeq.Scalar) {
    obj = item.value;
    // TODO: deprecate/remove class check
    const match = tags.filter(t => t.identify && t.identify(obj) || t.class && obj instanceof t.class);
    tagObj = match.find(t => t.format === item.format) || match.find(t => !t.format);
  } else {
    obj = item;
    tagObj = tags.find(t => t.nodeClass && obj instanceof t.nodeClass);
  }
  if (!tagObj) {
    const name = obj && obj.constructor ? obj.constructor.name : typeof obj;
    throw new Error(`Tag not resolved for ${name} value`);
  }
  return tagObj;
}

// needs to be called before value stringifier to allow for circular anchor refs
function stringifyProps(node, tagObj, {
  anchors,
  doc
}) {
  const props = [];
  const anchor = doc.anchors.getName(node);
  if (anchor) {
    anchors[anchor] = node;
    props.push(`&${anchor}`);
  }
  if (node.tag) {
    props.push(stringifyTag(doc, node.tag));
  } else if (!tagObj.default) {
    props.push(stringifyTag(doc, tagObj.tag));
  }
  return props.join(' ');
}
function stringify(item, ctx, onComment, onChompKeep) {
  const {
    anchors,
    schema
  } = ctx.doc;
  let tagObj;
  if (!(item instanceof resolveSeq.Node)) {
    const createCtx = {
      aliasNodes: [],
      onTagObj: o => tagObj = o,
      prevObjects: new Map()
    };
    item = schema.createNode(item, true, null, createCtx);
    for (const alias of createCtx.aliasNodes) {
      alias.source = alias.source.node;
      let name = anchors.getName(alias.source);
      if (!name) {
        name = anchors.newName();
        anchors.map[name] = alias.source;
      }
    }
  }
  if (item instanceof resolveSeq.Pair) return item.toString(ctx, onComment, onChompKeep);
  if (!tagObj) tagObj = getTagObject(schema.tags, item);
  const props = stringifyProps(item, tagObj, ctx);
  if (props.length > 0) ctx.indentAtStart = (ctx.indentAtStart || 0) + props.length + 1;
  const str = typeof tagObj.stringify === 'function' ? tagObj.stringify(item, ctx, onComment, onChompKeep) : item instanceof resolveSeq.Scalar ? resolveSeq.stringifyString(item, ctx, onComment, onChompKeep) : item.toString(ctx, onComment, onChompKeep);
  if (!props) return str;
  return item instanceof resolveSeq.Scalar || str[0] === '{' || str[0] === '[' ? `${props} ${str}` : `${props}\n${ctx.indent}${str}`;
}

class Anchors {
  static validAnchorNode(node) {
    return node instanceof resolveSeq.Scalar || node instanceof resolveSeq.YAMLSeq || node instanceof resolveSeq.YAMLMap;
  }
  constructor(prefix) {
    PlainValue._defineProperty(this, "map", Object.create(null));
    this.prefix = prefix;
  }
  createAlias(node, name) {
    this.setAnchor(node, name);
    return new resolveSeq.Alias(node);
  }
  createMergePair(...sources) {
    const merge = new resolveSeq.Merge();
    merge.value.items = sources.map(s => {
      if (s instanceof resolveSeq.Alias) {
        if (s.source instanceof resolveSeq.YAMLMap) return s;
      } else if (s instanceof resolveSeq.YAMLMap) {
        return this.createAlias(s);
      }
      throw new Error('Merge sources must be Map nodes or their Aliases');
    });
    return merge;
  }
  getName(node) {
    const {
      map
    } = this;
    return Object.keys(map).find(a => map[a] === node);
  }
  getNames() {
    return Object.keys(this.map);
  }
  getNode(name) {
    return this.map[name];
  }
  newName(prefix) {
    if (!prefix) prefix = this.prefix;
    const names = Object.keys(this.map);
    for (let i = 1; true; ++i) {
      const name = `${prefix}${i}`;
      if (!names.includes(name)) return name;
    }
  }

  // During parsing, map & aliases contain CST nodes
  resolveNodes() {
    const {
      map,
      _cstAliases
    } = this;
    Object.keys(map).forEach(a => {
      map[a] = map[a].resolved;
    });
    _cstAliases.forEach(a => {
      a.source = a.source.resolved;
    });
    delete this._cstAliases;
  }
  setAnchor(node, name) {
    if (node != null && !Anchors.validAnchorNode(node)) {
      throw new Error('Anchors may only be set for Scalar, Seq and Map nodes');
    }
    if (name && /[\x00-\x19\s,[\]{}]/.test(name)) {
      throw new Error('Anchor names must not contain whitespace or control characters');
    }
    const {
      map
    } = this;
    const prev = node && Object.keys(map).find(a => map[a] === node);
    if (prev) {
      if (!name) {
        return prev;
      } else if (prev !== name) {
        delete map[prev];
        map[name] = node;
      }
    } else {
      if (!name) {
        if (!node) return null;
        name = this.newName();
      }
      map[name] = node;
    }
    return name;
  }
}

const visit = (node, tags) => {
  if (node && typeof node === 'object') {
    const {
      tag
    } = node;
    if (node instanceof resolveSeq.Collection) {
      if (tag) tags[tag] = true;
      node.items.forEach(n => visit(n, tags));
    } else if (node instanceof resolveSeq.Pair) {
      visit(node.key, tags);
      visit(node.value, tags);
    } else if (node instanceof resolveSeq.Scalar) {
      if (tag) tags[tag] = true;
    }
  }
  return tags;
};
const listTagNames = node => Object.keys(visit(node, {}));

function parseContents(doc, contents) {
  const comments = {
    before: [],
    after: []
  };
  let body = undefined;
  let spaceBefore = false;
  for (const node of contents) {
    if (node.valueRange) {
      if (body !== undefined) {
        const msg = 'Document contains trailing content not separated by a ... or --- line';
        doc.errors.push(new PlainValue.YAMLSyntaxError(node, msg));
        break;
      }
      const res = resolveSeq.resolveNode(doc, node);
      if (spaceBefore) {
        res.spaceBefore = true;
        spaceBefore = false;
      }
      body = res;
    } else if (node.comment !== null) {
      const cc = body === undefined ? comments.before : comments.after;
      cc.push(node.comment);
    } else if (node.type === PlainValue.Type.BLANK_LINE) {
      spaceBefore = true;
      if (body === undefined && comments.before.length > 0 && !doc.commentBefore) {
        // space-separated comments at start are parsed as document comments
        doc.commentBefore = comments.before.join('\n');
        comments.before = [];
      }
    }
  }
  doc.contents = body || null;
  if (!body) {
    doc.comment = comments.before.concat(comments.after).join('\n') || null;
  } else {
    const cb = comments.before.join('\n');
    if (cb) {
      const cbNode = body instanceof resolveSeq.Collection && body.items[0] ? body.items[0] : body;
      cbNode.commentBefore = cbNode.commentBefore ? `${cb}\n${cbNode.commentBefore}` : cb;
    }
    doc.comment = comments.after.join('\n') || null;
  }
}

function resolveTagDirective({
  tagPrefixes
}, directive) {
  const [handle, prefix] = directive.parameters;
  if (!handle || !prefix) {
    const msg = 'Insufficient parameters given for %TAG directive';
    throw new PlainValue.YAMLSemanticError(directive, msg);
  }
  if (tagPrefixes.some(p => p.handle === handle)) {
    const msg = 'The %TAG directive must only be given at most once per handle in the same document.';
    throw new PlainValue.YAMLSemanticError(directive, msg);
  }
  return {
    handle,
    prefix
  };
}
function resolveYamlDirective(doc, directive) {
  let [version] = directive.parameters;
  if (directive.name === 'YAML:1.0') version = '1.0';
  if (!version) {
    const msg = 'Insufficient parameters given for %YAML directive';
    throw new PlainValue.YAMLSemanticError(directive, msg);
  }
  if (!documentOptions[version]) {
    const v0 = doc.version || doc.options.version;
    const msg = `Document will be parsed as YAML ${v0} rather than YAML ${version}`;
    doc.warnings.push(new PlainValue.YAMLWarning(directive, msg));
  }
  return version;
}
function parseDirectives(doc, directives, prevDoc) {
  const directiveComments = [];
  let hasDirectives = false;
  for (const directive of directives) {
    const {
      comment,
      name
    } = directive;
    switch (name) {
      case 'TAG':
        try {
          doc.tagPrefixes.push(resolveTagDirective(doc, directive));
        } catch (error) {
          doc.errors.push(error);
        }
        hasDirectives = true;
        break;
      case 'YAML':
      case 'YAML:1.0':
        if (doc.version) {
          const msg = 'The %YAML directive must only be given at most once per document.';
          doc.errors.push(new PlainValue.YAMLSemanticError(directive, msg));
        }
        try {
          doc.version = resolveYamlDirective(doc, directive);
        } catch (error) {
          doc.errors.push(error);
        }
        hasDirectives = true;
        break;
      default:
        if (name) {
          const msg = `YAML only supports %TAG and %YAML directives, and not %${name}`;
          doc.warnings.push(new PlainValue.YAMLWarning(directive, msg));
        }
    }
    if (comment) directiveComments.push(comment);
  }
  if (prevDoc && !hasDirectives && '1.1' === (doc.version || prevDoc.version || doc.options.version)) {
    const copyTagPrefix = ({
      handle,
      prefix
    }) => ({
      handle,
      prefix
    });
    doc.tagPrefixes = prevDoc.tagPrefixes.map(copyTagPrefix);
    doc.version = prevDoc.version;
  }
  doc.commentBefore = directiveComments.join('\n') || null;
}

function assertCollection(contents) {
  if (contents instanceof resolveSeq.Collection) return true;
  throw new Error('Expected a YAML collection as document contents');
}
class Document {
  constructor(options) {
    this.anchors = new Anchors(options.anchorPrefix);
    this.commentBefore = null;
    this.comment = null;
    this.contents = null;
    this.directivesEndMarker = null;
    this.errors = [];
    this.options = options;
    this.schema = null;
    this.tagPrefixes = [];
    this.version = null;
    this.warnings = [];
  }
  add(value) {
    assertCollection(this.contents);
    return this.contents.add(value);
  }
  addIn(path, value) {
    assertCollection(this.contents);
    this.contents.addIn(path, value);
  }
  delete(key) {
    assertCollection(this.contents);
    return this.contents.delete(key);
  }
  deleteIn(path) {
    if (resolveSeq.isEmptyPath(path)) {
      if (this.contents == null) return false;
      this.contents = null;
      return true;
    }
    assertCollection(this.contents);
    return this.contents.deleteIn(path);
  }
  getDefaults() {
    return Document.defaults[this.version] || Document.defaults[this.options.version] || {};
  }
  get(key, keepScalar) {
    return this.contents instanceof resolveSeq.Collection ? this.contents.get(key, keepScalar) : undefined;
  }
  getIn(path, keepScalar) {
    if (resolveSeq.isEmptyPath(path)) return !keepScalar && this.contents instanceof resolveSeq.Scalar ? this.contents.value : this.contents;
    return this.contents instanceof resolveSeq.Collection ? this.contents.getIn(path, keepScalar) : undefined;
  }
  has(key) {
    return this.contents instanceof resolveSeq.Collection ? this.contents.has(key) : false;
  }
  hasIn(path) {
    if (resolveSeq.isEmptyPath(path)) return this.contents !== undefined;
    return this.contents instanceof resolveSeq.Collection ? this.contents.hasIn(path) : false;
  }
  set(key, value) {
    assertCollection(this.contents);
    this.contents.set(key, value);
  }
  setIn(path, value) {
    if (resolveSeq.isEmptyPath(path)) this.contents = value;else {
      assertCollection(this.contents);
      this.contents.setIn(path, value);
    }
  }
  setSchema(id, customTags) {
    if (!id && !customTags && this.schema) return;
    if (typeof id === 'number') id = id.toFixed(1);
    if (id === '1.0' || id === '1.1' || id === '1.2') {
      if (this.version) this.version = id;else this.options.version = id;
      delete this.options.schema;
    } else if (id && typeof id === 'string') {
      this.options.schema = id;
    }
    if (Array.isArray(customTags)) this.options.customTags = customTags;
    const opt = Object.assign({}, this.getDefaults(), this.options);
    this.schema = new Schema.Schema(opt);
  }
  parse(node, prevDoc) {
    if (this.options.keepCstNodes) this.cstNode = node;
    if (this.options.keepNodeTypes) this.type = 'DOCUMENT';
    const {
      directives = [],
      contents = [],
      directivesEndMarker,
      error,
      valueRange
    } = node;
    if (error) {
      if (!error.source) error.source = this;
      this.errors.push(error);
    }
    parseDirectives(this, directives, prevDoc);
    if (directivesEndMarker) this.directivesEndMarker = true;
    this.range = valueRange ? [valueRange.start, valueRange.end] : null;
    this.setSchema();
    this.anchors._cstAliases = [];
    parseContents(this, contents);
    this.anchors.resolveNodes();
    if (this.options.prettyErrors) {
      for (const error of this.errors) if (error instanceof PlainValue.YAMLError) error.makePretty();
      for (const warn of this.warnings) if (warn instanceof PlainValue.YAMLError) warn.makePretty();
    }
    return this;
  }
  listNonDefaultTags() {
    return listTagNames(this.contents).filter(t => t.indexOf(Schema.Schema.defaultPrefix) !== 0);
  }
  setTagPrefix(handle, prefix) {
    if (handle[0] !== '!' || handle[handle.length - 1] !== '!') throw new Error('Handle must start and end with !');
    if (prefix) {
      const prev = this.tagPrefixes.find(p => p.handle === handle);
      if (prev) prev.prefix = prefix;else this.tagPrefixes.push({
        handle,
        prefix
      });
    } else {
      this.tagPrefixes = this.tagPrefixes.filter(p => p.handle !== handle);
    }
  }
  toJSON(arg, onAnchor) {
    const {
      keepBlobsInJSON,
      mapAsMap,
      maxAliasCount
    } = this.options;
    const keep = keepBlobsInJSON && (typeof arg !== 'string' || !(this.contents instanceof resolveSeq.Scalar));
    const ctx = {
      doc: this,
      indentStep: '  ',
      keep,
      mapAsMap: keep && !!mapAsMap,
      maxAliasCount,
      stringify // Requiring directly in Pair would create circular dependencies
    };
    const anchorNames = Object.keys(this.anchors.map);
    if (anchorNames.length > 0) ctx.anchors = new Map(anchorNames.map(name => [this.anchors.map[name], {
      alias: [],
      aliasCount: 0,
      count: 1
    }]));
    const res = resolveSeq.toJSON(this.contents, arg, ctx);
    if (typeof onAnchor === 'function' && ctx.anchors) for (const {
      count,
      res
    } of ctx.anchors.values()) onAnchor(res, count);
    return res;
  }
  toString() {
    if (this.errors.length > 0) throw new Error('Document with errors cannot be stringified');
    const indentSize = this.options.indent;
    if (!Number.isInteger(indentSize) || indentSize <= 0) {
      const s = JSON.stringify(indentSize);
      throw new Error(`"indent" option must be a positive integer, not ${s}`);
    }
    this.setSchema();
    const lines = [];
    let hasDirectives = false;
    if (this.version) {
      let vd = '%YAML 1.2';
      if (this.schema.name === 'yaml-1.1') {
        if (this.version === '1.0') vd = '%YAML:1.0';else if (this.version === '1.1') vd = '%YAML 1.1';
      }
      lines.push(vd);
      hasDirectives = true;
    }
    const tagNames = this.listNonDefaultTags();
    this.tagPrefixes.forEach(({
      handle,
      prefix
    }) => {
      if (tagNames.some(t => t.indexOf(prefix) === 0)) {
        lines.push(`%TAG ${handle} ${prefix}`);
        hasDirectives = true;
      }
    });
    if (hasDirectives || this.directivesEndMarker) lines.push('---');
    if (this.commentBefore) {
      if (hasDirectives || !this.directivesEndMarker) lines.unshift('');
      lines.unshift(this.commentBefore.replace(/^/gm, '#'));
    }
    const ctx = {
      anchors: Object.create(null),
      doc: this,
      indent: '',
      indentStep: ' '.repeat(indentSize),
      stringify // Requiring directly in nodes would create circular dependencies
    };
    let chompKeep = false;
    let contentComment = null;
    if (this.contents) {
      if (this.contents instanceof resolveSeq.Node) {
        if (this.contents.spaceBefore && (hasDirectives || this.directivesEndMarker)) lines.push('');
        if (this.contents.commentBefore) lines.push(this.contents.commentBefore.replace(/^/gm, '#'));
        // top-level block scalars need to be indented if followed by a comment
        ctx.forceBlockIndent = !!this.comment;
        contentComment = this.contents.comment;
      }
      const onChompKeep = contentComment ? null : () => chompKeep = true;
      const body = stringify(this.contents, ctx, () => contentComment = null, onChompKeep);
      lines.push(resolveSeq.addComment(body, '', contentComment));
    } else if (this.contents !== undefined) {
      lines.push(stringify(this.contents, ctx));
    }
    if (this.comment) {
      if ((!chompKeep || contentComment) && lines[lines.length - 1] !== '') lines.push('');
      lines.push(this.comment.replace(/^/gm, '#'));
    }
    return lines.join('\n') + '\n';
  }
}
PlainValue._defineProperty(Document, "defaults", documentOptions);

exports.Document = Document;
exports.defaultOptions = defaultOptions;
exports.scalarOptions = scalarOptions;
