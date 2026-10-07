'use strict'

const common = require('./common')
const YAMLException = require('./exception')
const makeSnippet = require('./snippet')
const DEFAULT_SCHEMA = require('./schema/default')

const _hasOwnProperty = Object.prototype.hasOwnProperty

const CONTEXT_FLOW_IN = 1
const CONTEXT_FLOW_OUT = 2
const CONTEXT_BLOCK_IN = 3
const CONTEXT_BLOCK_OUT = 4

const CHOMPING_CLIP = 1
const CHOMPING_STRIP = 2
const CHOMPING_KEEP = 3

// eslint-disable-next-line no-control-regex
const PATTERN_NON_PRINTABLE = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/
const PATTERN_NON_ASCII_LINE_BREAKS = /[\x85\u2028\u2029]/
// eslint-disable-next-line no-useless-escape
const PATTERN_FLOW_INDICATORS = /[,\[\]{}]/
// eslint-disable-next-line no-useless-escape
const PATTERN_TAG_HANDLE = /^(?:!|!!|![0-9A-Za-z-]+!)$/
// eslint-disable-next-line no-useless-escape
const PATTERN_TAG_URI = /^(?:!|[^,\[\]{}])(?:%[0-9a-f]{2}|[0-9a-z\-#;/?:@&=+$,_.!~*'()\[\]])*$/i

function _class (obj) { return Object.prototype.toString.call(obj) }

function isEol (c) {
  return (c === 0x0A/* LF */) || (c === 0x0D/* CR */)
}

function isWhiteSpace (c) {
  return (c === 0x09/* Tab */) || (c === 0x20/* Space */)
}

function isWsOrEol (c) {
  return (c === 0x09/* Tab */) ||
         (c === 0x20/* Space */) ||
         (c === 0x0A/* LF */) ||
         (c === 0x0D/* CR */)
}

function isFlowIndicator (c) {
  return c === 0x2C/* , */ ||
         c === 0x5B/* [ */ ||
         c === 0x5D/* ] */ ||
         c === 0x7B/* { */ ||
         c === 0x7D/* } */
}

function fromHexCode (c) {
  if ((c >= 0x30/* 0 */) && (c <= 0x39/* 9 */)) {
    return c - 0x30
  }

  const lc = c | 0x20

  if ((lc >= 0x61/* a */) && (lc <= 0x66/* f */)) {
    return lc - 0x61 + 10
  }

  return -1
}

function escapedHexLen (c) {
  if (c === 0x78/* x */) { return 2 }
  if (c === 0x75/* u */) { return 4 }
  if (c === 0x55/* U */) { return 8 }
  return 0
}

function fromDecimalCode (c) {
  if ((c >= 0x30/* 0 */) && (c <= 0x39/* 9 */)) {
    return c - 0x30
  }

  return -1
}

function simpleEscapeSequence (c) {
  switch (c) {
    case 0x30/* 0 */: return '\x00'
    case 0x61/* a */: return '\x07'
    case 0x62/* b */: return '\x08'
    case 0x74/* t */: return '\x09'
    case 0x09/* Tab */: return '\x09'
    case 0x6E/* n */: return '\x0A'
    case 0x76/* v */: return '\x0B'
    case 0x66/* f */: return '\x0C'
    case 0x72/* r */: return '\x0D'
    case 0x65/* e */: return '\x1B'
    case 0x20/* Space */: return ' '
    case 0x22/* " */: return '\x22'
    case 0x2F/* / */: return '/'
    case 0x5C/* \ */: return '\x5C'
    case 0x4E/* N */: return '\x85'
    case 0x5F/* _ */: return '\xA0'
    case 0x4C/* L */: return '\u2028'
    case 0x50/* P */: return '\u2029'
    default: return ''
  }
}

function charFromCodepoint (c) {
  if (c <= 0xFFFF) {
    return String.fromCharCode(c)
  }
  // Encode UTF-16 surrogate pair
  // https://en.wikipedia.org/wiki/UTF-16#Code_points_U.2B010000_to_U.2B10FFFF
  return String.fromCharCode(
    ((c - 0x010000) >> 10) + 0xD800,
    ((c - 0x010000) & 0x03FF) + 0xDC00
  )
}

// set a property of a literal object, while protecting against prototype pollution,
// see https://github.com/nodeca/js-yaml/issues/164 for more details
function setProperty (object, key, value) {
  // used for this specific key only because Object.defineProperty is slow
  if (key === '__proto__') {
    Object.defineProperty(object, key, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: value
    })
  } else {
    object[key] = value
  }
}

const simpleEscapeCheck = new Array(256) // integer, for fast access
const simpleEscapeMap = new Array(256)
for (let i = 0; i < 256; i++) {
  simpleEscapeCheck[i] = simpleEscapeSequence(i) ? 1 : 0
  simpleEscapeMap[i] = simpleEscapeSequence(i)
}

function State (input, options) {
  this.input = input

  this.filename = options['filename'] || null
  this.schema = options['schema'] || DEFAULT_SCHEMA
  this.onWarning = options['onWarning'] || null
  // (Hidden) Remove? makes the loader to expect YAML 1.1 documents
  // if such documents have no explicit %YAML directive
  this.legacy = options['legacy'] || false

  this.json = options['json'] || false
  this.listener = options['listener'] || null
  this.maxDepth = typeof options['maxDepth'] === 'number' ? options['maxDepth'] : 100
  this.maxTotalMergeKeys = typeof options['maxTotalMergeKeys'] === 'number' ? options['maxTotalMergeKeys'] : 10000

  this.implicitTypes = this.schema.compiledImplicit
  this.typeMap = this.schema.compiledTypeMap

  this.length = input.length
  this.position = 0
  this.line = 0
  this.lineStart = 0
  this.lineIndent = 0
  this.depth = 0
  this.totalMergeKeys = 0

  // position of first leading tab in the current line,
  // used to make sure there are no tabs in the indentation
  this.firstTabInLine = -1

  this.documents = []
  this.anchorMapTransactions = []

  /*
  this.version;
  this.checkLineBreaks;
  this.tagMap;
  this.anchorMap;
  this.tag;
  this.anchor;
  this.kind;
  this.result; */
}

function generateError (state, message) {
  const mark = {
    name: state.filename,
    buffer: state.input.slice(0, -1), // omit trailing \0
    position: state.position,
    line: state.line,
    column: state.position - state.lineStart
  }

  mark.snippet = makeSnippet(mark)

  return new YAMLException(message, mark)
}

function throwError (state, message) {
  throw generateError(state, message)
}

function throwWarning (state, message) {
  if (state.onWarning) {
    state.onWarning.call(null, generateError(state, message))
  }
}

function storeAnchor (state, name, value) {
  const transactions = state.anchorMapTransactions

  if (transactions.length !== 0) {
    const transaction = transactions[transactions.length - 1]

    if (!_hasOwnProperty.call(transaction, name)) {
      transaction[name] = {
        existed: _hasOwnProperty.call(state.anchorMap, name),
        value: state.anchorMap[name]
      }
    }
  }

  state.anchorMap[name] = value
}

function beginAnchorTransaction (state) {
  state.anchorMapTransactions.push(Object.create(null))
}

function commitAnchorTransaction (state) {
  const transaction = state.anchorMapTransactions.pop()
  const transactions = state.anchorMapTransactions

  if (transactions.length === 0) return

  const parent = transactions[transactions.length - 1]
  const names = Object.keys(transaction)

  for (let index = 0, length = names.length; index < length; index += 1) {
    const name = names[index]

    if (!_hasOwnProperty.call(parent, name)) {
      parent[name] = transaction[name]
    }
  }
}

function rollbackAnchorTransaction (state) {
  const transaction = state.anchorMapTransactions.pop()
  const names = Object.keys(transaction)

  for (let index = names.length - 1; index >= 0; index -= 1) {
    const entry = transaction[names[index]]

    if (entry.existed) {
      state.anchorMap[names[index]] = entry.value
    } else {
      delete state.anchorMap[names[index]]
    }
  }
}

function snapshotState (state) {
  return {
    position: state.position,
    line: state.line,
    lineStart: state.lineStart,
    lineIndent: state.lineIndent,
    firstTabInLine: state.firstTabInLine,
    tag: state.tag,
    anchor: state.anchor,
    kind: state.kind,
    result: state.result
  }
}

function restoreState (state, snapshot) {
  state.position = snapshot.position
  state.line = snapshot.line
  state.lineStart = snapshot.lineStart
  state.lineIndent = snapshot.lineIndent
  state.firstTabInLine = snapshot.firstTabInLine
  state.tag = snapshot.tag
  state.anchor = snapshot.anchor
  state.kind = snapshot.kind
  state.result = snapshot.result
}

const directiveHandlers = {

  YAML: function handleYamlDirective (state, name, args) {
    if (state.version !== null) {
      throwError(state, 'duplication of %YAML directive')
    }

    if (args.length !== 1) {
      throwError(state, 'YAML directive accepts exactly one argument')
    }

    const match = /^([0-9]+)\.([0-9]+)$/.exec(args[0])

    if (match === null) {
      throwError(state, 'ill-formed argument of the YAML directive')
    }

    const major = parseInt(match[1], 10)
    const minor = parseInt(match[2], 10)

    if (major !== 1) {
      throwError(state, 'unacceptable YAML version of the document')
    }

    state.version = args[0]
    state.checkLineBreaks = (minor < 2)

    if (minor !== 1 && minor !== 2) {
      throwWarning(state, 'unsupported YAML version of the document')
    }
  },

  TAG: function handleTagDirective (state, name, args) {
    let prefix

    if (args.length !== 2) {
      throwError(state, 'TAG directive accepts exactly two arguments')
    }

    const handle = args[0]
    prefix = args[1]

    if (!PATTERN_TAG_HANDLE.test(handle)) {
      throwError(state, 'ill-formed tag handle (first argument) of the TAG directive')
    }

    if (_hasOwnProperty.call(state.tagMap, handle)) {
      throwError(state, 'there is a previously declared suffix for "' + handle + '" tag handle')
    }

    if (!PATTERN_TAG_URI.test(prefix)) {
      throwError(state, 'ill-formed tag prefix (second argument) of the TAG directive')
    }

    try {
      prefix = decodeURIComponent(prefix)
    } catch (err) {
      throwError(state, 'tag prefix is malformed: ' + prefix)
    }

    state.tagMap[handle] = prefix
  }
}

function captureSegment (state, start, end, checkJson) {
  if (start < end) {
    const _result = state.input.slice(start, end)

    if (checkJson) {
      for (let _position = 0, _length = _result.length; _position < _length; _position += 1) {
        const _character = _result.charCodeAt(_position)
        if (!(_character === 0x09 ||
              (_character >= 0x20 && _character <= 0x10FFFF))) {
          throwError(state, 'expected valid JSON character')
        }
      }
    } else if (PATTERN_NON_PRINTABLE.test(_result)) {
      throwError(state, 'the stream contains non-printable characters')
    }

    state.result += _result
  }
}

function chargeMergeWork (state) {
  state.totalMergeKeys++

  if (state.maxTotalMergeKeys !== -1 && state.totalMergeKeys > state.maxTotalMergeKeys) {
    throwError(state, 'merge keys exceeded maxTotalMergeKeys (' + state.maxTotalMergeKeys + ')')
  }
}

function mergeMappings (state, destination, source, overridableKeys) {
  if (!common.isObject(source)) {
    throwError(state, 'cannot merge mappings; the provided source object is unacceptable')
  }

  // Count the source mapping itself to bound sequences of empty mappings.
  chargeMergeWork(state)

  const sourceKeys = Object.keys(source)

  for (let index = 0, quantity = sourceKeys.length; index < quantity; index += 1) {
    const key = sourceKeys[index]

    chargeMergeWork(state)

    if (!_hasOwnProperty.call(destination, key)) {
      setProperty(destination, key, source[key])
      overridableKeys[key] = true
    }
  }
}

function storeMappingPair (state, _result, overridableKeys, keyTag, keyNode, valueNode,
  startLine, startLineStart, startPos) {
  // The output is a plain object here, so keys can only be strings.
  // We need to convert keyNode to a string, but doing so can hang the process
  // (deeply nested arrays that explode exponentially using aliases).
  if (Array.isArray(keyNode)) {
    keyNode = Array.prototype.slice.call(keyNode)

    for (let index = 0, quantity = keyNode.length; index < quantity; index += 1) {
      if (Array.isArray(keyNode[index])) {
        throwError(state, 'nested arrays are not supported inside keys')
      }

      if (typeof keyNode === 'object' && _class(keyNode[index]) === '[object Object]') {
        keyNode[index] = '[object Object]'
      }
    }
  }

  // Avoid code execution in load() via toString property
  // (still use its own toString for arrays, timestamps,
  // and whatever user schema extensions happen to have @@toStringTag)
  if (typeof keyNode === 'object' && _class(keyNode) === '[object Object]') {
    keyNode = '[object Object]'
  }

  keyNode = String(keyNode)

  if (_result === null) {
    _result = {}
  }

  if (keyTag === 'tag:yaml.org,2002:merge') {
    if (Array.isArray(valueNode)) {
      if (valueNode.length > 100) {
        throwError(state, 'abnormal merge sequence size')
      }

      for (let index = 0, quantity = valueNode.length; index < quantity; index += 1) {
        mergeMappings(state, _result, valueNode[index], overridableKeys)
      }
    } else {
      mergeMappings(state, _result, valueNode, overridableKeys)
    }
  } else {
    if (!state.json &&
        !_hasOwnProperty.call(overridableKeys, keyNode) &&
        _hasOwnProperty.call(_result, keyNode)) {
      state.line = startLine || state.line
      state.lineStart = startLineStart || state.lineStart
      state.position = startPos || state.position
      throwError(state, 'duplicated mapping key')
    }

    setProperty(_result, keyNode, valueNode)
    delete overridableKeys[keyNode]
  }

  return _result
}

function readLineBreak (state) {
  const ch = state.input.charCodeAt(state.position)

  if (ch === 0x0A/* LF */) {
    state.position++
  } else if (ch === 0x0D/* CR */) {
    state.position++
    if (state.input.charCodeAt(state.position) === 0x0A/* LF */) {
      state.position++
    }
  } else {
    throwError(state, 'a line break is expected')
  }

  state.line += 1
  state.lineStart = state.position
  state.firstTabInLine = -1
}

function skipSeparationSpace (state, allowComments, checkIndent) {
  let lineBreaks = 0
  let ch = state.input.charCodeAt(state.position)

  while (ch !== 0) {
    while (isWhiteSpace(ch)) {
      if (ch === 0x09/* Tab */ && state.firstTabInLine === -1) {
        state.firstTabInLine = state.position
      }
      ch = state.input.charCodeAt(++state.position)
    }

    if (allowComments && ch === 0x23/* # */) {
      do {
        ch = state.input.charCodeAt(++state.position)
      } while (ch !== 0x0A/* LF */ && ch !== 0x0D/* CR */ && ch !== 0)
    }

    if (isEol(ch)) {
      readLineBreak(state)

      ch = state.input.charCodeAt(state.position)
      lineBreaks++
      state.lineIndent = 0

      while (ch === 0x20/* Space */) {
        state.lineIndent++
        ch = state.input.charCodeAt(++state.position)
      }
    } else {
      break
    }
  }

  if (checkIndent !== -1 && lineBreaks !== 0 && state.lineIndent < checkIndent) {
    throwWarning(state, 'deficient indentation')
  }

  return lineBreaks
}

function testDocumentSeparator (state) {
  let _position = state.position
  let ch = state.input.charCodeAt(_position)

  // Condition state.position === state.lineStart is tested
  // in parent on each call, for efficiency. No needs to test here again.
  if ((ch === 0x2D/* - */ || ch === 0x2E/* . */) &&
      ch === state.input.charCodeAt(_position + 1) &&
      ch === state.input.charCodeAt(_position + 2)) {
    _position += 3

    ch = state.input.charCodeAt(_position)

    if (ch === 0 || isWsOrEol(ch)) {
      return true
    }
  }

  return false
}

function writeFoldedLines (state, count) {
  if (count === 1) {
    state.result += ' '
  } else if (count > 1) {
    state.result += common.repeat('\n', count - 1)
  }
}

function readPlainScalar (state, nodeIndent, withinFlowCollection) {
  let captureStart
  let captureEnd
  let hasPendingContent
  let _line
  let _lineStart
  let _lineIndent
  const _kind = state.kind
  const _result = state.result

  let ch = state.input.charCodeAt(state.position)

  if (isWsOrEol(ch) ||
      isFlowIndicator(ch) ||
      ch === 0x23/* # */ ||
      ch === 0x26/* & */ ||
      ch === 0x2A/* * */ ||
      ch === 0x21/* ! */ ||
      ch === 0x7C/* | */ ||
      ch === 0x3E/* > */ ||
      ch === 0x27/* ' */ ||
      ch === 0x22/* " */ ||
      ch === 0x25/* % */ ||
      ch === 0x40/* @ */ ||
      ch === 0x60/* ` */) {
    return false
  }

  if (ch === 0x3F/* ? */ || ch === 0x2D/* - */) {
    const following = state.input.charCodeAt(state.position + 1)

    if (isWsOrEol(following) ||
        (withinFlowCollection && isFlowIndicator(following))) {
      return false
    }
  }

  state.kind = 'scalar'
  state.result = ''
  captureStart = captureEnd = state.position
  hasPendingContent = false

  while (ch !== 0) {
    if (ch === 0x3A/* : */) {
      const following = state.input.charCodeAt(state.position + 1)

      if (isWsOrEol(following) ||
          (withinFlowCollection && isFlowIndicator(following))) {
        break
      }
    } else if (ch === 0x23/* # */) {
      const preceding = state.input.charCodeAt(state.position - 1)

      if (isWsOrEol(preceding)) {
        break
      }
    } else if ((state.position === state.lineStart && testDocumentSeparator(state)) ||
               (withinFlowCollection && isFlowIndicator(ch))) {
      break
    } else if (isEol(ch)) {
      _line = state.line
      _lineStart = state.lineStart
      _lineIndent = state.lineIndent
      skipSeparationSpace(state, false, -1)

      if (state.lineIndent >= nodeIndent) {
        hasPendingContent = true
        ch = state.input.charCodeAt(state.position)
        continue
      } else {
        state.position = captureEnd
        state.line = _line
        state.lineStart = _lineStart
        state.lineIndent = _lineIndent
        break
      }
    }

    if (hasPendingContent) {
      captureSegment(state, captureStart, captureEnd, false)
      writeFoldedLines(state, state.line - _line)
      captureStart = captureEnd = state.position
      hasPendingContent = false
    }

    if (!isWhiteSpace(ch)) {
      captureEnd = state.position + 1
    }

    ch = state.input.charCodeAt(++state.position)
  }

  captureSegment(state, captureStart, captureEnd, false)

  if (state.result) {
    return true
  }

  state.kind = _kind
  state.result = _result
  return false
}

function readSingleQuotedScalar (state, nodeIndent) {
  let captureStart
  let captureEnd

  let ch = state.input.charCodeAt(state.position)

  if (ch !== 0x27/* ' */) {
    return false
  }

  state.kind = 'scalar'
  state.result = ''
  state.position++
  captureStart = captureEnd = state.position

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x27/* ' */) {
      captureSegment(state, captureStart, state.position, true)
      ch = state.input.charCodeAt(++state.position)

      if (ch === 0x27/* ' */) {
        captureStart = state.position
        state.position++
        captureEnd = state.position
      } else {
        return true
      }
    } else if (isEol(ch)) {
      captureSegment(state, captureStart, captureEnd, true)
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent))
      captureStart = captureEnd = state.position
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a single quoted scalar')
    } else {
      state.position++
      if (!isWhiteSpace(ch)) {
        captureEnd = state.position
      }
    }
  }

  throwError(state, 'unexpected end of the stream within a single quoted scalar')
}

