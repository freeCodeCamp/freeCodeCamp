---
id: 587d8252367417b2b2512c67
title: Додавання елементів за конкретним індексом у зв'язаному списку
challengeType: 1
forumTopicId: 301619
dashedName: add-elements-at-a-specific-index-in-a-linked-list
---

# --description--

Створімо метод addAt(index,element), який додає елемент за заданим індексом. Як і при видаленні елементів за певним індексом, нам потрібно прослідкувати поточний індекс під час проходження зв'язаного списку. Коли поточний індекс currentIndex відповідає заданому, потрібно перепризначити властивість next попереднього вузла, щоб посилатись на новий доданий вузол. Новий вузол повинен посилатися на наступний вузол з поточним індексом. Як було у прикладі про лінію конга, нова людина хоче приєднатися до лінії, але посередині. Ви знаходитеся посередині лінії, тож ви забираєте руки від людини, що попереду. Нова людина підходить і кладе руки на ту людину, за яку ви тримались раніше; тепер ваші руки знаходяться на новій людині.

# --instructions--

Створімо метод `addAt(index,element)`, який додає елемент за заданим індексом. Він повернеться як false, якщо елемент неможливо додати. **Примітка:** Не забудьте перевірити, чи цей індекс є від'ємним або більшим за довжину зв'язаного списку.

# --hints--

Ваш метод `addAt` повинен перепризначити `head` на новий вузол, коли заданий індекс дорівнює 0.

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

Ваш метод `addAt` повинен збільшити довжину зв'язаного списку на одиницю після кожного нового вузла, доданого до цього списку.

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

Ваш метод `addAt` повинен повертатися як `false`, якщо вузол не вдалося додати.

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
