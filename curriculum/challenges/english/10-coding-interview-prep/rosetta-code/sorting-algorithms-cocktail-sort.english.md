---
id: 5a23c84252665b21eecc8004
title: Sorting algorithms/Cocktail sort
challengeType: 5
forumTopicId: 302312
---

## Description

<section id='description'>
The cocktail shaker sort is an improvement on the <a href="https://rosettacode.org/wiki/Bubble Sort" target="_blank">Bubble Sort</a>. The improvement is basically that values "bubble" both directions through the array, because on each iteration the cocktail shaker sort bubble sorts once forwards and once backwards. Pseudocode for the algorithm (from <a href="https://en.wikipedia.org/wiki/Cocktail sort" target="_blank">wikipedia</a>):</p>
<pre>
<b>function</b> <i>cocktailSort</i>( A : list of sortable items )
  <b>do</b>
    swapped := false
    <b>for each</b> i <b>in</b> 0 <b>to</b> length( A ) - 2 <b>do</b>
      <b>if</b> A[ i ] > A[ i+1 ] <b>then</b> <i>// test whether the two</i>
                                <i>// elements are in the wrong</i>
                                <i>// order</i>
        swap( A[ i ], A[ i+1 ] ) <i>// let the two elements</i>
                                 <i>// change places</i>
        swapped := true;
    <b>if</b> swapped = false <b>then</b>
      <i>// we can exit the outer loop here if no swaps occurred.</i>
      <b>break do-while loop</b>;
    swapped := false
    <b>for each</b> i <b>in</b> length( A ) - 2 <b>down to</b> 0 <b>do</b>
      <b>if</b> A[ i ] > A[ i+1 ] <b>then</b>
        swap( A[ i ], A[ i+1 ] )
        swapped := true;
  <b>while</b> swapped; <i>// if no elements have been swapped,</i>
                <i>// then the list is sorted</i>
</pre>
</section>

## Instructions

<section id='instructions'>
Write a function that sorts a given array using cocktail sort.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>cocktailSort</code> should be a function.
    testString: assert(typeof cocktailSort == 'function');
  - text: <code>cocktailSort([25, 32, 12, 7, 20])</code> should return an array.
    testString: assert(Array.isArray(cocktailSort([25, 32, 12, 7, 20])));
  - text: <code>cocktailSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.
    testString: assert.deepEqual(cocktailSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
  - text: <code>cocktailSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.
    testString: assert.deepEqual(cocktailSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
  - text: <code>cocktailSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.
    testString: assert.deepEqual(cocktailSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
  - text: <code>cocktailSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.
    testString: assert.deepEqual(cocktailSort([12, 33, 26, 18, 1, 16, 38]), [1, 12, 16, 18, 26, 33, 38]);
  - text: <code>cocktailSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.
    testString: assert.deepEqual(cocktailSort([3, 39, 48, 16, 1, 4, 29]), [1, 3, 4, 16, 29, 39, 48]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
function cocktailSort(arr) {

}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function cocktailSort(arr) {
  let isSorted = true;
  while (isSorted) {
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        isSorted = true;
      }
    }

    if (!isSorted) break;

    isSorted = false;

    for (let j = arr.length - 1; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
        isSorted = true;
      }
    }
  }

  return arr;
}
```

</section>
