---
id: 587d7db2367417b2b2512b89
title: Use a Mixin to Add Common Behavior Between Unrelated Objects
challengeType: 1
videoUrl: ''
localeTitle: Use um Mixin para adicionar um comportamento comum entre objetos não relacionados
---

## Description
<section id="description"> Como você viu, o comportamento é compartilhado por herança. No entanto, há casos em que a herança não é a melhor solução. Herança não funciona bem para objetos não relacionados, como <code>Bird</code> e <code>Airplane</code> . Ambos podem voar, mas um <code>Bird</code> não é um tipo de <code>Airplane</code> e vice-versa. Para objetos não relacionados, é melhor usar <code>mixins</code> . Um <code>mixin</code> permite que outros objetos usem uma coleção de funções. <blockquote> deixe flyMixin = function (obj) { <br> obj.fly = function () { <br> console.log (&quot;Voando, wooosh!&quot;); <br> } <br> }; </blockquote> O <code>flyMixin</code> pega qualquer objeto e fornece o método <code>fly</code> . <blockquote> deixe pássaro = { <br> nome: &quot;Donald&quot;, <br> numLegs: 2 <br> }; <br><br> vamos avião = { <br> modelo: &quot;777&quot;, <br> numPassengers: 524 <br> }; <br><br> flyMixin (ave); <br> flyMixin (avião); </blockquote> Aqui, <code>bird</code> e <code>plane</code> são passados ​​para <code>flyMixin</code> , que então atribui a função <code>fly</code> a cada objeto. Agora <code>bird</code> e <code>plane</code> podem voar: <blockquote> bird.fly (); // imprime &quot;Voando, wooosh!&quot; <br> plane.fly (); // imprime &quot;Voando, wooosh!&quot; </blockquote> Note como o <code>mixin</code> permite a mesma <code>fly</code> método para ser reutilizado por objetos não relacionados <code>bird</code> e <code>plane</code> . </section>

## Instructions
<section id="instructions"> Criar um <code>mixin</code> chamado <code>glideMixin</code> que define um método chamado <code>glide</code> . Em seguida, use o <code>glideMixin</code> para dar ao <code>bird</code> e ao <code>boat</code> a capacidade de deslizar. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve declarar uma variável <code>glideMixin</code> que é uma função.
    testString: 'assert(typeof glideMixin === "function", "Your code should declare a <code>glideMixin</code> variable that is a function.");'
  - text: Seu código deve usar o <code>glideMixin</code> no objeto <code>bird</code> para fornecer o método <code>glide</code> .
    testString: 'assert(typeof bird.glide === "function", "Your code should use the <code>glideMixin</code> on the <code>bird</code> object to give it the <code>glide</code> method.");'
  - text: Seu código deve usar o <code>glideMixin</code> no objeto <code>boat</code> para fornecer o método <code>glide</code> .
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
