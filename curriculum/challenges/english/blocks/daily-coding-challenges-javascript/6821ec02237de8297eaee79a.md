---
id: 6821ec02237de8297eaee79a
title: "JavaScript Challenge 24: Pangram"
challengeType: 28
dashedName: javascript-challenge-24
---

# --description--

Given a word or sentence and a string of lowercase letters, determine if the word or sentence uses all the letters from the given set at least once and no other letters.

- Ignore non-alphabetical characters in the word or sentence.
- Ignore letter casing in the word or sentence.

# --hints--

`isPangram("hello", "helo")` should return `true`

```js
assert.isTrue(isPangram("hello", "helo"));
```

`isPangram("hello", "hel")` should return `false`

```js
assert.isFalse(isPangram("hello", "hel"));
```

`isPangram("hello", "helow")` should return `false`

```js
assert.isFalse(isPangram("hello", "helow"));
```

`isPangram("hello world", "helowrd")` should return `true`

```js
assert.isTrue(isPangram("hello world", "helowrd"));
```

`isPangram("Hello World!", "helowrd")` should return `true`

```js
assert.isTrue(isPangram("Hello World!", "helowrd"));
```

`isPangram("Hello World!", "heliowrd")` should return `false`

```js
assert.isFalse(isPangram("Hello World!", "heliowrd"));
```

`isPangram("freeCodeCamp", "frcdmp")` should return `false`

```js
assert.isFalse(isPangram("freeCodeCamp", "frcdmp"));
```

`isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz")` should return `true`

```js
assert.isTrue(isPangram("The quick brown fox jumps over the lazy dog.", "abcdefghijklmnopqrstuvwxyz"));
```

# --seed--

## --seed-contents--

```js
function isPangram(sentence, letters) {

  return sentence;
}
```

# --solutions--

```js
function isPangram(sentence, letters) {
  const usedLetters = [];
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i].toLowerCase();
    if (!usedLetters.includes(letter) && /[a-z]/.test(letter)) {
      usedLetters.push(letter);
    }
  }

  const sortedLetters = letters.split('').sort().join('');
  const sortedUsedLetters = usedLetters.sort().join('');

  return sortedLetters === sortedUsedLetters;
}
```
