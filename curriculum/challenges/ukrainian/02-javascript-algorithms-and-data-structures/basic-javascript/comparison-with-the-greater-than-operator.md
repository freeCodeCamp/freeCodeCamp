---
id: 56533eb9ac21ba0edf2244d4
title: Порівняння з оператором «більше ніж»
challengeType: 1
videoUrl: 'https://scrimba.com/c/cp6GbH4'
forumTopicId: 16786
dashedName: comparison-with-the-greater-than-operator
---

# --description--

Оператор «більше ніж» (`>`) порівнює значення двох чисел. Якщо число зліва більше за число справа, то воно повертається `true`. В іншому випадку видається результат `false`.

Як і оператор «рівність», «більше ніж» перетворюватиме типи даних під час порівняння.

**Приклади**

```js
5   >  3
7   > '3'
2   >  3
'1' >  9
```

По-порядку, ці вирази оцінюватимуться як `true`, `true`, `false`, та `false`.

# --instructions--

Додайте оператор «більше ніж» до вказаних рядків, щоб оператор повернення спрацював.

# --hints--

`GreaterThan(0)` має повернути рядок `10 або Under`

```js
assert(testGreaterThan(0) === '10 or Under');
```

`testGreaterThan(10)` має повернути рядок `10 or Under`

```js
assert(testGreaterThan(10) === '10 or Under');
```

`testGreaterThan(11)` має повернути рядок `Over 10`

```js
assert(testGreaterThan(11) === 'Over 10');
```

`testGreaterThan(99)` має повернути рядок `Over 10`

```js
assert(testGreaterThan(99) === 'Over 10');
```

`testGreaterThan(100)` має повернути рядок `Over 10`

```js
assert(testGreaterThan(100) === 'Over 10');
```

`testGreaterThan(101)` має повернути рядок `Over 100`

```js
assert(testGreaterThan(101) === 'Over 100');
```

`testGreaterThan(150)` має повернути рядок `Over 100`

```js
assert(testGreaterThan(150) === 'Over 100');
```

Ви повинні використати оператор `>` принаймні двічі

```js
assert(code.match(/val\s*>\s*('|")*\d+('|")*/g).length > 1);
```

# --seed--

## --seed-contents--

```js
function testGreaterThan(val) {
  if (val) {  // Change this line
    return "Over 100";
  }

  if (val) {  // Change this line
    return "Over 10";
  }

  return "10 or Under";
}

testGreaterThan(10);
```

# --solutions--

```js
function testGreaterThan(val) {
  if (val > 100) {  // Change this line
    return "Over 100";
  }
  if (val > 10) {  // Change this line
    return "Over 10";
  }
  return "10 or Under";
}
```
