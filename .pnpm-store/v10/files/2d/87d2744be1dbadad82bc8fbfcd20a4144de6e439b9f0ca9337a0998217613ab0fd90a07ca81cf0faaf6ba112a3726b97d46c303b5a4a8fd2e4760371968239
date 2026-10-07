/**
 * @import {Extension} from 'micromark-util-types'
 */

import {
  attention,
  autolink,
  blockQuote,
  characterEscape,
  characterReference,
  codeFenced,
  codeIndented,
  codeText,
  definition,
  hardBreakEscape,
  headingAtx,
  htmlFlow,
  htmlText,
  labelEnd,
  labelStartImage,
  labelStartLink,
  lineEnding,
  list,
  setextUnderline,
  thematicBreak
} from 'micromark-core-commonmark'
import {codes} from 'micromark-util-symbol'
import {resolver as resolveText} from './initialize/text.js'

/** @satisfies {Extension['document']} */
export const document = {
  [codes.asterisk]: list,
  [codes.plusSign]: list,
  [codes.dash]: list,
  [codes.digit0]: list,
  [codes.digit1]: list,
  [codes.digit2]: list,
  [codes.digit3]: list,
  [codes.digit4]: list,
  [codes.digit5]: list,
  [codes.digit6]: list,
  [codes.digit7]: list,
  [codes.digit8]: list,
  [codes.digit9]: list,
  [codes.greaterThan]: blockQuote
}

/** @satisfies {Extension['contentInitial']} */
export const contentInitial = {
  [codes.leftSquareBracket]: definition
}

/** @satisfies {Extension['flowInitial']} */
export const flowInitial = {
  [codes.horizontalTab]: codeIndented,
  [codes.virtualSpace]: codeIndented,
  [codes.space]: codeIndented
}

/** @satisfies {Extension['flow']} */
export const flow = {
  [codes.numberSign]: headingAtx,
  [codes.asterisk]: thematicBreak,
  [codes.dash]: [setextUnderline, thematicBreak],
  [codes.lessThan]: htmlFlow,
  [codes.equalsTo]: setextUnderline,
  [codes.underscore]: thematicBreak,
  [codes.graveAccent]: codeFenced,
  [codes.tilde]: codeFenced
}

/** @satisfies {Extension['string']} */
export const string = {
  [codes.ampersand]: characterReference,
  [codes.backslash]: characterEscape
}

/** @satisfies {Extension['text']} */
export const text = {
  [codes.carriageReturn]: lineEnding,
  [codes.lineFeed]: lineEnding,
  [codes.carriageReturnLineFeed]: lineEnding,
  [codes.exclamationMark]: labelStartImage,
  [codes.ampersand]: characterReference,
  [codes.asterisk]: attention,
  [codes.lessThan]: [autolink, htmlText],
  [codes.leftSquareBracket]: labelStartLink,
  [codes.backslash]: [hardBreakEscape, characterEscape],
  [codes.rightSquareBracket]: labelEnd,
  [codes.underscore]: attention,
  [codes.graveAccent]: codeText
}

/** @satisfies {Extension['insideSpan']} */
export const insideSpan = {null: [attention, resolveText]}

/** @satisfies {Extension['attentionMarkers']} */
export const attentionMarkers = {null: [codes.asterisk, codes.underscore]}

/** @satisfies {Extension['disable']} */
export const disable = {null: []}