function readDoubleQuotedScalar (state, nodeIndent) {
  let captureStart
  let captureEnd
  let tmp

  let ch = state.input.charCodeAt(state.position)

  if (ch !== 0x22/* " */) {
    return false
  }

  state.kind = 'scalar'
  state.result = ''
  state.position++
  captureStart = captureEnd = state.position

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    if (ch === 0x22/* " */) {
      captureSegment(state, captureStart, state.position, true)
      state.position++
      return true
    } else if (ch === 0x5C/* \ */) {
      captureSegment(state, captureStart, state.position, true)
      ch = state.input.charCodeAt(++state.position)

      if (isEol(ch)) {
        skipSeparationSpace(state, false, nodeIndent)

        // TODO: rework to inline fn with no type cast?
      } else if (ch < 256 && simpleEscapeCheck[ch]) {
        state.result += simpleEscapeMap[ch]
        state.position++
      } else if ((tmp = escapedHexLen(ch)) > 0) {
        let hexLength = tmp
        let hexResult = 0

        for (; hexLength > 0; hexLength--) {
          ch = state.input.charCodeAt(++state.position)

          if ((tmp = fromHexCode(ch)) >= 0) {
            hexResult = (hexResult << 4) + tmp
          } else {
            throwError(state, 'expected hexadecimal character')
          }
        }

        state.result += charFromCodepoint(hexResult)

        state.position++
      } else {
        throwError(state, 'unknown escape sequence')
      }

      captureStart = captureEnd = state.position
    } else if (isEol(ch)) {
      captureSegment(state, captureStart, captureEnd, true)
      writeFoldedLines(state, skipSeparationSpace(state, false, nodeIndent))
      captureStart = captureEnd = state.position
    } else if (state.position === state.lineStart && testDocumentSeparator(state)) {
      throwError(state, 'unexpected end of the document within a double quoted scalar')
    } else {
      state.position++
      if (!isWhiteSpace(ch)) {
        captureEnd = state.position
      }
    }
  }

  throwError(state, 'unexpected end of the stream within a double quoted scalar')
}

