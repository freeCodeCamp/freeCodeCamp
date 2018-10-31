---
id: 587d7b87367417b2b2512b43
title: Use Arrow Functions to Write Concise Anonymous Functions
challengeType: 1
videoUrl: ''
localeTitle: Используйте функции стрелок для записи сжатых анонимных функций
---

## Description
<section id="description"> В JavaScript нам часто не нужно называть наши функции, особенно при передаче функции в качестве аргумента другой функции. Вместо этого мы создаем встроенные функции. Нам не нужно называть эти функции, потому что мы не используем их повторно нигде. Для этого мы часто используем следующий синтаксис: <blockquote> const myFunc = function () { <br> const myVar = &quot;value&quot;; <br> return myVar; <br> } </blockquote> ES6 предоставляет нам синтаксический сахар, чтобы не писать анонимные функции таким образом. Вместо этого вы можете использовать <strong>синтаксис функции стрелки</strong> : <blockquote> const myFunc = () =&gt; { <br> const myVar = &quot;value&quot;; <br> return myVar; <br> } </blockquote> Когда нет тела функции и только возвращаемое значение, синтаксис функции стрелки позволяет опустить <code>return</code> ключевое слово, а также скобки, окружающие код. Это помогает упростить меньшие функции в однострочные операторы: <blockquote> const myFunc = () =&gt; &quot;value&quot; </blockquote> Этот код по-прежнему будет возвращать <code>value</code> по умолчанию. </section>

## Instructions
<section id="instructions"> Перепишите функцию, назначенную переменной <code>magic</code> которая возвращает новую <code>Date()</code> для использования синтаксиса функции стрелки. Также убедитесь, что ничего не определено с помощью ключевого слова <code>var</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Пользователь выполнил замену ключевого слова <code>var</code> .
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g), "User did replace <code>var</code> keyword.");'
  - text: <code>magic</code> должна быть постоянной переменной (используя <code>const</code> ).
    testString: 'getUserInput => assert(getUserInput("index").match(/const\s+magic/g), "<code>magic</code> should be a constant variable (by using <code>const</code>).");'
  - text: <code>magic</code> - это <code>function</code> .
    testString: 'assert(typeof magic === "function", "<code>magic</code> is a <code>function</code>.");'
  - text: <code>magic()</code> возвращает правильную дату.
    testString: 'assert(magic().getDate() == new Date().getDate(), "<code>magic()</code> returns correct date.");'
  - text: ключевое слово <code>function</code> не использовалось.
    testString: 'getUserInput => assert(!getUserInput("index").match(/function/g), "<code>function</code> keyword was not used.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var magic = function() {
  "use strict";
  return new Date();
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
