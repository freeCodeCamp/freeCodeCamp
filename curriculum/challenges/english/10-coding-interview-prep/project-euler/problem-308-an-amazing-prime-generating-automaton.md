---
id: 5900f4a11000cf542c50ffb3
challengeType: 5
title: 'Problem 308: An amazing Prime-generating Automaton'
forumTopicId: 301962
---

## Description
<section id='description'>
A program written in the programming language Fractran consists of a list of fractions.

The internal state of the Fractran Virtual Machine is a positive integer, which is initially set to a seed value. Each iteration of a Fractran program multiplies the state integer by the first fraction in the list which will leave it an integer.

For example, one of the Fractran programs that John Horton Conway wrote for prime-generation consists of the following 14 fractions:1791
,
7885
,
1951
,
2338
,
2933
,
7729
,
9523
,
7719
,
117
,
1113
,
1311
,
152
,
17
,
551
.
Starting with the seed integer 2, successive iterations of the program produce the sequence:
15, 825, 725, 1925, 2275, 425, ..., 68, 4, 30, ..., 136, 8, 60, ..., 544, 32, 240, ...

The powers of 2 that appear in this sequence are 22, 23, 25, ...
It can be shown that all the powers of 2 in this sequence have prime exponents and that all the primes appear as exponents of powers of 2, in proper order!

If someone uses the above Fractran program to solve Project Euler Problem 7 (find the 10001st prime), how many iterations would be needed until the program produces 210001st prime ?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler308()</code> should return 1539669807660924.
    testString: assert.strictEqual(euler308(), 1539669807660924);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler308() {

  return true;
}

euler308();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
