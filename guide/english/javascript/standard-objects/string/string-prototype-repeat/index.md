---
title: String.prototype.repeat
---

## String.prototype.repeat

The `.repeat(n)` method gets an integer paramenter and returns the string repeated `n` times.

### For example

```js
  let str = "test";
  console.log(str.repeat(3)); // "testtesttest", test is repeated 3 times

  // NB
  console.log(str.repeat(2.5)); // "testtest", 2.5 is converted to an integer and test is repeated 2 times
```

#### More Information
[MDN - String.prototype.repeat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat)
