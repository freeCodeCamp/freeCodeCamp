---
id: 56bbb991ad1ed5201cd392d2
title: Add New Properties to a JavaScript Object
challengeType: 1
videoUrl: ''
localeTitle: Добавить новые объекты в объект JavaScript
---

## Description
<section id="description"> Вы можете добавлять новые свойства к существующим объектам JavaScript так же, как вы их модифицировали. Вот как мы добавим свойство <code>&quot;bark&quot;</code> в <code>ourDog</code> : <code>ourDog.bark = &quot;bow-wow&quot;;</code> или <code>ourDog[&quot;bark&quot;] = &quot;bow-wow&quot;;</code> Теперь, когда мы оцениваем <code>ourDog.bark</code> , мы получим его <code>ourDog.bark</code> , «лук-вау». </section>

## Instructions
<section id="instructions"> Добавьте свойство <code>&quot;bark&quot;</code> в <code>myDog</code> и установите его на звук собаки, например «woof». Вы можете использовать либо точечную, либо скобку. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Добавьте свойство <code>&quot;bark&quot;</code> в <code>myDog</code> .
    testString: 'assert(myDog.bark !== undefined, "Add the property <code>"bark"</code> to <code>myDog</code>.");'
  - text: Не добавляйте <code>&quot;bark&quot;</code> в раздел настройки
    testString: 'assert(!/bark[^\n]:/.test(code), "Do not add <code>"bark"</code> to the setup section");'

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

ourDog.bark = "bow-wow";

// Setup
var myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

// Only change code below this line.

```

</div>


### After Test
<div id='js-teardown'>

```js
console.info('after the test');
```

</div>

</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
