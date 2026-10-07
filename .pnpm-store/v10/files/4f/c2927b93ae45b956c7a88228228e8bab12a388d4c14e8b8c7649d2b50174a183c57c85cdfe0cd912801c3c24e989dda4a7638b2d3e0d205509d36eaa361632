## just-curry-it

Part of a [library](../../../../) of zero-dependency npm modules that do just do one thing.  
Guilt-free utilities for every occasion.

[Try it now](http://anguscroll.com/just/just-curry-it)

```js
import curry from 'just-curry-it';

function add(a, b, c) {
  return a + b + c;
}
curry(add)(1)(2)(3); // 6
curry(add)(1)(2)(2); // 5
curry(add)(2)(4, 3); // 9

function add(...args) {
  return args.reduce((sum, n) => sum + n, 0)
}
var curryAdd4 = curry(add, 4)
curryAdd4(1)(2, 3)(4); // 10

function converter(ratio, input) {
  return (input*ratio).toFixed(1);
}
const curriedConverter = curry(converter)
const milesToKm = curriedConverter(1.62);
milesToKm(35); // 56.7
milesToKm(10); // 16.2
```
