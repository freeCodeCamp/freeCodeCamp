---
id: 56bbb991ad1ed5201cd392d1
title: Updating Object Properties
challengeType: 1
videoUrl: https://scrimba.com/c/c9yEJT4
forumTopicId: 18336
localeTitle: Обновление свойств объекта
---

## Description
<section id='description'>
После того, как вы создали объект JavaScript, вы можете обновить его свойства в любое время, точно так же, как если бы вы обновили любую другую переменную. Вы можете использовать ноту или скобку для обновления. Например, давайте посмотрим на <code>ourDog</code> : <blockquote> var ourDog = { <br> «name»: «Camper», <br> «ноги»: 4, <br> «хвосты»: 1, <br> «друзья»: [«все!»] <br> }; </blockquote> Поскольку он очень счастливая собака, давайте сменим его имя на «Happy Camper». Вот как мы обновляем свойство его объекта: <code>ourDog.name = &quot;Happy Camper&quot;;</code> или <code>ourDog[&quot;name&quot;] = &quot;Happy Camper&quot;;</code> Теперь, когда мы оцениваем <code>ourDog.name</code> , вместо получения «Camper», мы получим его новое имя «Happy Camper».
</section>

## Instructions
<section id='instructions'>
Обновите свойство имени объекта <code>myDog</code> . Давайте изменим ее имя от «Coder» до «Happy Coder». Вы можете использовать либо точечную, либо скобку.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Update <code>myDog</code>&apos;s <code>"name"</code> property to equal "Happy Coder".
    testString: assert(/happy coder/gi.test(myDog.name));
  - text: Do not edit the <code>myDog</code> definition
    testString: 'assert(/"name": "Coder"/.test(code));'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// Example
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};

ourDog.name = "Happy Camper";

// Setup
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

```

</div>

### After Tests
<div id='js-teardown'>

```js
(function(z){return z;})(myDog);

```

</div>

</section>

## Solution
<section id='solution'>

```js
var myDog = {
  "name": "Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};
myDog.name = "Happy Coder";
```

</section>
