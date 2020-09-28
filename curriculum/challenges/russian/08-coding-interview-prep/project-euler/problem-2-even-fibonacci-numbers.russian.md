---
id: 5900f36e1000cf542c50fe81
challengeType: 5
title: 'Problem 2: Even Fibonacci Numbers'
forumTopicId: 301838
localeTitle: 'Проблема 2: Чётные числа Фибоначчи'
---

## Description
<section id='description'>
Каждый новый член в последовательности Фибоначчи генерируется путем сложения предыдущих двух членов. Начиная с 1 и 2, первые 10 членов будут: <div style="text-align: center;"> 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ... </div> Рассматривая члены в последовательности Фибоначчи до <code>n</code> -го включительно, найдите сумму четных чисел последовательности.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>fiboEvenSum(10)</code> should return 44.
    testString: assert.strictEqual(fiboEvenSum(10), 44);
  - text: <code>fiboEvenSum(18)</code> should return 3382.
    testString: assert.strictEqual(fiboEvenSum(18), 3382);
  - text: <code>fiboEvenSum(23)</code> should return 60696.
    testString: assert.strictEqual(fiboEvenSum(23), 60696);
  - text: <code>fiboEvenSum(43)</code> should return 350704366.
    testString: assert.strictEqual(fiboEvenSum(43), 350704366);
  - text: Your function should return an <code>even</code> value.
    testString: assert.equal(fiboEvenSum(10) % 2 === 0, true);

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
  if (number <= 1) {
    return 0;
  } else {
      let evenSum = 2, first = 1, second = 2, fibNum; // According to problem description our Fibonacci series starts with 1, 2
      for (let i = 3; i <= number; i++) {
        fibNum = first + second;
        first = second;
        second = fibNum;
        if (fibNum % 2 == 0) {
          evenSum += fibNum;
        }
      }
      return evenSum;
  }
}
```

</section>
