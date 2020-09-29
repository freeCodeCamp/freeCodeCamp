---
id: a24c1a4622e3c05097f71d67
title: Where do I Belong
challengeType: 5
forumTopicId: 16094
---

## Description
<section id='description'>
Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value should be a number.
For example, <code>getIndexToIns([1,2,3,4], 1.5)</code> should return <code>1</code> because it is greater than <code>1</code> (index 0), but less than <code>2</code> (index 1).
Likewise, <code>getIndexToIns([20,3,5], 19)</code> should return <code>2</code> because once the array has been sorted it will look like <code>[3,5,20]</code> and <code>19</code> is less than <code>20</code> (index 2) and greater than <code>5</code> (index 1).
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> should return <code>3</code>.
    testString: assert(getIndexToIns([10, 20, 30, 40, 50], 35) === 3);
  - text: <code>getIndexToIns([10, 20, 30, 40, 50], 35)</code> should return a number.
    testString: assert(typeof(getIndexToIns([10, 20, 30, 40, 50], 35)) === "number");
  - text: <code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> should return <code>2</code>.
    testString: assert(getIndexToIns([10, 20, 30, 40, 50], 30) === 2);
  - text: <code>getIndexToIns([10, 20, 30, 40, 50], 30)</code> should return a number.
    testString: assert(typeof(getIndexToIns([10, 20, 30, 40, 50], 30)) === "number");
  - text: <code>getIndexToIns([40, 60], 50)</code> should return <code>1</code>.
    testString: assert(getIndexToIns([40, 60], 50) === 1);
  - text: <code>getIndexToIns([40, 60], 50)</code> should return a number.
    testString: assert(typeof(getIndexToIns([40, 60], 50)) === "number");
  - text: <code>getIndexToIns([3, 10, 5], 3)</code> should return <code>0</code>.
    testString: assert(getIndexToIns([3, 10, 5], 3) === 0);
  - text: <code>getIndexToIns([3, 10, 5], 3)</code> should return a number.
    testString: assert(typeof(getIndexToIns([3, 10, 5], 3)) === "number");
  - text: <code>getIndexToIns([5, 3, 20, 3], 5)</code> should return <code>2</code>.
    testString: assert(getIndexToIns([5, 3, 20, 3], 5) === 2);
  - text: <code>getIndexToIns([5, 3, 20, 3], 5)</code> should return a number.
    testString: assert(typeof(getIndexToIns([5, 3, 20, 3], 5)) === "number");
  - text: <code>getIndexToIns([2, 20, 10], 19)</code> should return <code>2</code>.
    testString: assert(getIndexToIns([2, 20, 10], 19) === 2);
  - text: <code>getIndexToIns([2, 20, 10], 19)</code> should return a number.
    testString: assert(typeof(getIndexToIns([2, 20, 10], 19)) === "number");
  - text: <code>getIndexToIns([2, 5, 10], 15)</code> should return <code>3</code>.
    testString: assert(getIndexToIns([2, 5, 10], 15) === 3);
  - text: <code>getIndexToIns([2, 5, 10], 15)</code> should return a number.
    testString: assert(typeof(getIndexToIns([2, 5, 10], 15)) === "number");
  - text: <code>getIndexToIns([], 1)</code> should return <code>0</code>.
    testString: assert(getIndexToIns([], 1) === 0);
  - text: <code>getIndexToIns([], 1)</code> should return a number.
    testString: assert(typeof(getIndexToIns([], 1)) === "number");

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function getIndexToIns(arr, num) {
  return num;
}

getIndexToIns([40, 60], 50);
```

</div>



</section>

## Solution
<section id='solution'>


```js
function getIndexToIns(arr, num) {
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }

  return arr.length;
}

getIndexToIns([40, 60], 50);

```

</section>
