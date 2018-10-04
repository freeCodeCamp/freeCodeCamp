---
id: 56533eb9ac21ba0edf2244b3
title: Convert Celsius to Fahrenheit
challengeType: 1
isRequired: true
---

## Description
<section id='description'>
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times <code>9/5</code>, plus <code>32</code>.
You are given a variable <code>celsius</code> representing a temperature in Celsius. Use the variable <code>fahrenheit</code> already defined and assign it the Fahrenheit temperature equivalent to the given Celsius temperature. Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
Don't worry too much about the function and return statements as they will be covered in future challenges. For now, only use operators that you have already learned.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>convertToF(0)</code> should return a number
    testString: 'assert(typeof convertToF(0) === ''number'', ''<code>convertToF(0)</code> should return a number'');'
  - text: <code>convertToF(-30)</code> should return a value of <code>-22</code>
    testString: 'assert(convertToF(-30) === -22, ''<code>convertToF(-30)</code> should return a value of <code>-22</code>'');'
  - text: <code>convertToF(-10)</code> should return a value of <code>14</code>
    testString: 'assert(convertToF(-10) === 14, ''<code>convertToF(-10)</code> should return a value of <code>14</code>'');'
  - text: <code>convertToF(0)</code> should return a value of <code>32</code>
    testString: 'assert(convertToF(0) === 32, ''<code>convertToF(0)</code> should return a value of <code>32</code>'');'
  - text: <code>convertToF(20)</code> should return a value of <code>68</code>
    testString: 'assert(convertToF(20) === 68, ''<code>convertToF(20)</code> should return a value of <code>68</code>'');'
  - text: <code>convertToF(30)</code> should return a value of <code>86</code>
    testString: 'assert(convertToF(30) === 86, ''<code>convertToF(30)</code> should return a value of <code>86</code>'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function convertToF(celsius) {
  let fahrenheit;
  return fahrenheit;
}

convertToF(30);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function convertToF(celsius) {
  let fahrenheit = celsius * 9/5 + 32;

  return fahrenheit;
}

convertToF(30);

```

</section>
