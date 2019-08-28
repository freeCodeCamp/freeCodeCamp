---
id: 5900f3931000cf542c50fea5
challengeType: 5
title: 'Problem 38: Pandigital multiples'
forumTopicId: 302042
localeTitle: 'Задача 38: Pandigital multiples'
---

## Description
<section id='description'>
Возьмите номер 192 и умножьте его на каждый из 1, 2 и 3: 192 × 1 = 192 192 × 2 = 384 192 × 3 = 576. Объединив каждый продукт, мы получим от 1 до 9 pandigital, 192384576. Мы позвоним 192384576 конкатенированный продукт 192 и (1, 2, 3). То же самое можно достичь, начиная с 9 и умножая на 1, 2, 3, 4 и 5, давая pandigital, 918273645, который является конкатенированным продуктом 9 и (1, 2, 3, 4, 5). Что представляет собой наибольшее от 1 до 9 pandigital 9-значное число, которое может быть сформировано как конкатенированное произведение целого числа с (1, 2, ..., <var>n</var> ), где <var>n</var> &gt; 1?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>pandigitalMultiples()</code> should return 932718654.
    testString: assert.strictEqual(pandigitalMultiples(), 932718654);

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
