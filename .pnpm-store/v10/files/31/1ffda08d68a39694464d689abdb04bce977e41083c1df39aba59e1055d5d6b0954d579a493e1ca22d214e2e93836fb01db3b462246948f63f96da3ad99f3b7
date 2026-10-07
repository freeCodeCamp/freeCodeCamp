import { N as Node, T as Type, R as Range, b as YAMLSemanticError, Y as YAMLSyntaxError, C as Char, _ as _defineProperty, P as PlainValue } from './PlainValue-183afbad.js';

class BlankLine extends Node {
  constructor() {
    super(Type.BLANK_LINE);
  }

  /* istanbul ignore next */
  get includesTrailingLines() {
    // This is never called from anywhere, but if it were,
    // this is the value it should return.
    return true;
  }

  /**
   * Parses a blank line from the source
   *
   * @param {ParseContext} context
   * @param {number} start - Index of first \n character
   * @returns {number} - Index of the character after this
   */
  parse(context, start) {
    this.context = context;
    this.range = new Range(start, start + 1);
    return start + 1;
  }
}

class CollectionItem extends Node {
  constructor(type, props) {
    super(type, props);
    this.node = null;
  }
  get includesTrailingLines() {
    return !!this.node && this.node.includesTrailingLines;
  }

  /**
   * @param {ParseContext} context
   * @param {number} start - Index of first character
   * @returns {number} - Index of the character after this
   */
  parse(context, start) {
    this.context = context;
    const {
      parseNode,
      src
    } = context;
    let {
      atLineStart,
      lineStart
    } = context;
    if (!atLineStart && this.type === Type.SEQ_ITEM) this.error = new YAMLSemanticError(this, 'Sequence items must not have preceding content on the same line');
    const indent = atLineStart ? start - lineStart : context.indent;
    let offset = Node.endOfWhiteSpace(src, start + 1);
    let ch = src[offset];
    const inlineComment = ch === '#';
    const comments = [];
    let blankLine = null;
    while (ch === '\n' || ch === '#') {
      if (ch === '#') {
        const end = Node.endOfLine(src, offset + 1);
        comments.push(new Range(offset, end));
        offset = end;
      } else {
        atLineStart = true;
        lineStart = offset + 1;
        const wsEnd = Node.endOfWhiteSpace(src, lineStart);
        if (src[wsEnd] === '\n' && comments.length === 0) {
          blankLine = new BlankLine();
          lineStart = blankLine.parse({
            src
          }, lineStart);
        }
        offset = Node.endOfIndent(src, lineStart);
      }
      ch = src[offset];
    }
    if (Node.nextNodeIsIndented(ch, offset - (lineStart + indent), this.type !== Type.SEQ_ITEM)) {
      this.node = parseNode({
        atLineStart,
        inCollection: false,
        indent,
        lineStart,
        parent: this
      }, offset);
    } else if (ch && lineStart > start + 1) {
      offset = lineStart - 1;
    }
    if (this.node) {
      if (blankLine) {
        // Only blank lines preceding non-empty nodes are captured. Note that
        // this means that collection item range start indices do not always
        // increase monotonically. -- eemeli/yaml#126
        const items = context.parent.items || context.parent.contents;
        if (items) items.push(blankLine);
      }
      if (comments.length) Array.prototype.push.apply(this.props, comments);
      offset = this.node.range.end;
    } else {
      if (inlineComment) {
        const c = comments[0];
        this.props.push(c);
        offset = c.end;
      } else {
        offset = Node.endOfLine(src, start + 1);
      }
    }
    const end = this.node ? this.node.valueRange.end : offset;
    this.valueRange = new Range(start, end);
    return offset;
  }
  setOrigRanges(cr, offset) {
    offset = super.setOrigRanges(cr, offset);
    return this.node ? this.node.setOrigRanges(cr, offset) : offset;
  }
  toString() {
    const {
      context: {
        src
      },
      node,
      range,
      value
    } = this;
    if (value != null) return value;
    const str = node ? src.slice(range.start, node.range.start) + String(node) : src.slice(range.start, range.end);
    return Node.addStringTerminator(src, range.end, str);
  }
}

class Comment extends Node {
  constructor() {
    super(Type.COMMENT);
  }

  /**
   * Parses a comment line from the source
   *
   * @param {ParseContext} context
   * @param {number} start - Index of first character
   * @returns {number} - Index of the character after this scalar
   */
  parse(context, start) {
    this.context = context;
    const offset = this.parseComment(start);
    this.range = new Range(start, offset);
    return offset;
  }
}

