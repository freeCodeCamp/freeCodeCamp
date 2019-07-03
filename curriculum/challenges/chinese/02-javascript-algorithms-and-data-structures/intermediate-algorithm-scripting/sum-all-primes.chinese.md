---
id: a3bfc1673c0526e06d3ac698
title: Sum All Primes
challengeType: 5
isRequired: true
videoUrl: ''
localeTitle: Sum All Primes
---

## Description
<section id='description'>
给出一个含有两个数字的数组，我们需要写一个函数，让它返回这两个数字间所有数字（包含这两个数字）的总和。
注意，较小数不一定总是出现在数组的第一个元素。
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
    testString: assert.deepEqual(typeof sumPrimes(10), 'number', '<code>sumPrimes(10)</code>应该返回一个数字。');
  - text: <code>sumPrimes(10)</code>应该返回 17。
    testString: assert.deepEqual(sumPrimes(10), 17, '<code>sumPrimes(10)</code>应该返回 17。');
  - text: <code>sumPrimes(977)</code>应该返回 73156。
    testString: assert.deepEqual(sumPrimes(977), 73156, '<code>sumPrimes(977)</code>应该返回 73156。');

```

</section>

## Challenge Seed
<section id='challengeSeed'>















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
              