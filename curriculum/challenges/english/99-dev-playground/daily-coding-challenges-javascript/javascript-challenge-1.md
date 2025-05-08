---
id: 6814d8e1516e86b171929de4
title: JavaScript Challenge 1
challengeType: 28
dashedName: javascript-challenge-1
---

# --description--

Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

- The string can contain any characters.
- If there's an odd number of characters in the string, ignore the center character.

# --hints--

`isBalanced("racecar")` should return `true`

```js
assert.isTrue(isBalanced("racecar"));
```

`isBalanced("lorem ipsum")` should return `true`

```js
assert.isTrue(isBalanced("lorem ipsum"));
```

`isBalanced("kitty ipsum")` should return `false`

```js
assert.isFalse(isBalanced("kitty ipsum"));
```

`isBalanced("string")` should return `false`

```js
assert.isFalse(isBalanced("string"));
```

`isBalanced(" ")` should return `true`

```js
assert.isTrue(isBalanced(" "));
```

`isBalanced("abcdefghijklmnopqrstuvwxyz")` should return `false`

```js
assert.isFalse(isBalanced("abcdefghijklmnopqrstuvwxyz"));
```

`isBalanced("123a#b!E&#x26;*456-o.U")` should return `true`

```js
assert.isTrue(isBalanced("123a#b!E&*456-o.U"));
```

# --seed--

## --seed-contents--

```js
function isBalanced(str) {

  return str;
}
```

# --solutions--

```js
function isBalanced(str) {

  return str;
}
```
