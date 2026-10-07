import { LRLanguage, LanguageSupport } from '@codemirror/language';
import { CompletionSource } from '@codemirror/autocomplete';
import { SyntaxNodeRef } from '@lezer/common';

/**
Create a completion source for a CSS dialect, providing a
predicate for determining what kind of syntax node can act as a
completable variable. This is used by language modes like Sass and
Less to reuse this package's completion logic.
*/
declare const defineCSSCompletionSource: (isVariable: (node: SyntaxNodeRef) => boolean) => CompletionSource;
/**
CSS property, variable, and value keyword completion source.
*/
declare const cssCompletionSource: CompletionSource;

/**
A language provider based on the [Lezer CSS
parser](https://github.com/lezer-parser/css), extended with
highlighting and indentation information.
*/
declare const cssLanguage: LRLanguage;
/**
Language support for CSS.
*/
declare function css(): LanguageSupport;

export { css, cssCompletionSource, cssLanguage, defineCSSCompletionSource };
