---
id: 5
localeTitle: 5900f36e1000cf542c50fe81
challengeType: 5
title: 'Problem 2: Even Fibonacci Numbers'
---

## Description
<section id='description'> 
Cada nuevo término en la secuencia de Fibonacci se genera al agregar los dos términos anteriores. Al comenzar con 1 y 2, los primeros 10 términos serán: 
<div style='text-align: center;'> 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... </div> 
Al considerar los términos en la secuencia de Fibonacci cuyos valores no exceden el término <code>n</code> , encuentre la suma de los términos de valor par. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fiboEvenSum(10)</code> debe devolver 188.
    testString: 'assert.strictEqual(fiboEvenSum(10), 188, "<code>fiboEvenSum(10)</code> should return 188.");'
  - text: <code>fiboEvenSum(23)</code> debe devolver 60696.
    testString: 'assert.strictEqual(fiboEvenSum(23), 60696, "<code>fiboEvenSum(23)</code> should return 60696.");'
  - text: <code>fiboEvenSum(43)</code> debe devolver 1485607536.
    testString: 'assert.strictEqual(fiboEvenSum(43), 1485607536, "<code>fiboEvenSum(43)</code> should return 1485607536.");'
  - text: Su función no está devolviendo el resultado correcto utilizando nuestros valores de prueba.
    testString: 'assert.strictEqual(fiboEvenSum(18), 3382, "Your function is not returning the correct result using our tests values.");'
  - text: Su función debe devolver un valor <code>even</code> .
    testString: 'assert.equal(fiboEvenSum(31) % 2 === 0, true, "Your function should return an <code>even</code> value.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function fiboEvenSum(n) {
  // You can do it!
  return true;
}

fiboEvenSum(10);
```

</div>



</section>

## Solution
<section id='solution'>


```js
const fiboEvenSum = (number) => {
  let temp, sum = 0, a = 0, b = 1;
    while (number >= 0) {
      temp = a;
      a = b;
      b += temp;
      number --;
      if ((b % 2) === 0) {
        sum += b;
      }
    }

  return sum;
}
```

</section>
