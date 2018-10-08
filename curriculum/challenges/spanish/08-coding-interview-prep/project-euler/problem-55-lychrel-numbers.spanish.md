---
id: 5
localeTitle: 5900f3a31000cf542c50feb6
challengeType: 5
title: 'Problem 55: Lychrel numbers'
---

## Description
<section id='description'> 
Si tomamos 47, revertimos y sumamos, 47 + 74 = 121, que es palindrómico. 
No todos los números producen palíndromos tan rápidamente. Por ejemplo, 
349 + 943 = 1292, 
1292 + 2921 = 4213 
4213 + 3124 = 7337 
Es decir, 349 tomó tres iteraciones para llegar a un palíndromo. 
Aunque nadie lo ha demostrado aún, se piensa que algunos números, como 196, nunca producen un palíndromo. Un número que nunca forma un palíndromo a través del proceso inverso y de adición se llama un número de Lychrel. Debido a la naturaleza teórica de estos números, y para el propósito de este problema, asumiremos que un número es Lychrel hasta que se demuestre lo contrario. Además, se le otorga que por cada número inferior a diez mil, (i) se convertirá en un palíndromo en menos de cincuenta iteraciones, o, (ii) nadie, con toda la potencia de cálculo que existe, ha logrado hasta ahora mapearlo a un palíndromo. De hecho, 10677 es el primer número que se muestra que requiere más de cincuenta iteraciones antes de producir un palíndromo: 4668731596684224866951378664 (53 iteraciones, 28 dígitos). 
Sorprendentemente, hay números palindrómicos que son números de Lychrel; el primer ejemplo es 4994. 
¿Cuántos números de Lychrel hay debajo de <code>num</code> ? 
NOTA: La redacción se modificó ligeramente el 24 de abril de 2007 para enfatizar la naturaleza teórica de números Lychrel. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>countLychrelNumbers(1000)</code> debe devolver 13.
    testString: 'assert.strictEqual(countLychrelNumbers(1000), 13, "<code>countLychrelNumbers(1000)</code> should return 13.");'
  - text: <code>countLychrelNumbers(5000)</code> debe devolver 76.
    testString: 'assert.strictEqual(countLychrelNumbers(5000), 76, "<code>countLychrelNumbers(5000)</code> should return 76.");'
  - text: <code>countLychrelNumbers(10000)</code> debe devolver 249.
    testString: 'assert.strictEqual(countLychrelNumbers(10000), 249, "<code>countLychrelNumbers(10000)</code> should return 249.");'
  - text: Su función debe contar todos los números de Lychrel.
    testString: 'assert.strictEqual(countLychrelNumbers(3243), 39, "Your function should count all Lychrel numbers.");'
  - text: Su función debe pasar todos los casos de prueba.
    testString: 'assert.strictEqual(countLychrelNumbers(7654), 140, "Your function should pass all test cases.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countLychrelNumbers(num) {
  // Good luck!
  return true;
}

countLychrelNumbers(10000);
```

</div>



</section>

## Solution
<section id='solution'>


```js
const countLychrelNumbers = (size) => {
  const numReverse = (num) => {
    return Number(num.toString().split('').reverse().join(''));
  };
  const isPalin = (num) => {
    if (numReverse(num) === num) {
      return true;
    }
    return false;
  };
  let total = 0;
  for (let i = 1; i < size; i++) {
    let loopCount = 1;
    let sum = i;
    while (loopCount < 50) {
      sum = sum + numReverse(sum);
      if (isPalin(sum)) {
        break;
      } else {
        loopCount++;
      }
    }
    if (loopCount === 50) {
      total++;
    }
  }
  return total;
}
```

</section>
