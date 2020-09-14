---
id: 5a23c84252665b21eecc8005
title: Sorting algorithms/Comb sort
challengeType: 5
forumTopicId: 302313
---

## Description

<section id='description'>
Implement a <i>comb sort</i>.
The <b>Comb Sort</b> is a variant of the <a href="https://rosettacode.org/wiki/Bubble Sort" target="_blank">Bubble Sort</a>.
Like the <a href="https://rosettacode.org/wiki/Shell sort" target="_blank">Shell sort</a>, the Comb Sort increases the gap used in comparisons and exchanges.
Dividing the gap by $(1-e^{-\varphi})^{-1} \approx 1.247330950103979$ works best, but 1.3 may be more practical.
Some implementations use the insertion sort once the gap is less than a certain amount.
<b>Also see</b>
<ul>
  <li>the Wikipedia article: <a href="https://en.wikipedia.org/wiki/Comb sort" target="_blank">Comb sort</a>.</li>
</ul>
Variants:
<ul>
  <li>Combsort11 makes sure the gap ends in (11, 8, 6, 4, 3, 2, 1), which is significantly faster than the other two possible endings.</li>
  <li>Combsort with different endings changes to a more efficient sort when the data is almost sorted (when the gap is small). Comb sort with a low gap isn't much better than the Bubble Sort.</li>
</ul>
Pseudocode:
<pre>
<b>function</b> combsort(<b>array</b> input)
  gap := input<b>.size</b> <i>//initialize gap size</i>
  <b>loop until</b> gap = 1 <b>and</b> swaps = 0
    <i>//update the gap value for a next comb. Below is an example</i>
    gap := int(gap / 1.25)
    <b>if</b> gap < 1 
      <i>//minimum gap is 1</i>
      gap := 1
    <b>end if</b>
    i := 0
    swaps := 0 <i>//see <a href="https://rosettacode.org/wiki/Sorting_algorithms/Bubble_sort" target="_blank">Bubble Sort</a> for an explanation</i>
    <i>//a single "comb" over the input list</i>
    <b>loop until</b> i + gap >= input<b>.size</b> <i>//see <a href="https://rosettacode.org/wiki/Sorting_algorithms/Shell_sort" target="_blank">Shell sort</a> for similar idea</i>
      <b>if</b> input[i] > input[i+gap]
        <b>swap</b>(input[i], input[i+gap])
        swaps := 1 <i>// Flag a swap has occurred, so the</i>
            <i>// list is not guaranteed sorted</i>
      <b>end if</b>
      i := i + 1
    <b>end loop</b>
  <b>end loop</b>
<b>end function</b>
</pre>
</section>

## Instructions

<section id='instructions'>
Write a function that sorts a given array using Comb sort.
</section>

## Tests

<section id='tests'>

```yml
tests:
  - text: <code>combSort</code> should be a function.
    testString: assert(typeof combSort == 'function');
  - text: <code>combSort([25, 32, 12, 7, 20])</code> should return an array.
    testString: assert(Array.isArray(combSort([25, 32, 12, 7, 20])));
  - text: <code>combSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.
    testString: assert.deepEqual(combSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32]);
  - text: <code>combSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.
    testString: assert.deepEqual(combSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45]);
  - text: <code>combSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.
    testString: assert.deepEqual(combSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43]);
  - text: <code>combSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.
    testString: assert.deepEqual(combSort([12, 33, 26, 18, 1, 16, 38]), [1, 12, 16, 18, 26, 33, 38]);
  - text: <code>combSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.
    testString: assert.deepEqual(combSort([3, 39, 48, 16, 1, 4, 29]), [1, 3, 4, 16, 29, 39, 48]);
```

</section>

## Challenge Seed

<section id='challengeSeed'>
<div id='js-seed'>

```js
function combSort(arr) {

}
```

</div>
</section>

## Solution

<section id='solution'>

```js
function combSort(arr) {
  function is_array_sorted(arr) {
    var sorted = true;
    for (var i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        sorted = false;
        break;
      }
    }
    return sorted;
  }
  var iteration_count = 0;
  var gap = arr.length - 2;
  var decrease_factor = 1.25;

  // Until array is not sorted, repeat iterations
  while (!is_array_sorted(arr)) {
    // If not first gap
    if (iteration_count > 0)
      // Calculate gap
      gap = gap == 1 ? gap : Math.floor(gap / decrease_factor);

    // Set front and back elements and increment to a gap
    var front = 0;
    var back = gap;
    while (back <= arr.length - 1) {
      // If elements are not ordered swap them
      if (arr[front] > arr[back]) {
        var temp = arr[front];
        arr[front] = arr[back];
        arr[back] = temp;
      }

      // Increment and re-run swapping
      front += 1;
      back += 1;
    }
    iteration_count += 1;
  }

  return arr;
}
```

</section>
