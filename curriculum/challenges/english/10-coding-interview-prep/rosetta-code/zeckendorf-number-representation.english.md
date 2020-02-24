---
title: Zeckendorf number representation
id: 594810f028c0303b75339ad6
challengeType: 5
isHidden: false
forumTopicId: 302346
---

## Description
<section id='description'>
Just as numbers can be represented in a positional notation as sums of multiples of the powers of ten (decimal) or two (binary); all the positive integers can be represented as the sum of one or zero times the distinct members of the Fibonacci series. Recall that the first six distinct Fibonacci numbers are:  <code>1, 2, 3, 5, 8, 13</code>.
The decimal number eleven can be written as <code>0*13 + 1*8 + 0*5 + 1*3 + 0*2 + 0*1</code> or <code>010100</code> in positional notation where the columns represent multiplication by a particular member of the sequence. Leading zeroes are dropped so that 11 decimal becomes <code>10100</code>. 10100 is not the only way to make 11 from the Fibonacci numbers however <code>0*13 + 1*8 + 0*5 + 0*3 + 1*2 + 1*1</code> or 010011 would also represent decimal 11. For a true Zeckendorf number there is the added restriction that <i>no two consecutive Fibonacci numbers can be used</i> which leads to the former unique solution.
</section>

## Instructions
<section id='instructions'>
Write a function that generates and returns an array of the first <code>n</code> Zeckendorf numbers in order.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: zeckendorf should be function.
    testString: assert.equal(typeof zeckendorf, 'function');
  - text: Your <code>zeckendorf</code> function should return the correct answer.
    testString: assert.deepEqual(answer, solution20);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function zeckendorf(n) {
  // good luck!
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const range = (m, n) => (
  Array.from({
    length: Math.floor(n - m) + 1
  }, (_, i) => m + i)
);

const solution20 = [
  '1', '10', '100', '101', '1000', '1001', '1010', '10000', '10001',
  '10010', '10100', '10101', '100000', '100001', '100010', '100100', '100101',
  '101000', '101001', '101010'
];

const answer = range(1, 20).map(zeckendorf);
```

</div>

</section>

## Solution
<section id='solution'>

```js
// zeckendorf :: Int -> String
function zeckendorf(n) {
  const f = (m, x) => (m < x ? [m, 0] : [m - x, 1]);
  return (n === 0 ? ([0]) :
    mapAccumL(f, n, reverse(
      tail(fibUntil(n))
    ))[1]).join('');
}

// fibUntil :: Int -> [Int]
let fibUntil = n => {
  const xs = [];
  until(
      ([a]) => a > n,
      ([a, b]) => (xs.push(a), [b, a + b]), [1, 1]
  );
  return xs;
};

let mapAccumL = (f, acc, xs) => (
  xs.reduce((a, x) => {
    const pair = f(a[0], x);

    return [pair[0], a[1].concat(pair[1])];
  }, [acc, []])
);

let until = (p, f, x) => {
  let v = x;
  while (!p(v)) v = f(v);
  return v;
};

const tail = xs => (
   xs.length ? xs.slice(1) : undefined
);

const reverse = xs => xs.slice(0).reverse();

```

</section>
