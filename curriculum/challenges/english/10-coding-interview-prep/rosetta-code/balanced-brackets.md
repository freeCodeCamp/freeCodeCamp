---
id: 594dc6c729e5700999302b45
title: Balanced brackets
challengeType: 1
forumTopicId: 302230
dashedName: balanced-brackets
---

# --description--

Determine whether a generated string of brackets is balanced; that is, whether it consists entirely of pairs of opening/closing brackets (in that order), none of which mis-nest.

**Examples:**
| Input                     | Output |
| ------------------------- | ------ |
| <code>\[]</code>          | true   |
| <code>]\[</code>          | false  |
| <code>[][]</code>         | true   |
| <code>]\[]</code>         | false  |
| <code>\[]]\[\[]</code>    | false  |
| <code>\[\[\[\[]]]]</code> | true   |

# --hints--

`isBalanced` should be a function.

```js
assert(typeof isBalanced === 'function');
```

`isBalanced("[]")` should return true.

```js
assert(isBalanced(testCases[0]));
```

`isBalanced("]][[[][][][]][")` should return false.

```js
assert(!isBalanced(testCases[1]));
```

`isBalanced("[][[[[][][[[]]]]]]")` should return true.

```js
assert(isBalanced(testCases[2]));
```

`isBalanced("][")` should return false.

```js
assert(!isBalanced(testCases[3]));
```

`isBalanced("[[[]]]][[]")` should return false.

```js
assert(!isBalanced(testCases[4]));
```

`isBalanced("][[]")` should return false.

```js
assert(!isBalanced(testCases[5]));
```

`isBalanced("][[][]][[[]]")` should return false.

```js
assert(!isBalanced(testCases[6]));
```

`isBalanced("[[][]]][")` should return false.

```js
assert(!isBalanced(testCases[7]));
```

`isBalanced("[[[]]][[]]]][][[")` should return false.

```js
assert(!isBalanced(testCases[8]));
```

`isBalanced("[]][[]]][[[[][]]")` should return false.

```js
assert(!isBalanced(testCases[9]));
```

`isBalanced("][]][[][")` should return false.

```js
assert(!isBalanced(testCases[10]));
```

`isBalanced("[[]][[][]]")` should return true.

```js
assert(isBalanced(testCases[11]));
```

`isBalanced("[[]]")` should return true.

```js
assert(isBalanced(testCases[12]));
```

`isBalanced("]][]][[]][[[")` should return false.

```js
assert(!isBalanced(testCases[13]));
```

`isBalanced("][]][][[")` should return false.

```js
assert(!isBalanced(testCases[14]));
```

`isBalanced("][][")` should return false.

```js
assert(!isBalanced(testCases[15]));
```

`isBalanced("[]]]")` should return false.

```js
assert(!isBalanced(testCases[16]));
```

`isBalanced("")` should return true.

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
