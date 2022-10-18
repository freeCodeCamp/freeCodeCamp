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
5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false
```

# --instructions--

Add the greater than operator to the indicated lines so that the return statements make sense.

# --hints--

`testGreaterThan(0)` має повернути рядок `10 or Under`

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

You should use the `>` operator at least twice

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
