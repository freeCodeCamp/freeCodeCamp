---
id: 587d8251367417b2b2512c62
title: Створення класу Linked List (зв'язаний список)
challengeType: 1
forumTopicId: 301628
dashedName: create-a-linked-list-class
---

# --description--

Створімо клас `linked list`. Кожен зв'язаний список повинен починатися з кількох базових властивостей: `head` (перший елемент у списку) та `length` (кількість елементів у цьому списку). Іноді зустрічаються реалізації зв'язаних списків, які містять `tail`, що позначає останній елемент списку, але поки що ми розглянемо тільки ці дві властивості. Щоразу, коли ми додаємо елемент у зв'язаний список, наша властивість `length` має збільшуватися на одиницю.

Нам знадобиться спосіб додавання елементів до нашого зв'язаного списку, тому перший метод, який ми створимо, - це метод `add`.

Якщо наш список порожній, додати елемент до зв'язаного списку досить просто: ми перенесемо цей елемент в клас `Node` та присвоїмо йому властивість `head` нашого зв'язаного списку.

Але що робити, якщо в нашому списку вже є один чи більше елементів? Як нам додати елемент до цього списку? Нагадаємо, що кожен вузол у зв'язаному списку має властивість `next`. Щоб додати вузол до списку, знайдіть останній вузол даного списку та вкажіть властивість цього останнього вузла `next` на наш новий вузол. (Підказка: Ви зрозумієте, що дійшли до кінця зв'язаного списку, коли властивість вузла `next` стає `null`.)

# --instructions--

Напишіть метод додавання (add), який присвоює `head` першому вузлу, який ви переміщаєте у зв'язаний список; після цього при додаванні вузла на кожен вузол повинна посилатися властивість `next` попереднього вузла.

Зверніть увагу

Довжина вашого списку `length` повинна збільшуватися на одиницю щоразу, коли у зв'язаний список додається новий елемент.

# --hints--

Ваш клас `LinkedList` повинен містити метод `add`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.add === 'function';
  })()
);
```

Ваш клас `LinkedList` повинен присвоїти властивість `head` першому доданому вузлу.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    return test.head().element === 'cat';
  })()
);
```

Попередній вузол `node` у вашому класі `LinkedList` має посилатися на найновіший вузол.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('fish');
    return test.head().next.element === 'dog' && test.head().next.next.element === 'fish';
  })()
);
```

Розмір `size` вашого класу `LinkedList` має дорівнювати кількості вузлів у зв'язаному списку.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    return test.size() === 2;
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

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line

    // Only change code above this line
  };
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

  this.head = function(){
    return head;
  };

  this.size = function(){
    return length;
  };

  this.add = function(element){
    // Only change code below this line
    if (head == null) {
      head = new Node(element);
    } 
    else {
      let currentNode = head;
      while (currentNode.next != null) {
        // currentNode.next will be last node of linked list after loop
        currentNode = currentNode.next;
      }
      currentNode.next = new Node(element);
    }
    length++;
    // Only change code above this line
  };
}
```
