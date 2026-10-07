/**
 * @import {Code, Effects, State, TokenType} from 'micromark-util-types'
 */

import { factorySpace } from 'micromark-factory-space';
import { factoryWhitespace } from 'micromark-factory-whitespace';
import { markdownLineEnding, markdownLineEndingOrSpace, markdownSpace, unicodePunctuation, unicodeWhitespace } from 'micromark-util-character';
/**
 * @param {Effects} effects
 * @param {State} ok
 * @param {State} nok
 * @param {TokenType} attributesType
 * @param {TokenType} attributesMarkerType
 * @param {TokenType} attributeType
 * @param {TokenType} attributeIdType
 * @param {TokenType} attributeClassType
 * @param {TokenType} attributeNameType
 * @param {TokenType} attributeInitializerType
 * @param {TokenType} attributeValueLiteralType
 * @param {TokenType} attributeValueType
 * @param {TokenType} attributeValueMarker
 * @param {TokenType} attributeValueData
 * @param {boolean | undefined} [disallowEol=false]
 */
export function factoryAttributes(effects, ok, nok, attributesType, attributesMarkerType, attributeType, attributeIdType, attributeClassType, attributeNameType, attributeInitializerType, attributeValueLiteralType, attributeValueType, attributeValueMarker, attributeValueData, disallowEol) {
  /** @type {TokenType} */
  let type;
  /** @type {Code | undefined} */
  let marker;
  return start;

  /** @type {State} */
  function start(code) {
    effects.enter(attributesType);
    effects.enter(attributesMarkerType);
    effects.consume(code);
    effects.exit(attributesMarkerType);
    return between;
  }

  /** @type {State} */
  function between(code) {
    if (code === 35) {
      type = attributeIdType;
      return shortcutStart(code);
    }
    if (code === 46) {
      type = attributeClassType;
      return shortcutStart(code);
    }
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, between, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, between)(code);
    }
    if (code === null || markdownLineEnding(code) || unicodeWhitespace(code) || unicodePunctuation(code) && code !== 45 && code !== 95) {
      return end(code);
    }
    effects.enter(attributeType);
    effects.enter(attributeNameType);
    effects.consume(code);
    return name;
  }

  /** @type {State} */
  function shortcutStart(code) {
    // Assume it’s registered.
    const markerType = /** @type {TokenType} */type + 'Marker';
    effects.enter(attributeType);
    effects.enter(type);
    effects.enter(markerType);
    effects.consume(code);
    effects.exit(markerType);
    return shortcutStartAfter;
  }

  /** @type {State} */
  function shortcutStartAfter(code) {
    if (code === null || code === 34 || code === 35 || code === 39 || code === 46 || code === 60 || code === 61 || code === 62 || code === 96 || code === 125 || markdownLineEndingOrSpace(code)) {
      return nok(code);
    }

    // Assume it’s registered.
    const valueType = /** @type {TokenType} */type + 'Value';
    effects.enter(valueType);
    effects.consume(code);
    return shortcut;
  }

  /** @type {State} */
  function shortcut(code) {
    if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96) {
      return nok(code);
    }
    if (code === 35 || code === 46 || code === 125 || markdownLineEndingOrSpace(code)) {
      // Assume it’s registered.
      const valueType = /** @type {TokenType} */type + 'Value';
      effects.exit(valueType);
      effects.exit(type);
      effects.exit(attributeType);
      return between(code);
    }
    effects.consume(code);
    return shortcut;
  }

  /** @type {State} */
  function name(code) {
    if (code === null || markdownLineEnding(code) || unicodeWhitespace(code) || unicodePunctuation(code) && code !== 45 && code !== 46 && code !== 58 && code !== 95) {
      effects.exit(attributeNameType);
      if (disallowEol && markdownSpace(code)) {
        return factorySpace(effects, nameAfter, "whitespace")(code);
      }
      if (!disallowEol && markdownLineEndingOrSpace(code)) {
        return factoryWhitespace(effects, nameAfter)(code);
      }
      return nameAfter(code);
    }
    effects.consume(code);
    return name;
  }

  /** @type {State} */
  function nameAfter(code) {
    if (code === 61) {
      effects.enter(attributeInitializerType);
      effects.consume(code);
      effects.exit(attributeInitializerType);
      return valueBefore;
    }

    // Attribute w/o value.
    effects.exit(attributeType);
    return between(code);
  }

  /** @type {State} */
  function valueBefore(code) {
    if (code === null || code === 60 || code === 61 || code === 62 || code === 96 || code === 125 || disallowEol && markdownLineEnding(code)) {
      return nok(code);
    }
    if (code === 34 || code === 39) {
      effects.enter(attributeValueLiteralType);
      effects.enter(attributeValueMarker);
      effects.consume(code);
      effects.exit(attributeValueMarker);
      marker = code;
      return valueQuotedStart;
    }
    if (disallowEol && markdownSpace(code)) {
      return factorySpace(effects, valueBefore, "whitespace")(code);
    }
    if (!disallowEol && markdownLineEndingOrSpace(code)) {
      return factoryWhitespace(effects, valueBefore)(code);
    }
    effects.enter(attributeValueType);
    effects.enter(attributeValueData);
    effects.consume(code);
    marker = undefined;
    return valueUnquoted;
  }

  /** @type {State} */
  function valueUnquoted(code) {
    if (code === null || code === 34 || code === 39 || code === 60 || code === 61 || code === 62 || code === 96) {
      return nok(code);
    }
    if (code === 125 || markdownLineEndingOrSpace(code)) {
      effects.exit(attributeValueData);
      effects.exit(attributeValueType);
      effects.exit(attributeType);
      return between(code);
    }
    effects.consume(code);
    return valueUnquoted;
  }

  /** @type {State} */
  function valueQuotedStart(code) {
    if (code === marker) {
      effects.enter(attributeValueMarker);
      effects.consume(code);
      effects.exit(attributeValueMarker);
      effects.exit(attributeValueLiteralType);
      effects.exit(attributeType);
      return valueQuotedAfter;
    }
    effects.enter(attributeValueType);
    return valueQuotedBetween(code);
  }

  /** @type {State} */
  function valueQuotedBetween(code) {
    if (code === marker) {
      effects.exit(attributeValueType);
      return valueQuotedStart(code);
    }
    if (code === null) {
      return nok(code);
    }

    // Note: blank lines can’t exist in content.
    if (markdownLineEnding(code)) {
      return disallowEol ? nok(code) : factoryWhitespace(effects, valueQuotedBetween)(code);
    }
    effects.enter(attributeValueData);
    effects.consume(code);
    return valueQuoted;
  }

  /** @type {State} */
  function valueQuoted(code) {
    if (code === marker || code === null || markdownLineEnding(code)) {
      effects.exit(attributeValueData);
      return valueQuotedBetween(code);
    }
    effects.consume(code);
    return valueQuoted;
  }

  /** @type {State} */
  function valueQuotedAfter(code) {
    return code === 125 || markdownLineEndingOrSpace(code) ? between(code) : end(code);
  }

  /** @type {State} */
  function end(code) {
    if (code === 125) {
      effects.enter(attributesMarkerType);
      effects.consume(code);
      effects.exit(attributesMarkerType);
      effects.exit(attributesType);
      return ok;
    }
    return nok(code);
  }
}