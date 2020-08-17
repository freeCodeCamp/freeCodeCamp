---
id: cf1111c1c11feddfaeb5bdef
title: Iterate with JavaScript For Loops
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/c9yNVCe'
forumTopicId: 18219
---

## Description
<section id='description'>
You can run the same code multiple times by using a loop.
The most common type of JavaScript loop is called a <code>for</code> loop because it runs "for" a specific number of times.
For loops are declared with three optional expressions separated by semicolons:
<code>for ([initialization]; [condition]; [final-expression])</code>
The <code>initialization</code> statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.
The <code>condition</code> statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to <code>true</code>. When <code>condition</code> is <code>false</code> at the start of the iteration, the loop will stop executing. This means if <code>condition</code> starts as <code>false</code>, your loop will never execute.
The <code>final-expression</code> is executed at the end of each loop iteration, prior to the next <code>condition</code> check and is usually used to increment or decrement your loop counter.
In the following example we initialize with <code>i = 0</code> and iterate while our condition <code>i &#60; 5</code> is true. We'll increment <code>i</code> by <code>1</code> in each loop iteration with <code>i++</code> as our <code>final-expression</code>.

```js
var ourArray = [];
for (var i = 0; i < 5; i++) {
  ourArray.push(i);
}
```

<code>ourArray</code> will now contain <code>[0,1,2,3,4]</code>.
</section>

## Instructions
<section id='instructions'>
Use a <code>for</code> loop to work to push the values 1 through 5 onto <code>myArray</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should be using a <code>for</code> loop for this.
    testString: assert(/for\s*\([^)]+?\)/.test(code));
  - text: <code>myArray</code> should equal <code>[1,2,3,4,5]</code>.
    testString: assert.deepEqual(myArray, [1,2,3,4,5]);

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
if (typeof myArray !== "undefined"){(function(){return myArray;})();}
```

</div>

</section>

## Solution
<section id='solution'>


```js
var myArray = [];
for (var i = 1; i < 6; i++) {
  myArray.push(i);
}
```

</section>
