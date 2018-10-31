---
id: 587d7b8b367417b2b2512b53
title: Use class Syntax to Define a Constructor Function
challengeType: 1
videoUrl: ''
localeTitle: Use a sintaxe de classe para definir uma função de construtor
---

## Description
<section id="description"> O ES6 fornece uma nova sintaxe para ajudar a criar objetos, usando a <dfn>classe de</dfn> palavras-chave. Isso deve ser notado, que a sintaxe da <code>class</code> é apenas uma sintaxe, e não uma implementação baseada em classe completa do paradigma orientado a objetos, diferente de linguagens como Java, Python ou Ruby etc. No ES5, geralmente definimos um construtor função e use a <code>new</code> palavra-chave para instanciar um objeto. <blockquote> var SpaceShuttle = function (targetPlanet) { <br> this.targetPlanet = targetPlanet; <br> } <br> var zeus = new SpaceShuttle (&#39;Jupiter&#39;); </blockquote> A sintaxe da classe simplesmente substitui a criação da função construtora: <blockquote> classe SpaceShuttle { <br> construtor (targetPlanet) { <br> this.targetPlanet = targetPlanet; <br> } <br> } <br> const zeus = novo SpaceShuttle (&#39;Jupiter&#39;); </blockquote> Observe que a palavra-chave <code>class</code> declara uma nova função, e um construtor foi adicionado, o qual seria invocado quando <code>new</code> é chamado - para criar um novo objeto. </section>

## Instructions
<section id="instructions"> Use a palavra-chave <code>class</code> e escreva um construtor apropriado para criar a classe <code>Vegetable</code> . O <code>Vegetable</code> permite criar um objeto vegetal, com um <code>name</code> propriedade, para ser passado ao construtor. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Vegetable</code> deve ser uma <code>class</code> com um método <code>constructor</code> definido.
    testString: 'assert(typeof Vegetable === "function" && typeof Vegetable.constructor === "function", "<code>Vegetable</code> should be a <code>class</code> with a defined <code>constructor</code> method.");'
  - text: palavra-chave <code>class</code> foi usada.
    testString: 'getUserInput => assert(getUserInput("index").match(/class/g),"<code>class</code> keyword was used.");'
  - text: <code>Vegetable</code> pode ser instanciado.
    testString: 'assert(() => {const a = new Vegetable("apple"); return typeof a === "object";},"<code>Vegetable</code> can be instantiated.");'
  - text: <code>carrot.name</code> deve devolver a <code>carrot</code> .
    testString: 'assert(carrot.name=="carrot","<code>carrot.name</code> should return <code>carrot</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function makeClass() {
  "use strict";
  /* Alter code below this line */

  /* Alter code above this line */
  return Vegetable;
}
const Vegetable = makeClass();
const carrot = new Vegetable('carrot');
console.log(carrot.name); // => should be 'carrot'

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
