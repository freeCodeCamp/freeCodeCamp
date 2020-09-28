---
id: 587d7b84367417b2b2512b34
title: Use typeof to Check the Type of a Variable
challengeType: 1
forumTopicId: 18374
localeTitle: Используйте типof для проверки типа переменной
---

## Description
<section id='description'>
Вы можете использовать <code>typeof</code> для проверки структуры данных или типа переменной. Это полезно при отладке при работе с несколькими типами данных. Если вы считаете, что добавляете два числа, но на самом деле это строка, результаты могут быть неожиданными. Ошибки типа могут скрываться при вычислениях или вызовах функций. Будьте особенно внимательны, когда вы обращаетесь к внешним данным и работаете с ними в виде объекта JavaScript Object Notation (JSON). Вот несколько примеров с использованием <code>typeof</code> : <blockquote> console.log (typeof &quot;&quot;); // выводит &quot;string&quot; <br> console.log (typeof 0); // выводит «число» <br> console.log (typeof []); // выводит &quot;объект&quot; <br> console.log (typeof {}); // выводит &quot;объект&quot; </blockquote> JavaScript распознает шесть примитивных (неизменных) типов данных: <code>Boolean</code> , <code>Null</code> , <code>Undefined</code> , <code>Number</code> , <code>String</code> и <code>Symbol</code> (новый с ES6) и один тип для изменяемых элементов: <code>Object</code> . Обратите внимание, что в JavaScript массивы являются технически типом объекта.
</section>

## Instructions
<section id='instructions'>
Добавьте два оператора <code>console.log()</code> чтобы проверить <code>typeof</code> каждой из двух переменных <code>seven</code> и <code>three</code> в коде.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should use <code>typeof</code> in two <code>console.log()</code> statements to check the type of the variables.
    testString: assert(code.match(/console\.log\(typeof[\( ].*\)?\)/g).length == 2);
  - text: Your code should use <code>typeof</code> to check the type of the variable <code>seven</code>.
    testString: assert(code.match(/typeof[\( ]seven\)?/g));
  - text: Your code should use <code>typeof</code> to check the type of the variable <code>three</code>.
    testString: assert(code.match(/typeof[\( ]three\)?/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let seven = 7;
let three = "3";
console.log(seven + three);
// Add your code below this line

```

</div>

</section>

## Solution
<section id='solution'>

```js
let seven = 7;let three = "3";console.log(typeof seven);
console.log(typeof three);
```

</section>
