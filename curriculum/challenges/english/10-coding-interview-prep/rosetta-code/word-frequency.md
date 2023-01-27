---
id: 5e94a54cc7b022105bf0fd2c
title: Word frequency
challengeType: 1
forumTopicId: 393913
dashedName: word-frequency
---

# --description--

Given a text string and an integer n, return the n most common words in the file (and the number of their occurrences) in decreasing frequency.

# --instructions--

Write a function to count the occurrences of each word and return the n most commons words along with the number of their occurrences in decreasing frequency.

The function should return a 2D array with each of the elements in the following form: `[word, freq]`. `word` should be the lowercase version of the word and `freq` the number denoting the count.

The function should return an empty array, if no string is provided.

The function should be case insensitive, for example, the strings "Hello" and "hello" should be treated the same.

You can treat words that have special characters such as underscores, dashes, apostrophes, commas, etc., as distinct words.

For example, given the string "Hello hello goodbye", your function should return `[['hello', 2], ['goodbye', 1]]`.

# --hints--

`wordFrequency` should be a function.

```js
assert(typeof wordFrequency == 'function');
```

`wordFrequency` should return an array.

```js
assert(Array.isArray(wordFrequency('test')));
```

`wordFrequency("Hello hello world", 2)` should return `[['hello', 2], ['world', 1]]`

```js
assert.deepEqual(wordFrequency(example_1, 2), example_1_solution);
```

`wordFrequency("The quick brown fox jumped over the lazy dog", 1)` should return `[['the', 2]]`

```js
assert.deepEqual(wordFrequency(example_2, 1), example_2_solution);
```

`wordFrequency("Opensource opensource open-source open source", 1)` should return `[['opensource', 2]]`

```js
assert.deepEqual(wordFrequency(example_3, 1), example_3_solution);
```

`wordFrequency("Apple App apply aPP aPPlE", 3)` should return `[['app', 2], ['apple', 2], ['apply', 1]]` or `[['apple', 2], ['app', 2], ['apply', 1]]`

```js
const arr = JSON.stringify(wordFrequency(example_4, 3));
assert(arr === example_4_solution_a || arr === example_4_solution_b);
```

`wordFrequency("c d a d c a b d d c", 4)` should return `[['d', 4], ['c', 3], ['a', 2], ['b', 1]]`

```js
assert.deepEqual(wordFrequency(example_5, 4), example_5_solution);
```

`wordFrequency("", 5)` should return `[]`

```js
assert.deepEqual(wordFrequency(example_6, 5), example_6_solution);
```

# --seed--

## --before-user-code--

```js
var example_1 = 'Hello hello world';
var example_1_solution = [['hello', 2], ['world', 1]];
var example_2 = 'The quick brown fox jumped over the lazy dog';
var example_2_solution = [['the', 2]];
var example_3 = 'Opensource opensource open-source open source';
var example_3_solution = [['opensource', 2]];
var example_4 = 'Apple App apply aPP aPPlE';
var example_4_solution_a = "[[\"app\",2],[\"apple\",2],[\"apply\",1]]";
var example_4_solution_b = "[[\"apple\",2],[\"app\",2],[\"apply\",1]]";
var example_5 = 'c d a d c a b d d c';
var example_5_solution = [['d', 4], ['c', 3], ['a', 2], ['b', 1]];
var example_6 = '';
var example_6_solution = [];
```

## --seed-contents--

```js
function wordFrequency(txt, n) {

}
```

# --solutions--

```js
function wordFrequency(txt, n) {
  var words = txt.split(/\s+/);
  var wordCount = {};
  words.forEach(word => {
    if (word == '') {
      return;
    }
    const lowerWord = word.toLowerCase();
    wordCount[lowerWord] =
      lowerWord in wordCount ? wordCount[lowerWord] + 1 : 1;
  });

  var wordsArray = [];
  for (let [word, count] of Object.entries(wordCount)) {
    wordsArray.push([word, count]);
  }

  wordsArray.sort((a, b) => {
    if (a[1] !== b[1]) {
      return b[1] - a[1];
    } else if (a[0] !== b[0]) {
      return a[0] < b[0] ? -1 : 1;
    }
    return 0;
  });
  return wordsArray.slice(0, n);
}
```
