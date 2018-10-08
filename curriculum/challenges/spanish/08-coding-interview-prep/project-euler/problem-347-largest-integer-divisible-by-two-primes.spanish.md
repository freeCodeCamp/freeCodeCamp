---
id: 5
localeTitle: 5900f4c81000cf542c50ffd9
challengeType: 5
title: 'Problem 347: Largest integer divisible by two primes'
---

## Description
<section id='description'> 
El entero más grande ≤ 100 que solo es divisible por los números primos 2 y 3 es 96, ya que 96 = 32 * 3 = 25 * 3. 
Para dos primos distintos p y q, deje que M (p, q, N) sea el mayor entero positivo ≤N solo divisible 
tanto por p como q y M (p, q, N) = 0 si tal entero positivo no lo hace existe. 


Ej. M (2,3,100) = 96. 
M (3,5,100) = 75 y no 90 porque 90 es divisible por 2, 3 y 5. 
También M (2,73,100) = 0 porque no existe un entero positivo ≤ 100 que sea divisible por 2 y 73. 


Sea S (N) la suma de todos los M distintos (p, q, N). 
S (100) = 2262. 


Encuentra S (10 000 000). 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler347()</code> debe devolver 11109800204052.
    testString: 'assert.strictEqual(euler347(), 11109800204052, "<code>euler347()</code> should return 11109800204052.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler347() {
  // Good luck!
  return true;
}

euler347();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
