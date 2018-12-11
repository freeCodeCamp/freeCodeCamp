---
id: 5a23c84252665b21eecc8008
title: Sorting algorithms/Heapsort
challengeType: 5
---

## Description
<section id='description'>
  <p><a href="https://en.wikipedia.org/wiki/Heapsort">Heapsort</a> is an in-place sorting algorithm with worst case and
    average complexity of <span style="font-family: serif">O(<i>n</i> log<i>n</i>)</span>.</p>
  <p>The basic idea is to turn the array into a binary heap structure, which has the property that it allows efficient
    retrieval and removal of the maximal element.</p>
  <p>We repeatedly "remove" the maximal element from the heap, thus building the sorted list from back to front.</p>
  <p>Heapsort requires random access, so can only be used on an array-like data structure.</p>
  <p>Pseudocode:</p>
  <p><b>function</b> heapSort(a, count) <b>is</b></p>
  <p><b>input:</b> an unordered array <i>a</i> of length <i>count</i></p>
  <p><span style="color: grey"><i>(first place a in max-heap order)</i></span></p>
  <p>heapify(a, count)</p>
  <p>end := count - 1</p>
  <p><b>while</b> end > 0 <b>do</b></p>
  <p><span style="color: grey"><i>(swap the root(maximum value) of the heap with the</i></p>
  <p><i>last element of the heap)</i></span></p>
  <p>swap(a[end], a[0])</p>
  <p><span style="color: grey"><i>(decrement the size of the heap so that the previous</i></p>
  <p><i>max value will stay in its proper place)</i></span></p>
  <p>end := end - 1</p>
  <p><span style="color: grey"><i>(put the heap back in max-heap order)</i></span></p>
  <p>siftDown(a, 0, end)</p>
  <p><b>function</b> heapify(a,count) <b>is</b></p>
  <p><span style="color: grey"><i>(start is assigned the index in </i>a<i> of the last parent node)</i></span></p>
  <p>start := (count - 2) / 2</p>
  <p><b>while</b> start ≥ 0 <b>do</b></p>
  <p><span style="color: grey"><i>(sift down the node at index start to the proper place</i></p>
  <p><i>such that all nodes below the start index are in heap</i></p>
  <p><i>order)</i></span></p>
  <p>siftDown(a, start, count-1)</p>
  <p>start := start - 1</p>
  <p><span style="color: grey"><i>(after sifting down the root all nodes/elements are in heap order)</i></span></p>
  <p><b>function</b> siftDown(a, start, end) <b>is</b></p>
  <p><span style="color: grey"><i>(</i>end<i> represents the limit of how far down the heap to sift)</i></span></p>
  <p>root := start</p>
  <p><b>while</b> root * 2 + 1 ≤ end <b>do</b> <span style="color: grey"><i>(While the root has at least one child)</i></span></p>
  <p>child := root * 2 + 1 <span style="color: grey"><i>(root*2+1 points to the left child)</i></span></p>
  <p><span style="color: grey"><i>(If the child has a sibling and the child's value is less than its sibling's...)</i></span></p>
  <p><b>if</b> child + 1 ≤ end <b>and</b> a[child] < a[child + 1] <b>then</b></p>
  <p>child := child + 1 <span style="color: grey"><i>(... then point to the right child instead)</i></span></p>
  <p><b>if</b> a[root] < a[child] <b>then</b> <span style="color: grey"><i>(out of max-heap order)</i></span></p>
  <p>swap(a[root], a[child])</p>
  <p>root := child <span style="color: grey"><i>(repeat to continue sifting down the child now)</i></span></p>
  <p><b>else</b></p>
  <p><b>return</b></p>
  <p>Write a function to sort a collection of integers using heapsort.</p>
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

``` yml
tests:
  - text: <code>heapSort</code> should be a function.
    testString: assert(typeof heapSort == 'function', '<code>heapSort</code> should be a function.');
  - text: <code>heapSort([25, 32, 12, 7, 20])</code> should return a array.
    testString: assert(Array.isArray(heapSort([25, 32, 12, 7, 20])), '<code>heapSort([25, 32, 12, 7, 20])</code> should return a array.');
  - text: <code>heapSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.
    testString: assert.deepEqual(heapSort([25, 32, 12, 7, 20]), [7, 12, 20, 25, 32], '<code>heapSort([25, 32, 12, 7, 20])</code> should return <code>[7, 12, 20, 25, 32]</code>.');
  - text: <code>heapSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.
    testString: assert.deepEqual(heapSort([38, 45, 35, 8, 13]), [8, 13, 35, 38, 45], '<code>heapSort([38, 45, 35, 8, 13])</code> should return <code>[8, 13, 35, 38, 45]</code>.');
  - text: <code>heapSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.
    testString: assert.deepEqual(heapSort([43, 36, 20, 34, 24]), [20, 24, 34, 36, 43], '<code>heapSort([43, 36, 20, 34, 24])</code> should return <code>[20, 24, 34, 36, 43]</code>.');
  - text: <code>heapSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.
    testString: assert.deepEqual(heapSort([12, 33, 26, 18, 1, 16, 38]), [1, 12, 16, 18, 26, 33, 38], '<code>heapSort([12, 33, 26, 18, 1, 16, 38])</code> should return <code>[1, 12, 16, 18, 26, 33, 38]</code>.');
  - text: <code>heapSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.
    testString: assert.deepEqual(heapSort([3, 39, 48, 16, 1, 4, 29]), [1, 3, 4, 16, 29, 39, 48], '<code>heapSort([3, 39, 48, 16, 1, 4, 29])</code> should return <code>[1, 3, 4, 16, 29, 39, 48]</code>.');
```

</section>

## Challenge Seed
<section id='challengeSeed'>
<div id='js-seed'>

```js
function heapSort (arr) {
  // Good luck!
}
```

</div>
</section>

## Solution
<section id='solution'>

```js
function heapSort (arr) {
  function swap(data, i, j) {
    var tmp = data[i];
    data[i] = data[j];
    data[j] = tmp;
  }

  function put_array_in_heap_order(arr) {
    var i;
    i = arr.length / 2 - 1;
    i = Math.floor(i);
    while (i >= 0) {
      sift_element_down_heap(arr, i, arr.length);
      i -= 1;
    }
  }

  function sift_element_down_heap(heap, i, max) {
    var i_big, c1, c2;
    while (i < max) {
      i_big = i;
      c1 = 2 * i + 1;
      c2 = c1 + 1;
      if (c1 < max && heap[c1] > heap[i_big])
        i_big = c1;
      if (c2 < max && heap[c2] > heap[i_big])
        i_big = c2;
      if (i_big == i) return;
      swap(heap, i, i_big);
      i = i_big;
    }
  }
  put_array_in_heap_order(arr);
  var end = arr.length - 1;
  while (end > 0) {
    swap(arr, 0, end);
    sift_element_down_heap(arr, 0, end);
    end -= 1
  }
  return arr;
}
```

</section>