function grabCollectionEndComments(node) {
  let cnode = node;
  while (cnode instanceof CollectionItem) cnode = cnode.node;
  if (!(cnode instanceof Collection)) return null;
  const len = cnode.items.length;
  let ci = -1;
  for (let i = len - 1; i >= 0; --i) {
    const n = cnode.items[i];
    if (n.type === Type.COMMENT) {
      // Keep sufficiently indented comments with preceding node
      const {
        indent,
        lineStart
      } = n.context;
      if (indent > 0 && n.range.start >= lineStart + indent) break;
      ci = i;
    } else if (n.type === Type.BLANK_LINE) ci = i;else break;
  }
  if (ci === -1) return null;
  const ca = cnode.items.splice(ci, len - ci);
  const prevEnd = ca[0].range.start;
  while (true) {
    cnode.range.end = prevEnd;
    if (cnode.valueRange && cnode.valueRange.end > prevEnd) cnode.valueRange.end = prevEnd;
    if (cnode === node) break;
    cnode = cnode.context.parent;
  }
  return ca;
}
class Collection extends Node {
  static nextContentHasIndent(src, offset, indent) {
    const lineStart = Node.endOfLine(src, offset) + 1;
    offset = Node.endOfWhiteSpace(src, lineStart);
    const ch = src[offset];
    if (!ch) return false;
    if (offset >= lineStart + indent) return true;
    if (ch !== '#' && ch !== '\n') return false;
    return Collection.nextContentHasIndent(src, offset, indent);
  }
  constructor(firstItem) {
    super(firstItem.type === Type.SEQ_ITEM ? Type.SEQ : Type.MAP);
    for (let i = firstItem.props.length - 1; i >= 0; --i) {
      if (firstItem.props[i].start < firstItem.context.lineStart) {
        // props on previous line are assumed by the collection
        this.props = firstItem.props.slice(0, i + 1);
        firstItem.props = firstItem.props.slice(i + 1);
        const itemRange = firstItem.props[0] || firstItem.valueRange;
        firstItem.range.start = itemRange.start;
        break;
      }
    }
    this.items = [firstItem];
    const ec = grabCollectionEndComments(firstItem);
    if (ec) Array.prototype.push.apply(this.items, ec);
  }
  get includesTrailingLines() {
    return this.items.length > 0;
  }

  /**
   * @param {ParseContext} context
   * @param {number} start - Index of first character
   * @returns {number} - Index of the character after this
   */
  parse(context, start) {
    this.context = context;
    const {
      parseNode,
      src
    } = context;
    // It's easier to recalculate lineStart here rather than tracking down the
    // last context from which to read it -- eemeli/yaml#2
    let lineStart = Node.startOfLine(src, start);
    const firstItem = this.items[0];
    // First-item context needs to be correct for later comment handling
    // -- eemeli/yaml#17
    firstItem.context.parent = this;
    this.valueRange = Range.copy(firstItem.valueRange);
    const indent = firstItem.range.start - firstItem.context.lineStart;
    let offset = start;
    offset = Node.normalizeOffset(src, offset);
    let ch = src[offset];
    let atLineStart = Node.endOfWhiteSpace(src, lineStart) === offset;
    let prevIncludesTrailingLines = false;
    while (ch) {
      while (ch === '\n' || ch === '#') {
        if (atLineStart && ch === '\n' && !prevIncludesTrailingLines) {
          const blankLine = new BlankLine();
          offset = blankLine.parse({
            src
          }, offset);
          this.valueRange.end = offset;
          if (offset >= src.length) {
            ch = null;
            break;
          }
          this.items.push(blankLine);
          offset -= 1; // blankLine.parse() consumes terminal newline
        } else if (ch === '#') {
          if (offset < lineStart + indent && !Collection.nextContentHasIndent(src, offset, indent)) {
            return offset;
          }
          const comment = new Comment();
          offset = comment.parse({
            indent,
            lineStart,
            src
          }, offset);
          this.items.push(comment);
          this.valueRange.end = offset;
          if (offset >= src.length) {
            ch = null;
            break;
          }
        }
        lineStart = offset + 1;
        offset = Node.endOfIndent(src, lineStart);
        if (Node.atBlank(src, offset)) {
          const wsEnd = Node.endOfWhiteSpace(src, offset);
          const next = src[wsEnd];
          if (!next || next === '\n' || next === '#') {
            offset = wsEnd;
          }
        }
        ch = src[offset];
        atLineStart = true;
      }
      if (!ch) {
        break;
      }
      if (offset !== lineStart + indent && (atLineStart || ch !== ':')) {
        if (offset < lineStart + indent) {
          if (lineStart > start) offset = lineStart;
          break;
        } else if (!this.error) {
          const msg = 'All collection items must start at the same column';
          this.error = new YAMLSyntaxError(this, msg);
        }
      }
      if (firstItem.type === Type.SEQ_ITEM) {
        if (ch !== '-') {
          if (lineStart > start) offset = lineStart;
          break;
        }
      } else if (ch === '-' && !this.error) {
        // map key may start with -, as long as it's followed by a non-whitespace char
        const next = src[offset + 1];
        if (!next || next === '\n' || next === '\t' || next === ' ') {
          const msg = 'A collection cannot be both a mapping and a sequence';
          this.error = new YAMLSyntaxError(this, msg);
        }
      }
      const node = parseNode({
        atLineStart,
        inCollection: true,
        indent,
        lineStart,
        parent: this
      }, offset);
      if (!node) return offset; // at next document start
      this.items.push(node);
      this.valueRange.end = node.valueRange.end;
      offset = Node.normalizeOffset(src, node.range.end);
      ch = src[offset];
      atLineStart = false;
      prevIncludesTrailingLines = node.includesTrailingLines;
      // Need to reset lineStart and atLineStart here if preceding node's range
      // has advanced to check the current line's indentation level
      // -- eemeli/yaml#10 & eemeli/yaml#38
      if (ch) {
        let ls = offset - 1;
        let prev = src[ls];
        while (prev === ' ' || prev === '\t') prev = src[--ls];
        if (prev === '\n') {
          lineStart = ls + 1;
          atLineStart = true;
        }
      }
      const ec = grabCollectionEndComments(node);
      if (ec) Array.prototype.push.apply(this.items, ec);
    }
    return offset;
  }
  setOrigRanges(cr, offset) {
    offset = super.setOrigRanges(cr, offset);
    this.items.forEach(node => {
      offset = node.setOrigRanges(cr, offset);
    });
    return offset;
  }
  toString() {
    const {
      context: {
        src
      },
      items,
      range,
      value
    } = this;
    if (value != null) return value;
    let str = src.slice(range.start, items[0].range.start) + String(items[0]);
    for (let i = 1; i < items.length; ++i) {
      const item = items[i];
      const {
        atLineStart,
        indent
      } = item.context;
      if (atLineStart) for (let i = 0; i < indent; ++i) str += ' ';
      str += String(item);
    }
    return Node.addStringTerminator(src, range.end, str);
  }
}

