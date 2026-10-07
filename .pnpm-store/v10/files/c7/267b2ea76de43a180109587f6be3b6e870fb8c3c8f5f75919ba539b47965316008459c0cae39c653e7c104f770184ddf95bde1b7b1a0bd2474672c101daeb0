![npm](https://img.shields.io/npm/v/loupe?logo=npm)
![Build](https://github.com/chaijs/loupe/workflows/Build/badge.svg?branch=master)
![Codecov branch](https://img.shields.io/codecov/c/github/chaijs/loupe/master?logo=codecov)

# What is loupe?

Loupe turns the object you give it into a string. It's similar to Node.js' `util.inspect()` function, but it works cross platform, in most modern browsers as well as Node.

## Installation

### Node.js

`loupe` is available on [npm](http://npmjs.org). To install it, type:

    $ npm install loupe

### Browsers

You can also use it within the browser; install via npm and use the `loupe.js` file found within the download. For example:

```html
<script src="./node_modules/loupe/loupe.js"></script>
```

## Usage

``` js
const { inspect } = require('loupe');
```

```js
inspect({ foo: 'bar' }); // => "{ foo: 'bar' }"
inspect(1); // => '1'
inspect('foo'); // => "'foo'"
inspect([ 1, 2, 3 ]); // => '[ 1, 2, 3 ]'
inspect(/Test/g); // => '/Test/g'

// ...
```

## Tests

```bash
$ npm test
```

Coverage:

```bash
$ npm run upload-coverage
```

## License

(The MIT License)

Copyright (c) 2011-2013 Jake Luer jake@alogicalparadox.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
