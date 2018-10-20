---
title: JortSort
id: 5a23c84252665b21eecc7ec4
challengeType: 5
---

## Description
<section id='description'>
jortSort is a sorting toolset that makes the user do the work and guarantees efficiency because you don't have to sort ever again. It was originally presented by Jenn "Moneydollars" Schiffer at the prestigious <a href="https://www.youtube.com/watch?v=pj4U_W0OFoE">JSConf</a>.
jortSort is a function that takes a single array of comparable objects as its argument. It then sorts the array in ascending order and compares the sorted array to the originally provided array. If the arrays match (i.e. the original array was already sorted), the function returns true. If the arrays do not match (i.e. the original array was not sorted), the function returns false.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>jortsort</code> should be a function.
    testString: assert(typeof jortsort=='function','<code>jortsort</code> should be a function.');
  - text: <code>jortsort([1,2,3,4,5])</code> should return a boolean.
    testString: assert(typeof jortsort([1,2,3,4,5])=='boolean','<code>jortsort([1,2,3,4,5])</code> should return a boolean.');
  - text: <code>jortsort([1,2,3,4,5])</code> should return <code>true</code>.
    testString: assert.equal(jortsort([1,2,3,4,5]),true,'<code>jortsort([1,2,3,4,5])</code> should return <code>true</code>.');
  - text: <code>jortsort([1,2,13,4,5])</code> should return <code>false</code>.
    testString: assert.equal(jortsort([1,2,13,4,5]),false,'<code>jortsort([1,2,13,4,5])</code> should return <code>false</code>.');
  - text: <code>jortsort([12,4,51,2,4])</code> should return <code>false</code>.
    testString: assert.equal(jortsort([12,4,51,2,4]),false,'<code>jortsort([12,4,51,2,4])</code> should return <code>false</code>.');
  - text: <code>jortsort([1,2])</code> should return <code>true</code>.
    testString: assert.equal(jortsort([1,2]),true,'<code>jortsort([1,2])</code> should return <code>true</code>.');
  - text: <code>jortsort([5,4,3,2,1])</code> should return <code>false</code>.
    testString: assert.equal(jortsort([5,4,3,2,1]),false,'<code>jortsort([5,4,3,2,1])</code> should return <code>false</code>.');
  - text: <code>jortsort([1,1,1,1,1])</code> should return <code>true</code>.
    testString: assert.equal(jortsort([1,1,1,1,1]),true,'<code>jortsort([1,1,1,1,1])</code> should return <code>true</code>.');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function jortsort (array) {
  // Good luck!
}
```

</div>

</section>

## Solution
<section id='solution'>


```js
function jortsort (array) {
  // sort the array
  var originalArray = array.slice(0);
  array.sort( function(a,b){return a - b} );

  // compare to see if it was originally sorted
  for (var i = 0; i < originalArray.length; ++i) {
    if (originalArray[i] !== array[i]) return false;
  }

  return true;
};

```

</section>
