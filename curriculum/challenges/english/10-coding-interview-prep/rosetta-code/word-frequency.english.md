---
id: 5e94a54cc7b022105bf0fd2c
title: Word frequency
challengeType: 5
forumTopicId: 393913
---

## Description

<section id='description'>
Given a text string and an integer n, return the n most common words in the file (and the number of their occurrences) in decreasing frequency.
</section>

## Instructions

<section id='instructions'>
Write a function to count the occurrences of each word and return the n most commons words along with the number of their occurences in decreasing frequency.
The function should return a 2D array with each of the elements in the following form: <code>[word, freq]</code>.  <code>word</code> should be the lowercase version of the word and <code>freq</code> the number denoting the count.
The function should return an empty array, if no string is provided.
The function should be case insensitive, for example, the strings "Hello" and "hello" should be treated the same. 
You can treat words that have special characters such as underscores, dashes, apostrophes, commas, etc., as distinct words. 
For example, given the string "Hello hello goodbye", your function should return <code>[['hello', 2], ['goodbye', 1]]</code>.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>wordFrequency</code> should be a function.
    testString: assert(typeof wordFrequency == 'function');
  - text: <code>wordFrequency</code> should return an array.
    testString: assert(Array.isArray(wordFrequency("test")));
  - text: <code>wordFrequency("Hello hello world", 2)</code> should return <code>[['hello', 2], ['world', 1]]</code>
    testString: assert.deepEqual(wordFrequency(example_1, 2), example_1_solution)
  - text: <code>wordFrequency("The quick brown fox jumped over the lazy dog", 1)</code> should return <code>[['the', 2]]</code>
    testString: assert.deepEqual(wordFrequency(example_2, 1), example_2_solution)
  - text: <code>wordFrequency("Opensource opensource open-source open source", 1)</code> should return <code>[['opensource', 2]]</code>
    testString: assert.deepEqual(wordFrequency(example_3, 1), example_3_solution)
  - text: <code>wordFrequency("Apple App apply aPP aPPlE", 3)</code> should return <code>[['app', 2], ['apple', 2], ['apply', 1]]</code> or <code>[['apple', 2], ['app', 2], ['apply', 1]]</code>
    testString: const arr = JSON.stringify(wordFrequency(example_4, 3)); assert(arr === example_4_solution_a || arr === example_4_solution_b)
  - text: <code>wordFrequency("c d a d c a b d d c", 4)</code> should return <code>[['d', 4], ['c', 3], ['a', 2], ['b', 1]]</code>
    testString: assert.deepEqual(wordFrequency(example_5, 4), example_5_solution)
  - text: <code>wordFrequency("", 5)</code> should return <code>[]</code>
    testString: assert.deepEqual(wordFrequency(example_6, 5), example_6_solution)
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
function wordFrequency(txt, n) {

}
```

</div>

### Before Test

<div id='js-setup'>

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

</div>
</section>

## Solution

<section id='solution'>

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

</section>
