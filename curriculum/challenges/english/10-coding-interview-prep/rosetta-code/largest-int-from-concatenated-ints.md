---
id: 5a23c84252665b21eecc7edb
title: Largest int from concatenated ints
challengeType: 5
forumTopicId: 302298
---

## Description

<section id='description'>

Given a set of positive integers, write a function to order the integers in such a way that the concatenation of the numbers forms the largest possible integer and return this integer.

</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>maxCombine</code> should be a function.
    testString: assert(typeof maxCombine == 'function');
  - text: <code>maxCombine([1, 3, 3, 4, 55])</code> should return a number.
    testString: assert(typeof maxCombine([1, 3, 3, 4, 55]) == 'number');
  - text: <code>maxCombine([1, 3, 3, 4, 55])</code> should return <code>554331</code>.
    testString: assert.equal(maxCombine([1, 3, 3, 4, 55]), 554331);
  - text: <code>maxCombine([71, 45, 23, 4, 5])</code> should return <code>71545423</code>.
    testString: assert.equal(maxCombine([71, 45, 23, 4, 5]), 71545423);
  - text: <code>maxCombine([14, 43, 53, 114, 55])</code> should return <code>55534314114</code>.
    testString: assert.equal(maxCombine([14, 43, 53, 114, 55]), 55534314114);
  - text: <code>maxCombine([1, 34, 3, 98, 9, 76, 45, 4])</code> should return <code>998764543431</code>.
    testString: assert.equal(maxCombine([1, 34, 3, 98, 9, 76, 45, 4]), 998764543431);
  - text: <code>maxCombine([54, 546, 548, 60])</code> should return <code>6054854654</code>.
    testString: assert.equal(maxCombine([54, 546, 548, 60]), 6054854654);
```

</section>

## Challenge Seed

<section id='challengeSeed'>

<div id='js-seed'>

```js
function maxCombine(xs) {

}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function maxCombine(xs) {
  return parseInt(
    xs
      .sort(function(x, y) {
        var a = x.toString(),
          b = y.toString(),
          ab = parseInt(a + b),
          ba = parseInt(b + a);

        return ab > ba ? -1 : ab < ba ? 1 : 0;
      })
      .join(''),
    10
  );
}
```

</section>
