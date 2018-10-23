---
id: 587d825a367417b2b2512c89
title: Implement Quick Sort
challengeType: 1
---

## Description
<section id='description'>
Here we will move on to an intermediate sorting algorithm: quick sort. Quick sort is an efficient, recursive divide-and-conquer approach to sorting an array. In this method, a pivot value is chosen in the original array. The array is then partitioned into two subarrays of values less than and greater than the pivot value. We then combine the result of recursively calling the quick sort algorithm on both sub-arrays. This continues until the base case of an empty or single-item array is reached, which we return. The unwinding of the recursive calls return us the sorted array.
Quick sort is a very efficient sorting method, providing <i>O(nlog(n))</i> performance on average. It is also relatively easy to implement. These attributes make it a popular and useful sorting method.
<strong>Instructions:</strong> Write a function <code>quickSort</code> which takes an array of integers as input and returns an array of these integers in sorted order from least to greatest. While the choice of the pivot value is important, any pivot will do for our purposes here. For simplicity, the first or last element could be used.
<strong>Note:</strong><br>We are calling this function from behind the scenes; the test array we are using is commented out in the editor. Try logging <code>array</code> to see your sorting algorithm in action!
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>quickSort</code> is a function.
    testString: assert(typeof quickSort == 'function', '<code>quickSort</code> is a function.');
  - text: <code>quickSort</code> returns a sorted array (least to greatest).
    testString: assert(isSorted(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92])), '<code>quickSort</code> returns a sorted array (least to greatest).');
  - text: <code>quickSort</code> returns an array that is unchanged except for order.
    testString: assert.sameMembers(quickSort([1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92]), [1,4,2,8,345,123,43,32,5643,63,123,43,2,55,1,234,92], '<code>quickSort</code> returns an array that is unchanged except for order.');
  - text: <code>quickSort</code> should not use the built-in <code>.sort()</code> method.
    testString: assert.strictEqual(code.search(/\.sort\(/), -1, '<code>quickSort</code> should not use the built-in <code>.sort()</code> method.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function quickSort(array) {
  // change code below this line

  // change code above this line
  return array;
}

// test array:
// [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92]
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
// solution required
```
</section>
