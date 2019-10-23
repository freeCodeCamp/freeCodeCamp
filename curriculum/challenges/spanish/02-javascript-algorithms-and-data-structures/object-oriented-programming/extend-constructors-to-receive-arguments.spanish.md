---
id: 587d7dae367417b2b2512b79
title: Extend Constructors to Receive Arguments
challengeType: 1
videoUrl: ''
localeTitle: Extender constructores para recibir argumentos
---

## Description
<section id="description"> Los constructores de <code>Bird</code> y <code>Dog</code> del último desafío funcionaron bien. Sin embargo, tenga en cuenta que todas las <code>Birds</code> que se crean con el constructor <code>Bird</code> se denominan automáticamente Albert, son de color azul y tienen dos patas. ¿Y si quieres pájaros con diferentes valores de nombre y color? Es posible cambiar las propiedades de cada ave manualmente, pero eso sería mucho trabajo: <blockquote> dejar cisne = nuevo pájaro (); <br> swan.name = &quot;Carlos&quot;; <br> swan.color = &quot;blanco&quot;; </blockquote> Supongamos que estaba escribiendo un programa para realizar un seguimiento de cientos o incluso miles de aves diferentes en un aviario. Tomaría mucho tiempo crear todas las aves, luego cambiar las propiedades a diferentes valores para cada una. Para crear más fácilmente diferentes objetos <code>Bird</code> , puede diseñar su constructor Bird para que acepte parámetros: <blockquote> función pájaro (nombre, color) { <br> this.name = nombre; <br> this.color = color; <br> this.numLegs = 2; <br> } </blockquote> Luego pase los valores como argumentos para definir cada ave única en el constructor de <code>Bird</code> : <code>let cardinal = new Bird(&quot;Bruce&quot;, &quot;red&quot;);</code> Esto da una nueva instancia de <code>Bird</code> con las propiedades de nombre y color establecidas en Bruce y rojo, respectivamente. La propiedad <code>numLegs</code> todavía está establecida en 2. El <code>cardinal</code> tiene estas propiedades: <blockquote> cardinal.name // =&gt; Bruce <br> cardinal.color // =&gt; rojo <br> cardinal.numLegs // =&gt; 2 </blockquote> El constructor es más flexible. Ahora es posible definir las propiedades de cada <code>Bird</code> en el momento de su creación, que es una forma en que los constructores de JavaScript son tan útiles. Agrupan los objetos en función de las características y el comportamiento compartidos y definen un plan que automatiza su creación. </section>

## Instructions
<section id="instructions"> Crea otro constructor de <code>Dog</code> . Esta vez, <code>numLegs</code> para tomar el <code>name</code> y el <code>color</code> los parámetros, y <code>numLegs</code> que la propiedad <code>numLegs</code> fije en 4. Luego crea un nuevo <code>Dog</code> guardado en una variable <code>terrier</code> . Pásale dos cadenas como argumentos para las propiedades de <code>name</code> y <code>color</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>Dog</code> debe recibir un argumento para su <code>name</code> .
    testString: 'assert((new Dog("Clifford")).name === "Clifford", "<code>Dog</code> should receive an argument for <code>name</code>.");'
  - text: <code>Dog</code> debe recibir un argumento para el <code>color</code> .
    testString: 'assert((new Dog("Clifford", "yellow")).color === "yellow", "<code>Dog</code> should receive an argument for <code>color</code>.");'
  - text: <code>Dog</code> debe tener la propiedad <code>numLegs</code> establecida en 4.
    testString: 'assert((new Dog("Clifford")).numLegs === 4, "<code>Dog</code> should have property <code>numLegs</code> set to 4.");'
  - text: <code>terrier</code> debe ser creado usando el constructor <code>Dog</code> .
    testString: 'assert(terrier instanceof Dog, "<code>terrier</code> should be created using the <code>Dog</code> constructor.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog() {

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
