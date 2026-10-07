[![npm](https://img.shields.io/npm/l/es6-object-assign.svg)](https://www.npmjs.org/package/es6-object-assign)
[![npm](https://img.shields.io/npm/v/es6-object-assign.svg)](https://www.npmjs.org/package/es6-object-assign)

# ES6 Object.assign()

ECMAScript 2015 (ES2015/ES6) [Object.assign()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign) polyfill and [ponyfill](https://ponyfill.com) for ECMAScript 5 environments.

The main definition of this package has been copied from the polyfill defined in the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign).

## Installation

### NPM

```bash
npm install es6-object-assign
```

### Manual download and import

The package is also available as a UMD module (compatible with AMD, CommonJS and exposing a global variable `ObjectAssign`) in `dist/object-assign.js` and `dist/object-assign.min.js` (833 bytes minified and gzipped).

The versions with automatic polyfilling are `dist/object-assign-auto.js` and `dist/object-assign-auto.min.js`.

## Usage

**CommonJS**:

```javascript
// Polyfill, modifying the global Object
require('es6-object-assign').polyfill();
var obj = Object.assign({}, { foo: 'bar' });

// Same version with automatic polyfilling
require('es6-object-assign/auto');
var obj = Object.assign({}, { foo: 'bar' });

// Or ponyfill, using a reference to the function without modifying globals
var assign = require('es6-object-assign').assign;
var obj = assign({}, { foo: 'bar' });
```

**Globals**:

Manual polyfill:

```html
<script src="<your-libs-directory>/object-assign.min.js"></script>
<script>
  // Polyfill, modifying the global Object
  window.ObjectAssign.polyfill();
  var obj = Object.assign({}, { foo: 'bar' });
</script>
```

Automatic polyfill:

```html
<script src="<your-libs-directory>/object-assign-auto.min.js"></script>
<script>
  var obj = Object.assign({}, { foo: 'bar' });
</script>
```

Ponyfill, without modifying globals:

```html
<script src="<your-libs-directory>/object-assign.min.js"></script>
<script>
  var assign = window.ObjectAssign.assign;
  var obj = assign({}, { foo: 'bar' });
</script>
```

## License

The MIT License (MIT)

Copyright (c) 2017 Rubén Norte

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
