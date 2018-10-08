---
title: Count the coins
id: 59713bd26bdeb8a594fb9413
challengeType: 5
---

## Description
<section id='description'>
<p>There are four types of common coins in <a href="https://en.wikipedia.org/wiki/United_States" title="link: https://en.wikipedia.org/wiki/United_States">US</a> currency:</p>
quarters (25 cents)
dimes (10 cents)
nickels (5 cents),  and
pennies (1 cent)
<p>There are six ways to make change for 15 cents:</p>
A dime and a nickel
A dime and 5 pennies
3 nickels
2 nickels and 5 pennies
A nickel and 10 pennies
15 pennies
Task:
<p>Implement a function to determine how many ways there are to make change for a dollar using these common coins? (1 dollar = 100 cents).</p>
Reference:
 <a href="http://mitpress.mit.edu/sicp/full-text/book/book-Z-H-11.html#%_sec_Temp_52" title="link: http://mitpress.mit.edu/sicp/full-text/book/book-Z-H-11.html#%_sec_Temp_52">an algorithm from MIT Press</a>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>countCoins</code> is a function.
    testString: 'assert(typeof countCoins === "function", "<code>countCoins</code> is a function.");'
  - text: <code>countCoints()</code> should return 242.
    testString: 'assert.equal(countCoins(), 242, "<code>countCoints()</code> should return 242.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function countCoins () {
  // Good luck!
  return true;
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
function countCoins () {
  let t = 100;
  const operands = [1, 5, 10, 25];
  const targetsLength = t + 1;
  const operandsLength = operands.length;
  t = [1];

  for (let a = 0; a < operandsLength; a++) {
    for (let b = 1; b < targetsLength; b++) {
      // initialise undefined target
      t[b] = t[b] ? t[b] : 0;

      // accumulate target + operand ways
      t[b] += (b < operands[a]) ? 0 : t[b - operands[a]];
    }
  }

  return t[targetsLength - 1];
}

```

</section>
