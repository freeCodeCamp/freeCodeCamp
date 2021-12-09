---
id: 56533eb9ac21ba0edf2244d5
title: Порівняння з оператором «Більше ніж дорівнює»
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KBqtV'
forumTopicId: 16785
dashedName: comparison-with-the-greater-than-or-equal-to-operator
---

# --description--

Оператор "більше ніж дорівнює" (`>=`) порівнює значення двох чисел. Якщо число зліва більше за число справа, тоді функція є `true`. В іншому випадку - вона `false`.

Так само, як і оператор рівності, оператор "більше ніж дорівнює" конвертує типи даних під час їх порівняння.

**Наприклад**

```js
6   >=  6
7   >= '3'
2   >=  3
'7' >=  9
```

У такому ж порядку, як вони є, ці вирази будуть оцінені, як `true`, `true`, `false`, і `false`.

# --instructions--

Додайте оператор "більше ніж дорівнює" до зазначених рядків, щоб оператор повернення мав сенс.

# --hints--

`testGreaterOrEqual(0)` повинен повернути рядок `Less than 10`

```js
assert(testGreaterOrEqual(0) === 'Less than 10');
```

`testGreaterOrEqual(9)` повинен повернути рядок `Less than 10`

```js
assert(testGreaterOrEqual(9) === 'Less than 10');
```

`testGreaterOrEqual(10)` повинен повернути рядок `10 or Over`

```js
assert(testGreaterOrEqual(10) === '10 or Over');
```

`testGreaterOrEqual(11)` повинен повернути рядок `10 or Over`

```js
assert(testGreaterOrEqual(11) === '10 or Over');
```

`testGreaterOrEqual(19)` повинен повернути рядок `10 or Over`

```js
assert(testGreaterOrEqual(19) === '10 or Over');
```

`testGreaterOrEqual(100)` повинен повернути рядок `20 or Over`

```js
assert(testGreaterOrEqual(100) === '20 or Over');
```

`testGreaterOrEqual(21)` повинен повернути рядок `20 or Over`

```js
assert(testGreaterOrEqual(21) === '20 or Over');
```

Слід використовувати оператор `>=` принаймні двічі

```js
assert(code.match(/val\s*>=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterOrEqual(val) {
  if (val) {  // Change this line
    return "20 or Over";
  }

  if (val) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);
```

# --solutions--

```js
function testGreaterOrEqual(val) {
  if (val >= 20) {  // Change this line
    return "20 or Over";
  }

  if (val >= 10) {  // Change this line
    return "10 or Over";
  }

  return "Less than 10";
}
```
