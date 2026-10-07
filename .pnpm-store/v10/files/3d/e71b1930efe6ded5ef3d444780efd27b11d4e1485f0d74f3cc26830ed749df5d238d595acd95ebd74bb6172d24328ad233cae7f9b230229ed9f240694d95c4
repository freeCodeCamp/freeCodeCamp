# CSS Calc <img src="https://cssdb.org/images/css.svg" alt="for CSS" width="90" height="90" align="right">

[<img alt="npm version" src="https://img.shields.io/npm/v/@csstools/css-calc.svg" height="20">][npm-url]
[<img alt="Build Status" src="https://github.com/csstools/postcss-plugins/actions/workflows/test.yml/badge.svg?branch=main" height="20">][cli-url]
[<img alt="Discord" src="https://shields.io/badge/Discord-5865F2?logo=discord&logoColor=white">][discord]

Implemented from : https://drafts.csswg.org/css-values-4/ on 2023-02-17

## Usage

Add [CSS calc] to your project:

```bash
npm install @csstools/css-calc @csstools/css-parser-algorithms @csstools/css-tokenizer --save-dev
```

### With string values :

```mjs
import { calc } from '@csstools/css-calc';

// '20'
console.log(calc('calc(10 * 2)'));
```

### With component values :

```mjs
import { stringify, tokenizer } from '@csstools/css-tokenizer';
import { parseCommaSeparatedListOfComponentValues } from '@csstools/css-parser-algorithms';
import { calcFromComponentValues } from '@csstools/css-calc';

const t = tokenizer({
	css: 'calc(10 * 2)',
});

const tokens = [];

{
	while (!t.endOfFile()) {
		tokens.push(t.nextToken());
	}

	tokens.push(t.nextToken()); // EOF-token
}

const result = parseCommaSeparatedListOfComponentValues(tokens, {});

// filter or mutate the component values

const calcResult = calcFromComponentValues(result, { precision: 5, toCanonicalUnits: true });

// filter or mutate the component values even further

const calcResultStr = calcResult.map((componentValues) => {
	return componentValues.map((x) => stringify(...x.tokens())).join('');
}).join(',');

// '20'
console.log(calcResultStr);
```

### Options

#### `precision` :

The default precision is fairly high.
It aims to be high enough to make rounding unnoticeable in the browser.

You can set it to a lower number to suit your needs.

```mjs
import { calc } from '@csstools/css-calc';

// '0.3'
console.log(calc('calc(1 / 3)', { precision: 1 }));
// '0.33'
console.log(calc('calc(1 / 3)', { precision: 2 }));
```

#### `globals` :

Pass global values as a map of key value pairs.

> Example : Relative color syntax (`lch(from pink calc(l / 2) c h)`) exposes color channel information as ident tokens.
> By passing globals for `l`, `c` and `h` it is possible to solve nested `calc()`'s.

```mjs
import { calc } from '@csstools/css-calc';

const globals = new Map([
	['a', '10px'],
	['b', '2rem'],
]);

// '20px'
console.log(calc('calc(a * 2)', { globals: globals }));
// '6rem'
console.log(calc('calc(b * 3)', { globals: globals }));
```

#### `toCanonicalUnits` :

By default this package will try to preserve units.
The heuristic to do this is very simplistic.
We take the first unit we encounter and try to convert other dimensions to that unit.

This better matches what users expect from a CSS dev tool.

If you want to have outputs that are closes to CSS serialized values you can pass `toCanonicalUnits: true`.

```mjs
import { calc } from '@csstools/css-calc';

// '20hz'
console.log(calc('calc(0.01khz + 10hz)', { toCanonicalUnits: true }));

// '20hz'
console.log(calc('calc(10hz + 0.01khz)', { toCanonicalUnits: true }));

// '0.02khz' !!!
console.log(calc('calc(0.01khz + 10hz)', { toCanonicalUnits: false }));

// '20hz'
console.log(calc('calc(10hz + 0.01khz)', { toCanonicalUnits: false }));
```

[cli-url]: https://github.com/csstools/postcss-plugins/actions/workflows/test.yml?query=workflow/test
[discord]: https://discord.gg/bUadyRwkJS
[npm-url]: https://www.npmjs.com/package/@csstools/css-calc

[CSS calc]: https://github.com/csstools/postcss-plugins/tree/main/packages/css-calc
