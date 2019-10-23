---
id: 56bbb991ad1ed5201cd392d1
title: Updating Object Properties
challengeType: 1
videoUrl: ''
localeTitle: Atualizando Propriedades do Objeto
---

## Description
<section id="description"> Depois de criar um objeto JavaScript, você poderá atualizar suas propriedades a qualquer momento, da mesma forma que atualizaria qualquer outra variável. Você pode usar a notação de pontos ou colchetes para atualizar. Por exemplo, vamos dar uma olhada no <code>ourDog</code> : <blockquote> var ourDog = { <br> &quot;nome&quot;: &quot;Camper&quot;, <br> &quot;pernas&quot;: 4, <br> &quot;coroa&quot;: 1, <br> &quot;amigos&quot;: [&quot;tudo!&quot;] <br> }; </blockquote> Desde que ele é um cão particularmente feliz, vamos mudar seu nome para &quot;Happy Camper&quot;. Aqui está como nós atualizamos a propriedade do nome do objeto: <code>ourDog.name = &quot;Happy Camper&quot;;</code> or <code>ourDog[&quot;name&quot;] = &quot;Happy Camper&quot;;</code> Agora, quando avaliamos <code>ourDog.name</code> , em vez de obter &quot;Camper&quot;, obteremos seu novo nome, &quot;Happy Camper&quot;. </section>

## Instructions
<section id="instructions"> Atualize a <code>myDog</code> do nome do objeto <code>myDog</code> . Vamos mudar o nome dela de &quot;Coder&quot; para &quot;Happy Coder&quot;. Você pode usar a notação de pontos ou colchetes. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Atualize a <code>myDog</code> <code>&quot;name&quot;</code> do <code>myDog</code> para igualar &quot;Happy Coder&quot;.
    testString: 'assert(/happy coder/gi.test(myDog.name), "Update <code>myDog</code>&apos;s <code>"name"</code> property to equal "Happy Coder".");'
  - text: Não edite a definição <code>myDog</code>
    testString: 'assert(/"name": "Coder"/.test(code), "Do not edit the <code>myDog</code> definition");'

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
