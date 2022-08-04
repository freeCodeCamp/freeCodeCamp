---
id: 594dc6c729e5700999302b45
title: Parentesi bilanciate
challengeType: 1
forumTopicId: 302230
dashedName: balanced-brackets
---

# --description--

Determina se la stringa generata di parentesi è bilanciata; cioè, se consiste di coppie di parentesi aperte/chiuse (in quell'ordine), nessuno dei quali è annidata nel modo sbagliato.

**Esempi:**
| Input                     | Output |
| ------------------------- | ------ |
| <code>\[]</code> | true   |
| <code>]\[</code> | false  |
| <code>[][]</code> | true   |
| <code>]\[]</code> | false  |
| <code>\[]]\[\[]</code> | false  |
| <code>\[\[\[\[]]]]</code> | true   |

# --hints--

`isBalanced` dovrebbe essere una funzione.

```js
assert(typeof isBalanced === 'function');
```

`isBalanced("[]")` dovrebbe restituire true.

```js
assert(isBalanced(testCases[0]));
```

`isBalanced("]][[[][][][]][")` dovrebbe restituire false.

```js
assert(!isBalanced(testCases[1]));
```

`isBalanced("[][[[[][][[[]]]]]]")` dovrebbe restituire true.

```js
assert(isBalanced(testCases[2]));
```

`isBalanced("][")` dovrebbe restituire false.

```js
assert(!isBalanced(testCases[3]));
```

`isBalanced("[[[]]]][[]")` dovrebbe restituire false.

```js
assert(!isBalanced(testCases[4]));
```

`isBalanced("][[]")` dovrebbe restituire false.

```js
assert(!isBalanced(testCases[5]));
```

`isBalanced("][[][]][[[]]")` dovrebbe restituire false.

```js
assert(!isBalanced(testCases[6]));
```

`isBalanced("[[][]]][")` dovrebbe restituire false.

```js
assert(!isBalanced(testCases[7]));
```

`isBalanced("[[[]]][[]]]][][[")` dovrebbe restituire false.

```js
assert(!isBalanced(testCases[8]));
```

`isBalanced("[]][[]]][[[[][]]")` dovrebbe restituire false.

```js
assert(!isBalanced(testCases[9]));
```

`isBalanced("][]][[][")` dovrebbe restituire false.

```js
assert(!isBalanced(testCases[10]));
```

`isBalanced("[[]][[][]]")` dovrebbe restituire true.

```js
assert(isBalanced(testCases[11]));
```

`isBalanced("[[]]")` dovrebbe restituire true.

```js
assert(isBalanced(testCases[12]));
```

`isBalanced("]][]][[]][[[")` dovrebbe restituire false.

```js
assert(!isBalanced(testCases[13]));
```

`isBalanced("][]][][[")` dovrebbe restituire false.

```js
assert(!isBalanced(testCases[14]));
```

`isBalanced("][][")` dovrebbe restituire false.

```js
assert(!isBalanced(testCases[15]));
```

`isBalanced("[]]]")` dovrebbe restituire false.

```js
assert(!isBalanced(testCases[16]));
```

`isBalanced("")` dovrebbe restituire true.

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
