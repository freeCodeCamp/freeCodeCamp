---
id: 5a23c84252665b21eecc8002
title: Sorting algorithms/Bogosort
challengeType: 5
isHidden: false
forumTopicId: 302311
---

## Description

<section id='description'>
<a href="https://en.wikipedia.org/wiki/Bogosort" target="_blank">Bogosort</a> a list of numbers.
Bogosort simply shuffles a collection randomly until it is sorted.
"Bogosort" is a perversely inefficient algorithm only used as an in-joke.
Its average run-time is  O(n!)  because the chance that any given shuffle of a set will end up in sorted order is about one in  <i>n</i>  factorial,  and the worst case is infinite since there's no guarantee that a random shuffling will ever produce a sorted sequence.
Its best case is  O(n)  since a single pass through the elements may suffice to order them.
Pseudocode:
<pre>
<b>while not</b> InOrder(list) <b>do</b>
  Shuffle(list)
<b>done</b>
</pre>
</section>

## Instructions

<section id='instructions'>

</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>bogosort</code> should be a function.
    testString: assert(typeof bogosort == 'function');
  - text: <code>bogosort([25, 32, 12, 7, 20])</code> should return an array.
    testString: assert(Array.isArray(bogosort([25, 32, 12, 7, 20])));
  - text: <code>bogosort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.
    testString: assert.deepEqual(bogosort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
  - text: <code>bogosort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.
    testString: assert.deepEqual(bogosort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
  - text: <code>bogosort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.
    testString: assert.deepEqual(bogosort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
  - text: <code>bogosort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.
    testString: assert.deepEqual(bogosort([12, 33, 26, 18, 1, 16, 38]), [1, 12, 16, 18, 26, 33, 38]);
  - text: <code>bogosort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.
    testString: assert.deepEqual(bogosort([3, 39, 48, 16, 1, 4, 29]), [1, 3, 4, 16, 29, 39, 48]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
function bogosort(v) {
  // Good luck!
}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function bogosort(v) {
  function shuffle(v) {
    for (
      var j, x, i = v.length;
      i;
      j = Math.floor(Math.random() * i), x = v[--i], v[i] = v[j], v[j] = x
    );
    return v;
  }

  function isSorted(v) {
    for (var i = 1; i < v.length; i++) {
      if (v[i - 1] > v[i]) {
        return false;
      }
    }
    return true;
  }
  var sorted = false;
  while (sorted == false) {
    v = shuffle(v);
    sorted = isSorted(v);
  }
  return v;
}
```

</section>
