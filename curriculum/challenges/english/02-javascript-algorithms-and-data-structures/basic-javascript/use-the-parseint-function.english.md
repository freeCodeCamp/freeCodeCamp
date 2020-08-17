---
id: 587d7b7e367417b2b2512b23
title: Use the parseInt Function
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cm83LSW'
forumTopicId: 301183
---

## Description
<section id='description'>
The <code>parseInt()</code> function parses a string and returns an integer. Here's an example:
<code>var a = parseInt("007");</code>
The above function converts the string "007" to an integer 7. If the first character in the string can't be converted into a number, then it returns <code>NaN</code>.
</section>

## Instructions
<section id='instructions'>
Use <code>parseInt()</code> in the <code>convertToInteger</code> function so it converts the input string <code>str</code> into an integer, and returns it.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToInteger</code> should use the <code>parseInt()</code> function
    testString: assert(/parseInt/g.test(code));
  - text: <code>convertToInteger("56")</code> should return a number
    testString: assert(typeof(convertToInteger("56")) === "number");
  - text: <code>convertToInteger("56")</code> should return 56
    testString: assert(convertToInteger("56") === 56);
  - text: <code>convertToInteger("77")</code> should return 77
    testString: assert(convertToInteger("77") === 77);
  - text: <code>convertToInteger("JamesBond")</code> should return NaN
    testString: assert.isNaN(convertToInteger("JamesBond"));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertToInteger(str) {

}

convertToInteger("56");
```

</div>



</section>

## Solution
<section id='solution'>

```js
function convertToInteger(str) {
  return parseInt(str);
}
```

</section>
