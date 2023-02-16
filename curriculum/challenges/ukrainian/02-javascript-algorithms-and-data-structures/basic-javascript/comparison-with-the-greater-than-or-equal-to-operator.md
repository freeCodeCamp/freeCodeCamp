---
id: 56533eb9ac21ba0edf2244d5
title: Порівняння з оператором «більше ніж або дорівнює»
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6KBqtV'
forumTopicId: 16785
dashedName: comparison-with-the-greater-than-or-equal-to-operator
---

# --description--

Оператор «більше ніж або дорівнює» (`>=`) порівнює значення двох чисел. Якщо число зліва більше чи дорівнює числу справа, оператор повертає `true`. В іншому випадку він повертає `false`.

Як і оператор «дорівнює», «більше ніж або дорівнює» перетворює типи даних під час порівняння.

**Приклади**

```js
6   >=  6  // true
7   >= '3' // true
2   >=  3  // false
'7' >=  9  // false
```

# --instructions--

Додайте оператор «більше ніж або дорівнює» до вказаних рядків, щоб повернені інструкції мали сенс.

# --hints--

`testGreaterOrEqual(0)` має повертати рядок `Less than 10`

```js
assert(testGreaterOrEqual(0) === 'Less than 10');
```

`testGreaterOrEqual(9)` має повертати рядок `Less than 10`

```js
assert(testGreaterOrEqual(9) === 'Less than 10');
```

`testGreaterOrEqual(10)` має повертати рядок `10 or Over`

```js
assert(testGreaterOrEqual(10) === '10 or Over');
```

`testGreaterOrEqual(11)` має повертати рядок `10 or Over`

```js
assert(testGreaterOrEqual(11) === '10 or Over');
```

`testGreaterOrEqual(19)` має повертати рядок `10 or Over`

```js
assert(testGreaterOrEqual(19) === '10 or Over');
```

`testGreaterOrEqual(100)` має повертати рядок `20 or Over`

```js
assert(testGreaterOrEqual(100) === '20 or Over');
```

`testGreaterOrEqual(21)` має повертати рядок `20 or Over`

```js
assert(testGreaterOrEqual(21) === '20 or Over');
```

Ви повинні використати оператор `>=` принаймні двічі

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
