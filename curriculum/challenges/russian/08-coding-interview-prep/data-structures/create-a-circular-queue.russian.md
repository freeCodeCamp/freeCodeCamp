---
id: 587d8255367417b2b2512c75
title: Create a Circular Queue
challengeType: 1
forumTopicId: 301625
localeTitle: Создание круговой очереди
---

## Description
<section id='description'>
В этом вызове вы создадите круговую очередность. Круговая очередь - это в основном очередь, которая записывает в конец коллекции, а затем начинает записывать себя в начале коллекции. Это тип структуры данных имеет некоторые полезные приложения в определенных ситуациях. Например, круговая очередь может использоваться для потоковой передачи. Как только очередь заполнена, новые мультимедийные данные просто начинают перезаписывать старые данные. Хорошим способом проиллюстрировать эту концепцию является массив: <blockquote> [1, 2, 3, 4, 5] <br> ^ Читать @ 0 <br> ^ Написать @ 0 </blockquote> Здесь чтение и запись находятся в положении <code>0</code> . Теперь очередь получает 3 новые записи <code>a</code> , <code>b</code> и <code>c</code> . Теперь наша очередь выглядит так: <blockquote> [a, b, c, 4, 5] <br> ^ Читать @ 0 <br> ^ Написать @ 3 </blockquote> Как читает читатель, он может удалить значения или сохранить их: <blockquote> [null, null, null, 4, 5] <br> ^ Читать @ 3 <br> ^ Написать @ 3 </blockquote> Когда запись достигает конца массива, он возвращается к началу: <blockquote> [f, null, null, d, e] <br> ^ Читать @ 3 <br> ^ Пишите @ 1 </blockquote> Этот подход требует постоянного объема памяти, но позволяет обрабатывать файлы большего размера. Инструкции: В этой задаче мы реализуем круговую очередь. Круговая очередь должна обеспечивать <code>enqueue</code> и <code>dequeue</code> методы , которые позволяют считывать и записывать данные в очередь. Сам класс должен также принять целое число, которое вы можете использовать, чтобы указать размер очереди при ее создании. Мы написали стартовую версию этого класса для вас в редакторе кода. Когда вы ставите объекты в очередь, указатель записи должен продвигаться вперед и возвращаться к началу, как только он достигнет конца очереди. Аналогично, указатель чтения должен продвигаться вперед при удалении элементов. Указателю записи не следует пропускать указатель чтения (наш класс не позволит вам перезаписывать данные, которые вы еще не читали), и указатель чтения не должен продвигать прошлые данные, которые вы написали. Кроме того, метод <code>enqueue</code> должен возвращать элемент, который вы указали, если он успешно и в противном случае возвращает <code>null</code> . Аналогичным образом, когда вы удаляете элемент, он должен быть возвращен, и если вы не можете удалить из очереди, вы должны вернуть <code>null</code> .
</section>

## Instructions
<section id='instructions'>
In this challenge we will implement a circular queue. The circular queue should provide `enqueue` and `dequeue` methods which allow you to read from and write to the queue. The class itself should also accept an integer argument which you can use to specify the size of the queue when created. We've written the starting version of this class for you in the code editor. When you enqueue items to the queue, the write pointer should advance forward and loop back to the beginning once it reaches the end of the queue. Likewise, the read pointer should advance forward as you dequeue items. The write pointer should not be allowed to move past the read pointer (our class won't let you overwrite data you haven't read yet) and the read pointer should not be able to advance past data you have written.
In addition, the `enqueue` method should return the item you enqueued if it is successful; otherwise it will return `null`. Similarly, when you dequeue an item, that item should be returned and if you cannot dequeue an item you should return `null`.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>enqueue</code> method adds items to the circular queue.
    testString: assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); var print = test.print(); return print[0] === 17 && print[1] === 32 && print[2] === 591; })());
  - text: You cannot enqueue items past the read pointer.
    testString: assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); test.enqueue(13); test.enqueue(25); test.enqueue(59); var print = test.print(); return print[0] === 17 && print[1] === 32 && print[2] === 591; })());
  - text: The <code>dequeue</code> method dequeues items from the queue.
    testString: assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); return test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591; })());
  - text: After an item is dequeued its position in the queue should be reset to <code>null</code>.
    testString: assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(672); test.dequeue(); test.dequeue(); var print = test.print(); return print[0] === null && print[1] === null && print[2] === 672; })());
  - text: Trying to dequeue past the write pointer returns <code>null</code> and does not advance the write pointer.
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
    console.log(this.write, this.max);
    if (this.queue[this.write] === null) {
      this.queue[this.write++] = item;

      if (this.write > this.max) {
        this.write = 0;
      }
      return item;
    }
    return null;
    // Only change code above this line
  }

  dequeue() {
    // Only change code below this line
    if (this.queue[this.read] !== null) {
      let item = this.queue[this.read];
      this.queue[this.read++] = null;
      if (this.read > this.max) {
        this.read = 0;
      }
      return item;
    }
    return null;
    // Only change code above this line
  }
}
```

</section>
