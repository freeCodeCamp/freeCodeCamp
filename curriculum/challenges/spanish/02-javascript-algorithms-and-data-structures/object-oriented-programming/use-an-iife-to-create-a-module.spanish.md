---
id: 587d7db2367417b2b2512b8c
title: Use an IIFE to Create a Module
challengeType: 1
videoUrl: ''
localeTitle: Utilice un IIFE para crear un módulo
---

## Description
<section id="description"> Una <code>immediately invoked function expression</code> ( <code>IIFE</code> ) se usa a menudo para agrupar la funcionalidad relacionada en un solo objeto o <code>module</code> . Por ejemplo, un desafío anterior definió dos mixins: <blockquote> función glideMixin (obj) { <br> obj.glide = function () { <br> console.log (&quot;Deslizamiento en el agua&quot;); <br> }; <br> } <br> función flyMixin (obj) { <br> obj.fly = function () { <br> console.log (&quot;Flying, wooosh!&quot;); <br> }; <br> } </blockquote> Podemos agrupar estos <code>mixins</code> en un módulo de la siguiente manera: <blockquote> deja motionModule = (function () { <br> regreso { <br> glideMixin: function (obj) { <br> obj.glide = function () { <br> console.log (&quot;Deslizamiento en el agua&quot;); <br> }; <br> } <br> flyMixin: function (obj) { <br> obj.fly = function () { <br> console.log (&quot;Flying, wooosh!&quot;); <br> }; <br> } <br> } <br> }) (); // Los dos paréntesis provocan que la función se invoque inmediatamente. </blockquote> Tenga en cuenta que tiene una <code>immediately invoked function expression</code> ( <code>IIFE</code> ) que devuelve un objeto <code>motionModule</code> . Este objeto devuelto contiene todos los comportamientos de <code>mixin</code> como propiedades del objeto. La ventaja del patrón del <code>module</code> es que todos los comportamientos de movimiento se pueden empaquetar en un solo objeto que luego pueden ser utilizados por otras partes de su código. Aquí hay un ejemplo usándolo: <blockquote> motionModule.glideMixin (pato); <br> duck.glide (); </blockquote></section>

## Instructions
<section id="instructions"> Cree un <code>module</code> llamado <code>funModule</code> para envolver los dos <code>mixins</code> <code>isCuteMixin</code> y <code>singMixin</code> . <code>funModule</code> debería devolver un objeto. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>funModule</code> debe definirse y devolver un objeto.
    testString: 'assert(typeof funModule === "object", "<code>funModule</code> should be defined and return an object.");'
  - text: <code>funModule.isCuteMixin</code> debe acceder a una función.
    testString: 'assert(typeof funModule.isCuteMixin === "function", "<code>funModule.isCuteMixin</code> should access a function.");'
  - text: <code>funModule.singMixin</code> debe acceder a una función.
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
