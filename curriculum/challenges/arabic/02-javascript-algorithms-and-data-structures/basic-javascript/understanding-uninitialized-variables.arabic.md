---
id: 56533eb9ac21ba0edf2244aa
title: Understanding Uninitialized Variables
challengeType: 1
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert(typeof a === "number" && a === 6, "<code>a</code> should be defined and evaluated to have the value of <code>6</code>");'
  - text: ''
    testString: 'assert(typeof b === "number" && b === 15, "<code>b</code> should be defined and evaluated to have the value of <code>15</code>");'
  - text: ''
    testString: 'assert(!/undefined/.test(c) && c === "I am a String!", "<code>c</code> should not contain <code>undefined</code> and should have a value of "I am a String!"");'
  - text: ''
    testString: 'assert(/a = a \+ 1;/.test(code) && /b = b \+ 5;/.test(code) && /c = c \+ " String!";/.test(code), "Do not change code below the line");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Initialize these three variables
var a;
var b;
var c;

// Do not change code below this line

a = a + 1;
b = b + 5;
c = c + " String!";

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
// solution required
```
</section>
