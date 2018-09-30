---
title: Ethiopian multiplication
id: 599d1566a02b571412643b84
challengeType: 5
---

## Description
<section id='description'>
<p>Ethiopian multiplication is a method of multiplying integers using only addition, doubling, and halving.</p>
<p>Method: </p>
Take two numbers to be multiplied and write them down at the top of two columns.
In the left-hand column repeatedly halve the last number, discarding any remainders, and write the result below the last in the same column, until you write a value of 1.
In the right-hand column repeatedly double the last number and write the result below. stop when you add a result in the same row as where the left hand column shows 1.
Examine the table produced and discard any row where the value in the left column is even.
Sum the values in the right-hand column that remain to produce the result of multiplying the original two numbers together
<p>For example:  17 &times; 34</p>
<p>17    34</p>
<p>Halving the first column:</p>
<p>17    34</p>
<p>8</p>
<p>4</p>
<p>2</p>
<p>1</p>
<p>Doubling the second column:</p>
<p>17    34</p>
<p>8    68</p>
<p>4   136</p>
<p>2   272</p>
<p>1   544</p>
<p>Strike-out rows whose first cell is even:</p>
<p>17    34</p>
<p>8    <strike>68</strike></p>
<p>4   <strike>136</strike></p>
<p>2   <strike>272</strike></p>
<p>1   544</p>
<p>Sum the remaining numbers in the right-hand column:</p>
<p>17    34</p>
<p>8    --</p>
<p>4   ---</p>
<p>2   ---</p>
<p>1   544</p>
<p>====</p>
<p>578</p>
<p>So 17 multiplied by 34, by the Ethiopian method is 578.</p>
Task:
<p>The task is to define three named functions/methods/procedures/subroutines:</p>
one to halve an integer,
one to double an integer, and
one to state if an integer is even.
<p>Use these functions to create a function that does Ethiopian multiplication.</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
- text: <code>eth_mult</code> is a function.
  testString: 'assert(typeof eth_mult === "function", "<code>eth_mult</code> is a function.");'
- text: '<code>eth_mult(17,34)</code> should return <code>578</code>.'
  testString: 'assert.equal(eth_mult(17, 34), 578, "<code>eth_mult(17,34)</code> should return <code>578</code>.");'
- text: '<code>eth_mult(23,46)</code> should return <code>1058</code>.'
  testString: 'assert.equal(eth_mult(23, 46), 1058, "<code>eth_mult(23,46)</code> should return <code>1058</code>.");'
- text: '<code>eth_mult(12,27)</code> should return <code>324</code>.'
  testString: 'assert.equal(eth_mult(12, 27), 324, "<code>eth_mult(12,27)</code> should return <code>324</code>.");'
- text: '<code>eth_mult(56,98)</code> should return <code>5488</code>.'
  testString: 'assert.equal(eth_mult(56, 98), 5488, "<code>eth_mult(56,98)</code> should return <code>5488</code>.");'
- text: '<code>eth_mult(63,74)</code> should return <code>4662</code>.'
  testString: 'assert.equal(eth_mult(63, 74), 4662, "<code>eth_mult(63,74)</code> should return <code>4662</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function eth_mult (a, b) {
  // Good luck!
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function eth_mult(a, b) {
  let sum = 0; a = [a]; b = [b];

  let half = a => a / 2,
    double = a => a * 2,
    is_even = a => a % 2 == 0;

  while (a[0] !== 1) {
    a.unshift(Math.floor(half(a[0])));
    b.unshift(double(b[0]));
  }

  for (let i = a.length - 1; i > 0; i -= 1) {
    if (!is_even(a[i])) {
      sum += b[i];
    }
  }
  return sum + b[0];
}
```

</section>
