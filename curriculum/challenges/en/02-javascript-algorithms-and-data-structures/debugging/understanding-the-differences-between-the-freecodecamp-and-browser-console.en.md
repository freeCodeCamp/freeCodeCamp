---
id: 587d7b83367417b2b2512b37
title: Understanding the Differences between the freeCodeCamp and Browser Console
challengeType: 1
---

## Description
<section id='description'>
You may have noticed that some freeCodeCamp JavaScript challenges include their own console.  This console behaves a little differently than the browser console you used in the last challenge.
The following challenge is meant to highlight some of the differences between the freeCodeCamp console and the browser console.
First, the browser console.  When you load and run an ordinary JavaScript file in your browser the <code>console.log()</code> statements will print exactly what you tell them to print to the browser console the exact number of times you requested. In your in-browser text editor the process is slightly different and can be confusing at first.
Values passed to <code>console.log()</code> in the text editor block run each set of tests as well as one more time for any function calls that you have in your code.
This lends itself to some interesting behavior and might trip you up in the beginning, because a logged value that you expect to see only once may print out many more times depending on the number of tests and the values being passed to those tests.
If you would like to see only your single output and not have to worry about running through the test cycles, you can use <code>console.clear()</code>.
</section>

## Instructions
<section id='instructions'>
Use <code>console.log()</code> to print the variables in the code where indicated.

</section>

## Tests
<section id='tests'>

```yml
- text: Use <code>console.log()</code> to print the <code>outputTwo</code> variable.  In your Browser Console this should print out the value of the variable two times.
  testString: 'assert(code.match(/console\.log\(outputTwo\)/g), ''Use <code>console.log()</code> to print the <code>outputTwo</code> variable.  In your Browser Console this should print out the value of the variable two times.'');'
- text: Use <code>console.log()</code> to print the <code>outputOne</code> variable.
  testString: 'assert(code.match(/console\.log\(outputOne\)/g), ''Use <code>console.log()</code> to print the <code>outputOne</code> variable.'');'
- text: Use <code>console.clear()</code> to modify your output so that <code>outputOne</code> variable only outputs once.
  testString: 'assert(code.match(/^(\s*console.clear\(\);?\s*)$/gm), ''Use <code>console.clear()</code> to modify your output so that <code>outputOne</code> variable only outputs once.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Open your browser console
let outputTwo = "This will print to the browser console 2 times";
// Use console.log() to print the outputTwo variable


let outputOne = "Try to get this to log only once to the browser console";
// Use console.clear() in the next line to print the outputOne only once


// Use console.log() to print the outputOne variable


```

</div>



</section>

## Solution
<section id='solution'>


```js
let outputTwo = "This will print to the browser console 2 times"; console.log(outputTwo); let outputOne = "Try to get this to log only once to the browser console";
console.clear();
console.log(outputOne);
```

</section>
