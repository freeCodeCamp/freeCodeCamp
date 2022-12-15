---
id: 56533eb9ac21ba0edf2244d3
title: Порівняння з Оператором Абсолютної Нерівності
challengeType: 1
videoUrl: 'https://scrimba.com/c/cKekkUy'
forumTopicId: 16791
dashedName: comparison-with-the-strict-inequality-operator
---

# --description--

Оператор абсолютної нерівності (`!==`) є логічною протилежністю оператора абсолютної рівності. Це означає «строго нерівно» та повертає `false`, де строга рівність повернула б `true` та *навпаки*. Оператор абсолютної нерівності не буде перетворювати типи даних.

**Приклади**

```js
3 !==  3  // false
3 !== '3' // true
4 !==  3  // true
```

# --instructions--

Add the strict inequality operator to the `if` statement so the function will return the string `Not Equal` when `val` is not strictly equal to `17`

# --hints--

`testStrictNotEqual(17)` має повернути рядок `Equal`

```js
assert(testStrictNotEqual(17) === 'Equal');
```

`testStrictNotEqual("17")` має повернути рядок `Not Equal`

```js
assert(testStrictNotEqual('17') === 'Not Equal');
```

`testStrictNotEqual(12)` має повернути рядок `Not Equal`

```js
assert(testStrictNotEqual(12) === 'Not Equal');
```

`testStrictNotEqual("bob")` має повернути рядок `Not Equal`

```js
assert(testStrictNotEqual('bob') === 'Not Equal');
```

You should use the `!==` operator

```js
assert(code.match(/(val\s*!==\s*\d+)|(\d+\s*!==\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrictNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);
```

# --solutions--

```js
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}
```
