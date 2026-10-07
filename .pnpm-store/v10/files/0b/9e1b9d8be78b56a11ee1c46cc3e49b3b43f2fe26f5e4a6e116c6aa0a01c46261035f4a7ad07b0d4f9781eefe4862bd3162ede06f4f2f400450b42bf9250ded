# Media Query List Parser <img src="https://cssdb.org/images/css.svg" alt="for CSS" width="90" height="90" align="right">

[<img alt="npm version" src="https://img.shields.io/npm/v/@csstools/media-query-list-parser.svg" height="20">][npm-url]
[<img alt="Build Status" src="https://github.com/csstools/postcss-plugins/actions/workflows/test.yml/badge.svg?branch=main" height="20">][cli-url]
[<img alt="Discord" src="https://shields.io/badge/Discord-5865F2?logo=discord&logoColor=white">][discord]

Implemented from : https://www.w3.org/TR/mediaqueries-5/

## Usage

Add [Media Query List Parser] to your project:

```bash
npm install @csstools/media-query-list-parser @csstools/css-parser-algorithms @csstools/css-tokenizer --save-dev
```

[Media Query List Parser] depends on our CSS tokenizer and parser algorithms.
It must be used together with `@csstools/css-tokenizer` and `@csstools/css-parser-algorithms`.

```ts
import { parse } from '@csstools/media-query-list-parser';

export function parseCustomMedia() {
	const mediaQueryList = parse('screen and (min-width: 300px), (50px < height < 30vw)');

	mediaQueryList.forEach((mediaQuery) => {
		mediaQuery.walk((entry, index) => {
			// Index of the current Node in `parent`.
			console.log(index);
			// Type of `parent`.
			console.log(entry.parent.type);

			// Type of `node`
			{
				// Sometimes nodes can be arrays.
				if (Array.isArray(entry.node)) {
					entry.node.forEach((item) => {
						console.log(item.type);
					});
				}

				if ('type' in entry.node) {
					console.log(entry.node.type);
				}
			}

			// stringified version of the current node.
			console.log(entry.node.toString());

			// Return `false` to stop the walker.
			return false;
		});
	});
}
```

[cli-url]: https://github.com/csstools/postcss-plugins/actions/workflows/test.yml?query=workflow/test
[discord]: https://discord.gg/bUadyRwkJS
[npm-url]: https://www.npmjs.com/package/@csstools/media-query-list-parser

[Media Query List Parser]: https://github.com/csstools/postcss-plugins/tree/main/packages/media-query-list-parser
