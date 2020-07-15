---
id: 56105e7b514f539506016a5e
title: Count Backwards With a For Loop
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/c2R6BHa'
forumTopicId: 16808
---

## Description
<section id='description'>
A for loop can also count backwards, so long as we can define the right conditions.
In order to count backwards by twos, we'll need to change our <code>initialization</code>, <code>condition</code>, and <code>final-expression</code>.
We'll start at <code>i = 10</code> and loop while <code>i &#62; 0</code>. We'll decrement <code>i</code> by 2 each loop with <code>i -= 2</code>.

```js
var ourArray = [];
for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}
```

<code>ourArray</code> will now contain <code>[10,8,6,4,2]</code>.
Let's change our <code>initialization</code> and <code>final-expression</code> so we can count backward by twos by odd numbers.
</section>

## Instructions
<section id='instructions'>
Push the odd numbers from 9 through 1 to <code>myArray</code> using a <code>for</code> loop.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should be using a <code>for</code> loop for this.
    testString: assert(/for\s*\([^)]+?\)/.test(code));
  - text: You should be using the array method <code>push</code>.
    testString: assert(code.match(/myArray.push/));
  - text: <code>myArray</code> should equal <code>[9,7,5,3,1]</code>.
    testString: assert.deepEqual(myArray, [9,7,5,3,1]);

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
for (var i = 9; i > 0; i -= 2) {
  myArray.push(i);
}
```

</section>
