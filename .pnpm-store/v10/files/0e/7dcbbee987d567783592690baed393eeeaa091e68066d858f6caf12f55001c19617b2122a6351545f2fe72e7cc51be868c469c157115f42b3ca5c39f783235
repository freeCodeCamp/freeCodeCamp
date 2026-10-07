/* Hand-written tokenizers for HTML. */

import {ExternalTokenizer, ContextTracker} from "@lezer/lr"
import {StartTag, StartCloseTag, NoMatchStartCloseTag, MismatchedStartCloseTag, missingCloseTag,
        StartSelfClosingTag, IncompleteCloseTag, Element, OpenTag, IncompleteTag,
        StartScriptTag, scriptText, StartCloseScriptTag,
        StartStyleTag, styleText, StartCloseStyleTag,
        StartTextareaTag, textareaText, StartCloseTextareaTag,
        Dialect_noMatch, Dialect_selfClosing, EndTag, SelfClosingEndTag,
        commentContent as cmntContent} from "./parser.terms.js"

const selfClosers = {
  area: true, base: true, br: true, col: true, command: true,
  embed: true, frame: true, hr: true, img: true, input: true,
  keygen: true, link: true, meta: true, param: true, source: true,
  track: true, wbr: true, menuitem: true
}

const implicitlyClosed = {
  dd: true, li: true, optgroup: true, option: true, p: true,
  rp: true, rt: true, tbody: true, td: true, tfoot: true,
  th: true, tr: true
}

const closeOnOpen = {
  dd: {dd: true, dt: true},
  dt: {dd: true, dt: true},
  li: {li: true},
  option: {option: true, optgroup: true},
  optgroup: {optgroup: true},
  p: {
    address: true, article: true, aside: true, blockquote: true, dir: true,
    div: true, dl: true, fieldset: true, footer: true, form: true,
    h1: true, h2: true, h3: true, h4: true, h5: true, h6: true,
    header: true, hgroup: true, hr: true, menu: true, nav: true, ol: true,
    p: true, pre: true, section: true, table: true, ul: true
  },
  rp: {rp: true, rt: true},
  rt: {rp: true, rt: true},
  tbody: {tbody: true, tfoot: true},
  td: {td: true, th: true},
  tfoot: {tbody: true},
  th: {td: true, th: true},
  thead: {tbody: true, tfoot: true},
  tr: {tr: true}
}

function nameChar(ch) {
  return ch == 45 || ch == 46 || ch == 58 || ch >= 65 && ch <= 90 || ch == 95 || ch >= 97 && ch <= 122 || ch >= 161
}

function isSpace(ch) {
  return ch == 9 || ch == 10 || ch == 13 || ch == 32
}

let cachedName = null, cachedInput = null, cachedPos = 0
function tagNameAfter(input, offset) {
  let pos = input.pos + offset
  if (cachedPos == pos && cachedInput == input) return cachedName
  let next = input.peek(offset), name = ""
  for (;;) {
    if (!nameChar(next)) break
    name += String.fromCharCode(next)
    next = input.peek(++offset)
  }
  // Undefined to signal there's a <? or <!, null for just missing
  cachedInput = input; cachedPos = pos
  return cachedName = name ? name.toLowerCase() : next == question || next == bang ? undefined : null
}

const lessThan = 60, greaterThan = 62, slash = 47, question = 63, bang = 33, dash = 45

function ElementContext(name, parent) {
  this.name = name
  this.parent = parent
}

const startTagTerms = [StartTag, StartSelfClosingTag, StartScriptTag, StartStyleTag, StartTextareaTag]

export const elementContext = new ContextTracker({
  start: null,
  shift(context, term, stack, input) {
    return startTagTerms.indexOf(term) > -1 ? new ElementContext(tagNameAfter(input, 1) || "", context) : context
  },
  reduce(context, term) {
    return term == Element && context ? context.parent : context
  },
  reuse(context, node, stack, input) {
    let type = node.type.id
    return type == StartTag || type == OpenTag
      ? new ElementContext(tagNameAfter(input, 1) || "", context) : context
  },
  strict: false
})

