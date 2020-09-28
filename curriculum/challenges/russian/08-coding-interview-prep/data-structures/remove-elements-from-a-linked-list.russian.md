---
id: 587d8251367417b2b2512c63
title: Remove Elements from a Linked List
challengeType: 1
forumTopicId: 301712
localeTitle: Удалить элементы из связанного списка
---

## Description
<section id='description'>
Следующим важным методом, который потребуется для любой реализации связанного списка, является метод <code>remove</code> . Этот метод должен взять элемент, который мы хотим удалить в качестве аргумента, а затем выполнить поиск в списке, чтобы найти и удалить узел, содержащий этот элемент. Всякий раз, когда мы удаляем узел из связанного списка, важно, чтобы мы не случайно оставили все остальное в списке. Напомним, что <code>next</code> свойство <code>next</code> узла указывает на узел, который следует за ним в списке. Если мы удалим средний элемент, скажем, мы хотим убедиться , что у нас есть связь с предыдущим узлом этого элемента <code>next</code> имущества к середине элемента <code>next</code> имуществу (который является следующим узлом в списке!) Это может показаться действительно запутанный, так что давайте вернемся к примеру линии conga, чтобы у нас была хорошая концептуальная модель. Представьте себя в линии конги, и человек прямо перед вами покинет линию. Лицо, которое только что покинуло линию, больше не имеет руки на кого-либо в очереди - и у вас больше нет рук на лице, которое осталось. Вы шагнете вперед и положите руки на следующего человека, которого видите. Если элемент мы хотим , чтобы удалить это <code>head</code> элемент, мы переназначить <code>head</code> на второй узел связанного списка.
</section>

## Instructions
<section id='instructions'>
Напишите метод <code>remove</code> который принимает элемент и удаляет его из связанного списка. Примечание. <code>length</code> списка должна уменьшаться на единицу при каждом удалении элемента из связанного списка.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>LinkedList</code> class should have a <code>remove</code> method.
    testString: assert((function(){var test = new LinkedList(); return (typeof test.remove === 'function')}()));
  - text: Your <code>remove</code> method should reassign <code>head</code> to the second node when the first node is removed.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.remove('cat'); return test.head().element === 'dog'}()));
  - text: Your <code>remove</code> method should decrease the <code>length</code> of the linked list by one for every node removed.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog'); test.remove('cat'); return test.size() === 1})());
  - text: Your <code>remove</code> method should reassign the reference of the previous node of the removed node to the removed node&apos;s <code>next</code> reference.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog');test.add('kitten'); test.remove('dog'); return test.head().next.element === 'kitten'})());
  - text: Your <code>remove</code> method should not change the linked list if the element does not exist in the linked list.
    testString: assert((function(){var test = new LinkedList(); test.add('cat'); test.add('dog');test.add('kitten'); test.remove('elephant'); return JSON.stringify(test.head()) === '{"element":"cat","next":{"element":"dog","next":{"element":"kitten","next":null}}}'})());

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

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

</section>
