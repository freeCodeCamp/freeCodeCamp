---
id: 587d7b7e367417b2b2512b22
title: Use the parseInt Function with a Radix
challengeType: 1
videoUrl: 'https://scrimba.com/c/c6K4Kh3'
forumTopicId: 301182
---

## Description
<section id='description'>
The <code>parseInt()</code> function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string. The radix can be an integer between 2 and 36.
The function call looks like:
<code>parseInt(string, radix);</code>
And here's an example:
<code>var a = parseInt("11", 2);</code>
The radix variable says that "11" is in the binary system, or base 2. This example converts the string "11" to an integer 3.
</section>

## Instructions
<section id='instructions'>
Use <code>parseInt()</code> in the <code>convertToInteger</code> function so it converts a binary number to an integer and returns it.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToInteger</code> should use the <code>parseInt()</code> function
    testString: assert(/parseInt/g.test(code));
  - text: <code>convertToInteger("10011")</code> should return a number
    testString: assert(typeof(convertToInteger("10011")) === "number");
  - text: <code>convertToInteger("10011")</code> should return 19
    testString: assert(convertToInteger("10011") === 19);
  - text: <code>convertToInteger("111001")</code> should return 57
    testString: assert(convertToInteger("111001") === 57);
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

convertToInteger("10011");
```

</div>



</section>

## Solution
<section id='solution'>

```js
function convertToInteger(str) {
  return parseInt(str, 2);
}
```

</section>
