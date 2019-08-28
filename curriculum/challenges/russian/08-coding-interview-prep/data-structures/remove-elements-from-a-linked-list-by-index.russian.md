---
id: 587d8251367417b2b2512c65
title: Remove Elements from a Linked List by Index
challengeType: 1
forumTopicId: 301711
localeTitle: Удалить элементы из связанного списка по индексу
---

## Description
<section id='description'>
Прежде чем перейти к другой структуре данных, давайте получим пару последних бит практики со связанными списками. Давайте напишем <code>removeAt</code> который удаляет <code>element</code> по заданному <code>index</code> . Метод следует называть <code>removeAt(index)</code> . Чтобы удалить <code>element</code> с определенным <code>index</code> , нам нужно сохранить количество запусков каждого узла при перемещении по связанному списку. Обычный метод, используемый для итерации через элементы связанного списка, включает в себя <dfn>«бегун»</dfn> или дозорный, который «указывает» на узлы, которые сравнивает ваш код. В нашем случае, начиная с <code>head</code> нашего списка, мы начинаем с переменной <code>currentIndex</code> которая начинается с <code>0</code> . <code>currentIndex</code> должен увеличиваться на единицу для каждого проходящего узла. Так же, как наш метод <code>remove(element)</code> , мы должны быть осторожны, чтобы не осилить остальную часть нашего списка, когда мы удаляем узел в нашем методе removeAt (index). Мы держим наши узлы смежными, убедившись, что узел, имеющий ссылку на удаленный узел, имеет ссылку на следующий узел.
</section>

## Instructions
<section id='instructions'>
Напишите <code>removeAt(index)</code> который удаляет и возвращает узел с заданным <code>index</code> . Метод должен возвращать значение <code>null</code> если данный <code>index</code> либо отрицательный, либо больше или равен <code>length</code> связанного списка. Примечание. Не забудьте сохранить счетчик <code>currentIndex</code> .
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>LinkedList</code> class should have a <code>removeAt</code> method.
    testString: assert((function(){var test = new LinkedList(); return (typeof test.removeAt === 'function')}()));
  - text: Your <code>removeAt</code> method should reduce the <code>length</code> of the linked list by one.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten'); test.removeAt(1); return test.size() === 2}()));
  - text: Your <code>removeAt</code> method should remove the element at the specified index from the linked list.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten'); test.add('bird');test.removeAt(1); return JSON.stringify(test.head()) === '{"element":"cat","next":{"element":"kitten","next":{"element":"bird","next":null}}}'}()));
  - text: When only one element is present in the linked list, your <code>removeAt</code> method should remove and return the element at specified index, and reduce the length of the linked list.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); var removedItem = test.removeAt(0); return test.head() === null && test.size() === 0 && removedItem === 'cat';}()));
  - text: Your <code>removeAt</code> method should return the element of the removed node.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten');  return test.removeAt(1) === 'dog'}()));
  - text: Your <code>removeAt</code> method should return <code>null</code> and the linked list should not change if the given index is less than <code>0</code>.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten');  var removedItem = test.removeAt(-1); return removedItem === null && JSON.stringify(test.head()) === '{"element":"cat","next":{"element":"dog","next":{"element":"kitten","next":null}}}'}()));
  - text: Your <code>removeAt</code> method should return <code>null</code> and the linked list should not change if the given index is greater than or equal to the <code>length</code> of the list.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten');  var removedItem = test.removeAt(3); return removedItem === null && JSON.stringify(test.head()) === '{"element":"cat","next":{"element":"dog","next":{"element":"kitten","next":null}}}'}()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function LinkedList() {
  var length = 0;
  var head = null;

  var Node = function(element){ // {1}
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

  var Node = function (element) { // {1}
    this.element = element;
    this.next = null;
  };

  this.size = function () {
    return length;
  };

  this.head = function () {
    return head;
  };

  this.add = function (element) {
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

  this.removeAt = function (index) {
    var currentNode = head;
    var previous = head;
    var count = 0;
    if (index >= length || index < 0) {
      return null;
    }
    if (index === 0) {
      var removed = head.element;
      head = currentNode.next;
    } else {
      while (count < index) {
        previous = currentNode;
        currentNode = currentNode.next;
        count++;
      }
      var removed = previous.next.element;
      previous.next = currentNode.next;
    }
    length--;
    return removed;
  };
}
```

</section>
