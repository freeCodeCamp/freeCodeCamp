# CSS Color Parser <img src="https://cssdb.org/images/css.svg" alt="for CSS" width="90" height="90" align="right">

[<img alt="npm version" src="https://img.shields.io/npm/v/@csstools/css-color-parser.svg" height="20">][npm-url]
[<img alt="Build Status" src="https://github.com/csstools/postcss-plugins/actions/workflows/test.yml/badge.svg?branch=main" height="20">][cli-url]
[<img alt="Discord" src="https://shields.io/badge/Discord-5865F2?logo=discord&logoColor=white">][discord]

## Usage

Add [CSS Color Parser] to your project:

```bash
npm install @csstools/css-color-parser @csstools/css-parser-algorithms @csstools/css-tokenizer --save-dev
```

```ts
import { color } from '@csstools/css-color-parser';
import { isFunctionNode, parseComponentValue } from '@csstools/css-parser-algorithms';
import { serializeRGB } from '@csstools/css-color-parser';
import { tokenize } from '@csstools/css-tokenizer';

// color() expects a parsed component value.
const hwbComponentValue = parseComponentValue(tokenize({ css: 'hwb(10deg 10% 20%)' }));
const colorData = color(hwbComponentValue);
if (colorData) {
	console.log(colorData);

	// serializeRGB() returns a component value.
	const rgbComponentValue = serializeRGB(colorData);
	console.log(rgbComponentValue.toString());
}
```

[cli-url]: https://github.com/csstools/postcss-plugins/actions/workflows/test.yml?query=workflow/test
[discord]: https://discord.gg/bUadyRwkJS
[npm-url]: https://www.npmjs.com/package/@csstools/css-color-parser

[CSS Color Parser]: https://github.com/csstools/postcss-plugins/tree/main/packages/css-color-parser
