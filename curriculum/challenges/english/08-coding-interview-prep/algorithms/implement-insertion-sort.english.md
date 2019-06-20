---
id: 587d8259367417b2b2512c86
title: Implement Insertion Sort
challengeType: 1
---

## Description
<section id='description'>
The next sorting method we'll look at is insertion sort. This method works by building up a sorted array at the beginning of the list. It begins the sorted array with the first element. Then it inspects the next element and swaps it backwards into the sorted array until it is in sorted position. It continues iterating through the list and swapping new items backwards into the sorted portion until it reaches the end. This algorithm has quadratic time complexity in the average and worst cases.
<strong>Instructions:</strong> Write a function <code>insertionSort</code> which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest.
<strong>Note:</strong><br>We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging <code>array</code> to see your sorting algorithm in action!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>insertionSort</code> is a function.
    testString: assert(typeof insertionSort == 'function', '<code>insertionSort</code> is a function.');
  - text: <code>insertionSort</code> returns a sorted array (least to greatest).
    testString: assert(isSorted(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), '<code>insertionSort</code> returns a sorted array (least to greatest).');
  - text: <code>insertionSort</code> returns an array that is unchanged except for order.
    testString: assert.sameMembers(insertionSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], '<code>insertionSort</code> returns an array that is unchanged except for order.');
  - text: <code>insertionSort</code> should not use the built-in <code>.sort()</code> method.
    testString: assert.strictEqual(code.search(/\.sort\(/), -1, '<code>insertionSort</code> should not use the built-in <code>.sort()</code> method.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function insertionSort(array) {
  // change code below this line
  return array;
  // change code above this line
}

insertionSort([1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]);
```

</div>


### After Test
<div id='js-teardown'>

```js
function isSorted(arr) {
  var check = (i) => (i == arr.length - 1) ? true : (arr[i] > arr[i + 1]) ? false : check(i + 1);
  return check(0);
};
```

</div>

</section>

## Solution
<section id='solution'>

```js
function insertionSort (array) {
  for (let currentIndex = 0; currentIndex < array.length; currentIndex++) {
    let current = array[currentIndex];
    let j = currentIndex - 1;
    while (j > -1 && array[j] > current) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = current;
  }
  return array;
}
```

</section>
