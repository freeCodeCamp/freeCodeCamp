---
id: 587d7db2367417b2b2512b8c
title: Use an IIFE to Create a Module
localeTitle: Utilice un IIFE para crear un módulo
challengeType: 1
---

## Description
<section id='description'> 
Una <code>immediately invoked function expression</code> ( <code>IIFE</code> ) se usa a menudo para agrupar la funcionalidad relacionada en un solo objeto o <code>module</code> . Por ejemplo, un desafío anterior definió dos mixins: 
<blockquote>function glideMixin(obj) {<br>&nbsp;&nbsp;obj.glide = function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("Gliding on the water");<br>&nbsp;&nbsp;};<br>}<br>function flyMixin(obj) {<br>&nbsp;&nbsp;obj.fly = function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;console.log("Flying, wooosh!");<br>&nbsp;&nbsp;};<br>}</blockquote> 
Podemos agrupar estos <code>mixins</code> en un módulo de la siguiente manera: 
<blockquote>let motionModule = (function () {<br>&nbsp;&nbsp;return {<br>&nbsp;&nbsp;&nbsp;&nbsp;glideMixin: function (obj) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj.glide = function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log("Gliding on the water");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};<br>&nbsp;&nbsp;&nbsp;&nbsp;},<br>&nbsp;&nbsp;&nbsp;&nbsp;flyMixin: function(obj) {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;obj.fly = function() {<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;console.log("Flying, wooosh!");<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;};<br>&nbsp;&nbsp;&nbsp;&nbsp;}<br>&nbsp;&nbsp;}<br>}) (); // The two parentheses cause the function to be immediately invoked</blockquote> 
Tenga en cuenta que tiene una <code>immediately invoked function expression</code> ( <code>IIFE</code> ) que devuelve un objeto <code>motionModule</code> . Este objeto devuelto contiene todos los comportamientos de <code>mixin</code> como propiedades del objeto. 
La ventaja del patrón del <code>module</code> es que todos los comportamientos de movimiento se pueden empaquetar en un solo objeto que luego pueden ser utilizados por otras partes de su código. Aquí hay un ejemplo usándolo: 
<blockquote>motionModule.glideMixin(duck);<br>duck.glide();</blockquote> 
</section>

## Instructions
<section id='instructions'> 
Crea un <code>module</code> llamado <code>funModule</code> para envolver los dos <code>mixins</code> <code>isCuteMixin</code> y <code>singMixin</code> . <code>funModule</code> debería devolver un objeto. 
</section>

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
const funModule = (function () {
  return {
    isCuteMixin: obj => {
      obj.isCute = () => true;
    },
    singMixin: obj => {
      obj.sing = () => console.log("Singing to an awesome tune");
    }
  };
})();
```

</section>
