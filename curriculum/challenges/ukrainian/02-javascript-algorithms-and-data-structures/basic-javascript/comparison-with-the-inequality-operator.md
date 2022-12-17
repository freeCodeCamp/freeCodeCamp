---
id: 56533eb9ac21ba0edf2244d2
title: Порівняння з Оператором "Не дорівнює"
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBm9Sr'
forumTopicId: 16787
dashedName: comparison-with-the-inequality-operator
---

# --description--

Оператор "не дорівнює" (`!=`) є протилежним до оператора рівності. Це означає, що вирази не еквівалентні і що вони повернуться `false`, де рівність повернеться `true` і *навпаки*. Так само, як і оператор рівності, оператор "не дорівнює" конвертує типи даних під час їх порівняння.

**Приклади**

```js
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
```

# --instructions--

Add the inequality operator `!=` in the `if` statement so that the function will return the string `Not Equal` when `val` is not equivalent to `99`.

# --hints--

`testNotEqual(99)` має повернути рядок `Equal`

```js
assert(testNotEqual(99) === 'Equal');
```

`testNotEqual("99")` має повернути рядок `Equal`

```js
assert(testNotEqual('99') === 'Equal');
```

`testNotEqual(12)` має повернути рядок `Not Equal`

```js
assert(testNotEqual(12) === 'Not Equal');
```

`testNotEqual("12")` має повернути рядок `Not Equal`

```js
assert(testNotEqual('12') === 'Not Equal');
```

`testNotEqual("bob")` має повернути рядок `Not Equal`

```js
assert(testNotEqual('bob') === 'Not Equal');
```

You should use the `!=` operator

```js
assert(code.match(/(?!!==)!=/));
```

# --seed--

## --seed-contents--

```js
// Setup
function testNotEqual(val) {
  if (val) { // Change this line
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);
```

# --solutions--

```js
function testNotEqual(val) {
  if (val != 99) {
    return "Not Equal";
  }
  return "Equal";
}
```
