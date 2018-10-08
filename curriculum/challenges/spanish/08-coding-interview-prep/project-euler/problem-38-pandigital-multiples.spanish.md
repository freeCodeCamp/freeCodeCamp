---
id: 5
localeTitle: 5900f3931000cf542c50fea5
challengeType: 5
title: 'Problem 38: Pandigital multiples'
---

## Description
<section id='description'> 
Tome el número 192 y multiplíquelo por cada uno de 1, 2 y 3: 
192 × 1 = 192 
192 × 2 = 384 
192 × 3 = 576 
Al concatenar cada producto obtenemos el pandigital de 1 a 9, 192384576 Llamaremos a 192384576 el producto concatenado de 192 y (1, 2, 3). 
Lo mismo se puede lograr comenzando con 9 y multiplicando por 1, 2, 3, 4 y 5, dando el pandigital, 918273645, que es el producto concatenado de 9 y (1, 2, 3, 4, 5). 
¿Cuál es el número pandigital de 9 dígitos más grande que se puede formar como producto concatenado de un número entero con (1, 2, ..., <var>n</var> ) donde <var>n</var> &gt; 1? 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>pandigitalMultiples()</code> debe devolver 932718654.
    testString: 'assert.strictEqual(pandigitalMultiples(), 932718654, "<code>pandigitalMultiples()</code> should return 932718654.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function pandigitalMultiples() {
  // Good luck!
  return true;
}

pandigitalMultiples();
```

</div>



</section>

## Solution
<section id='solution'>


```js
function pandigitalMultiples() {

  function get9DigitConcatenatedProduct(num) {
    // returns false if concatenated product is not 9 digits
    let concatenatedProduct = num.toString();
    for (let i = 2; concatenatedProduct.length < 9; i++) {
      concatenatedProduct += num * i;
    }
    return concatenatedProduct.length === 9 ? concatenatedProduct : false;
  }

  function is1to9Pandigital(num) {
    const numStr = num.toString();

    // check if length is not 9
    if (numStr.length !== 9) {
      return false;
    }

    // check if pandigital
    for (let i = 9; i > 0; i--) {
      if (numStr.indexOf(i.toString()) === -1) {
        return false;
      }
    }
    return true;
  }

  let largestNum = 0;
  for (let i = 9999; i >= 9000; i--) {
    const concatenatedProduct =  get9DigitConcatenatedProduct(i);
    if (is1to9Pandigital(concatenatedProduct) && concatenatedProduct > largestNum) {
      largestNum = parseInt(concatenatedProduct);
      break;
    }
  }
  return largestNum;
}
```

</section>
