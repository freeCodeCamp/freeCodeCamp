# parse-json [![Build Status](https://travis-ci.org/sindresorhus/parse-json.svg?branch=master)](https://travis-ci.org/sindresorhus/parse-json)

> Parse JSON with more helpful errors


## Install

```
$ npm install --save parse-json
```


## Usage

```js
var parseJson = require('parse-json');
var json = '{\n\t"foo": true,\n}';


JSON.parse(json);
/*
undefined:3
}
^
SyntaxError: Unexpected token }
*/


parseJson(json);
/*
JSONError: Trailing comma in object at 3:1
}
^
*/


parseJson(json, 'foo.json');
/*
JSONError: Trailing comma in object at 3:1 in foo.json
}
^
*/


// you can also add the filename at a later point
try {
	parseJson(json);
} catch (err) {
	err.fileName = 'foo.json';
	throw err;
}
/*
JSONError: Trailing comma in object at 3:1 in foo.json
}
^
*/
```

## API

### parseJson(input, [reviver], [filename])

#### input

Type: `string`

#### reviver

Type: `function`

Prescribes how the value originally produced by parsing is transformed, before being returned. See [`JSON.parse` docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse#Using_the_reviver_parameter
) for more.

#### filename

Type: `string`

Filename displayed in the error message.


## License

MIT © [Sindre Sorhus](http://sindresorhus.com)
