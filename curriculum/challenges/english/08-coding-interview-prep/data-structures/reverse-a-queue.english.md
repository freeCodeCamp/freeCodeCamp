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
<code>1,2,3,4,5</code> the output will then be<code>5,4,3,2,1</code>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>data</code> should be a reverse of itself.
    testString: assert(JSON.stringify(testQueue.data) === JSON.stringify([5,4,3,2,1]), 'Your <code>data</code> should be a reverse of itself' );
  - text: Your stringed <code>data</code> should be a reverse of itself.
    testString: assert((function(){var testQueueString = new Queue(['hello', 'world']); testQueueString.reverse(); return JSON.stringify(testQueueString.data) === JSON.stringify(['world', 'hello'])}()), 'Your stringed <code>data</code> should be a reverse of itself' );
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Queue(data) {
  this.data = data; // Data can be any array-based value, such as [1,2,3,4,5]
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
function Queue(data) {
  this.data = data;
  this.tempQueue = []
}

Queue.prototype.reverse = function() {
  while(this.data.length) {
    this.tempQueue.push(this.data.pop())
  }

  this.data = this.tempQueue
  this.tempQueue = []
}

let testQueue = new Queue([1,2,3,4,5])
testQueue.reverse()
```

</section>
