---
id: 681cb1afdab50c87ddb2e516
title: "JavaScript Challenge 5: Jbelmud Text"
challengeType: 28
dashedName: javascript-challenge-5
---

# --description--

Given a string, return a jumbled version of that string where each word is transformed using the following constraints:

- The first and last letters of the words remain in place
- All letters between the first and last letter are sorted alphabetically.
- The input strings will contain no punctuation, and will be entirely lowercase.

# --hints--

`jbelmu("hello world")` should return `hello wlord`.

```js
assert.equal(jbelmu("hello world"), "hello wlord");
```

`jbelmu("i love jumbled text")` should return `i love jbelmud text`.

```js
assert.equal(jbelmu("i love jumbled text"), "i love jbelmud text");
```

`jbelmu("freecodecamp is my favorite place to learn to code")` should return `faccdeeemorp is my faiortve pacle to laern to cdoe`.

```js
assert.equal(jbelmu("freecodecamp is my favorite place to learn to code"), "faccdeeemorp is my faiortve pacle to laern to cdoe");
```

`jbelmu("the quick brown fox jumps over the lazy dog")` should return `the qciuk borwn fox jmpus oevr the lazy dog`.

```js
assert.equal(jbelmu("the quick brown fox jumps over the lazy dog"), "the qciuk borwn fox jmpus oevr the lazy dog");
```

# --seed--

## --seed-contents--

```js
function jbelmu(text) {

  return text;
}
```

# --solutions--

```js
function jbelmu(text) {
  return text
    .split(' ')
    .map((word) => {
      if (word.length <= 3) return word;
      const first = word[0];
      const last = word[word.length - 1];
      const middle = word
        .slice(1, -1)
        .split('')
        .sort()
        .join('');
      return first + middle + last;
    })
    .join(' ');
}
```
