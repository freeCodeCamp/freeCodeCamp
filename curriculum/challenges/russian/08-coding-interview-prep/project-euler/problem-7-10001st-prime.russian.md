---
id: 5900f3731000cf542c50fe86
challengeType: 5
title: 'Problem 7: 10001st prime'
forumTopicId: 302182
localeTitle: 'Задача 7: 10001st prime'
---

## Description
<section id='description'>
Перечислив первые шесть простых чисел: 2, 3, 5, 7, 11 и 13, мы увидим, что 6-е число равно 13. Что такое <code>n</code> е простое число?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>nthPrime(6)</code> should return 13.
    testString: assert.strictEqual(nthPrime(6), 13);
  - text: <code>nthPrime(10)</code> should return 29.
    testString: assert.strictEqual(nthPrime(10), 29);
  - text: <code>nthPrime(100)</code> should return 541.
    testString: assert.strictEqual(nthPrime(100), 541);
  - text: <code>nthPrime(1000)</code> should return 7919.
    testString: assert.strictEqual(nthPrime(1000), 7919);
  - text: <code>nthPrime(10001)</code> should return 104743.
    testString: assert.strictEqual(nthPrime(10001), 104743);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function nthPrime(n) {
  // Good luck!
  return true;
}

nthPrime(10001);

```

</div>

</section>

## Solution
<section id='solution'>

```js
const nthPrime = (number)=>{
 let pN = 2;
 let step = 0;
 while (step<number) {
   let isPrime = true;
   for(let i = 2;i<pN;i++){
      if(!(pN%i)){
        isPrime = false;
        break;
      }
   }
   isPrime ? step++ : '';
    pN++;
 }
 return pN-1;
}
```

</section>
