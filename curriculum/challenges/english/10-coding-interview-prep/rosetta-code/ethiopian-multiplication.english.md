---
title: Ethiopian multiplication
id: 599d1566a02b571412643b84
challengeType: 5
forumTopicId: 302257
---

## Description
<section id='description'>
Ethiopian multiplication is a method of multiplying integers using only addition, doubling, and halving.
<strong>Method:</strong>
<ol>
  <li>Take two numbers to be multiplied and write them down at the top of two columns</li>
  <li>In the left-hand column repeatedly halve the last number, discarding any remainders, and write the result below the last in the same column, until you write a value of <code>1</code></li>
  <li>In the right-hand column repeatedly double the last number and write the result below. stop when you add a result in the same row as where the left hand column shows <code>1</code></li>
  <li>Examine the table produced and discard any row where the value in the left column is even</li>
  <li>Sum the values in the right-hand column that remain to produce the result of multiplying the original two numbers together</li>
</ol>
<strong>For example:</strong> <code>17 &times; 34</code>
<pre>
17   34
</pre>
Halving the first column:
<pre>
17   34
8
4
2
1
</pre>
Doubling the second column:
<pre>
17   34
8    68
4   136
2   272
1   544
</pre>
Strike-out rows whose first cell is even:
<pre>
17   34
8    <strike>68</strike>
4   <strike>136</strike>
2   <strike>272</strike>
1   544
</pre>
Sum the remaining numbers in the right-hand column:
<pre>
17   34
8    --
4   ---
2   ---
1   544
   ====
    578
</pre>
So <code>17</code> multiplied by <code>34</code>, by the Ethiopian method is <code>578</code>.
</section>

## Instructions
<section id='instructions'>
The task is to define three named functions/methods/procedures/subroutines:
<ol>
  <li>one to halve an integer,</li>
  <li>one to double an integer, and</li>
  <li>one to state if an integer is even</li>
</ol>
Use these functions to create a function that does Ethiopian multiplication.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>eth_mult</code> should be a function.
    testString: assert(typeof eth_mult === 'function');
  - text: <code>eth_mult(17,34)</code> should return <code>578</code>.
    testString: assert.equal(eth_mult(17, 34), 578);
  - text: <code>eth_mult(23,46)</code> should return <code>1058</code>.
    testString: assert.equal(eth_mult(23, 46), 1058);
  - text: <code>eth_mult(12,27)</code> should return <code>324</code>.
    testString: assert.equal(eth_mult(12, 27), 324);
  - text: <code>eth_mult(56,98)</code> should return <code>5488</code>.
    testString: assert.equal(eth_mult(56, 98), 5488);
  - text: <code>eth_mult(63,74)</code> should return <code>4662</code>.
    testString: assert.equal(eth_mult(63, 74), 4662);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function eth_mult(a, b) {

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
