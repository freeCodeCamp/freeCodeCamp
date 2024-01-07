---
id: 56533eb9ac21ba0edf2244d2
title: Порівняння з оператором «не дорівнює»
challengeType: 1
videoUrl: 'https://scrimba.com/c/cdBm9Sr'
forumTopicId: 16787
dashedName: comparison-with-the-inequality-operator
---

# --description--

Оператор «не дорівнює» (`!=`) є протилежним до оператора «дорівнює». Це означає, що значення не еквівалентні і оператор повертає `false`, де рівність повернула б `true` та *навпаки*. Як і оператор «дорівнює», «не дорівнює» перетворює типи даних під час порівняння.

**Приклади**

```js
1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false
```

# --instructions--

Додайте оператор «не дорівнює» (`!=`) до інструкції `if`, щоб функція повернула рядок `Not Equal`, якщо `val` не дорівнює `99`.

# --hints--

`testNotEqual(99)` має повертати рядок `Equal`

```js
assert(testNotEqual(99) === 'Equal');
```

`testNotEqual("99")` має повертати рядок `Equal`

```js
assert(testNotEqual('99') === 'Equal');
```

`testNotEqual(12)` має повертати рядок `Not Equal`

```js
assert(testNotEqual(12) === 'Not Equal');
```

`testNotEqual("12")` має повертати рядок `Not Equal`

```js
assert(testNotEqual('12') === 'Not Equal');
```

`testNotEqual("bob")` має повертати рядок `Not Equal`

```js
assert(testNotEqual('bob') === 'Not Equal');
```

Ви повинні використати оператор `!=`

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
