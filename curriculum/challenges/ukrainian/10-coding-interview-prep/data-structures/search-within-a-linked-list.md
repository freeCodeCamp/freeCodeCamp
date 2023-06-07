---
id: 587d8251367417b2b2512c64
title: Пошук по зв'язаному списку
challengeType: 1
forumTopicId: 301715
dashedName: search-within-a-linked-list
---

# --description--

Додаймо ще кілька корисних методів до нашого класу зв'язаного списку. Хіба б не було корисно, якби ми могли визначити, порожній наш список чи ні, подібно до класів `Stack` та `Queue`?

Також ми повинні мати змогу знайти певні елементи в нашому зв'язаному списку. Обхід структур даних - саме те, з чим вам варто добряче попрактикуватись! Створімо метод `indexOf`, який приймає `element` як аргумент і повертає індекс елементу `index` у зв'язаний список. Якщо елемент не знайдено у зв'язаному списку, то цей метод повертає `-1`.

Застосуймо метод, який робить протилежне: метод `elementAt`, який приймає `index` як аргумент і повертає `element` за заданим індексом `index`. Якщо жоден `element` не знайдено, він повертає `undefined`.

# --instructions--

Write an `isEmpty` method that checks if the linked list is empty, an `indexOf` method that returns the `index` of a given element, and an `elementAt` that returns an `element` at a given `index`.

# --hints--

Ваш клас `LinkedList` має містити метод `isEmpty`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.isEmpty === 'function';
  })()
);
```

Ваш метод `isEmpty` має повертатися як `false`, коли у зв'язаному списку є хоча б один елемент.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.isEmpty() === false;
  })()
);
```

Ваш метод `isEmpty` має повертатися як `true`, коли у зв'язаному списку немає елементів.

```js
assert(
  (function () {
    var test = new LinkedList();
    return test.isEmpty() === true;
  })()
);
```

Ваш клас `LinkedList` має містити метод `indexOf`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.indexOf === 'function';
  })()
);
```

Ваш метод `indexOf` повинен повертати індекс заданого елементу, знайденого у зв'язаному списку.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.indexOf('cat') === 0;
  })()
);
```

Ваш метод `indexOf` повинен повертати `-1`, якщо заданий елемент не було знайдено у зв'язаному списку

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.indexOf('pony') === -1;
  })()
);
```

Ваш клас `LinkedList` має містити метод `elementAt`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.elementAt === 'function';
  })()
);
```

Ваш метод `elementAt` повинен повертати елемент, знайдений за даним індексом у зв’язаному списку.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.elementAt(1) === 'dog';
  })()
);
```

Ваш метод `elementAt` повинен повертати `undefined`, якщо у зв'язаному списку не було знайдено заданий елемент за заданим індексом.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    return test.elementAt(5) === undefined;
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

  this.size = function() {
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
        currentNode = currentNode.next;
      }

      currentNode.next = node;
    }

    length++;
  };

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
      head = currentNode.next;
    } else {
      while(currentNode.element !== element) {
        previousNode = currentNode;
        currentNode = currentNode.next;
      }

      previousNode.next = currentNode.next;
    }

    length --;
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

  var Node = function(element){
    this.element = element;
    this.next = null;
  };

  this.size = function() {
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

  this.remove = function(element){
    var currentNode = head;
    var previousNode;
    if(currentNode.element === element){
        head = currentNode.next;
    } else {
        while(currentNode.element !== element) {
            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        previousNode.next = currentNode.next;
    }

    length --;
  };

  this.indexOf = function(element) {
    if (head === null) return -1

    let current = head;
    let index = 0;

    while (current.element !== element && current.next !== null) {
      current = current.next;
      index++
    }

    if (current.element !== element && current.next === null) {
      return -1
    }

    return index;
  }

  this.elementAt = function(index) {
    if (head === null) return undefined;

    let current = head;
    let currentIndex = 0;

    while (currentIndex !== index && current.next !== null) {
      current = current.next;
      currentIndex++
    }

    if (currentIndex !== index && current.next === null) {
      return undefined;
    }

    return current.element;
  }

  this.isEmpty = function() {
    return length === 0;
  }
}
```
