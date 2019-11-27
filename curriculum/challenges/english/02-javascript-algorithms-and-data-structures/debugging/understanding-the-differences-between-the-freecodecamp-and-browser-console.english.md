---
id: 587d7b83367417b2b2512b37
title: Understanding the Differences between the freeCodeCamp and Browser Console
challengeType: 1
forumTopicId: 301193
---

## Description
<section id='description'>
You may have noticed that some freeCodeCamp JavaScript challenges include their own console. This console behaves a little differently than the browser console you used in the last challenge.
The following challenge is meant to highlight the main difference between the freeCodeCamp console and your browser console.
When you run ordinary JavaScript, the browsers console will display your <code>console.log()</code> statements the exact number of times you requested.
The freeCodeCamp console will print your <code>console.log()</code> statements for each test of that challenge, as well as one more time for any function calls that you have in your code.
This lends itself to some interesting behavior and might trip you up in the beginning, because a logged value that you expect to see only once may print out many more times.
If you would like to see only your single output and not have to worry about running through the test cycles, you can use <code>console.clear()</code> and check the browsers console.
</section>

## Instructions
<section id='instructions'>
First, use <code>console.clear()</code> to clear the browser console. After that, use <code>console.log</code> to log the <code>output</code> variable.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should use <code>console.clear()</code> to clear the browser console.
    testString: const removeJSComments = code.replace(/\/\*[\s\S]*?\*\/|\/\/.*$/gm, ''); const noSpaces = removeJSComments.replace(/\s/g, ''); assert(noSpaces.match(/console.clear\(\)/));
  - text: You should use <code>console.log()</code> to print the <code>output</code> variable.
    testString: const noSpaces = code.replace(/\s/g, ''); assert(noSpaces.match(/console\.log\(output\)/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Open your browser console.
let output = "Get this to log once in the browser console and twice in the freeCodeCamp console";
// Use console.clear() on the next line to clear the browser console.


// Use console.log() to print the output variable.


// Check the two consoles to see the difference. The freeCodeCamp console should have printed the variable twice, once for each test of this challenge. The browser console should only print the variable once because you cleared it first.
```

</div>



</section>

## Solution
<section id='solution'>


```js
// Open your browser console.
let output = "Get this to log once in the browser console and twice in the freeCodeCamp console";
// Use console.clear() on the next line to clear the browser console.
console.clear();

// Use console.log() to print the output variable.
console.log(output);

// Check the two consoles to see the difference. The freeCodeCamp console should have printed the variable twice, one for each test of this challenge. The browser console should only print the variable once becuase you cleared it first.
```

</section>
