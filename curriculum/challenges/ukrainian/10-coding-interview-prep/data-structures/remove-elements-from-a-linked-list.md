---
id: 587d8251367417b2b2512c63
title: Видаліть елементи зі зв’язаного списку
challengeType: 1
forumTopicId: 301712
dashedName: remove-elements-from-a-linked-list
---

# --description--

Метод `remove` — це наступний важливий метод, необхідний у будь-якому зв’язаному списку. Цей метод повинен приймати елемент, який ми хочемо видалити, як аргумент, а потім виконувати пошук по списку, щоб знайти та видалити вузол, який містить цей елемент.

Щоразу, коли ми видаляємо вузол зі зв’язаного списку, важливо, щоб ми ненароком не осиротили решту списку. Нагадуємо, що кожен вузол має властивість `next`, яка вказує на наступний вузол після нього. Якщо ми видаляємо, наприклад, середній елемент, то нам потрібно переконатися в тому, що між властивістю `next` попереднього вузла та властивістю `next` цього середнього елемента (яка вказує на наступний вузол у списку!) є з’єднання.

Це може здаватись доволі заплутано, тому повернемось до прикладу з колоною, щоб у нас була хороша концептуальна модель. Уявіть себе в колоні; людина, яка стояла перед вами, виходить з неї. Ця людина більше нікого не тримає руками, а ви відповідно не тримаєте цю людину, адже вона покинула колону. Ви робите крок вперед і кладете руки на наступну людину, яку бачите.

Якщо елемент, який ми хочемо видалити, є елементом `head`, ми перепризначаємо `head` до другого вузла цього списку.

# --instructions--

Напишіть метод `remove`, який приймає елемент та видаляє його зі зв’язаного списку.

**Примітка:** довжина зв’язаного списку має зменшуватись на одиницю щоразу, коли з нього видалено елемент.

# --hints--

Клас `LinkedList` повинен мати метод `remove`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.remove === 'function';
  })()
);
```

Метод `remove` має перепризначити `head` до другого вузла, якщо перший вузол видалено.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.remove('cat');
    return test.head().element === 'dog';
  })()
);
```

Метод `remove` має зменшувати довжину зв’язаного списку на одиницю після кожного видалення вузла.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('hamster');
    test.remove('cat');
    test.remove('fish');
    return test.size() === 2;
  })()
);
```

Метод `remove` має перепризначити посилання вузла, який був перед видаленим вузлом, до посилання `next` видаленого вузла.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('snake');
    test.add('kitten');
    test.remove('snake');
    return test.head().next.next.element === 'kitten';
  })()
);
```

Метод `remove` не повинен змінювати зв’язаний список, якщо заданого елемента не існує в цьому списку.

```js
assert(
  (function () {
    var test = new LinkedList();
    test.add('cat');
    test.add('dog');
    test.add('kitten');
    test.remove('elephant');
    return (
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

  this.remove = function(element){
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

  this.remove = function(element){
    if (head === null) {
      return;
    }
    var previous;
    var currentNode = head;

    while (currentNode.next !== null && currentNode.element !== element) {
      previous = currentNode;
      currentNode = currentNode.next;
    }

    if (currentNode.next === null && currentNode.element !== element) {
      return;
    }
    else if (previous) {
      previous.next = currentNode.next;
    } else {
      head = currentNode.next;
    }

    length--;
  };
} 
```
