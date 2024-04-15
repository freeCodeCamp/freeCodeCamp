---
id: 594dc6c729e5700999302b45
title: Збалансовані дужки
challengeType: 1
forumTopicId: 302230
dashedName: balanced-brackets
---

# --description--

Визначте, чи згенерований рядок дужок збалансований. Тобто чи він складається з пар відкриваючих/закриваючих дужок (у такому ж порядку), кожна з яких на своєму місці.

**Приклади:**
| Ввід                      | Вивід |
| ------------------------- | ----- |
| <code>\[]</code> | true  |
| <code>]\[</code> | false |
| <code>[][]</code> | true  |
| <code>]\[]</code> | false |
| <code>\[]]\[\[]</code> | false |
| <code>\[\[\[\[]]]]</code> | true  |

# --hints--

`isBalanced` має бути функцією.

```js
assert(typeof isBalanced === 'function');
```

`isBalanced("[]")` має повернути `true`.

```js
assert(isBalanced(testCases[0]));
```

`isBalanced("]][[[][][][]][")` має повернути `false`.

```js
assert(!isBalanced(testCases[1]));
```

`isBalanced("[][[[[][][[[]]]]]]")` має повернути `true`.

```js
assert(isBalanced(testCases[2]));
```

`isBalanced("][")` має повернути `false`.

```js
assert(!isBalanced(testCases[3]));
```

`isBalanced("[[[]]]][[]")` має повернути `false`.

```js
assert(!isBalanced(testCases[4]));
```

`isBalanced("][[]")` має повернути `false`.

```js
assert(!isBalanced(testCases[5]));
```

`isBalanced("][[][]][[[]]")` має повернути `false`.

```js
assert(!isBalanced(testCases[6]));
```

`isBalanced("[[][]]][")` має повернути `false`.

```js
assert(!isBalanced(testCases[7]));
```

`isBalanced("[[[]]][[]]]][][[")` має повернути `false`.

```js
assert(!isBalanced(testCases[8]));
```

`isBalanced("[]][[]]][[[[][]]")` має повернути `false`.

```js
assert(!isBalanced(testCases[9]));
```

`isBalanced("][]][[][")` має повернути `false`.

```js
assert(!isBalanced(testCases[10]));
```

`isBalanced("[[]][[][]]")` має повернути `true`.

```js
assert(isBalanced(testCases[11]));
```

`isBalanced("[[]]")` має повернути `true`.

```js
assert(isBalanced(testCases[12]));
```

`isBalanced("]][]][[]][[[")` має повернути `false`.

```js
assert(!isBalanced(testCases[13]));
```

`isBalanced("][]][][[")` має повернути `false`.

```js
assert(!isBalanced(testCases[14]));
```

`isBalanced("][][")` має повернути `false`.

```js
assert(!isBalanced(testCases[15]));
```

`isBalanced("[]]]")` має повернути `false`.

```js
assert(!isBalanced(testCases[16]));
```

`isBalanced("")` має повернути `true`.

```js
assert(isBalanced(testCases[17]));
```

# --seed--

## --after-user-code--

```js
const testCases = [
  '[]',
  ']][[[][][][]][',
  '[][[[[][][[[]]]]]]',
  '][',
  '[[[]]]][[]',
  '][[]',
  '][[][]][[[]]',
  '[[][]]][',
  '[[[]]][[]]]][][[',
  '[]][[]]][[[[][]]',
  '][]][[][',
  '[[]][[][]]',
  '[[]]',
  ']][]][[]][[[',
  '][]][][[',
  '][][',
  '[]]]',
  ''
];
```

## --seed-contents--

```js
function isBalanced(str) {

  return true;
}
```

# --solutions--

```js
function isBalanced(str) {
  if (str === '') return true;
  let a = str;
  let b;
  do {
    b = a;
    a = a.replace(/\[\]/g, '');
  } while (a !== b);
  return !a;
}
```
