---
id: 587d7dac367417b2b2512b74
title: Use Dot Notation to Access the Properties of an Object
challengeType: 1
videoUrl: ''
localeTitle: Использовать точную нотацию для доступа к свойствам объекта
---

## Description
<section id="description"> Последняя задача создала <code>object</code> с различными <code>properties</code> , теперь вы увидите, как получить доступ к значениям этих <code>properties</code> . Вот пример: <blockquote> let duck = { <br> имя: «Афлак», <br> numLegs: 2 <br> }; <br> console.log (duck.name); <br> // Это печатает «Aflac» на консоли </blockquote> Точечная нотация используется для имени <code>object</code> , <code>duck</code> , а затем имя <code>property</code> , <code>name</code> , для доступа к значению «Aflac». </section>

## Instructions
<section id="instructions"> Распечатайте оба <code>properties</code> объекта <code>dog</code> ниже на консоль. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Вы должны использовать <code>console.log</code> для печати значения для <code>name</code> свойства <code>dog</code> объекта.
    testString: 'assert(/console.log\(.*dog\.name.*\)/g.test(code), "Your should use <code>console.log</code> to print the value for the <code>name</code> property of the <code>dog</code> object.");'
  - text: Для использования значения свойства <code>numLegs</code> объекта <code>dog</code> следует использовать <code>console.log</code> .
    testString: 'assert(/console.log\(.*dog\.numLegs.*\)/g.test(code), "Your should use <code>console.log</code> to print the value for the <code>numLegs</code> property of the <code>dog</code> object.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4
};
// Add your code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
