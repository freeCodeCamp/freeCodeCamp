---
id: a3bfc1673c0526e06d3ac698
challengeType: 5
forumTopicId: 16085
title: 对所有素数求和
---

## Description
<section id='description'>

质数是大于 1 且仅可以被 1 和自己整除的数。
比如，2 就是一个质数，因为它只可以被 1 和 2（它本身）整除。
相反，4 不是质数，因为它可以被 1, 2 和 4 整除。

重写 `sumPrimes` 使其返回所有小于或等于该数字的质数
的和。

如果你遇到了问题，请点击<a href='https://forum.freecodecamp.one/t/topic/157' target='_blank'>帮助</a>。
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumPrimes(10)</code>应该返回一个数字。
    testString: assert.deepEqual(typeof sumPrimes(10), 'number');
  - text: <code>sumPrimes(10)</code>应该返回 17。
    testString: assert.deepEqual(sumPrimes(10), 17);
  - text: <code>sumPrimes(977)</code>应该返回 73156。
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
