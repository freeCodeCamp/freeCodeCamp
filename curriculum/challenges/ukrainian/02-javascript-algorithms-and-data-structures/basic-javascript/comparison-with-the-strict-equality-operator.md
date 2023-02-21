---
id: 56533eb9ac21ba0edf2244d1
title: Порівняння з оператором «строго дорівнює»
challengeType: 1
videoUrl: 'https://scrimba.com/c/cy87atr'
forumTopicId: 16790
dashedName: comparison-with-the-strict-equality-operator
---

# --description--

Строга рівність (`===`) є аналогом оператора рівності (`==`). Однак на відміну від оператора «дорівнює», який намагається перетворити обидва значення в порівнянні зі звичайним типом, оператор строгої рівності не перетворює типи даних.

Якщо порівнювані значення мають різні типи, вони вважаються нерівними і оператор строгої рівності поверне false.

**Приклади**

```js
3 ===  3  // true
3 === '3' // false
```

У другому прикладі `3` є типом `Number`, а `'3'` є типом `String`.

# --instructions--

Використайте оператор «строго дорівнює» в інструкції `if`, щоб функція повернула рядок `Equal`, якщо `val` строго дорівнює `7`.

# --hints--

`testStrict(10)` має повертати рядок `Not Equal`

```js
assert(testStrict(10) === 'Not Equal');
```

`testStrict(7)` має повертати рядок `Equal`

```js
assert(testStrict(7) === 'Equal');
```

`testStrict("7")` має повертати рядок `Not Equal`

```js
assert(testStrict('7') === 'Not Equal');
```

Ви повинні використати оператор `===`

```js
assert(code.match(/(val\s*===\s*\d+)|(\d+\s*===\s*val)/g).length > 0);
```

# --seed--

## --seed-contents--

```js
// Setup
function testStrict(val) {
  if (val) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

testStrict(10);
```

# --solutions--

```js
function testStrict(val) {
  if (val === 7) {
    return "Equal";
  }
  return "Not Equal";
}
```
