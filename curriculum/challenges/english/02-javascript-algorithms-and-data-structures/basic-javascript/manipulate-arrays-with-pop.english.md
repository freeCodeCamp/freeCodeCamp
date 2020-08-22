---
id: 56bbb991ad1ed5201cd392cc
title: Manipulate Arrays With pop()
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cRbVZAB'
forumTopicId: 18236
---

## Description
<section id='description'>
Another way to change the data in an array is with the <code>.pop()</code> function.
<code>.pop()</code> is used to "pop" a value off of the end of an array. We can store this "popped off" value by assigning it to a variable. In other words, <code>.pop()</code> removes the last element from an array and returns that element.
Any type of entry can be "popped" off of an array - numbers, strings, even nested arrays.

```js
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6
console.log(threeArr); // Returns [1, 4]
```

</section>

## Instructions
<section id='instructions'>
Use the <code>.pop()</code> function to remove the last item from <code>myArray</code>, assigning the "popped off" value to <code>removedFromMyArray</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code> should only contain <code>[["John", 23]]</code>.
    testString: assert((function(d){if(d[0][0] == 'John' && d[0][1] === 23 && d[1] == undefined){return true;}else{return false;}})(myArray));
  - text: You should use <code>pop()</code> on <code>myArray</code>.
    testString: assert(/removedFromMyArray\s*=\s*myArray\s*.\s*pop\s*(\s*)/.test(code));
  - text: <code>removedFromMyArray</code> should only contain <code>["cat", 2]</code>.
    testString: assert((function(d){if(d[0] == 'cat' && d[1] === 2 && d[2] == undefined){return true;}else{return false;}})(removedFromMyArray));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [["John", 23], ["cat", 2]];

// Only change code below this line
var removedFromMyArray;


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(y, z){return 'myArray = ' + JSON.stringify(y) + ' & removedFromMyArray = ' + JSON.stringify(z);})(myArray, removedFromMyArray);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myArray = [["John", 23], ["cat", 2]];
var removedFromMyArray = myArray.pop();
```

</section>
