---
title: Count occurrences of a substring
id: 596fda99c69f779975a1b67d
challengeType: 5
---

## Description
<section id='description'>
Task:
<p>Create a function,  or show a built-in function,  to count the number of non-overlapping occurrences of a substring inside a string.</p><p>The function should take two arguments:</p>
the first argument being the string to search,  and
the second a substring to be searched for.
<p>It should return an integer count.</p>
<p>The matching should yield the highest number of non-overlapping matches.</p><p>In general, this essentially means matching from left-to-right or right-to-left.</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>countSubstring</code> is a function.
  testString: 'assert(typeof countSubstring === "function", "<code>countSubstring</code> is a function.");'
- text: '<code>countSubstring("the three truths", "th")</code> should return <code>3</code>.'
  testString: 'assert.equal(countSubstring(testCases[0], searchString[0]), results[0], "<code>countSubstring("the three truths", "th")</code> should return <code>3</code>.");'
- text: '<code>countSubstring("ababababab", "abab")</code> should return <code>2</code>.'
  testString: 'assert.equal(countSubstring(testCases[1], searchString[1]), results[1], "<code>countSubstring("ababababab", "abab")</code> should return <code>2</code>.");'
- text: '<code>countSubstring("abaabba*bbaba*bbab", "a*b")</code> should return <code>2</code>.'
  testString: 'assert.equal(countSubstring(testCases[2], searchString[2]), results[2], "<code>countSubstring("abaabba*bbaba*bbab", "a*b")</code> should return <code>2</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countSubstring (str, subStr) {
  // Good luck!
  return true;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
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
