---
id: 56bbb991ad1ed5201cd392d3
title: Delete Properties from a JavaScript Object
challengeType: 1
videoUrl: https://scrimba.com/c/cDqKdTv
forumTopicId: 17560
localeTitle: Удаление свойств из объекта JavaScript
---

## Description
<section id='description'>
Мы также можем удалить свойства из таких объектов: <code>delete ourDog.bark;</code>
</section>

## Instructions
<section id='instructions'>
Удалите свойство <code>&quot;tails&quot;</code> из <code>myDog</code> . Вы можете использовать либо точечную, либо скобку.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Delete the property <code>"tails"</code> from <code>myDog</code>.
    testString: assert(typeof myDog === "object" && myDog.tails === undefined);
  - text: Do not modify the <code>myDog</code> setup
    testString: 'assert(code.match(/"tails": 1/g).length > 1);'

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
