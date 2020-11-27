---
id: cf1391c1c11feddfaeb4bdef
title: Create Decimal Numbers with JavaScript
challengeType: 1
videoUrl: 'https://scrimba.com/c/ca8GEuW'
forumTopicId: 16826
---

## Description

<section id='description'>

We can store decimal numbers in variables too. Decimal numbers are sometimes referred to as <dfn>floating point</dfn> numbers or <dfn>floats</dfn>.

**Note**  
Not all real numbers can accurately be represented in <dfn>floating point</dfn>. This can lead to rounding errors. [Details Here](https://en.wikipedia.org/wiki/Floating_point#Accuracy_problems).

</section>

## Instructions

<section id='instructions'>

Create a variable `myDecimal` and give it a decimal value with a fractional part (e.g. `5.7`).

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>myDecimal</code> should be a number.
    testString: assert(typeof myDecimal === "number");
  - text: <code>myDecimal</code> should have a decimal point
    testString: assert(myDecimal % 1 != 0);

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
var ourDecimal = 5.7;

// Only change code below this line


```

</div>

### After Test

<div id='js-teardown'>

```js
(function(){if(typeof myDecimal !== "undefined"){return myDecimal;}})();
```

</div>

</section>

## Solution

<section id='solution'>

```js
var myDecimal = 9.9;
```

</section>
