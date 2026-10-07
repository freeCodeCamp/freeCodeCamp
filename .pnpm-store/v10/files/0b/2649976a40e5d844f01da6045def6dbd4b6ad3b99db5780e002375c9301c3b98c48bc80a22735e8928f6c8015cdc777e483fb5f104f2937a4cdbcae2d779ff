# CSS Parser Algorithms <img src="https://cssdb.org/images/css.svg" alt="for CSS" width="90" height="90" align="right">

[<img alt="npm version" src="https://img.shields.io/npm/v/@csstools/css-parser-algorithms.svg" height="20">][npm-url]
[<img alt="Build Status" src="https://github.com/csstools/postcss-plugins/actions/workflows/test.yml/badge.svg?branch=main" height="20">][cli-url]
[<img alt="Discord" src="https://shields.io/badge/Discord-5865F2?logo=discord&logoColor=white">][discord]

Implemented from : https://www.w3.org/TR/2021/CRD-css-syntax-3-20211224/

## API

[Read the API docs](./docs/css-parser-algorithms.md)

## Usage

Add [CSS Parser Algorithms] to your project:

```bash
npm install @csstools/css-parser-algorithms @csstools/css-tokenizer --save-dev
```

[CSS Parser Algorithms] only accepts tokenized CSS.
It must be used together with `@csstools/css-tokenizer`.


```js
import { tokenizer, TokenType } from '@csstools/css-tokenizer';
import { parseComponentValue } from '@csstools/css-parser-algorithms';

const myCSS =  `@media only screen and (min-width: 768rem) {
	.foo {
		content: 'Some content!' !important;
	}
}
`;

const t = tokenizer({
	css: myCSS,
});

const tokens = [];

{
	while (!t.endOfFile()) {
		tokens.push(t.nextToken());
	}

	tokens.push(t.nextToken()); // EOF-token
}

const options = {
	onParseError: ((err) => {
		throw err;
	}),
};

const result = parseComponentValue(tokens, options);

console.log(result);
```

### Available functions

- [`parseComponentValue`](https://www.w3.org/TR/css-syntax-3/#parse-component-value)
- [`parseListOfComponentValues`](https://www.w3.org/TR/css-syntax-3/#parse-list-of-component-values)
- [`parseCommaSeparatedListOfComponentValues`](https://www.w3.org/TR/css-syntax-3/#parse-comma-separated-list-of-component-values)

### Utilities

#### `gatherNodeAncestry`

The AST does not expose the entire ancestry of each node.
The walker methods do provide access to the current parent, but also not the entire ancestry.

To gather the entire ancestry for a a given sub tree of the AST you can use `gatherNodeAncestry`.
The result is a `Map` with the child nodes as keys and the parents as values.
This allows you to lookup any ancestor of any node.

```js
import { parseComponentValue } from '@csstools/css-parser-algorithms';

const result = parseComponentValue(tokens, options);
const ancestry = gatherNodeAncestry(result);
```

### Options

```ts
{
	onParseError?: (error: ParseError) => void
}
```

#### `onParseError`

The parser algorithms are forgiving and won't stop when a parse error is encountered.
Parse errors also aren't tokens.

To receive parsing error information you can set a callback.

Parser errors will try to inform you about the point in the parsing logic the error happened.
This tells you the kind of error.

## Goals and non-goals

Things this package aims to be:
- specification compliant CSS parser
- a reliable low level package to be used in CSS sub-grammars

What it is not:
- opinionated
- fast
- small
- a replacement for PostCSS (PostCSS is fast and also an ecosystem)

[cli-url]: https://github.com/csstools/postcss-plugins/actions/workflows/test.yml?query=workflow/test
[discord]: https://discord.gg/bUadyRwkJS
[npm-url]: https://www.npmjs.com/package/@csstools/css-parser-algorithms

[CSS Parser Algorithms]: https://github.com/csstools/postcss-plugins/tree/main/packages/css-parser-algorithms
