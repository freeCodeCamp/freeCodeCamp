# JSON Pointer for nodejs

This is an implementation of [JSON Pointer](http://tools.ietf.org/html/draft-ietf-appsawg-json-pointer-08).

## Usage
```javascript
var jsonpointer = require('jsonpointer');
var obj = { foo: 1, bar: { baz: 2}, qux: [3, 4, 5]};

jsonpointer.get(obj, '/foo');     // returns 1
jsonpointer.get(obj, '/bar/baz'); // returns 2
jsonpointer.get(obj, '/qux/0');   // returns 3
jsonpointer.get(obj, '/qux/1');   // returns 4
jsonpointer.get(obj, '/qux/2');   // returns 5
jsonpointer.get(obj, '/quo');     // returns undefined

jsonpointer.set(obj, '/foo', 6);  // sets obj.foo = 6;
jsonpointer.set(obj, '/qux/-', 6) // sets obj.qux = [3, 4, 5, 6]

var pointer = jsonpointer.compile('/foo')
pointer.get(obj)    // returns 1
pointer.set(obj, 1) // sets obj.foo = 1
```

## Testing

    $ node test.js
    All tests pass.
    $

[![Build Status](https://travis-ci.org/janl/node-jsonpointer.png?branch=master)](https://travis-ci.org/janl/node-jsonpointer)

## Author

(c) 2011-2015 Jan Lehnardt <jan@apache.org> & Marc Bachmann <https://github.com/marcbachmann>

## License

MIT License.