function readFlowCollection (state, nodeIndent) {
  let readNext = true
  let _line
  let _lineStart
  let _pos
  const _tag = state.tag
  let _result
  const _anchor = state.anchor
  let terminator
  let isPair
  let isExplicitPair
  let isMapping
  const overridableKeys = Object.create(null)
  let keyNode
  let keyTag
  let valueNode

  let ch = state.input.charCodeAt(state.position)

  if (ch === 0x5B/* [ */) {
    terminator = 0x5D/* ] */
    isMapping = false
    _result = []
  } else if (ch === 0x7B/* { */) {
    terminator = 0x7D/* } */
    isMapping = true
    _result = {}
  } else {
    return false
  }

  if (state.anchor !== null) {
    storeAnchor(state, state.anchor, _result)
  }

  ch = state.input.charCodeAt(++state.position)

  while (ch !== 0) {
    skipSeparationSpace(state, true, nodeIndent)

    ch = state.input.charCodeAt(state.position)

    if (ch === terminator) {
      state.position++
      state.tag = _tag
      state.anchor = _anchor
      state.kind = isMapping ? 'mapping' : 'sequence'
      state.result = _result
      return true
    } else if (!readNext) {
      throwError(state, 'missed comma between flow collection entries')
    } else if (ch === 0x2C/* , */) {
      // "flow collection entries can never be completely empty", as per YAML 1.2, section 7.4
      throwError(state, "expected the node content, but found ','")
    }

    keyTag = keyNode = valueNode = null
    isPair = isExplicitPair = false

    if (ch === 0x3F/* ? */) {
      const following = state.input.charCodeAt(state.position + 1)

      if (isWsOrEol(following)) {
        isPair = isExplicitPair = true
        state.position++
        skipSeparationSpace(state, true, nodeIndent)
      }
    }

    _line = state.line // Save the current line.
    _lineStart = state.lineStart
    _pos = state.position
    composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true)
    keyTag = state.tag
    keyNode = state.result
    skipSeparationSpace(state, true, nodeIndent)

    ch = state.input.charCodeAt(state.position)

    if ((isExplicitPair || state.line === _line) && ch === 0x3A/* : */) {
      isPair = true
      ch = state.input.charCodeAt(++state.position)
      skipSeparationSpace(state, true, nodeIndent)
      composeNode(state, nodeIndent, CONTEXT_FLOW_IN, false, true)
      valueNode = state.result
    }

    if (isMapping) {
      storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos)
    } else if (isPair) {
      _result.push(storeMappingPair(state, null, overridableKeys, keyTag, keyNode, valueNode, _line, _lineStart, _pos))
    } else {
      _result.push(keyNode)
    }

    skipSeparationSpace(state, true, nodeIndent)

    ch = state.input.charCodeAt(state.position)

    if (ch === 0x2C/* , */) {
      readNext = true
      ch = state.input.charCodeAt(++state.position)
    } else {
      readNext = false
    }
  }

  throwError(state, 'unexpected end of the stream within a flow collection')
}

