---
id: 587d8252367417b2b2512c67
title: Add Elements at a Specific Index in a Linked List
challengeType: 1
forumTopicId: 301619
localeTitle: Добавить элементы по определенному индексу в связанном списке
---

## Description
<section id='description'>
Давайте создадим метод addAt (index, element), который добавит элемент в данный индекс. Точно так же, как мы удаляем элементы с заданным индексом, нам нужно отслеживать currentIndex, когда мы пересекаем связанный список. Когда currentIndex соответствует указанному индексу, нам нужно переназначить следующее свойство предыдущего узла для ссылки на новый добавленный узел. И новый узел должен ссылаться на следующий узел в currentIndex. Возвращаясь к примеру линии conga, новый человек хочет присоединиться к линии, но он хочет присоединиться к середине. Вы находитесь в середине линии, поэтому вы отнимаете руки у человека впереди вас. Новый человек ходит и кладет руки на человека, которого вы когда-то держали, и теперь у вас есть руки на нового человека. Инструкции Создайте метод addAt (index, element), который добавляет элемент в данный индекс. Возвращает false, если элемент не может быть добавлен. Примечание. Не забудьте проверить, является ли данный индекс отрицательным или длиннее длины связанного списка.
</section>

## Instructions
<section id='instructions'>
Create an <code>addAt(index,element)</code> method that adds an element at a given index. Return false if an element could not be added.
<strong>Note:</strong> Remember to check if the given index is a negative or is longer than the length of the linked list.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>addAt</code> method should reassign <code>head</code> to the new node when the given index is 0.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.addAt(0,'cat'); return test.head().element === 'cat'}()));
  - text: Your <code>addAt</code> method should increase the length of the linked list by one for each new node added to the linked list.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.addAt(0,'cat'); return test.size() === 3}()));
  - text: Your <code>addAt</code> method should return <code>false</code> if a node was unable to be added.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); return (test.addAt(4,'cat') === false); }()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

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

</div>

</section>

## Solution
<section id='solution'>

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

</section>
