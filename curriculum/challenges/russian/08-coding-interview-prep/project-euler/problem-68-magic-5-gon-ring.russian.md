---
id: 5900f3b01000cf542c50fec3
challengeType: 5
title: 'Problem 68: Magic 5-gon ring'
forumTopicId: 302180
localeTitle: 'Задача 68: Волшебное 5-угольное кольцо'
---

## Description
<section id='description'>
Consider the following "magic" 3-gon ring, filled with the numbers 1 to 6, and each line adding to nine.

Working clockwise, and starting from the group of three with the numerically lowest external node (4,3,2 in this example), each solution can be described uniquely. For example, the above solution can be described by the set: 4,3,2; 6,2,1; 5,1,3.
It is possible to complete the ring with four different totals: 9, 10, 11, and 12. There are eight solutions in total.

TotalSolution Set
94,2,3; 5,3,1; 6,1,2
94,3,2; 6,2,1; 5,1,3
102,3,5; 4,5,1; 6,1,3
102,5,3; 6,3,1; 4,1,5
111,4,6; 3,6,2; 5,2,4
111,6,4; 5,4,2; 3,2,6
121,5,6; 2,6,4; 3,4,5
121,6,5; 3,5,4; 2,4,6

By concatenating each group it is possible to form 9-digit strings; the maximum string for a 3-gon ring is 432621513.
Using the numbers 1 to 10, and depending on arrangements, it is possible to form 16- and 17-digit strings. What is the maximum 16-digit string for a "magic" 5-gon ring?
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>euler68()</code> should return 6531031914842725.
    testString: assert.strictEqual(euler68(), 6531031914842725);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function euler68() {
  // Good luck!
  return true;
}

euler68();

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
