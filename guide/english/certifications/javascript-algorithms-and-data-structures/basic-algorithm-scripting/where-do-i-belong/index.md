---
title: Where Do I Belong
---

# Where Do I Belong

---
## Problem Explanation

This can be a tricky problem to understand. You need to find where in the array a number should be inserted by order, and return the index where it should go.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-sort/14306' target='_blank' rel='nofollow'>JS Array Sort</a>


---
## Hints

### Hint 1

The first thing to do is sort the array from lower to bigger, just to make the code easier. This is where sort comes in, it needs a callback function so you have to create it.


### Hint 2

Once the array is sorted, then just check for the first number that is bigger and return the index.


### Hint 3

If there is no index for that number then you will have to deal with that case too.


---
## Solutions

<details><summary>Solution 1 (Click to Show/Hide)</summary>

```js
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num) return a;
  }

  return arr.length;
}
```

#### Code Explanation

*   First I sort the array using `.sort(callbackFunction)` to sort it by lowest to highest, from left to right.
*   Then I use a for loop to compare the items in the array starting from the smallest one. When an item on the array is greater than the number we are comparing against, then we return the index as an integer.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-parseint/14686' target='_blank' rel='nofollow'>parseInt()</a>

</details>

<details><summary>Solution 2 (Click to Show/Hide)</summary>

```js
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var times = arr.length; // runs the for loop once for each thing in the array
  var count = 0;
  for (var i = 0; i < times; i++) {
    if (num > arr[i]) {
      count++;
    }
  } // counts how many array numbers are smaller than num
  return count; // the above equals num's position in a sorted array
}

getIndexToIns([40, 60], 50);
```

#### Code Explanation

*   I do not sort the arr input array
*   I run a for loop counting whenever the num input is bigger than an arr input number.
*   This number is equivalent to what num's position would be in a sorted array.

<details><summary>Solution 3 (Click to Show/Hide)</summary>

```js
function getIndexToIns(arr, num) {
  arr.sort(function(a, b) {
    return a - b;
  });

  var i = 0;
  while (num > arr[i]) {
    i++;
  }

  return i;
}

getIndexToIns([40, 60], 50);
```

#### Code Explanation

*   Sort existing array.
*   Iterate through the array while checking if _num_ is bigger.
*   The loop will stop when _num_ isn't bigger than _i_ and return the last element checked.

</details>

<details><summary>Solution 4 (Click to Show/Hide)</summary>

```js
function getIndexToIns(arr, num) {
  arr.push(num);
  arr.sort(function(a, b) {
    return a - b;
  });
  return arr.indexOf(num);
}
```

#### Code Explanation

*   First we add the number `num` to the array using `push()` which adds it as the last element of the array.
*   Then we use `sort()` with the callback function `function(a, b){return a-b}` to sort the numbers in ascending order.
*   Lastly we return the postion or index of `num` in the array with the `indexOf()` function.

#### Relevant Links

*   <a href='http://forum.freecodecamp.com/t/javascript-array-prototype-push/14298' target='_blank' rel='nofollow'>push()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort' target='_blank' rel='nofollow'>sort()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf' target='_blank' rel='nofollow'>indexOf()</a>

</details>

<details><summary>Solution 5 (Click to Show/Hide)</summary>

**Using `.findIndex()`**

```js
function getIndexToIns(arr, num) {
  // sort and find right index
  var index = arr
    .sort((curr, next) => curr > next)
    .findIndex(currNum => num <= currNum);
  // Returns proper answer
  return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 500);
```

#### Code Explanation

*   First sort the array in ascending order, this is currently done using array functions for minimal footprint.
*   Once the array it is sorted, we directly apply the `.findIndex()` where we are going to compare every element in the array until we find where `num <= currNum` meaning where the number we want to insert is less or equal to the current number number in the iteration.
*   Then we use ternary operations to check whether we got an index returned or `-1`. We only get `-1` when the index was not found meaning when we get a false for all elements int he array, and for such case, it would mean that `num` should be inserted at the end of the list hence why we use `arr.length`.

#### Relevant Links

*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex' target='_blank' rel='nofollow'>Array.findIndex()</a>
*   <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions' target='_blank' rel='nofollow'>Arrow Functions</a>
*   <a href='http://forum.freecodecamp.com/t/javascript-ternary-operator/15973' target='_blank' rel='nofollow'>Ternary Operator</a>

</details>

<details><summary>Solution 6 (Click to Show/Hide)</summary>

```js
function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns([1, 3, 4], 2);
```

#### Code Explanation

*   We use method-chaining to invoke one method after another to solve the problem in a single line. First we merge `arr` and `num` by invoking the arr.concat(num) method
*   Then we use `sort()` with the callback **arrow function** `(a, b) => return a-b` to sort the numbers in ascending order
*   Lastly we return the postion or index of `num` in the array with the `indexOf()` method

#### Relevant Links

*   <a href='https://schier.co/blog/2013/11/14/method-chaining-in-javascript.html' target='_blank' rel='nofollow'>Method chaining in JavaScript</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=example' target='_blank' rel='nofollow'>concat()</a>
*   <a href='https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Functions/Arrow_functions' target='_blank' rel='nofollow'>Arrow functions</a>
</details>