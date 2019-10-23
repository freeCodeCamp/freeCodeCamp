---
id: 587d7db2367417b2b2512b89
title: Use a Mixin to Add Common Behavior Between Unrelated Objects
challengeType: 1
videoUrl: ''
localeTitle: Use un Mixin para agregar un comportamiento común entre objetos no relacionados
---

## Description
<section id="description"> Como has visto, el comportamiento se comparte a través de la herencia. Sin embargo, hay casos en que la herencia no es la mejor solución. La herencia no funciona bien para objetos no relacionados como <code>Bird</code> y <code>Airplane</code> . Ambos pueden volar, pero un <code>Bird</code> no es un tipo de <code>Airplane</code> y viceversa. Para objetos no relacionados, es mejor usar <code>mixins</code> . Una <code>mixin</code> permite que otros objetos usen una colección de funciones. <blockquote> vamos a flyMixin = function (obj) { <br> obj.fly = function () { <br> console.log (&quot;Flying, wooosh!&quot;); <br> } <br> }; </blockquote> El <code>flyMixin</code> toma cualquier objeto y le da el método de <code>fly</code> . <blockquote> dejar ave = { <br> nombre: &quot;donald&quot;, <br> NumLegs: 2 <br> }; <br><br> dejar plano = { <br> modelo: &quot;777&quot;, <br> NumPasajeros: 524 <br> }; <br><br> flyMixin (pájaro); <br> flyMixin (plano); </blockquote> Aquí el <code>bird</code> y el <code>plane</code> pasan a <code>flyMixin</code> , que luego asigna la función de <code>fly</code> a cada objeto. Ahora tanto el <code>bird</code> como el <code>plane</code> pueden volar: <blockquote> bird.fly (); // impresiones &quot;Flying, wooosh!&quot; <br> plane.fly (); // impresiones &quot;Flying, wooosh!&quot; </blockquote> Observe cómo la <code>mixin</code> permite que el mismo método de <code>fly</code> sea ​​reutilizado por objetos no relacionados, <code>bird</code> y <code>plane</code> . </section>

## Instructions
<section id="instructions"> Crear un <code>mixin</code> llamado <code>glideMixin</code> que define un método llamado <code>glide</code> . Luego use el <code>glideMixin</code> para que tanto el <code>bird</code> como el <code>boat</code> puedan deslizarse. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe declarar una variable <code>glideMixin</code> que es una función.
    testString: 'assert(typeof glideMixin === "function", "Your code should declare a <code>glideMixin</code> variable that is a function.");'
  - text: Su código debe usar el <code>glideMixin</code> en el objeto <code>bird</code> para darle el método de <code>glide</code> .
    testString: 'assert(typeof bird.glide === "function", "Your code should use the <code>glideMixin</code> on the <code>bird</code> object to give it the <code>glide</code> method.");'
  - text: Su código debe usar el <code>glideMixin</code> en el objeto del <code>boat</code> para darle el método de <code>glide</code> .
    testString: 'assert(typeof boat.glide === "function", "Your code should use the <code>glideMixin</code> on the <code>boat</code> object to give it the <code>glide</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Add your code below this line

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
