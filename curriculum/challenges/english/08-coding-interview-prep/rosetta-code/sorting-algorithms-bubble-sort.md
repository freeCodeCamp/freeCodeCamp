---
id: 5a23c84252665b21eecc8003
title: Sorting algorithms/Bubble sort
challengeType: 5
---

## Description
<section id='description'>
Sort an array of elements using the bubble sort algorithm. The elements must have a total order and the index of the array can be of any discrete type.
The bubble sort is generally considered to be the simplest sorting algorithm.  
Because of its simplicity and ease of visualization, it is often taught in introductory computer science courses.
Because of its abysmal O(n<sup>2</sup>) performance, it is not used often for large (or even medium-sized) datasets.
The bubble sort works by passing sequentially over a list, comparing each value to the one immediately after it. If the first value is greater than the second, their positions are switched. Over a number of passes, at most equal to the number of elements in the list, all of the values drift into their correct positions (large values "bubble" rapidly toward the end, pushing others down around them). Because each pass finds the maximum item and puts it at the end, the portion of the list to be sorted can be reduced at each pass. A boolean variable is used to track whether any changes have been made in the current pass; when a pass completes without changing anything, the algorithm exits.
This can be expressed in pseudo-code as follows (assuming 1-based indexing):
<pre>
repeat
  hasChanged := false
  <b>decrement</b> itemCount
  <b>repeat with</b> index <b>from</b> 1 <b>to</b> itemCount
    <b>if</b> (item <b>at</b> index) > (item <b>at</b> (index + 1))
      swap (item <b>at</b> index) with (item <b>at</b> (index + 1))
      hasChanged := true
<b>until</b> hasChanged = <b>false</b>
</pre>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>bubblesort</code> should be a function.
    testString: assert(typeof bubblesort == 'function', '<code>bubblesort</code> should be a function.');
  - text: <code>bubblesort([25, 32, 12, 7, 20])</code> should return a array.
    testString: assert(Array.isArray(bubblesort([25, 32, 12, 7, 20])), '<code>bubblesort([25, 32, 12, 7, 20])</code> should return a array.');
  - text: <code>bubblesort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.
    testString: assert.deepEqual(bubblesort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32], '<code>bubblesort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.');
  - text: <code>bubblesort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.
    testString: assert.deepEqual(bubblesort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45], '<code>bubblesort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.');
  - text: <code>bubblesort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.
    testString: assert.deepEqual(bubblesort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43], '<code>bubblesort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.');
  - text: <code>bubblesort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.
    testString: assert.deepEqual(bubblesort([12, 33, 26, 18, 1, 16, 38]), [1, 12, 16, 18, 26, 33, 38], '<code>bubblesort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.');
  - text: <code>bubblesort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.
    testString: assert.deepEqual(bubblesort([3, 39, 48, 16, 1, 4, 29]), [1, 3, 4, 16, 29, 39, 48], '<code>bubblesort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.');
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
function bubblesort(arr) {
  // Good luck!
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
function bubblesort (arr) {
    var done = false;
    while (!done) {
        done = true;
        for (var i = 1; i<arr.length; i++) {
            if (arr[i-1] > arr[i]) {
                done = false;
                [arr[i-1], arr[i]] = [arr[i], arr[i-1]]
            }
        }
    }
    return arr;
}
```

</section>