function readBlockScalar (state, nodeIndent) {
  let folding
  let chomping = CHOMPING_CLIP
  let didReadContent = false
  let detectedIndent = false
  let textIndent = nodeIndent
  let emptyLines = 0
  let atMoreIndented = false
  let tmp

  let ch = state.input.charCodeAt(state.position)

  if (ch === 0x7C/* | */) {
    folding = false
  } else if (ch === 0x3E/* > */) {
    folding = true
  } else {
    return false
  }

  state.kind = 'scalar'
  state.result = ''

  while (ch !== 0) {
    ch = state.input.charCodeAt(++state.position)

    if (ch === 0x2B/* + */ || ch === 0x2D/* - */) {
      if (CHOMPING_CLIP === chomping) {
        chomping = (ch === 0x2B/* + */) ? CHOMPING_KEEP : CHOMPING_STRIP
      } else {
        throwError(state, 'repeat of a chomping mode identifier')
      }
    } else if ((tmp = fromDecimalCode(ch)) >= 0) {
      if (tmp === 0) {
        throwError(state, 'bad explicit indentation width of a block scalar; it cannot be less than one')
      } else if (!detectedIndent) {
        textIndent = nodeIndent + tmp - 1
        detectedIndent = true
      } else {
        throwError(state, 'repeat of an indentation width identifier')
      }
    } else {
      break
    }
  }

  if (isWhiteSpace(ch)) {
    do { ch = state.input.charCodeAt(++state.position) }
    while (isWhiteSpace(ch))

    if (ch === 0x23/* # */) {
      do { ch = state.input.charCodeAt(++state.position) }
      while (!isEol(ch) && (ch !== 0))
    }
  }

  while (ch !== 0) {
    readLineBreak(state)
    state.lineIndent = 0

    ch = state.input.charCodeAt(state.position)

    // eslint-disable-next-line no-unmodified-loop-condition
    while ((!detectedIndent || state.lineIndent < textIndent) &&
           (ch === 0x20/* Space */)) {
      state.lineIndent++
      ch = state.input.charCodeAt(++state.position)
    }

    if (!detectedIndent && state.lineIndent > textIndent) {
      textIndent = state.lineIndent
    }

    if (isEol(ch)) {
      emptyLines++
      continue
    }

    if (!detectedIndent && textIndent === 0) {
      throwError(state, 'missing indentation for block scalar')
    }

    // End of the scalar.
    if (state.lineIndent < textIndent) {
      // Perform the chomping.
      if (chomping === CHOMPING_KEEP) {
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines)
      } else if (chomping === CHOMPING_CLIP) {
        if (didReadContent) { // i.e. only if the scalar is not empty.
          state.result += '\n'
        }
      }

      // Break this `while` cycle and go to the funciton's epilogue.
      break
    }

    // Folded style: use fancy rules to handle line breaks.
    if (folding) {
      // Lines starting with white space characters (more-indented lines) are not folded.
      if (isWhiteSpace(ch)) {
        atMoreIndented = true
        // except for the first content line (cf. Example 8.1)
        state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines)

      // End of more-indented block.
      } else if (atMoreIndented) {
        atMoreIndented = false
        state.result += common.repeat('\n', emptyLines + 1)

      // Just one line break - perceive as the same line.
      } else if (emptyLines === 0) {
        if (didReadContent) { // i.e. only if we have already read some scalar content.
          state.result += ' '
        }

      // Several line breaks - perceive as different lines.
      } else {
        state.result += common.repeat('\n', emptyLines)
      }

    // Literal style: just add exact number of line breaks between content lines.
    } else {
      // Keep all line breaks except the header line break.
      state.result += common.repeat('\n', didReadContent ? 1 + emptyLines : emptyLines)
    }

    didReadContent = true
    detectedIndent = true
    emptyLines = 0
    const captureStart = state.position

    while (!isEol(ch) && (ch !== 0)) {
      ch = state.input.charCodeAt(++state.position)
    }

    captureSegment(state, captureStart, state.position, false)
  }

  return true
}

