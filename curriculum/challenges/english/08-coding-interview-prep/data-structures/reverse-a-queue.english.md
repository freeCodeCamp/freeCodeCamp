---
id: 587d8251367417b2b2512c99
title: Reverse A Queue
challengeType: 1
---

## Description
<section id='description'>
Since you know what a queue is, this challenge will go over a queue again.

</section>

## Instructions
<section id='instructions'>
In this challenge, you will create a method that takes in a queue and reverses it.
For example, if I put in a queue that with the integers 
1,2,3,4,5, the output will then be 5,4,3,2,1.s

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>data</code> should be a reverse of itself.
    testString: assert(JSON.stringify(testQueue.data) === JSON.stringify([5,4,3,2,1]) );
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Queue() {
  this.data = [1,2,3,4,5]; // Reverse this into [5,4,3,2,1]
  this.tempQueue = [] // Feel free to use this is so desired
}
// Write your code below here

// Write your code above this line
let testQueue = new Queue
testQueue.reverse()
```

</div>



</section>

## Solution
<section id='solution'>

```js
function Queue() {
  this.data = [1,2,3,4,5];
  this.tempQueue = []
}

Queue.prototype.reverse = function() {
  while(this.data.length) {
    this.tempQueue.push(this.data.pop())
  }

  this.data = this.tempQueue
  this.tempQueue = []
}

let testQueue = new Queue
testQueue.reverse()
```
</section>
