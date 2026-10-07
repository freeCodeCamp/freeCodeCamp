# parse-json

> Parse JSON with more helpful errors

## Install

```
$ npm install parse-json
```

## Usage

```js
const parseJson = require('parse-json');

const json = '{\n\t"foo": true,\n}';


JSON.parse(json);
/*
undefined:3
}
^
SyntaxError: Unexpected token }
*/


parseJson(json);
/*
JSONError: Unexpected token } in JSON at position 16 while parsing near '{      "foo": true,}'

  1 | {
  2 |   "foo": true,
> 3 | }
    | ^
*/


parseJson(json, 'foo.json');
/*
JSONError: Unexpected token } in JSON at position 16 while parsing near '{      "foo": true,}' in foo.json

  1 | {
  2 |   "foo": true,
> 3 | }
    | ^
*/


// You can also add the filename at a later point
try {
	parseJson(json);
} catch (error) {
	if (error instanceof parseJson.JSONError) {
		error.fileName = 'foo.json';
	}

	throw error;
}
/*
JSONError: Unexpected token } in JSON at position 16 while parsing near '{      "foo": true,}' in foo.json

  1 | {
  2 |   "foo": true,
> 3 | }
    | ^
*/
```

## API

### parseJson(string, reviver?, filename?)

Throws a `JSONError` when there is a parsing error.

#### string

Type: `string`

#### reviver

Type: `Function`

Prescribes how the value originally produced by parsing is transformed, before being returned. See [`JSON.parse` docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Using_the_reviver_parameter
) for more.

#### filename

Type: `string`

Filename displayed in the error message.

### parseJson.JSONError

Exposed for `instanceof` checking.

#### fileName

Type: `string`

The filename displayed in the error message.

#### codeFrame

Type: `string`

The printable section of the JSON which produces the error.

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-parse-json?utm_source=npm-parse-json&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