function readBlockSequence (state, nodeIndent) {
  const _tag = state.tag
  const _anchor = state.anchor
  const _result = []
  let detected = false

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false

  if (state.anchor !== null) {
    storeAnchor(state, state.anchor, _result)
  }

  let ch = state.input.charCodeAt(state.position)

  while (ch !== 0) {
    if (state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine
      throwError(state, 'tab characters must not be used in indentation')
    }

    if (ch !== 0x2D/* - */) {
      break
    }

    const following = state.input.charCodeAt(state.position + 1)

    if (!isWsOrEol(following)) {
      break
    }

    detected = true
    state.position++

    if (skipSeparationSpace(state, true, -1)) {
      if (state.lineIndent <= nodeIndent) {
        _result.push(null)
        ch = state.input.charCodeAt(state.position)
        continue
      }
    }

    const _line = state.line
    composeNode(state, nodeIndent, CONTEXT_BLOCK_IN, false, true)
    _result.push(state.result)
    skipSeparationSpace(state, true, -1)

    ch = state.input.charCodeAt(state.position)

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a sequence entry')
    } else if (state.lineIndent < nodeIndent) {
      break
    }
  }

  if (detected) {
    state.tag = _tag
    state.anchor = _anchor
    state.kind = 'sequence'
    state.result = _result
    return true
  }
  return false
}

