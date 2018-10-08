---
title: 100 doors
id: 594810f028c0303b75339acb
localeTitle: 594810f028c0303b75339acb
challengeType: 5
---

## Description
<section id='description'> 
<p> Hay 100 puertas seguidas que están inicialmente cerradas. Haces 100 pases por las puertas. La primera vez, visite todas las puertas y &quot;active&quot; la puerta (si la puerta está cerrada, ábrala; si está abierta, ciérrela). La segunda vez, solo visite cada segunda puerta (es decir, la puerta # 2, # 4, # 6, ...) y actívela. La tercera vez, visite cada tercera puerta (es decir, la puerta # 3, # 6, # 9, ...), etc., hasta que solo visite la puerta número 100. </p> 
<p> Implementar una función para determinar el estado de las puertas después de la última pasada. Devuelva el resultado final en una matriz, con solo el número de puerta incluido en la matriz si está abierta. </p> 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getFinalOpenedDoors</code> es una función.
    testString: 'assert(typeof getFinalOpenedDoors === "function", "<code>getFinalOpenedDoors</code> is a function.");'
  - text: <code>getFinalOpenedDoors</code> debe devolver una matriz.
    testString: 'assert(Array.isArray(getFinalOpenedDoors(100)), "<code>getFinalOpenedDoors</code> should return an array.");'
  - text: <code>getFinalOpenedDoors</code> no produjo los resultados correctos.
    testString: 'assert.deepEqual(getFinalOpenedDoors(100), solution, "<code>getFinalOpenedDoors</code> did not produce the correct results.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getFinalOpenedDoors (numDoors) {
  // Good luck!
}
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
function getFinalOpenedDoors (numDoors) {
  // this is the final pattern (always squares).
  // thus, the most efficient solution simply returns an array of squares up to numDoors).
  const finalState = [];
  let i = 1;
  while (Math.pow(i, 2) <= numDoors) {
    finalState.push(Math.pow(i, 2));
    i++;
  }
  return finalState;
}

```

</section>
