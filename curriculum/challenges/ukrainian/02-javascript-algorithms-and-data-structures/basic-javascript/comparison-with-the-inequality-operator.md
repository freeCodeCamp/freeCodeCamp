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

**Наприклад**

```js
1 !=  2
1 != "1"
1 != '1'
1 != true
0 != false
```

У такому ж порядку, як вони є, ці вирази будуть оцінені, як `true`, `false`, `false`, `false` і `false`.

# --instructions--

Додайте оператора нерівності `!=` до команди `if`, щоб функція повернула рядок `Not Equal`, коли `val` не дорівнює `99`.

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

Слід використовувати оператор `!=`

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
