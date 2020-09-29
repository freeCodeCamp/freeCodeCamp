---
id: 56bbb991ad1ed5201cd392ce
title: Manipulate Arrays With unshift()
challengeType: 1
videoUrl: 'https://scrimba.com/c/ckNDESv'
forumTopicId: 18239
---

## Description
<section id='description'>
Not only can you <code>shift</code> elements off of the beginning of an array, you can also <code>unshift</code> elements to the beginning of an array i.e. add elements in front of the array.
<code>.unshift()</code> works exactly like <code>.push()</code>, but instead of adding the element at the end of the array, <code>unshift()</code> adds the element at the beginning of the array.

Example:

```js
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]
```

</section>

## Instructions
<section id='instructions'>
Add <code>["Paul",35]</code> to the beginning of the <code>myArray</code> variable using <code>unshift()</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>myArray</code> should now have [["Paul", 35], ["dog", 3]].
    testString: assert((function(d){if(typeof d[0] === "object" && d[0][0] == 'Paul' && d[0][1] === 35 && d[1][0] != undefined && d[1][0] == 'dog' && d[1][1] != undefined && d[1][1] == 3){return true;}else{return false;}})(myArray));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();

// Only change code below this line


```

</div>


### After Test
<div id='js-teardown'>

```js
(function(y, z){return 'myArray = ' + JSON.stringify(y);})(myArray);
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]);
```

</section>
