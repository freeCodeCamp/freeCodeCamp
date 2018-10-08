---
id: 5
localeTitle: 5900f38c1000cf542c50fe9f
challengeType: 5
title: 'Problem 32: Pandigital products'
---

## Description
<section id='description'> 
Diremos que un número de n dígitos es pandigital si hace uso de todos los dígitos 1 a n exactamente una vez; por ejemplo, el número de 5 dígitos, 15234, es de 1 a 5 pandigital. 

El producto 7254 es inusual, ya que la identidad, 39 × 186 = 7254, contiene multiplicando, multiplicador y el producto es de 1 a 9 de pandigital. 

Encuentre la suma de todos los productos cuyo multiplicando / multiplicador / identidad de producto se puede escribir de 1 a 9 pandigital. 

CONSEJO: algunos productos se pueden obtener de más de una manera, así que asegúrese de incluirlos solo una vez en su suma. 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>pandigitalProducts()</code> es una función.
    testString: 'assert(typeof pandigitalProducts === "function", "<code>pandigitalProducts()</code> is a function.");'
  - text: <code>pandigitalProducts()</code> debe devolver 45228.
    testString: 'assert.strictEqual(pandigitalProducts(), 45228, "<code>pandigitalProducts()</code> should return 45228.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function pandigitalProducts() {
  // Good luck!
  return true;
}

pandigitalProducts();
```

</div>



</section>

## Solution
<section id='solution'>


```js
function pandigitalProducts() {
  function is1to9Pandigital(...numbers) {
    const digitStr = concatenateNums(...numbers);
    // check if length is 9
    if (digitStr.length !== 9) {
      return false;
    }
    // check if pandigital
    for (let i = digitStr.length; i > 0; i--) {
      if (digitStr.indexOf(i.toString()) === -1) {
        return false;
      }
    }
    return true;
  }
  function concatenateNums(...numbers) {
    let digitStr = ";
    for (let i = 0; i < numbers.length; i++) {
      digitStr += numbers[i].toString();
    }
    return digitStr;
  }

  const pandigitalNums = [];
  let sum = 0;
  for (let mult1 = 2; mult1 < 9876; mult1++) {
    let mult2 = 123;
    while (concatenateNums(mult1, mult2, mult1 * mult2).length < 10) {
      if (is1to9Pandigital(mult1, mult2, mult1 * mult2) && !pandigitalNums.includes(mult1 * mult2)) {
        pandigitalNums.push(mult1 * mult2);
        sum += mult1 * mult2;
      }
      mult2++;
    }
  }
  return sum;
}
```

</section>
