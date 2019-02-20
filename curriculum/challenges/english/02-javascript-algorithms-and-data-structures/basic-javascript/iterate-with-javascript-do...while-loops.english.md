---
id: 5a2efd662fb457916e1fe604
title: Iterate with JavaScript Do...While Loops
challengeType: 1
videoUrl: 'https://scrimba.com/c/cDqWGcp'
---

## Description
<section id='description'>
You can run the same code multiple times by using a loop.
The next type of loop you will learn is called a "<code>do...while</code>" loop because it first will "<code>do</code>" one pass of the code inside the loop no matter what, and then it runs "<code>while</code>" a specified condition is true and stops once that condition is no longer true. Let's look at an example.
<blockquote>var ourArray = [];<br>var i = 0;<br>do {<br>&nbsp;&nbsp;ourArray.push(i);<br>&nbsp;&nbsp;i++;<br>} while (i < 5);</blockquote>
This behaves just as you would expect with any other type of loop, and the resulting array will look like <code>[0, 1, 2, 3, 4]</code>. However, what makes the <code>do...while</code> different from other loops is how it behaves when the condition fails on the first check. Let's see this in action.
Here is a regular while loop that will run the code in the loop as long as <code>i < 5</code>.
<blockquote>var ourArray = []; <br>var i = 5;<br>while (i < 5) {<br>&nbsp;&nbsp;ourArray.push(i);<br>&nbsp;&nbsp;i++;<br>}</blockquote>
Notice that we initialize the value of <code>i</code> to be 5. When we execute the next line, we notice that <code>i</code> is not less than 5. So we do not execute the code inside the loop. The result is that <code>ourArray</code> will end up with nothing added to it, so it will still look like this <code>[]</code> when all the code in the example above finishes running.
Now, take a look at a <code>do...while</code> loop.
<blockquote>var ourArray = []; <br>var i = 5;<br>do {<br>&nbsp;&nbsp;ourArray.push(i);<br>&nbsp;&nbsp;i++;<br>} while (i < 5);</blockquote>
In this case, we initialize the value of <code>i</code> as 5, just like we did with the while loop. When we get to the next line, there is no check for the value of <code>i</code>, so we go to the code inside the curly braces and execute it. We will add one element to the array and increment <code>i</code> before we get to the condition check. Then, when we get to checking if <code>i < 5</code> see that <code>i</code> is now 6, which fails the conditional check. So we exit the loop and are done. At the end of the above example, the value of <code>ourArray</code> is <code>[5]</code>.
Essentially, a <code>do...while</code> loop ensures that the code inside the loop will run at least once.
Let's try getting a <code>do...while</code> loop to work by pushing values to an array.
</section>

## Instructions
<section id='instructions'>
Change the <code>while</code> loop in the code to a <code>do...while</code> loop so that the loop will push the number 10 to <code>myArray</code>, and <code>i</code> will be equal to <code>11</code> when your code finishes running.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: You should be using a <code>do...while</code> loop for this.
    testString: assert(code.match(/do/g), 'You should be using a <code>do...while</code> loop for this.');
  - text: <code>myArray</code> should equal <code>[10]</code>.
    testString: assert.deepEqual(myArray, [10], '<code>myArray</code> should equal <code>[10]</code>.');
  - text: <code>i</code> should equal <code>11</code>
    testString: assert.deepEqual(i, 11, '<code>i</code> should equal <code>11</code>');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [];
var i = 10;

// Only change code below this line.

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
