---
id: 56bbb991ad1ed5201cd392cd
title: Manipulate Arrays With shift()
challengeType: 1
---

## Description
<section id='description'>
<code>pop()</code> always removes the last element of an array. What if you want to remove the first?
That's where <code>.shift()</code> comes in. It works just like <code>.pop()</code>, except it removes the first element instead of the last.
</section>

## Instructions
<section id='instructions'>
Use the <code>.shift()</code> function to remove the first item from <code>myArray</code>, assigning the "shifted off" value to <code>removedFromMyArray</code>.
</section>

## Tests
<section id='tests'>

```yml
- text: '<code>myArray</code> should now equal <code>[["dog", 3]]</code>.'
  testString: 'assert((function(d){if(d[0][0] == ''dog'' && d[0][1] === 3 && d[1] == undefined){return true;}else{return false;}})(myArray), ''<code>myArray</code> should now equal <code>[["dog", 3]]</code>.'');'
- text: '<code>removedFromMyArray</code> should contain <code>["John", 23]</code>.'
  testString: 'assert((function(d){if(d[0] == ''John'' && d[1] === 23 && typeof removedFromMyArray === ''object''){return true;}else{return false;}})(removedFromMyArray), ''<code>removedFromMyArray</code> should contain <code>["John", 23]</code>.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]].

// Setup
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray;


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
var myArray = [["John", 23], ["dog", 3]];

// Only change code below this line.
var removedFromMyArray = myArray.shift();
```

</section>