function readBlockMapping (state, nodeIndent, flowIndent) {
  let allowCompact
  let _keyLine
  let _keyLineStart
  let _keyPos
  const _tag = state.tag
  const _anchor = state.anchor
  const _result = {}
  const overridableKeys = Object.create(null)
  let keyTag = null
  let keyNode = null
  let valueNode = null
  let atExplicitKey = false
  let detected = false

  // there is a leading tab before this token, so it can't be a block sequence/mapping;
  // it can still be flow sequence/mapping or a scalar
  if (state.firstTabInLine !== -1) return false

  if (state.anchor !== null) {
    storeAnchor(state, state.anchor, _result)
  }

  let ch = state.input.charCodeAt(state.position)

  while (ch !== 0) {
    if (!atExplicitKey && state.firstTabInLine !== -1) {
      state.position = state.firstTabInLine
      throwError(state, 'tab characters must not be used in indentation')
    }

    const following = state.input.charCodeAt(state.position + 1)
    const _line = state.line // Save the current line.

    //
    // Explicit notation case. There are two separate blocks:
    // first for the key (denoted by "?") and second for the value (denoted by ":")
    //
    if ((ch === 0x3F/* ? */ || ch === 0x3A/* : */) && isWsOrEol(following)) {
      if (ch === 0x3F/* ? */) {
        if (atExplicitKey) {
          storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos)
          keyTag = keyNode = valueNode = null
        }

        detected = true
        atExplicitKey = true
        allowCompact = true
      } else if (atExplicitKey) {
        // i.e. 0x3A/* : */ === character after the explicit key.
        atExplicitKey = false
        allowCompact = true
      } else {
        throwError(state, 'incomplete explicit mapping pair; a key node is missed; or followed by a non-tabulated empty line')
      }

      state.position += 1
      ch = following

    //
    // Implicit notation case. Flow-style node as the key first, then ":", and the value.
    //
    } else {
      _keyLine = state.line
      _keyLineStart = state.lineStart
      _keyPos = state.position

      if (!composeNode(state, flowIndent, CONTEXT_FLOW_OUT, false, true)) {
        // Neither implicit nor explicit notation.
        // Reading is done. Go to the epilogue.
        break
      }

      if (state.line === _line) {
        ch = state.input.charCodeAt(state.position)

        while (isWhiteSpace(ch)) {
          ch = state.input.charCodeAt(++state.position)
        }

        if (ch === 0x3A/* : */) {
          ch = state.input.charCodeAt(++state.position)

          if (!isWsOrEol(ch)) {
            throwError(state, 'a whitespace character is expected after the key-value separator within a block mapping')
          }

          if (atExplicitKey) {
            storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos)
            keyTag = keyNode = valueNode = null
          }

          detected = true
          atExplicitKey = false
          allowCompact = false
          keyTag = state.tag
          keyNode = state.result
        } else if (detected) {
          throwError(state, 'can not read an implicit mapping pair; a colon is missed')
        } else {
          state.tag = _tag
          state.anchor = _anchor
          return true // Keep the result of `composeNode`.
        }
      } else if (detected) {
        throwError(state, 'can not read a block mapping entry; a multiline key may not be an implicit key')
      } else {
        state.tag = _tag
        state.anchor = _anchor
        return true // Keep the result of `composeNode`.
      }
    }

    //
    // Common reading code for both explicit and implicit notations.
    //
    if (state.line === _line || state.lineIndent > nodeIndent) {
      if (atExplicitKey) {
        _keyLine = state.line
        _keyLineStart = state.lineStart
        _keyPos = state.position
      }

      if (composeNode(state, nodeIndent, CONTEXT_BLOCK_OUT, true, allowCompact)) {
        if (atExplicitKey) {
          keyNode = state.result
        } else {
          valueNode = state.result
        }
      }

      if (!atExplicitKey) {
        storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, valueNode, _keyLine, _keyLineStart, _keyPos)
        keyTag = keyNode = valueNode = null
      }

      skipSeparationSpace(state, true, -1)
      ch = state.input.charCodeAt(state.position)
    }

    if ((state.line === _line || state.lineIndent > nodeIndent) && (ch !== 0)) {
      throwError(state, 'bad indentation of a mapping entry')
    } else if (state.lineIndent < nodeIndent) {
      break
    }
  }

  //
  // Epilogue.
  //

  // Special case: last mapping's node contains only the key in explicit notation.
  if (atExplicitKey) {
    storeMappingPair(state, _result, overridableKeys, keyTag, keyNode, null, _keyLine, _keyLineStart, _keyPos)
  }

  // Expose the resulting mapping.
  if (detected) {
    state.tag = _tag
    state.anchor = _anchor
    state.kind = 'mapping'
    state.result = _result
  }

  return detected
}

function readTagProperty (state) {
  let isVerbatim = false
  let isNamed = false
  let tagHandle
  let tagName

  let ch = state.input.charCodeAt(state.position)

  if (ch !== 0x21/* ! */) return false

  if (state.tag !== null) {
    throwError(state, 'duplication of a tag property')
  }

  ch = state.input.charCodeAt(++state.position)

  if (ch === 0x3C/* < */) {
    isVerbatim = true
    ch = state.input.charCodeAt(++state.position)
  } else if (ch === 0x21/* ! */) {
    isNamed = true
    tagHandle = '!!'
    ch = state.input.charCodeAt(++state.position)
  } else {
    tagHandle = '!'
  }

  let _position = state.position

  if (isVerbatim) {
    do { ch = state.input.charCodeAt(++state.position) }
    while (ch !== 0 && ch !== 0x3E/* > */)

    if (state.position < state.length) {
      tagName = state.input.slice(_position, state.position)
      ch = state.input.charCodeAt(++state.position)
    } else {
      throwError(state, 'unexpected end of the stream within a verbatim tag')
    }
  } else {
    while (ch !== 0 && !isWsOrEol(ch)) {
      if (ch === 0x21/* ! */) {
        if (!isNamed) {
          tagHandle = state.input.slice(_position - 1, state.position + 1)

          if (!PATTERN_TAG_HANDLE.test(tagHandle)) {
            throwError(state, 'named tag handle cannot contain such characters')
          }

          isNamed = true
          _position = state.position + 1
        } else {
          throwError(state, 'tag suffix cannot contain exclamation marks')
        }
      }

      ch = state.input.charCodeAt(++state.position)
    }

    tagName = state.input.slice(_position, state.position)

    if (PATTERN_FLOW_INDICATORS.test(tagName)) {
      throwError(state, 'tag suffix cannot contain flow indicator characters')
    }
  }

  if (tagName && !PATTERN_TAG_URI.test(tagName)) {
    throwError(state, 'tag name cannot contain such characters: ' + tagName)
  }

  try {
    tagName = decodeURIComponent(tagName)
  } catch (err) {
    throwError(state, 'tag name is malformed: ' + tagName)
  }

  if (isVerbatim) {
    state.tag = tagName
  } else if (_hasOwnProperty.call(state.tagMap, tagHandle)) {
    state.tag = state.tagMap[tagHandle] + tagName
  } else if (tagHandle === '!') {
    state.tag = '!' + tagName
  } else if (tagHandle === '!!') {
    state.tag = 'tag:yaml.org,2002:' + tagName
  } else {
    throwError(state, 'undeclared tag handle "' + tagHandle + '"')
  }

  return true
}

function readAnchorProperty (state) {
  let ch = state.input.charCodeAt(state.position)

  if (ch !== 0x26/* & */) return false

  if (state.anchor !== null) {
    throwError(state, 'duplication of an anchor property')
  }

  ch = state.input.charCodeAt(++state.position)
  const _position = state.position

  while (ch !== 0 && !isWsOrEol(ch) && !isFlowIndicator(ch)) {
    ch = state.input.charCodeAt(++state.position)
  }

  if (state.position === _position) {
    throwError(state, 'name of an anchor node must contain at least one character')
  }

  state.anchor = state.input.slice(_position, state.position)
  return true
}

