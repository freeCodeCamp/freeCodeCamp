---
title: Count occurrences of a substring
id: 596fda99c69f779975a1b67d
challengeType: 5
isHidden: false
forumTopicId: 302237
---

## Description
<section id='description'>
Create a function, or show a built-in function, to count the number of non-overlapping occurrences of a substring inside a string.
The function should take two arguments:
<ul>
  <li>the first argument being the string to search, and</li>
  <li>the second a substring to be searched for.</li>
</ul>
It should return an integer count.
The matching should yield the highest number of non-overlapping matches.
In general, this essentially means matching from left-to-right or right-to-left.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>countSubstring</code> should be a function.
    testString: assert(typeof countSubstring === 'function');
  - text: <code>countSubstring("the three truths", "th")</code> should return <code>3</code>.
    testString: assert.equal(countSubstring(testCases[0], searchString[0]), results[0]);
  - text: <code>countSubstring("ababababab", "abab")</code> should return <code>2</code>.
    testString: assert.equal(countSubstring(testCases[1], searchString[1]), results[1]);
  - text: <code>countSubstring("abaabba*bbaba*bbab", "a*b")</code> should return <code>2</code>.
    testString: assert.equal(countSubstring(testCases[2], searchString[2]), results[2]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countSubstring(str, subStr) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const testCases = ['the three truths', 'ababababab', 'abaabba*bbaba*bbab'];
const searchString = ['th', 'abab', 'a*b'];
const results = [3, 2, 2];
```

</div>

</section>

## Solution
<section id='solution'>


```js
function countSubstring(str, subStr) {
  const escapedSubStr = subStr.replace(/[.+*?^$[\]{}()|/]/g, '\\$&');
  const matches = str.match(new RegExp(escapedSubStr, 'g'));
  return matches ? matches.length : 0;
}

```

</section>
