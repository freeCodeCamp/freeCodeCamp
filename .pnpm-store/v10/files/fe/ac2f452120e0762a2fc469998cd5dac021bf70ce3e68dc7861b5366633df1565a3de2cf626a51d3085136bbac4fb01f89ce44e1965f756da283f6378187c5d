# CSS Syntax Patches For CSSTree <img src="https://cssdb.org/images/css.svg" alt="for CSS" width="90" height="90" align="right">

[<img alt="npm version" src="https://img.shields.io/npm/v/@csstools/css-syntax-patches-for-csstree.svg" height="20">][npm-url]
[<img alt="Build Status" src="https://github.com/csstools/postcss-plugins/actions/workflows/test.yml/badge.svg?branch=main" height="20">][cli-url]

Patch [csstree](https://github.com/csstree/csstree) syntax definitions with the latest data from CSS specifications.  

## Usage

```bash
npm install @csstools/css-syntax-patches-for-csstree
```

```js
import { fork } from 'css-tree';
import syntax_patches from '@csstools/css-syntax-patches-for-csstree' with { type: 'json' };

const forkedLexer = fork({
	atrules: syntax_patches.next.atrules,
	properties: syntax_patches.next.properties,
	types: syntax_patches.next.types,
}).lexer;
```

## `next`

```js
import syntax_patches from '@csstools/css-syntax-patches-for-csstree' with { type: 'json' };

console.log(syntax_patches.next);
//                         ^^^^
```

CSS specifications are often still in flux and various parts might change or disappear altogether.  
Specifications also contains parts that haven't been implemented yet in a browser.  
Only CSS that is widely adopted can be expected to be stable.

The `next` grouping contains a combination of what is currently valid in browsers and the progress in various specifications.

_In the future more groupings might be added._

[cli-url]: https://github.com/csstools/postcss-plugins/actions/workflows/test.yml?query=workflow/test
[npm-url]: https://www.npmjs.com/package/@csstools/css-syntax-patches-for-csstree
