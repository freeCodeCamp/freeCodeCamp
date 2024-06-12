---
id: 587d8251367417b2b2512c65
title: Видаліть елементи зі зв’язаного списку за індексом
challengeType: 1
forumTopicId: 301711
dashedName: remove-elements-from-a-linked-list-by-index
---

# --description--

Перед тим, як перейти до іншої структури даних, ще попрактикуємось над зв’язаними списками.

Напишемо метод `removeAt`, який видаляє елемент за заданим індексом. Метод повинен мати назву `removeAt(index)`. Щоб видалити елемент за заданим індексом, нам знадобиться оновлювати перелік вузлів у зв’язаному списку.

Зазвичай, щоб ітерувати над елементами зв’язаного списку, користуються технікою, що містить <dfn>вказівника</dfn> або вартового, який вказує на вузли, які порівнює код. У нашому випадку, починаючи з `head`, ми починаємо зі змінної `currentIndex`, яка починається з `0`. `currentIndex` має збільшуватись на одиницю для кожного пройденого вузла.

Як і з методом `remove(element)`, який <a href="/ukrainian/learn/coding-interview-prep/data-structures/remove-elements-from-a-linked-list" target="_blank" rel="noopener noreferrer nofollow">ми розглянули в попередньому завданні</a>, потрібно бути обережними, щоб не осиротити решту елементів списку при видаленні вузла за допомогою методу `removeAt(index)`. Щоб вузли були суміжними, потрібно переконатись, що вузол, де міститься посилання на видалений вузол, також містить посилання на наступний вузол.

# --instructions--

Напишіть метод `removeAt(index)`, який видаляє і повертає вузол за заданим індексом. Цей метод має повернути `null`, якщо заданий індекс від’ємний, дорівнює довжині зв’язаного списку або ж більший за неї.

**Примітка:** не забувайте підраховувати `currentIndex`.

# --hints--

Клас `LinkedList` повинен мати метод `removeAt`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.removeAt === 'function';
  })()
);
```

Метод `removeAt` має зменшити довжину зв’язаного списку на одиницю.

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

Метод `removeAt` має видалити елемент за вказаним індексом зі зв’язаного списку.

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

Якщо у зв’язаному списку лише один елемент, то метод `removeAt` має видалити та повернути елемент за вказаним індексом і зменшити довжину зв’язаного списку.

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

Метод `removeAt` має повернути елемент видаленого вузла.

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

Метод `removeAt` має повернути `null`, а зв’язаний список не має змінюватись, якщо значення заданого індексу менше за `0`.

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

Метод `removeAt` має повернути `null`, а зв’язаний список не має змінюватись, якщо значення заданого індексу більше або дорівнює довжині списку.

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
