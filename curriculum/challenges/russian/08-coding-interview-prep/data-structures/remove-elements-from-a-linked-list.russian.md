---
id: 587d8251367417b2b2512c63
title: Remove Elements from a Linked List
challengeType: 1
videoUrl: ''
localeTitle: Удалить элементы из связанного списка
---

## Description
<section id="description"> Следующим важным методом, который потребуется для любой реализации связанного списка, является метод <code>remove</code> . Этот метод должен взять элемент, который мы хотим удалить в качестве аргумента, а затем выполнить поиск в списке, чтобы найти и удалить узел, содержащий этот элемент. Всякий раз, когда мы удаляем узел из связанного списка, важно, чтобы мы не случайно оставили все остальное в списке. Напомним, что <code>next</code> свойство <code>next</code> узла указывает на узел, который следует за ним в списке. Если мы удалим средний элемент, скажем, мы хотим убедиться , что у нас есть связь с предыдущим узлом этого элемента <code>next</code> имущества к середине элемента <code>next</code> имуществу (который является следующим узлом в списке!) Это может показаться действительно запутанный, так что давайте вернемся к примеру линии conga, чтобы у нас была хорошая концептуальная модель. Представьте себя в линии конги, и человек прямо перед вами покинет линию. Лицо, которое только что покинуло линию, больше не имеет руки на кого-либо в очереди - и у вас больше нет рук на лице, которое осталось. Вы шагнете вперед и положите руки на следующего человека, которого видите. Если элемент мы хотим , чтобы удалить это <code>head</code> элемент, мы переназначить <code>head</code> на второй узел связанного списка. </section>

## Instructions
<section id="instructions"> Напишите метод <code>remove</code> который принимает элемент и удаляет его из связанного списка. Примечание. <code>length</code> списка должна уменьшаться на единицу при каждом удалении элемента из связанного списка. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Класс <code>LinkedList</code> должен иметь метод <code>remove</code> .
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.remove === "function")}()), "Your <code>LinkedList</code> class should have a <code>remove</code> method.");'
  - text: Метод <code>remove</code> должен переназначить <code>head</code> во второй узел при удалении первого узла.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.remove("cat"); return test.head().element === "dog"}()), "Your <code>remove</code> method should reassign <code>head</code> to the second node when the first node is removed.");'
  - text: Метод <code>remove</code> должен уменьшать <code>length</code> связанного списка по одному на каждый удаленный узел.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.remove("cat"); return test.size() === 1})(), "Your <code>remove</code> method should decrease the <code>length</code> of the linked list by one for every node removed.");'
  - text: Метод <code>remove</code> должен переназначить ссылку предыдущего узла удаленного узла на <code>next</code> ссылку удаленного узла.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog");test.add("kitten"); test.remove("dog"); return test.head().next.element === "kitten"})(), "Your <code>remove</code> method should reassign the reference of the previous node of the removed node to the removed node&apos;s <code>next</code> reference.");'

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
        currentNode = head;

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
// solution required
```
</section>
