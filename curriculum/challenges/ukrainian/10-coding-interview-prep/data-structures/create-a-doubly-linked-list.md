---
id: 587d825a367417b2b2512c87
title: Створіть двобічно зв’язаний список
challengeType: 1
forumTopicId: 301626
dashedName: create-a-doubly-linked-list
---

# --description--

Усі зв’язані списки, які ми створювали до цього, були однобічними. У цьому завданні ми створимо <dfn>двобічний зв’язаний список</dfn>. Як випливає з назви, вузли у двобічно зв’язаному списку мають посилання на наступний і попередній вузли списку.

Це дозволяє обходити список в обох напрямках. Але також для цього потрібно більше пам’яті, оскільки кожен вузол має містити додаткове посилання на попередній вузол у списку.

# --instructions--

Ми надали об’єкт `Node` і розпочали `DoublyLinkedList`. Додамо до нашого двобічно зв’язаного списку два методи: `add` та `remove`. Метод `add` має додавати вказаний елемент до списку, а метод `remove` має видаляти всі випадки заданого елемента у списку.

Під час написання цих методів будьте уважні з обробкою будь-яких можливих граничних випадків, як-от видалення першого чи останнього елемента. Крім того, метод має повернути `null` при спробі видалити будь-який елемент з порожнього списку.

# --hints--

Має існувати структура даних `DoublyLinkedList`.

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

Структура `DoublyLinkedList` повинна мати метод під назвою `add`.

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

Структура `DoublyLinkedList` повинна мати метод під назвою `remove`.

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

Метод має повернути `null` при спробі видалити елемент з порожнього списку.

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

Метод `add` має додавати елементи до списку.

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

Перший елемент списку має бути таким, що можна видалити.

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

Останній елемент списку має бути таким, що можна видалити.

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
