---
id: 587d7dad367417b2b2512b75
title: Create a Method on an Object
challengeType: 1
videoUrl: ''
localeTitle: Создание метода для объекта
---

## Description
<section id="description"> <code>Objects</code> могут иметь особый тип <code>property</code> , называемый <code>method</code> . <code>Methods</code> - это <code>properties</code> которые являются функциями. Это добавляет другое поведение к <code>object</code> . Вот пример <code>duck</code> с помощью метода: <blockquote> let duck = { <br> имя: «Афлак», <br> numLegs: 2, <br> sayName: function () {return &quot;Название этой утки -&quot; + duck.name + &quot;.&quot;;} <br> }; <br> duck.sayName (); <br> // Возвращает «Название этой утки - Афлак». </blockquote> В примере добавлен <code>method</code> <code>sayName</code> , который является функцией, которая возвращает предложение, дающее имя <code>duck</code> . Обратите внимание, что <code>method</code> получил доступ к свойству <code>name</code> в операторе return с помощью <code>duck.name</code> . Следующая задача будет охватывать другой способ сделать это. </section>

## Instructions
<section id="instructions"> Используя <code>object</code> <code>dog</code> , дайте ему метод, называемый <code>sayLegs</code> . Метод должен вернуть предложение «У этой собаки 4 ноги». </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog.sayLegs()</code> должна быть функцией.
    testString: 'assert(typeof(dog.sayLegs) === "function", "<code>dog.sayLegs()</code> should be a function.");'
  - text: '<code>dog.sayLegs()</code> должен возвращать заданную строку - обратите внимание на то, что знаки пунктуации и интервала.'
    testString: 'assert(dog.sayLegs() === "This dog has 4 legs.", "<code>dog.sayLegs()</code> should return the given string - note that punctuation and spacing matter.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {
  name: "Spot",
  numLegs: 4,

};

dog.sayLegs();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
