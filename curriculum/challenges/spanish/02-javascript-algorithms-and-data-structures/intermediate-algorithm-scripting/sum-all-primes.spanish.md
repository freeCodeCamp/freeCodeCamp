---
id: a3bfc1673c0526e06d3ac698
title: Sum All Primes
localeTitle: Suma todos los premios
isRequired: true
challengeType: 5
---

## Description
<section id='description'> 
Suma todos los números primos hasta e incluyendo el número proporcionado. 
Un número primo se define como un número mayor que uno y tiene solo dos divisores, uno y sí mismo. Por ejemplo, 2 es un número primo porque solo es divisible entre uno y dos. 
El número proporcionado puede no ser un número primo. 
Recuerda usar <a href='http://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck/19514' target='_blank'>Read-Search-Ask</a> si te atascas. Trate de emparejar el programa. Escribe tu propio código. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumPrimes(10)</code> debe devolver un número.
    testString: 'assert.deepEqual(typeof sumPrimes(10), "number", "<code>sumPrimes(10)</code> should return a number.");'
  - text: <code>sumPrimes(10)</code> debe devolver 17.
    testString: 'assert.deepEqual(sumPrimes(10), 17, "<code>sumPrimes(10)</code> should return 17.");'
  - text: <code>sumPrimes(977)</code> debe devolver 73156.
    testString: 'assert.deepEqual(sumPrimes(977), 73156, "<code>sumPrimes(977)</code> should return 73156.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumPrimes(num) {
  return num;
}

sumPrimes(10);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function eratosthenesArray(n) {
    var primes = [];
    if (n > 2) {
        var half = n>>1;
        var sieve = Array(half);
        for (var i = 1, limit = Math.sqrt(n)>>1; i <= limit; i++) {
            if (!sieve[i]) {
                for (var step = 2*i+1, j = (step*step)>>1; j < half; j+=step) {
                    sieve[j] = true;
                }
            }
        }
        primes.push(2);
        for (var p = 1; p < half; p++) {
            if (!sieve[p]) primes.push(2*p+1);
        }
    }
    return primes;
}

function sumPrimes(num) {
  return eratosthenesArray(num+1).reduce(function(a,b) {return a+b;}, 0);
}

sumPrimes(10);
```

</section>
