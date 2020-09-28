---
id: ae9defd7acaf69703ab432ea
title: Smallest Common Multiple
challengeType: 5
forumTopicId: 16075
---

## Description
<section id='description'>
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.
The range will be an array of two numbers that will not necessarily be in numerical order.
For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers <em>between</em> 1 and 3. The answer here would be 6.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>smallestCommons([1, 5])</code> should return a number.
    testString: assert.deepEqual(typeof smallestCommons([1, 5]), 'number');
  - text: <code>smallestCommons([1, 5])</code> should return 60.
    testString: assert.deepEqual(smallestCommons([1, 5]), 60);
  - text: <code>smallestCommons([5, 1])</code> should return 60.
    testString: assert.deepEqual(smallestCommons([5, 1]), 60);
  - text: <code>smallestCommons([2, 10])</code> should return 2520.
    testString: assert.deepEqual(smallestCommons([2, 10]), 2520);
  - text: <code>smallestCommons([1, 13])</code> should return 360360.
    testString: assert.deepEqual(smallestCommons([1, 13]), 360360);
  - text: <code>smallestCommons([23, 18])</code> should return 6056820.
    testString: assert.deepEqual(smallestCommons([23, 18]), 6056820);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function smallestCommons(arr) {
  return arr;
}


smallestCommons([1,5]);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function gcd(a, b) {
    while (b !== 0) {
        a = [b, b = a % b][0];
    }
    return a;
}

function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

function smallestCommons(arr) {
  arr.sort(function(a,b) {return a-b;});
  var rng = [];
  for (var i = arr[0]; i <= arr[1]; i++) {
    rng.push(i);
  }
  return rng.reduce(lcm);
}
```

</section>