class Directive extends Node {
  constructor() {
    super(Type.DIRECTIVE);
    this.name = null;
  }
  get parameters() {
    const raw = this.rawValue;
    return raw ? raw.trim().split(/[ \t]+/) : [];
  }
  parseName(start) {
    const {
      src
    } = this.context;
    let offset = start;
    let ch = src[offset];
    while (ch && ch !== '\n' && ch !== '\t' && ch !== ' ') ch = src[offset += 1];
    this.name = src.slice(start, offset);
    return offset;
  }
  parseParameters(start) {
    const {
      src
    } = this.context;
    let offset = start;
    let ch = src[offset];
    while (ch && ch !== '\n' && ch !== '#') ch = src[offset += 1];
    this.valueRange = new Range(start, offset);
    return offset;
  }
  parse(context, start) {
    this.context = context;
    let offset = this.parseName(start + 1);
    offset = this.parseParameters(offset);
    offset = this.parseComment(offset);
    this.range = new Range(start, offset);
    return offset;
  }
}

class Document extends Node {
  static startCommentOrEndBlankLine(src, start) {
    const offset = Node.endOfWhiteSpace(src, start);
    const ch = src[offset];
    return ch === '#' || ch === '\n' ? offset : start;
  }
  constructor() {
    super(Type.DOCUMENT);
    this.directives = null;
    this.contents = null;
    this.directivesEndMarker = null;
    this.documentEndMarker = null;
  }
  parseDirectives(start) {
    const {
      src
    } = this.context;
    this.directives = [];
    let atLineStart = true;
    let hasDirectives = false;
    let offset = start;
    while (!Node.atDocumentBoundary(src, offset, Char.DIRECTIVES_END)) {
      offset = Document.startCommentOrEndBlankLine(src, offset);
      switch (src[offset]) {
        case '\n':
          if (atLineStart) {
            const blankLine = new BlankLine();
            offset = blankLine.parse({
              src
            }, offset);
            if (offset < src.length) {
              this.directives.push(blankLine);
            }
          } else {
            offset += 1;
            atLineStart = true;
          }
          break;
        case '#':
          {
            const comment = new Comment();
            offset = comment.parse({
              src
            }, offset);
            this.directives.push(comment);
            atLineStart = false;
          }
          break;
        case '%':
          {
            const directive = new Directive();
            offset = directive.parse({
              parent: this,
              src
            }, offset);
            this.directives.push(directive);
            hasDirectives = true;
            atLineStart = false;
          }
          break;
        default:
          if (hasDirectives) {
            this.error = new YAMLSemanticError(this, 'Missing directives-end indicator line');
          } else if (this.directives.length > 0) {
            this.contents = this.directives;
            this.directives = [];
          }
          return offset;
      }
    }
    if (src[offset]) {
      this.directivesEndMarker = new Range(offset, offset + 3);
      return offset + 3;
    }
    if (hasDirectives) {
      this.error = new YAMLSemanticError(this, 'Missing directives-end indicator line');
    } else if (this.directives.length > 0) {
      this.contents = this.directives;
      this.directives = [];
    }
    return offset;
  }
  parseContents(start) {
    const {
      parseNode,
      src
    } = this.context;
    if (!this.contents) this.contents = [];
    let lineStart = start;
    while (src[lineStart - 1] === '-') lineStart -= 1;
    let offset = Node.endOfWhiteSpace(src, start);
    let atLineStart = lineStart === start;
    this.valueRange = new Range(offset);
    while (!Node.atDocumentBoundary(src, offset, Char.DOCUMENT_END)) {
      switch (src[offset]) {
        case '\n':
          if (atLineStart) {
            const blankLine = new BlankLine();
            offset = blankLine.parse({
              src
            }, offset);
            if (offset < src.length) {
              this.contents.push(blankLine);
            }
          } else {
            offset += 1;
            atLineStart = true;
          }
          lineStart = offset;
          break;
        case '#':
          {
            const comment = new Comment();
            offset = comment.parse({
              src
            }, offset);
            this.contents.push(comment);
            atLineStart = false;
          }
          break;
        default:
          {
            const iEnd = Node.endOfIndent(src, offset);
            const context = {
              atLineStart,
              indent: -1,
              inFlow: false,
              inCollection: false,
              lineStart,
              parent: this
            };
            const node = parseNode(context, iEnd);
            if (!node) return this.valueRange.end = iEnd; // at next document start
            this.contents.push(node);
            offset = node.range.end;
            atLineStart = false;
            const ec = grabCollectionEndComments(node);
            if (ec) Array.prototype.push.apply(this.contents, ec);
          }
      }
      offset = Document.startCommentOrEndBlankLine(src, offset);
    }
    this.valueRange.end = offset;
    if (src[offset]) {
      this.documentEndMarker = new Range(offset, offset + 3);
      offset += 3;
      if (src[offset]) {
        offset = Node.endOfWhiteSpace(src, offset);
        if (src[offset] === '#') {
          const comment = new Comment();
          offset = comment.parse({
            src
          }, offset);
          this.contents.push(comment);
        }
        switch (src[offset]) {
          case '\n':
            offset += 1;
            break;
          case undefined:
            break;
          default:
            this.error = new YAMLSyntaxError(this, 'Document end marker line cannot have a non-comment suffix');
        }
      }
    }
    return offset;
  }

