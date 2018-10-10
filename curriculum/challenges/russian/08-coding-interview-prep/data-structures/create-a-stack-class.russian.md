---
id: 587d8250367417b2b2512c5f
title: Create a Stack Class
challengeType: 1
videoUrl: ''
localeTitle: Создать класс стека
---

## Description
<section id="description"> В последнем разделе мы говорили о том, что такое стек и как мы можем использовать массив для представления стека. В этом разделе мы создадим собственный класс стека. Хотя вы можете использовать массивы для создания стеков, иногда лучше ограничивать количество контроля, которое у нас есть с нашими стопами. Помимо метода <code>push</code> и <code>pop</code> , у стеков есть и другие полезные методы. Давайте добавим <code>peek</code> , <code>isEmpty</code> и <code>clear</code> метод в наш класс стека. Инструкции Напишите метод <code>push</code> который подталкивает элемент к вершине стека, метод <code>pop</code> который удаляет элемент в верхней части стека, метод <code>peek</code> который смотрит на первый элемент в стеке, метод <code>isEmpty</code> который проверяет, стек пуст и <code>clear</code> метод, который удаляет все элементы из стека. Обычно у стеков это не так, но мы добавили метод вспомогательной <code>print</code> котором консоль регистрирует коллекцию. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Класс <code>Stack</code> должен иметь метод <code>push</code> .
    testString: 'assert((function(){var test = new Stack(); return (typeof test.push === "function")}()), "Your <code>Stack</code> class should have a <code>push</code> method.");'
  - text: Класс <code>Stack</code> должен иметь метод <code>pop</code> .
    testString: 'assert((function(){var test = new Stack(); return (typeof test.pop === "function")}()), "Your <code>Stack</code> class should have a <code>pop</code> method.");'
  - text: Класс <code>Stack</code> должен иметь метод <code>peek</code> .
    testString: 'assert((function(){var test = new Stack(); return (typeof test.peek === "function")}()), "Your <code>Stack</code> class should have a <code>peek</code> method.");'
  - text: Класс <code>Stack</code> должен иметь метод <code>isEmpty</code> .
    testString: 'assert((function(){var test = new Stack(); return (typeof test.isEmpty === "function")}()), "Your <code>Stack</code> class should have a <code>isEmpty</code> method.");'
  - text: Класс <code>Stack</code> должен иметь <code>clear</code> метод.
    testString: 'assert((function(){var test = new Stack(); return (typeof test.clear === "function")}()), "Your <code>Stack</code> class should have a <code>clear</code> method.");'
  - text: Метод <code>peek</code> должен возвращать верхний элемент стека
    testString: 'assert((function(){var test = new Stack();  test.push("CS50"); return (test.peek() === "CS50")}()), "The <code>peek</code> method should return the top element of the stack");'
  - text: Метод <code>pop</code> должен удалить и вернуть верхний элемент стека
    testString: 'assert((function(){var test = new Stack(); test.push("CS50"); return (test.pop() === "CS50");}()), "The <code>pop</code> method should remove and return the top element of the stack");'
  - text: 'Метод <code>isEmpty</code> должен возвращать true, если стек не содержит элементов'
    testString: 'assert((function(){var test = new Stack(); return test.isEmpty()}()), "The <code>isEmpty</code> method should return true if a stack does not contain any elements");'
  - text: Метод <code>clear</code> должен удалить весь элемент из стека
    testString: 'assert((function(){var test = new Stack();  test.push("CS50"); test.clear(); return (test.isEmpty())}()), "The <code>clear</code> method should remove all element from the stack");'

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
// solution required
```
</section>
