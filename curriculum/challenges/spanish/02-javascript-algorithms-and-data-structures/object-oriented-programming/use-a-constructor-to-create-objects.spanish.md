---
id: 587d7dad367417b2b2512b78
title: Use a Constructor to Create Objects
challengeType: 1
videoUrl: ''
localeTitle: Usa un constructor para crear objetos
---

## Description
<section id="description"> Aquí está el constructor de <code>Bird</code> del desafío anterior: <blockquote> función Bird () { <br> this.name = &quot;Albert&quot;; <br> this.color = &quot;blue&quot;; <br> this.numLegs = 2; <br> // &quot;esto&quot; dentro del constructor siempre se refiere al objeto que se está creando <br> } <br><br> Deje que blueBird = new Bird (); </blockquote> Observe que el <code>new</code> operador se utiliza al llamar a un constructor. Esto le dice a JavaScript que cree una nueva <code>instance</code> de <code>Bird</code> llamada <code>blueBird</code> . Sin el <code>new</code> operador, <code>this</code> dentro del constructor no apuntaría al objeto recién creado, dando resultados inesperados. Ahora <code>blueBird</code> tiene todas las propiedades definidas dentro del constructor de <code>Bird</code> : <blockquote> blueBird.name; // =&gt; Albert <br> blueBird.color; // =&gt; azul <br> blueBird.numLegs; // =&gt; 2 </blockquote> Al igual que cualquier otro objeto, se puede acceder y modificar sus propiedades: <blockquote> blueBird.name = &#39;Elvira&#39;; <br> blueBird.name; // =&gt; Elvira </blockquote></section>

## Instructions
<section id="instructions"> Usa el constructor <code>Dog</code> de la última lección para crear una nueva instancia de <code>Dog</code> , asignándola a un <code>hound</code> variable. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>hound</code> debe ser creado usando el constructor de <code>Dog</code> .
    testString: 'assert(hound instanceof Dog, "<code>hound</code> should be created using the <code>Dog</code> constructor.");'
  - text: Tu código debe usar el <code>new</code> operador para crear una <code>instance</code> de <code>Dog</code> .
    testString: 'assert(code.match(/new/g), "Your code should use the <code>new</code> operator to create an <code>instance</code> of <code>Dog</code>.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
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
