# stable-hash

A tiny and fast (481b <sup>[unpkg](https://unpkg.com/stable-hash@0.0.3/dist/index.mjs)</sup>) lib for "stably hashing" a JavaScript value. Originally created for [SWR](https://github.com/vercel/swr).

It's similar to `JSON.stringify(value)`, but:
1. Supports any JavaScript value (BigInt, NaN, Symbol, function, class, ...)
2. Sorts object keys (stable)
3. Supports circular objects

## Use

```bash
yarn add stable-hash
```

```js
import hash from 'stable-hash'

hash(anyJavaScriptValueHere) // returns a string
```

## Examples

### Primitive Value

```js
hash(1)
hash('foo')
hash(true)
hash(undefined)
hash(null)
hash(NaN)
```

BigInt:

```js
hash(1) === hash(1n)
hash(1) !== hash(2n)
```

Symbol:

```js
hash(Symbol.for('foo')) === hash(Symbol.for('foo'))
hash(Symbol.for('foo')) === hash(Symbol('foo'))
hash(Symbol('foo')) === hash(Symbol('foo'))
hash(Symbol('foo')) !== hash(Symbol('bar'))
```

_Since Symbols cannot be serialized, stable-hash simply uses its description as the hash._

### Regex

```js
hash(/foo/) === hash(/foo/)
hash(/foo/) !== hash(/bar/)
```

### Date

```js
hash(new Date(1)) === hash(new Date(1))
```

### Array

```js
hash([1, '2', [new Date(3)]]) === hash([1, '2', [new Date(3)]])
hash([1, 2]) !== hash([2, 1])
```

Circular:

```js
const foo = []
foo.push(foo)
hash(foo) === hash(foo)
```

### Object

```js
hash({ foo: 'bar' }) === hash({ foo: 'bar' })
hash({ foo: { bar: 1 } }) === hash({ foo: { bar: 1 } })
```

Stable:

```js
hash({ a: 1, b: 2, c: 3 }) === hash({ c: 3, b: 2, a: 1 })
```

Circular:

```js
const foo = {}
foo.foo = foo
hash(foo) === hash(foo)
```

### Function, Class, Set, Map, Buffer...

`stable-hash` guarantees reference consistency (`===`) for objects that the constructor isn't `Object`.

```js
const foo = () => {}
hash(foo) === hash(foo)
hash(foo) !== hash(() => {})
```

```js
class Foo {}
hash(Foo) === hash(Foo)
hash(Foo) !== hash(class {})
```

```js
const foo = new Set([1])
hash(foo) === hash(foo)
hash(foo) !== hash(new Set([1]))
```

## Notes

This function does something similar to `JSON.stringify`, but more than it. It doesn't generate a secure checksum, which usually has a fixed length and is hard to be reversed. With `stable-hash` it's still possible to get the original data. Also, the output might include any charaters, not just alphabets and numbers like other hash algorithms. So:

- Use another encoding layer on top of it if you want to display the output. 
- Use another crypto layer on top of it if you want to have a secure and fixed length hash.

```js
import crypto from 'crypto'
import hash from 'stable-hash'

const weakHash = hash(anyJavaScriptValueHere)
const encodedHash = Buffer.from(weakHash).toString('base64')
const safeHash = crypto.createHash('MD5').update(weakHash).digest('hex')
```

Also, the consistency of this lib is sometimes guaranteed by the singularity of the WeakMap instance. So it might not generate the consistent results when running in different runtimes, e.g. server/client or parent/worker scenarios.

## License

Created by Shu Ding. Released under the MIT License.
