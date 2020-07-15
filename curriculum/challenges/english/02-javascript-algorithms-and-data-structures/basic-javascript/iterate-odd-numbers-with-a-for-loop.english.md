---
id: 56104e9e514f539506016a5c
title: Iterate Odd Numbers With a For Loop
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cm8n7T9'
forumTopicId: 18212
---

## Description
<section id='description'>
For loops don't have to iterate one at a time. By changing our <code>final-expression</code>, we can count by even numbers.
We'll start at <code>i = 0</code> and loop while <code>i &#60; 10</code>. We'll increment <code>i</code> by 2 each loop with <code>i += 2</code>.

```js
var ourArray = [];
for (var i = 0; i < 10; i += 2) {
  ourArray.push(i);
}
```

<code>ourArray</code> will now contain <code>[0,2,4,6,8]</code>.
Let's change our <code>initialization</code> so we can count by odd numbers.
</section>

## Instructions
<section id='instructions'>
Push the odd numbers from 1 through 9 to <code>myArray</code> using a <code>for</code> loop.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should be using a <code>for</code> loop for this.
    testString: assert(/for\s*\([^)]+?\)/.test(code));
  - text: <code>myArray</code> should equal <code>[1,3,5,7,9]</code>.
    testString: assert.deepEqual(myArray, [1,3,5,7,9]);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [];

// Only change code below this line


```

</div>


### After Test
<div id='js-teardown'>

```js
if(typeof myArray !== "undefined"){(function(){return myArray;})();}
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myArray = [];
for (var i = 1; i < 10; i += 2) {
  myArray.push(i);
}
```

</section>
