---
id: 587d8252367417b2b2512c67
title: Додайте елементи до зв’язаного списку за індексом
challengeType: 1
forumTopicId: 301619
dashedName: add-elements-at-a-specific-index-in-a-linked-list
---

# --description--

Створимо метод `addAt(index,element)`, який додає елемент за заданим індексом. Як і при видаленні елементів за певним індексом, нам потрібно прослідкувати поточний індекс під час проходження зв’язаного списку. Коли поточний індекс відповідає заданому, потрібно перепризначити властивість `next` попереднього вузла, щоб посилатись на новий доданий вузол. Новий вузол повинен посилатися на наступний вузол з поточним індексом. Повернемось до прикладу з колоною: нова людина хоче приєднатися до колони, але посередині. Ви знаходитеся посередині, тому забираєте руки від людини перед вами. Нова людина підходить і кладе руки на ту людину, за яку ви тримались раніше; тепер ваші руки знаходяться на новій людині.

# --instructions--

Створимо метод `addAt(index,element)`, який додає елемент за заданим індексом. Метод має повернути `false`, якщо елемент неможливо додати. **Примітка:** не забудьте перевірити, чи заданий індекс від’ємний або більший за довжину зв’язаного списку.

# --hints--

Метод `addAt` має перепризначити `head` до нового вузла, якщо заданий індекс дорівнює 0.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.addAt(0, 'fish');
    return test.head().element === 'fish' && test.head().next.element === 'cat';
  })()
);
```

Метод `addAt` має збільшити довжину зв’язаного списку на одиницю після кожного нового вузла, доданого до цього списку.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.addAt(0, 'cat');
    return test.size() === 3;
  })()
);
```

Метод `addAt` має повернути `false`, якщо вузол не вдалося додати.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    return test.addAt(4, 'cat') === false;
  })()
);
```

# --seed--

## --seed-contents--

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element) {
    this.element = element;
    this.next = null;
  };

  this.size = function() {
    return length;
  };

  this.head = function() {
    return head;
  };

  this.add = function(element) {
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

  this.size = function(){
    return length;
  };

  this.head = function(){
    return head;
  };

  this.add = function(element){
    var node = new Node(element);
    if (head === null){
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
  this.addAt = function (index, element) {
    if (index > length || index < 0) {
      return false;
    }
    var newNode = new Node(element);
    var currentNode = head;
    if (index === 0) {
      head = newNode;
    } else {
      var previousNode = null;
      var i = 0;
      while (currentNode && i < index) {
        previousNode = currentNode;
        currentNode = currentNode.next;
        i++;
      }
      previousNode.next = newNode;
    }
    newNode.next = currentNode;
    length++;
  }
}
```