function readAlias (state) {
  let ch = state.input.charCodeAt(state.position)

  if (ch !== 0x2A/* * */) return false

  ch = state.input.charCodeAt(++state.position)
  const _position = state.position

  while (ch !== 0 && !isWsOrEol(ch) && !isFlowIndicator(ch)) {
    ch = state.input.charCodeAt(++state.position)
  }

  if (state.position === _position) {
    throwError(state, 'name of an alias node must contain at least one character')
  }

  const alias = state.input.slice(_position, state.position)

  if (!_hasOwnProperty.call(state.anchorMap, alias)) {
    throwError(state, 'unidentified alias "' + alias + '"')
  }

  state.result = state.anchorMap[alias]
  skipSeparationSpace(state, true, -1)
  return true
}

function tryReadBlockMappingFromProperty (state, propertyStart, nodeIndent, flowIndent) {
  const fallbackState = snapshotState(state)

  beginAnchorTransaction(state)
  restoreState(state, propertyStart)

  // Re-read the leading properties as part of the first implicit key, not as
  // properties of the current node.
  state.tag = null
  state.anchor = null
  state.kind = null
  state.result = null

  if (readBlockMapping(state, nodeIndent, flowIndent) && state.kind === 'mapping') {
    commitAnchorTransaction(state)
    return true
  }

  rollbackAnchorTransaction(state)
  restoreState(state, fallbackState)
  return false
}

function composeNode (state, parentIndent, nodeContext, allowToSeek, allowCompact) {
  let allowBlockScalars
  let allowBlockCollections
  let indentStatus = 1 // 1: this>parent, 0: this=parent, -1: this<parent
  let atNewLine = false
  let hasContent = false
  let propertyStart = null
  let type
  let flowIndent
  let blockIndent

  if (state.depth >= state.maxDepth) {
    throwError(state, 'nesting exceeded maxDepth (' + state.maxDepth + ')')
  }

  state.depth += 1

  if (state.listener !== null) {
    state.listener('open', state)
  }

  state.tag = null
  state.anchor = null
  state.kind = null
  state.result = null

  const allowBlockStyles = allowBlockScalars = allowBlockCollections =
    CONTEXT_BLOCK_OUT === nodeContext ||
    CONTEXT_BLOCK_IN === nodeContext

  if (allowToSeek) {
    if (skipSeparationSpace(state, true, -1)) {
      atNewLine = true

      if (state.lineIndent > parentIndent) {
        indentStatus = 1
      } else if (state.lineIndent === parentIndent) {
        indentStatus = 0
      } else if (state.lineIndent < parentIndent) {
        indentStatus = -1
      }
    }
  }

  if (indentStatus === 1) {
    while (true) {
      const ch = state.input.charCodeAt(state.position)
      const propertyState = snapshotState(state)

      // A duplicate property token after a line break can be the first key of
      // a nested block mapping, e.g. `!!map\n  !!str key: value`.
      if (atNewLine &&
          ((ch === 0x21/* ! */ && state.tag !== null) ||
           (ch === 0x26/* & */ && state.anchor !== null))) {
        break
      }

      if (!readTagProperty(state) && !readAnchorProperty(state)) {
        break
      }

      if (propertyStart === null) {
        propertyStart = propertyState
      }

      if (skipSeparationSpace(state, true, -1)) {
        atNewLine = true
        allowBlockCollections = allowBlockStyles

        if (state.lineIndent > parentIndent) {
          indentStatus = 1
        } else if (state.lineIndent === parentIndent) {
          indentStatus = 0
        } else if (state.lineIndent < parentIndent) {
          indentStatus = -1
        }
      } else {
        allowBlockCollections = false
      }
    }
  }

  if (allowBlockCollections) {
    allowBlockCollections = atNewLine || allowCompact
  }

  if (indentStatus === 1 || CONTEXT_BLOCK_OUT === nodeContext) {
    if (CONTEXT_FLOW_IN === nodeContext || CONTEXT_FLOW_OUT === nodeContext) {
      flowIndent = parentIndent
    } else {
      flowIndent = parentIndent + 1
    }

    blockIndent = state.position - state.lineStart

    if (indentStatus === 1) {
      if ((allowBlockCollections &&
          (readBlockSequence(state, blockIndent) || readBlockMapping(state, blockIndent, flowIndent))) ||
          readFlowCollection(state, flowIndent)) {
        hasContent = true
      } else {
        const ch = state.input.charCodeAt(state.position)

        if (propertyStart !== null && allowBlockStyles && !allowBlockCollections &&
            ch !== 0x7C/* | */ && ch !== 0x3E/* > */ &&
            tryReadBlockMappingFromProperty(
              state,
              propertyStart,
              propertyStart.position - propertyStart.lineStart,
              flowIndent
            )) {
          hasContent = true
        } else if ((allowBlockScalars && readBlockScalar(state, flowIndent)) ||
            readSingleQuotedScalar(state, flowIndent) ||
            readDoubleQuotedScalar(state, flowIndent)) {
          hasContent = true
        } else if (readAlias(state)) {
          hasContent = true

          if (state.tag !== null || state.anchor !== null) {
            throwError(state, 'alias node should not have any properties')
          }
        } else if (readPlainScalar(state, flowIndent, CONTEXT_FLOW_IN === nodeContext)) {
          hasContent = true

          if (state.tag === null) {
            state.tag = '?'
          }
        }

        if (state.anchor !== null) {
          storeAnchor(state, state.anchor, state.result)
        }
      }
    } else if (indentStatus === 0) {
      // Special case: block sequences are allowed to have same indentation level as the parent.
      // http://www.yaml.org/spec/1.2/spec.html#id2799784
      hasContent = allowBlockCollections && readBlockSequence(state, blockIndent)
    }
  }

  if (state.tag === null) {
    if (state.anchor !== null) {
      storeAnchor(state, state.anchor, state.result)
    }
  } else if (state.tag === '?') {
    // Implicit resolving is not allowed for non-scalar types, and '?'
    // non-specific tag is only automatically assigned to plain scalars.
    //
    // We only need to check kind conformity in case user explicitly assigns '?'
    // tag, for example like this: "!<?> [0]"
    //
    if (state.result !== null && state.kind !== 'scalar') {
      throwError(state, 'unacceptable node kind for !<?> tag; it should be "scalar", not "' + state.kind + '"')
    }

    for (let typeIndex = 0, typeQuantity = state.implicitTypes.length; typeIndex < typeQuantity; typeIndex += 1) {
      type = state.implicitTypes[typeIndex]

      if (type.resolve(state.result)) { // `state.result` updated in resolver if matched
        state.result = type.construct(state.result)
        state.tag = type.tag
        if (state.anchor !== null) {
          storeAnchor(state, state.anchor, state.result)
        }
        break
      }
    }
  } else if (state.tag !== '!') {
    if (_hasOwnProperty.call(state.typeMap[state.kind || 'fallback'], state.tag)) {
      type = state.typeMap[state.kind || 'fallback'][state.tag]
    } else {
      // looking for multi type
      type = null
      const typeList = state.typeMap.multi[state.kind || 'fallback']

      for (let typeIndex = 0, typeQuantity = typeList.length; typeIndex < typeQuantity; typeIndex += 1) {
        if (state.tag.slice(0, typeList[typeIndex].tag.length) === typeList[typeIndex].tag) {
          type = typeList[typeIndex]
          break
        }
      }
    }

    if (!type) {
      throwError(state, 'unknown tag !<' + state.tag + '>')
    }

    if (state.result !== null && type.kind !== state.kind) {
      throwError(state, 'unacceptable node kind for !<' + state.tag + '> tag; it should be "' + type.kind + '", not "' + state.kind + '"')
    }

    if (!type.resolve(state.result, state.tag)) { // `state.result` updated in resolver if matched
      throwError(state, 'cannot resolve a node with !<' + state.tag + '> explicit tag')
    } else {
      state.result = type.construct(state.result, state.tag)
      if (state.anchor !== null) {
        storeAnchor(state, state.anchor, state.result)
      }
    }
  }

  if (state.listener !== null) {
    state.listener('close', state)
  }

  state.depth -= 1
  return state.tag !== null || state.anchor !== null || hasContent
}

