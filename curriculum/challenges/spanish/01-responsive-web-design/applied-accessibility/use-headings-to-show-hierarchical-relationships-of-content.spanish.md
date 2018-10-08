---
id: 587d774d367417b2b2512a9e
title: Use Headings to Show Hierarchical Relationships of Content
localeTitle: Usar encabezados para mostrar relaciones jerárquicas de contenido
challengeType: 0
videoUrl: ''
---

## Description
<section id='description'> 
encabezados (elementos <code>h1</code> a <code>h6</code> ) son etiquetas de trabajo que ayudan a proporcionar estructura y etiquetado a su contenido. Los lectores de pantalla pueden configurarse para leer solo los encabezados de una página, de modo que el usuario obtenga un resumen. Esto significa que es importante que las etiquetas de encabezado en su marca tengan un significado semántico y se relacionen entre sí, no para ser elegidas simplemente por sus valores de tamaño. 
<em>Significado semántico significa</em> que la etiqueta que usa alrededor del contenido indica el tipo de información que contiene. 
Si estuviera escribiendo un artículo con una introducción, un cuerpo y una conclusión, no tendría mucho sentido poner la conclusión como una subsección del cuerpo en su esquema. Debe ser su propia sección. Del mismo modo, las etiquetas de encabezado en una página web deben ir en orden e indicar las relaciones jerárquicas de su contenido. 
encabezados con rango igual (o superior) inician nuevas secciones implícitas, los encabezados con subsecciones de inicio de rango inferior del anterior. 
Como ejemplo, una página con un elemento <code>h2</code> seguido de varias subsecciones etiquetadas con etiquetas <code>h4</code> confundiría a un usuario lector de pantalla. Con seis opciones, es tentador usar una etiqueta porque se ve mejor en un navegador, pero puedes usar CSS para editar el tamaño relativo. 
Un punto final, cada página debe tener siempre un elemento <code>h1</code> (y solo uno), que es el tema principal de su contenido. Este y los otros encabezados son utilizados en parte por los motores de búsqueda para comprender el tema de la página. 
</section>

## Instructions
<section id='instructions'> 
Camper Cat quiere una página en su sitio dedicada a convertirse en ninja. Ayúdelo a arreglar los títulos para que su marca dé un significado semántico al contenido y muestre las relaciones correctas entre padres e hijos de sus secciones. Cambie todas las etiquetas <code>h5</code> al nivel de título adecuado para indicar que son subsecciones de las <code>h2</code> . 
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Su código debe tener seis etiquetas <code>h3</code> .
    testString: 'assert($("h3").length === 6, "Your code should have six <code>h3</code> tags.");'
  - text: Su código no debe tener ninguna etiqueta <code>h5</code> .
    testString: 'assert($("h5").length === 0, "Your code should not have any <code>h5</code> tags.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<h1>How to Become a Ninja</h1>
<main>
  <h2>Learn the Art of Moving Stealthily</h2>
  <h5>How to Hide in Plain Sight</h5>
  <h5>How to Climb a Wall</h5>

  <h2>Learn the Art of Battle</h2>
  <h5>How to Strengthen your Body</h5>
  <h5>How to Fight like a Ninja</h5>

  <h2>Learn the Art of Living with Honor</h2>
  <h5>How to Breathe Properly</h5>
  <h5>How to Simplify your Life</h5>
</main>
```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
