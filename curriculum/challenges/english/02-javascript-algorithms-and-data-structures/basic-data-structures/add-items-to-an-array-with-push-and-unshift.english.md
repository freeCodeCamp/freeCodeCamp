---
id: 587d78b2367417b2b2512b0e
title: Add Items to an Array with push() and unshift()
challengeType: 1
---

## Description
<section id='description'>
An array's length, like the data types it can contain, is not fixed. Arrays can be defined with a length of any number of elements, and elements can be added or removed over time; in other words, arrays are <dfn>mutable</dfn>. In this challenge, we will look at two methods with which we can programmatically modify an array: <code>Array.push()</code> and <code>Array.unshift()</code>.
Both methods take one or more elements as parameters and add those elements to the array the method is being called on; the <code>push()</code> method adds elements to the end of an array, and <code>unshift()</code> adds elements to the beginning. Consider the following:
<blockquote>let twentyThree = 'XXIII';<br>let romanNumerals = ['XXI', 'XXII'];<br><br>romanNumerals.unshift('XIX', 'XX');<br>// now equals ['XIX', 'XX', 'XXI', 'XXII']<br><br>romanNumerals.push(twentyThree);<br>// now equals ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']
Notice that we can also pass variables, which allows us even greater flexibility in dynamically modifying our array's data.
</section>

## Instructions
<section id='instructions'>
We have defined a function, <code>mixedNumbers</code>, which we are passing an array as an argument. Modify the function by using <code>push()</code> and <code>unshift()</code> to add <code>'I', 2, 'three'</code> to the beginning of the array and <code>7, 'VIII', 9</code> to the end so that the returned array contains representations of the numbers 1-9 in order.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>mixedNumbers(["IV", 5, "six"])</code> should now return <code>["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]</code>
    testString: assert.deepEqual(mixedNumbers(['IV', 5, 'six']), ['I', 2, 'three', 'IV', 5, 'six', 7, 'VIII', 9], '<code>mixedNumbers(["IV", 5, "six"])</code> should now return <code>["I", 2, "three", "IV", 5, "six", 7, "VIII", 9]</code>');
  - text: The <code>mixedNumbers</code> function should utilize the <code>push()</code> method
    testString: assert.notStrictEqual(mixedNumbers.toString().search(/\.push\(/), -1, 'The <code>mixedNumbers</code> function should utilize the <code>push()</code> method');
  - text: The <code>mixedNumbers</code> function should utilize the <code>unshift()</code> method
    testString: assert.notStrictEqual(mixedNumbers.toString().search(/\.unshift\(/), -1, 'The <code>mixedNumbers</code> function should utilize the <code>unshift()</code> method');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function mixedNumbers(arr) {
  // change code below this line

  // change code above this line
  return arr;
}

// do not change code below this line
console.log(mixedNumbers(['IV', 5, 'six']));
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
