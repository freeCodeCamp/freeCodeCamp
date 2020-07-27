---
id: a3bfc1673c0526e06d3ac698
title: Sum All Primes
isRequired: true
challengeType: 5
forumTopicId: 16085
localeTitle: Сумма всех чисел
---

## Description
<section id='description'>
Суммируйте все простые числа до и включив предоставленный номер. Простое число определяется как число больше единицы и имеет только два делителя: один и сам. Например, 2 - простое число, потому что оно делится только на одно и два. Предоставленный номер не может быть простым. Не забудьте использовать <a href="https://forum.freecodecamp.org/t/how-to-get-help-when-you-are-stuck-coding/19514" target="_blank">Read-Search-Ask,</a> если вы застряли. Попробуйте подключить программу. Напишите свой собственный код.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumPrimes(10)</code> should return a number.
    testString: assert.deepEqual(typeof sumPrimes(10), 'number');
  - text: <code>sumPrimes(10)</code> should return 17.
    testString: assert.deepEqual(sumPrimes(10), 17);
  - text: <code>sumPrimes(977)</code> should return 73156.
    testString: assert.deepEqual(sumPrimes(977), 73156);

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
