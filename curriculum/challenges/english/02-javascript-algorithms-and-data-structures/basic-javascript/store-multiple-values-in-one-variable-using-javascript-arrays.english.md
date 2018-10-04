---
id: bd7993c9c69feddfaeb8bdef
title: Store Multiple Values in one Variable using JavaScript Arrays
challengeType: 1
---

## Description
<section id='description'>
With JavaScript <code>array</code> variables, we can store several pieces of data in one place.
You start an array declaration with an opening square bracket, end it with a closing square bracket, and put a comma between each entry, like this: 
<code>var sandwich = ["peanut butter", "jelly", "bread"]</code>.
</section>

## Instructions
<section id='instructions'>
Modify the new array <code>myArray</code> so that it contains both a <code>string</code> and a <code>number</code> (in that order).
<strong>Hint</strong><br>Refer to the example code in the text editor if you get stuck.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code> should be an <code>array</code>.
    testString: 'assert(typeof myArray == ''object'', ''<code>myArray</code> should be an <code>array</code>.'');'
  - text: The first item in <code>myArray</code> should be a <code>string</code>.
    testString: 'assert(typeof myArray[0] !== ''undefined'' && typeof myArray[0] == ''string'', ''The first item in <code>myArray</code> should be a <code>string</code>.'');'
  - text: The second item in <code>myArray</code> should be a <code>number</code>.
    testString: 'assert(typeof myArray[1] !== ''undefined'' && typeof myArray[1] == ''number'', ''The second item in <code>myArray</code> should be a <code>number</code>.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["John", 23];

// Only change code below this line.
var myArray = [];

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
var myArray = ["The Answer", 42];
```

</section>
