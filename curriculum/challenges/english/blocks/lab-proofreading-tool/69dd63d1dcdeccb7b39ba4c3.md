---
id: 69dd63d1dcdeccb7b39ba4c3
title: Build a Proofreading Tool
challengeType: 26
dashedName: build-a-proofreading-tool
---

# --description--

In this lab, you will build a proofreading tool that analyzes arrays of words for palindromes and repeated phrases.

A palindrome is a word that reads the same forwards and backwards. For example, `"racecar"` and `"level"` are palindromes, but `"hello"` is not.

A phrase is a sequence of consecutive words. For example, in `["the", "cat", "sat", "the", "cat"]`, the phrase `"the cat"` (a sequence of 2 words) appears at positions 0 and 3.

**Objective:** Fulfill the user stories below and get all the tests to pass to complete the lab.

**User Stories:**

1. You should define a function named `isPalindrome` that takes a `word` string as its argument. It should return `true` if the word reads the same forwards and backwards (case-insensitive), and `false` otherwise.

2. You should define a function named `findPalindromeBreaks` that takes a `words` array as its argument. It should return an array of indices of words that are not palindromes. It should return an empty array if the input is empty.

3. You should define a function named `findRepeatedPhrases` that takes a `words` array and a `phraseLength` number as arguments. It should return an array of all start indices where a sequence of `phraseLength` consecutive words appears more than once in the array — including the index of the first occurrence. It should return an empty array if `phraseLength` is greater than or equal to the length of `words`.

4. You should define a function named `analyzeTexts` that takes a `texts` array and a `phraseLength` number as arguments. It should process each element of `texts` (each an array of words) and return an array of objects, each with `repeatedPhrases` and `palindromeBreaks` properties. It should return an empty array if `texts` is empty.

# --hints--

`isPalindrome` should be a function.

```js
assert.isFunction(isPalindrome);
```

`isPalindrome` should return `true` for a palindrome.

```js
assert.isTrue(isPalindrome("racecar"));
```

`isPalindrome` should return `true` regardless of case.

```js
assert.isTrue(isPalindrome("Level"));
```

`isPalindrome` should return `false` for a non-palindrome.

```js
assert.isFalse(isPalindrome("hello"));
```

`findPalindromeBreaks` should be a function.

```js
assert.isFunction(findPalindromeBreaks);
```

`findPalindromeBreaks` should return an empty array for empty input.

```js
assert.sameDeepOrderedMembers(findPalindromeBreaks([]), []);
```

`findPalindromeBreaks` should return the indices of non-palindromes.

```js
assert.sameDeepOrderedMembers(findPalindromeBreaks(["racecar", "hello", "level"]), [1]);
```

`findPalindromeBreaks` should return an empty array when all words are palindromes.

```js
assert.sameDeepOrderedMembers(findPalindromeBreaks(["racecar", "level", "aba"]), []);
```

`findRepeatedPhrases` should be a function.

```js
assert.isFunction(findRepeatedPhrases);
```

`findRepeatedPhrases` should return an empty array when `phraseLength` is greater than or equal to the length of `words`.

```js
assert.sameDeepOrderedMembers(findRepeatedPhrases(["the", "cat"], 2), []);
```

`findRepeatedPhrases` should return an empty array when `phraseLength` is greater than the length of `words`.

```js
assert.sameDeepOrderedMembers(findRepeatedPhrases(["the"], 2), []);
```

`findRepeatedPhrases` should return all start indices where the phrase repeats, including the first occurrence.

```js
assert.sameDeepOrderedMembers(findRepeatedPhrases(["the", "cat", "sat", "the", "cat"], 2), [0, 3]);
```

`analyzeTexts` should be a function.

```js
assert.isFunction(analyzeTexts);
```

`analyzeTexts` should return an empty array for empty input.

```js
assert.sameDeepOrderedMembers(analyzeTexts([], 2), []);
```

`analyzeTexts` result objects should have `repeatedPhrases` and `palindromeBreaks` properties.

```js
const result = analyzeTexts([["racecar", "hello"]], 2);
assert.property(result[0], "repeatedPhrases");
assert.property(result[0], "palindromeBreaks");
```

`analyzeTexts` should correctly aggregate results for each text.

```js
const result = analyzeTexts([["racecar", "hello", "level", "hello"]], 1);
assert.sameDeepOrderedMembers(result[0].repeatedPhrases, [1, 3]);
assert.sameDeepOrderedMembers(result[0].palindromeBreaks, [1, 3]);
```

`analyzeTexts` should process multiple texts and return a result for each.

```js
const result = analyzeTexts([["racecar", "hello"], ["level", "world", "level"]], 1);
assert.lengthOf(result, 2);
assert.sameDeepOrderedMembers(result[1].palindromeBreaks, [1]);
```

# --seed--

## --seed-contents--

```js
```

# --solutions--

```js
function isPalindrome(word) {
  const lower = word.toLowerCase();
  for (let i = 0; i < Math.floor(lower.length / 2); i++) {
    if (lower[i] !== lower[lower.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

function findPalindromeBreaks(words) {
  const breaks = [];
  if (words.length === 0) return breaks;
  for (let i = 0; i < words.length; i++) {
    if (!isPalindrome(words[i])) {
      breaks.push(i);
    }
  }
  return breaks;
}

function findRepeatedPhrases(words, phraseLength) {
  const result = [];
  if (phraseLength >= words.length) return result;

  for (let i = 0; i <= words.length - phraseLength; i++) {
    const phrase = words.slice(i, i + phraseLength).join(" ");
    let found = false;

    for (let j = 0; j <= words.length - phraseLength; j++) {
      if (i === j) continue;
      if (words.slice(j, j + phraseLength).join(" ") === phrase) {
        found = true;
        break;
      }
    }

    if (found) result.push(i);
  }

  return result;
}

function analyzeTexts(texts, phraseLength) {
  const results = [];
  if (texts.length === 0) return results;

  for (let i = 0; i < texts.length; i++) {
    results.push({
      repeatedPhrases: findRepeatedPhrases(texts[i], phraseLength),
      palindromeBreaks: findPalindromeBreaks(texts[i])
    });
  }

  return results;
}
```
