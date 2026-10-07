"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var magic_string_es_3WRPFX2A_exports = {};
__export(magic_string_es_3WRPFX2A_exports, {
  Bundle: () => Bundle,
  SourceMap: () => SourceMap,
  default: () => MagicString
});
module.exports = __toCommonJS(magic_string_es_3WRPFX2A_exports);
var import_chunk_2ESYSVXG = require("./chunk-2ESYSVXG.js");
var comma = ",".charCodeAt(0);
var semicolon = ";".charCodeAt(0);
var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
var intToChar = new Uint8Array(64);
var charToInt = new Uint8Array(128);
for (let i = 0; i < chars.length; i++) {
  const c = chars.charCodeAt(i);
  intToChar[i] = c;
  charToInt[c] = i;
}
function encodeInteger(builder, num, relative) {
  let delta = num - relative;
  delta = delta < 0 ? -delta << 1 | 1 : delta << 1;
  do {
    let clamped = delta & 31;
    delta >>>= 5;
    if (delta > 0)
      clamped |= 32;
    builder.write(intToChar[clamped]);
  } while (delta > 0);
  return num;
}
var bufLength = 1024 * 16;
var td = typeof TextDecoder !== "undefined" ? /* @__PURE__ */ new TextDecoder() : typeof Buffer !== "undefined" ? {
  decode(buf) {
    const out = Buffer.from(buf.buffer, buf.byteOffset, buf.byteLength);
    return out.toString();
  }
} : {
  decode(buf) {
    let out = "";
    for (let i = 0; i < buf.length; i++) {
      out += String.fromCharCode(buf[i]);
    }
    return out;
  }
};
var StringWriter = class {
  constructor() {
    this.pos = 0;
    this.out = "";
    this.buffer = new Uint8Array(bufLength);
  }
  write(v) {
    const { buffer } = this;
    buffer[this.pos++] = v;
    if (this.pos === bufLength) {
      this.out += td.decode(buffer);
      this.pos = 0;
    }
  }
  flush() {
    const { buffer, out, pos } = this;
    return pos > 0 ? out + td.decode(buffer.subarray(0, pos)) : out;
  }
};
function encode(decoded) {
  const writer = new StringWriter();
  let sourcesIndex = 0;
  let sourceLine = 0;
  let sourceColumn = 0;
  let namesIndex = 0;
  for (let i = 0; i < decoded.length; i++) {
    const line = decoded[i];
    if (i > 0)
      writer.write(semicolon);
    if (line.length === 0)
      continue;
    let genColumn = 0;
    for (let j = 0; j < line.length; j++) {
      const segment = line[j];
      if (j > 0)
        writer.write(comma);
      genColumn = encodeInteger(writer, segment[0], genColumn);
      if (segment.length === 1)
        continue;
      sourcesIndex = encodeInteger(writer, segment[1], sourcesIndex);
      sourceLine = encodeInteger(writer, segment[2], sourceLine);
      sourceColumn = encodeInteger(writer, segment[3], sourceColumn);
      if (segment.length === 4)
        continue;
      namesIndex = encodeInteger(writer, segment[4], namesIndex);
    }
  }
  return writer.flush();
}
var BitSet = class _BitSet {
  constructor(arg) {
    this.bits = arg instanceof _BitSet ? arg.bits.slice() : [];
  }
  add(n2) {
    this.bits[n2 >> 5] |= 1 << (n2 & 31);
  }
  has(n2) {
    return !!(this.bits[n2 >> 5] & 1 << (n2 & 31));
  }
};
var Chunk = class _Chunk {
  constructor(start, end, content) {
    this.start = start;
    this.end = end;
    this.original = content;
    this.intro = "";
    this.outro = "";
    this.content = content;
    this.storeName = false;
    this.edited = false;
    {
      this.previous = null;
      this.next = null;
    }
  }
  appendLeft(content) {
    this.outro += content;
  }
  appendRight(content) {
    this.intro = this.intro + content;
  }
  clone() {
    const chunk = new _Chunk(this.start, this.end, this.original);
    chunk.intro = this.intro;
    chunk.outro = this.outro;
    chunk.content = this.content;
    chunk.storeName = this.storeName;
    chunk.edited = this.edited;
    return chunk;
  }
  contains(index) {
    return this.start < index && index < this.end;
  }
  eachNext(fn) {
    let chunk = this;
    while (chunk) {
      fn(chunk);
      chunk = chunk.next;
    }
  }
  eachPrevious(fn) {
    let chunk = this;
    while (chunk) {
      fn(chunk);
      chunk = chunk.previous;
    }
  }
  edit(content, storeName, contentOnly) {
    this.content = content;
    if (!contentOnly) {
      this.intro = "";
      this.outro = "";
    }
    this.storeName = storeName;
    this.edited = true;
    return this;
  }
  prependLeft(content) {
    this.outro = content + this.outro;
  }
  prependRight(content) {
    this.intro = content + this.intro;
  }
  reset() {
    this.intro = "";
    this.outro = "";
    if (this.edited) {
      this.content = this.original;
      this.storeName = false;
      this.edited = false;
    }
  }
  split(index) {
    const sliceIndex = index - this.start;
    const originalBefore = this.original.slice(0, sliceIndex);
    const originalAfter = this.original.slice(sliceIndex);
    this.original = originalBefore;
    const newChunk = new _Chunk(index, this.end, originalAfter);
    newChunk.outro = this.outro;
    this.outro = "";
    this.end = index;
    if (this.edited) {
      newChunk.edit("", false);
      this.content = "";
    } else {
      this.content = originalBefore;
    }
    newChunk.next = this.next;
    if (newChunk.next) newChunk.next.previous = newChunk;
    newChunk.previous = this;
    this.next = newChunk;
    return newChunk;
  }
  toString() {
    return this.intro + this.content + this.outro;
  }
  trimEnd(rx) {
    this.outro = this.outro.replace(rx, "");
    if (this.outro.length) return true;
    const trimmed = this.content.replace(rx, "");
    if (trimmed.length) {
      if (trimmed !== this.content) {
        this.split(this.start + trimmed.length).edit("", void 0, true);
        if (this.edited) {
          this.edit(trimmed, this.storeName, true);
        }
      }
      return true;
    } else {
      this.edit("", void 0, true);
      this.intro = this.intro.replace(rx, "");
      if (this.intro.length) return true;
    }
  }
  trimStart(rx) {
    this.intro = this.intro.replace(rx, "");
    if (this.intro.length) return true;
    const trimmed = this.content.replace(rx, "");
    if (trimmed.length) {
      if (trimmed !== this.content) {
        const newChunk = this.split(this.end - trimmed.length);
        if (this.edited) {
          newChunk.edit(trimmed, this.storeName, true);
        }
        this.edit("", void 0, true);
      }
      return true;
    } else {
      this.edit("", void 0, true);
      this.outro = this.outro.replace(rx, "");
      if (this.outro.length) return true;
    }
  }
};
function getBtoa() {
  if (typeof globalThis !== "undefined" && typeof globalThis.btoa === "function") {
    return (str) => globalThis.btoa(unescape(encodeURIComponent(str)));
  } else if (typeof Buffer === "function") {
    return (str) => Buffer.from(str, "utf-8").toString("base64");
  } else {
    return () => {
      throw new Error("Unsupported environment: `window.btoa` or `Buffer` should be supported.");
    };
  }
}
var btoa = /* @__PURE__ */ getBtoa();
var SourceMap = class {
  constructor(properties) {
    this.version = 3;
    this.file = properties.file;
    this.sources = properties.sources;
    this.sourcesContent = properties.sourcesContent;
    this.names = properties.names;
    this.mappings = encode(properties.mappings);
    if (typeof properties.x_google_ignoreList !== "undefined") {
      this.x_google_ignoreList = properties.x_google_ignoreList;
    }
    if (typeof properties.debugId !== "undefined") {
      this.debugId = properties.debugId;
    }
  }
  toString() {
    return JSON.stringify(this);
  }
  toUrl() {
    return "data:application/json;charset=utf-8;base64," + btoa(this.toString());
  }
};
function guessIndent(code) {
  const lines = code.split("\n");
  const tabbed = lines.filter((line) => /^\t+/.test(line));
  const spaced = lines.filter((line) => /^ {2,}/.test(line));
  if (tabbed.length === 0 && spaced.length === 0) {
    return null;
  }
  if (tabbed.length >= spaced.length) {
    return "	";
  }
  const min = spaced.reduce((previous, current) => {
    const numSpaces = /^ +/.exec(current)[0].length;
    return Math.min(numSpaces, previous);
  }, Infinity);
  return new Array(min + 1).join(" ");
}
function getRelativePath(from, to) {
  const fromParts = from.split(/[/\\]/);
  const toParts = to.split(/[/\\]/);
  fromParts.pop();
  while (fromParts[0] === toParts[0]) {
    fromParts.shift();
    toParts.shift();
  }
  if (fromParts.length) {
    let i = fromParts.length;
    while (i--) fromParts[i] = "..";
  }
  return fromParts.concat(toParts).join("/");
}
var toString = Object.prototype.toString;
function isObject(thing) {
  return toString.call(thing) === "[object Object]";
}
function getLocator(source) {
  const originalLines = source.split("\n");
  const lineOffsets = [];
  for (let i = 0, pos = 0; i < originalLines.length; i++) {
    lineOffsets.push(pos);
    pos += originalLines[i].length + 1;
  }
  return function locate(index) {
    let i = 0;
    let j = lineOffsets.length;
    while (i < j) {
      const m = i + j >> 1;
      if (index < lineOffsets[m]) {
        j = m;
      } else {
        i = m + 1;
      }
    }
    const line = i - 1;
    const column = index - lineOffsets[line];
    return { line, column };
  };
}
var wordRegex = /\w/;
var Mappings = class {
  constructor(hires) {
    this.hires = hires;
    this.generatedCodeLine = 0;
    this.generatedCodeColumn = 0;
    this.raw = [];
    this.rawSegments = this.raw[this.generatedCodeLine] = [];
    this.pending = null;
  }
  addEdit(sourceIndex, content, loc, nameIndex) {
    if (content.length) {
      const contentLengthMinusOne = content.length - 1;
      let contentLineEnd = content.indexOf("\n", 0);
      let previousContentLineEnd = -1;
      while (contentLineEnd >= 0 && contentLengthMinusOne > contentLineEnd) {
        const segment2 = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
        if (nameIndex >= 0) {
          segment2.push(nameIndex);
        }
        this.rawSegments.push(segment2);
        this.generatedCodeLine += 1;
        this.raw[this.generatedCodeLine] = this.rawSegments = [];
        this.generatedCodeColumn = 0;
        previousContentLineEnd = contentLineEnd;
        contentLineEnd = content.indexOf("\n", contentLineEnd + 1);
      }
      const segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
      if (nameIndex >= 0) {
        segment.push(nameIndex);
      }
      this.rawSegments.push(segment);
      this.advance(content.slice(previousContentLineEnd + 1));
    } else if (this.pending) {
      this.rawSegments.push(this.pending);
      this.advance(content);
    }
    this.pending = null;
  }
  addUneditedChunk(sourceIndex, chunk, original, loc, sourcemapLocations) {
    let originalCharIndex = chunk.start;
    let first = true;
    let charInHiresBoundary = false;
    while (originalCharIndex < chunk.end) {
      if (original[originalCharIndex] === "\n") {
        loc.line += 1;
        loc.column = 0;
        this.generatedCodeLine += 1;
        this.raw[this.generatedCodeLine] = this.rawSegments = [];
        this.generatedCodeColumn = 0;
        first = true;
        charInHiresBoundary = false;
      } else {
        if (this.hires || first || sourcemapLocations.has(originalCharIndex)) {
          const segment = [this.generatedCodeColumn, sourceIndex, loc.line, loc.column];
          if (this.hires === "boundary") {
            if (wordRegex.test(original[originalCharIndex])) {
              if (!charInHiresBoundary) {
                this.rawSegments.push(segment);
                charInHiresBoundary = true;
              }
            } else {
              this.rawSegments.push(segment);
              charInHiresBoundary = false;
            }
          } else {
            this.rawSegments.push(segment);
          }
        }
        loc.column += 1;
        this.generatedCodeColumn += 1;
        first = false;
      }
      originalCharIndex += 1;
    }
    this.pending = null;
  }
  advance(str) {
    if (!str) return;
    const lines = str.split("\n");
    if (lines.length > 1) {
      for (let i = 0; i < lines.length - 1; i++) {
        this.generatedCodeLine++;
        this.raw[this.generatedCodeLine] = this.rawSegments = [];
      }
      this.generatedCodeColumn = 0;
    }
    this.generatedCodeColumn += lines[lines.length - 1].length;
  }
};
var n = "\n";
var warned = {
  insertLeft: false,
  insertRight: false,
  storeName: false
};
var MagicString = class _MagicString {
  constructor(string, options = {}) {
    const chunk = new Chunk(0, string.length, string);
    Object.defineProperties(this, {
      original: { writable: true, value: string },
      outro: { writable: true, value: "" },
      intro: { writable: true, value: "" },
      firstChunk: { writable: true, value: chunk },
      lastChunk: { writable: true, value: chunk },
      lastSearchedChunk: { writable: true, value: chunk },
      byStart: { writable: true, value: {} },
      byEnd: { writable: true, value: {} },
      filename: { writable: true, value: options.filename },
      indentExclusionRanges: { writable: true, value: options.indentExclusionRanges },
      sourcemapLocations: { writable: true, value: new BitSet() },
      storedNames: { writable: true, value: {} },
      indentStr: { writable: true, value: void 0 },
      ignoreList: { writable: true, value: options.ignoreList },
      offset: { writable: true, value: options.offset || 0 }
    });
    this.byStart[0] = chunk;
    this.byEnd[string.length] = chunk;
  }
  addSourcemapLocation(char) {
    this.sourcemapLocations.add(char);
  }
  append(content) {
    if (typeof content !== "string") throw new TypeError("outro content must be a string");
    this.outro += content;
    return this;
  }
  appendLeft(index, content) {
    index = index + this.offset;
    if (typeof content !== "string") throw new TypeError("inserted content must be a string");
    this._split(index);
    const chunk = this.byEnd[index];
    if (chunk) {
      chunk.appendLeft(content);
    } else {
      this.intro += content;
    }
    return this;
  }
  appendRight(index, content) {
    index = index + this.offset;
    if (typeof content !== "string") throw new TypeError("inserted content must be a string");
    this._split(index);
    const chunk = this.byStart[index];
    if (chunk) {
      chunk.appendRight(content);
    } else {
      this.outro += content;
    }
    return this;
  }
  clone() {
    const cloned = new _MagicString(this.original, { filename: this.filename, offset: this.offset });
    let originalChunk = this.firstChunk;
    let clonedChunk = cloned.firstChunk = cloned.lastSearchedChunk = originalChunk.clone();
    while (originalChunk) {
      cloned.byStart[clonedChunk.start] = clonedChunk;
      cloned.byEnd[clonedChunk.end] = clonedChunk;
      const nextOriginalChunk = originalChunk.next;
      const nextClonedChunk = nextOriginalChunk && nextOriginalChunk.clone();
      if (nextClonedChunk) {
        clonedChunk.next = nextClonedChunk;
        nextClonedChunk.previous = clonedChunk;
        clonedChunk = nextClonedChunk;
      }
      originalChunk = nextOriginalChunk;
    }
    cloned.lastChunk = clonedChunk;
    if (this.indentExclusionRanges) {
      cloned.indentExclusionRanges = this.indentExclusionRanges.slice();
    }
    cloned.sourcemapLocations = new BitSet(this.sourcemapLocations);
    cloned.intro = this.intro;
    cloned.outro = this.outro;
    return cloned;
  }
  generateDecodedMap(options) {
    options = options || {};
    const sourceIndex = 0;
    const names = Object.keys(this.storedNames);
    const mappings = new Mappings(options.hires);
    const locate = getLocator(this.original);
    if (this.intro) {
      mappings.advance(this.intro);
    }
    this.firstChunk.eachNext((chunk) => {
      const loc = locate(chunk.start);
      if (chunk.intro.length) mappings.advance(chunk.intro);
      if (chunk.edited) {
        mappings.addEdit(
          sourceIndex,
          chunk.content,
          loc,
          chunk.storeName ? names.indexOf(chunk.original) : -1
        );
      } else {
        mappings.addUneditedChunk(sourceIndex, chunk, this.original, loc, this.sourcemapLocations);
      }
      if (chunk.outro.length) mappings.advance(chunk.outro);
    });
    return {
      file: options.file ? options.file.split(/[/\\]/).pop() : void 0,
      sources: [
        options.source ? getRelativePath(options.file || "", options.source) : options.file || ""
      ],
      sourcesContent: options.includeContent ? [this.original] : void 0,
      names,
      mappings: mappings.raw,
      x_google_ignoreList: this.ignoreList ? [sourceIndex] : void 0
    };
  }
  generateMap(options) {
    return new SourceMap(this.generateDecodedMap(options));
  }
  _ensureindentStr() {
    if (this.indentStr === void 0) {
      this.indentStr = guessIndent(this.original);
    }
  }
  _getRawIndentString() {
    this._ensureindentStr();
    return this.indentStr;
  }
  getIndentString() {
    this._ensureindentStr();
    return this.indentStr === null ? "	" : this.indentStr;
  }
  indent(indentStr, options) {
    const pattern = /^[^\r\n]/gm;
    if (isObject(indentStr)) {
      options = indentStr;
      indentStr = void 0;
    }
    if (indentStr === void 0) {
      this._ensureindentStr();
      indentStr = this.indentStr || "	";
    }
    if (indentStr === "") return this;
    options = options || {};
    const isExcluded = {};
    if (options.exclude) {
      const exclusions = typeof options.exclude[0] === "number" ? [options.exclude] : options.exclude;
      exclusions.forEach((exclusion) => {
        for (let i = exclusion[0]; i < exclusion[1]; i += 1) {
          isExcluded[i] = true;
        }
      });
    }
    let shouldIndentNextCharacter = options.indentStart !== false;
    const replacer = (match) => {
      if (shouldIndentNextCharacter) return `${indentStr}${match}`;
      shouldIndentNextCharacter = true;
      return match;
    };
    this.intro = this.intro.replace(pattern, replacer);
    let charIndex = 0;
    let chunk = this.firstChunk;
    while (chunk) {
      const end = chunk.end;
      if (chunk.edited) {
        if (!isExcluded[charIndex]) {
          chunk.content = chunk.content.replace(pattern, replacer);
          if (chunk.content.length) {
            shouldIndentNextCharacter = chunk.content[chunk.content.length - 1] === "\n";
          }
        }
      } else {
        charIndex = chunk.start;
        while (charIndex < end) {
          if (!isExcluded[charIndex]) {
            const char = this.original[charIndex];
            if (char === "\n") {
              shouldIndentNextCharacter = true;
            } else if (char !== "\r" && shouldIndentNextCharacter) {
              shouldIndentNextCharacter = false;
              if (charIndex === chunk.start) {
                chunk.prependRight(indentStr);
              } else {
                this._splitChunk(chunk, charIndex);
                chunk = chunk.next;
                chunk.prependRight(indentStr);
              }
            }
          }
          charIndex += 1;
        }
      }
      charIndex = chunk.end;
      chunk = chunk.next;
    }
    this.outro = this.outro.replace(pattern, replacer);
    return this;
  }
  insert() {
    throw new Error(
      "magicString.insert(...) is deprecated. Use prependRight(...) or appendLeft(...)"
    );
  }
  insertLeft(index, content) {
    if (!warned.insertLeft) {
      console.warn(
        "magicString.insertLeft(...) is deprecated. Use magicString.appendLeft(...) instead"
      );
      warned.insertLeft = true;
    }
    return this.appendLeft(index, content);
  }
  insertRight(index, content) {
    if (!warned.insertRight) {
      console.warn(
        "magicString.insertRight(...) is deprecated. Use magicString.prependRight(...) instead"
      );
      warned.insertRight = true;
    }
    return this.prependRight(index, content);
  }
  move(start, end, index) {
    start = start + this.offset;
    end = end + this.offset;
    index = index + this.offset;
    if (index >= start && index <= end) throw new Error("Cannot move a selection inside itself");
    this._split(start);
    this._split(end);
    this._split(index);
    const first = this.byStart[start];
    const last = this.byEnd[end];
    const oldLeft = first.previous;
    const oldRight = last.next;
    const newRight = this.byStart[index];
    if (!newRight && last === this.lastChunk) return this;
    const newLeft = newRight ? newRight.previous : this.lastChunk;
    if (oldLeft) oldLeft.next = oldRight;
    if (oldRight) oldRight.previous = oldLeft;
    if (newLeft) newLeft.next = first;
    if (newRight) newRight.previous = last;
    if (!first.previous) this.firstChunk = last.next;
    if (!last.next) {
      this.lastChunk = first.previous;
      this.lastChunk.next = null;
    }
    first.previous = newLeft;
    last.next = newRight || null;
    if (!newLeft) this.firstChunk = first;
    if (!newRight) this.lastChunk = last;
    return this;
  }
  overwrite(start, end, content, options) {
    options = options || {};
    return this.update(start, end, content, { ...options, overwrite: !options.contentOnly });
  }
  update(start, end, content, options) {
    start = start + this.offset;
    end = end + this.offset;
    if (typeof content !== "string") throw new TypeError("replacement content must be a string");
    if (this.original.length !== 0) {
      while (start < 0) start += this.original.length;
      while (end < 0) end += this.original.length;
    }
    if (end > this.original.length) throw new Error("end is out of bounds");
    if (start === end)
      throw new Error(
        "Cannot overwrite a zero-length range \u2013 use appendLeft or prependRight instead"
      );
    this._split(start);
    this._split(end);
    if (options === true) {
      if (!warned.storeName) {
        console.warn(
          "The final argument to magicString.overwrite(...) should be an options object. See https://github.com/rich-harris/magic-string"
        );
        warned.storeName = true;
      }
      options = { storeName: true };
    }
    const storeName = options !== void 0 ? options.storeName : false;
    const overwrite = options !== void 0 ? options.overwrite : false;
    if (storeName) {
      const original = this.original.slice(start, end);
      Object.defineProperty(this.storedNames, original, {
        writable: true,
        value: true,
        enumerable: true
      });
    }
    const first = this.byStart[start];
    const last = this.byEnd[end];
    if (first) {
      let chunk = first;
      while (chunk !== last) {
        if (chunk.next !== this.byStart[chunk.end]) {
          throw new Error("Cannot overwrite across a split point");
        }
        chunk = chunk.next;
        chunk.edit("", false);
      }
      first.edit(content, storeName, !overwrite);
    } else {
      const newChunk = new Chunk(start, end, "").edit(content, storeName);
      last.next = newChunk;
      newChunk.previous = last;
    }
    return this;
  }
  prepend(content) {
    if (typeof content !== "string") throw new TypeError("outro content must be a string");
    this.intro = content + this.intro;
    return this;
  }
  prependLeft(index, content) {
    index = index + this.offset;
    if (typeof content !== "string") throw new TypeError("inserted content must be a string");
    this._split(index);
    const chunk = this.byEnd[index];
    if (chunk) {
      chunk.prependLeft(content);
    } else {
      this.intro = content + this.intro;
    }
    return this;
  }
  prependRight(index, content) {
    index = index + this.offset;
    if (typeof content !== "string") throw new TypeError("inserted content must be a string");
    this._split(index);
    const chunk = this.byStart[index];
    if (chunk) {
      chunk.prependRight(content);
    } else {
      this.outro = content + this.outro;
    }
    return this;
  }
  remove(start, end) {
    start = start + this.offset;
    end = end + this.offset;
    if (this.original.length !== 0) {
      while (start < 0) start += this.original.length;
      while (end < 0) end += this.original.length;
    }
    if (start === end) return this;
    if (start < 0 || end > this.original.length) throw new Error("Character is out of bounds");
    if (start > end) throw new Error("end must be greater than start");
    this._split(start);
    this._split(end);
    let chunk = this.byStart[start];
    while (chunk) {
      chunk.intro = "";
      chunk.outro = "";
      chunk.edit("");
      chunk = end > chunk.end ? this.byStart[chunk.end] : null;
    }
    return this;
  }
  reset(start, end) {
    start = start + this.offset;
    end = end + this.offset;
    if (this.original.length !== 0) {
      while (start < 0) start += this.original.length;
      while (end < 0) end += this.original.length;
    }
    if (start === end) return this;
    if (start < 0 || end > this.original.length) throw new Error("Character is out of bounds");
    if (start > end) throw new Error("end must be greater than start");
    this._split(start);
    this._split(end);
    let chunk = this.byStart[start];
    while (chunk) {
      chunk.reset();
      chunk = end > chunk.end ? this.byStart[chunk.end] : null;
    }
    return this;
  }
  lastChar() {
    if (this.outro.length) return this.outro[this.outro.length - 1];
    let chunk = this.lastChunk;
    do {
      if (chunk.outro.length) return chunk.outro[chunk.outro.length - 1];
      if (chunk.content.length) return chunk.content[chunk.content.length - 1];
      if (chunk.intro.length) return chunk.intro[chunk.intro.length - 1];
    } while (chunk = chunk.previous);
    if (this.intro.length) return this.intro[this.intro.length - 1];
    return "";
  }
  lastLine() {
    let lineIndex = this.outro.lastIndexOf(n);
    if (lineIndex !== -1) return this.outro.substr(lineIndex + 1);
    let lineStr = this.outro;
    let chunk = this.lastChunk;
    do {
      if (chunk.outro.length > 0) {
        lineIndex = chunk.outro.lastIndexOf(n);
        if (lineIndex !== -1) return chunk.outro.substr(lineIndex + 1) + lineStr;
        lineStr = chunk.outro + lineStr;
      }
      if (chunk.content.length > 0) {
        lineIndex = chunk.content.lastIndexOf(n);
        if (lineIndex !== -1) return chunk.content.substr(lineIndex + 1) + lineStr;
        lineStr = chunk.content + lineStr;
      }
      if (chunk.intro.length > 0) {
        lineIndex = chunk.intro.lastIndexOf(n);
        if (lineIndex !== -1) return chunk.intro.substr(lineIndex + 1) + lineStr;
        lineStr = chunk.intro + lineStr;
      }
    } while (chunk = chunk.previous);
    lineIndex = this.intro.lastIndexOf(n);
    if (lineIndex !== -1) return this.intro.substr(lineIndex + 1) + lineStr;
    return this.intro + lineStr;
  }
  slice(start = 0, end = this.original.length - this.offset) {
    start = start + this.offset;
    end = end + this.offset;
    if (this.original.length !== 0) {
      while (start < 0) start += this.original.length;
      while (end < 0) end += this.original.length;
    }
    let result = "";
    let chunk = this.firstChunk;
    while (chunk && (chunk.start > start || chunk.end <= start)) {
      if (chunk.start < end && chunk.end >= end) {
        return result;
      }
      chunk = chunk.next;
    }
    if (chunk && chunk.edited && chunk.start !== start)
      throw new Error(`Cannot use replaced character ${start} as slice start anchor.`);
    const startChunk = chunk;
    while (chunk) {
      if (chunk.intro && (startChunk !== chunk || chunk.start === start)) {
        result += chunk.intro;
      }
      const containsEnd = chunk.start < end && chunk.end >= end;
      if (containsEnd && chunk.edited && chunk.end !== end)
        throw new Error(`Cannot use replaced character ${end} as slice end anchor.`);
      const sliceStart = startChunk === chunk ? start - chunk.start : 0;
      const sliceEnd = containsEnd ? chunk.content.length + end - chunk.end : chunk.content.length;
      result += chunk.content.slice(sliceStart, sliceEnd);
      if (chunk.outro && (!containsEnd || chunk.end === end)) {
        result += chunk.outro;
      }
      if (containsEnd) {
        break;
      }
      chunk = chunk.next;
    }
    return result;
  }
  // TODO deprecate this? not really very useful
  snip(start, end) {
    const clone = this.clone();
    clone.remove(0, start);
    clone.remove(end, clone.original.length);
    return clone;
  }
  _split(index) {
    if (this.byStart[index] || this.byEnd[index]) return;
    let chunk = this.lastSearchedChunk;
    const searchForward = index > chunk.end;
    while (chunk) {
      if (chunk.contains(index)) return this._splitChunk(chunk, index);
      chunk = searchForward ? this.byStart[chunk.end] : this.byEnd[chunk.start];
    }
  }
  _splitChunk(chunk, index) {
    if (chunk.edited && chunk.content.length) {
      const loc = getLocator(this.original)(index);
      throw new Error(
        `Cannot split a chunk that has already been edited (${loc.line}:${loc.column} \u2013 "${chunk.original}")`
      );
    }
    const newChunk = chunk.split(index);
    this.byEnd[index] = chunk;
    this.byStart[index] = newChunk;
    this.byEnd[newChunk.end] = newChunk;
    if (chunk === this.lastChunk) this.lastChunk = newChunk;
    this.lastSearchedChunk = chunk;
    return true;
  }
  toString() {
    let str = this.intro;
    let chunk = this.firstChunk;
    while (chunk) {
      str += chunk.toString();
      chunk = chunk.next;
    }
    return str + this.outro;
  }
  isEmpty() {
    let chunk = this.firstChunk;
    do {
      if (chunk.intro.length && chunk.intro.trim() || chunk.content.length && chunk.content.trim() || chunk.outro.length && chunk.outro.trim())
        return false;
    } while (chunk = chunk.next);
    return true;
  }
  length() {
    let chunk = this.firstChunk;
    let length = 0;
    do {
      length += chunk.intro.length + chunk.content.length + chunk.outro.length;
    } while (chunk = chunk.next);
    return length;
  }
  trimLines() {
    return this.trim("[\\r\\n]");
  }
  trim(charType) {
    return this.trimStart(charType).trimEnd(charType);
  }
  trimEndAborted(charType) {
    const rx = new RegExp((charType || "\\s") + "+$");
    this.outro = this.outro.replace(rx, "");
    if (this.outro.length) return true;
    let chunk = this.lastChunk;
    do {
      const end = chunk.end;
      const aborted = chunk.trimEnd(rx);
      if (chunk.end !== end) {
        if (this.lastChunk === chunk) {
          this.lastChunk = chunk.next;
        }
        this.byEnd[chunk.end] = chunk;
        this.byStart[chunk.next.start] = chunk.next;
        this.byEnd[chunk.next.end] = chunk.next;
      }
      if (aborted) return true;
      chunk = chunk.previous;
    } while (chunk);
    return false;
  }
  trimEnd(charType) {
    this.trimEndAborted(charType);
    return this;
  }
  trimStartAborted(charType) {
    const rx = new RegExp("^" + (charType || "\\s") + "+");
    this.intro = this.intro.replace(rx, "");
    if (this.intro.length) return true;
    let chunk = this.firstChunk;
    do {
      const end = chunk.end;
      const aborted = chunk.trimStart(rx);
      if (chunk.end !== end) {
        if (chunk === this.lastChunk) this.lastChunk = chunk.next;
        this.byEnd[chunk.end] = chunk;
        this.byStart[chunk.next.start] = chunk.next;
        this.byEnd[chunk.next.end] = chunk.next;
      }
      if (aborted) return true;
      chunk = chunk.next;
    } while (chunk);
    return false;
  }
  trimStart(charType) {
    this.trimStartAborted(charType);
    return this;
  }
  hasChanged() {
    return this.original !== this.toString();
  }
  _replaceRegexp(searchValue, replacement) {
    function getReplacement(match, str) {
      if (typeof replacement === "string") {
        return replacement.replace(/\$(\$|&|\d+)/g, (_, i) => {
          if (i === "$") return "$";
          if (i === "&") return match[0];
          const num = +i;
          if (num < match.length) return match[+i];
          return `$${i}`;
        });
      } else {
        return replacement(...match, match.index, str, match.groups);
      }
    }
    function matchAll(re, str) {
      let match;
      const matches = [];
      while (match = re.exec(str)) {
        matches.push(match);
      }
      return matches;
    }
    if (searchValue.global) {
      const matches = matchAll(searchValue, this.original);
      matches.forEach((match) => {
        if (match.index != null) {
          const replacement2 = getReplacement(match, this.original);
          if (replacement2 !== match[0]) {
            this.overwrite(match.index, match.index + match[0].length, replacement2);
          }
        }
      });
    } else {
      const match = this.original.match(searchValue);
      if (match && match.index != null) {
        const replacement2 = getReplacement(match, this.original);
        if (replacement2 !== match[0]) {
          this.overwrite(match.index, match.index + match[0].length, replacement2);
        }
      }
    }
    return this;
  }
  _replaceString(string, replacement) {
    const { original } = this;
    const index = original.indexOf(string);
    if (index !== -1) {
      this.overwrite(index, index + string.length, replacement);
    }
    return this;
  }
  replace(searchValue, replacement) {
    if (typeof searchValue === "string") {
      return this._replaceString(searchValue, replacement);
    }
    return this._replaceRegexp(searchValue, replacement);
  }
  _replaceAllString(string, replacement) {
    const { original } = this;
    const stringLength = string.length;
    for (let index = original.indexOf(string); index !== -1; index = original.indexOf(string, index + stringLength)) {
      const previous = original.slice(index, index + stringLength);
      if (previous !== replacement) this.overwrite(index, index + stringLength, replacement);
    }
    return this;
  }
  replaceAll(searchValue, replacement) {
    if (typeof searchValue === "string") {
      return this._replaceAllString(searchValue, replacement);
    }
    if (!searchValue.global) {
      throw new TypeError(
        "MagicString.prototype.replaceAll called with a non-global RegExp argument"
      );
    }
    return this._replaceRegexp(searchValue, replacement);
  }
};
var hasOwnProp = Object.prototype.hasOwnProperty;
var Bundle = class _Bundle {
  constructor(options = {}) {
    this.intro = options.intro || "";
    this.separator = options.separator !== void 0 ? options.separator : "\n";
    this.sources = [];
    this.uniqueSources = [];
    this.uniqueSourceIndexByFilename = {};
  }
  addSource(source) {
    if (source instanceof MagicString) {
      return this.addSource({
        content: source,
        filename: source.filename,
        separator: this.separator
      });
    }
    if (!isObject(source) || !source.content) {
      throw new Error(
        "bundle.addSource() takes an object with a `content` property, which should be an instance of MagicString, and an optional `filename`"
      );
    }
    ["filename", "ignoreList", "indentExclusionRanges", "separator"].forEach((option) => {
      if (!hasOwnProp.call(source, option)) source[option] = source.content[option];
    });
    if (source.separator === void 0) {
      source.separator = this.separator;
    }
    if (source.filename) {
      if (!hasOwnProp.call(this.uniqueSourceIndexByFilename, source.filename)) {
        this.uniqueSourceIndexByFilename[source.filename] = this.uniqueSources.length;
        this.uniqueSources.push({ filename: source.filename, content: source.content.original });
      } else {
        const uniqueSource = this.uniqueSources[this.uniqueSourceIndexByFilename[source.filename]];
        if (source.content.original !== uniqueSource.content) {
          throw new Error(`Illegal source: same filename (${source.filename}), different contents`);
        }
      }
    }
    this.sources.push(source);
    return this;
  }
  append(str, options) {
    this.addSource({
      content: new MagicString(str),
      separator: options && options.separator || ""
    });
    return this;
  }
  clone() {
    const bundle = new _Bundle({
      intro: this.intro,
      separator: this.separator
    });
    this.sources.forEach((source) => {
      bundle.addSource({
        filename: source.filename,
        content: source.content.clone(),
        separator: source.separator
      });
    });
    return bundle;
  }
  generateDecodedMap(options = {}) {
    const names = [];
    let x_google_ignoreList = void 0;
    this.sources.forEach((source) => {
      Object.keys(source.content.storedNames).forEach((name) => {
        if (!~names.indexOf(name)) names.push(name);
      });
    });
    const mappings = new Mappings(options.hires);
    if (this.intro) {
      mappings.advance(this.intro);
    }
    this.sources.forEach((source, i) => {
      if (i > 0) {
        mappings.advance(this.separator);
      }
      const sourceIndex = source.filename ? this.uniqueSourceIndexByFilename[source.filename] : -1;
      const magicString = source.content;
      const locate = getLocator(magicString.original);
      if (magicString.intro) {
        mappings.advance(magicString.intro);
      }
      magicString.firstChunk.eachNext((chunk) => {
        const loc = locate(chunk.start);
        if (chunk.intro.length) mappings.advance(chunk.intro);
        if (source.filename) {
          if (chunk.edited) {
            mappings.addEdit(
              sourceIndex,
              chunk.content,
              loc,
              chunk.storeName ? names.indexOf(chunk.original) : -1
            );
          } else {
            mappings.addUneditedChunk(
              sourceIndex,
              chunk,
              magicString.original,
              loc,
              magicString.sourcemapLocations
            );
          }
        } else {
          mappings.advance(chunk.content);
        }
        if (chunk.outro.length) mappings.advance(chunk.outro);
      });
      if (magicString.outro) {
        mappings.advance(magicString.outro);
      }
      if (source.ignoreList && sourceIndex !== -1) {
        if (x_google_ignoreList === void 0) {
          x_google_ignoreList = [];
        }
        x_google_ignoreList.push(sourceIndex);
      }
    });
    return {
      file: options.file ? options.file.split(/[/\\]/).pop() : void 0,
      sources: this.uniqueSources.map((source) => {
        return options.file ? getRelativePath(options.file, source.filename) : source.filename;
      }),
      sourcesContent: this.uniqueSources.map((source) => {
        return options.includeContent ? source.content : null;
      }),
      names,
      mappings: mappings.raw,
      x_google_ignoreList
    };
  }
  generateMap(options) {
    return new SourceMap(this.generateDecodedMap(options));
  }
  getIndentString() {
    const indentStringCounts = {};
    this.sources.forEach((source) => {
      const indentStr = source.content._getRawIndentString();
      if (indentStr === null) return;
      if (!indentStringCounts[indentStr]) indentStringCounts[indentStr] = 0;
      indentStringCounts[indentStr] += 1;
    });
    return Object.keys(indentStringCounts).sort((a, b) => {
      return indentStringCounts[a] - indentStringCounts[b];
    })[0] || "	";
  }
  indent(indentStr) {
    if (!arguments.length) {
      indentStr = this.getIndentString();
    }
    if (indentStr === "") return this;
    let trailingNewline = !this.intro || this.intro.slice(-1) === "\n";
    this.sources.forEach((source, i) => {
      const separator = source.separator !== void 0 ? source.separator : this.separator;
      const indentStart = trailingNewline || i > 0 && /\r?\n$/.test(separator);
      source.content.indent(indentStr, {
        exclude: source.indentExclusionRanges,
        indentStart
        //: trailingNewline || /\r?\n$/.test( separator )  //true///\r?\n/.test( separator )
      });
      trailingNewline = source.content.lastChar() === "\n";
    });
    if (this.intro) {
      this.intro = indentStr + this.intro.replace(/^[^\n]/gm, (match, index) => {
        return index > 0 ? indentStr + match : match;
      });
    }
    return this;
  }
  prepend(str) {
    this.intro = str + this.intro;
    return this;
  }
  toString() {
    const body = this.sources.map((source, i) => {
      const separator = source.separator !== void 0 ? source.separator : this.separator;
      const str = (i > 0 ? separator : "") + source.content.toString();
      return str;
    }).join("");
    return this.intro + body;
  }
  isEmpty() {
    if (this.intro.length && this.intro.trim()) return false;
    if (this.sources.some((source) => !source.content.isEmpty())) return false;
    return true;
  }
  length() {
    return this.sources.reduce(
      (length, source) => length + source.content.length(),
      this.intro.length
    );
  }
  trimLines() {
    return this.trim("[\\r\\n]");
  }
  trim(charType) {
    return this.trimStart(charType).trimEnd(charType);
  }
  trimStart(charType) {
    const rx = new RegExp("^" + (charType || "\\s") + "+");
    this.intro = this.intro.replace(rx, "");
    if (!this.intro) {
      let source;
      let i = 0;
      do {
        source = this.sources[i++];
        if (!source) {
          break;
        }
      } while (!source.content.trimStartAborted(charType));
    }
    return this;
  }
  trimEnd(charType) {
    const rx = new RegExp((charType || "\\s") + "+$");
    let source;
    let i = this.sources.length - 1;
    do {
      source = this.sources[i--];
      if (!source) {
        this.intro = this.intro.replace(rx, "");
        break;
      }
    } while (!source.content.trimEndAborted(charType));
    return this;
  }
};
