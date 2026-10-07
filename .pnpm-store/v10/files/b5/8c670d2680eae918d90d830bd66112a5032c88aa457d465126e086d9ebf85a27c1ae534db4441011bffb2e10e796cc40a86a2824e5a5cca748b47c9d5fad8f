/**
 * @license
 * Copyright 2023 Google Inc.
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  type Token,
  tokenize,
  TOKENS,
  stringify,
} from '../../third_party/parsel-js/parsel-js.js';
import type {
  ComplexPSelector,
  ComplexPSelectorList,
  CompoundPSelector,
} from '../injected/PQuerySelector.js';
import {PCombinator} from '../injected/PQuerySelector.js';

TOKENS['nesting'] = /&/g;
TOKENS['combinator'] = /\s*(>>>>?|[\s>+~])\s*/g;

const ESCAPE_REGEXP = /\\[\s\S]/g;
const unquote = (text: string): string => {
  if (text.length <= 1) {
    return text;
  }
  if ((text[0] === '"' || text[0] === "'") && text.endsWith(text[0])) {
    text = text.slice(1, -1);
  }
  return text.replace(ESCAPE_REGEXP, match => {
    return match[1] as string;
  });
};

/**
 * @internal
 */
export function parsePSelectors(
  selector: string,
): [
  selector: ComplexPSelectorList,
  isPureCSS: boolean,
  hasPseudoClasses: boolean,
  hasAria: boolean,
] {
  let isPureCSS = true;
  let hasAria = false;
  let hasPseudoClasses = false;
  const tokens = tokenize(selector);
  if (tokens.length === 0) {
    return [[], isPureCSS, hasPseudoClasses, false];
  }
  let compoundSelector: CompoundPSelector = [];
  let complexSelector: ComplexPSelector = [compoundSelector];
  const selectors: ComplexPSelectorList = [complexSelector];
  const storage: Token[] = [];
  for (const token of tokens) {
    switch (token.type) {
      case 'combinator':
        switch (token.content) {
          case PCombinator.Descendent:
            isPureCSS = false;
            if (storage.length) {
              compoundSelector.push(stringify(storage));
              storage.splice(0);
            }
            compoundSelector = [];
            complexSelector.push(PCombinator.Descendent);
            complexSelector.push(compoundSelector);
            continue;
          case PCombinator.Child:
            isPureCSS = false;
            if (storage.length) {
              compoundSelector.push(stringify(storage));
              storage.splice(0);
            }
            compoundSelector = [];
            complexSelector.push(PCombinator.Child);
            complexSelector.push(compoundSelector);
            continue;
        }
        break;
      case 'pseudo-element':
        if (!token.name.startsWith('-p-')) {
          break;
        }
        isPureCSS = false;
        if (storage.length) {
          compoundSelector.push(stringify(storage));
          storage.splice(0);
        }
        const name = token.name.slice(3);
        if (name === 'aria') {
          hasAria = true;
        }
        compoundSelector.push({
          name,
          value: unquote(token.argument ?? ''),
        });
        continue;
      case 'pseudo-class':
        hasPseudoClasses = true;
        break;
      case 'comma':
        if (storage.length) {
          compoundSelector.push(stringify(storage));
          storage.splice(0);
        }
        compoundSelector = [];
        complexSelector = [compoundSelector];
        selectors.push(complexSelector);
        continue;
    }
    storage.push(token);
  }
  if (storage.length) {
    compoundSelector.push(stringify(storage));
  }
  return [selectors, isPureCSS, hasPseudoClasses, hasAria];
}
