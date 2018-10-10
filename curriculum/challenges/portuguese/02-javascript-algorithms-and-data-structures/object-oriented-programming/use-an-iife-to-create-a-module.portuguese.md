---
id: 587d7db2367417b2b2512b8c
title: Use an IIFE to Create a Module
challengeType: 1
videoUrl: ''
localeTitle: Use um IIFE para criar um módulo
---

## Description
<section id="description"> Uma <code>immediately invoked function expression</code> ( <code>IIFE</code> ) é frequentemente usada para agrupar a funcionalidade relacionada em um único objeto ou <code>module</code> . Por exemplo, um desafio anterior definiu dois mixins: <blockquote> function glideMixin (obj) { <br> obj.glide = function () { <br> console.log (&quot;planando na água&quot;); <br> }; <br> } <br> função flyMixin (obj) { <br> obj.fly = function () { <br> console.log (&quot;Voando, wooosh!&quot;); <br> }; <br> } </blockquote> Podemos agrupar esses <code>mixins</code> em um módulo da seguinte maneira: <blockquote> deixe motionModule = (function () { <br> Retorna { <br> glideMixin: function (obj) { <br> obj.glide = function () { <br> console.log (&quot;planando na água&quot;); <br> }; <br> } <br> flyMixin: function (obj) { <br> obj.fly = function () { <br> console.log (&quot;Voando, wooosh!&quot;); <br> }; <br> } <br> } <br> }) (); // Os dois parênteses fazem com que a função seja imediatamente invocada </blockquote> Note-se que você tem uma <code>immediately invoked function expression</code> ( <code>IIFE</code> ) que retorna um objeto <code>motionModule</code> . Este objeto retornado contém todos os comportamentos <code>mixin</code> como propriedades do objeto. A vantagem do padrão de <code>module</code> é que todos os comportamentos de movimento podem ser empacotados em um único objeto que pode ser usado por outras partes do seu código. Aqui está um exemplo usando: <blockquote> motionModule.glideMixin (duck); <br> duck.glide (); </blockquote></section>

## Instructions
<section id="instructions"> Crie um <code>module</code> chamado <code>funModule</code> para envolver os dois <code>mixins</code> <code>isCuteMixin</code> e <code>singMixin</code> . <code>funModule</code> deve retornar um objeto. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>funModule</code> deve ser definido e retornar um objeto.
    testString: 'assert(typeof funModule === "object", "<code>funModule</code> should be defined and return an object.");'
  - text: <code>funModule.isCuteMixin</code> deve acessar uma função.
    testString: 'assert(typeof funModule.isCuteMixin === "function", "<code>funModule.isCuteMixin</code> should access a function.");'
  - text: <code>funModule.singMixin</code> deve acessar uma função.
    testString: 'assert(typeof funModule.singMixin === "function", "<code>funModule.singMixin</code> should access a function.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let isCuteMixin = function(obj) {
  obj.isCute = function() {
    return true;
  };
};
let singMixin = function(obj) {
  obj.sing = function() {
    console.log("Singing to an awesome tune");
  };
};

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
