---
id: 5900f4301000cf542c50ff42
challengeType: 5
isHidden: false
title: 'Problem 196: Prime triplets'
forumTopicId: 301834
---

## Description
<section id='description'>
Build a triangle from all positive integers in the following way:

 1
 2  3
 4  5  6
 7  8  9 1011 12 13 14 15
16 17 18 19 20 21
22 23 24 25 26 27 2829 30 31 32 33 34 35 3637 38 39 40 41 42 43 44 45
46 47 48 49 50 51 52 53 54 55
56 57 58 59 60 61 62 63 64 65 66
. . .

Each positive integer has up to eight neighbours in the triangle.

A set of three primes is called a prime triplet if one of the three primes has the other two as neighbours in the triangle.

For example, in the second row, the prime numbers 2 and 3 are elements of some prime triplet.

If row 8 is considered, it contains two primes which are elements of some prime triplet, i.e. 29 and 31.
If row 9 is considered, it contains only one prime which is an element of some prime triplet: 37.

Define S(n) as the sum of the primes in row n which are elements of any prime triplet.
Then S(8)=60 and S(9)=37.

You are given that S(10000)=950007619.

Find  S(5678027) + S(7208785).
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler196()</code> should return 322303240771079940.
    testString: assert.strictEqual(euler196(), 322303240771079940);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler196() {
  // Good luck!
  return true;
}

euler196();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
