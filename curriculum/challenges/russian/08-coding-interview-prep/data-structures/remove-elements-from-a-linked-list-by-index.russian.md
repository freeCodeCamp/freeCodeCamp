---
id: 587d8251367417b2b2512c65
title: Remove Elements from a Linked List by Index
challengeType: 1
videoUrl: ''
localeTitle: Удалить элементы из связанного списка по индексу
---

## Description
<section id="description"> Прежде чем перейти к другой структуре данных, давайте получим пару последних бит практики со связанными списками. Давайте напишем <code>removeAt</code> который удаляет <code>element</code> по заданному <code>index</code> . Метод следует называть <code>removeAt(index)</code> . Чтобы удалить <code>element</code> с определенным <code>index</code> , нам нужно сохранить количество запусков каждого узла при перемещении по связанному списку. Обычный метод, используемый для итерации через элементы связанного списка, включает в себя <dfn>«бегун»</dfn> или дозорный, который «указывает» на узлы, которые сравнивает ваш код. В нашем случае, начиная с <code>head</code> нашего списка, мы начинаем с переменной <code>currentIndex</code> которая начинается с <code>0</code> . <code>currentIndex</code> должен увеличиваться на единицу для каждого проходящего узла. Так же, как наш метод <code>remove(element)</code> , мы должны быть осторожны, чтобы не осилить остальную часть нашего списка, когда мы удаляем узел в нашем методе removeAt (index). Мы держим наши узлы смежными, убедившись, что узел, имеющий ссылку на удаленный узел, имеет ссылку на следующий узел. </section>

## Instructions
<section id="instructions"> Напишите <code>removeAt(index)</code> который удаляет и возвращает узел с заданным <code>index</code> . Метод должен возвращать значение <code>null</code> если данный <code>index</code> либо отрицательный, либо больше или равен <code>length</code> связанного списка. Примечание. Не забудьте сохранить счетчик <code>currentIndex</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Класс <code>LinkedList</code> должен иметь <code>removeAt</code> .
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.removeAt === "function")}()), "Your <code>LinkedList</code> class should have a <code>removeAt</code> method.");'
  - text: Метод <code>removeAt</code> должен уменьшить <code>length</code> связанного списка
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten"); test.removeAt(1); return test.size() === 2}()), "Your <code>removeAt</code> method should reduce the <code>length</code> of the linked list");'
  - text: Метод <code>removeAt</code> также должен возвращать элемент удаленного узла.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten");  return test.removeAt(1) === "dog"}()), "Your <code>removeAt</code> method should also return the element of the removed node.");'
  - text: Метод <code>removeAt</code> также должен возвращать значение <code>null</code> если данный индекс меньше <code>0</code>
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten");  return (test.removeAt(-1) === null)}()), "Your <code>removeAt</code> method should also return <code>null</code> if the given index is less than <code>0</code>");'
  - text: Метод <code>removeAt</code> также должен возвращать значение <code>null</code> если данный индекс равен или больше <code>length</code> связанного списка.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); test.add("kitten");  return (test.removeAt(3) === null)}()), "Your <code>removeAt</code> method should also return <code>null</code> if the given index is equal or more than the <code>length</code> of the linked list.");'

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
        currentNode = head;

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
