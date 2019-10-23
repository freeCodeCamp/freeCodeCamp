---
id: 56bbb991ad1ed5201cd392d2
title: Add New Properties to a JavaScript Object
challengeType: 1
videoUrl: ''
localeTitle: Adicionar novas propriedades a um objeto JavaScript
---

## Description
<section id="description"> Você pode adicionar novas propriedades a objetos JavaScript existentes da mesma maneira que você os modificaria. Veja como adicionaríamos uma propriedade <code>&quot;bark&quot;</code> ao <code>ourDog</code> : <code>ourDog.bark = &quot;bow-wow&quot;;</code> ou <code>ourDog[&quot;bark&quot;] = &quot;bow-wow&quot;;</code> Agora, quando avaliarmos o nosso <code>ourDog.bark</code> , vamos pegar o latido dele, &quot;bow-wow&quot;. </section>

## Instructions
<section id="instructions"> Adicione uma propriedade <code>&quot;bark&quot;</code> ao <code>myDog</code> e configure-a para um som de cachorro, como &quot;woof&quot;. Você pode usar a notação de pontos ou colchetes. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Adicione a propriedade <code>&quot;bark&quot;</code> ao <code>myDog</code> .
    testString: 'assert(myDog.bark !== undefined, "Add the property <code>"bark"</code> to <code>myDog</code>.");'
  - text: Não adicione <code>&quot;bark&quot;</code> à seção de configuração
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
