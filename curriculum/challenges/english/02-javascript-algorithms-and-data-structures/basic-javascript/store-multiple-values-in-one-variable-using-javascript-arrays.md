---
id: bd7993c9c69feddfaeb8bdef
title: Store Multiple Values in one Variable using JavaScript Arrays
challengeType: 1
videoUrl: 'https://scrimba.com/c/crZQWAm'
forumTopicId: 18309
---

## Description

<section id='description'>

With JavaScript `array` variables, we can store several pieces of data in one place.

You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this:

`var sandwich = ["peanut butter", "jelly", "bread"]`.

</section>

## Instructions

<section id='instructions'>

Modify the new array `myArray` so that it contains both a `string` and a `number` (in that order).

**Hint**  
Refer to the example code in the text editor if you get stuck.

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>myArray</code> should be an <code>array</code>.
    testString: assert(typeof myArray == 'object');
  - text: The first item in <code>myArray</code> should be a <code>string</code>.
    testString: assert(typeof myArray[0] !== 'undefined' && typeof myArray[0] == 'string');
  - text: The second item in <code>myArray</code> should be a <code>number</code>.
    testString: assert(typeof myArray[1] !== 'undefined' && typeof myArray[1] == 'number');

```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
// Only change code below this line
var myArray = [];

```

</div>

### After Test

<div id='js-teardown'>

```js
(function(z){return z;})(myArray);
```

</div>

</section>

## Solution

<section id='solution'>

```js
var myArray = ["The Answer", 42];
```

</section>