  /**
   * @param {ParseContext} context
   * @param {number} start - Index of first character
   * @returns {number} - Index of the character after this
   */
  parse(context, start) {
    context.root = this;
    this.context = context;
    const {
      src
    } = context;
    let offset = src.charCodeAt(start) === 0xfeff ? start + 1 : start; // skip BOM
    offset = this.parseDirectives(offset);
    offset = this.parseContents(offset);
    return offset;
  }
  setOrigRanges(cr, offset) {
    offset = super.setOrigRanges(cr, offset);
    this.directives.forEach(node => {
      offset = node.setOrigRanges(cr, offset);
    });
    if (this.directivesEndMarker) offset = this.directivesEndMarker.setOrigRange(cr, offset);
    this.contents.forEach(node => {
      offset = node.setOrigRanges(cr, offset);
    });
    if (this.documentEndMarker) offset = this.documentEndMarker.setOrigRange(cr, offset);
    return offset;
  }
  toString() {
    const {
      contents,
      directives,
      value
    } = this;
    if (value != null) return value;
    let str = directives.join('');
    if (contents.length > 0) {
      if (directives.length > 0 || contents[0].type === Type.COMMENT) str += '---\n';
      str += contents.join('');
    }
    if (str[str.length - 1] !== '\n') str += '\n';
    return str;
  }
}

class Alias extends Node {
  /**
   * Parses an *alias from the source
   *
   * @param {ParseContext} context
   * @param {number} start - Index of first character
   * @returns {number} - Index of the character after this scalar
   */
  parse(context, start) {
    this.context = context;
    const {
      src
    } = context;
    let offset = Node.endOfIdentifier(src, start + 1);
    this.valueRange = new Range(start + 1, offset);
    offset = Node.endOfWhiteSpace(src, offset);
    offset = this.parseComment(offset);
    return offset;
  }
}

const Chomp = {
  CLIP: 'CLIP',
  KEEP: 'KEEP',
  STRIP: 'STRIP'
};
class BlockValue extends Node {
  constructor(type, props) {
    super(type, props);
    this.blockIndent = null;
    this.chomping = Chomp.CLIP;
    this.header = null;
  }
  get includesTrailingLines() {
    return this.chomping === Chomp.KEEP;
  }
  get strValue() {
    if (!this.valueRange || !this.context) return null;
    let {
      start,
      end
    } = this.valueRange;
    const {
      indent,
      src
    } = this.context;
    if (this.valueRange.isEmpty()) return '';
    let lastNewLine = null;
    let ch = src[end - 1];
    while (ch === '\n' || ch === '\t' || ch === ' ') {
      end -= 1;
      if (end <= start) {
        if (this.chomping === Chomp.KEEP) break;else return ''; // probably never happens
      }
      if (ch === '\n') lastNewLine = end;
      ch = src[end - 1];
    }
    let keepStart = end + 1;
    if (lastNewLine) {
      if (this.chomping === Chomp.KEEP) {
        keepStart = lastNewLine;
        end = this.valueRange.end;
      } else {
        end = lastNewLine;
      }
    }
    const bi = indent + this.blockIndent;
    const folded = this.type === Type.BLOCK_FOLDED;
    let atStart = true;
    let str = '';
    let sep = '';
    let prevMoreIndented = false;
    for (let i = start; i < end; ++i) {
      for (let j = 0; j < bi; ++j) {
        if (src[i] !== ' ') break;
        i += 1;
      }
      const ch = src[i];
      if (ch === '\n') {
        if (sep === '\n') str += '\n';else sep = '\n';
      } else {
        const lineEnd = Node.endOfLine(src, i);
        const line = src.slice(i, lineEnd);
        i = lineEnd;
        if (folded && (ch === ' ' || ch === '\t') && i < keepStart) {
          if (sep === ' ') sep = '\n';else if (!prevMoreIndented && !atStart && sep === '\n') sep = '\n\n';
          str += sep + line; //+ ((lineEnd < end && src[lineEnd]) || '')
          sep = lineEnd < end && src[lineEnd] || '';
          prevMoreIndented = true;
        } else {
          str += sep + line;
          sep = folded && i < keepStart ? ' ' : '\n';
          prevMoreIndented = false;
        }
        if (atStart && line !== '') atStart = false;
      }
    }
    return this.chomping === Chomp.STRIP ? str : str + '\n';
  }
  parseBlockHeader(start) {
    const {
      src
    } = this.context;
    let offset = start + 1;
    let bi = '';
    while (true) {
      const ch = src[offset];
      switch (ch) {
        case '-':
          this.chomping = Chomp.STRIP;
          break;
        case '+':
          this.chomping = Chomp.KEEP;
          break;
        case '0':
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
          bi += ch;
          break;
        default:
          this.blockIndent = Number(bi) || null;
          this.header = new Range(start, offset);
          return offset;
      }
      offset += 1;
    }
  }
  parseBlockValue(start) {
    const {
      indent,
      src
    } = this.context;
    const explicit = !!this.blockIndent;
    let offset = start;
    let valueEnd = start;
    let minBlockIndent = 1;
    for (let ch = src[offset]; ch === '\n'; ch = src[offset]) {
      offset += 1;
      if (Node.atDocumentBoundary(src, offset)) break;
      const end = Node.endOfBlockIndent(src, indent, offset); // should not include tab?
      if (end === null) break;
      const ch = src[end];
      const lineIndent = end - (offset + indent);
      if (!this.blockIndent) {
        // no explicit block indent, none yet detected
        if (src[end] !== '\n') {
          // first line with non-whitespace content
          if (lineIndent < minBlockIndent) {
            const msg = 'Block scalars with more-indented leading empty lines must use an explicit indentation indicator';
            this.error = new YAMLSemanticError(this, msg);
          }
          this.blockIndent = lineIndent;
        } else if (lineIndent > minBlockIndent) {
          // empty line with more whitespace
          minBlockIndent = lineIndent;
        }
      } else if (ch && ch !== '\n' && lineIndent < this.blockIndent) {
        if (src[end] === '#') break;
        if (!this.error) {
          const src = explicit ? 'explicit indentation indicator' : 'first line';
          const msg = `Block scalars must not be less indented than their ${src}`;
          this.error = new YAMLSemanticError(this, msg);
        }
      }
      if (src[end] === '\n') {
        offset = end;
      } else {
        offset = valueEnd = Node.endOfLine(src, end);
      }
    }
    if (this.chomping !== Chomp.KEEP) {
      offset = src[valueEnd] ? valueEnd + 1 : valueEnd;
    }
    this.valueRange = new Range(start + 1, offset);
    return offset;
  }

