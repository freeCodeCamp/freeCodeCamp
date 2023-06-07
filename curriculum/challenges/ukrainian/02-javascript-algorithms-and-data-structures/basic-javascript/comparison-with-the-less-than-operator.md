---
id: 56533eb9ac21ba0edf2244d6
title: Порівняння з оператором «менше ніж»
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVRWtB'
forumTopicId: 16789
dashedName: comparison-with-the-less-than-operator
---

# --description--

Оператор «менше ніж» (`<`) порівнює значення двох чисел. Якщо число ліворуч менше за число праворуч, оператор повертає `true`. В іншому випадку він повертає `false`. Як і оператор «дорівнює», «менше ніж» перетворює типи даних під час порівняння.

**Приклади**

```js
2   < 5 // true
'3' < 7 // true
5   < 5 // false
3   < 2 // false
'8' < 4 // false
```

# --instructions--

Додайте оператор «менше ніж» до вказаних рядків, щоб повернені інструкції мали сенс.

# --hints--

`testLessThan(0)` має повертати рядок `Under 25`

```js
assert(testLessThan(0) === 'Under 25');
```

`testLessThan(24)` має повертати рядок `Under 25`

```js
assert(testLessThan(24) === 'Under 25');
```

`testLessThan(25)` має повертати рядок `Under 55`

```js
assert(testLessThan(25) === 'Under 55');
```

`testLessThan(54)` має повертати рядок `Under 55`

```js
assert(testLessThan(54) === 'Under 55');
```

`testLessThan(55)` має повертати рядок `55 or Over`

```js
assert(testLessThan(55) === '55 or Over');
```

`testLessThan(99)` має повертати рядок `55 or Over`

```js
assert(testLessThan(99) === '55 or Over');
```

Ви повинні використати оператор `<` принаймні двічі

```js
assert(code.match(/val\s*<\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessThan(val) {
  if (val) {  // Change this line
    return "Under 25";
  }

  if (val) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);
```

# --solutions--

```js
function testLessThan(val) {
  if (val < 25) {  // Change this line
    return "Under 25";
  }

  if (val < 55) {  // Change this line
    return "Under 55";
  }

  return "55 or Over";
}
```
