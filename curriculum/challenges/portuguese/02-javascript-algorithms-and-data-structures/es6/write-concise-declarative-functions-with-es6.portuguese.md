---
id: 587d7b8b367417b2b2512b50
title: Write Concise Declarative Functions with ES6
challengeType: 1
videoUrl: ''
localeTitle: Escrever funções declarativas concisas com o ES6
---

## Description
<section id="description"> Ao definir funções dentro de objetos no ES5, precisamos usar a <code>function</code> palavra-chave da seguinte forma: <blockquote> const pessoa = { <br> nome: &quot;Taylor&quot;, <br> sayHello: function () { <br> return &quot;Olá! Meu nome é $ {this.name} .`; <br> } <br> }; </blockquote> Com ES6, você pode remover a palavra-chave da <code>function</code> e dois pontos ao definir funções em objetos. Aqui está um exemplo dessa sintaxe: <blockquote> const pessoa = { <br> nome: &quot;Taylor&quot;, <br> diga olá() { <br> return &quot;Olá! Meu nome é $ {this.name} .`; <br> } <br> }; </blockquote></section>

## Instructions
<section id="instructions"> Refatorar a função <code>setGear</code> dentro da <code>bicycle</code> do objeto para usar a sintaxe abreviada descrita acima. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Expressão de função tradicional não foi usada.
    testString: 'assert(!getUserInput("index").match(/function/),"Traditional <code>function</code> expression was not used.");'
  - text: <code>setGear</code> é uma função declarativa.
    testString: 'assert(typeof bicycle.setGear === "function" && getUserInput("index").match(/setGear\s*\(.+\)\s*\{/), "<code>setGear</code> is a declarative function.");'
  - text: <code>bicycle.setGear(48)</code> altera o valor da <code>gear</code> para 48.
    testString: 'assert((new bicycle.setGear(48)).gear === 48, "<code>bicycle.setGear(48)</code> changes the <code>gear</code> value to 48.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
// change code below this line
const bicycle = {
  gear: 2,
  setGear: function(newGear) {
    "use strict";
    this.gear = newGear;
  }
};
// change code above this line
bicycle.setGear(3);
console.log(bicycle.gear);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
