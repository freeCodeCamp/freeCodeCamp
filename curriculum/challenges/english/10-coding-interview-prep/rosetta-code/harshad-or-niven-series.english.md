---
title: Harshad or Niven series
id: 595668ca4cfe1af2fb9818d4
challengeType: 5
forumTopicId: 302281
---

## Description
<section id='description'>
The Harshad or Niven numbers are positive integers ≥ 1 that are divisible by the sum of their digits.
For example, <code>42</code> is a <a href="https://rosettacode.org/wiki/Harshad_or_Niven_series" title="Harshad or Niven series" target="_blank">Harshad number</a> as <code>42</code> is divisible by <code>(4 + 2)</code> without remainder.
Assume that the series is defined as the numbers in increasing order.
</section>

## Instructions
<section id='instructions'>
Implement a function to generate successive members of the Harshad sequence.
Use it to list the first twenty members of the sequence and list the first Harshad number greater than 1000.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>isHarshadOrNiven</code> should be a function.
    testString: assert(typeof isHarshadOrNiven === 'function');
  - text: '<code>isHarshadOrNiven()</code> should return <code>{"firstTwenty": [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42],"firstOver1000": 1002}</code>'
    testString: assert.deepEqual(isHarshadOrNiven(), res);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function isHarshadOrNiven() {
  const res = {
    firstTwenty: [],
    firstOver1000: undefined
  };
  // Only change code below this line

  return res;
}
```

</div>


### After Test
<div id='js-teardown'>

```js
const res = {
  firstTwenty: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20, 21, 24, 27, 30, 36, 40, 42],
  firstOver1000: 1002
};
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
