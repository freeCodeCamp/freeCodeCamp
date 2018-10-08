---
id: 5
localeTitle: 5900f37a1000cf542c50fe8d
challengeType: 5
title: 'Problem 14: Longest Collatz sequence'
---

## Description
<section id='description'> 
La siguiente secuencia iterativa se define para el conjunto de enteros positivos: 
<div style='padding-left: 4em;'> <var>n</var> → <var>n</var> / 2 ( <var>n</var> es par) </div> 
<div style='padding-left: 4em;'> <var>n</var> → 3 <var>n</var> + 1 ( <var>n</var> es impar) </div> 
Usando la regla anterior y comenzando con 13, generamos la siguiente secuencia: 
<div style='text-align: center;'> 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1 </div> 
Se puede ver que esta secuencia (comenzando en 13 y terminando en 1) contiene 10 términos. Aunque aún no se ha probado (Problema de Collatz), se piensa que todos los números iniciales terminan en 1. 
¿Qué número inicial, debajo del <code>limit</code> dado, produce la cadena más larga? 
NOTA: Una vez que la cadena comienza, los términos pueden ir por encima de un millón. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>longestCollatzSequence(14)</code> debe devolver 9.
    testString: 'assert.strictEqual(longestCollatzSequence(14), 9, "<code>longestCollatzSequence(14)</code> should return 9.");'
  - text: <code>longestCollatzSequence(5847)</code> debe devolver 3711.
    testString: 'assert.strictEqual(longestCollatzSequence(5847), 3711, "<code>longestCollatzSequence(5847)</code> should return 3711.");'
  - text: <code>longestCollatzSequence(46500)</code> debe devolver 35655.
    testString: 'assert.strictEqual(longestCollatzSequence(46500), 35655, "<code>longestCollatzSequence(46500)</code> should return 35655.");'
  - text: <code>longestCollatzSequence(54512)</code> debe devolver 52527.
    testString: 'assert.strictEqual(longestCollatzSequence(54512), 52527, "<code>longestCollatzSequence(54512)</code> should return 52527.");'
  - text: <code>longestCollatzSequence(1000000)</code> debe devolver 837799.
    testString: 'assert.strictEqual(longestCollatzSequence(1000000), 837799, "<code>longestCollatzSequence(1000000)</code> should return 837799.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function longestCollatzSequence(limit) {
  // Good luck!
  return true;
}

longestCollatzSequence(14);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function longestCollatzSequence(limit) {
  let longestSequenceLength = 0;
  let startingNum = 0;

  function sequenceLength(num) {
    let length = 1;

    while (num >= 1) {
      if (num === 1) {        break;
      } else if (num % 2 === 0) {
        num = num / 2;
        length++;
      } else {
        num = num * 3 + 1;
        length++;
      }
    }
    return length;
  }

  for (let i = 2; i < limit; i++) {
    let currSequenceLength = sequenceLength(i);
    if (currSequenceLength > longestSequenceLength) {
      longestSequenceLength = currSequenceLength;
      startingNum = i;
    }
  }
  return startingNum;
}
```

</section>
