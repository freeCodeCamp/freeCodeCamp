---
title: Function Length
---
## Function Length

The `length` property on the function object holds the number of arguments expected by the function when called.

```javascript

function noArgs() { }

function oneArg(a) { }

console.log(noArgs.length); // 0

console.log(oneArg.length); // 1
```

### ES2015 Syntax

ES2015, or ES6 as it is commonly called, introduced the rest operator and default function parameters. Both of these additions change the way the `length` property works.

If either the rest operator or default parameters are used in a function declaration the `length` property will only include the number of arguments before a rest operator or a default parameter.

```javascript
function withRest(...args) { }

function withArgsAndRest(a, b, ...args) { }

function withDefaults(a, b = 'I am the default') { }

console.log(withRest.length); // 0

console.log(withArgsAndRest.length); // 2

console.log(withDefaults.length); // 1
```

More Information on `Function.length` can be found on [Mozilla's MDN Docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/length).

