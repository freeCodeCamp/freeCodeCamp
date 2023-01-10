---
id: 587d825a367417b2b2512c87
title: Створення двобічно зв'язаного списку
challengeType: 1
forumTopicId: 301626
dashedName: create-a-doubly-linked-list
---

# --description--

Всі зв'язані списки, які ми створювали до цього, були однобічними. Тут ми створимо <dfn>двобічний зв'язаний список</dfn>. Як випливає з назви, вузли у двобічно зв'язаному списку мають посилання на наступний і попередній вузол у списку.

Це дозволяє нам обходити список в обох напрямках. Але також для цього потрібно більше пам'яті, оскільки кожен вузол повинен містити додаткове посилання на попередній вузол у списку.

# --instructions--

Ми задали об'єкт `Node` і почали наш `DoublyLinkedList`. Додаймо до нашого двобічно зв'язаного списку два методи під назвами `add` і `remove`. Метод `add` повинен додавати вказаний елемент до списку, а метод `remove` - видаляти всі входження заданого елемента у списку.

Під час написання цих методів будьте уважні з обробкою будь-яких можливих граничних випадків, як-от видалення першого чи останнього елементу. Крім того, спроба видалення будь-якого елементу з порожнього списку має повертатися як `null`.

# --hints--

The `DoublyLinkedList` data structure should exist.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    return typeof test == 'object';
  })()
);
```

`DoublyLinkedList` повинен мати метод під назвою `add`.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    if (test.add == undefined) {
      return false;
    }
    return typeof test.add == 'function';
  })()
);
```

`DoublyLinkedList` повинен мати метод під назвою `remove`.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    if (test.remove == undefined) {
      return false;
    }
    return typeof test.remove == 'function';
  })()
);
```

Removing an item from an empty list should return `null`.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    return test.remove(100) == null;
  })()
);
```

The `add` method should add items to the list.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(5);
    test.add(6);
    test.add(723);
    return test.print().join('') == '56723';
  })()
);
```

Кожен вузол повинен відстежувати попередній вузол.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(50);
    test.add(68);
    test.add(73);
    return test.printReverse().join('') == '736850';
  })()
);
```

Повинна бути можливість видалити зі списку перший елемент.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(25);
    test.add(35);
    test.add(60);
    test.remove(25);
    return test.print().join('') == '3560';
  })()
);
```

Повинна бути можливість видалити зі списку останній елемент.

```js
assert(
  (function () {
    var test = false;
    if (typeof DoublyLinkedList !== 'undefined') {
      test = new DoublyLinkedList();
    }
    test.add(25);
    test.add(35);
    test.add(60);
    test.remove(60);
    return test.print().join('') == '2535';
  })()
);
```

# --seed--

## --after-user-code--

```js
DoublyLinkedList.prototype = Object.assign(
  DoublyLinkedList.prototype,
  {

  print() {
    if (this.head == null) {
      return null;
    } else {
      var result = new Array();
      var node = this.head;
      while (node.next != null) {
        result.push(node.data);
        node = node.next;
      };
      result.push(node.data);
      return result;
    };
  },
  printReverse() {
    if (this.tail == null) {
      return null;
    } else {
      var result = new Array();
      var node = this.tail;
      while (node.prev != null) {
        result.push(node.data);
        node = node.prev;
      };
      result.push(node.data);
      return result;
    };
  }
});
```

## --seed-contents--

```js
var Node = function(data, prev) {
  this.data = data;
  this.prev = prev;
  this.next = null;
};
var DoublyLinkedList = function() {
  this.head = null;
  this.tail = null;
  // Only change code below this line

  // Only change code above this line
};
```

# --solutions--

```js
// solution required
```
