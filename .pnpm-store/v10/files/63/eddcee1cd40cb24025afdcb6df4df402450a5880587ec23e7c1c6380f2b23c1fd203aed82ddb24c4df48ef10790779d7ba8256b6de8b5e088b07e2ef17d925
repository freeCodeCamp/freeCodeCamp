import { GenMapping, setSourceContent, toEncodedMap, toDecodedMap, allMappings, maybeAddMapping } from '@jridgewell/gen-mapping';
import { TraceMap, originalPositionFor } from '@jridgewell/trace-mapping';
import * as _t from '@babel/types';
import jsesc from 'jsesc';
class SourceMap {
  _map;
  _rawMappings;
  _sourceFileName;
  _lastGenLine = 0;
  _lastSourceLine = 0;
  _lastSourceColumn = 0;
  _inputMap = null;
  constructor(opts, code) {
    const map = this._map = new GenMapping({
      sourceRoot: opts.sourceRoot
    });
    this._sourceFileName = opts.sourceFileName?.replace(/\\/g, "/");
    this._rawMappings = undefined;
    if (opts.inputSourceMap) {
      this._inputMap = new TraceMap(opts.inputSourceMap);
      const resolvedSources = this._inputMap.resolvedSources;
      if (resolvedSources.length) {
        for (let i = 0; i < resolvedSources.length; i++) {
          setSourceContent(map, resolvedSources[i], this._inputMap.sourcesContent?.[i]);
        }
      }
    }
    if (typeof code === "string" && !opts.inputSourceMap) {
      setSourceContent(map, this._sourceFileName, code);
    } else if (typeof code === "object") {
      for (const sourceFileName of Object.keys(code)) {
        setSourceContent(map, sourceFileName.replace(/\\/g, "/"), code[sourceFileName]);
      }
    }
  }
  get() {
    return toEncodedMap(this._map);
  }
  getDecoded() {
    return toDecodedMap(this._map);
  }
  getRawMappings() {
    return this._rawMappings ||= allMappings(this._map);
  }
  mark(generated, line, column, identifierName, identifierNamePos, filename) {
    this._rawMappings = undefined;
    let originalMapping;
    if (line != null) {
      if (this._inputMap) {
        originalMapping = originalPositionFor(this._inputMap, {
          line,
          column: column
        });
        if (!originalMapping.name && identifierNamePos) {
          const originalIdentifierMapping = originalPositionFor(this._inputMap, identifierNamePos);
          if (originalIdentifierMapping.name) {
            identifierName = originalIdentifierMapping.name;
          }
        }
      } else {
        originalMapping = {
          name: null,
          source: filename?.replace(/\\/g, "/") || this._sourceFileName,
          line: line,
          column: column
        };
      }
    }
    maybeAddMapping(this._map, {
      name: identifierName,
      generated,
      source: originalMapping?.source,
      original: originalMapping
    });
  }
}
const spaceIndents = [];
for (let i = 0; i < 32; i++) {
  spaceIndents.push(" ".repeat(i * 2));
}
class Buffer {
  constructor(map, indentChar) {
    this._map = map;
    this._indentChar = indentChar;
  }
  _map = null;
  _buf = "";
  _str = "";
  _appendCount = 0;
  _last = 0;
  _canMarkIdName = true;
  _indentChar = "";
  _queuedChar = 0;
  _position = {
    line: 1,
    column: 0
  };
  _sourcePosition = {
    identifierName: undefined,
    identifierNamePos: undefined,
    line: undefined,
    column: undefined,
    filename: undefined
  };
  get() {
    const {
      _map,
      _last
    } = this;
    if (this._queuedChar !== 32) {
      this._flush();
    }
    const code = _last === 10 ? (this._buf + this._str).trimRight() : this._buf + this._str;
    if (_map === null) {
      return {
        code: code,
        decodedMap: undefined,
        map: null,
        rawMappings: undefined
      };
    }
    const result = {
      code: code,
      decodedMap: _map.getDecoded(),
      get __mergedMap() {
        return this.map;
      },
      get map() {
        const resultMap = _map.get();
        result.map = resultMap;
        return resultMap;
      },
      set map(value) {
        Object.defineProperty(result, "map", {
          value,
          writable: true
        });
      },
      get rawMappings() {
        const mappings = _map.getRawMappings();
        result.rawMappings = mappings;
        return mappings;
      },
      set rawMappings(value) {
        Object.defineProperty(result, "rawMappings", {
          value,
          writable: true
        });
      }
    };
    return result;
  }
  append(str, maybeNewline) {
    this._flush();
    this._append(str, maybeNewline);
  }
  appendChar(char) {
    this._flush();
    this._appendChar(char, 1, true);
  }
  queue(char) {
    this._flush();
    this._queuedChar = char;
  }
  _flush() {
    const queuedChar = this._queuedChar;
    if (queuedChar !== 0) {
      this._appendChar(queuedChar, 1, true);
      this._queuedChar = 0;
    }
  }
  _appendChar(char, repeat, useSourcePos) {
    this._last = char;
    if (char === -1) {
      const indent = repeat >= 64 ? this._indentChar.repeat(repeat) : spaceIndents[repeat / 2];
      this._str += indent;
    } else {
      this._str += repeat > 1 ? String.fromCharCode(char).repeat(repeat) : String.fromCharCode(char);
    }
    const isSpace = char === 32;
    const position = this._position;
    if (char !== 10) {
      if (this._map) {
        const sourcePos = this._sourcePosition;
        if (useSourcePos && sourcePos) {
          this._map.mark(position, sourcePos.line, sourcePos.column, isSpace ? undefined : sourcePos.identifierName, isSpace ? undefined : sourcePos.identifierNamePos, sourcePos.filename);
          if (!isSpace && this._canMarkIdName) {
            sourcePos.identifierName = undefined;
            sourcePos.identifierNamePos = undefined;
          }
        } else {
          this._map.mark(position);
        }
      }
      position.column += repeat;
    } else {
      position.line++;
      position.column = 0;
    }
  }
  _append(str, maybeNewline) {
    const len = str.length;
    const position = this._position;
    const sourcePos = this._sourcePosition;
    this._last = -1;
    if (++this._appendCount > 4096) {
      +this._str;
      this._buf += this._str;
      this._str = str;
      this._appendCount = 0;
    } else {
      this._str += str;
    }
    const hasMap = this._map !== null;
    if (!maybeNewline && !hasMap) {
      position.column += len;
      return;
    }
    const {
      column,
      identifierName,
      identifierNamePos,
      filename
    } = sourcePos;
    let line = sourcePos.line;
    if ((identifierName != null || identifierNamePos != null) && this._canMarkIdName) {
      sourcePos.identifierName = undefined;
      sourcePos.identifierNamePos = undefined;
    }
    let i = str.indexOf("\n");
    let last = 0;
    if (hasMap && i !== 0) {
      this._map.mark(position, line, column, identifierName, identifierNamePos, filename);
    }
    while (i !== -1) {
      position.line++;
      position.column = 0;
      last = i + 1;
      if (last < len && line !== undefined) {
        line++;
        if (hasMap) {
          this._map.mark(position, line, 0, undefined, undefined, filename);
        }
      }
      i = str.indexOf("\n", last);
    }
    position.column += len - last;
  }
  removeLastSemicolon() {
    if (this._queuedChar === 59) {
      this._queuedChar = 0;
    }
  }
  getLastChar(checkQueue) {
    if (!checkQueue) {
      return this._last;
    }
    const queuedChar = this._queuedChar;
    return queuedChar !== 0 ? queuedChar : this._last;
  }
  getNewlineCount() {
    return this._queuedChar === 0 && this._last === 10 ? 1 : 0;
  }
  hasContent() {
    return this._last !== 0;
  }
  exactSource(loc, cb) {
    if (!this._map) {
      cb();
      return;
    }
    this.source("start", loc);
    const identifierName = loc.identifierName;
    const sourcePos = this._sourcePosition;
    if (identifierName != null) {
      this._canMarkIdName = false;
      sourcePos.identifierName = identifierName;
    }
    cb();
    if (identifierName != null) {
      this._canMarkIdName = true;
      sourcePos.identifierName = undefined;
      sourcePos.identifierNamePos = undefined;
    }
    this.source("end", loc);
  }
  source(prop, loc) {
    if (!this._map) return;
    this._normalizePosition(prop, loc, 0);
  }
  sourceWithOffset(prop, loc, columnOffset) {
    if (!this._map) return;
    this._normalizePosition(prop, loc, columnOffset);
  }
  _normalizePosition(prop, loc, columnOffset) {
    this._flush();
    const pos = loc[prop];
    const target = this._sourcePosition;
    if (pos) {
      target.line = pos.line;
      target.column = Math.max(pos.column + columnOffset, 0);
      target.filename = loc.filename;
    }
  }
  getCurrentColumn() {
    return this._position.column + (this._queuedChar ? 1 : 0);
  }
  getCurrentLine() {
    return this._position.line;
  }
}
const {
  isMemberExpression: isMemberExpression$1,
  isOptionalMemberExpression,
  isYieldExpression,
  isStatement: isStatement$4
} = _t;
const PRECEDENCE = new Map([["||", 0], ["??", 1], ["&&", 2], ["|", 3], ["^", 4], ["&", 5], ["==", 6], ["===", 6], ["!=", 6], ["!==", 6], ["<", 7], [">", 7], ["<=", 7], [">=", 7], ["in", 7], ["instanceof", 7], [">>", 8], ["<<", 8], [">>>", 8], ["+", 9], ["-", 9], ["*", 10], ["/", 10], ["%", 10], ["**", 11]]);
function isTSTypeExpression(nodeId) {
  return nodeId === 154 || nodeId === 199 || nodeId === 207;
}
const isClassExtendsClause = (node, parent, parentId) => {
  return (parentId === 22 || parentId === 23) && parent.superClass === node;
};
const hasPostfixPart = (node, parent, parentId) => {
  switch (parentId) {
    case 109:
    case 133:
      return parent.object === node;
    case 18:
    case 131:
    case 113:
      return parent.callee === node;
    case 220:
      return parent.tag === node;
    case 189:
      return true;
  }
  return false;
};
function NullableTypeAnnotation$1(node, parent, parentId) {
  return parentId === 4;
}
function FunctionTypeAnnotation$1(node, parent, parentId, tokenContext) {
  return parentId === 237 || parentId === 91 || parentId === 4 || (tokenContext & 8) > 0;
}
function UpdateExpression$1(node, parent, parentId) {
  return hasPostfixPart(node, parent, parentId) || isClassExtendsClause(node, parent, parentId);
}
function needsParenBeforeExpressionBrace(tokenContext) {
  return (tokenContext & (1 | 2)) > 0;
}
function ObjectExpression$1(node, parent, parentId, tokenContext) {
  return needsParenBeforeExpressionBrace(tokenContext);
}
function DoExpression$1(node, parent, parentId, tokenContext) {
  return (tokenContext & 1) > 0 && !node.async;
}
function BinaryLike(node, parent, parentId, nodeType) {
  if (isClassExtendsClause(node, parent, parentId)) {
    return true;
  }
  if (hasPostfixPart(node, parent, parentId) || parentId === 236 || parentId === 143 || parentId === 8) {
    return true;
  }
  let parentPos;
  switch (parentId) {
    case 11:
    case 108:
      parentPos = PRECEDENCE.get(parent.operator);
      break;
    case 154:
    case 199:
      parentPos = 7;
  }
  if (parentPos !== undefined) {
    const nodePos = nodeType === 2 ? 7 : PRECEDENCE.get(node.operator);
    if (parentPos > nodePos) return true;
    if (parentPos === nodePos && parentId === 11 && (nodePos === 11 ? parent.left === node : parent.right === node)) {
      return true;
    }
    if (nodeType === 1 && parentId === 108 && (nodePos === 1 && parentPos !== 1 || parentPos === 1 && nodePos !== 1)) {
      return true;
    }
  }
  return false;
}
function UnionTypeAnnotation$1(node, parent, parentId) {
  switch (parentId) {
    case 4:
    case 116:
    case 91:
    case 237:
      return true;
  }
  return false;
}
function OptionalIndexedAccessType$1(node, parent, parentId) {
  return parentId === 85 && parent.objectType === node;
}
function TSAsExpression$1(node, parent, parentId) {
  if ((parentId === 6 || parentId === 7) && parent.left === node) {
    return true;
  }
  if (parentId === 11 && (parent.operator === "|" || parent.operator === "&") && node === parent.left) {
    return true;
  }
  return BinaryLike(node, parent, parentId, 2);
}
function TSConditionalType$1(node, parent, parentId) {
  switch (parentId) {
    case 153:
    case 193:
    case 209:
    case 210:
    case 179:
    case 217:
      return true;
    case 173:
      return parent.objectType === node;
    case 159:
      return parent.checkType === node || parent.extendsType === node;
  }
  return false;
}
function TSUnionType$1(node, parent, parentId) {
  switch (parentId) {
    case 179:
    case 209:
    case 153:
    case 193:
      return true;
    case 173:
      return parent.objectType === node;
  }
  return false;
}
function TSIntersectionType$1(node, parent, parentId) {
  return parentId === 209 || TSTypeOperator$1(node, parent, parentId);
}
function TSInferType$1(node, parent, parentId) {
  if (TSTypeOperator$1(node, parent, parentId)) {
    return true;
  }
  if ((parentId === 179 || parentId === 217) && node.typeParameter.constraint != null) {
    return true;
  }
  return false;
}
function TSTypeOperator$1(node, parent, parentId) {
  switch (parentId) {
    case 153:
    case 193:
      return true;
    case 173:
      if (parent.objectType === node) {
        return true;
      }
  }
  return false;
}
function TSInstantiationExpression$1(node, parent, parentId) {
  switch (parentId) {
    case 18:
    case 131:
    case 113:
    case 175:
      return parent.typeArguments != null;
  }
  return false;
}
function TSFunctionType$1(node, parent, parentId) {
  if (TSUnionType$1(node, parent, parentId)) return true;
  return parentId === 217 || parentId === 159 && (parent.checkType === node || parent.extendsType === node);
}
function BinaryExpression$1(node, parent, parentId, tokenContext) {
  if (BinaryLike(node, parent, parentId, 0)) return true;
  return (tokenContext & 128) > 0 && node.operator === "in";
}
function LogicalExpression(node, parent, parentId) {
  return BinaryLike(node, parent, parentId, 1);
}
function SequenceExpression$1(node, parent, parentId) {
  if (parentId === 142 || parentId === 134 || parentId === 109 && parent.property === node || parentId === 133 && parent.property === node || parentId === 222) {
    return false;
  }
  if (parentId === 22) {
    return true;
  }
  if (parentId === 69) {
    return parent.right === node;
  }
  if (parentId === 61) {
    return true;
  }
  return !isStatement$4(parent);
}
function YieldExpression$1(node, parent, parentId) {
  return parentId === 11 || parentId === 108 || parentId === 236 || parentId === 143 || hasPostfixPart(node, parent, parentId) || parentId === 8 && isYieldExpression(node) || parentId === 29 && node === parent.test || isClassExtendsClause(node, parent, parentId) || isTSTypeExpression(parentId);
}
function ClassExpression(node, parent, parentId, tokenContext) {
  return (tokenContext & (1 | 4)) > 0;
}
function UnaryLike(node, parent, parentId) {
  return hasPostfixPart(node, parent, parentId) || parentId === 11 && parent.operator === "**" && parent.left === node || isClassExtendsClause(node, parent, parentId);
}
function FunctionExpression$1(node, parent, parentId, tokenContext) {
  return (tokenContext & (1 | 4)) > 0;
}
function ConditionalExpression$1(node, parent, parentId) {
  switch (parentId) {
    case 236:
    case 143:
    case 11:
    case 108:
    case 8:
      return true;
    case 29:
      if (parent.test === node) {
        return true;
      }
  }
  if (isTSTypeExpression(parentId)) {
    return true;
  }
  return UnaryLike(node, parent, parentId);
}
function OptionalMemberExpression$1(node, parent, parentId) {
  switch (parentId) {
    case 18:
      return parent.callee === node;
    case 109:
      return parent.object === node;
  }
  return false;
}
function AssignmentExpression$1(node, parent, parentId, tokenContext) {
  if (needsParenBeforeExpressionBrace(tokenContext) && node.left.type === "ObjectPattern") {
    return true;
  }
  return ConditionalExpression$1(node, parent, parentId);
}
function Identifier$1(node, parent, parentId, tokenContext, getRawIdentifier) {
  if (getRawIdentifier && getRawIdentifier(node) !== node.name) {
    return false;
  }
  if (parentId === 6 && node.extra?.parenthesized && parent.left === node) {
    const rightType = parent.right.type;
    if ((rightType === "FunctionExpression" || rightType === "ClassExpression") && parent.right.id == null) {
      return true;
    }
  }
  if (tokenContext & 64 || (parentId === 109 || parentId === 133) && tokenContext & (1 | 16 | 32)) {
    if (node.name === "let") {
      const isFollowedByBracket = isMemberExpression$1(parent, {
        object: node,
        computed: true
      }) || isOptionalMemberExpression(parent, {
        object: node,
        computed: true,
        optional: false
      });
      if (isFollowedByBracket && tokenContext & (1 | 16 | 32)) {
        return true;
      }
      return (tokenContext & 64) > 0;
    }
  }
  return parentId === 69 && parent.left === node && node.name === "async" && !parent.await;
}
var parens = /*#__PURE__*/Object.freeze({
  __proto__: null,
  ArrowFunctionExpression: ConditionalExpression$1,
  AssignmentExpression: AssignmentExpression$1,
  AwaitExpression: YieldExpression$1,
  BinaryExpression: BinaryExpression$1,
  ClassExpression: ClassExpression,
  ConditionalExpression: ConditionalExpression$1,
  DoExpression: DoExpression$1,
  FunctionExpression: FunctionExpression$1,
  FunctionTypeAnnotation: FunctionTypeAnnotation$1,
  Identifier: Identifier$1,
  IntersectionTypeAnnotation: UnionTypeAnnotation$1,
  LogicalExpression: LogicalExpression,
  NullableTypeAnnotation: NullableTypeAnnotation$1,
  ObjectExpression: ObjectExpression$1,
  OptionalCallExpression: OptionalMemberExpression$1,
  OptionalIndexedAccessType: OptionalIndexedAccessType$1,
  OptionalMemberExpression: OptionalMemberExpression$1,
  SequenceExpression: SequenceExpression$1,
  SpreadElement: UnaryLike,
  TSAsExpression: TSAsExpression$1,
  TSConditionalType: TSConditionalType$1,
  TSConstructorType: TSFunctionType$1,
  TSFunctionType: TSFunctionType$1,
  TSInferType: TSInferType$1,
  TSInstantiationExpression: TSInstantiationExpression$1,
  TSIntersectionType: TSIntersectionType$1,
  TSSatisfiesExpression: TSAsExpression$1,
  TSTypeAssertion: UnaryLike,
  TSTypeOperator: TSTypeOperator$1,
  TSUnionType: TSUnionType$1,
  UnaryExpression: UnaryLike,
  UnionTypeAnnotation: UnionTypeAnnotation$1,
  UpdateExpression: UpdateExpression$1,
  YieldExpression: YieldExpression$1
});
function TaggedTemplateExpression(node) {
  this.print(node.tag);
  this.print(node.typeArguments);
  this.print(node.quasi);
}
function TemplateElement() {
  throw new Error("TemplateElement printing is handled in TemplateLiteral");
}
function _printTemplate(node, substitutions) {
  const quasis = node.quasis;
  let partRaw = "`";
  for (let i = 0; i < quasis.length - 1; i++) {
    partRaw += quasis[i].value.raw;
    this.token(partRaw + "${", true);
    this.print(substitutions[i]);
    partRaw = "}";
  }
  partRaw += quasis[quasis.length - 1].value.raw;
  this.token(partRaw + "`", true);
}
function TemplateLiteral(node) {
  _printTemplate.call(this, node, node.expressions);
}
const {
  isCallExpression,
  isLiteral,
  isMemberExpression,
  isNewExpression,
  isPattern
} = _t;
function UnaryExpression(node) {
  const {
    operator
  } = node;
  const firstChar = operator.charCodeAt(0);
  if (firstChar >= 97 && firstChar <= 122) {
    this.word(operator);
    this.space();
  } else {
    this.tokenChar(firstChar);
  }
  this.print(node.argument);
}
function DoExpression(node) {
  if (node.async) {
    this.word("async", true);
    this.space();
  }
  this.word("do");
  this.space();
  this.print(node.body);
}
function ParenthesizedExpression(node) {
  this.tokenChar(40);
  const oldNoLineTerminatorAfterNode = this.enterDelimited();
  this.print(node.expression, undefined, true);
  this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
  this.rightParens(node);
}
function UpdateExpression(node) {
  if (node.prefix) {
    this.token(node.operator, false, 0, true);
    this.print(node.argument);
  } else {
    this.print(node.argument, true);
    this.token(node.operator, false, 0, true);
  }
}
function ConditionalExpression(node) {
  this.print(node.test);
  this.space();
  this.tokenChar(63);
  this.space();
  this.print(node.consequent);
  this.space();
  this.tokenChar(58);
  this.space();
  this.print(node.alternate);
}
function _printExpressionArguments(node) {
  this.tokenChar(40);
  const oldNoLineTerminatorAfterNode = this.enterDelimited();
  this.printList(node.arguments, this.shouldPrintTrailingComma(")"), undefined, undefined, undefined, true);
  this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
  this.rightParens(node);
}
function NewExpression(node, parent) {
  this.word("new");
  this.space();
  this.print(node.callee);
  if (this.format.minified && node.arguments.length === 0 && !isCallExpression(parent, {
    callee: node
  }) && !isMemberExpression(parent) && !isNewExpression(parent)) {
    return;
  }
  this.print(node.typeArguments);
  if (node.arguments.length === 0 && this.tokenMap && !this.tokenMap.endMatches(node, ")")) {
    return;
  }
  _printExpressionArguments.call(this, node);
}
function SequenceExpression(node) {
  this.printList(node.expressions);
}
function ThisExpression() {
  this.word("this");
}
function Super() {
  this.word("super");
}
function _shouldPrintDecoratorsBeforeExport(node) {
  return typeof node.start === "number" && node.start === node.declaration.start;
}
function Decorator(node) {
  this.tokenChar(64);
  const {
    expression
  } = node;
  this.print(expression);
  this.newline();
}
function OptionalMemberExpression(node) {
  let {
    computed
  } = node;
  const {
    optional,
    property
  } = node;
  this.print(node.object);
  if (!computed && isMemberExpression(property)) {
    throw new TypeError("Got a MemberExpression for MemberExpression property");
  }
  if (isLiteral(property) && typeof property.value === "number") {
    computed = true;
  }
  if (optional) {
    this.token("?.");
  }
  if (computed) {
    this.tokenChar(91);
    this.print(property);
    this.tokenChar(93);
  } else {
    if (!optional) {
      this.tokenChar(46);
    }
    this.print(property);
  }
}
function OptionalCallExpression(node) {
  this.print(node.callee);
  if (node.optional) {
    this.token("?.");
  }
  this.print(node.typeArguments);
  _printExpressionArguments.call(this, node);
}
function CallExpression(node) {
  this.print(node.callee);
  this.print(node.typeArguments);
  _printExpressionArguments.call(this, node);
}
function Import() {
  this.word("import");
}
function AwaitExpression(node) {
  this.word("await");
  this.space();
  this.print(node.argument);
}
function YieldExpression(node) {
  if (node.delegate) {
    this.word("yield", true);
    this.tokenChar(42);
    if (node.argument) {
      this.space();
      this.print(node.argument);
    }
  } else if (node.argument) {
    this.word("yield", true);
    this.space();
    this.print(node.argument);
  } else {
    this.word("yield");
  }
}
function EmptyStatement() {
  this.semicolon(true);
}
function ExpressionStatement(node) {
  this.tokenContext |= 1;
  this.print(node.expression);
  this.semicolon();
}
function AssignmentPattern(node) {
  this.print(node.left);
  if (node.left.type === "Identifier" || isPattern(node.left)) {
    if (node.left.optional) this.tokenChar(63);
    this.print(node.left.typeAnnotation);
  }
  this.space();
  this.tokenChar(61);
  this.space();
  this.print(node.right);
}
function AssignmentExpression(node) {
  this.print(node.left);
  this.space();
  this.token(node.operator, false, 0, true);
  this.space();
  this.print(node.right);
}
function BinaryExpression(node) {
  this.print(node.left);
  this.space();
  const {
    operator
  } = node;
  if (operator.charCodeAt(0) === 105) {
    this.word(operator);
  } else {
    this.token(operator, false, 0, true);
    this.setLastChar(operator.charCodeAt(operator.length - 1));
  }
  this.space();
  this.print(node.right);
}
function BindExpression(node) {
  this.print(node.object);
  this.token("::");
  this.print(node.callee);
}
function MemberExpression(node) {
  this.print(node.object);
  if (!node.computed && isMemberExpression(node.property)) {
    throw new TypeError("Got a MemberExpression for MemberExpression property");
  }
  let computed = node.computed;
  if (isLiteral(node.property) && typeof node.property.value === "number") {
    computed = true;
  }
  if (computed) {
    const oldNoLineTerminatorAfterNode = this.enterDelimited();
    this.tokenChar(91);
    this.print(node.property, undefined, true);
    this.tokenChar(93);
    this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
  } else {
    this.tokenChar(46);
    this.print(node.property);
  }
}
function MetaProperty(node) {
  this.print(node.meta);
  this.tokenChar(46);
  this.print(node.property);
}
function PrivateName(node) {
  this.tokenChar(35);
  this.print(node.id);
}
function V8IntrinsicIdentifier(node) {
  this.tokenChar(37);
  this.word(node.name);
}
function ModuleExpression(node) {
  this.word("module", true);
  this.space();
  this.tokenChar(123);
  this.indent();
  const {
    body
  } = node;
  if (body.body.length || body.directives.length) {
    this.newline();
  }
  this.print(body);
  this.dedent();
  this.rightBrace(node);
}
const {
  isFor,
  isIfStatement,
  isStatement: isStatement$3,
  isVoidPattern
} = _t;
function WithStatement(node) {
  this.word("with");
  this.space();
  this.tokenChar(40);
  this.print(node.object);
  this.tokenChar(41);
  this.printBlock(node.body);
}
function IfStatement(node) {
  this.word("if");
  this.space();
  this.tokenChar(40);
  this.print(node.test);
  this.tokenChar(41);
  this.space();
  const needsBlock = node.alternate && isIfStatement(getLastStatement(node.consequent));
  if (needsBlock) {
    this.tokenChar(123);
    this.newline();
    this.indent();
  }
  this.printAndIndentOnComments(node.consequent);
  if (needsBlock) {
    this.dedent();
    this.newline();
    this.tokenChar(125);
  }
  if (node.alternate) {
    if (this.endsWith(125)) this.space();
    this.word("else");
    this.space();
    this.printAndIndentOnComments(node.alternate);
  }
}
function getLastStatement(statement) {
  const {
    body
  } = statement;
  if (isStatement$3(body) === false) {
    return statement;
  }
  return getLastStatement(body);
}
function ForStatement(node) {
  this.word("for");
  this.space();
  this.tokenChar(40);
  this.tokenContext |= 16 | 128;
  this.print(node.init);
  this.tokenContext = 0;
  this.tokenChar(59);
  if (node.test) {
    this.space();
    this.print(node.test);
  }
  this.tokenChar(59, 1);
  if (node.update) {
    this.space();
    this.print(node.update);
  }
  this.tokenChar(41);
  this.printBlock(node.body);
}
function WhileStatement(node) {
  this.word("while");
  this.space();
  this.tokenChar(40);
  this.print(node.test);
  this.tokenChar(41);
  this.printBlock(node.body);
}
function ForInStatement(node) {
  this.word("for");
  this.space();
  this.noIndentInnerCommentsHere();
  this.tokenChar(40);
  this.tokenContext |= 32 | 128;
  this.print(node.left);
  this.tokenContext = 0;
  this.space();
  this.word("in");
  this.space();
  this.print(node.right);
  this.tokenChar(41);
  this.printBlock(node.body);
}
function ForOfStatement(node) {
  this.word("for");
  this.space();
  if (node.await) {
    this.word("await");
    this.space();
  }
  this.noIndentInnerCommentsHere();
  this.tokenChar(40);
  this.tokenContext |= 64;
  this.print(node.left);
  this.space();
  this.word("of");
  this.space();
  this.print(node.right);
  this.tokenChar(41);
  this.printBlock(node.body);
}
function DoWhileStatement(node) {
  this.word("do");
  this.space();
  this.print(node.body);
  this.space();
  this.word("while");
  this.space();
  this.tokenChar(40);
  this.print(node.test);
  this.tokenChar(41);
  this.semicolon();
}
function printStatementAfterKeyword(printer, node) {
  if (node) {
    printer.space();
    printer.printTerminatorless(node);
  }
  printer.semicolon();
}
function BreakStatement(node) {
  this.word("break");
  printStatementAfterKeyword(this, node.label);
}
function ContinueStatement(node) {
  this.word("continue");
  printStatementAfterKeyword(this, node.label);
}
function ReturnStatement(node) {
  this.word("return");
  printStatementAfterKeyword(this, node.argument);
}
function ThrowStatement(node) {
  this.word("throw");
  printStatementAfterKeyword(this, node.argument);
}
function LabeledStatement(node) {
  this.print(node.label);
  this.tokenChar(58);
  this.space();
  this.print(node.body);
}
function TryStatement(node) {
  this.word("try");
  this.space();
  this.print(node.block);
  this.space();
  if (node.handlers) {
    this.print(node.handlers[0]);
  } else {
    this.print(node.handler);
  }
  if (node.finalizer) {
    this.space();
    this.word("finally");
    this.space();
    this.print(node.finalizer);
  }
}
function CatchClause(node) {
  this.word("catch");
  this.space();
  if (node.param) {
    this.tokenChar(40);
    this.print(node.param);
    this.print(node.param.typeAnnotation);
    this.tokenChar(41);
    this.space();
  }
  this.print(node.body);
}
function SwitchStatement(node) {
  this.word("switch");
  this.space();
  this.tokenChar(40);
  this.print(node.discriminant);
  this.tokenChar(41);
  this.space();
  this.tokenChar(123);
  this.printSequence(node.cases, true);
  this.rightBrace(node);
}
function SwitchCase(node) {
  if (node.test) {
    this.word("case");
    this.space();
    this.print(node.test);
    this.tokenChar(58);
  } else {
    this.word("default");
    this.tokenChar(58);
  }
  if (node.consequent.length) {
    this.newline();
    this.printSequence(node.consequent, true);
  }
}
function DebuggerStatement() {
  this.word("debugger");
  this.semicolon();
}
function commaSeparatorWithNewline(occurrenceCount) {
  this.tokenChar(44, occurrenceCount);
  this.newline();
}
function VariableDeclaration(node, parent) {
  if (node.declare) {
    this.word("declare");
    this.space();
  }
  const {
    kind
  } = node;
  switch (kind) {
    case "await using":
      this.word("await");
      this.space();
    case "using":
      this.word("using", true);
      break;
    default:
      this.word(kind);
  }
  this.space();
  let hasInits = false;
  if (!isFor(parent)) {
    for (const declar of node.declarations) {
      if (declar.init) {
        hasInits = true;
        break;
      }
    }
  }
  this.printList(node.declarations, undefined, undefined, node.declarations.length > 1, hasInits ? commaSeparatorWithNewline : undefined);
  if (parent != null) {
    switch (parent.type) {
      case "ForStatement":
        if (parent.init === node) {
          return;
        }
        break;
      case "ForInStatement":
      case "ForOfStatement":
        if (parent.left === node) {
          return;
        }
    }
  }
  this.semicolon();
}
function VariableDeclarator(node) {
  this.print(node.id);
  if (node.definite) this.tokenChar(33);
  if (!isVoidPattern(node.id)) {
    this.print(node.id.typeAnnotation);
  }
  if (node.init) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(node.init);
  }
}
const {
  isIdentifier: isIdentifier$1
} = _t;
function _params(node, noLineTerminator, idNode, parentNode) {
  this.print(node.typeParameters);
  if (idNode !== undefined || parentNode !== undefined) {
    const nameInfo = _getFuncIdName.call(this, idNode, parentNode);
    if (nameInfo) {
      this.sourceIdentifierName(nameInfo.name, nameInfo.pos);
    }
  }
  this.tokenChar(40);
  _parameters.call(this, node.params, 41);
  this.print(node.returnType, noLineTerminator);
  this._noLineTerminator = noLineTerminator;
}
function _parameters(parameters, endToken) {
  const oldNoLineTerminatorAfterNode = this.enterDelimited();
  const trailingComma = this.shouldPrintTrailingComma(endToken);
  const paramLength = parameters.length;
  for (let i = 0; i < paramLength; i++) {
    _param.call(this, parameters[i]);
    if (trailingComma || i < paramLength - 1) {
      this.tokenChar(44, i);
      this.space();
    }
  }
  this.tokenChar(endToken);
  this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
}
function _param(parameter) {
  this.printJoin(parameter.decorators, undefined, undefined, undefined, undefined, true);
  this.print(parameter, undefined, true);
  if (parameter.optional) {
    this.tokenChar(63);
  }
  this.print(parameter.typeAnnotation, undefined, true);
}
function _methodHead(node) {
  const kind = node.kind;
  const key = node.key;
  if (kind === "get" || kind === "set") {
    this.word(kind);
    this.space();
  }
  if (node.async) {
    this.word("async", true);
    this.space();
  }
  if (kind === "method" || kind === "init") {
    if (node.generator) {
      this.tokenChar(42);
    }
  }
  if (node.computed) {
    this.tokenChar(91);
    this.print(key);
    this.tokenChar(93);
  } else {
    this.print(key);
  }
  if (node.optional) {
    this.tokenChar(63);
  }
  if (this._buf._map) {
    _params.call(this, node, false, node.computed && node.key.type !== "StringLiteral" ? undefined : node.key);
  } else {
    _params.call(this, node, false);
  }
}
function _predicate(node, noLineTerminatorAfter) {
  if (node.predicate) {
    if (!node.returnType) {
      this.tokenChar(58);
    }
    this.space();
    this.print(node.predicate, noLineTerminatorAfter);
  }
}
function _functionHead(node, parent, hasPredicate) {
  if (node.async) {
    this.word("async");
    if (!this.format.preserveFormat) {
      this._innerCommentsState = 0;
    }
    this.space();
  }
  this.word("function");
  if (node.generator) {
    if (!this.format.preserveFormat) {
      this._innerCommentsState = 0;
    }
    this.tokenChar(42);
  }
  this.space();
  if (node.id) {
    this.print(node.id);
  }
  if (this._buf._map) {
    _params.call(this, node, false, node.id, parent);
  } else {
    _params.call(this, node, false);
  }
  if (hasPredicate) {
    _predicate.call(this, node);
  }
}
function FunctionExpression(node, parent) {
  _functionHead.call(this, node, parent, true);
  this.space();
  this.print(node.body);
}
function ArrowFunctionExpression(node, parent) {
  if (node.async) {
    this.word("async", true);
    this.space();
  }
  if (_shouldPrintArrowParamsParens.call(this, node)) {
    _params.call(this, node, true, undefined, this._buf._map ? parent : undefined);
  } else {
    this.print(node.params[0], true);
  }
  _predicate.call(this, node, true);
  this.space();
  this.printInnerComments();
  this.token("=>");
  this.space();
  this.tokenContext |= 2;
  this.print(node.body);
}
function _shouldPrintArrowParamsParens(node) {
  if (node.params.length !== 1) return true;
  if (node.typeParameters || node.returnType || node.predicate) {
    return true;
  }
  const firstParam = node.params[0];
  if (!isIdentifier$1(firstParam) || firstParam.typeAnnotation || firstParam.optional || firstParam.leadingComments?.length || firstParam.trailingComments?.length) {
    return true;
  }
  if (this.tokenMap) {
    if (node.loc == null) return true;
    if (this.tokenMap.findMatching(node, "(") !== null) return true;
    const arrowToken = this.tokenMap.findMatching(node, "=>");
    if (arrowToken?.loc == null) return true;
    return arrowToken.loc.start.line !== node.loc.start.line;
  }
  if (this.format.retainLines) return true;
  return false;
}
function _getFuncIdName(idNode, parent) {
  let id = idNode;
  if (!id && parent) {
    const parentType = parent.type;
    if (parentType === "VariableDeclarator") {
      id = parent.id;
    } else if (parentType === "AssignmentExpression" || parentType === "AssignmentPattern") {
      id = parent.left;
    } else if (parentType === "ObjectProperty" || parentType === "ClassProperty") {
      if (!parent.computed || parent.key.type === "StringLiteral") {
        id = parent.key;
      }
    } else if (parentType === "ClassPrivateProperty" || parentType === "ClassAccessorProperty") {
      id = parent.key;
    }
  }
  if (!id) return;
  let nameInfo;
  if (id.type === "Identifier") {
    nameInfo = {
      pos: id.loc?.start,
      name: id.loc?.identifierName || id.name
    };
  } else if (id.type === "PrivateName") {
    nameInfo = {
      pos: id.loc?.start,
      name: "#" + id.id.name
    };
  } else if (id.type === "StringLiteral") {
    nameInfo = {
      pos: id.loc?.start,
      name: id.value
    };
  }
  return nameInfo;
}
function TSTypeAnnotation(node, parent) {
  this.token((parent.type === "TSFunctionType" || parent.type === "TSConstructorType") && parent.returnType === node ? "=>" : ":");
  this.space();
  if (node.optional) this.tokenChar(63);
  this.print(node.typeAnnotation);
}
function TSTypeParameterInstantiation(node, parent) {
  this.tokenChar(60);
  let printTrailingSeparator = parent.type === "ArrowFunctionExpression" && node.params.length === 1;
  if (this.tokenMap && node.start != null && node.end != null) {
    printTrailingSeparator &&= !!this.tokenMap.find(node, t => this.tokenMap.matchesOriginal(t, ","));
    printTrailingSeparator ||= this.shouldPrintTrailingComma(">");
  }
  this.printList(node.params, printTrailingSeparator);
  this.tokenChar(62);
}
function TSTypeParameter(node) {
  if (node.const) {
    this.word("const");
    this.space();
  }
  if (node.in) {
    this.word("in");
    this.space();
  }
  if (node.out) {
    this.word("out");
    this.space();
  }
  this.word(node.name.name);
  if (node.constraint) {
    this.space();
    this.word("extends");
    this.space();
    this.print(node.constraint);
  }
  if (node.default) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(node.default);
  }
}
function TSParameterProperty(node) {
  if (node.accessibility) {
    this.word(node.accessibility);
    this.space();
  }
  if (node.readonly) {
    this.word("readonly");
    this.space();
  }
  _param.call(this, node.parameter);
}
function TSDeclareFunction(node, parent) {
  if (node.declare) {
    this.word("declare");
    this.space();
  }
  _functionHead.call(this, node, parent, false);
  this.semicolon();
}
function TSDeclareMethod(node) {
  _classMethodHead.call(this, node, false);
  this.semicolon();
}
function TSQualifiedName(node) {
  this.print(node.left);
  this.tokenChar(46);
  this.print(node.right);
}
function TSCallSignatureDeclaration(node) {
  tsPrintSignatureDeclarationBase.call(this, node);
  maybePrintTrailingCommaOrSemicolon(this, node);
}
function maybePrintTrailingCommaOrSemicolon(printer, node) {
  if (!printer.tokenMap || !node.start || !node.end) {
    printer.semicolon();
    return;
  }
  if (printer.tokenMap.endMatches(node, ",")) {
    printer.token(",");
  } else if (printer.tokenMap.endMatches(node, ";")) {
    printer.semicolon();
  }
}
function TSConstructSignatureDeclaration(node) {
  this.word("new");
  this.space();
  tsPrintSignatureDeclarationBase.call(this, node);
  maybePrintTrailingCommaOrSemicolon(this, node);
}
function TSPropertySignature(node) {
  const {
    readonly
  } = node;
  if (readonly) {
    this.word("readonly");
    this.space();
  }
  tsPrintPropertyOrMethodName.call(this, node);
  this.print(node.typeAnnotation);
  maybePrintTrailingCommaOrSemicolon(this, node);
}
function tsPrintPropertyOrMethodName(node) {
  if (node.computed) {
    this.tokenChar(91);
  }
  this.print(node.key);
  if (node.computed) {
    this.tokenChar(93);
  }
  if (node.optional) {
    this.tokenChar(63);
  }
}
function TSMethodSignature(node) {
  const {
    kind
  } = node;
  if (kind === "set" || kind === "get") {
    this.word(kind);
    this.space();
  }
  tsPrintPropertyOrMethodName.call(this, node);
  tsPrintSignatureDeclarationBase.call(this, node);
  maybePrintTrailingCommaOrSemicolon(this, node);
}
function TSIndexSignature(node) {
  const {
    readonly,
    static: isStatic
  } = node;
  if (isStatic) {
    this.word("static");
    this.space();
  }
  if (readonly) {
    this.word("readonly");
    this.space();
  }
  this.tokenChar(91);
  _parameters.call(this, node.parameters, 93);
  this.print(node.typeAnnotation);
  maybePrintTrailingCommaOrSemicolon(this, node);
}
function TSAnyKeyword() {
  this.word("any");
}
function TSBigIntKeyword() {
  this.word("bigint");
}
function TSUnknownKeyword() {
  this.word("unknown");
}
function TSNumberKeyword() {
  this.word("number");
}
function TSObjectKeyword() {
  this.word("object");
}
function TSBooleanKeyword() {
  this.word("boolean");
}
function TSStringKeyword() {
  this.word("string");
}
function TSSymbolKeyword() {
  this.word("symbol");
}
function TSVoidKeyword() {
  this.word("void");
}
function TSUndefinedKeyword() {
  this.word("undefined");
}
function TSNullKeyword() {
  this.word("null");
}
function TSNeverKeyword() {
  this.word("never");
}
function TSIntrinsicKeyword() {
  this.word("intrinsic");
}
function TSThisType() {
  this.word("this");
}
function TSFunctionType(node) {
  tsPrintFunctionOrConstructorType.call(this, node);
}
function TSConstructorType(node) {
  if (node.abstract) {
    this.word("abstract");
    this.space();
  }
  this.word("new");
  this.space();
  tsPrintFunctionOrConstructorType.call(this, node);
}
function tsPrintFunctionOrConstructorType(node) {
  const {
    typeParameters
  } = node;
  const parameters = node.params;
  this.print(typeParameters);
  this.tokenChar(40);
  _parameters.call(this, parameters, 41);
  this.space();
  const returnType = node.returnType;
  this.print(returnType);
}
function TSTypeReference(node) {
  const typeArguments = node.typeArguments;
  this.print(node.typeName, !!typeArguments);
  this.print(typeArguments);
}
function TSTypePredicate(node) {
  if (node.asserts) {
    this.word("asserts");
    this.space();
  }
  this.print(node.parameterName);
  if (node.typeAnnotation) {
    this.space();
    this.word("is");
    this.space();
    this.print(node.typeAnnotation.typeAnnotation);
  }
}
function TSTypeQuery(node) {
  this.word("typeof");
  this.space();
  this.print(node.exprName);
  const typeArguments = node.typeArguments;
  if (typeArguments) {
    this.print(typeArguments);
  }
}
function TSTypeLiteral(node) {
  printBraced(this, node, () => this.printJoin(node.members, true, true, undefined, undefined, true));
}
function TSArrayType(node) {
  this.print(node.elementType, true);
  this.tokenChar(91);
  this.tokenChar(93);
}
function TSTupleType(node) {
  this.tokenChar(91);
  this.printList(node.elementTypes, this.shouldPrintTrailingComma("]"));
  this.tokenChar(93);
}
function TSOptionalType(node) {
  this.print(node.typeAnnotation);
  this.tokenChar(63);
}
function TSRestType(node) {
  this.token("...");
  this.print(node.typeAnnotation);
}
function TSNamedTupleMember(node) {
  this.print(node.label);
  if (node.optional) this.tokenChar(63);
  this.tokenChar(58);
  this.space();
  this.print(node.elementType);
}
function TSUnionType(node) {
  tsPrintUnionOrIntersectionType(this, node, "|");
}
function TSIntersectionType(node) {
  tsPrintUnionOrIntersectionType(this, node, "&");
}
function tsPrintUnionOrIntersectionType(printer, node, sep) {
  let hasLeadingToken = 0;
  if (printer.tokenMap?.startMatches(node, sep)) {
    hasLeadingToken = 1;
    printer.token(sep);
  }
  printer.printJoin(node.types, undefined, undefined, function (i) {
    this.space();
    this.token(sep, undefined, i + hasLeadingToken);
    this.space();
  });
}
function TSConditionalType(node) {
  this.print(node.checkType);
  this.space();
  this.word("extends");
  this.space();
  this.print(node.extendsType);
  this.space();
  this.tokenChar(63);
  this.space();
  this.print(node.trueType);
  this.space();
  this.tokenChar(58);
  this.space();
  this.print(node.falseType);
}
function TSInferType(node) {
  this.word("infer");
  this.print(node.typeParameter);
}
function TSParenthesizedType(node) {
  this.tokenChar(40);
  this.print(node.typeAnnotation);
  this.tokenChar(41);
}
function TSTypeOperator(node) {
  this.word(node.operator);
  this.space();
  this.print(node.typeAnnotation);
}
function TSIndexedAccessType(node) {
  this.print(node.objectType, true);
  this.tokenChar(91);
  this.print(node.indexType);
  this.tokenChar(93);
}
function TSMappedType(node) {
  const {
    nameType,
    optional,
    readonly,
    typeAnnotation
  } = node;
  this.tokenChar(123);
  const oldNoLineTerminatorAfterNode = this.enterDelimited();
  this.space();
  if (readonly) {
    tokenIfPlusMinus(this, readonly);
    this.word("readonly");
    this.space();
  }
  this.tokenChar(91);
  this.word(node.key.name);
  this.space();
  this.word("in");
  this.space();
  this.print(node.constraint);
  if (nameType) {
    this.space();
    this.word("as");
    this.space();
    this.print(nameType, undefined, true);
  }
  this.tokenChar(93);
  if (optional) {
    tokenIfPlusMinus(this, optional);
    this.tokenChar(63);
  }
  if (typeAnnotation) {
    this.tokenChar(58);
    this.space();
    this.print(typeAnnotation, undefined, true);
  }
  this.space();
  this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
  this.tokenChar(125);
}
function tokenIfPlusMinus(self, tok) {
  if (tok !== true) {
    self.token(tok);
  }
}
function TSTemplateLiteralType(node) {
  _printTemplate.call(this, node, node.types);
}
function TSLiteralType(node) {
  this.print(node.literal);
}
function TSClassImplements(node) {
  this.print(node.expression);
  this.print(node.typeArguments);
}
function TSInterfaceDeclaration(node) {
  const {
    declare,
    id,
    typeParameters,
    extends: extendz,
    body
  } = node;
  if (declare) {
    this.word("declare");
    this.space();
  }
  this.word("interface");
  this.space();
  this.print(id);
  this.print(typeParameters);
  if (extendz?.length) {
    this.space();
    this.word("extends");
    this.space();
    this.printList(extendz);
  }
  this.space();
  this.print(body);
}
function TSInterfaceBody(node) {
  printBraced(this, node, () => this.printJoin(node.body, true, true, undefined, undefined, true));
}
function TSTypeAliasDeclaration(node) {
  const {
    declare,
    id,
    typeParameters,
    typeAnnotation
  } = node;
  if (declare) {
    this.word("declare");
    this.space();
  }
  this.word("type");
  this.space();
  this.print(id);
  this.print(typeParameters);
  this.space();
  this.tokenChar(61);
  this.space();
  this.print(typeAnnotation);
  this.semicolon();
}
function TSAsExpression(node) {
  const {
    expression,
    typeAnnotation
  } = node;
  this.print(expression, true);
  this.space();
  this.word("as");
  this.space();
  this.print(typeAnnotation);
}
function TSSatisfiesExpression(node) {
  const {
    expression,
    typeAnnotation
  } = node;
  this.print(expression, true);
  this.space();
  this.word("satisfies");
  this.space();
  this.print(typeAnnotation);
}
function TSTypeAssertion(node) {
  const {
    typeAnnotation,
    expression
  } = node;
  this.tokenChar(60);
  this.print(typeAnnotation);
  this.tokenChar(62);
  this.space();
  this.print(expression);
}
function TSInstantiationExpression(node) {
  this.print(node.expression);
  this.print(node.typeArguments);
}
function TSEnumDeclaration(node) {
  const {
    declare,
    const: isConst,
    id
  } = node;
  if (declare) {
    this.word("declare");
    this.space();
  }
  if (isConst) {
    this.word("const");
    this.space();
  }
  this.word("enum");
  this.space();
  this.print(id);
  this.space();
  this.print(node.body);
}
function TSEnumBody(node) {
  printBraced(this, node, () => this.printList(node.members, this.shouldPrintTrailingComma("}") ?? false, true, true, undefined, true));
}
function TSEnumMember(node) {
  const {
    id,
    initializer
  } = node;
  this.print(id);
  if (initializer) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(initializer);
  }
}
function TSModuleDeclaration(node) {
  const {
    declare,
    kind
  } = node;
  if (declare) {
    this.word("declare");
    this.space();
  }
  if (kind !== "global") {
    this.word(kind);
    this.space();
  }
  this.print(node.id);
  if (!node.body) {
    this.semicolon();
    return;
  }
  this.space();
  this.print(node.body);
}
function TSModuleBlock(node) {
  printBraced(this, node, () => this.printSequence(node.body, true, true));
}
function TSImportType(node) {
  const {
    qualifier,
    options
  } = node;
  this.word("import");
  this.tokenChar(40);
  this.print(node.source);
  if (options) {
    this.tokenChar(44);
    this.print(options);
  }
  this.tokenChar(41);
  if (qualifier) {
    this.tokenChar(46);
    this.print(qualifier);
  }
  const typeArguments = node.typeArguments;
  if (typeArguments) {
    this.print(typeArguments);
  }
}
function TSImportEqualsDeclaration(node) {
  const {
    id,
    moduleReference
  } = node;
  this.word("import");
  this.space();
  this.print(id);
  this.space();
  this.tokenChar(61);
  this.space();
  this.print(moduleReference);
  this.semicolon();
}
function TSExternalModuleReference(node) {
  this.token("require(");
  this.print(node.expression);
  this.tokenChar(41);
}
function TSNonNullExpression(node) {
  this.print(node.expression);
  this.tokenChar(33);
  this.setLastChar(33);
}
function TSExportAssignment(node) {
  this.word("export");
  this.space();
  this.tokenChar(61);
  this.space();
  this.print(node.expression);
  this.semicolon();
}
function TSNamespaceExportDeclaration(node) {
  this.word("export");
  this.space();
  this.word("as");
  this.space();
  this.word("namespace");
  this.space();
  this.print(node.id);
  this.semicolon();
}
function tsPrintSignatureDeclarationBase(node) {
  const {
    typeParameters
  } = node;
  const parameters = node.params;
  this.print(typeParameters);
  this.tokenChar(40);
  _parameters.call(this, parameters, 41);
  this.print(node.returnType);
}
function _tsPrintClassMemberModifiers(node) {
  const isPrivateField = node.type === "ClassPrivateProperty";
  const isPublicField = node.type === "ClassAccessorProperty" || node.type === "ClassProperty";
  printModifiersList(this, node, [isPublicField && node.declare && "declare", !isPrivateField && node.accessibility]);
  if (node.static) {
    this.word("static");
    this.space();
  }
  printModifiersList(this, node, [!isPrivateField && node.abstract && "abstract", !isPrivateField && node.override && "override", (isPublicField || isPrivateField) && node.readonly && "readonly"]);
}
function printBraced(printer, node, cb) {
  printer.token("{");
  const oldNoLineTerminatorAfterNode = printer.enterDelimited();
  cb();
  printer._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
  printer.rightBrace(node);
}
function printModifiersList(printer, node, modifiers) {
  const modifiersSet = new Set();
  for (const modifier of modifiers) {
    if (modifier) modifiersSet.add(modifier);
  }
  printer.tokenMap?.find(node, tok => {
    if (modifiersSet.has(tok.value)) {
      printer.token(tok.value);
      printer.space();
      modifiersSet.delete(tok.value);
      return modifiersSet.size === 0;
    }
    return false;
  });
  for (const modifier of modifiersSet) {
    printer.word(modifier);
    printer.space();
  }
}
const {
  isClassDeclaration,
  isExportDefaultSpecifier,
  isExportNamespaceSpecifier,
  isImportDefaultSpecifier,
  isImportNamespaceSpecifier,
  isStatement: isStatement$2
} = _t;
function ImportSpecifier(node) {
  if (node.importKind === "type" || node.importKind === "typeof") {
    this.word(node.importKind);
    this.space();
  }
  this.print(node.imported);
  if (node.local && node.local.name !== node.imported.name) {
    this.space();
    this.word("as");
    this.space();
    this.print(node.local);
  }
}
function ImportDefaultSpecifier(node) {
  this.print(node.local);
}
function ExportDefaultSpecifier(node) {
  this.print(node.exported);
}
function ExportSpecifier(node) {
  if (node.exportKind === "type") {
    this.word("type");
    this.space();
  }
  this.print(node.local);
  if (node.exported && node.local.name !== node.exported.name) {
    this.space();
    this.word("as");
    this.space();
    this.print(node.exported);
  }
}
function ExportNamespaceSpecifier(node) {
  this.tokenChar(42);
  this.space();
  this.word("as");
  this.space();
  this.print(node.exported);
}
function _printAttributes(node, hasPreviousBrace) {
  const {
    attributes
  } = node;
  this.word("with");
  this.space();
  const occurrenceCount = hasPreviousBrace ? 1 : 0;
  this.token("{", undefined, occurrenceCount);
  this.space();
  this.printList(attributes, this.shouldPrintTrailingComma("}"));
  this.space();
  this.token("}", undefined, occurrenceCount);
}
function ExportAllDeclaration(node) {
  this.word("export");
  this.space();
  if (node.exportKind === "type") {
    this.word("type");
    this.space();
  }
  this.tokenChar(42);
  this.space();
  this.word("from");
  this.space();
  if (node.attributes?.length) {
    this.print(node.source, true);
    this.space();
    _printAttributes.call(this, node, false);
  } else {
    this.print(node.source);
  }
  this.semicolon();
}
function maybePrintDecoratorsBeforeExport(printer, node) {
  if (isClassDeclaration(node.declaration) && _shouldPrintDecoratorsBeforeExport.call(printer, node)) {
    printer.printJoin(node.declaration.decorators);
  }
}
function ExportNamedDeclaration(node) {
  maybePrintDecoratorsBeforeExport(this, node);
  this.word("export");
  this.space();
  if (node.declaration) {
    const declar = node.declaration;
    this.print(declar);
    if (!isStatement$2(declar)) this.semicolon();
  } else {
    if (node.exportKind === "type") {
      this.word("type");
      this.space();
    }
    const specifiers = node.specifiers.slice(0);
    let hasSpecial = false;
    for (;;) {
      const first = specifiers[0];
      if (isExportDefaultSpecifier(first) || isExportNamespaceSpecifier(first)) {
        hasSpecial = true;
        this.print(specifiers.shift());
        if (specifiers.length) {
          this.tokenChar(44);
          this.space();
        }
      } else {
        break;
      }
    }
    let hasBrace = false;
    if (specifiers.length || !specifiers.length && !hasSpecial) {
      hasBrace = true;
      this.tokenChar(123);
      if (specifiers.length) {
        this.space();
        this.printList(specifiers, this.shouldPrintTrailingComma("}"));
        this.space();
      }
      this.tokenChar(125);
    }
    if (node.source) {
      this.space();
      this.word("from");
      this.space();
      if (node.attributes?.length) {
        this.print(node.source, true);
        this.space();
        _printAttributes.call(this, node, hasBrace);
      } else {
        this.print(node.source);
      }
    }
    this.semicolon();
  }
}
function ExportDefaultDeclaration(node) {
  maybePrintDecoratorsBeforeExport(this, node);
  this.word("export");
  this.noIndentInnerCommentsHere();
  this.space();
  this.word("default");
  this.space();
  this.tokenContext |= 4;
  const declar = node.declaration;
  this.print(declar);
  if (!isStatement$2(declar)) this.semicolon();
}
function ImportDeclaration(node) {
  this.word("import");
  this.space();
  const isTypeKind = node.importKind === "type" || node.importKind === "typeof";
  if (isTypeKind) {
    this.noIndentInnerCommentsHere();
    this.word(node.importKind);
    this.space();
  } else if (node.module) {
    this.noIndentInnerCommentsHere();
    this.word("module");
    this.space();
  } else if (node.phase) {
    this.noIndentInnerCommentsHere();
    this.word(node.phase);
    this.space();
  }
  const specifiers = node.specifiers.slice(0);
  const hasSpecifiers = !!specifiers.length;
  while (hasSpecifiers) {
    const first = specifiers[0];
    if (isImportDefaultSpecifier(first) || isImportNamespaceSpecifier(first)) {
      this.print(specifiers.shift());
      if (specifiers.length) {
        this.tokenChar(44);
        this.space();
      }
    } else {
      break;
    }
  }
  let hasBrace = false;
  if (specifiers.length) {
    hasBrace = true;
    this.tokenChar(123);
    this.space();
    this.printList(specifiers, this.shouldPrintTrailingComma("}"));
    this.space();
    this.tokenChar(125);
  } else if (isTypeKind && !hasSpecifiers) {
    hasBrace = true;
    this.tokenChar(123);
    this.tokenChar(125);
  }
  if (hasSpecifiers || isTypeKind) {
    this.space();
    this.word("from");
    this.space();
  }
  if (node.attributes?.length) {
    this.print(node.source, true);
    this.space();
    _printAttributes.call(this, node, hasBrace);
  } else {
    this.print(node.source);
  }
  this.semicolon();
}
function ImportAttribute(node) {
  this.print(node.key);
  this.tokenChar(58);
  this.space();
  this.print(node.value);
}
function ImportNamespaceSpecifier(node) {
  this.tokenChar(42);
  this.space();
  this.word("as");
  this.space();
  this.print(node.local);
}
function ImportExpression(node) {
  this.word("import");
  if (node.phase) {
    this.tokenChar(46);
    this.word(node.phase);
  }
  this.tokenChar(40);
  const shouldPrintTrailingComma = this.shouldPrintTrailingComma(")");
  this.print(node.source);
  if (node.options != null) {
    this.tokenChar(44);
    this.space();
    this.print(node.options);
  }
  if (shouldPrintTrailingComma) {
    this.tokenChar(44);
  }
  this.rightParens(node);
}
const {
  isAssignmentPattern,
  isIdentifier
} = _t;
let lastRawIdentResult = "";
function _getRawIdentifier(node) {
  const {
    name
  } = node;
  const token = this.tokenMap.find(node, tok => tok.value === name);
  if (token) {
    lastRawIdentResult = this._originalCode.slice(token.start, token.end);
    return lastRawIdentResult;
  }
  return lastRawIdentResult = node.name;
}
function Identifier(node) {
  if (this._buf._map) {
    this.sourceIdentifierName(node.loc?.identifierName || node.name);
  }
  this.word(this.tokenMap ? lastRawIdentResult : node.name);
}
function ArgumentPlaceholder() {
  this.tokenChar(63);
}
function RestElement(node) {
  this.token("...");
  this.print(node.argument);
}
function ObjectExpression(node) {
  const props = node.properties;
  this.tokenChar(123);
  if (props.length) {
    const oldNoLineTerminatorAfterNode = this.enterDelimited();
    this.space();
    this.printList(props, this.shouldPrintTrailingComma("}"), true, true, undefined, true);
    this.space();
    this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
  }
  this.rightBrace(node);
}
function ObjectMethod(node) {
  this.printJoin(node.decorators);
  _methodHead.call(this, node);
  this.space();
  this.print(node.body);
}
function ObjectProperty(node) {
  this.printJoin(node.decorators);
  if (node.computed) {
    this.tokenChar(91);
    this.print(node.key);
    this.tokenChar(93);
  } else {
    if (isAssignmentPattern(node.value) && isIdentifier(node.key) && node.key.name === node.value.left.name) {
      this.print(node.value);
      return;
    }
    this.print(node.key);
    if (node.shorthand && isIdentifier(node.key) && isIdentifier(node.value) && node.key.name === node.value.name) {
      return;
    }
  }
  this.tokenChar(58);
  this.space();
  this.print(node.value);
}
function ArrayExpression(node) {
  const elems = node.elements;
  const len = elems.length;
  this.tokenChar(91);
  const oldNoLineTerminatorAfterNode = this.enterDelimited();
  for (let i = 0; i < elems.length; i++) {
    const elem = elems[i];
    if (elem) {
      if (i > 0) this.space();
      this.print(elem, undefined, true);
      if (i < len - 1 || this.shouldPrintTrailingComma("]")) {
        this.tokenChar(44, i);
      }
    } else {
      this.tokenChar(44, i);
    }
  }
  this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
  this.tokenChar(93);
}
function RegExpLiteral(node) {
  this.word(`/${node.pattern}/${node.flags}`, false);
}
function BooleanLiteral(node) {
  this.word(node.value ? "true" : "false");
}
function NullLiteral() {
  this.word("null");
}
function NumericLiteral(node) {
  const raw = this.getPossibleRaw(node);
  const opts = this.format.jsescOption;
  const value = node.value;
  const str = value + "";
  if (opts.numbers) {
    this.number(jsesc(value, opts), value);
  } else if (raw == null) {
    this.number(str, value);
  } else if (this.format.minified) {
    this.number(raw.length < str.length ? raw : str, value);
  } else {
    this.number(raw, value);
  }
}
function StringLiteral(node) {
  const raw = this.getPossibleRaw(node);
  if (!this.format.minified && raw !== undefined) {
    this.token(raw);
    return;
  }
  const val = jsesc(node.value, this.format.jsescOption);
  this.token(val);
}
function BigIntLiteral(node) {
  const raw = this.getPossibleRaw(node);
  if (!this.format.minified && raw !== undefined) {
    this.word(raw);
    return;
  }
  this.word(node.value + "n");
}
const validTopicTokenSet = new Set(["^^", "@@", "^", "%", "#"]);
function TopicReference() {
  const {
    topicToken
  } = this.format;
  if (validTopicTokenSet.has(topicToken)) {
    this.token(topicToken);
  } else {
    const givenTopicTokenJSON = JSON.stringify(topicToken);
    const validTopics = Array.from(validTopicTokenSet, v => JSON.stringify(v));
    throw new Error(`The "topicToken" generator option must be one of ` + `${validTopics.join(", ")} (${givenTopicTokenJSON} received instead).`);
  }
}
function VoidPattern() {
  this.word("void");
}
const {
  isDeclareExportDeclaration,
  isStatement: isStatement$1
} = _t;
function AnyTypeAnnotation() {
  this.word("any");
}
function ArrayTypeAnnotation(node) {
  this.print(node.elementType, true);
  this.tokenChar(91);
  this.tokenChar(93);
}
function BooleanTypeAnnotation() {
  this.word("boolean");
}
function BooleanLiteralTypeAnnotation(node) {
  this.word(node.value ? "true" : "false");
}
function NullLiteralTypeAnnotation() {
  this.word("null");
}
function DeclareClass(node, parent) {
  if (!isDeclareExportDeclaration(parent)) {
    this.word("declare");
    this.space();
  }
  this.word("class");
  this.space();
  _interfaceish.call(this, node);
}
function DeclareFunction(node, parent) {
  if (!isDeclareExportDeclaration(parent)) {
    this.word("declare");
    this.space();
  }
  this.word("function");
  this.space();
  this.print(node.id);
  this.print(node.id.typeAnnotation?.typeAnnotation);
  if (node.predicate) {
    this.space();
    this.print(node.predicate);
  }
  this.semicolon();
}
function InferredPredicate() {
  this.tokenChar(37);
  this.word("checks");
}
function DeclaredPredicate(node) {
  this.tokenChar(37);
  this.word("checks");
  this.tokenChar(40);
  this.print(node.value);
  this.tokenChar(41);
}
function DeclareInterface(node) {
  this.word("declare");
  this.space();
  InterfaceDeclaration.call(this, node);
}
function DeclareModule(node) {
  this.word("declare");
  this.space();
  this.word("module");
  this.space();
  this.print(node.id);
  this.space();
  this.print(node.body);
}
function DeclareModuleExports(node) {
  this.word("declare");
  this.space();
  this.word("module");
  this.tokenChar(46);
  this.word("exports");
  this.print(node.typeAnnotation);
}
function DeclareTypeAlias(node) {
  this.word("declare");
  this.space();
  TypeAlias.call(this, node);
}
function DeclareOpaqueType(node, parent) {
  if (!isDeclareExportDeclaration(parent)) {
    this.word("declare");
    this.space();
  }
  OpaqueType.call(this, node);
}
function DeclareVariable(node, parent) {
  if (!isDeclareExportDeclaration(parent)) {
    this.word("declare");
    this.space();
  }
  this.word("var");
  this.space();
  this.print(node.id);
  this.print(node.id.typeAnnotation);
  this.semicolon();
}
function DeclareExportDeclaration(node) {
  this.word("declare");
  this.space();
  this.word("export");
  this.space();
  if (node.default) {
    this.word("default");
    this.space();
  }
  FlowExportDeclaration.call(this, node);
}
function DeclareExportAllDeclaration(node) {
  this.word("declare");
  this.space();
  ExportAllDeclaration.call(this, node);
}
function EnumDeclaration(node) {
  const {
    id,
    body
  } = node;
  this.word("enum");
  this.space();
  this.print(id);
  this.print(body);
}
function enumExplicitType(context, name, hasExplicitType) {
  if (hasExplicitType) {
    context.space();
    context.word("of");
    context.space();
    context.word(name);
  }
  context.space();
}
function enumBody(context, node) {
  const {
    members
  } = node;
  context.token("{");
  context.indent();
  context.newline();
  for (const member of members) {
    context.print(member);
    context.newline();
  }
  if (node.hasUnknownMembers) {
    context.token("...");
    context.newline();
  }
  context.dedent();
  context.token("}");
}
function EnumBooleanBody(node) {
  const {
    explicitType
  } = node;
  enumExplicitType(this, "boolean", explicitType);
  enumBody(this, node);
}
function EnumNumberBody(node) {
  const {
    explicitType
  } = node;
  enumExplicitType(this, "number", explicitType);
  enumBody(this, node);
}
function EnumStringBody(node) {
  const {
    explicitType
  } = node;
  enumExplicitType(this, "string", explicitType);
  enumBody(this, node);
}
function EnumSymbolBody(node) {
  enumExplicitType(this, "symbol", true);
  enumBody(this, node);
}
function EnumDefaultedMember(node) {
  const {
    id
  } = node;
  this.print(id);
  this.tokenChar(44);
}
function enumInitializedMember(context, node) {
  context.print(node.id);
  context.space();
  context.token("=");
  context.space();
  context.print(node.init);
  context.token(",");
}
function EnumBooleanMember(node) {
  enumInitializedMember(this, node);
}
function EnumNumberMember(node) {
  enumInitializedMember(this, node);
}
function EnumStringMember(node) {
  enumInitializedMember(this, node);
}
function FlowExportDeclaration(node) {
  if (node.declaration) {
    const declar = node.declaration;
    this.print(declar);
    if (!isStatement$1(declar)) this.semicolon();
  } else {
    this.tokenChar(123);
    if (node.specifiers.length) {
      this.space();
      this.printList(node.specifiers);
      this.space();
    }
    this.tokenChar(125);
    if (node.source) {
      this.space();
      this.word("from");
      this.space();
      this.print(node.source);
    }
    this.semicolon();
  }
}
function ExistsTypeAnnotation() {
  this.tokenChar(42);
}
function FunctionTypeAnnotation(node, parent) {
  this.print(node.typeParameters);
  this.tokenChar(40);
  if (node.this) {
    this.word("this");
    this.tokenChar(58);
    this.space();
    this.print(node.this.typeAnnotation);
    if (node.params.length || node.rest) {
      this.tokenChar(44);
      this.space();
    }
  }
  this.printList(node.params);
  if (node.rest) {
    if (node.params.length) {
      this.tokenChar(44);
      this.space();
    }
    this.token("...");
    this.print(node.rest);
  }
  this.tokenChar(41);
  const type = parent?.type;
  if (type != null && (type === "ObjectTypeCallProperty" || type === "ObjectTypeInternalSlot" || type === "DeclareFunction" || type === "ObjectTypeProperty" && parent.method)) {
    this.tokenChar(58);
  } else {
    this.space();
    this.token("=>");
  }
  this.space();
  this.print(node.returnType);
}
function FunctionTypeParam(node) {
  this.print(node.name);
  if (node.optional) this.tokenChar(63);
  if (node.name) {
    this.tokenChar(58);
    this.space();
  }
  this.print(node.typeAnnotation);
}
function InterfaceExtends(node) {
  this.print(node.id);
  this.print(node.typeParameters, true);
}
function _interfaceish(node) {
  this.print(node.id);
  this.print(node.typeParameters);
  if (node.extends?.length) {
    this.space();
    this.word("extends");
    this.space();
    this.printList(node.extends);
  }
  if (node.type === "DeclareClass") {
    if (node.mixins?.length) {
      this.space();
      this.word("mixins");
      this.space();
      this.printList(node.mixins);
    }
    if (node.implements?.length) {
      this.space();
      this.word("implements");
      this.space();
      this.printList(node.implements);
    }
  }
  this.space();
  this.print(node.body);
}
function _variance(node) {
  const kind = node.variance?.kind;
  if (kind != null) {
    if (kind === "plus") {
      this.tokenChar(43);
    } else if (kind === "minus") {
      this.tokenChar(45);
    }
  }
}
function InterfaceDeclaration(node) {
  this.word("interface");
  this.space();
  _interfaceish.call(this, node);
}
function andSeparator(occurrenceCount) {
  this.space();
  this.token("&", false, occurrenceCount);
  this.space();
}
function InterfaceTypeAnnotation(node) {
  this.word("interface");
  if (node.extends?.length) {
    this.space();
    this.word("extends");
    this.space();
    this.printList(node.extends);
  }
  this.space();
  this.print(node.body);
}
function IntersectionTypeAnnotation(node) {
  this.printJoin(node.types, undefined, undefined, andSeparator);
}
function MixedTypeAnnotation() {
  this.word("mixed");
}
function EmptyTypeAnnotation() {
  this.word("empty");
}
function NullableTypeAnnotation(node) {
  this.tokenChar(63);
  this.print(node.typeAnnotation);
}
function NumberTypeAnnotation() {
  this.word("number");
}
function StringTypeAnnotation() {
  this.word("string");
}
function ThisTypeAnnotation() {
  this.word("this");
}
function TupleTypeAnnotation(node) {
  this.tokenChar(91);
  this.printList(node.types);
  this.tokenChar(93);
}
function TypeofTypeAnnotation(node) {
  this.word("typeof");
  this.space();
  this.print(node.argument);
}
function TypeAlias(node) {
  this.word("type");
  this.space();
  this.print(node.id);
  this.print(node.typeParameters);
  this.space();
  this.tokenChar(61);
  this.space();
  this.print(node.right);
  this.semicolon();
}
function TypeAnnotation(node, parent) {
  this.tokenChar(58);
  this.space();
  if (parent.type === "ArrowFunctionExpression") {
    this.tokenContext |= 8;
  } else if (node.optional) {
    this.tokenChar(63);
  }
  this.print(node.typeAnnotation);
}
function TypeParameterInstantiation(node) {
  this.tokenChar(60);
  this.printList(node.params);
  this.tokenChar(62);
}
function TypeParameter(node) {
  _variance.call(this, node);
  this.word(node.name);
  if (node.bound) {
    this.print(node.bound);
  }
  if (node.default) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(node.default);
  }
}
function OpaqueType(node) {
  this.word("opaque");
  this.space();
  this.word("type");
  this.space();
  this.print(node.id);
  this.print(node.typeParameters);
  if (node.supertype) {
    this.tokenChar(58);
    this.space();
    this.print(node.supertype);
  }
  if (node.impltype) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(node.impltype);
  }
  this.semicolon();
}
function ObjectTypeAnnotation(node) {
  if (node.exact) {
    this.token("{|");
  } else {
    this.tokenChar(123);
  }
  const props = [...node.properties, ...(node.callProperties || []), ...(node.indexers || []), ...(node.internalSlots || [])];
  if (props.length) {
    this.newline();
    this.space();
    this.printJoin(props, true, true, () => {
      if (props.length !== 1 || node.inexact) {
        this.tokenChar(44);
        this.space();
      }
    }, true);
    this.space();
  }
  if (node.inexact) {
    this.indent();
    this.token("...");
    if (props.length) {
      this.newline();
    }
    this.dedent();
  }
  if (node.exact) {
    this.token("|}");
  } else {
    this.tokenChar(125);
  }
}
function ObjectTypeInternalSlot(node) {
  if (node.static) {
    this.word("static");
    this.space();
  }
  this.tokenChar(91);
  this.tokenChar(91);
  this.print(node.id);
  this.tokenChar(93);
  this.tokenChar(93);
  if (node.optional) this.tokenChar(63);
  if (!node.method) {
    this.tokenChar(58);
    this.space();
  }
  this.print(node.value);
}
function ObjectTypeCallProperty(node) {
  if (node.static) {
    this.word("static");
    this.space();
  }
  this.print(node.value);
}
function ObjectTypeIndexer(node) {
  if (node.static) {
    this.word("static");
    this.space();
  }
  _variance.call(this, node);
  this.tokenChar(91);
  if (node.id) {
    this.print(node.id);
    this.tokenChar(58);
    this.space();
  }
  this.print(node.key);
  this.tokenChar(93);
  this.tokenChar(58);
  this.space();
  this.print(node.value);
}
function ObjectTypeProperty(node) {
  if (node.proto) {
    this.word("proto");
    this.space();
  }
  if (node.static) {
    this.word("static");
    this.space();
  }
  if (node.kind === "get" || node.kind === "set") {
    this.word(node.kind);
    this.space();
  }
  _variance.call(this, node);
  this.print(node.key);
  if (node.optional) this.tokenChar(63);
  if (!node.method) {
    this.tokenChar(58);
    this.space();
  }
  this.print(node.value);
}
function ObjectTypeSpreadProperty(node) {
  this.token("...");
  this.print(node.argument);
}
function QualifiedTypeIdentifier(node) {
  this.print(node.qualification);
  this.tokenChar(46);
  this.print(node.id);
}
function SymbolTypeAnnotation() {
  this.word("symbol");
}
function orSeparator(occurrenceCount) {
  this.space();
  this.token("|", false, occurrenceCount);
  this.space();
}
function UnionTypeAnnotation(node) {
  this.printJoin(node.types, undefined, undefined, orSeparator);
}
function TypeCastExpression(node) {
  this.tokenChar(40);
  this.print(node.expression);
  this.print(node.typeAnnotation);
  this.tokenChar(41);
}
function Variance(node) {
  if (node.kind === "plus") {
    this.tokenChar(43);
  } else {
    this.tokenChar(45);
  }
}
function VoidTypeAnnotation() {
  this.word("void");
}
function IndexedAccessType(node) {
  this.print(node.objectType, true);
  this.tokenChar(91);
  this.print(node.indexType);
  this.tokenChar(93);
}
function OptionalIndexedAccessType(node) {
  this.print(node.objectType);
  if (node.optional) {
    this.token("?.");
  }
  this.tokenChar(91);
  this.print(node.indexType);
  this.tokenChar(93);
}
const {
  isExportDefaultDeclaration,
  isExportNamedDeclaration
} = _t;
function ClassDeclaration(node, parent) {
  const inExport = isExportDefaultDeclaration(parent) || isExportNamedDeclaration(parent);
  if (!inExport || !_shouldPrintDecoratorsBeforeExport.call(this, parent)) {
    this.printJoin(node.decorators);
  }
  if (node.declare) {
    this.word("declare");
    this.space();
  }
  if (node.abstract) {
    this.word("abstract");
    this.space();
  }
  this.word("class");
  if (node.id) {
    this.space();
    this.print(node.id);
  }
  this.print(node.typeParameters);
  if (node.superClass) {
    this.space();
    this.word("extends");
    this.space();
    this.print(node.superClass);
    this.print(node.superTypeArguments);
  }
  if (node.implements) {
    this.space();
    this.word("implements");
    this.space();
    this.printList(node.implements);
  }
  this.space();
  this.print(node.body);
}
function ClassBody(node) {
  this.tokenChar(123);
  if (node.body.length === 0) {
    this.tokenChar(125);
  } else {
    const separator = classBodyEmptySemicolonsPrinter(this, node);
    separator?.(-1);
    const oldNoLineTerminatorAfterNode = this.enterDelimited();
    this.printJoin(node.body, true, true, separator, true, true);
    this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
    if (!this.endsWith(10)) this.newline();
    this.rightBrace(node);
  }
}
function classBodyEmptySemicolonsPrinter(printer, node) {
  if (!printer.tokenMap || node.start == null || node.end == null) {
    return null;
  }
  const indexes = printer.tokenMap.getIndexes(node);
  if (!indexes) return null;
  let k = 1;
  let occurrenceCount = 0;
  let nextLocIndex = 0;
  const advanceNextLocIndex = () => {
    while (nextLocIndex < node.body.length && node.body[nextLocIndex].start == null) {
      nextLocIndex++;
    }
  };
  advanceNextLocIndex();
  return i => {
    if (nextLocIndex <= i) {
      nextLocIndex = i + 1;
      advanceNextLocIndex();
    }
    const end = nextLocIndex === node.body.length ? node.end : node.body[nextLocIndex].start;
    let tok;
    while (k < indexes.length && printer.tokenMap.matchesOriginal(tok = printer._tokens[indexes[k]], ";") && tok.start < end) {
      printer.tokenChar(59, occurrenceCount++);
      k++;
    }
  };
}
function ClassProperty(node) {
  this.printJoin(node.decorators);
  if (!node.static && !this.format.preserveFormat) {
    const endLine = node.key.loc?.end?.line;
    if (endLine) this.catchUp(endLine);
  }
  _tsPrintClassMemberModifiers.call(this, node);
  if (node.computed) {
    this.tokenChar(91);
    this.print(node.key);
    this.tokenChar(93);
  } else {
    _variance.call(this, node);
    this.print(node.key);
  }
  if (node.optional) {
    this.tokenChar(63);
  }
  if (node.definite) {
    this.tokenChar(33);
  }
  this.print(node.typeAnnotation);
  if (node.value) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(node.value);
  }
  this.semicolon();
}
function ClassAccessorProperty(node) {
  this.printJoin(node.decorators);
  const endLine = node.key.loc?.end?.line;
  if (endLine) this.catchUp(endLine);
  _tsPrintClassMemberModifiers.call(this, node);
  this.word("accessor", true);
  this.space();
  if (node.computed) {
    this.tokenChar(91);
    this.print(node.key);
    this.tokenChar(93);
  } else {
    _variance.call(this, node);
    this.print(node.key);
  }
  if (node.optional) {
    this.tokenChar(63);
  }
  if (node.definite) {
    this.tokenChar(33);
  }
  this.print(node.typeAnnotation);
  if (node.value) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(node.value);
  }
  this.semicolon();
}
function ClassPrivateProperty(node) {
  this.printJoin(node.decorators);
  _tsPrintClassMemberModifiers.call(this, node);
  this.print(node.key);
  if (node.optional) {
    this.tokenChar(63);
  }
  if (node.definite) {
    this.tokenChar(33);
  }
  this.print(node.typeAnnotation);
  if (node.value) {
    this.space();
    this.tokenChar(61);
    this.space();
    this.print(node.value);
  }
  this.semicolon();
}
function ClassMethod(node) {
  _classMethodHead.call(this, node);
  this.space();
  this.print(node.body);
}
function ClassPrivateMethod(node) {
  _classMethodHead.call(this, node);
  this.space();
  this.print(node.body);
}
function _classMethodHead(node, allowDecorators = true) {
  if (allowDecorators) {
    this.printJoin(node.decorators);
  }
  if (!this.format.preserveFormat) {
    const endLine = node.key.loc?.end?.line;
    if (endLine) this.catchUp(endLine);
  }
  _tsPrintClassMemberModifiers.call(this, node);
  _methodHead.call(this, node);
}
function StaticBlock(node) {
  this.word("static");
  this.space();
  this.tokenChar(123);
  if (node.body.length === 0) {
    this.tokenChar(125);
  } else {
    this.newline();
    this.printSequence(node.body, true);
    this.rightBrace(node);
  }
}
function File(node) {
  if (node.program) {
    this.print(node.program.interpreter);
  }
  this.print(node.program);
}
function Program(node) {
  this.printInnerComments(false);
  const directivesLen = node.directives?.length;
  if (directivesLen) {
    const newline = node.body.length ? 2 : 1;
    this.printSequence(node.directives, undefined, undefined, newline);
    if (!node.directives[directivesLen - 1].trailingComments?.length) {
      this.newline(newline);
    }
  }
  this.printSequence(node.body);
}
function BlockStatement(node) {
  this.tokenChar(123);
  const oldNoLineTerminatorAfterNode = this.enterDelimited();
  const directivesLen = node.directives?.length;
  if (directivesLen) {
    const newline = node.body.length ? 2 : 1;
    this.printSequence(node.directives, true, true, newline);
    if (!node.directives[directivesLen - 1].trailingComments?.length) {
      this.newline(newline);
    }
  }
  this.printSequence(node.body, true, true);
  this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
  this.rightBrace(node);
}
function Directive(node) {
  this.print(node.value);
  this.semicolon();
}
const unescapedSingleQuoteRE = /(?:^|[^\\])(?:\\\\)*'/;
const unescapedDoubleQuoteRE = /(?:^|[^\\])(?:\\\\)*"/;
function DirectiveLiteral(node) {
  const raw = this.getPossibleRaw(node);
  if (!this.format.minified && raw !== undefined) {
    this.token(raw);
    return;
  }
  const {
    value
  } = node;
  if (!unescapedDoubleQuoteRE.test(value)) {
    this.token(`"${value}"`);
  } else if (!unescapedSingleQuoteRE.test(value)) {
    this.token(`'${value}'`);
  } else {
    throw new Error("Malformed AST: it is not possible to print a directive containing" + " both unescaped single and double quotes.");
  }
}
function InterpreterDirective(node) {
  this.token(`#!${node.value}`);
  this._newline();
}
function Placeholder(node) {
  this.token("%%");
  this.print(node.name);
  this.token("%%");
  if (node.expectedNode === "Statement") {
    this.semicolon();
  }
}
function JSXAttribute(node) {
  this.print(node.name);
  if (node.value) {
    this.tokenChar(61);
    this.print(node.value);
  }
}
function JSXIdentifier(node) {
  this.word(node.name);
}
function JSXNamespacedName(node) {
  this.print(node.namespace);
  this.tokenChar(58);
  this.print(node.name);
}
function JSXMemberExpression(node) {
  this.print(node.object);
  this.tokenChar(46);
  this.print(node.property);
}
function JSXSpreadAttribute(node) {
  this.tokenChar(123);
  this.token("...");
  this.print(node.argument);
  this.rightBrace(node);
}
function JSXExpressionContainer(node) {
  this.tokenChar(123);
  this.print(node.expression);
  this.rightBrace(node);
}
function JSXSpreadChild(node) {
  this.tokenChar(123);
  this.token("...");
  this.print(node.expression);
  this.rightBrace(node);
}
function JSXText(node) {
  const raw = this.getPossibleRaw(node);
  if (raw !== undefined) {
    this.token(raw, true);
  } else {
    this.token(node.value, true);
  }
}
function JSXElement(node) {
  const open = node.openingElement;
  this.print(open);
  if (open.selfClosing) return;
  this.indent();
  for (const child of node.children) {
    this.print(child);
  }
  this.dedent();
  this.print(node.closingElement);
}
function spaceSeparator() {
  this.space();
}
function JSXOpeningElement(node) {
  this.tokenChar(60);
  this.print(node.name);
  this.print(node.typeArguments);
  if (node.attributes.length > 0) {
    this.space();
    this.printJoin(node.attributes, undefined, undefined, spaceSeparator);
  }
  if (node.selfClosing) {
    this.space();
    this.tokenChar(47);
  }
  this.tokenChar(62);
}
function JSXClosingElement(node) {
  this.tokenChar(60);
  this.tokenChar(47);
  this.print(node.name);
  this.tokenChar(62);
}
function JSXEmptyExpression() {
  this.printInnerComments();
}
function JSXFragment(node) {
  this.print(node.openingFragment);
  this.indent();
  for (const child of node.children) {
    this.print(child);
  }
  this.dedent();
  this.print(node.closingFragment);
}
function JSXOpeningFragment() {
  this.tokenChar(60);
  this.tokenChar(62);
}
function JSXClosingFragment() {
  this.token("</");
  this.tokenChar(62);
}
var generatorFunctions = /*#__PURE__*/Object.freeze({
  __proto__: null,
  AnyTypeAnnotation: AnyTypeAnnotation,
  ArgumentPlaceholder: ArgumentPlaceholder,
  ArrayExpression: ArrayExpression,
  ArrayPattern: ArrayExpression,
  ArrayTypeAnnotation: ArrayTypeAnnotation,
  ArrowFunctionExpression: ArrowFunctionExpression,
  AssignmentExpression: AssignmentExpression,
  AssignmentPattern: AssignmentPattern,
  AwaitExpression: AwaitExpression,
  BigIntLiteral: BigIntLiteral,
  BigIntLiteralTypeAnnotation: BigIntLiteral,
  BinaryExpression: BinaryExpression,
  BindExpression: BindExpression,
  BlockStatement: BlockStatement,
  BooleanLiteral: BooleanLiteral,
  BooleanLiteralTypeAnnotation: BooleanLiteralTypeAnnotation,
  BooleanTypeAnnotation: BooleanTypeAnnotation,
  BreakStatement: BreakStatement,
  CallExpression: CallExpression,
  CatchClause: CatchClause,
  ClassAccessorProperty: ClassAccessorProperty,
  ClassBody: ClassBody,
  ClassDeclaration: ClassDeclaration,
  ClassExpression: ClassDeclaration,
  ClassImplements: InterfaceExtends,
  ClassMethod: ClassMethod,
  ClassPrivateMethod: ClassPrivateMethod,
  ClassPrivateProperty: ClassPrivateProperty,
  ClassProperty: ClassProperty,
  ConditionalExpression: ConditionalExpression,
  ContinueStatement: ContinueStatement,
  DebuggerStatement: DebuggerStatement,
  DeclareClass: DeclareClass,
  DeclareExportAllDeclaration: DeclareExportAllDeclaration,
  DeclareExportDeclaration: DeclareExportDeclaration,
  DeclareFunction: DeclareFunction,
  DeclareInterface: DeclareInterface,
  DeclareModule: DeclareModule,
  DeclareModuleExports: DeclareModuleExports,
  DeclareOpaqueType: DeclareOpaqueType,
  DeclareTypeAlias: DeclareTypeAlias,
  DeclareVariable: DeclareVariable,
  DeclaredPredicate: DeclaredPredicate,
  Decorator: Decorator,
  Directive: Directive,
  DirectiveLiteral: DirectiveLiteral,
  DoExpression: DoExpression,
  DoWhileStatement: DoWhileStatement,
  EmptyStatement: EmptyStatement,
  EmptyTypeAnnotation: EmptyTypeAnnotation,
  EnumBooleanBody: EnumBooleanBody,
  EnumBooleanMember: EnumBooleanMember,
  EnumDeclaration: EnumDeclaration,
  EnumDefaultedMember: EnumDefaultedMember,
  EnumNumberBody: EnumNumberBody,
  EnumNumberMember: EnumNumberMember,
  EnumStringBody: EnumStringBody,
  EnumStringMember: EnumStringMember,
  EnumSymbolBody: EnumSymbolBody,
  ExistsTypeAnnotation: ExistsTypeAnnotation,
  ExportAllDeclaration: ExportAllDeclaration,
  ExportDefaultDeclaration: ExportDefaultDeclaration,
  ExportDefaultSpecifier: ExportDefaultSpecifier,
  ExportNamedDeclaration: ExportNamedDeclaration,
  ExportNamespaceSpecifier: ExportNamespaceSpecifier,
  ExportSpecifier: ExportSpecifier,
  ExpressionStatement: ExpressionStatement,
  File: File,
  ForInStatement: ForInStatement,
  ForOfStatement: ForOfStatement,
  ForStatement: ForStatement,
  FunctionDeclaration: FunctionExpression,
  FunctionExpression: FunctionExpression,
  FunctionTypeAnnotation: FunctionTypeAnnotation,
  FunctionTypeParam: FunctionTypeParam,
  GenericTypeAnnotation: InterfaceExtends,
  Identifier: Identifier,
  IfStatement: IfStatement,
  Import: Import,
  ImportAttribute: ImportAttribute,
  ImportDeclaration: ImportDeclaration,
  ImportDefaultSpecifier: ImportDefaultSpecifier,
  ImportExpression: ImportExpression,
  ImportNamespaceSpecifier: ImportNamespaceSpecifier,
  ImportSpecifier: ImportSpecifier,
  IndexedAccessType: IndexedAccessType,
  InferredPredicate: InferredPredicate,
  InterfaceDeclaration: InterfaceDeclaration,
  InterfaceExtends: InterfaceExtends,
  InterfaceTypeAnnotation: InterfaceTypeAnnotation,
  InterpreterDirective: InterpreterDirective,
  IntersectionTypeAnnotation: IntersectionTypeAnnotation,
  JSXAttribute: JSXAttribute,
  JSXClosingElement: JSXClosingElement,
  JSXClosingFragment: JSXClosingFragment,
  JSXElement: JSXElement,
  JSXEmptyExpression: JSXEmptyExpression,
  JSXExpressionContainer: JSXExpressionContainer,
  JSXFragment: JSXFragment,
  JSXIdentifier: JSXIdentifier,
  JSXMemberExpression: JSXMemberExpression,
  JSXNamespacedName: JSXNamespacedName,
  JSXOpeningElement: JSXOpeningElement,
  JSXOpeningFragment: JSXOpeningFragment,
  JSXSpreadAttribute: JSXSpreadAttribute,
  JSXSpreadChild: JSXSpreadChild,
  JSXText: JSXText,
  LabeledStatement: LabeledStatement,
  LogicalExpression: AssignmentExpression,
  MemberExpression: MemberExpression,
  MetaProperty: MetaProperty,
  MixedTypeAnnotation: MixedTypeAnnotation,
  ModuleExpression: ModuleExpression,
  NewExpression: NewExpression,
  NullLiteral: NullLiteral,
  NullLiteralTypeAnnotation: NullLiteralTypeAnnotation,
  NullableTypeAnnotation: NullableTypeAnnotation,
  NumberLiteralTypeAnnotation: NumericLiteral,
  NumberTypeAnnotation: NumberTypeAnnotation,
  NumericLiteral: NumericLiteral,
  ObjectExpression: ObjectExpression,
  ObjectMethod: ObjectMethod,
  ObjectPattern: ObjectExpression,
  ObjectProperty: ObjectProperty,
  ObjectTypeAnnotation: ObjectTypeAnnotation,
  ObjectTypeCallProperty: ObjectTypeCallProperty,
  ObjectTypeIndexer: ObjectTypeIndexer,
  ObjectTypeInternalSlot: ObjectTypeInternalSlot,
  ObjectTypeProperty: ObjectTypeProperty,
  ObjectTypeSpreadProperty: ObjectTypeSpreadProperty,
  OpaqueType: OpaqueType,
  OptionalCallExpression: OptionalCallExpression,
  OptionalIndexedAccessType: OptionalIndexedAccessType,
  OptionalMemberExpression: OptionalMemberExpression,
  ParenthesizedExpression: ParenthesizedExpression,
  Placeholder: Placeholder,
  PrivateName: PrivateName,
  Program: Program,
  QualifiedTypeIdentifier: QualifiedTypeIdentifier,
  RegExpLiteral: RegExpLiteral,
  RestElement: RestElement,
  ReturnStatement: ReturnStatement,
  SequenceExpression: SequenceExpression,
  SpreadElement: RestElement,
  StaticBlock: StaticBlock,
  StringLiteral: StringLiteral,
  StringLiteralTypeAnnotation: StringLiteral,
  StringTypeAnnotation: StringTypeAnnotation,
  Super: Super,
  SwitchCase: SwitchCase,
  SwitchStatement: SwitchStatement,
  SymbolTypeAnnotation: SymbolTypeAnnotation,
  TSAnyKeyword: TSAnyKeyword,
  TSArrayType: TSArrayType,
  TSAsExpression: TSAsExpression,
  TSBigIntKeyword: TSBigIntKeyword,
  TSBooleanKeyword: TSBooleanKeyword,
  TSCallSignatureDeclaration: TSCallSignatureDeclaration,
  TSClassImplements: TSClassImplements,
  TSConditionalType: TSConditionalType,
  TSConstructSignatureDeclaration: TSConstructSignatureDeclaration,
  TSConstructorType: TSConstructorType,
  TSDeclareFunction: TSDeclareFunction,
  TSDeclareMethod: TSDeclareMethod,
  TSEnumBody: TSEnumBody,
  TSEnumDeclaration: TSEnumDeclaration,
  TSEnumMember: TSEnumMember,
  TSExportAssignment: TSExportAssignment,
  TSExternalModuleReference: TSExternalModuleReference,
  TSFunctionType: TSFunctionType,
  TSImportEqualsDeclaration: TSImportEqualsDeclaration,
  TSImportType: TSImportType,
  TSIndexSignature: TSIndexSignature,
  TSIndexedAccessType: TSIndexedAccessType,
  TSInferType: TSInferType,
  TSInstantiationExpression: TSInstantiationExpression,
  TSInterfaceBody: TSInterfaceBody,
  TSInterfaceDeclaration: TSInterfaceDeclaration,
  TSInterfaceHeritage: TSClassImplements,
  TSIntersectionType: TSIntersectionType,
  TSIntrinsicKeyword: TSIntrinsicKeyword,
  TSLiteralType: TSLiteralType,
  TSMappedType: TSMappedType,
  TSMethodSignature: TSMethodSignature,
  TSModuleBlock: TSModuleBlock,
  TSModuleDeclaration: TSModuleDeclaration,
  TSNamedTupleMember: TSNamedTupleMember,
  TSNamespaceExportDeclaration: TSNamespaceExportDeclaration,
  TSNeverKeyword: TSNeverKeyword,
  TSNonNullExpression: TSNonNullExpression,
  TSNullKeyword: TSNullKeyword,
  TSNumberKeyword: TSNumberKeyword,
  TSObjectKeyword: TSObjectKeyword,
  TSOptionalType: TSOptionalType,
  TSParameterProperty: TSParameterProperty,
  TSParenthesizedType: TSParenthesizedType,
  TSPropertySignature: TSPropertySignature,
  TSQualifiedName: TSQualifiedName,
  TSRestType: TSRestType,
  TSSatisfiesExpression: TSSatisfiesExpression,
  TSStringKeyword: TSStringKeyword,
  TSSymbolKeyword: TSSymbolKeyword,
  TSTemplateLiteralType: TSTemplateLiteralType,
  TSThisType: TSThisType,
  TSTupleType: TSTupleType,
  TSTypeAliasDeclaration: TSTypeAliasDeclaration,
  TSTypeAnnotation: TSTypeAnnotation,
  TSTypeAssertion: TSTypeAssertion,
  TSTypeLiteral: TSTypeLiteral,
  TSTypeOperator: TSTypeOperator,
  TSTypeParameter: TSTypeParameter,
  TSTypeParameterDeclaration: TSTypeParameterInstantiation,
  TSTypeParameterInstantiation: TSTypeParameterInstantiation,
  TSTypePredicate: TSTypePredicate,
  TSTypeQuery: TSTypeQuery,
  TSTypeReference: TSTypeReference,
  TSUndefinedKeyword: TSUndefinedKeyword,
  TSUnionType: TSUnionType,
  TSUnknownKeyword: TSUnknownKeyword,
  TSVoidKeyword: TSVoidKeyword,
  TaggedTemplateExpression: TaggedTemplateExpression,
  TemplateElement: TemplateElement,
  TemplateLiteral: TemplateLiteral,
  ThisExpression: ThisExpression,
  ThisTypeAnnotation: ThisTypeAnnotation,
  ThrowStatement: ThrowStatement,
  TopicReference: TopicReference,
  TryStatement: TryStatement,
  TupleTypeAnnotation: TupleTypeAnnotation,
  TypeAlias: TypeAlias,
  TypeAnnotation: TypeAnnotation,
  TypeCastExpression: TypeCastExpression,
  TypeParameter: TypeParameter,
  TypeParameterDeclaration: TypeParameterInstantiation,
  TypeParameterInstantiation: TypeParameterInstantiation,
  TypeofTypeAnnotation: TypeofTypeAnnotation,
  UnaryExpression: UnaryExpression,
  UnionTypeAnnotation: UnionTypeAnnotation,
  UpdateExpression: UpdateExpression,
  V8IntrinsicIdentifier: V8IntrinsicIdentifier,
  VariableDeclaration: VariableDeclaration,
  VariableDeclarator: VariableDeclarator,
  Variance: Variance,
  VoidPattern: VoidPattern,
  VoidTypeAnnotation: VoidTypeAnnotation,
  WhileStatement: WhileStatement,
  WithStatement: WithStatement,
  YieldExpression: YieldExpression,
  _classMethodHead: _classMethodHead,
  _functionHead: _functionHead,
  _getRawIdentifier: _getRawIdentifier,
  _interfaceish: _interfaceish,
  _methodHead: _methodHead,
  _param: _param,
  _parameters: _parameters,
  _params: _params,
  _predicate: _predicate,
  _printAttributes: _printAttributes,
  _printTemplate: _printTemplate,
  _shouldPrintArrowParamsParens: _shouldPrintArrowParamsParens,
  _shouldPrintDecoratorsBeforeExport: _shouldPrintDecoratorsBeforeExport,
  _tsPrintClassMemberModifiers: _tsPrintClassMemberModifiers,
  _variance: _variance
});
const generatorInfosMap = new Map();
let index = 0;
for (const key of Object.keys(generatorFunctions).sort()) {
  if (key.startsWith("_")) continue;
  generatorInfosMap.set(key, [generatorFunctions[key], index++, undefined]);
}
const {
  VISITOR_KEYS: VISITOR_KEYS$1
} = _t;
for (const type of Object.keys(parens)) {
  const func = parens[type];
  if (generatorInfosMap.has(type)) {
    generatorInfosMap.get(type)[2] = func;
  }
}
function isOrHasCallExpression(node) {
  switch (node.type) {
    case "CallExpression":
      return true;
    case "MemberExpression":
      return isOrHasCallExpression(node.object);
  }
  return false;
}
function parentNeedsParens(node, parent, parentId) {
  switch (parentId) {
    case 113:
      if (parent.callee === node) {
        if (isOrHasCallExpression(node)) return true;
      }
      break;
    case 43:
      return !isDecoratorMemberExpression(node) && !(node.type === "CallExpression" && isDecoratorMemberExpression(node.callee)) && node.type !== "ParenthesizedExpression";
  }
  return false;
}
function isDecoratorMemberExpression(node) {
  switch (node.type) {
    case "Identifier":
      return true;
    case "MemberExpression":
      return !node.computed && node.property.type === "Identifier" && isDecoratorMemberExpression(node.object);
    default:
      return false;
  }
}
function isLastChild(parent, child) {
  const visitorKeys = VISITOR_KEYS$1[parent.type];
  for (let i = visitorKeys.length - 1; i >= 0; i--) {
    const val = parent[visitorKeys[i]];
    if (val === child) {
      return true;
    } else if (Array.isArray(val)) {
      let j = val.length - 1;
      while (j >= 0 && val[j] === null) j--;
      return j >= 0 && val[j] === child;
    } else if (val) {
      return false;
    }
  }
  return false;
}
const {
  traverseFast,
  VISITOR_KEYS
} = _t;
class TokenMap {
  _tokens;
  _source;
  _nodesToTokenIndexes = new Map();
  _nodesOccurrencesCountCache = new Map();
  _tokensCache = new Map();
  constructor(ast, tokens, source) {
    this._tokens = tokens;
    this._source = source;
    traverseFast(ast, node => {
      const indexes = this._getTokensIndexesOfNode(node);
      if (indexes.length > 0) this._nodesToTokenIndexes.set(node, indexes);
    });
    this._tokensCache.clear();
  }
  has(node) {
    return this._nodesToTokenIndexes.has(node);
  }
  getIndexes(node) {
    return this._nodesToTokenIndexes.get(node);
  }
  find(node, condition) {
    const indexes = this._nodesToTokenIndexes.get(node);
    if (indexes) {
      for (let k = 0; k < indexes.length; k++) {
        const index = indexes[k];
        const tok = this._tokens[index];
        if (condition(tok, index)) return tok;
      }
    }
    return null;
  }
  findLastIndex(node, condition) {
    const indexes = this._nodesToTokenIndexes.get(node);
    if (indexes) {
      for (let k = indexes.length - 1; k >= 0; k--) {
        const index = indexes[k];
        const tok = this._tokens[index];
        if (condition(tok, index)) return index;
      }
    }
    return -1;
  }
  findMatching(node, test, occurrenceCount = 0) {
    const indexes = this._nodesToTokenIndexes.get(node);
    if (indexes) {
      if (typeof test === "number") {
        test = String.fromCharCode(test);
      }
      let i = 0;
      const count = occurrenceCount;
      if (count > 1) {
        const cache = this._nodesOccurrencesCountCache.get(node);
        if (cache?.test === test && cache.count < count) {
          i = cache.i + 1;
          occurrenceCount -= cache.count + 1;
        }
      }
      for (; i < indexes.length; i++) {
        const tok = this._tokens[indexes[i]];
        if (this.matchesOriginal(tok, test)) {
          if (occurrenceCount === 0) {
            if (count > 0) {
              this._nodesOccurrencesCountCache.set(node, {
                test,
                count,
                i
              });
            }
            return tok;
          }
          occurrenceCount--;
        }
      }
    }
    return null;
  }
  matchesOriginal(token, test) {
    if (token.end - token.start !== test.length) return false;
    if (token.value != null) return token.value === test;
    return this._source.startsWith(test, token.start);
  }
  startMatches(node, test) {
    const indexes = this._nodesToTokenIndexes.get(node);
    if (!indexes) return false;
    const tok = this._tokens[indexes[0]];
    if (tok.start !== node.start) return false;
    return this.matchesOriginal(tok, test);
  }
  endMatches(node, test) {
    const indexes = this._nodesToTokenIndexes.get(node);
    if (!indexes) return false;
    const tok = this._tokens[indexes[indexes.length - 1]];
    if (tok.end !== node.end) return false;
    return this.matchesOriginal(tok, test);
  }
  _getTokensIndexesOfNode(node) {
    if (node.start == null || node.end == null) return [];
    const {
      first,
      last
    } = this._findTokensOfNode(node, 0, this._tokens.length - 1);
    let low = first;
    const children = childrenIterator(node);
    if ((node.type === "ExportNamedDeclaration" || node.type === "ExportDefaultDeclaration") && node.declaration?.type === "ClassDeclaration") {
      children.next();
    }
    const indexes = [];
    for (const child of children) {
      if (child == null) continue;
      if (child.start == null || child.end == null) continue;
      const childTok = this._findTokensOfNode(child, low, last);
      const high = childTok.first;
      for (let k = low; k < high; k++) indexes.push(k);
      low = childTok.last + 1;
    }
    for (let k = low; k <= last; k++) indexes.push(k);
    return indexes;
  }
  _findTokensOfNode(node, low, high) {
    const cached = this._tokensCache.get(node);
    if (cached) return cached;
    const first = this._findFirstTokenOfNode(node.start, low, high);
    const last = this._findLastTokenOfNode(node.end, first, high);
    this._tokensCache.set(node, {
      first,
      last
    });
    return {
      first,
      last
    };
  }
  _findFirstTokenOfNode(start, low, high) {
    while (low <= high) {
      const mid = high + low >> 1;
      if (start < this._tokens[mid].start) {
        high = mid - 1;
      } else if (start > this._tokens[mid].start) {
        low = mid + 1;
      } else {
        return mid;
      }
    }
    return low;
  }
  _findLastTokenOfNode(end, low, high) {
    while (low <= high) {
      const mid = high + low >> 1;
      if (end < this._tokens[mid].end) {
        high = mid - 1;
      } else if (end > this._tokens[mid].end) {
        low = mid + 1;
      } else {
        return mid;
      }
    }
    return high;
  }
}
function* childrenIterator(node) {
  if (node.type === "TemplateLiteral") {
    yield node.quasis[0];
    for (let i = 1; i < node.quasis.length; i++) {
      yield node.expressions[i - 1];
      yield node.quasis[i];
    }
    return;
  }
  const keys = VISITOR_KEYS[node.type];
  for (const key of keys) {
    const child = node[key];
    if (!child) continue;
    if (Array.isArray(child)) {
      yield* child;
    } else {
      yield child;
    }
  }
}
const {
  isExpression,
  isFunction,
  isStatement,
  isClassBody,
  isTSInterfaceBody,
  isTSEnumMember
} = _t;
const SCIENTIFIC_NOTATION = /e/i;
const ZERO_DECIMAL_INTEGER = /\.0+$/;
const HAS_NEWLINE = /[\n\r\u2028\u2029]/;
const HAS_NEWLINE_OR_BlOCK_COMMENT_END = /[\n\r\u2028\u2029]|\*\//;
function commentIsNewline(c) {
  return c.type === "CommentLine" || HAS_NEWLINE.test(c.value);
}
class Printer {
  constructor(format, map, tokens = null, originalCode = null) {
    this.format = format;
    this._tokens = tokens;
    this._originalCode = originalCode;
    this._indentRepeat = format.indent.style.length;
    this._inputMap = map?._inputMap || null;
    this._buf = new Buffer(map, format.indent.style[0]);
    const {
      preserveFormat,
      compact,
      concise,
      retainLines,
      retainFunctionParens
    } = format;
    if (preserveFormat) {
      this._flags |= 1;
    }
    if (compact) {
      this._flags |= 2;
    }
    if (concise) {
      this._flags |= 4;
    }
    if (retainLines) {
      this._flags |= 8;
    }
    if (retainFunctionParens) {
      this._flags |= 16;
    }
    if (format.auxiliaryCommentBefore || format.auxiliaryCommentAfter) {
      this._flags |= 32;
    }
  }
  enterDelimited() {
    const oldNoLineTerminatorAfterNode = this._noLineTerminatorAfterNode;
    if (oldNoLineTerminatorAfterNode !== null) {
      this._noLineTerminatorAfterNode = null;
    }
    return oldNoLineTerminatorAfterNode;
  }
  tokenContext = 0;
  _tokens = null;
  _originalCode = null;
  _currentNode = null;
  _currentTypeId = null;
  _indent = 0;
  _indentRepeat = 0;
  _insideAux = false;
  _noLineTerminator = false;
  _noLineTerminatorAfterNode = null;
  _printAuxAfterOnNextUserNode = false;
  _printedComments = new Set();
  _lastCommentLine = 0;
  _innerCommentsState = 0;
  _flags = 0;
  tokenMap = null;
  _boundGetRawIdentifier = null;
  generate(ast) {
    if (this.format.preserveFormat) {
      this.tokenMap = new TokenMap(ast, this._tokens, this._originalCode);
      this._boundGetRawIdentifier = _getRawIdentifier.bind(this);
    }
    this.print(ast);
    this._maybeAddAuxComment();
    return this._buf.get();
  }
  indent(flags = this._flags) {
    if (flags & (1 | 2 | 4)) {
      return;
    }
    this._indent += this._indentRepeat;
  }
  dedent(flags = this._flags) {
    if (flags & (1 | 2 | 4)) {
      return;
    }
    this._indent -= this._indentRepeat;
  }
  _printSemicolonBeforeNextNode = -1;
  _printSemicolonBeforeNextToken = -1;
  semicolon(force = false) {
    const flags = this._flags;
    if (flags & 32) {
      this._maybeAddAuxComment();
    }
    if (flags & 1) {
      const node = this._currentNode;
      if (node.start != null && node.end != null) {
        if (!this.tokenMap.endMatches(node, ";")) {
          this._printSemicolonBeforeNextNode = this._buf.getCurrentLine();
          return;
        }
        const indexes = this.tokenMap.getIndexes(this._currentNode);
        this._catchUpTo(this._tokens[indexes[indexes.length - 1]].loc.start);
      }
    }
    if (force) {
      this._appendChar(59);
    } else {
      this._queue(59);
    }
    this._noLineTerminator = false;
  }
  rightBrace(node) {
    if (this.format.minified) {
      this._buf.removeLastSemicolon();
    }
    this.sourceWithOffset("end", node.loc, -1);
    this.tokenChar(125);
  }
  rightParens(node) {
    this.sourceWithOffset("end", node.loc, -1);
    this.tokenChar(41);
  }
  space(force = false) {
    if (this._flags & (1 | 2)) {
      return;
    }
    if (force) {
      this._space();
    } else {
      const lastCp = this.getLastChar(true);
      if (lastCp !== 0 && lastCp !== 32 && lastCp !== 10) {
        this._space();
      }
    }
  }
  word(str, noLineTerminatorAfter = false) {
    this.tokenContext &= 128;
    this._maybePrintInnerComments(str);
    const flags = this._flags;
    if (flags & 32) {
      this._maybeAddAuxComment();
    }
    if (flags & 1) this._catchUpToCurrentToken(str);
    const lastChar = this.getLastChar();
    if (lastChar === -2 || lastChar === -3 || lastChar === 47 && str.charCodeAt(0) === 47) {
      this._space();
    }
    this._append(str, false);
    this.setLastChar(-3);
    this._noLineTerminator = noLineTerminatorAfter;
  }
  number(str, number) {
    function isNonDecimalLiteral(str) {
      if (str.length > 2 && str.charCodeAt(0) === 48) {
        const secondChar = str.charCodeAt(1);
        return secondChar === 98 || secondChar === 111 || secondChar === 120;
      }
      return false;
    }
    this.word(str);
    if (Number.isInteger(number) && !isNonDecimalLiteral(str) && !SCIENTIFIC_NOTATION.test(str) && !ZERO_DECIMAL_INTEGER.test(str) && str.charCodeAt(str.length - 1) !== 46) {
      this.setLastChar(-2);
    }
  }
  token(str, maybeNewline = false, occurrenceCount = 0, mayNeedSpace = false) {
    this.tokenContext &= 128;
    this._maybePrintInnerComments(str, occurrenceCount);
    const flags = this._flags;
    if (flags & 32) {
      this._maybeAddAuxComment();
    }
    if (flags & 1) {
      this._catchUpToCurrentToken(str, occurrenceCount);
    }
    if (mayNeedSpace) {
      const strFirst = str.charCodeAt(0);
      if ((strFirst === 45 && str === "--" || strFirst === 61) && this.getLastChar() === 33 || strFirst === 43 && this.getLastChar() === 43 || strFirst === 45 && this.getLastChar() === 45 || strFirst === 46 && this.getLastChar() === -2) {
        this._space();
      }
    }
    this._append(str, maybeNewline);
    this._noLineTerminator = false;
  }
  tokenChar(char, occurrenceCount = 0) {
    this.tokenContext &= 128;
    this._maybePrintInnerComments(char, occurrenceCount);
    const flags = this._flags;
    if (flags & 32) {
      this._maybeAddAuxComment();
    }
    if (flags & 1) {
      this._catchUpToCurrentToken(char, occurrenceCount);
    }
    if (char === 43 && this.getLastChar() === 43 || char === 45 && this.getLastChar() === 45 || char === 46 && this.getLastChar() === -2) {
      this._space();
    }
    this._appendChar(char);
    this._noLineTerminator = false;
  }
  newline(i = 1, flags = this._flags) {
    if (i <= 0) return;
    if (flags & (8 | 2)) {
      return;
    }
    if (flags & 4) {
      this.space();
      return;
    }
    if (i > 2) i = 2;
    i -= this._buf.getNewlineCount();
    for (let j = 0; j < i; j++) {
      this._newline();
    }
  }
  endsWith(char) {
    return this.getLastChar(true) === char;
  }
  getLastChar(checkQueue) {
    return this._buf.getLastChar(checkQueue);
  }
  setLastChar(char) {
    this._buf._last = char;
  }
  exactSource(loc, cb) {
    if (!loc) {
      cb();
      return;
    }
    this._catchUp("start", loc);
    this._buf.exactSource(loc, cb);
  }
  source(prop, loc) {
    if (!loc) return;
    this._catchUp(prop, loc);
    this._buf.source(prop, loc);
  }
  sourceWithOffset(prop, loc, columnOffset) {
    if (!loc || this.format.preserveFormat) return;
    this._catchUp(prop, loc);
    this._buf.sourceWithOffset(prop, loc, columnOffset);
  }
  sourceIdentifierName(identifierName, pos) {
    if (!this._buf._canMarkIdName) return;
    const sourcePosition = this._buf._sourcePosition;
    sourcePosition.identifierNamePos = pos;
    sourcePosition.identifierName = identifierName;
  }
  _space() {
    this._queue(32);
  }
  _newline() {
    if (this._buf._queuedChar === 32) this._buf._queuedChar = 0;
    this._appendChar(10, true);
  }
  _catchUpToCurrentToken(str, occurrenceCount = 0) {
    const token = this.tokenMap.findMatching(this._currentNode, str, occurrenceCount);
    if (token) this._catchUpTo(token.loc.start);
    if (this._printSemicolonBeforeNextToken !== -1 && this._printSemicolonBeforeNextToken === this._buf.getCurrentLine()) {
      this._appendChar(59, true);
    }
    this._printSemicolonBeforeNextToken = -1;
    this._printSemicolonBeforeNextNode = -1;
  }
  _append(str, maybeNewline) {
    this._maybeIndent();
    this._buf.append(str, maybeNewline);
  }
  _appendChar(char, noIndent) {
    if (!noIndent) {
      this._maybeIndent();
    }
    this._buf.appendChar(char);
  }
  _queue(char) {
    this._buf.queue(char);
    this.setLastChar(-1);
  }
  _maybeIndent() {
    const indent = this._shouldIndent();
    if (indent > 0) {
      this._buf._appendChar(-1, indent, false);
    }
  }
  _shouldIndent() {
    return this.endsWith(10) ? this._indent : 0;
  }
  catchUp(line) {
    if (!this.format.retainLines) return;
    const count = line - this._buf.getCurrentLine();
    for (let i = 0; i < count; i++) {
      this._newline();
    }
  }
  _catchUp(prop, loc) {
    const flags = this._flags;
    if ((flags & 1) === 0) {
      if (flags & 8 && loc?.[prop]) {
        this.catchUp(loc[prop].line);
      }
      return;
    }
    const pos = loc?.[prop];
    if (pos != null) this._catchUpTo(pos);
  }
  _catchUpTo({
    line,
    column,
    index
  }) {
    const count = line - this._buf.getCurrentLine();
    if (count > 0 && this._noLineTerminator) {
      return;
    }
    for (let i = 0; i < count; i++) {
      this._newline();
    }
    const spacesCount = count > 0 ? column : column - this._buf.getCurrentColumn();
    if (spacesCount > 0) {
      const spaces = this._originalCode ? this._originalCode.slice(index - spacesCount, index).replace(/[^\t\v\f\uFEFF\p{Space_Separator}]/gu, " ") : " ".repeat(spacesCount);
      this._append(spaces, false);
      this.setLastChar(32);
    }
  }
  printTerminatorless(node) {
    this._noLineTerminator = true;
    this.print(node);
  }
  print(node, noLineTerminatorAfter = false, resetTokenContext = false, trailingCommentsLineOffset) {
    if (!node) return;
    this._innerCommentsState = 0;
    const {
      type,
      loc,
      extra
    } = node;
    const flags = this._flags;
    let changedFlags = false;
    if (node._compact) {
      this._flags |= 4;
      changedFlags = true;
    }
    const nodeInfo = generatorInfosMap.get(type);
    if (nodeInfo === undefined) {
      throw new ReferenceError(`unknown node of type ${JSON.stringify(type)} with constructor ${JSON.stringify(node.constructor.name)}`);
    }
    const [printMethod, nodeId, needsParens] = nodeInfo;
    const parent = this._currentNode;
    const parentId = this._currentTypeId;
    this._currentNode = node;
    this._currentTypeId = nodeId;
    if (flags & 1) {
      this._printSemicolonBeforeNextToken = this._printSemicolonBeforeNextNode;
    }
    let oldInAux;
    if (flags & 32) {
      oldInAux = this._insideAux;
      this._insideAux = loc == null;
      this._maybeAddAuxComment(this._insideAux && !oldInAux);
    }
    let oldTokenContext = 0;
    if (resetTokenContext) {
      oldTokenContext = this.tokenContext;
      if (oldTokenContext & 128) {
        this.tokenContext = 0;
      } else {
        oldTokenContext = 0;
      }
    }
    const parenthesized = extra != null && extra.parenthesized;
    let shouldPrintParens = parenthesized && flags & 1 || parenthesized && flags & 16 && nodeId === 72 || parent && (parentNeedsParens(node, parent, parentId) || needsParens != null && needsParens(node, parent, parentId, this.tokenContext, flags & 1 ? this._boundGetRawIdentifier : undefined));
    if (!shouldPrintParens && parenthesized && node.leadingComments?.length && node.leadingComments[0].type === "CommentBlock") {
      switch (parentId) {
        case 66:
        case 241:
        case 6:
        case 141:
          break;
        case 18:
        case 131:
        case 113:
          if (parent.callee !== node) break;
        default:
          shouldPrintParens = true;
      }
    }
    let indentParenthesized = false;
    if (!shouldPrintParens && this._noLineTerminator && (node.leadingComments?.some(commentIsNewline) || flags & 8 && loc && loc.start.line > this._buf.getCurrentLine())) {
      shouldPrintParens = true;
      indentParenthesized = true;
    }
    let oldNoLineTerminatorAfterNode;
    if (!shouldPrintParens) {
      noLineTerminatorAfter ||= !!parent && this._noLineTerminatorAfterNode === parent && isLastChild(parent, node);
      if (noLineTerminatorAfter) {
        if (node.trailingComments?.some(commentIsNewline)) {
          if (isExpression(node)) shouldPrintParens = true;
        } else {
          oldNoLineTerminatorAfterNode = this._noLineTerminatorAfterNode;
          this._noLineTerminatorAfterNode = node;
        }
      }
    }
    if (shouldPrintParens) {
      this.tokenChar(40);
      if (indentParenthesized) this.indent();
      this._innerCommentsState = 0;
      if (!resetTokenContext) {
        oldTokenContext = this.tokenContext;
      }
      if (oldTokenContext & 128) {
        this.tokenContext = 0;
      }
      oldNoLineTerminatorAfterNode = this._noLineTerminatorAfterNode;
      this._noLineTerminatorAfterNode = null;
    }
    this._printLeadingComments(node, parent);
    this.exactSource(nodeId === 137 || nodeId === 67 ? null : loc, printMethod.bind(this, node, parent));
    if (shouldPrintParens) {
      this._printTrailingComments(node, parent);
      if (indentParenthesized) {
        this.dedent();
        this.newline();
      }
      this.tokenChar(41);
      this._noLineTerminator = noLineTerminatorAfter;
    } else if (noLineTerminatorAfter && !this._noLineTerminator) {
      this._noLineTerminator = true;
      this._printTrailingComments(node, parent);
    } else {
      this._printTrailingComments(node, parent, trailingCommentsLineOffset);
    }
    if (oldTokenContext) this.tokenContext = oldTokenContext;
    this._currentNode = parent;
    this._currentTypeId = parentId;
    if (changedFlags) {
      this._flags = flags;
    }
    if (flags & 32) {
      this._insideAux = oldInAux;
    }
    if (oldNoLineTerminatorAfterNode != null) {
      this._noLineTerminatorAfterNode = oldNoLineTerminatorAfterNode;
    }
    this._innerCommentsState = 0;
  }
  _maybeAddAuxComment(enteredPositionlessNode) {
    if (enteredPositionlessNode) this._printAuxBeforeComment();
    if (!this._insideAux) this._printAuxAfterComment();
  }
  _printAuxBeforeComment() {
    if (this._printAuxAfterOnNextUserNode) return;
    this._printAuxAfterOnNextUserNode = true;
    const comment = this.format.auxiliaryCommentBefore;
    if (comment) {
      this._printComment({
        type: "CommentBlock",
        value: comment
      }, 0);
    }
  }
  _printAuxAfterComment() {
    if (!this._printAuxAfterOnNextUserNode) return;
    this._printAuxAfterOnNextUserNode = false;
    const comment = this.format.auxiliaryCommentAfter;
    if (comment) {
      this._printComment({
        type: "CommentBlock",
        value: comment
      }, 0);
    }
  }
  getPossibleRaw(node) {
    const extra = node.extra;
    if (extra?.raw != null && extra.rawValue != null && node.value === extra.rawValue) {
      return extra.raw;
    }
  }
  printJoin(nodes, statement, indent, separator, printTrailingSeparator, resetTokenContext, trailingCommentsLineOffset) {
    if (!nodes?.length) return;
    const flags = this._flags;
    if (indent == null && flags & 8) {
      const startLine = nodes[0].loc?.start.line;
      if (startLine != null && startLine !== this._buf.getCurrentLine()) {
        indent = true;
      }
    }
    if (indent) this.indent(flags);
    const len = nodes.length;
    for (let i = 0; i < len; i++) {
      const node = nodes[i];
      if (!node) continue;
      if (statement && i === 0 && this._buf.hasContent()) {
        this.newline(1, flags);
      }
      this.print(node, false, resetTokenContext, trailingCommentsLineOffset || 0);
      if (separator != null) {
        if (i < len - 1) separator.call(this, i, false);else if (printTrailingSeparator) separator.call(this, i, true);
      }
      if (statement) {
        if (i + 1 === len) {
          this.newline(1, flags);
        } else {
          const lastCommentLine = this._lastCommentLine;
          if (lastCommentLine > 0) {
            const offset = (nodes[i + 1].loc?.start.line || 0) - lastCommentLine;
            if (offset >= 0) {
              this.newline(offset || 1, flags);
              continue;
            }
          }
          this.newline(1, flags);
        }
      }
    }
    if (indent) this.dedent(flags);
  }
  printAndIndentOnComments(node) {
    const indent = node.leadingComments && node.leadingComments.length > 0;
    if (indent) this.indent();
    this.print(node);
    if (indent) this.dedent();
  }
  printBlock(body) {
    if (body.type !== "EmptyStatement") {
      this.space();
    }
    this.print(body);
  }
  _printTrailingComments(node, parent, lineOffset) {
    const {
      innerComments,
      trailingComments
    } = node;
    if (innerComments?.length) {
      this._printComments(2, innerComments, node, parent, lineOffset);
    }
    if (trailingComments?.length) {
      this._printComments(2, trailingComments, node, parent, lineOffset);
    } else {
      this._lastCommentLine = 0;
    }
  }
  _printLeadingComments(node, parent) {
    const comments = node.leadingComments;
    if (!comments?.length) return;
    this._printComments(0, comments, node, parent);
  }
  _maybePrintInnerComments(nextTokenStr, nextTokenOccurrenceCount) {
    const state = this._innerCommentsState;
    switch (state & 3) {
      case 0:
        this._innerCommentsState = 1 | 4;
        return;
      case 1:
        this.printInnerComments((state & 4) > 0, this.tokenMap?.findMatching(this._currentNode, nextTokenStr, nextTokenOccurrenceCount));
    }
  }
  printInnerComments(indent = true, nextToken) {
    const node = this._currentNode;
    const comments = node.innerComments;
    if (!comments?.length) {
      this._innerCommentsState = 2;
      return;
    }
    const hasSpace = this.endsWith(32);
    if (indent) this.indent();
    switch (this._printComments(1, comments, node, undefined, undefined, nextToken)) {
      case 2:
        this._innerCommentsState = 2;
      case 1:
        if (hasSpace) this.space();
    }
    if (indent) this.dedent();
  }
  noIndentInnerCommentsHere() {
    this._innerCommentsState &= -5;
  }
  printSequence(nodes, indent, resetTokenContext, trailingCommentsLineOffset) {
    this.printJoin(nodes, true, indent ?? false, undefined, undefined, resetTokenContext, trailingCommentsLineOffset);
  }
  printList(items, printTrailingSeparator, statement, indent, separator, resetTokenContext) {
    this.printJoin(items, statement, indent, separator ?? commaSeparator, printTrailingSeparator, resetTokenContext);
  }
  shouldPrintTrailingComma(listEnd) {
    if (!this.tokenMap) return null;
    const listEndIndex = this.tokenMap.findLastIndex(this._currentNode, token => this.tokenMap.matchesOriginal(token, typeof listEnd === "number" ? String.fromCharCode(listEnd) : listEnd));
    if (listEndIndex <= 0) return null;
    return this.tokenMap.matchesOriginal(this._tokens[listEndIndex - 1], ",");
  }
  _shouldPrintComment(comment, nextToken) {
    if (comment.ignore) return 0;
    if (this._printedComments.has(comment)) return 0;
    if (this._noLineTerminator && HAS_NEWLINE_OR_BlOCK_COMMENT_END.test(comment.value)) {
      return 2;
    }
    if (nextToken && this.tokenMap) {
      const commentTok = this.tokenMap.find(this._currentNode, token => token.value === comment.value);
      if (commentTok && commentTok.start > nextToken.start) {
        return 2;
      }
    }
    this._printedComments.add(comment);
    if (!this.format.shouldPrintComment(comment.value)) {
      return 0;
    }
    return 1;
  }
  _printComment(comment, skipNewLines) {
    const noLineTerminator = this._noLineTerminator;
    const isBlockComment = comment.type === "CommentBlock";
    const printNewLines = isBlockComment && skipNewLines !== 1 && !noLineTerminator;
    if (printNewLines && this._buf.hasContent() && skipNewLines !== 2) {
      this.newline(1);
    }
    switch (this.getLastChar(true)) {
      case 47:
        this._space();
      case 91:
      case 123:
      case 40:
        break;
      default:
        this.space();
    }
    let val;
    if (isBlockComment) {
      val = `/*${comment.value}*/`;
      if (this.format.indent.adjustMultilineComment) {
        const offset = comment.loc?.start.column;
        if (offset) {
          const newlineRegex = new RegExp("\\n\\s{1," + offset + "}", "g");
          val = val.replace(newlineRegex, "\n");
        }
        if (this._flags & 4) {
          val = val.replace(/\n(?!$)/g, `\n`);
        } else {
          let indentSize = this.format.retainLines ? 0 : this._buf.getCurrentColumn();
          if (this._shouldIndent() || this.format.retainLines) {
            indentSize += this._indent;
          }
          val = val.replace(/\n(?!$)/g, `\n${" ".repeat(indentSize)}`);
        }
      }
    } else if (!noLineTerminator) {
      val = `//${comment.value}`;
    } else {
      val = `/*${comment.value}*/`;
    }
    this.source("start", comment.loc);
    this._append(val, isBlockComment);
    if (!isBlockComment && !noLineTerminator) {
      this._newline();
    }
    if (printNewLines && skipNewLines !== 3) {
      this.newline(1);
    }
  }
  _printComments(type, comments, node, parent, lineOffset = 0, nextToken) {
    const nodeLoc = node.loc;
    const len = comments.length;
    let hasLoc = !!nodeLoc;
    const nodeStartLine = hasLoc ? nodeLoc.start.line : 0;
    const nodeEndLine = hasLoc ? nodeLoc.end.line : 0;
    let lastLine = 0;
    let leadingCommentNewline = 0;
    const {
      _noLineTerminator,
      _flags
    } = this;
    for (let i = 0; i < len; i++) {
      const comment = comments[i];
      const shouldPrint = this._shouldPrintComment(comment, nextToken);
      if (shouldPrint === 2) {
        return i === 0 ? 0 : 1;
      }
      if (hasLoc && comment.loc && shouldPrint === 1) {
        const commentStartLine = comment.loc.start.line;
        const commentEndLine = comment.loc.end.line;
        if (type === 0) {
          let offset = 0;
          if (i === 0) {
            if (this._buf.hasContent() && (comment.type === "CommentLine" || commentStartLine !== commentEndLine)) {
              offset = leadingCommentNewline = 1;
            }
          } else {
            offset = commentStartLine - lastLine;
          }
          lastLine = commentEndLine;
          if (offset > 0 && !_noLineTerminator) {
            this.newline(offset, _flags);
          }
          this._printComment(comment, 1);
          if (i + 1 === len) {
            const count = Math.max(nodeStartLine - lastLine, leadingCommentNewline);
            if (count > 0 && !_noLineTerminator) {
              this.newline(count, _flags);
            }
            lastLine = nodeStartLine;
          }
        } else if (type === 1) {
          const offset = commentStartLine - (i === 0 ? nodeStartLine : lastLine);
          lastLine = commentEndLine;
          if (offset > 0 && !_noLineTerminator) {
            this.newline(offset, _flags);
          }
          this._printComment(comment, 1);
          if (i + 1 === len) {
            const count = Math.min(1, nodeEndLine - lastLine);
            if (count > 0 && !_noLineTerminator) {
              this.newline(count, _flags);
            }
            lastLine = nodeEndLine;
          }
        } else {
          const offset = commentStartLine - (i === 0 ? nodeEndLine - lineOffset : lastLine);
          lastLine = commentEndLine;
          if (offset > 0 && !_noLineTerminator) {
            this.newline(offset, _flags);
          }
          this._printComment(comment, 1);
        }
      } else {
        hasLoc = false;
        if (shouldPrint !== 1) {
          continue;
        }
        if (len === 1) {
          const singleLine = comment.loc ? comment.loc.start.line === comment.loc.end.line : !HAS_NEWLINE.test(comment.value);
          const shouldSkipNewline = singleLine && !isStatement(node) && !isClassBody(parent) && !isTSInterfaceBody(parent) && !isTSEnumMember(node);
          if (type === 0) {
            this._printComment(comment, shouldSkipNewline && node.type !== "ObjectExpression" || singleLine && isFunction(parent) && parent.body === node ? 1 : 0);
          } else if (shouldSkipNewline && type === 2) {
            this._printComment(comment, 1);
          } else {
            this._printComment(comment, 0);
          }
        } else if (type === 1 && !(node.type === "ObjectExpression" && node.properties.length > 1) && node.type !== "ClassBody" && node.type !== "TSInterfaceBody") {
          this._printComment(comment, i === 0 ? 2 : i === len - 1 ? 3 : 0);
        } else {
          this._printComment(comment, 0);
        }
      }
    }
    if (type === 2 && hasLoc && lastLine) {
      this._lastCommentLine = lastLine;
    }
    return 2;
  }
}
function commaSeparator(occurrenceCount, last) {
  this.tokenChar(44, occurrenceCount);
  if (!last) this.space();
}
function normalizeOptions(code, opts, ast) {
  if (opts.experimental_preserveFormat) {
    if (typeof code !== "string") {
      throw new Error("`experimental_preserveFormat` requires the original `code` to be passed to @babel/generator as a string");
    }
    if (!opts.retainLines) {
      throw new Error("`experimental_preserveFormat` requires `retainLines` to be set to `true`");
    }
    if (opts.compact && opts.compact !== "auto") {
      throw new Error("`experimental_preserveFormat` is not compatible with the `compact` option");
    }
    if (opts.minified) {
      throw new Error("`experimental_preserveFormat` is not compatible with the `minified` option");
    }
    if (opts.jsescOption) {
      throw new Error("`experimental_preserveFormat` is not compatible with the `jsescOption` option");
    }
    if (!Array.isArray(ast.tokens)) {
      throw new Error("`experimental_preserveFormat` requires the AST to have attached the token of the input code. Make sure to enable the `tokens: true` parser option.");
    }
  }
  const format = {
    auxiliaryCommentBefore: opts.auxiliaryCommentBefore,
    auxiliaryCommentAfter: opts.auxiliaryCommentAfter,
    shouldPrintComment: opts.shouldPrintComment,
    preserveFormat: opts.experimental_preserveFormat,
    retainLines: opts.retainLines,
    retainFunctionParens: opts.retainFunctionParens,
    comments: opts.comments == null || opts.comments,
    compact: opts.compact,
    minified: opts.minified,
    concise: opts.concise,
    indent: {
      adjustMultilineComment: true,
      style: "  "
    },
    jsescOption: {
      quotes: "double",
      wrap: true,
      minimal: true,
      ...opts.jsescOption
    },
    topicToken: opts.topicToken
  };
  if (format.minified) {
    format.compact = true;
    format.shouldPrintComment = format.shouldPrintComment || (() => format.comments);
  } else {
    format.shouldPrintComment = format.shouldPrintComment || (value => format.comments || value.includes("@license") || value.includes("@preserve"));
  }
  if (format.compact === "auto") {
    format.compact = typeof code === "string" && code.length > 500_000;
    if (format.compact) {
      console.error("[BABEL] Note: The code generator has deoptimised the styling of " + `${opts.filename} as it exceeds the max of ${"500KB"}.`);
    }
  }
  if (format.compact || format.preserveFormat) {
    format.indent.adjustMultilineComment = false;
  }
  const {
    auxiliaryCommentBefore,
    auxiliaryCommentAfter,
    shouldPrintComment
  } = format;
  if (auxiliaryCommentBefore && !shouldPrintComment(auxiliaryCommentBefore)) {
    format.auxiliaryCommentBefore = undefined;
  }
  if (auxiliaryCommentAfter && !shouldPrintComment(auxiliaryCommentAfter)) {
    format.auxiliaryCommentAfter = undefined;
  }
  return format;
}
function generate(ast, opts = {}, code) {
  const format = normalizeOptions(code, opts, ast);
  const map = opts.sourceMaps ? new SourceMap(opts, code) : null;
  const printer = new Printer(format, map, ast.tokens, typeof code === "string" ? code : null);
  return printer.generate(ast);
}
export { generate as default, generate };
//# sourceMappingURL=index.js.map
