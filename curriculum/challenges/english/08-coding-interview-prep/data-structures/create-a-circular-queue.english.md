---
id: 587d8255367417b2b2512c75
title: Create a Circular Queue
challengeType: 1
---

## Description
<section id='description'>
In this challenge you will be creating a Circular Queue. A circular queue is basically a queue that writes to the end of a collection then begins over writing itself at the beginning of the collection. This is type of data structure has some useful applications in certain situations. For example, a circular queue can be used for streaming media. Once the queue is full, new media data simply begins to overwrite old data.
A good way to illustrate this concept is with an array:
<blockquote>[1, 2, 3, 4, 5]<br> ^Read @ 0<br> ^Write @ 0</blockquote>
Here the read and write are both at position <code>0</code>. Now the queue gets 3 new records <code>a</code>, <code>b</code>, and <code>c</code>. Our queue now looks like:
<blockquote>[a, b, c, 4, 5]<br> ^Read @ 0<br>       ^Write @ 3</blockquote>
As the read head reads, it can remove values or keep them:
<blockquote>[null, null, null, 4, 5]<br>                   ^Read @ 3<br>                   ^Write @ 3</blockquote>
Once the write reaches the end of the array it loops back to the beginning:
<blockquote>[f, null, null, d, e]<br>                ^Read @ 3<br> ^Write @ 1</blockquote>
This approach requires a constant amount of memory but allows files of a much larger size to be processed.
Instructions:
In this challenge we will implement a circular queue. The circular queue should provide <code>enqueue</code> and <code>dequeue</code> methods which allow you to read from and write to the queue. The class itself should also accept an integer which you can use to specify the size of the queue when you create it. We've written the starting version of this class for you in the code editor. When you enqueue items to the queue, the write pointer should advance forward and loop back to the beginning once it reaches the end of the queue. Likewise, the read pointer should advance forward as you dequeue items. The write pointer should not be allowed to move past the read pointer (our class won't let you overwrite data you haven't read yet) and the read pointer should not be able to advance past data you have written.
In addition, the <code>enqueue</code> method should return the item you enqueued if it is successfully and otherwise return <code>null</code>. Similarly, when you dequeue an item it should be returned and if you cannot dequeue you should return <code>null</code>.
</section>

## Instructions
<section id='instructions'>

</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>enqueue</code> method adds items to the circular queue.
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); var print = test.print(); return print[0] === 17 && print[1] === 32 && print[2] === 591; })(), ''The <code>enqueue</code> method adds items to the circular queue.'');'
  - text: You cannot enqueue items past the read pointer.
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); test.enqueue(13); test.enqueue(25); test.enqueue(59); var print = test.print(); return print[0] === 17 && print[1] === 32 && print[2] === 591; })(), ''You cannot enqueue items past the read pointer.'');'
  - text: The <code>dequeue</code> method dequeues items from the queue.
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); return test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591; })(), ''The <code>dequeue</code> method dequeues items from the queue.'');'
  - text: After an item is dequeued its position in the queue should be reset to <code>null</code>.
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(672); test.dequeue(); test.dequeue(); var print = test.print(); return print[0] === null && print[1] === null && print[2] === 672; })(), ''After an item is dequeued its position in the queue should be reset to <code>null</code>.'');'
  - text: Trying to dequeue past the write pointer returns <code>null</code> and does not advance the write pointer.
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); return test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591 && test.dequeue() === null && test.dequeue() === null && test.dequeue() === null && test.dequeue() === null && test.enqueue(100) === 100 && test.dequeue() === 100; })(), ''Trying to dequeue past the write pointer returns <code>null</code> and does not advance the write pointer.'');'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
class CircularQueue {
   constructor(size) {

     this.queue = [];
     this.read = 0;
     this.write = 0;
     this.max = size - 1;

     while (size > 0) {
        this.queue.push(null);
        size--;
     }

   }

   print() {
     return this.queue;
   }


   enqueue(item) {
    // Only change code below this line

    // Only change code above this line
   }

   dequeue() {
    // Only change code below this line

    // Only change code above this line
   }
}
```

</div>



</section>

## Solution
<section id='solution'>


```js
class CircularQueue { 
 constructor(size) { 
 this.queue = []; 
 this.read = 0; 
 this.write = 0; 
 this.max = size - 1; 
 while (size > 0) { 
 this.queue.push(null); 
 size--; 
 } 
 } 
 print() { 
 return this.queue; 
 } 
 enqueue(item) { 
 if (this.queue[this.write] === null) { 
 this.queue[this.write] = item; 
 if (this.write === this.max) { 
 this.write = 0; 
 } else { 
 this.write++; 
 } 
 return item; 
 } 
 return null; 
 } 
 dequeue() { 
 if (this.queue[this.read] !== null) { 
 var item = this.queue[this.read]; 
 this.queue[this.read] = null; 
 if (this.read === this.max) { 
 this.read = 0; 
 } else { 
 this.read++; 
 } 
 return item; 
 } else { 
 return null; 
 } 
 } 
 }
```

</section>
