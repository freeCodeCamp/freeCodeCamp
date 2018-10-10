---
id: 56bbb991ad1ed5201cd392d3
title: Delete Properties from a JavaScript Object
challengeType: 1
videoUrl: ''
localeTitle: Excluir propriedades de um objeto JavaScript
---

## Description
<section id="description"> Também podemos excluir propriedades de objetos como este: <code>delete ourDog.bark;</code> </section>

## Instructions
<section id="instructions"> Exclua a propriedade <code>&quot;tails&quot;</code> do <code>myDog</code> . Você pode usar a notação de pontos ou colchetes. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Exclua a propriedade <code>&quot;tails&quot;</code> do <code>myDog</code> .
    testString: 'assert(typeof myDog === "object" && myDog.tails === undefined, "Delete the property <code>"tails"</code> from <code>myDog</code>.");'
  - text: Não modifique a configuração do <code>myDog</code>
    testString: 'assert(code.match(/"tails": 1/g).length > 1, "Do not modify the <code>myDog</code> setup");'

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
