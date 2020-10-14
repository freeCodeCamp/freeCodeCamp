---
id: 587d7b7b367417b2b2512b13
title: Copy an Array with the Spread Operator
challengeType: 1
forumTopicId: 301157
---

## Description
<section id='description'>
While <code>slice()</code> allows us to be selective about what elements of an array to copy, among several other useful tasks, ES6's new <dfn>spread operator</dfn> allows us to easily copy <em>all</em> of an array's elements, in order, with a simple and highly readable syntax. The spread syntax simply looks like this: <code>...</code>
In practice, we can use the spread operator to copy an array like so:

```js
let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];
// thatArray equals [true, true, undefined, false, null]
// thisArray remains unchanged and thatArray contains the same elements as thisArray
```

</section>

## Instructions
<section id='instructions'>
We have defined a function, <code>copyMachine</code> which takes <code>arr</code> (an array) and <code>num</code> (a number) as arguments. The function is supposed to return a new array made up of <code>num</code> copies of <code>arr</code>. We have done most of the work for you, but it doesn't work quite right yet. Modify the function using spread syntax so that it works correctly (hint: another method we have already covered might come in handy here!).
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>copyMachine([true, false, true], 2)</code> should return <code>[[true, false, true], [true, false, true]]</code>
    testString: assert.deepEqual(copyMachine([true, false, true], 2), [[true, false, true], [true, false, true]]);
  - text: <code>copyMachine([1, 2, 3], 5)</code> should return <code>[[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]</code>
    testString: assert.deepEqual(copyMachine([1, 2, 3], 5), [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]);
  - text: <code>copyMachine([true, true, null], 1)</code> should return <code>[[true, true, null]]</code>
    testString: assert.deepEqual(copyMachine([true, true, null], 1), [[true, true, null]]);
  - text: <code>copyMachine(["it works"], 3)</code> should return <code>[["it works"], ["it works"], ["it works"]]</code>
    testString: assert.deepEqual(copyMachine(['it works'], 3), [['it works'], ['it works'], ['it works']]);
  - text: The <code>copyMachine</code> function should utilize the <code>spread operator</code> with array <code>arr</code>
    testString: assert(__helpers.removeJSComments(code).match(/\.\.\.arr/));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line

    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));
```

</div>

</section>

## Solution
<section id='solution'>

```js
function copyMachine(arr,num){
	let newArr=[];
	while(num >=1){
	newArr.push([...arr]);
	num--;
	}
	return newArr;
}
console.log(copyMachine([true, false, true], 2));
```

</section>