export const tagStart = new ExternalTokenizer((input, stack) => {
  if (input.next != lessThan) {
    // End of file, close any open tags
    if (input.next < 0 && stack.context) input.acceptToken(missingCloseTag)
    return
  }
  input.advance()
  let close = input.next == slash
  if (close) input.advance()
  let name = tagNameAfter(input, 0)
  if (name === undefined) return
  if (!name) return input.acceptToken(close ? IncompleteCloseTag : IncompleteTag)

  let parent = stack.context ? stack.context.name : null
  if (close) {
    if (name == parent) return input.acceptToken(StartCloseTag)
    if (parent && implicitlyClosed[parent]) return input.acceptToken(missingCloseTag, -2)
    if (stack.dialectEnabled(Dialect_noMatch)) return input.acceptToken(NoMatchStartCloseTag)
    for (let cx = stack.context; cx; cx = cx.parent) if (cx.name == name) return
    input.acceptToken(MismatchedStartCloseTag)
  } else {
    if (name == "script") return input.acceptToken(StartScriptTag)
    if (name == "style") return input.acceptToken(StartStyleTag)
    if (name == "textarea") return input.acceptToken(StartTextareaTag)
    if (selfClosers.hasOwnProperty(name)) return input.acceptToken(StartSelfClosingTag)
    if (parent && closeOnOpen[parent] && closeOnOpen[parent][name]) input.acceptToken(missingCloseTag, -1)
    else input.acceptToken(StartTag)
  }
}, {contextual: true})

export const commentContent = new ExternalTokenizer(input => {
  for (let dashes = 0, i = 0;; i++) {
    if (input.next < 0) {
      if (i) input.acceptToken(cmntContent)
      break
    }
    if (input.next == dash) {
      dashes++
    } else if (input.next == greaterThan && dashes >= 2) {
      if (i >= 3) input.acceptToken(cmntContent, -2)
      break
    } else {
      dashes = 0
    }
    input.advance()
  }
})

function inForeignElement(context) {
  for (; context; context = context.parent)
    if (context.name == "svg" || context.name == "math") return true
  return false
}

export const endTag = new ExternalTokenizer((input, stack) => {
  if (input.next == slash && input.peek(1) == greaterThan) {
    let selfClosing = stack.dialectEnabled(Dialect_selfClosing) || inForeignElement(stack.context)
    input.acceptToken(selfClosing ? SelfClosingEndTag : EndTag, 2)
  } else if (input.next == greaterThan) {
    input.acceptToken(EndTag, 1)
  }
})

function contentTokenizer(tag, textToken, endToken) {
  let lastState = 2 + tag.length
  return new ExternalTokenizer(input => {
    // state means:
    // - 0 nothing matched
    // - 1 '<' matched
    // - 2 '</'
    // - 3-(1+tag.length) part of the tag matched
    // - lastState whole tag + possibly whitespace matched
    for (let state = 0, matchedLen = 0, i = 0;; i++) {
      if (input.next < 0) {
        if (i) input.acceptToken(textToken)
        break
      }
      if (state == 0 && input.next == lessThan ||
          state == 1 && input.next == slash ||
          state >= 2 && state < lastState && input.next == tag.charCodeAt(state - 2)) {
        state++
        matchedLen++
      } else if (state == lastState && input.next == greaterThan) {
        if (i > matchedLen)
          input.acceptToken(textToken, -matchedLen)
        else
          input.acceptToken(endToken, -(matchedLen - 2))
        break
      } else if ((input.next == 10 /* '\n' */ || input.next == 13 /* '\r' */) && i) {
        input.acceptToken(textToken, 1)
        break
      } else {
        state = matchedLen = 0
      }
      input.advance()
    }
  })
}

export const scriptTokens = contentTokenizer("script", scriptText, StartCloseScriptTag)

export const styleTokens = contentTokenizer("style", styleText, StartCloseStyleTag)

export const textareaTokens = contentTokenizer("textarea", textareaText, StartCloseTextareaTag)
