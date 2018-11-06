---
id: a789b3483989747d63b0e427
title: Return Largest Numbers in Arrays
isRequired: true
challengeType: 5
videoUrl: ''
localeTitle: Devolver los números más grandes en matrices
---

## Description
<section id="description"> Devuelve una matriz que consiste del número más grande de cada sub-matriz proporcionada. Por simplicidad, la matriz provista contendrá exactamente 4 sub-matrices. Recuerde, puede recorrer una matriz con un simple bucle for, y acceder a cada miembro con la sintaxis de matriz <code>arr[i]</code> . Recuerda usar <a href="http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514" target="_blank">Read-Search-Ask</a> si se atasca. Escribe su propio código. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])</code> debe devolver una matriz.'
    testString: 'assert(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]).constructor === Array, "<code>largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])</code> should return an array.");'
  - text: '<code>largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])</code> debe devolver <code>[27, 5, 39, 1001]</code> .'
    testString: 'assert.deepEqual(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]), [27, 5, 39, 1001], "<code>largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]])</code> should return <code>[27, 5, 39, 1001]</code>.");'
  - text: '<code>largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])</code> debe devolver <code>[9, 35, 97, 1000000]</code> .'
    testString: 'assert.deepEqual(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]), [9, 35, 97, 1000000], "<code>largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]])</code> should return <code>[9, 35, 97, 1000000]</code>.");'
  - text: '<code>largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])</code> debe retorno <code>[25, 48, 21, -3]</code> .'
    testString: 'assert.deepEqual(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]), [25, 48, 21, -3], "<code>largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])</code> should return <code>[25, 48, 21, -3]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function largestOfFour(arr) {
  // You can do this!
  return arr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
