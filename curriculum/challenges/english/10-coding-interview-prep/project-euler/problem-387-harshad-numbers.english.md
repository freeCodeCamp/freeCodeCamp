---
id: 5900f4f11000cf542c510003
challengeType: 5
isHidden: false
title: 'Problem 387: Harshad Numbers'
forumTopicId: 302051
---

## Description
<section id='description'>
A Harshad or Niven number is a number that is divisible by the sum of its digits.
201 is a Harshad number because it is divisible by 3 (the sum of its digits.)
When we truncate the last digit from 201, we get 20, which is a Harshad number.
When we truncate the last digit from 20, we get 2, which is also a Harshad number.
Let's call a Harshad number that, while recursively truncating the last digit, always results in a Harshad number a right truncatable Harshad number.

Also:
201/3=67 which is prime.
Let's call a Harshad number that, when divided by the sum of its digits, results in a prime a strong Harshad number.

Now take the number 2011 which is prime.
When we truncate the last digit from it we get 201, a strong Harshad number that is also right truncatable.
Let's call such primes strong, right truncatable Harshad primes.

You are given that the sum of the strong, right truncatable Harshad primes less than 10000 is 90619.

Find the sum of the strong, right truncatable Harshad primes less than 1014.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler387()</code> should return 696067597313468.
    testString: assert.strictEqual(euler387(), 696067597313468);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler387() {
  // Good luck!
  return true;
}

euler387();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
