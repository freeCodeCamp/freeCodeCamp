/**
 * @import {Extension} from 'micromark-util-types'
 */

import { attention, autolink, blockQuote, characterEscape, characterReference, codeFenced, codeIndented, codeText, definition, hardBreakEscape, headingAtx, htmlFlow, htmlText, labelEnd, labelStartImage, labelStartLink, lineEnding, list, setextUnderline, thematicBreak } from 'micromark-core-commonmark';
import { resolver as resolveText } from './initialize/text.js';

/** @satisfies {Extension['document']} */
export const document = {
  [42]: list,
  [43]: list,
  [45]: list,
  [48]: list,
  [49]: list,
  [50]: list,
  [51]: list,
  [52]: list,
  [53]: list,
  [54]: list,
  [55]: list,
  [56]: list,
  [57]: list,
  [62]: blockQuote
};

/** @satisfies {Extension['contentInitial']} */
export const contentInitial = {
  [91]: definition
};

/** @satisfies {Extension['flowInitial']} */
export const flowInitial = {
  [-2]: codeIndented,
  [-1]: codeIndented,
  [32]: codeIndented
};

/** @satisfies {Extension['flow']} */
export const flow = {
  [35]: headingAtx,
  [42]: thematicBreak,
  [45]: [setextUnderline, thematicBreak],
  [60]: htmlFlow,
  [61]: setextUnderline,
  [95]: thematicBreak,
  [96]: codeFenced,
  [126]: codeFenced
};

/** @satisfies {Extension['string']} */
export const string = {
  [38]: characterReference,
  [92]: characterEscape
};

/** @satisfies {Extension['text']} */
export const text = {
  [-5]: lineEnding,
  [-4]: lineEnding,
  [-3]: lineEnding,
  [33]: labelStartImage,
  [38]: characterReference,
  [42]: attention,
  [60]: [autolink, htmlText],
  [91]: labelStartLink,
  [92]: [hardBreakEscape, characterEscape],
  [93]: labelEnd,
  [95]: attention,
  [96]: codeText
};

/** @satisfies {Extension['insideSpan']} */
export const insideSpan = {
  null: [attention, resolveText]
};

/** @satisfies {Extension['attentionMarkers']} */
export const attentionMarkers = {
  null: [42, 95]
};

/** @satisfies {Extension['disable']} */
export const disable = {
  null: []
};