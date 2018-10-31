---
id: 5664820f61c48e80c9fa476c
title: Golf Code
challengeType: 1
videoUrl: ''
localeTitle: Codigo de golf
---

## Description
<section id="description"> En el juego de <a href="https://en.wikipedia.org/wiki/Golf" target="_blank">golf,</a> cada hoyo tiene un <code>par</code> significa el número promedio de <code>strokes</code> que se espera que un golfista realice para hundir la bola en un hoyo para completar el juego. Dependiendo de qué tan por encima o <code>par</code> debajo de tus <code>strokes</code> , hay un apodo diferente. Su función se pasará <code>par</code> y <code>strokes</code> argumentos. Devuelva la cadena correcta de acuerdo con esta tabla que enumera los trazos en orden de prioridad; arriba (más alto) a abajo (más bajo): <table class="table table-striped"><thead><tr><th> Trazos </th><th> Regreso </th></tr></thead><tbody><tr><td> 1 </td><td> &quot;¡Hoyo en uno!&quot; </td></tr><tr><td> &lt;= par - 2 </td><td> &quot;Águila&quot; </td></tr><tr><td> par - 1 </td><td> &quot;Pajarito&quot; </td></tr><tr><td> par </td><td> &quot;Par&quot; </td></tr><tr><td> par + 1 </td><td> &quot;Espectro&quot; </td></tr><tr><td> par + 2 </td><td> &quot;Doble Bogey&quot; </td></tr><tr><td> &gt; = par + 3 </td><td> &quot;¡Vete a casa!&quot; </td></tr></tbody></table> <code>par</code> y <code>strokes</code> siempre serán numéricos y positivos. Hemos agregado una matriz de todos los nombres para su conveniencia. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>golfScore(4, 1)</code> debe devolver &quot;Hole-in-one!&quot;'
    testString: 'assert(golfScore(4, 1) === "Hole-in-one!", "<code>golfScore(4, 1)</code> should return "Hole-in-one!"");'
  - text: '<code>golfScore(4, 2)</code> debe devolver &quot;Eagle&quot;'
    testString: 'assert(golfScore(4, 2) === "Eagle", "<code>golfScore(4, 2)</code> should return "Eagle"");'
  - text: '<code>golfScore(5, 2)</code> debe devolver &quot;Eagle&quot;'
    testString: 'assert(golfScore(5, 2) === "Eagle", "<code>golfScore(5, 2)</code> should return "Eagle"");'
  - text: '<code>golfScore(4, 3)</code> debe devolver &quot;Birdie&quot;'
    testString: 'assert(golfScore(4, 3) === "Birdie", "<code>golfScore(4, 3)</code> should return "Birdie"");'
  - text: '<code>golfScore(4, 4)</code> debe devolver &quot;Par&quot;'
    testString: 'assert(golfScore(4, 4) === "Par", "<code>golfScore(4, 4)</code> should return "Par"");'
  - text: '<code>golfScore(1, 1)</code> debe devolver &quot;Hole-in-one!&quot;'
    testString: 'assert(golfScore(1, 1) === "Hole-in-one!", "<code>golfScore(1, 1)</code> should return "Hole-in-one!"");'
  - text: '<code>golfScore(5, 5)</code> debe devolver &quot;Par&quot;'
    testString: 'assert(golfScore(5, 5) === "Par", "<code>golfScore(5, 5)</code> should return "Par"");'
  - text: '<code>golfScore(4, 5)</code> debe devolver &quot;Bogey&quot;'
    testString: 'assert(golfScore(4, 5) === "Bogey", "<code>golfScore(4, 5)</code> should return "Bogey"");'
  - text: '<code>golfScore(4, 6)</code> debe devolver &quot;Double Bogey&quot;'
    testString: 'assert(golfScore(4, 6) === "Double Bogey", "<code>golfScore(4, 6)</code> should return "Double Bogey"");'
  - text: '<code>golfScore(4, 7)</code> debe devolver &quot;Go Home!&quot;'
    testString: 'assert(golfScore(4, 7) === "Go Home!", "<code>golfScore(4, 7)</code> should return "Go Home!"");'
  - text: '<code>golfScore(5, 9)</code> debe devolver &quot;Go Home!&quot;'
    testString: 'assert(golfScore(5, 9) === "Go Home!", "<code>golfScore(5, 9)</code> should return "Go Home!"");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='js-seed'>

```js
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line


  return "Change Me";
  // Only change code above this line
}

// Change these values to test
golfScore(5, 4);

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
