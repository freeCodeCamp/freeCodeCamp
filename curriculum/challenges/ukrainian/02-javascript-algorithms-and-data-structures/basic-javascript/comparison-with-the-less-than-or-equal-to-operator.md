---
id: 56533eb9ac21ba0edf2244d7
title: Порівняння з оператором "менше або рівне"
challengeType: 1
videoUrl: 'https://scrimba.com/c/cNVR7Am'
forumTopicId: 16788
dashedName: comparison-with-the-less-than-or-equal-to-operator
---

# --description--

Оператор "менше або рівне"(`<=`) порівнює значення двох чисел. Якщо число ліворуч є меншим, ніж число праворуч або дорівнює йому, то видається результат `true`. Якщо число ліворуч більше за число праворуч, то видається результат `false`. Так само, як і оператор рівності, оператор "менше або рівне" конвертує типи даних.

**Наприклад:**

```js
4   <= 5
'7' <= 7
5   <= 5
3   <= 2
'8' <= 4
```

Відповідно, ці вирази будуть оцінені як `true`, `true`, `true`, `false`, та `false`.

# --instructions--

Додайте оператор "менше або рівне до вказаних рядків, щоб оператор повернення спрацював.

# --hints--

`testLessOrEqual(0)` повинен повернути рядок `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(0) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(11)` повинен повернути рядок `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(11) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(12)` повинен повернути рядок `Smaller Than or Equal to 12`

```js
assert(testLessOrEqual(12) === 'Smaller Than or Equal to 12');
```

`testLessOrEqual(23)` повинен повернути рядок `Smaller Than or Equal to 24`

```js
assert(testLessOrEqual(23) === 'Smaller Than or Equal to 24');
```

`testLessOrEqual(24)` повинен повернути рядок `Smaller Than or Equal to 24`

```js
assert(testLessOrEqual(24) === 'Smaller Than or Equal to 24');
```

`testLessOrEqual(25)` повинен повернути рядок `More Than 24`

```js
assert(testLessOrEqual(25) === 'More Than 24');
```

`testLessOrEqual(55)` повинен повернути рядок `More Than 24`

```js
assert(testLessOrEqual(55) === 'More Than 24');
```

Оператор `<=` потрібно використати принаймні двічі

```js
assert(code.match(/val\s*<=\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testLessOrEqual(val) {
  if (val) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);
```

# --solutions--

```js
function testLessOrEqual(val) {
  if (val <= 12) {  // Change this line
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  // Change this line
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}
```
