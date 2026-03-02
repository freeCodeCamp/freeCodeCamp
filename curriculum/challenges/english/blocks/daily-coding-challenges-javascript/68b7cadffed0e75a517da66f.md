---
id: 68b7cadffed0e75a517da66f
title: "Challenge 50: Longest Word"
challengeType: 28
dashedName: challenge-50
---

# --description--

Given a sentence, return the longest word in the sentence.

- Ignore periods (`.`) when determining word length.
- If multiple words are ties for the longest, return the first one that occurs.

# --hints--

`getLongestWord("coding is fun")` should return `"coding"`.

```js
assert.equal(getLongestWord("coding is fun"), "coding");
```

`getLongestWord("Coding challenges are fun and educational.")` should return `"educational"`.

```js
assert.equal(getLongestWord("Coding challenges are fun and educational."), "educational");
```

`getLongestWord("This sentence has multiple long words.")` should return `"sentence"`.

```js
assert.equal(getLongestWord("This sentence has multiple long words."), "sentence");
```

# --seed--

## --seed-contents--

```js
function getLongestWord(sentence) {

  return sentence;
}
```

# --solutions--

```js
function getLongestWord(sentence) {
  const words = sentence.split(' ');

  let longest = '';
  for (let word of words) {
    const cleanWord = word.replace(/\./g, '');
    if (cleanWord.length > longest.length) {
      longest = cleanWord;
    }
  }

  return longest;
}
```
