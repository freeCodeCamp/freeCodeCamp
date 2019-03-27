---
id: 587d8252367417b2b2512c67
title: Add Elements at a Specific Index in a Linked List
challengeType: 1
videoUrl: ''
localeTitle: Добавить элементы по определенному индексу в связанном списке
---

## Description
<section id="description"> Давайте создадим метод addAt (index, element), который добавит элемент в данный индекс. Точно так же, как мы удаляем элементы с заданным индексом, нам нужно отслеживать currentIndex, когда мы пересекаем связанный список. Когда currentIndex соответствует указанному индексу, нам нужно переназначить следующее свойство предыдущего узла для ссылки на новый добавленный узел. И новый узел должен ссылаться на следующий узел в currentIndex. Возвращаясь к примеру линии conga, новый человек хочет присоединиться к линии, но он хочет присоединиться к середине. Вы находитесь в середине линии, поэтому вы отнимаете руки у человека впереди вас. Новый человек ходит и кладет руки на человека, которого вы когда-то держали, и теперь у вас есть руки на нового человека. Инструкции Создайте метод addAt (index, element), который добавляет элемент в данный индекс. Возвращает false, если элемент не может быть добавлен. Примечание. Не забудьте проверить, является ли данный индекс отрицательным или длиннее длины связанного списка. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Ваш метод <code>addAt</code> должен переназначить <code>head</code> на новый узел, если данный индекс равен 0.'
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.addAt(0,"cat"); return test.head().element === "cat"}()), "Your <code>addAt</code> method should reassign <code>head</code> to the new node when the given index is 0.");'
  - text: 'Ваш метод <code>addAt</code> должен увеличить длину связанного списка по одному для каждого нового узла, добавленного в связанный список.'
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.addAt(0,"cat"); return test.size() === 3}()), "Your <code>addAt</code> method should increase the length of the linked list by one for each new node added to the linked list.");'
  - text: Метод <code>addAt</code> должен возвращать значение <code>false</code> если узел не смог быть добавлен.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); return (test.addAt(4,"cat") === false); }()), "Your <code>addAt</code> method should return <code>false</code> if a node was unable to be added.");'

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