  /**
   * Parses a block value from the source
   *
   * Accepted forms are:
   * ```
   * BS
   * block
   * lines
   *
   * BS #comment
   * block
   * lines
   * ```
   * where the block style BS matches the regexp `[|>][-+1-9]*` and block lines
   * are empty or have an indent level greater than `indent`.
   *
   * @param {ParseContext} context
   * @param {number} start - Index of first character
   * @returns {number} - Index of the character after this block
   */
  parse(context, start) {
    this.context = context;
    const {
      src
    } = context;
    let offset = this.parseBlockHeader(start);
    offset = Node.endOfWhiteSpace(src, offset);
    offset = this.parseComment(offset);
    offset = this.parseBlockValue(offset);
    return offset;
  }
  setOrigRanges(cr, offset) {
    offset = super.setOrigRanges(cr, offset);
    return this.header ? this.header.setOrigRange(cr, offset) : offset;
  }
}

class FlowCollection extends Node {
  constructor(type, props) {
    super(type, props);
    this.items = null;
  }
  prevNodeIsJsonLike(idx = this.items.length) {
    const node = this.items[idx - 1];
    return !!node && (node.jsonLike || node.type === Type.COMMENT && this.prevNodeIsJsonLike(idx - 1));
  }

  /**
   * @param {ParseContext} context
   * @param {number} start - Index of first character
   * @returns {number} - Index of the character after this
   */
  parse(context, start) {
    this.context = context;
    const {
      parseNode,
      src
    } = context;
    let {
      indent,
      lineStart
    } = context;
    let char = src[start]; // { or [
    this.items = [{
      char,
      offset: start
    }];
    let offset = Node.endOfWhiteSpace(src, start + 1);
    char = src[offset];
    while (char && char !== ']' && char !== '}') {
      switch (char) {
        case '\n':
          {
            lineStart = offset + 1;
            const wsEnd = Node.endOfWhiteSpace(src, lineStart);
            if (src[wsEnd] === '\n') {
              const blankLine = new BlankLine();
              lineStart = blankLine.parse({
                src
              }, lineStart);
              this.items.push(blankLine);
            }
            offset = Node.endOfIndent(src, lineStart);
            if (offset <= lineStart + indent) {
              char = src[offset];
              if (offset < lineStart + indent || char !== ']' && char !== '}') {
                const msg = 'Insufficient indentation in flow collection';
                this.error = new YAMLSemanticError(this, msg);
              }
            }
          }
          break;
        case ',':
          {
            this.items.push({
              char,
              offset
            });
            offset += 1;
          }
          break;
        case '#':
          {
            const comment = new Comment();
            offset = comment.parse({
              src
            }, offset);
            this.items.push(comment);
          }
          break;
        case '?':
        case ':':
          {
            const next = src[offset + 1];
            if (next === '\n' || next === '\t' || next === ' ' || next === ',' ||
            // in-flow : after JSON-like key does not need to be followed by whitespace
            char === ':' && this.prevNodeIsJsonLike()) {
              this.items.push({
                char,
                offset
              });
              offset += 1;
              break;
            }
          }
        // fallthrough
        default:
          {
            const node = parseNode({
              atLineStart: false,
              inCollection: false,
              inFlow: true,
              indent: -1,
              lineStart,
              parent: this
            }, offset);
            if (!node) {
              // at next document start
              this.valueRange = new Range(start, offset);
              return offset;
            }
            this.items.push(node);
            offset = Node.normalizeOffset(src, node.range.end);
          }
      }
      offset = Node.endOfWhiteSpace(src, offset);
      char = src[offset];
    }
    this.valueRange = new Range(start, offset + 1);
    if (char) {
      this.items.push({
        char,
        offset
      });
      offset = Node.endOfWhiteSpace(src, offset + 1);
      offset = this.parseComment(offset);
    }
    return offset;
  }
  setOrigRanges(cr, offset) {
    offset = super.setOrigRanges(cr, offset);
    this.items.forEach(node => {
      if (node instanceof Node) {
        offset = node.setOrigRanges(cr, offset);
      } else if (cr.length === 0) {
        node.origOffset = node.offset;
      } else {
        let i = offset;
        while (i < cr.length) {
          if (cr[i] > node.offset) break;else ++i;
        }
        node.origOffset = node.offset + i;
        offset = i;
      }
    });
    return offset;
  }
  toString() {
    const {
      context: {
        src
      },
      items,
      range,
      value
    } = this;
    if (value != null) return value;
    const nodes = items.filter(item => item instanceof Node);
    let str = '';
    let prevEnd = range.start;
    nodes.forEach(node => {
      const prefix = src.slice(prevEnd, node.range.start);
      prevEnd = node.range.end;
      str += prefix + String(node);
      if (str[str.length - 1] === '\n' && src[prevEnd - 1] !== '\n' && src[prevEnd] === '\n') {
        // Comment range does not include the terminal newline, but its
        // stringified value does. Without this fix, newlines at comment ends
        // get duplicated.
        prevEnd += 1;
      }
    });
    str += src.slice(prevEnd, range.end);
    return Node.addStringTerminator(src, range.end, str);
  }
}

