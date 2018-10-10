---
id: 587d7b8b367417b2b2512b53
title: Use class Syntax to Define a Constructor Function
challengeType: 1
videoUrl: ''
localeTitle: Использовать синтаксис класса для определения функции конструктора
---

## Description
<section id="description"> ES6 предоставляет новый синтаксис для создания объектов с использованием <dfn>класса</dfn> ключевых слов. Следует отметить, что синтаксис <code>class</code> является просто синтаксисом, а не полноценной реализацией объектно-ориентированной парадигмы на основе классов, в отличие от языков, таких как Java, или Python, или Ruby и т. Д. В ES5 мы обычно определяем конструктор функции и используйте <code>new</code> ключевое слово для создания экземпляра объекта. <blockquote> var SpaceShuttle = function (targetPlanet) { <br> this.targetPlanet = targetPlanet; <br> } <br> var zeus = новый SpaceShuttle (&#39;Юпитер&#39;); </blockquote> Синтаксис класса просто заменяет создание функции конструктора: <blockquote> класс SpaceShuttle { <br> Конструктор (targetPlanet) { <br> this.targetPlanet = targetPlanet; <br> } <br> } <br> const zeus = new SpaceShuttle («Юпитер»); </blockquote> Обратите внимание, что ключевое слово <code>class</code> объявляет новую функцию и добавляется конструктор, который будет вызываться при вызове <code>new</code> - для создания нового объекта. </section>

## Instructions
<section id="instructions"> Используйте ключевое слово <code>class</code> и напишите правильный конструктор, чтобы создать класс <code>Vegetable</code> . <code>Vegetable</code> позволяет вам создать объект-овощ с <code>name</code> свойства, который будет передан конструктору. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Vegetable</code> должен быть <code>class</code> с определенным методом <code>constructor</code> .
    testString: 'assert(typeof Vegetable === "function" && typeof Vegetable.constructor === "function", "<code>Vegetable</code> should be a <code>class</code> with a defined <code>constructor</code> method.");'
  - text: ключевое слово <code>class</code> .
    testString: 'getUserInput => assert(getUserInput("index").match(/class/g),"<code>class</code> keyword was used.");'
  - text: <code>Vegetable</code> могут быть созданы.
    testString: 'assert(() => {const a = new Vegetable("apple"); return typeof a === "object";},"<code>Vegetable</code> can be instantiated.");'
  - text: <code>carrot.name</code> должно вернуть <code>carrot</code> .
    testString: 'assert(carrot.name=="carrot","<code>carrot.name</code> should return <code>carrot</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function makeClass() {
  "use strict";
  /* Alter code below this line */

  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
