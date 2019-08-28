---
id: 587d8250367417b2b2512c5e
title: Learn how a Stack Works
challengeType: 1
forumTopicId: 301705
localeTitle: Узнайте, как работает стек
---

## Description
<section id='description'>
Вероятно, вы знакомы со стопкой книг на своем столе. Вероятно, вы использовали функцию отмены текстового редактора. Вы также, вероятно, используете для нажатия кнопки «Назад» на своем телефоне, чтобы вернуться к предыдущему виду в приложении. Вы знаете, что у них общего? Все они хранят данные таким образом, чтобы вы могли перемещаться назад. Самая верхняя книга в стеке была той, которая была помещена последней. Если вы удалите эту книгу из верхней части стека, вы откроете книгу, которая была помещена туда до последней книги, и так далее. Если вы думаете об этом, во всех приведенных выше примерах вы получаете тип обслуживания <dfn>Last-In-First-Out</dfn> . Мы постараемся имитировать это с помощью нашего кода. Эта схема хранения данных называется <dfn>стеком</dfn> . В частности, нам пришлось бы реализовать метод <code>push()</code> который толкает объекты JavaScript вверху стека; и <code>pop()</code> , который удаляет объект JavaScript, который находится в верхней части стека в текущий момент.
</section>

## Instructions
<section id='instructions'>
Здесь у нас есть набор домашних заданий, представленных как массив: <code>&quot;BIO12&quot;</code> находится у основания, а <code>&quot;PSY44&quot;</code> находится в верхней части стека. Измените данный массив и обработайте его как <code>stack</code> используя описанные выше методы JavaScript. Удалите верхний элемент <code>&quot;PSY44&quot;</code> из стека. Затем добавьте <code>&quot;CS50&quot;</code> в новый верхний элемент стека.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>homeworkStack</code> should only contain 4 elements.
    testString: assert(homeworkStack.length === 4);
  - text: The last element in <code>homeworkStack</code> should be <code>"CS50"</code>.
    testString: assert(homeworkStack[3] === 'CS50');
  - text: <code>homeworkStack</code> should not contain <code>"PSY44"</code>.
    testString: assert(homeworkStack.indexOf('PSY44') === -1);
  - text: The initial declaration of the <code>homeworkStack</code> should not be changed.
    testString: assert(code.match(/=/g).length === 1 && /homeworkStack\s*=\s*\["BIO12"\s*,\s*"HIS80"\s*,\s*"MAT122"\s*,\s*"PSY44"\]/.test(code));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var homeworkStack = ["BIO12","HIS80","MAT122","PSY44"];
// Only change code below this line

```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```

</section>
