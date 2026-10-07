/**
 * @import {Construct, Previous, State, TokenizeContext, Tokenizer} from 'micromark-util-types'
 */

import { factoryAttributes } from './factory-attributes.js';
import { factoryLabel } from './factory-label.js';
import { factoryName } from './factory-name.js';

/** @type {Construct} */
export const directiveText = {
  tokenize: tokenizeDirectiveText,
  previous
};
const label = {
  tokenize: tokenizeLabel,
  partial: true
};
const attributes = {
  tokenize: tokenizeAttributes,
  partial: true
};

/**
 * @this {TokenizeContext}
 * @type {Previous}
 */
function previous(code) {
  // If there is a previous code, there will always be a tail.
  return code !== 58 || this.events[this.events.length - 1][1].type === "characterEscape";
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeDirectiveText(effects, ok, nok) {
  const self = this;
  return start;

  /** @type {State} */
  function start(code) {
    effects.enter('directiveText');
    effects.enter('directiveTextMarker');
    effects.consume(code);
    effects.exit('directiveTextMarker');
    return factoryName.call(self, effects, afterName, nok, 'directiveTextName');
  }

  /** @type {State} */
  function afterName(code) {
    return code === 58 ? nok(code) : code === 91 ? effects.attempt(label, afterLabel, afterLabel)(code) : afterLabel(code);
  }

  /** @type {State} */
  function afterLabel(code) {
    return code === 123 ? effects.attempt(attributes, afterAttributes, afterAttributes)(code) : afterAttributes(code);
  }

  /** @type {State} */
  function afterAttributes(code) {
    effects.exit('directiveText');
    return ok(code);
  }
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeLabel(effects, ok, nok) {
  // Always a `[`
  return factoryLabel(effects, ok, nok, 'directiveTextLabel', 'directiveTextLabelMarker', 'directiveTextLabelString');
}

/**
 * @this {TokenizeContext}
 * @type {Tokenizer}
 */
function tokenizeAttributes(effects, ok, nok) {
  // Always a `{`
  return factoryAttributes(effects, ok, nok, 'directiveTextAttributes', 'directiveTextAttributesMarker', 'directiveTextAttribute', 'directiveTextAttributeId', 'directiveTextAttributeClass', 'directiveTextAttributeName', 'directiveTextAttributeInitializerMarker', 'directiveTextAttributeValueLiteral', 'directiveTextAttributeValue', 'directiveTextAttributeValueMarker', 'directiveTextAttributeValueData');
}