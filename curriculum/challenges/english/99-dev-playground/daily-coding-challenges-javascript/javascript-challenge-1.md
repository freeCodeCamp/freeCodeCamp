---
id: 6814d8e1516e86b171929de4
title: "JavaScript Challenge 1: Vowel Balance"
challengeType: 28
dashedName: javascript-challenge-1
---

# --description--

Given a string, determine whether the number of vowels in the first half of the string is equal to the number of vowels in the second half.

- The string can contain any characters.
- The letters `a`, `e`, `i`, `o`, and `u`, in either uppercase or lowercase, are considered vowels.
- If there's an odd number of characters in the string, ignore the center character.

# --hints--

`isBalanced("racecar")` should return `true`.

```js
assert.isTrue(isBalanced("racecar"));
```

`isBalanced("Lorem Ipsum")` should return `true`.

```js
assert.isTrue(isBalanced("Lorem Ipsum"));
```

`isBalanced("Kitty Ipsum")` should return `false`.

```js
assert.isFalse(isBalanced("Kitty Ipsum"));
```

`isBalanced("string")` should return `false`.

```js
assert.isFalse(isBalanced("string"));
```

`isBalanced(" ")` should return `true`.

```js
assert.isTrue(isBalanced(" "));
```

`isBalanced("abcdefghijklmnopqrstuvwxyz")` should return `false`.

```js
assert.isFalse(isBalanced("abcdefghijklmnopqrstuvwxyz"));
```

`isBalanced("123A#b!E&#x26;*456-o.U")` should return `true`.

```js
assert.isTrue(isBalanced("123A#b!E&*456-o.U"));
```

# --seed--

## --seed-contents--

```js
function isBalanced(s) {

  return s;
}
```

# --solutions--

```js
function isBalanced(s) {
  const vowels = 'aeiou';
  const half = Math.floor(s.length / 2);

  let firstHalf = s.slice(0, half);
  let secondHalf = s.length % 2 === 0 ? s.slice(half) : s.slice(half + 1);

  const countVowels = str =>
    str
      .toLowerCase()
      .split('')
      .filter(c => vowels.includes(c))
      .length;

  return countVowels(firstHalf) === countVowels(secondHalf);
}
```
