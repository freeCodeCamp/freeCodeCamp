---
id: 587d7b8b367417b2b2512b53
title: Use class Syntax to Define a Constructor Function
challengeType: 1
forumTopicId: 301212
localeTitle: Использовать синтаксис класса для определения функции конструктора
---

## Description
<section id='description'>
ES6 предоставляет новый синтаксис для создания объектов с использованием <dfn>класса</dfn> ключевых слов. Следует отметить, что синтаксис <code>class</code> является просто синтаксисом, а не полноценной реализацией объектно-ориентированной парадигмы на основе классов, в отличие от языков, таких как Java, или Python, или Ruby и т. Д. В ES5 мы обычно определяем конструктор функции и используйте <code>new</code> ключевое слово для создания экземпляра объекта. <blockquote> var SpaceShuttle = function (targetPlanet) { <br> this.targetPlanet = targetPlanet; <br> } <br> var zeus = новый SpaceShuttle (&#39;Юпитер&#39;); </blockquote> Синтаксис класса просто заменяет создание функции конструктора: <blockquote> класс SpaceShuttle { <br> Конструктор (targetPlanet) { <br> this.targetPlanet = targetPlanet; <br> } <br> } <br> const zeus = new SpaceShuttle («Юпитер»); </blockquote> Обратите внимание, что ключевое слово <code>class</code> объявляет новую функцию и добавляется конструктор, который будет вызываться при вызове <code>new</code> - для создания нового объекта.
</section>

## Instructions
<section id='instructions'>
Используйте ключевое слово <code>class</code> и напишите правильный конструктор, чтобы создать класс <code>Vegetable</code> . <code>Vegetable</code> позволяет вам создать объект-овощ с <code>name</code> свойства, который будет передан конструктору.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Vegetable</code> should be a <code>class</code> with a defined <code>constructor</code> method.
    testString: assert(typeof Vegetable === 'function' && typeof Vegetable.constructor === 'function');
  - text: <code>class</code> keyword should be used.
    testString: assert(code.match(/class/g));
  - text: <code>Vegetable</code> should be able to be instantiated.
    testString: assert(() => {const a = new Vegetable("apple"); return typeof a === 'object';});
  - text: <code>carrot.name</code> should return <code>carrot</code>.
    testString: assert(carrot.name=='carrot');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
/* Alter code below this line */

/* Alter code above this line */

const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

```

</div>

</section>

## Solution
<section id='solution'>

```js
class Vegetable {
  constructor(name) {
    this.name = name;
  }
}
const carrot = new Vegetable('carrot');
```

</section>
