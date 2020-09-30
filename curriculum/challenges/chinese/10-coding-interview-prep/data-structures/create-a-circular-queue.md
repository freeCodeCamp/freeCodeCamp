---
id: 587d8255367417b2b2512c75
title: Create a Circular Queue
challengeType: 1
videoUrl: ''
localeTitle: 创建循环队列
---

## Description
<section id="description">在此挑战中，您将创建一个循环队列。循环队列基本上是一个写入集合末尾的队列，然后开始在集合开头写自己。这种类型的数据结构在某些情况下具有一些有用的应用。例如，循环队列可用于流媒体。队列填满后，新媒体数据就会开始覆盖旧数据。说明这个概念的一个好方法是使用数组： <blockquote> [1,2,3,4,5] <br> ^读@ 0 <br> ^写@ 0 </blockquote>这里的读写都在<code>0</code> 。现在队列获得3个新记录<code>a</code> ， <code>b</code>和<code>c</code> 。我们的队列现在看起来像： <blockquote> [a，b，c，4,5] <br> ^读@ 0 <br> ^写@ 3 </blockquote>当读头读取时，它可以删除值或保留它们： <blockquote> [null，null，null，4,5] <br> ^阅读@ 3 <br> ^写@ 3 </blockquote>一旦写入到达数组的末尾，它就会循环回到开头： <blockquote> [f，null，null，d，e] <br> ^阅读@ 3 <br> ^写@ 1 </blockquote>这种方法需要恒定的内存量，但允许处理更大尺寸的文件。说明：在此挑战中，我们将实现循环队列。循环队列应提供<code>enqueue</code>和<code>dequeue</code>方法，允许您读取和写入队列。类本身也应该接受一个整数，您可以使用该整数在创建队列时指定队列的大小。我们已经在代码编辑器中为您编写了此类的起始版本。将项目排入队列时，写入指针应向前推进，并在到达队列末尾时循环回到开头。同样，当您使项目出列时，读指针应向前推进。不应允许写指针移过读指针（我们的类不会让你覆盖你还没有读过的数据），并且读指针不能超过你写的数据。此外，如果成功，则<code>enqueue</code>方法应返回您入<code>enqueue</code>的项，否则返回<code>null</code> 。类似地，当你使一个项目出列时，它应该被返回，如果你不能出列，你应该返回<code>null</code> 。 </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>enqueue</code>方法将项添加到循环队列。
    testString: assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); var print = test.print(); return print[0] === 17 && print[1] === 32 && print[2] === 591; })());
  - text: 您不能通过读指针将项排入队列。
    testString: assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); test.enqueue(13); test.enqueue(25); test.enqueue(59); var print = test.print(); return print[0] === 17 && print[1] === 32 && print[2] === 591; })());
  - text: <code>dequeue</code>方法使队列中的项目出列。
    testString: assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); return test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591; })());
  - text: 项目出列后，其队列中的位置应重置为<code>null</code> 。
    testString: assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(672); test.dequeue(); test.dequeue(); var print = test.print(); return print[0] === null && print[1] === null && print[2] === 672; })());
  - text: 尝试通过写指针出列队列返回<code>null</code>并且不会使写指针前进。
    testString: assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); return test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591 && test.dequeue() === null && test.dequeue() === null && test.dequeue() === null && test.dequeue() === null && test.enqueue(100) === 100 && test.dequeue() === 100; })());

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
// solution required
```

/section>
