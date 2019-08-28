---
id: 587d7dac367417b2b2512b73
title: Create a Basic JavaScript Object
challengeType: 1
forumTopicId: 301317
localeTitle: Создание базового объекта JavaScript
---

## Description
<section id='description'>
Подумайте о том, что люди видят каждый день, как автомобили, магазины и птицы. Это все <code>objects</code> : ощутимые вещи, с которыми люди могут наблюдать и взаимодействовать. Каковы некоторые качества этих <code>objects</code> ? У автомобиля есть колеса. Магазины продают товары. Птицы имеют крылья. Эти качества или <code>properties</code> определяют, что составляет <code>object</code> . Обратите внимание, что подобные <code>objects</code> имеют одни и те же <code>properties</code> , но могут иметь разные значения для этих <code>properties</code> . Например, у всех автомобилей есть колеса, но не у всех автомобилей одинаковое количество колес. <code>Objects</code> в JavaScript используются для моделирования объектов реального мира, придания им <code>properties</code> и поведения, как и их реальных копий. Вот пример использования этих понятий для создания <code>object</code> <code>duck</code> : <blockquote> let duck = { <br> имя: «Афлак», <br> numLegs: 2 <br> }; </blockquote> Этот <code>object</code> <code>duck</code> имеет две пары свойств / значений: <code>name</code> «Aflac» и <code>numLegs</code> из 2.
</section>

## Instructions
<section id='instructions'>
Создайте <code>object</code> <code>dog</code> с <code>name</code> и свойствами <code>numLegs</code> и установите их в строку и число соответственно.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>dog</code> should be an <code>object</code>.
    testString: assert(typeof(dog) === 'object');
  - text: <code>dog</code> should have a <code>name</code> property set to a <code>string</code>.
    testString: assert(typeof(dog.name) === 'string');
  - text: <code>dog</code> should have a <code>numLegs</code> property set to a <code>number</code>.
    testString: assert(typeof(dog.numLegs) === 'number');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let dog = {

};

```

</div>

</section>

## Solution
<section id='solution'>

```js
let dog = {
  name: '',
  numLegs: 4
};
```

</section>
