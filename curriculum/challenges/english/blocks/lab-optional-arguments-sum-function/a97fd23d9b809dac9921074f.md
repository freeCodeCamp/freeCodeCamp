---
id: a97fd23d9b809dac9921074f
title: Build an Optional Arguments Sum Function
challengeType: 26
dashedName: build-an-optional-arguments-sum-function
---

# --description--

In this lab you will build a function that accepts up to two arguments, and sum them, but if there is only one argument returns a function that waits for the second number to sum.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. Create a function `addTogether`.
2. If the function receives two arguments, the function should return the sum of the two arguments.
3. If only one argument is provided, `addTogether` should return a function.
   - When the returned function is called with a single argument, it should return the sum.

   ```js
   const sumTwoAnd = addTogether(2);
   sumTwoAnd(3); // 5
   ```

4. If either argument isn't a valid number, return `undefined`.

# --hints--

You should have the `addTogether` function.

```js
assert.isFunction(addTogether);
```

`addTogether(2, 3)` should return 5.

```js
assert.deepEqual(addTogether(2, 3), 5);
```

`addTogether(23.4, 30)` should return 53.4.

```js
assert.deepEqual(addTogether(23.4, 30), 53.4);
```

`addTogether("2", 3)` should return `undefined`.

```js
assert.isUndefined(addTogether('2', 3));
```

`addTogether(5, undefined)` should return `undefined`.

```js
assert.isUndefined(addTogether(5, undefined));
```

`addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")` should return `undefined`.

```js
assert.isUndefined(addTogether('https://www.youtube.com/watch?v=dQw4w9WgXcQ'));
```

`addTogether(5)` should return a function.

```js
assert.isFunction(addTogether(5));
```

`addTogether(5)(7)` should return 12.

```js
assert.deepEqual(addTogether(5)(7), 12);
```

`addTogether(2)([3])` should return `undefined`.

```js
assert.isUndefined(addTogether(2)([3]));
```

`addTogether(2, "3")` should return `undefined`.

```js
assert.isUndefined(addTogether(2, '3'));
```

# --seed--

## --seed-contents--

```js

```

# --solutions--

```js
function addTogether() {
  const first = arguments[0];
  if (typeof(first) !== 'number') {
    return undefined;
  }
  if (arguments.length === 1) {
    return function(second) {
      if (typeof(second) !== 'number') {
        return undefined;
      }
      return first + second;
    };
  }
  const second = arguments[1];
  if (typeof(second) !== 'number') {
    return undefined;
  }
  return first + second;
}
```
