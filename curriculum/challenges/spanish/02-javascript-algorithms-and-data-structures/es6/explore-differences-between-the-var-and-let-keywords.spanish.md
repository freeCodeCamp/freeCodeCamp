---
id: 587d7b87367417b2b2512b3f
title: Explore Differences Between the var and let Keywords
challengeType: 1
videoUrl: ''
localeTitle: Explora las diferencias entre la var y deja palabras clave
---

## Description
<section id="description"> Uno de los mayores problemas con la declaración de variables con la palabra clave <code>var</code> es que puede sobrescribir las declaraciones de variables sin un error. <blockquote> var camper = &#39;James&#39;; <br> var camper = &#39;David&#39;; <br> console.log (camper); <br> // logs &#39;David&#39; </blockquote> Como puede ver en el código anterior, la variable <code>camper</code> se declaró originalmente como <code>James</code> y luego se anuló para ser <code>David</code> . En una aplicación pequeña, es posible que no tenga este tipo de problema, pero cuando su código se hace más grande, puede sobrescribir accidentalmente una variable que no pretendía sobrescribir. Debido a que este comportamiento no produce un error, buscar y corregir errores se vuelve más difícil. <br> Se introdujo una nueva palabra clave llamada <code>let</code> en ES6 para resolver este problema potencial con la palabra clave <code>var</code> . Si tuviera que reemplazar <code>var</code> por <code>let</code> en las declaraciones de variables del código anterior, el resultado sería un error. <blockquote> dejar camper = &#39;James&#39;; <br> dejar camper = &#39;David&#39;; // arroja un error </blockquote> Este error se puede ver en la consola de su navegador. Así que, a diferencia de <code>var</code> , cuando se usa <code>let</code> , una variable con el mismo nombre solo se puede declarar una vez. Tenga en cuenta el <code>&quot;use strict&quot;</code> . Esto habilita el modo estricto, que detecta errores comunes de codificación y acciones &quot;inseguras&quot;. Por ejemplo: <blockquote> &quot;uso estricto&quot;; <br> x = 3,14; // arroja un error porque no se declara x </blockquote></section>

## Instructions
<section id="instructions"> Actualice el código para que solo use la palabra clave <code>let</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: <code>var</code> no existe en el código.
    testString: 'getUserInput => assert(!getUserInput("index").match(/var/g),"<code>var</code> does not exist in code.");'
  - text: <code>catName</code> debe ser <code>Oliver</code> .
    testString: 'assert(catName === "Oliver", "<code>catName</code> should be <code>Oliver</code>.");'
  - text: <code>quote</code> debe ser <code>&quot;Oliver says Meow!&quot;</code>
    testString: 'assert(quote === "Oliver says Meow!", "<code>quote</code> should be <code>"Oliver says Meow!"</code>");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var catName;
var quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
