---
id: 5900f38c1000cf542c50fe9f
challengeType: 5
title: 'Problem 32: Pandigital products'
forumTopicId: 301976
localeTitle: 'Проблема 32: Продукты Pandigital'
---

## Description
<section id='description'>
Мы будем говорить, что n-значное число является pandigital, если оно использует все цифры от 1 до n ровно один раз; например, 5-значное число, 15234, составляет от 1 до 5 pandigital. <p> Продукт 7254 необычен, так как идентичность 39 × 186 = 7254, содержащая мультипликацию, множитель и продукт от 1 до 9 pandigital. </p><p> Найдите сумму всех продуктов, чей идентификатор multipicand / multiplier / product может быть записан как от 1 до 9 pandigital. </p><p> СОВЕТ. Некоторые продукты могут быть получены более чем одним способом, поэтому обязательно включайте их только один раз в свою сумму. </p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>pandigitalProducts()</code> is a function.
    testString: assert(typeof pandigitalProducts === 'function');
  - text: <code>pandigitalProducts()</code> should return 45228.
    testString: assert.strictEqual(pandigitalProducts(), 45228);

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
    let digitStr = '';
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
