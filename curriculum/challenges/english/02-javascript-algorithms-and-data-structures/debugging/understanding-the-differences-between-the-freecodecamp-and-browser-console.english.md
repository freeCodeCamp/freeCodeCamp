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
When you run ordinary JavaScript, the browser's console will display your <code>console.log()</code> statements the exact number of times it is called.
The freeCodeCamp console will print your <code>console.log()</code> statements a short time after the editor detects a change in the script, as well as during testing.
The freeCodeCamp console is cleared before every test. So, you may miss a log, if the tests finish too quickly.
If you would like to see every log for every test, run the tests, and open the browser console. If you would like to use the browser console, and want it to operate the same as the freeCodeCamp console, place <code>console.clear()</code> before any other <code>console</code> calls, to clear the browser console.
</section>

## Instructions
<section id='instructions'>
First, use <code>console.log</code> to log the <code>output</code> variable. Then, use <code>console.clear</code> to clear the browser console.
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
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.

// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
```

</div>



</section>

## Solution
<section id='solution'>


```js
// Open your browser console.
let output = "Get this to log once in the freeCodeCamp console and twice in the browser console";
// Use console.log() to print the output variable.
console.clear();
console.log(output);

// Run the tests to see the difference between the two consoles.

// Now, add console.clear() before your console.log() to clear the browser console, and pass the tests.
```

</section>
