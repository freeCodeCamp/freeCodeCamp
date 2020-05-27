---
id: 5a2efd662fb457916e1fe604
title: Iterate with JavaScript Do...While Loops
challengeType: 1
isHidden: false
videoUrl: 'https://scrimba.com/c/cDqWGcp'
forumTopicId: 301172
---

## Description
<section id='description'>
The next type of loop you will learn is called a <code>do...while</code> loop.  It is called a <code>do...while</code> loop because it will first <code>do</code> one pass of the code inside the loop no matter what, and then continue to run the loop <code>while</code> the specified condition evaluates to <code>true</code>.

```js
var ourArray = [];
var i = 0;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

The example above behaves similar to other types of loops, and the resulting array will look like <code>[0, 1, 2, 3, 4]</code>. However, what makes the <code>do...while</code> different from other loops is how it behaves when the condition fails on the first check. Let's see this in action:
Here is a regular <code>while</code> loop that will run the code in the loop as long as <code>i < 5</code>:

```js
var ourArray = []; 
var i = 5;
while (i < 5) {
  ourArray.push(i);
  i++;
}
```

In this example, we initialize the value of <code>ourArray</code> to an empty array and the value of <code>i</code> to 5. When we execute the <code>while</code> loop, the condition evaluates to <code>false</code> because <code>i</code> is not less than 5, so we do not execute the code inside the loop. The result is that <code>ourArray</code> will end up with no values added to it, and it will still look like <code>[]</code> when all of the code in the example above has completed running.
Now, take a look at a <code>do...while</code> loop:

```js
var ourArray = []; 
var i = 5;
do {
  ourArray.push(i);
  i++;
} while (i < 5);
```

In this case, we initialize the value of <code>i</code> to 5, just like we did with the <code>while</code> loop. When we get to the next line, there is no condition to evaluate, so we go to the code inside the curly braces and execute it.  We will add a single element to the array and then increment <code>i</code> before we get to the condition check. When we finally evaluate the condition <code>i < 5</code> on the last line, we see that <code>i</code> is now 6, which fails the conditional check, so we exit the loop and are done. At the end of the above example, the value of <code>ourArray</code> is <code>[5]</code>.
Essentially, a <code>do...while</code> loop ensures that the code inside the loop will run at least once.
Let's try getting a <code>do...while</code> loop to work by pushing values to an array.
</section>

## Instructions
<section id='instructions'>
Change the <code>while</code> loop in the code to a <code>do...while</code> loop so the loop will push only the number <code>10</code> to <code>myArray</code>, and <code>i</code> will be equal to <code>11</code> when your code has finished running.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should be using a <code>do...while</code> loop for this exercise.
    testString: assert(code.match(/do/g));
  - text: <code>myArray</code> should equal <code>[10]</code>.
    testString: assert.deepEqual(myArray, [10]);
  - text: <code>i</code> should equal <code>11</code>
    testString: assert.equal(i, 11);
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [];
var i = 10;

// Only change code below this line
while (i < 5) {
  myArray.push(i);
  i++;
}
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
var i = 10;
do {
  myArray.push(i);
  i++;
} while (i < 5)
```

</section>
