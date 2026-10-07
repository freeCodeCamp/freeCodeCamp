/**
 * @import {
 *   Code,
 *   Construct,
 *   Exiter,
 *   State,
 *   TokenizeContext,
 *   Tokenizer
 * } from 'micromark-util-types'
 */

import { factorySpace } from 'micromark-factory-space';
import { asciiDigit, markdownSpace } from 'micromark-util-character';
import { blankLine } from './blank-line.js';
import { thematicBreak } from './thematic-break.js';

/** @type {Construct} */
export const list = {
  continuation: {
    tokenize: tokenizeListContinuation
  },
  exit: tokenizeListEnd,
  name: 'list',
  tokenize: tokenizeListStart
};

/** @type {Construct} */
const listItemPrefixWhitespaceConstruct = {
  partial: true,
  tokenize: tokenizeListItemPrefixWhitespace
};

/** @type {Construct} */
const indentConstruct = {
  partial: true,
  tokenize: tokenizeIndent
};

// To do: `markdown-rs` parses list items on their own and later stitches them
// together.

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeListStart(effects, ok, nok) {
  const self = this;
  const tail = self.events[self.events.length - 1];
  let initialSize = tail && tail[1].type === "linePrefix" ? tail[2].sliceSerialize(tail[1], true).length : 0;
  let size = 0;
  return start;

  /** @type {State} */
  function start(code) {
    const kind = self.containerState.type || (code === 42 || code === 43 || code === 45 ? "listUnordered" : "listOrdered");
    if (kind === "listUnordered" ? !self.containerState.marker || code === self.containerState.marker : asciiDigit(code)) {
      if (!self.containerState.type) {
        self.containerState.type = kind;
        effects.enter(kind, {
          _container: true
        });
      }
      if (kind === "listUnordered") {
        effects.enter("listItemPrefix");
        return code === 42 || code === 45 ? effects.check(thematicBreak, nok, atMarker)(code) : atMarker(code);
      }
      if (!self.interrupt || code === 49) {
        effects.enter("listItemPrefix");
        effects.enter("listItemValue");
        return inside(code);
      }
    }
    return nok(code);
  }

  /** @type {State} */
  function inside(code) {
    if (asciiDigit(code) && ++size < 10) {
      effects.consume(code);
      return inside;
    }
    if ((!self.interrupt || size < 2) && (self.containerState.marker ? code === self.containerState.marker : code === 41 || code === 46)) {
      effects.exit("listItemValue");
      return atMarker(code);
    }
    return nok(code);
  }

  /**
   * @type {State}
   **/
  function atMarker(code) {
    effects.enter("listItemMarker");
    effects.consume(code);
    effects.exit("listItemMarker");
    self.containerState.marker = self.containerState.marker || code;
    return effects.check(blankLine,
    // Can’t be empty when interrupting.
    self.interrupt ? nok : onBlank, effects.attempt(listItemPrefixWhitespaceConstruct, endOfPrefix, otherPrefix));
  }

  /** @type {State} */
  function onBlank(code) {
    self.containerState.initialBlankLine = true;
    initialSize++;
    return endOfPrefix(code);
  }

  /** @type {State} */
  function otherPrefix(code) {
    if (markdownSpace(code)) {
      effects.enter("listItemPrefixWhitespace");
      effects.consume(code);
      effects.exit("listItemPrefixWhitespace");
      return endOfPrefix;
    }
    return nok(code);
  }

  /** @type {State} */
  function endOfPrefix(code) {
    self.containerState.size = initialSize + self.sliceSerialize(effects.exit("listItemPrefix"), true).length;
    return ok(code);
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeListContinuation(effects, ok, nok) {
  const self = this;
  self.containerState._closeFlow = undefined;
  return effects.check(blankLine, onBlank, notBlank);

  /** @type {State} */
  function onBlank(code) {
    self.containerState.furtherBlankLines = self.containerState.furtherBlankLines || self.containerState.initialBlankLine;

    // We have a blank line.
    // Still, try to consume at most the items size.
    return factorySpace(effects, ok, "listItemIndent", self.containerState.size + 1)(code);
  }

  /** @type {State} */
  function notBlank(code) {
    if (self.containerState.furtherBlankLines || !markdownSpace(code)) {
      self.containerState.furtherBlankLines = undefined;
      self.containerState.initialBlankLine = undefined;
      return notInCurrentItem(code);
    }
    self.containerState.furtherBlankLines = undefined;
    self.containerState.initialBlankLine = undefined;
    return effects.attempt(indentConstruct, ok, notInCurrentItem)(code);
  }

  /** @type {State} */
  function notInCurrentItem(code) {
    // While we do continue, we signal that the flow should be closed.
    self.containerState._closeFlow = true;
    // As we’re closing flow, we’re no longer interrupting.
    self.interrupt = undefined;
    // Always populated by defaults.

    return factorySpace(effects, effects.attempt(list, ok, nok), "linePrefix", self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4)(code);
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeIndent(effects, ok, nok) {
  const self = this;
  return factorySpace(effects, afterPrefix, "listItemIndent", self.containerState.size + 1);

  /** @type {State} */
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return tail && tail[1].type === "listItemIndent" && tail[2].sliceSerialize(tail[1], true).length === self.containerState.size ? ok(code) : nok(code);
  }
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Exiter}
 */
function tokenizeListEnd(effects) {
  effects.exit(this.containerState.type);
}

/**
 * @this {TokenizeContext}
 *   Context.
 * @type {Tokenizer}
 */
function tokenizeListItemPrefixWhitespace(effects, ok, nok) {
  const self = this;

  // Always populated by defaults.

  return factorySpace(effects, afterPrefix, "listItemPrefixWhitespace", self.parser.constructs.disable.null.includes('codeIndented') ? undefined : 4 + 1);

  /** @type {State} */
  function afterPrefix(code) {
    const tail = self.events[self.events.length - 1];
    return !markdownSpace(code) && tail && tail[1].type === "listItemPrefixWhitespace" ? ok(code) : nok(code);
  }
}