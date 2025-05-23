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
assert(isBalanced("[]"));
```

`isBalanced("]][[[][][][]][")` should return false.

```js
assert(!isBalanced("]][[[][][][]]["));
```

`isBalanced("[][[[[][][[[]]]]]]")` should return true.

```js
assert(isBalanced('[][[[[][][[[]]]]]]'));
```

`isBalanced("][")` should return false.

```js
assert(!isBalanced("]["));
```

`isBalanced("[[[]]]][[]")` should return false.

```js
assert(!isBalanced("[[[]]]][[]"));
```

`isBalanced("][[]")` should return false.

```js
assert(!isBalanced("][[]"));
```

`isBalanced("][[][]][[[]]")` should return false.

```js
assert(!isBalanced("][[][]][[[]]"));
```

`isBalanced("[[][]]][")` should return false.

```js
assert(!isBalanced("[[][]]]["));
```

`isBalanced("[[[]]][[]]]][][[")` should return false.

```js
assert(!isBalanced("[[[]]][[]]]][][["));
```

`isBalanced("[]][[]]][[[[][]]")` should return false.

```js
assert(!isBalanced("[]][[]]][[[[][]]"));
```

`isBalanced("][]][[][")` should return false.

```js
assert(!isBalanced("][]][[]["));
```

`isBalanced("[[]][[][]]")` should return true.

```js
assert(isBalanced("[[]][[][]]"));
```

`isBalanced("[[]]")` should return true.

```js
assert(isBalanced("[[]]"));
```

`isBalanced("]][]][[]][[[")` should return false.

```js
assert(!isBalanced("]][]][[]][[["));
```

`isBalanced("][]][][[")` should return false.

```js
assert(!isBalanced("][]][][["));
```

`isBalanced("][][")` should return false.

```js
assert(!isBalanced("][]["));
```

`isBalanced("[]]]")` should return false.

```js
assert(!isBalanced("[]]]"));
```

`isBalanced("")` should return true.

```js
assert(isBalanced(""));
```

# --seed--

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
