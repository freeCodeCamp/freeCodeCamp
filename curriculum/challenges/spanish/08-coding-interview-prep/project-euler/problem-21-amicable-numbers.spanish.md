---
id: 5
localeTitle: 5900f3811000cf542c50fe94
challengeType: 5
title: 'Problem 21: Amicable numbers'
---

## Description
<section id='description'> 
Deje que d ( <var>n</var> ) se defina como la suma de los divisores propios de <var>n</var> (números menores que <var>n</var> que se dividen uniformemente en <var>n</var> ). 
Si d ( <var>a</var> ) = <var>b</var> y d ( <var>b</var> ) = <var>a</var> , donde <var>a</var> ≠ <var>b</var> , entonces <var>a</var> y <var>b</var> son un par amigable y cada uno de <var>a</var> y <var>b</var> se llama números amistosos. 
Por ejemplo, los divisores propios de 220 son 1, 2, 4, 5, 10, 11, 20, 22, 44, 55 y 110; por lo tanto, d (220) = 284. Los divisores propios de 284 son 1, 2, 4, 71 y 142; entonces d (284) = 220. 
Evalúa la suma de todos los números amistosos debajo de <var>n</var> . 
</section>

## Instructions
<section id='instructions'> 

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>sumAmicableNum(1000)</code> debe devolver 504.
    testString: 'assert.strictEqual(sumAmicableNum(1000), 504, "<code>sumAmicableNum(1000)</code> should return 504.");'
  - text: <code>sumAmicableNum(2000)</code> debe devolver 2898.
    testString: 'assert.strictEqual(sumAmicableNum(2000), 2898, "<code>sumAmicableNum(2000)</code> should return 2898.");'
  - text: <code>sumAmicableNum(5000)</code> debe devolver 8442.
    testString: 'assert.strictEqual(sumAmicableNum(5000), 8442, "<code>sumAmicableNum(5000)</code> should return 8442.");'
  - text: <code>sumAmicableNum(10000)</code> debe devolver 31626.
    testString: 'assert.strictEqual(sumAmicableNum(10000), 31626, "<code>sumAmicableNum(10000)</code> should return 31626.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function sumAmicableNum(n) {
  // Good luck!
  return n;
}

sumAmicableNum(10000);
```

</div>



</section>

## Solution
<section id='solution'>


```js
const sumAmicableNum = (n) => {
  const fsum = (n) => {
    let sum = 1;
    for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++)
      if (Math.floor(n % i) === 0)
        sum += i + Math.floor(n / i);
    return sum;
  };
  let d = [];
  let amicableSum = 0;
  for (let i=2; i<n; i++) d[i] = fsum(i);
  for (let i=2; i<n; i++) {
    let dsum = d[i];
    if (d[dsum]===i && i!==dsum) amicableSum += i+dsum;
  }
  return amicableSum/2;
};
```

</section>
