---
id: 587d8251367417b2b2512c64
title: Search within a Linked List
challengeType: 1
forumTopicId: 301715
localeTitle: Поиск в связанном списке
---

## Description
<section id='description'>
Давайте добавим еще несколько полезных методов в наш связанный класс списка. Не было бы полезно, если бы мы могли сказать, был ли наш список пустым или нет, как в наших классах <code>Stack</code> и <code>Queue</code> ? Мы также должны иметь возможность находить определенные элементы в нашем связанном списке. Прохождение через структуры данных - это то, с чем вы захотите получить много практики! Давайте создадим метод <code>indexOf</code> который принимает <code>element</code> в качестве аргумента и возвращает <code>index</code> этого элемента в связанном списке. Если элемент не найден в связанном списке, верните <code>-1</code> . Давайте также реализуем метод, который делает обратное: метод <code>elementAt</code> который принимает <code>index</code> в качестве аргумента и возвращает <code>element</code> в указанном <code>index</code> . Если ни один <code>element</code> не найден, возвращайте <code>undefined</code> .
</section>

## Instructions
<section id='instructions'>
Напишите метод <code>isEmpty</code> который проверяет, является ли связанный список пустым, метод <code>indexOf</code> который возвращает <code>index</code> данного элемента, и <code>elementAt</code> который возвращает <code>element</code> в указанном <code>index.</code>
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>LinkedList</code> class should have a <code>indexOf</code> method.
    testString: assert((function(){var test = new LinkedList(); return (typeof test.indexOf === 'function')}()));
  - text: Your <code>LinkedList</code> class should have a <code>elementAt</code> method.
    testString: assert((function(){var test = new LinkedList(); return (typeof test.elementAt === 'function')}()));
  - text: Your <code>size</code> method should return the length of the linked list
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten'); return test.size() === 3}()));
  - text: Your <code>indexOf</code> method should return the index of the given element.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten'); return test.indexOf('kitten') === 2}()));
  - text: Your <code>elementAt</code> method should return at element at a given index.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.add('kitten'); return test.elementAt(1) === 'dog'}()));

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

  // Only change code below this line

  // Only change code above this line
}

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
