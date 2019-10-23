---
id: 587d7db2367417b2b2512b8a
title: Use Closure to Protect Properties Within an Object from Being Modified Externally
challengeType: 1
videoUrl: ''
localeTitle: Utilice el cierre para proteger las propiedades dentro de un objeto de ser modificado externamente
---

## Description
<section id="description"> En el desafío anterior, el <code>bird</code> tenía un <code>name</code> propiedad pública. Se considera público porque se puede acceder y cambiar fuera de la definición de <code>bird</code> . <blockquote> bird.name = &quot;Duffy&quot;; </blockquote> Por lo tanto, cualquier parte de su código puede cambiar fácilmente el nombre de <code>bird</code> a cualquier valor. Piense en cosas como contraseñas y cuentas bancarias que se puedan cambiar fácilmente en cualquier parte de su base de código. Eso podría causar muchos problemas. La forma más sencilla de hacer que las propiedades sean privadas es crear una variable dentro de la función constructora. Esto cambia el alcance de esa variable para que esté dentro de la función de constructor en lugar de estar disponible globalmente. De esta manera, a la propiedad solo se puede acceder y cambiar mediante métodos también dentro de la función de constructor. <blockquote> función Bird () { <br> dejar hatchedEgg = 10; // propiedad privada <br><br> this.getHatchedEggCount = function () {// método disponible públicamente que un objeto de pájaro puede usar <br> return hatchedEgg; <br> }; <br> } <br> vamos ducky = nuevo pájaro (); <br> ducky.getHatchedEggCount (); // devuelve 10 </blockquote> Aquí <code>getHachedEggCount</code> es un método privilegiado, porque tiene acceso a la variable privada <code>hatchedEgg</code> . Esto es posible porque <code>hatchedEgg</code> se declara en el mismo contexto que <code>getHachedEggCount</code> . En JavaScript, una función siempre tiene acceso al contexto en el que se creó. Esto se llama <code>closure</code> . </section>

## Instructions
<section id="instructions"> Cambie cómo se declara el <code>weight</code> en la función <code>Bird</code> para que sea una variable privada. Luego, cree un método <code>getWeight</code> que devuelva el valor de <code>weight</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: La propiedad de <code>weight</code> debe ser una variable privada.
    testString: 'assert(!code.match(/this\.weight/g), "The <code>weight</code> property should be a private variable.");'
  - text: Su código debe crear un método en <code>Bird</code> llamado <code>getWeight</code> que devuelva el <code>weight</code> .
    testString: 'assert((new Bird()).getWeight() === 15, "Your code should create a method in <code>Bird</code> called <code>getWeight</code> that returns the <code>weight</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Bird() {
  this.weight = 15;


}

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
