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
  - text: "'<code>jortsort</code> should be a function."'
    testString: 'assert(typeof jortsort=="function","<code>jortsort</code> should be a function.");'
  - text: "'<code>jortsort("+JSON.stringify(tests[0])+")</code> should return a boolean."'
    testString: 'assert(typeof jortsort(tests[0].slice())=="boolean","<code>jortsort("+JSON.stringify(tests[0])+")</code> should return a boolean.");'
  - text: "'<code>jortsort("+JSON.stringify(tests[0])+")</code> should return <code>true</code>."'
    testString: 'assert.equal(jortsort(tests[0].slice()),true,"<code>jortsort("+JSON.stringify(tests[0])+")</code> should return <code>true</code>.");'
  - text: "'<code>jortsort("+JSON.stringify(tests[1])+")</code> should return <code>false</code>."'
    testString: 'assert.equal(jortsort(tests[1].slice()),false,"<code>jortsort("+JSON.stringify(tests[1])+")</code> should return <code>false</code>.");'
  - text: "'<code>jortsort("+JSON.stringify(tests[2])+")</code> should return <code>false</code>."'
    testString: 'assert.equal(jortsort(tests[2].slice()),false,"<code>jortsort("+JSON.stringify(tests[2])+")</code> should return <code>false</code>.");'
  - text: "'<code>jortsort("+JSON.stringify(tests[3])+")</code> should return <code>true</code>."'
    testString: 'assert.equal(jortsort(tests[3].slice()),true,"<code>jortsort("+JSON.stringify(tests[3])+")</code> should return <code>true</code>.");'
  - text: "'<code>jortsort("+JSON.stringify(tests[4])+")</code> should return <code>false</code>."'
    testString: 'assert.equal(jortsort(tests[4].slice()),false,"<code>jortsort("+JSON.stringify(tests[4])+")</code> should return <code>false</code>.");'
  - text: "'<code>jortsort("+JSON.stringify(tests[5])+")</code> should return <code>true</code>."'
    testString: 'assert.equal(jortsort(tests[5].slice()),true,"<code>jortsort("+JSON.stringify(tests[5])+")</code> should return <code>true</code>.");'

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


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
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