function readDocument (state) {
  const documentStart = state.position
  let hasDirectives = false
  let ch

  state.version = null
  state.checkLineBreaks = state.legacy
  state.tagMap = Object.create(null)
  state.anchorMap = Object.create(null)

  while ((ch = state.input.charCodeAt(state.position)) !== 0) {
    skipSeparationSpace(state, true, -1)

    ch = state.input.charCodeAt(state.position)

    if (state.lineIndent > 0 || ch !== 0x25/* % */) {
      break
    }

    hasDirectives = true
    ch = state.input.charCodeAt(++state.position)
    let _position = state.position

    while (ch !== 0 && !isWsOrEol(ch)) {
      ch = state.input.charCodeAt(++state.position)
    }

    const directiveName = state.input.slice(_position, state.position)
    const directiveArgs = []

    if (directiveName.length < 1) {
      throwError(state, 'directive name must not be less than one character in length')
    }

    while (ch !== 0) {
      while (isWhiteSpace(ch)) {
        ch = state.input.charCodeAt(++state.position)
      }

      if (ch === 0x23/* # */) {
        do { ch = state.input.charCodeAt(++state.position) }
        while (ch !== 0 && !isEol(ch))
        break
      }

      if (isEol(ch)) break

      _position = state.position

      while (ch !== 0 && !isWsOrEol(ch)) {
        ch = state.input.charCodeAt(++state.position)
      }

      directiveArgs.push(state.input.slice(_position, state.position))
    }

    if (ch !== 0) readLineBreak(state)

    if (_hasOwnProperty.call(directiveHandlers, directiveName)) {
      directiveHandlers[directiveName](state, directiveName, directiveArgs)
    } else {
      throwWarning(state, 'unknown document directive "' + directiveName + '"')
    }
  }

  skipSeparationSpace(state, true, -1)

  if (state.lineIndent === 0 &&
      state.input.charCodeAt(state.position) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 1) === 0x2D/* - */ &&
      state.input.charCodeAt(state.position + 2) === 0x2D/* - */) {
    state.position += 3
    skipSeparationSpace(state, true, -1)
  } else if (hasDirectives) {
    throwError(state, 'directives end mark is expected')
  }

  composeNode(state, state.lineIndent - 1, CONTEXT_BLOCK_OUT, false, true)
  skipSeparationSpace(state, true, -1)

  if (state.checkLineBreaks &&
      PATTERN_NON_ASCII_LINE_BREAKS.test(state.input.slice(documentStart, state.position))) {
    throwWarning(state, 'non-ASCII line breaks are interpreted as content')
  }

  state.documents.push(state.result)

  if (state.position === state.lineStart && testDocumentSeparator(state)) {
    if (state.input.charCodeAt(state.position) === 0x2E/* . */) {
      state.position += 3
      skipSeparationSpace(state, true, -1)
    }
    return
  }

  if (state.position < (state.length - 1)) {
    throwError(state, 'end of the stream or a document separator is expected')
  }
}

function loadDocuments (input, options) {
  input = String(input)
  options = options || {}

  if (input.length !== 0) {
    // Add tailing `\n` if not exists
    if (input.charCodeAt(input.length - 1) !== 0x0A/* LF */ &&
        input.charCodeAt(input.length - 1) !== 0x0D/* CR */) {
      input += '\n'
    }

    // Strip BOM
    if (input.charCodeAt(0) === 0xFEFF) {
      input = input.slice(1)
    }
  }

  const state = new State(input, options)

  const nullpos = input.indexOf('\0')

  if (nullpos !== -1) {
    state.position = nullpos
    throwError(state, 'null byte is not allowed in input')
  }

  // Use 0 as string terminator. That significantly simplifies bounds check.
  state.input += '\0'

  while (state.input.charCodeAt(state.position) === 0x20/* Space */) {
    state.lineIndent += 1
    state.position += 1
  }

  while (state.position < (state.length - 1)) {
    readDocument(state)
  }

  return state.documents
}

function loadAll (input, iterator, options) {
  if (iterator !== null && typeof iterator === 'object' && typeof options === 'undefined') {
    options = iterator
    iterator = null
  }

  const documents = loadDocuments(input, options)

  if (typeof iterator !== 'function') {
    return documents
  }

  for (let index = 0, length = documents.length; index < length; index += 1) {
    iterator(documents[index])
  }
}

function load (input, options) {
  const documents = loadDocuments(input, options)

  if (documents.length === 0) {
    return undefined
  } else if (documents.length === 1) {
    return documents[0]
  }
  throw new YAMLException('expected a single document in the stream, but found more')
}

module.exports.loadAll = loadAll
module.exports.load = load
