---
id: 587d7db3367417b2b2512b8e
title: Using the Test Method
challengeType: 1
forumTopicId: 301369
---

## Description
<section id='description'>
Regular expressions are used in programming languages to match parts of strings. You create patterns to help you do that matching.
If you want to find the word <code>"the"</code> in the string <code>"The dog chased the cat"</code>, you could use the following regular expression: <code>/the/</code>. Notice that quote marks are not required within the regular expression.
JavaScript has multiple ways to use regexes. One way to test a regex is using the <code>.test()</code> method. The <code>.test()</code> method takes the regex, applies it to a string (which is placed inside the parentheses), and returns <code>true</code> or <code>false</code> if your pattern finds something or not.

```js
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);
// Returns true
```

</section>

## Instructions
<section id='instructions'>
Apply the regex <code>myRegex</code> on the string <code>myString</code> using the <code>.test()</code> method.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should use <code>.test()</code> to test the regex.
    testString: assert(code.match(/myRegex.test\(\s*myString\s*\)/));
  - text: Your result should return <code>true</code>.
    testString: assert(result === true);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex; // Change this line
```

</div>



</section>

## Solution
<section id='solution'>

```js
let myString = "Hello, World!";
let myRegex = /Hello/;
let result = myRegex.test(myString); // Change this line
```

</section>
