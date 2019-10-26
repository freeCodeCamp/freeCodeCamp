---
id: 56bbb991ad1ed5201cd392d3
title: Delete Properties from a JavaScript Object
challengeType: 1
videoUrl: https://scrimba.com/c/cDqKdTv
forumTopicId: 17560
localeTitle: Удаление свойства объекта JavaScript
---

## Описание
<section id='description'>
Мы также можем удалять свойства объектов - это делается так: <code>delete ourDog.bark;</code>
</section>

## Инструкции
<section id='instructions'>
Удалите свойство <code>&quot;tails&quot;</code> из <code>myDog</code>. Можно использовать как точечную, так и скобочную запись.</section>

## Тесты
<section id='tests'>

```yml
tests:
  - text: Delete the property <code>"tails"</code> from <code>myDog</code>.
    testString: assert(typeof myDog === "object" && myDog.tails === undefined);
  - text: Do not modify the <code>myDog</code> setup
    testString: 'assert(code.match(/"tails": 1/g).length > 1);'

```

</section>

## Начальные условия задачи
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};

delete ourDog.bark;

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

// Only change code below this line.

```

</div>

### После тестов
<div id='js-teardown'>

```js
(function(z){return z;})(myDog);

```

</div>

</section>

## Решение
<section id='solution'>

```js
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"],
  "bark": "bow-wow"
};
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};
delete myDog.tails;
```

</section>
