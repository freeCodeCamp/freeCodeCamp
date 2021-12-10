---
id: 587d8251367417b2b2512c63
title: Видалення елементів зі зв'язаного списку
challengeType: 1
forumTopicId: 301712
dashedName: remove-elements-from-a-linked-list
---

# --description--

Метод `remove` – це наступний важливий метод, необхідний у будь-якому зв'язаному списку. Цей метод повинен приймати елемент, який ми хочемо видалити, як аргумент, а потім виконувати пошук по списку, щоб знайти та видалити вузол, який містить цей елемент.

Щоразу, коли ми видаляємо вузол зі зв'язаного списку, важливо, щоб ми таким чином не осиротили ненароком решту списку. Нагадуємо, що кожен вузол має властивість `next`, яка вказує на наступний вузол після даного у списку. Якщо ми видаляємо, скажімо, середній елемент, то нам потрібно переконатися в тому, що є з'єднання між властивістю `next` попереднього вузла та властивістю `next` цього середнього елементу (яка вказує на наступний вузол у списку!)

Це може здатися доволі заплутано, тому повернімося до прикладу з лінією конга, щоб у нас була гарна концептуальна модель. Уявіть себе у лінії конга, причому людина, що стояла безпосередньо перед вами, виходить з лінії. Ця людина більше нікого не тримає руками в цій лінії, а ви відповідно більше не тримаєте цю людину, адже вона покинула лінію. Ви робите крок вперед і кладете руки на наступну людину, яку бачите.

Якщо елемент, який ми хочемо видалити, це голова зв'язаного списку, тобто `head`, ми перепризначаємо `head` другому вузлу цього списку.

# --instructions--

Напишіть метод `remove`, який видаляє елемент зі зв'язаного списку.

**Примітка:** довжина `length` зв'язаного списку повинна зменшуватися на одиницю щоразу, коли елемент вилучено з цього списку.

# --hints--

Ваш клас `LinkedList` має містити метод `remove`.

```js
assert(
  (function () {
    var test = new LinkedList();
    return typeof test.remove === 'function';
  })()
);
```

Метод `remove` повинен перепризначити `head` другому вузлу після вилучення першого вузла.

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

Метод `remove` повинен зменшити довжину `length` зв'язаного списку на одиницю після видалення кожного вузла.

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

Метод `remove` повинен перепризначити посилання в попередньому вузлі посиланню `next` у вилученому вузлі.

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

Метод `remove` не повинен змінювати наш зв'язаний список, якщо заданого елемента не існує в цьому списку.

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