class QuoteDouble extends Node {
  static endOfQuote(src, offset) {
    let ch = src[offset];
    while (ch && ch !== '"') {
      offset += ch === '\\' ? 2 : 1;
      ch = src[offset];
    }
    return offset + 1;
  }

  /**
   * @returns {string | { str: string, errors: YAMLSyntaxError[] }}
   */
  get strValue() {
    if (!this.valueRange || !this.context) return null;
    const errors = [];
    const {
      start,
      end
    } = this.valueRange;
    const {
      indent,
      src
    } = this.context;
    if (src[end - 1] !== '"') errors.push(new YAMLSyntaxError(this, 'Missing closing "quote'));
    // Using String#replace is too painful with escaped newlines preceded by
    // escaped backslashes; also, this should be faster.
    let str = '';
    for (let i = start + 1; i < end - 1; ++i) {
      const ch = src[i];
      if (ch === '\n') {
        if (Node.atDocumentBoundary(src, i + 1)) errors.push(new YAMLSemanticError(this, 'Document boundary indicators are not allowed within string values'));
        const {
          fold,
          offset,
          error
        } = Node.foldNewline(src, i, indent);
        str += fold;
        i = offset;
        if (error) errors.push(new YAMLSemanticError(this, 'Multi-line double-quoted string needs to be sufficiently indented'));
      } else if (ch === '\\') {
        i += 1;
        switch (src[i]) {
          case '0':
            str += '\0';
            break;
          // null character
          case 'a':
            str += '\x07';
            break;
          // bell character
          case 'b':
            str += '\b';
            break;
          // backspace
          case 'e':
            str += '\x1b';
            break;
          // escape character
          case 'f':
            str += '\f';
            break;
          // form feed
          case 'n':
            str += '\n';
            break;
          // line feed
          case 'r':
            str += '\r';
            break;
          // carriage return
          case 't':
            str += '\t';
            break;
          // horizontal tab
          case 'v':
            str += '\v';
            break;
          // vertical tab
          case 'N':
            str += '\u0085';
            break;
          // Unicode next line
          case '_':
            str += '\u00a0';
            break;
          // Unicode non-breaking space
          case 'L':
            str += '\u2028';
            break;
          // Unicode line separator
          case 'P':
            str += '\u2029';
            break;
          // Unicode paragraph separator
          case ' ':
            str += ' ';
            break;
          case '"':
            str += '"';
            break;
          case '/':
            str += '/';
            break;
          case '\\':
            str += '\\';
            break;
          case '\t':
            str += '\t';
            break;
          case 'x':
            str += this.parseCharCode(i + 1, 2, errors);
            i += 2;
            break;
          case 'u':
            str += this.parseCharCode(i + 1, 4, errors);
            i += 4;
            break;
          case 'U':
            str += this.parseCharCode(i + 1, 8, errors);
            i += 8;
            break;
          case '\n':
            // skip escaped newlines, but still trim the following line
            while (src[i + 1] === ' ' || src[i + 1] === '\t') i += 1;
            break;
          default:
            errors.push(new YAMLSyntaxError(this, `Invalid escape sequence ${src.substr(i - 1, 2)}`));
            str += '\\' + src[i];
        }
      } else if (ch === ' ' || ch === '\t') {
        // trim trailing whitespace
        const wsStart = i;
        let next = src[i + 1];
        while (next === ' ' || next === '\t') {
          i += 1;
          next = src[i + 1];
        }
        if (next !== '\n') str += i > wsStart ? src.slice(wsStart, i + 1) : ch;
      } else {
        str += ch;
      }
    }
    return errors.length > 0 ? {
      errors,
      str
    } : str;
  }
  parseCharCode(offset, length, errors) {
    const {
      src
    } = this.context;
    const cc = src.substr(offset, length);
    const ok = cc.length === length && /^[0-9a-fA-F]+$/.test(cc);
    const code = ok ? parseInt(cc, 16) : NaN;
    if (isNaN(code)) {
      errors.push(new YAMLSyntaxError(this, `Invalid escape sequence ${src.substr(offset - 2, length + 2)}`));
      return src.substr(offset - 2, length + 2);
    }
    return String.fromCodePoint(code);
  }

