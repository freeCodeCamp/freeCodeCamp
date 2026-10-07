# css-functions-list

[![Build Status][ci-img]][ci]

List of standard and
[browser specific](<(https://developer.mozilla.org/en-US/docs/Glossary/Vendor_Prefix)>) CSS
functions.

Data sources are:

- MDN reference on [CSS functions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Functions)
- MDN reference on
  [general CSS features](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference).
- MDN
  [browser compatibility data for CSS functions](https://github.com/mdn/browser-compat-data/tree/main/css/types)
- Manually maintained experimental, legacy and removed functions

## Install

```sh
npm install css-functions-list --save
```

## Usage

```js
import { promises as fs } from 'fs';
import functionsListPath from 'css-functions-list';

(async () => {
	const functionsList = JSON.parse(await fs.readFile(functionsListPath, 'utf8'));
	console.log(functionsList);
	/* [
		'abs',
		'acos',
		'annotation',
		'asin',
		'atan',
		'atan2',
		'attr',
		'blur',
		'brightness',
		'calc'
		// …
	]; */
})();
```

## API

### functionsListPath

Type: `string`

Path to CSS functions list JSON file.

## License

MIT © [Ivan Nikolić](http://ivannikolic.com)

<!-- prettier-ignore-start -->

[ci]: https://github.com/niksy/css-functions-list/actions?query=workflow%3ACI
[ci-img]: https://github.com/niksy/css-functions-list/actions/workflows/ci.yml/badge.svg?branch=master

<!-- prettier-ignore-end -->
