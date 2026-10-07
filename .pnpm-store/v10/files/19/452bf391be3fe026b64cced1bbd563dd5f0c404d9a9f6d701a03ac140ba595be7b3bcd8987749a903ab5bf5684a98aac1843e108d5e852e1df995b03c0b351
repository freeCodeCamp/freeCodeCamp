# Selector Specificity

[<img alt="npm version" src="https://img.shields.io/npm/v/@csstools/selector-specificity.svg" height="20">][npm-url]
[<img alt="Build Status" src="https://github.com/csstools/postcss-plugins/workflows/test/badge.svg" height="20">][cli-url]
[<img alt="Discord" src="https://shields.io/badge/Discord-5865F2?logo=discord&logoColor=white">][discord]

## Usage

Add [Selector Specificity] to your project:

```bash
npm install @csstools/selector-specificity --save-dev
```

```js
import parser from 'postcss-selector-parser';
import { selectorSpecificity } from '@csstools/selector-specificity';

const selectorAST = parser().astSync('#foo:has(> .foo)');
const specificity = selectorSpecificity(selectorAST);

console.log(specificity.a); // 1
console.log(specificity.b); // 1
console.log(specificity.c); // 0
```

_`selectorSpecificity` takes a single selector, not a list of selectors (not : `a, b, c`).
To compare or otherwise manipulate lists of selectors you need to call `selectorSpecificity` on each part._

### Comparing

The package exports a utility function to compare two specificities.

```js
import { selectorSpecificity, compare } from '@csstools/selector-specificity';

const s1 = selectorSpecificity(ast1);
const s2 = selectorSpecificity(ast2);
compare(s1, s2); // -1 | 0 | 1
```

- if `s1 < s2` then `compare(s1, s2)` returns a negative number (`< 0`)
- if `s1 > s2` then `compare(s1, s2)` returns a positive number (`> 0`)
- if `s1 === s2` then `compare(s1, s2)` returns zero (`=== 0`)

## Prior Art

- [keeganstreet/specificity](https://github.com/keeganstreet/specificity)
- [bramus/specificity](https://github.com/bramus/specificity)

For CSSTools we always use `postcss-selector-parser` and want to calculate specificity from this AST.

[cli-url]: https://github.com/csstools/postcss-plugins/actions/workflows/test.yml?query=workflow/test
[discord]: https://discord.gg/bUadyRwkJS
[npm-url]: https://www.npmjs.com/package/@csstools/selector-specificity

[Selector Specificity]: https://github.com/csstools/postcss-plugins/tree/main/packages/selector-specificity
