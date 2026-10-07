/**
Check if a value is a plain object.

An object is plain if it's created by either `{}`, `new Object()`, or `Object.create(null)`.

@example
```
import isPlainObject = require('is-plain-obj');

isPlainObject({foo: 'bar'});
//=> true

isPlainObject(new Object());
//=> true

isPlainObject(Object.create(null));
//=> true

isPlainObject([1, 2, 3]);
//=> false

class Unicorn {}
isPlainObject(new Unicorn());
//=> false
```
*/
declare function isPlainObj(value: unknown): value is object;

export = isPlainObj;
