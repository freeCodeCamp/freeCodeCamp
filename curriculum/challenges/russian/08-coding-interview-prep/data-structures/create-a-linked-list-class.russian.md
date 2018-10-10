---
id: 587d8251367417b2b2512c62
title: Create a Linked List Class
challengeType: 1
videoUrl: ''
localeTitle: Создать класс связанного списка
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: Класс <code>LinkedList</code> должен иметь метод <code>add</code> .
    testString: 'assert((function(){var test = new LinkedList(); return (typeof test.add === "function")}()), "Your <code>LinkedList</code> class should have a <code>add</code> method.");'
  - text: Класс <code>LinkedList</code> должен назначить <code>head</code> первому добавленному узлу.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); return test.head().element === "cat"}()), "Your <code>LinkedList</code> class should assign <code>head</code> to the first node added.");'
  - text: ''
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); return test.head().next.element === "dog"}()), "The previous <code>node</code> in your <code>LinkedList</code> class should have reference to the newest node created.");'
  - text: <code>size</code> вашего класса <code>LinkedList</code> должен равняться количеству узлов в связанном списке.
    testString: 'assert((function(){var test = new LinkedList(); test.add("cat"); test.add("dog"); return test.size() === 2}()), "The  <code>size</code> of your <code>LinkedList</code> class should equal the amount of nodes in the linked list.");'

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
