---
id: 56533eb9ac21ba0edf2244e1
title: Nesting For Loops
challengeType: 1
---

## Description
<section id='description'>
If you have a multi-dimensional array, you can use the same logic as the prior waypoint to loop through both the array and any sub-arrays. Here is an example:
<blockquote>var arr = [<br>&nbsp;&nbsp;[1,2], [3,4], [5,6]<br>];<br>for (var i=0; i &lt; arr.length; i++) {<br>&nbsp;&nbsp;for (var j=0; j &lt; arr[i].length; j++) {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log(arr[i][j]);<br>&nbsp;&nbsp;}<br>}</blockquote>
This outputs each sub-element in <code>arr</code> one at a time. Note that for the inner loop, we are checking the <code>.length</code> of <code>arr[i]</code>, since <code>arr[i]</code> is itself an array.
</section>

## Instructions
<section id='instructions'>
Modify function <code>multiplyAll</code> so that it multiplies the <code>product</code> variable by each number in the sub-arrays of <code>arr</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>multiplyAll([[1],[2],[3]])</code> should return <code>6</code>
    testString: assert(multiplyAll([[1],[2],[3]]) === 6, '<code>multiplyAll([[1],[2],[3]])</code> should return <code>6</code>');
  - text: <code>multiplyAll([[1,2],[3,4],[5,6,7]])</code> should return <code>5040</code>
    testString: assert(multiplyAll([[1,2],[3,4],[5,6,7]]) === 5040, '<code>multiplyAll([[1,2],[3,4],[5,6,7]])</code> should return <code>5040</code>');
  - text: <code>multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])</code> should return <code>54</code>
    testString: assert(multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]]) === 54, '<code>multiplyAll([[5,1],[0.2, 4, 0.5],[3, 9]])</code> should return <code>54</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line

  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);

```

</div>



</section>

## Solution
<section id='solution'>


```js
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  return product;
}

multiplyAll([[1,2],[3,4],[5,6,7]]);
```

</section>
