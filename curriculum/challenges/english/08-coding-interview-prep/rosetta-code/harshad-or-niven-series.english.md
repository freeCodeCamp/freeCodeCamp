---
title: Harshad or Niven series
id: 595668ca4cfe1af2fb9818d4
challengeType: 5
---

## Description
<section id='description'>
<p>The <a href="http://mathworld.wolfram.com/HarshadNumber.html" title="link: http://mathworld.wolfram.com/HarshadNumber.html">Harshad</a> or Niven numbers are positive integers ≥ 1 that are divisible by the sum of their digits.</p><p>For example,  42  is a <a href="http://rosettacode.org/wiki/oeis:A005349" title="oeis:A005349">Harshad number</a> as  42  is divisible by  (4 + 2)  without remainder.</p>
Assume that the series is defined as the numbers in increasing order.
Task:
<p>Implement a function to generate successive members of the Harshad sequence.</p><p>Use it to list the first twenty members of the sequence and list the first Harshad number greater than 1000.</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isHarshadOrNiven</code> is a function.
    testString: 'assert(typeof isHarshadOrNiven === ''function'', ''<code>isHarshadOrNiven</code> is a function.'');'
  - text: '<code>isHarshadOrNiven()</code> should return <code>{"firstTwenty": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42],"firstOver1000": 1002}</code>'
    testString: 'assert.deepEqual(isHarshadOrNiven(), res, ''<code>isHarshadOrNiven()</code> should return <code>{"firstTwenty": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42],"firstOver1000": 1002}</code>'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isHarshadOrNiven () {
  const res = {
    firstTwenty: [],
    firstOver1000: undefined
  };
  // Change after this line

  return res;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>


```js
function isHarshadOrNiven() {
  const res = {
    firstTwenty: [],
    firstOver1000: undefined
  };

  function isHarshad(n) {
    let s = 0;
    const nStr = n.toString();
    for (let i = 0; i < nStr.length; ++i) {
      s += parseInt(nStr.charAt(i), 10);
    }
    return n % s === 0;
  }

  let count = 0;
  const harshads = [];

  for (let n = 1; count < 20; ++n) {
    if (isHarshad(n)) {
      count++;
      harshads.push(n);
    }
  }

  res.firstTwenty = harshads;

  let h = 1000;
  while (!isHarshad(++h));
  res.firstOver1000 = h;

  return res;
}

```

</section>
