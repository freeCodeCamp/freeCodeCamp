---
id: 587d7dbb367417b2b2512be6
title: Check for Groups of Characters
challengeType: 1
---

## Description
<section id='description'>
Sometimes we want to check for groups of characters using a Regular Expression, to achieve this task we use the round brackets <code>()</code>.
If you want to find either <code>"Hello"</code> or <code>"Bye"</code> in a string, you could use the following Regular Expression: <code>/(Hello|Bye)/</code>
Then you can test the code using the <code>.test()</code> method to find whether the requires character(s)/string(s) are in the test string or not.
<blockquote>let testStr = "freeCodeCamp";<br>let testRegex = /(Code|Programming)/;<br>testRegex.test(testStr);<br>// Returns true</blockquote>
</section>

## Instructions
<section id='instructions'>
Fix the RegEx such that it checks for either <code>JavaScript</code> or <code>Python</code> in the string such that the RegEx is case sensitive.
Then fix the code so that the RegEx that you have created is checked in a string and either <code>true</code> or <code>false</code> is returned depending on whether the RegEx is found or not respectively.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should use <code>()</code> in the regex.
    testString: assert(code.match(/\(.*\)/g), 'You should use <code>()</code> in the regex.');
  - text: Your regex should check for the presence of either of <code>JavaScript</code> or <code>Python</code> in the string.
    testString: assert(code.match(/\/\(((Python\|JavaScript)|(JavaScript\|Python))\)\/g/g), 'Your regex should check for the presence of either of <code>JavaScript</code> or <code>Python</code> in the string.');
  - text: You should use <code>.test()</code> to test the regex.
    testString: assert(code.match(/myRegex.test\(\s*myString\s*\);?/), 'You should use <code>.test()</code> to test the regex.');
  - text: Your result should return <code>false</code>.
    testString: assert(result === false, 'Your result should return <code>false</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myString = "This is FreeCodeCamp";
let myRegex = /Hello/; // Change this line
let result = true; // Change this line
// After passing the challenge experiment with myString and see how the grouping works
```

</div>



</section>

## Solution
<section id='solution'>

```js
let myString = "This is FreeCodeCamp";
let myRegex = /(Python|JavaScript)/g;
let result = myRegex.test(myString);
```
</section>
