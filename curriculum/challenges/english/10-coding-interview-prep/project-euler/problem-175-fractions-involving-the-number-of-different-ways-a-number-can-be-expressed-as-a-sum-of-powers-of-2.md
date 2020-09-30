---
id: 5900f41c1000cf542c50ff2e
challengeType: 5
title: 'Problem 175: Fractions involving the number of different ways a number can be expressed as a sum of powers of 2'
forumTopicId: 301810
---

## Description
<section id='description'>
Define f(0)=1 and f(n) to be the number of ways to write n as a sum of powers of 2 where no power occurs more than twice.

For example, f(10)=5 since there are five different ways to express 10:10 = 8+2 = 8+1+1 = 4+4+2 = 4+2+2+1+1 = 4+4+1+1

It can be shown that for every fraction p/q (p>0, q>0) there exists at least one integer n such that f(n)/f(n-1)=p/q.
For instance, the smallest n for which f(n)/f(n-1)=13/17 is 241.
The binary expansion of 241 is 11110001.
Reading this binary number from the most significant bit to the least significant bit there are 4 one's, 3 zeroes and 1 one. We shall call the string 4,3,1 the Shortened Binary Expansion of 241.
Find the Shortened Binary Expansion of the smallest n for which f(n)/f(n-1)=123456789/987654321.
Give your answer as comma separated integers, without any whitespaces.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler175()</code> should return 1, 13717420, 8.
    testString: assert.strictEqual(euler175(), 1, 13717420, 8);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler175() {

  return true;
}

euler175();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
