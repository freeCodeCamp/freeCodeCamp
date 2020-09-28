---
id: 5900f4031000cf542c50ff15
challengeType: 5
title: 'Problem 150: Searching a triangular array for a sub-triangle having minimum-sum'
forumTopicId: 301781
---

## Description
<section id='description'>
In a triangular array of positive and negative integers, we wish to find a sub-triangle such that the sum of the numbers it contains is the smallest possible.
In the example below, it can be easily verified that the marked triangle satisfies this condition having a sum of −42.


We wish to make such a triangular array with one thousand rows, so we generate 500500 pseudo-random numbers sk in the range ±219, using a type of random number generator (known as a Linear Congruential Generator) as follows:
t := 0

for k = 1 up to k = 500500:

    t := (615949*t + 797807) modulo 220
    sk := t−219
Thus: s1 = 273519, s2 = −153582, s3 = 450905 etc
Our triangular array is then formed using the pseudo-random numbers thus:

s1
s2  s3
s4  s5  s6 

s7  s8  s9  s10
...

Sub-triangles can start at any element of the array and extend down as far as we like (taking-in the two elements directly below it from the next row, the three elements directly below from the row after that, and so on).

The "sum of a sub-triangle" is defined as the sum of all the elements it contains.

Find the smallest possible sub-triangle sum.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler150()</code> should return -271248680.
    testString: assert.strictEqual(euler150(), -271248680);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler150() {

  return true;
}

euler150();
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
