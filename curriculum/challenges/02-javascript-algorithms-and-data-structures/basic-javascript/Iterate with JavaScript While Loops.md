---
id: cf1111c1c11feddfaeb1bdef
title: Iterate with JavaScript While Loops
challengeType: 1
---

## Description
<section id='description'>
You can run the same code multiple times by using a loop.
The first type of loop we will learn is called a "<code>while</code>" loop because it runs "while" a specified condition is true and stops once that condition is no longer true.
<blockquote>var ourArray = [];<br>var i = 0;<br>while(i &#60; 5) {<br>&nbsp;&nbsp;ourArray.push(i);<br>&nbsp;&nbsp;i++;<br>}</blockquote>
Let's try getting a while loop to work by pushing values to an array.
</section>

## Instructions
<section id='instructions'>
Push the numbers 0 through 4 to <code>myArray</code> using a <code>while</code> loop.
</section>

## Tests
<section id='tests'>

```yml
- text: You should be using a <code>while</code> loop for this.
  testString: 'assert(code.match(/while/g), "You should be using a <code>while</code> loop for this.");'
- text: '<code>myArray</code> should equal <code>[0,1,2,3,4]</code>.'
  testString: 'assert.deepEqual(myArray, [0,1,2,3,4], "<code>myArray</code> should equal <code>[0,1,2,3,4]</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Setup
var myArray = [];

// Only change code below this line.


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
var myArray = [];
var i = 0;
while(i < 5) {
  myArray.push(i);
  i++;
}
```

</section>
