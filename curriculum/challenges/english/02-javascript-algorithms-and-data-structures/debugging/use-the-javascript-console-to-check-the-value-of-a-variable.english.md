---
id: 587d7b83367417b2b2512b33
title: Use the JavaScript Console to Check the Value of a Variable
challengeType: 1
forumTopicId: 18372
---

## Description
<section id='description'>
Both Chrome and Firefox have excellent JavaScript consoles, also known as DevTools, for debugging your JavaScript.
You can find Developer tools in your Chrome's menu or Web Console in Firefox's menu. If you're using a different browser, or a mobile phone, we strongly recommend switching to desktop Firefox or Chrome.
The <code>console.log()</code> method, which "prints" the output of what's within its parentheses to the console, will likely be the most helpful debugging tool. Placing it at strategic points in your code can show you the intermediate values of variables. It's good practice to have an idea of what the output should be before looking at what it is. Having check points to see the status of your calculations throughout your code will help narrow down where the problem is.
Here's an example to print 'Hello world!' to the console:
<code>console.log('Hello world!');</code>
</section>

## Instructions
<section id='instructions'>
Use the <code>console.log()</code> method to print the value of the variable <code>a</code> where noted in the code.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use <code>console.log()</code> to check the value of the variable <code>a</code>.
    testString: assert(code.match(/console\.log\(a\)/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let a = 5;
let b = 1;
a++;
// Only change code below this line


let sumAB = a + b;
console.log(sumAB);
```

</div>



</section>

## Solution
<section id='solution'>


```js
var a = 5; console.log(a);
```

</section>
