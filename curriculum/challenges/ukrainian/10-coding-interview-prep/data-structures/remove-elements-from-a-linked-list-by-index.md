---
id: 587d8251367417b2b2512c65
title: Видалення елементів зі зв'язаного списку за індексом
challengeType: 1
forumTopicId: 301711
dashedName: remove-elements-from-a-linked-list-by-index
---

# --description--

Перед тим, як перейти до іншої структури даних, попрактикуймося ще зі зв'язаними списками.

Напишімо метод `removeAt`, який видаляє `element` із заданим `index`. Метод повинен мати назву `removeAt(index)`. Щоб видалити `element` з певним `index`, нам знадобиться поновлюваний перелік кожного вузла у зв'язаному списку.

Зазвичай, щоб пройтися елементами зв'язаного списку, користуються технікою, що містить <dfn>'runner'</dfn>, або вартового, який "вказує" на вузли, які порівнює ваш код. Оскільки в нашому випадку ми почнемо з `head` (голови) списку, то змінна `currentIndex` починається з `0`. `currentIndex` має збільшуватись на одиницю для кожного пройденого вузла.

Just like our `remove(element)` method, which <a href="/learn/coding-interview-prep/data-structures/remove-elements-from-a-linked-list" target="_blank" rel="noopener noreferrer nofollow">we covered in a previous lesson</a>, we need to be careful not to orphan the rest of our list when we remove the node in our `removeAt(index)` method. Ми зберігаємо ланцюг вузлів, переконавшись, що вузол, в якому міститься посилання на видалений вузол, має ще й посилання на наступний.

# --instructions--

Напишіть метод `removeAt(index)`, який видаляє і повертає вузол із заданим `index`. Цей метод повинен повернути `null`, якщо заданий `index` від'ємний, рівний довжині `length` зв'язаного списку або ж більший за неї.

**Примітка:** не забувайте підраховувати `currentIndex`.

# --hints--

Ваш клас `LinkedList` має містити метод `removeAt`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.removeAt === 'function';
  })()
);
```

Ваш метод `removeAt` має зменшити `length` зв'язаного списку на одиницю.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    test.removeAt(1);
    return test.size() === 2;
  })()
);
```

Ваш метод `removeAt` має видалити зі зв'язаного списку елемент із вказаним індексом.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    test.add('bird');
    test.removeAt(1);
    return (
      JSON.stringify(test.head()) ===
      '{"element":"cat","next":{"element":"kitten","next":{"element":"bird","next":null}}}'
    );
  })()
);
```

Якщо в цьому зв'язаному списку міститься лише один елемент, ваш метод `removeAt` має видалити й повернути елемент із зазначеним індексом і зменшити довжину зв'язаного списку.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    var removedItem = test.removeAt(0);
    return test.head() === null && test.size() === 0 && removedItem === 'cat';
  })()
);
```

Ваш метод `removeAt` має повернути елемент видаленого вузла.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.removeAt(1) === 'dog';
  })()
);
```

Ваш метод `removeAt` має повернути `null`, і зв'язаний список не має змінитися, якщо значення вказаного індексу менше за `0`.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    var removedItem = test.removeAt(-1);
    return (
      removedItem === null &&
      JSON.stringify(test.head()) ===
        '{"element":"cat","next":{"element":"dog","next":{"element":"kitten","next":null}}}'
    );
  })()
);
```

Ваш метод `removeAt` має повернути `null`, і зв'язаний список не має змінитися, якщо задане значення індексу дорівнює довжині `length` цього списку або є більшим за неї.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    var removedItem = test.removeAt(3);
    return (
      removedItem === null &&
      JSON.stringify(test.head()) ===
        '{"element":"cat","next":{"element":"dog","next":{"element":"kitten","next":null}}}'
    );
  })()
);
```

# --seed--

## --seed-contents--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if(head === null){
      head = node;
    } else {
      var currentNode = head;

      while(currentNode.next){
        currentNode  = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  // Only change code below this line

  // Only change code above this line
}
```

# --solutions--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function (element) {
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
    var node = new Node(element);
    if (head === null) {
      head = node;
    } else {
      var currentNode = head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.removeAt = function (index) {
    var currentNode = head;
    var previous = head;
    var count = 0;
    if (index >= length || index < 0) {
      return null;
    }
    if (index === 0) {
      var removed = head.element;
      head = currentNode.next;
    } else {
      while (count < index) {
        previous = currentNode;
        currentNode = currentNode.next;
        count++;
      }
      var removed = previous.next.element;
      previous.next = currentNode.next;
    }
    length--;
    return removed;
  };
}
```
