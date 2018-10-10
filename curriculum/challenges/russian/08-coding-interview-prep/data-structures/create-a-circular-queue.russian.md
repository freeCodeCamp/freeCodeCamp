---
id: 587d8255367417b2b2512c75
title: Create a Circular Queue
challengeType: 1
videoUrl: ''
localeTitle: Создание круговой очереди
---

## Description
<section id="description"> В этом вызове вы создадите круговую очередность. Круговая очередь - это в основном очередь, которая записывает в конец коллекции, а затем начинает записывать себя в начале коллекции. Это тип структуры данных имеет некоторые полезные приложения в определенных ситуациях. Например, круговая очередь может использоваться для потоковой передачи. Как только очередь заполнена, новые мультимедийные данные просто начинают перезаписывать старые данные. Хорошим способом проиллюстрировать эту концепцию является массив: <blockquote> [1, 2, 3, 4, 5] <br> ^ Читать @ 0 <br> ^ Написать @ 0 </blockquote> Здесь чтение и запись находятся в положении <code>0</code> . Теперь очередь получает 3 новые записи <code>a</code> , <code>b</code> и <code>c</code> . Теперь наша очередь выглядит так: <blockquote> [a, b, c, 4, 5] <br> ^ Читать @ 0 <br> ^ Написать @ 3 </blockquote> Как читает читатель, он может удалить значения или сохранить их: <blockquote> [null, null, null, 4, 5] <br> ^ Читать @ 3 <br> ^ Написать @ 3 </blockquote> Когда запись достигает конца массива, он возвращается к началу: <blockquote> [f, null, null, d, e] <br> ^ Читать @ 3 <br> ^ Пишите @ 1 </blockquote> Этот подход требует постоянного объема памяти, но позволяет обрабатывать файлы большего размера. Инструкции: В этой задаче мы реализуем круговую очередь. Круговая очередь должна обеспечивать <code>enqueue</code> и <code>dequeue</code> методы , которые позволяют считывать и записывать данные в очередь. Сам класс должен также принять целое число, которое вы можете использовать, чтобы указать размер очереди при ее создании. Мы написали стартовую версию этого класса для вас в редакторе кода. Когда вы ставите объекты в очередь, указатель записи должен продвигаться вперед и возвращаться к началу, как только он достигнет конца очереди. Аналогично, указатель чтения должен продвигаться вперед при удалении элементов. Указателю записи не следует пропускать указатель чтения (наш класс не позволит вам перезаписывать данные, которые вы еще не читали), и указатель чтения не должен продвигать прошлые данные, которые вы написали. Кроме того, метод <code>enqueue</code> должен возвращать элемент, который вы указали, если он успешно и в противном случае возвращает <code>null</code> . Аналогичным образом, когда вы удаляете элемент, он должен быть возвращен, и если вы не можете удалить из очереди, вы должны вернуть <code>null</code> . </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Метод <code>enqueue</code> добавляет элементы в круговую очередь.
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); var print = test.print(); return print[0] === 17 && print[1] === 32 && print[2] === 591; })(), "The <code>enqueue</code> method adds items to the circular queue.");'
  - text: Вы не можете выставлять объекты за указателем чтения.
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); test.enqueue(13); test.enqueue(25); test.enqueue(59); var print = test.print(); return print[0] === 17 && print[1] === 32 && print[2] === 591; })(), "You cannot enqueue items past the read pointer.");'
  - text: Метод <code>dequeue</code> удаляет объекты из очереди.
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); return test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591; })(), "The <code>dequeue</code> method dequeues items from the queue.");'
  - text: 'После того, как элемент будет удален, его положение в очереди должно быть сброшено до <code>null</code> .'
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(672); test.dequeue(); test.dequeue(); var print = test.print(); return print[0] === null && print[1] === null && print[2] === 672; })(), "After an item is dequeued its position in the queue should be reset to <code>null</code>.");'
  - text: 'Пытаясь перечеркнуть указатель записи, возвращает значение <code>null</code> и не продвигает указатель записи.'
    testString: 'assert((function(){ var test = new CircularQueue(3); test.enqueue(17); test.enqueue(32); test.enqueue(591); return test.dequeue() === 17 && test.dequeue() === 32 && test.dequeue() === 591 && test.dequeue() === null && test.dequeue() === null && test.dequeue() === null && test.dequeue() === null && test.enqueue(100) === 100 && test.dequeue() === 100; })(), "Trying to dequeue past the write pointer returns <code>null</code> and does not advance the write pointer.");'

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
</section>
