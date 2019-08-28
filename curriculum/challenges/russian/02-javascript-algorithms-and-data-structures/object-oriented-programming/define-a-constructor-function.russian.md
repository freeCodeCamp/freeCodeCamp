---
id: 587d7dad367417b2b2512b77
title: Define a Constructor Function
challengeType: 1
forumTopicId: 16804
localeTitle: Определение функции конструктора
---

## Description
<section id='description'>
<code>Constructors</code> - это функции, которые создают новые объекты. Они определяют свойства и поведение, которые будут принадлежать новому объекту. Подумайте о них как о плане создания новых объектов. Вот пример <code>constructor</code> : <blockquote> функция Bird () { <br> this.name = &quot;Альберт&quot;; <br> this.color = &quot;blue&quot;; <br> this.numLegs = 2; <br> } </blockquote> Этот <code>constructor</code> определяет объект <code>Bird</code> с <code>name</code> свойств, <code>color</code> и <code>numLegs</code> установленными на Albert, blue и 2, соответственно. <code>Constructors</code> следуют нескольким соглашениям: <ul><li> <code>Constructors</code> определяются с заглавным именем, чтобы отличать их от других функций, которые не являются <code>constructors</code> . </li><li> <code>Constructors</code> используют ключевое слово <code>this</code> для установки свойств объекта, который они создадут. Внутри <code>constructor</code> <code>this</code> относится к новому объекту, который он создаст. </li><li> <code>Constructors</code> определяют свойства и поведение вместо того, чтобы возвращать значение, как могли бы другие функции. </li></ul>
</section>

## Instructions
<section id='instructions'>
Create a <code>constructor</code>, <code>Dog</code>, with properties <code>name</code>, <code>color</code>, and <code>numLegs</code> that are set to a string, a string, and a number, respectively.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog</code> should have a <code>name</code> property set to a string.
    testString: assert(typeof (new Dog()).name === 'string');
  - text: <code>Dog</code> should have a <code>color</code> property set to a string.
    testString: assert(typeof (new Dog()).color === 'string');
  - text: <code>Dog</code> should have a <code>numLegs</code> property set to a number.
    testString: assert(typeof (new Dog()).numLegs === 'number');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js

```

</div>

</section>

## Solution
<section id='solution'>

```js
function Dog (name, color, numLegs) {
  this.name = 'name';
  this.color = 'color';
  this.numLegs = 4;
}
```

</section>