  /**
   * Parses a "double quoted" value from the source
   *
   * @param {ParseContext} context
   * @param {number} start - Index of first character
   * @returns {number} - Index of the character after this scalar
   */
  parse(context, start) {
    this.context = context;
    const {
      src
    } = context;
    let offset = QuoteDouble.endOfQuote(src, start + 1);
    this.valueRange = new Range(start, offset);
    offset = Node.endOfWhiteSpace(src, offset);
    offset = this.parseComment(offset);
    return offset;
  }
}

class QuoteSingle extends Node {
  static endOfQuote(src, offset) {
    let ch = src[offset];
    while (ch) {
      if (ch === "'") {
        if (src[offset + 1] !== "'") break;
        ch = src[offset += 2];
      } else {
        ch = src[offset += 1];
      }
    }
    return offset + 1;
  }

  /**
   * @returns {string | { str: string, errors: YAMLSyntaxError[] }}
   */
  get strValue() {
    if (!this.valueRange || !this.context) return null;
    const errors = [];
    const {
      start,
      end
    } = this.valueRange;
    const {
      indent,
      src
    } = this.context;
    if (src[end - 1] !== "'") errors.push(new YAMLSyntaxError(this, "Missing closing 'quote"));
    let str = '';
    for (let i = start + 1; i < end - 1; ++i) {
      const ch = src[i];
      if (ch === '\n') {
        if (Node.atDocumentBoundary(src, i + 1)) errors.push(new YAMLSemanticError(this, 'Document boundary indicators are not allowed within string values'));
        const {
          fold,
          offset,
          error
        } = Node.foldNewline(src, i, indent);
        str += fold;
        i = offset;
        if (error) errors.push(new YAMLSemanticError(this, 'Multi-line single-quoted string needs to be sufficiently indented'));
      } else if (ch === "'") {
        str += ch;
        i += 1;
        if (src[i] !== "'") errors.push(new YAMLSyntaxError(this, 'Unescaped single quote? This should not happen.'));
      } else if (ch === ' ' || ch === '\t') {
        // trim trailing whitespace
        const wsStart = i;
        let next = src[i + 1];
        while (next === ' ' || next === '\t') {
          i += 1;
          next = src[i + 1];
        }
        if (next !== '\n') str += i > wsStart ? src.slice(wsStart, i + 1) : ch;
      } else {
        str += ch;
      }
    }
    return errors.length > 0 ? {
      errors,
      str
    } : str;
  }

  /**
   * Parses a 'single quoted' value from the source
   *
   * @param {ParseContext} context
   * @param {number} start - Index of first character
   * @returns {number} - Index of the character after this scalar
   */
  parse(context, start) {
    this.context = context;
    const {
      src
    } = context;
    let offset = QuoteSingle.endOfQuote(src, start + 1);
    this.valueRange = new Range(start, offset);
    offset = Node.endOfWhiteSpace(src, offset);
    offset = this.parseComment(offset);
    return offset;
  }
}

function createNewNode(type, props) {
  switch (type) {
    case Type.ALIAS:
      return new Alias(type, props);
    case Type.BLOCK_FOLDED:
    case Type.BLOCK_LITERAL:
      return new BlockValue(type, props);
    case Type.FLOW_MAP:
    case Type.FLOW_SEQ:
      return new FlowCollection(type, props);
    case Type.MAP_KEY:
    case Type.MAP_VALUE:
    case Type.SEQ_ITEM:
      return new CollectionItem(type, props);
    case Type.COMMENT:
    case Type.PLAIN:
      return new PlainValue(type, props);
    case Type.QUOTE_DOUBLE:
      return new QuoteDouble(type, props);
    case Type.QUOTE_SINGLE:
      return new QuoteSingle(type, props);
    /* istanbul ignore next */
    default:
      return null;
    // should never happen
  }
}

/**
 * @param {boolean} atLineStart - Node starts at beginning of line
 * @param {boolean} inFlow - true if currently in a flow context
 * @param {boolean} inCollection - true if currently in a collection context
 * @param {number} indent - Current level of indentation
 * @param {number} lineStart - Start of the current line
 * @param {Node} parent - The parent of the node
 * @param {string} src - Source of the YAML document
 */
