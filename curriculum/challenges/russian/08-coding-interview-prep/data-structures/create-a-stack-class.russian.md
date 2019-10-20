---
id: 587d8250367417b2b2512c5f
title: Create a Stack Class
challengeType: 1
forumTopicId: 301633
localeTitle: Создать класс стека
---

## Description
<section id='description'>
В последнем разделе мы говорили о том, что такое стек и как мы можем использовать массив для представления стека. В этом разделе мы создадим собственный класс стека. Хотя вы можете использовать массивы для создания стеков, иногда лучше ограничивать количество контроля, которое у нас есть с нашими стопами. Помимо метода <code>push</code> и <code>pop</code> , у стеков есть и другие полезные методы. Давайте добавим <code>peek</code> , <code>isEmpty</code> и <code>clear</code> метод в наш класс стека. Инструкции Напишите метод <code>push</code> который подталкивает элемент к вершине стека, метод <code>pop</code> который удаляет элемент в верхней части стека, метод <code>peek</code> который смотрит на первый элемент в стеке, метод <code>isEmpty</code> который проверяет, стек пуст и <code>clear</code> метод, который удаляет все элементы из стека. Обычно у стеков это не так, но мы добавили метод вспомогательной <code>print</code> котором консоль регистрирует коллекцию.
</section>

## Instructions
<section id='instructions'>
Write a <code>push</code> method that pushes an element to the top of the stack, a <code>pop</code> method that removes the element on the top of the stack, a <code>peek</code> method that looks at the first element in the stack, an <code>isEmpty</code> method that checks if the stack is empty, and a <code>clear</code> method that removes all elements from the stack.
Normally stacks don't have this, but we've added a <code>print</code> helper method that console logs the collection.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>Stack</code> class should have a <code>push</code> method.
    testString: assert((function(){var test = new Stack(); return (typeof test.push === 'function')}()));
  - text: Your <code>Stack</code> class should have a <code>pop</code> method.
    testString: assert((function(){var test = new Stack(); return (typeof test.pop === 'function')}()));
  - text: Your <code>Stack</code> class should have a <code>peek</code> method.
    testString: assert((function(){var test = new Stack(); return (typeof test.peek === 'function')}()));
  - text: Your <code>Stack</code> class should have a <code>isEmpty</code> method.
    testString: assert((function(){var test = new Stack(); return (typeof test.isEmpty === 'function')}()));
  - text: Your <code>Stack</code> class should have a <code>clear</code> method.
    testString: assert((function(){var test = new Stack(); return (typeof test.clear === 'function')}()));
  - text: The <code>peek</code> method should return the top element of the stack
    testString: assert((function(){var test = new Stack();  test.push('CS50'); return (test.peek() === 'CS50')}()));
  - text: The <code>pop</code> method should remove and return the top element of the stack
    testString: assert((function(){var test = new Stack(); test.push('CS50'); return (test.pop() === 'CS50');}()));
  - text: The <code>isEmpty</code> method should return true if a stack does not contain any elements
    testString: assert((function(){var test = new Stack(); return test.isEmpty()}()));
  - text: The <code>clear</code> method should remove all element from the stack
    testString: assert((function(){var test = new Stack();  test.push('CS50'); test.clear(); return (test.isEmpty())}()));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Stack() {
  var collection = [];
  this.print = function() {
    console.log(collection);
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
class Stack {
  constructor() {
    this.collection = [];
  }
  print() {
    console.log(this.collection);
  }
  push(val) {
    this.collection.push(val);
  }
  pop() {
    return this.collection.pop();
  }
  peek() {
    return this.collection[this.collection.length - 1];
  }
  isEmpty() {
    return this.collection.length === 0;
  }
  clear() {
    return (this.collection.length = 0);
  }
}
```

</section>
