---
id: 587d8251367417b2b2512c64
title: Виконайте пошук на зв’язаному списку
challengeType: 1
forumTopicId: 301715
dashedName: search-within-a-linked-list
---

# --description--

Додамо ще декілька корисних методів до нашого класу зв’язаного списку. Хіба не було б корисно, якби ми могли визначити, порожній наш список чи ні, подібно до класів `Stack` та `Queue`?

Також ми повинні мати змогу знайти певні елементи в нашому зв’язаному списку. Обхід структур даних — саме те, над чим варто добре попрактикуватись! Створимо метод `indexOf`, який приймає елемент як аргумент і повертає індекс елемента у зв’язаному списку. Якщо елемент не знайдено у зв’язаному списку, то метод має повернути `-1`.

Також реалізуємо метод, який робить протилежне: метод `elementAt` приймає індекс як аргумент і повертає елемент за заданим індексом. Якщо жоден елемент не знайдено, він має повернути `undefined`.

# --instructions--

Напишіть метод `isEmpty`, який перевіряє, чи зв’язаний список порожній; метод `indexOf`, який повертає індекс заданого елемента; метод `elementAt`, який повертає елемент за заданим індексом.

# --hints--

Клас `LinkedList` повинен мати метод `isEmpty`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.isEmpty === 'function';
  })()
);
```

Метод `isEmpty` має повернути `false`, якщо у зв’язаному списку принаймні один елемент.

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

Метод `isEmpty` має повернути `true`, якщо у зв’язаному списку немає елементів.

```js
assert(
  (function () {
    var test = new LinkedList();
    return test.isEmpty() === true;
  })()
);
```

Клас `LinkedList` повинен мати метод `indexOf`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.indexOf === 'function';
  })()
);
```

Метод `indexOf` має повернути індекс заданого елемента, знайденого у зв’язаному списку.

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

Метод `indexOf` має повернути `-1`, якщо у зв’язаному списку не знайдено заданий елемент.

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

Клас `LinkedList` повинен мати метод `elementAt`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.elementAt === 'function';
  })()
);
```

Метод `elementAt` має повернути елемент, знайдений за заданим індексом у зв’язаному списку.

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

Метод `elementAt` має повернути `undefined`, якщо за заданим індексом у зв’язаному списку не знайдено елемента.

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
