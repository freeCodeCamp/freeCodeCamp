---
id: 594dc6c729e5700999302b45
title: Збалансовані дужки
challengeType: 1
forumTopicId: 302230
dashedName: balanced-brackets
---

# --description--

Визначте, чи збалансований згенерований рядок дужок; тобто чи він складається повністю з пар відкритих/закритих дужок (у правильному порядку), і кожна розміщена у відповідному місці.

**Приклади:**
| Вихідна інформація        | Результат |
| ------------------------- | --------- |
| <code>\[]</code> | true      |
| <code>]\[</code> | false     |
| <code>[][]</code> | true      |
| <code>]\[]</code> | false     |
| <code>\[]]\[\[]</code> | false     |
| <code>\[\[\[\[]]]]</code> | true      |

# --hints--

`isBalanced` має бути функцією.

```js
assert(typeof isBalanced === 'function');
```

Функція `isBalanced("[]")` має повернути true.

```js
assert(isBalanced(testCases[0]));
```

Функція `isBalanced("]][[[][][][]][")` має повернути false.

```js
assert(!isBalanced(testCases[1]));
```

Функція `isBalanced("[][[[[][][[[]]]]]]")` має повернути true.

```js
assert(isBalanced(testCases[2]));
```

Функція `isBalanced("][")` має повернути false.

```js
assert(!isBalanced(testCases[3]));
```

Функція `isBalanced("[[[]]]][[]")` має повернути false.

```js
assert(!isBalanced(testCases[4]));
```

Функція `isBalanced("][[]")` має повернути false.

```js
assert(!isBalanced(testCases[5]));
```

Функція `isBalanced("][[][]][[[]]")` має повернути false.

```js
assert(!isBalanced(testCases[6]));
```

Функція `isBalanced("[[][]]][")` має повернути false.

```js
assert(!isBalanced(testCases[7]));
```

Функція `isBalanced("[[[]]][[]]]][][[")` має повернути false.

```js
assert(!isBalanced(testCases[8]));
```

Функція `isBalanced("[]][[]]][[[[][]]")` має повернути false.

```js
assert(!isBalanced(testCases[9]));
```

Функція `isBalanced("][]][[][")` має повернути false.

```js
assert(!isBalanced(testCases[10]));
```

Функція `isBalanced("[[]][[][]]")` має повернути true.

```js
assert(isBalanced(testCases[11]));
```

Функція `isBalanced("[[]]")` має повернути true.

```js
assert(isBalanced(testCases[12]));
```

Функція `isBalanced("]][]][[]][[[")` має повернути false.

```js
assert(!isBalanced(testCases[13]));
```

Функція `isBalanced("][]][][[")` має повернути false.

```js
assert(!isBalanced(testCases[14]));
```

Функція `isBalanced("][][")` має повернути false.

```js
assert(!isBalanced(testCases[15]));
```

Функція `isBalanced("[]]]")` має повернути false.

```js
assert(!isBalanced(testCases[16]));
```

Функція `isBalanced("")` має повернути true.

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