class ParseContext {
  static parseType(src, offset, inFlow) {
    switch (src[offset]) {
      case '*':
        return Type.ALIAS;
      case '>':
        return Type.BLOCK_FOLDED;
      case '|':
        return Type.BLOCK_LITERAL;
      case '{':
        return Type.FLOW_MAP;
      case '[':
        return Type.FLOW_SEQ;
      case '?':
        return !inFlow && Node.atBlank(src, offset + 1, true) ? Type.MAP_KEY : Type.PLAIN;
      case ':':
        return !inFlow && Node.atBlank(src, offset + 1, true) ? Type.MAP_VALUE : Type.PLAIN;
      case '-':
        return !inFlow && Node.atBlank(src, offset + 1, true) ? Type.SEQ_ITEM : Type.PLAIN;
      case '"':
        return Type.QUOTE_DOUBLE;
      case "'":
        return Type.QUOTE_SINGLE;
      default:
        return Type.PLAIN;
    }
  }
  constructor(orig = {}, {
    atLineStart,
    inCollection,
    inFlow,
    indent,
    lineStart,
    parent
  } = {}) {
    /**
     * Parses a node from the source
     * @param {ParseContext} overlay
     * @param {number} start - Index of first non-whitespace character for the node
     * @returns {?Node} - null if at a document boundary
     */
    _defineProperty(this, "parseNode", (overlay, start) => {
      if (Node.atDocumentBoundary(this.src, start)) return null;
      const context = new ParseContext(this, overlay);
      const {
        props,
        type,
        valueStart
      } = context.parseProps(start);
      const node = createNewNode(type, props);
      let offset = start;
      try {
        offset = node.parse(context, valueStart);
      } catch (error) {
        const msg = error instanceof Error ? error.message : String(error);
        if (!node.error) node.error = new YAMLSyntaxError(node, msg);
      }
      node.range = new Range(start, offset);
      /* istanbul ignore if */
      if (offset <= start) {
        // This should never happen, but if it does, let's make sure to at least
        // step one character forward to avoid a busy loop.
        if (!node.error) node.error = new Error(`Node#parse consumed no characters`);
        node.error.parseEnd = offset;
        node.error.source = node;
        node.range.end = start + 1;
      }
      if (context.nodeStartsCollection(node)) {
        if (!node.error && !context.atLineStart && context.parent.type === Type.DOCUMENT) {
          node.error = new YAMLSyntaxError(node, 'Block collection must not have preceding content here (e.g. directives-end indicator)');
        }
        const collection = new Collection(node);
        offset = collection.parse(new ParseContext(context), offset);
        collection.range = new Range(start, offset);
        return collection;
      }
      return node;
    });
    this.atLineStart = atLineStart != null ? atLineStart : orig.atLineStart || false;
    this.inCollection = inCollection != null ? inCollection : orig.inCollection || false;
    this.inFlow = inFlow != null ? inFlow : orig.inFlow || false;
    this.indent = indent != null ? indent : orig.indent;
    this.lineStart = lineStart != null ? lineStart : orig.lineStart;
    this.parent = parent != null ? parent : orig.parent || {};
    this.root = orig.root;
    this.src = orig.src;
  }
  nodeStartsCollection(node) {
    const {
      inCollection,
      inFlow,
      src
    } = this;
    if (inCollection || inFlow) return false;
    if (node instanceof CollectionItem) return true;
    // check for implicit key
    let offset = node.range.end;
    if (src[offset] === '\n' || src[offset - 1] === '\n') return false;
    offset = Node.endOfWhiteSpace(src, offset);
    return src[offset] === ':';
  }

  // Anchor and tag are before type, which determines the node implementation
  // class; hence this intermediate step.
  parseProps(offset) {
    const {
      inFlow,
      parent,
      src
    } = this;
    const props = [];
    let lineHasProps = false;
    offset = this.atLineStart ? Node.endOfIndent(src, offset) : Node.endOfWhiteSpace(src, offset);
    let ch = src[offset];
    while (ch === Char.ANCHOR || ch === Char.COMMENT || ch === Char.TAG || ch === '\n') {
      if (ch === '\n') {
        let inEnd = offset;
        let lineStart;
        do {
          lineStart = inEnd + 1;
          inEnd = Node.endOfIndent(src, lineStart);
        } while (src[inEnd] === '\n');
        const indentDiff = inEnd - (lineStart + this.indent);
        const noIndicatorAsIndent = parent.type === Type.SEQ_ITEM && parent.context.atLineStart;
        if (src[inEnd] !== '#' && !Node.nextNodeIsIndented(src[inEnd], indentDiff, !noIndicatorAsIndent)) break;
        this.atLineStart = true;
        this.lineStart = lineStart;
        lineHasProps = false;
        offset = inEnd;
      } else if (ch === Char.COMMENT) {
        const end = Node.endOfLine(src, offset + 1);
        props.push(new Range(offset, end));
        offset = end;
      } else {
        let end = Node.endOfIdentifier(src, offset + 1);
        if (ch === Char.TAG && src[end] === ',' && /^[a-zA-Z0-9-]+\.[a-zA-Z0-9-]+,\d\d\d\d(-\d\d){0,2}\/\S/.test(src.slice(offset + 1, end + 13))) {
          // Let's presume we're dealing with a YAML 1.0 domain tag here, rather
          // than an empty but 'foo.bar' private-tagged node in a flow collection
          // followed without whitespace by a plain string starting with a year
          // or date divided by something.
          end = Node.endOfIdentifier(src, end + 5);
        }
        props.push(new Range(offset, end));
        lineHasProps = true;
        offset = Node.endOfWhiteSpace(src, end);
      }
      ch = src[offset];
    }
    // '- &a : b' has an anchor on an empty node
    if (lineHasProps && ch === ':' && Node.atBlank(src, offset + 1, true)) offset -= 1;
    const type = ParseContext.parseType(src, offset, inFlow);
    return {
      props,
      type,
      valueStart: offset
    };
  }
}

// Published as 'yaml/parse-cst'
function parse(src) {
  const cr = [];
  if (src.indexOf('\r') !== -1) {
    src = src.replace(/\r\n?/g, (match, offset) => {
      if (match.length > 1) cr.push(offset);
      return '\n';
    });
  }
  const documents = [];
  let offset = 0;
  do {
    const doc = new Document();
    const context = new ParseContext({
      src
    });
    offset = doc.parse(context, offset);
    documents.push(doc);
  } while (offset < src.length);
  documents.setOrigRanges = () => {
    if (cr.length === 0) return false;
    for (let i = 1; i < cr.length; ++i) cr[i] -= i;
    let crOffset = 0;
    for (let i = 0; i < documents.length; ++i) {
      crOffset = documents[i].setOrigRanges(cr, crOffset);
    }
    cr.splice(0, cr.length);
    return true;
  };
  documents.toString = () => documents.join('...\n');
  return documents;
}

export { parse };
