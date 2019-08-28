---
id: 5900f36f1000cf542c50fe82
challengeType: 5
title: 'Problem 3: Largest prime factor'
forumTopicId: 301952
localeTitle: 'Задача 3: Наибольший простой множитель'
---

## Description
<section id='description'>
Простыми множителями (факторами) числа 13195 являются 5, 7, 13 и 29. Каков самый большой простой множитель для данного <code>number</code> ?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>largestPrimeFactor(2)</code> should return 2.
    testString: assert.strictEqual(largestPrimeFactor(2), 2);
  - text: <code>largestPrimeFactor(3)</code> should return 3.
    testString: assert.strictEqual(largestPrimeFactor(3), 3);
  - text: <code>largestPrimeFactor(5)</code> should return 5.
    testString: assert.strictEqual(largestPrimeFactor(5), 5);
  - text: <code>largestPrimeFactor(7)</code> should return 7.
    testString: assert.strictEqual(largestPrimeFactor(7), 7);
  - text: <code>largestPrimeFactor(13195)</code> should return 29.
    testString: assert.strictEqual(largestPrimeFactor(13195), 29);
  - text: <code>largestPrimeFactor(600851475143)</code> should return 6857.
    testString: assert.strictEqual(largestPrimeFactor(600851475143), 6857);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function largestPrimeFactor(number) {
  // Good luck!
  return true;
}

largestPrimeFactor(13195);

```

</div>

</section>

## Solution
<section id='solution'>

```js
const largestPrimeFactor = (number)=>{
  let largestFactor = number;
  for(let i = 2;i<largestFactor;i++){
  if(!(largestFactor%i)){
    largestFactor = largestFactor/i;
    largestPrimeFactor(largestFactor);
  }
  }
  return largestFactor;
}
```

</section>
