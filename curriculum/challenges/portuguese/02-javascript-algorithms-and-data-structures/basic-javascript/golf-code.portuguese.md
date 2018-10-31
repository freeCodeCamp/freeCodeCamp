---
id: 5664820f61c48e80c9fa476c
title: Golf Code
challengeType: 1
videoUrl: ''
localeTitle: Código de Golfe
---

## Description
<section id="description"> No jogo de <a href="https://en.wikipedia.org/wiki/Golf" target="_blank">golfe,</a> cada buraco tem um <code>par</code> significa o número médio de <code>strokes</code> um golfista deve fazer para afundar a bola em um buraco para completar a jogada. Dependendo de quão longe acima ou abaixo <code>par</code> seus <code>strokes</code> são, há um apelido diferente. Sua função receberá argumentos <code>par</code> e <code>strokes</code> . Retorna a string correta de acordo com esta tabela que lista os traços em ordem de prioridade; topo (maior) para baixo (menor): <table class="table table-striped"><thead><tr><th> Traços </th><th> Retorna </th></tr></thead><tbody><tr><td> 1 </td><td> &quot;Buraco-em-um!&quot; </td></tr><tr><td> &lt;= par - 2 </td><td> &quot;Águia&quot; </td></tr><tr><td> par - 1 </td><td> &quot;Passarinho&quot; </td></tr><tr><td> par </td><td> &quot;Par&quot; </td></tr><tr><td> par + 1 </td><td> &quot;Bogey&quot; </td></tr><tr><td> par + 2 </td><td> &quot;Bogey Duplo&quot; </td></tr><tr><td> &gt; par + 3 </td><td> &quot;Ir para casa!&quot; </td></tr></tbody></table> <code>par</code> e <code>strokes</code> serão sempre numéricos e positivos. Nós adicionamos uma matriz de todos os nomes para sua conveniência. </section>

## Instructions
<section id="instructions">
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: '<code>golfScore(4, 1)</code> deve retornar &quot;Hole-in-one!&quot;'
    testString: 'assert(golfScore(4, 1) === "Hole-in-one!", "<code>golfScore(4, 1)</code> should return "Hole-in-one!"");'
  - text: '<code>golfScore(4, 2)</code> deve retornar &quot;Eagle&quot;'
    testString: 'assert(golfScore(4, 2) === "Eagle", "<code>golfScore(4, 2)</code> should return "Eagle"");'
  - text: '<code>golfScore(5, 2)</code> deve retornar &quot;Eagle&quot;'
    testString: 'assert(golfScore(5, 2) === "Eagle", "<code>golfScore(5, 2)</code> should return "Eagle"");'
  - text: '<code>golfScore(4, 3)</code> deve retornar &quot;Birdie&quot;'
    testString: 'assert(golfScore(4, 3) === "Birdie", "<code>golfScore(4, 3)</code> should return "Birdie"");'
  - text: '<code>golfScore(4, 4)</code> deve retornar &quot;Par&quot;'
    testString: 'assert(golfScore(4, 4) === "Par", "<code>golfScore(4, 4)</code> should return "Par"");'
  - text: '<code>golfScore(1, 1)</code> deve retornar &quot;Hole-in-one!&quot;'
    testString: 'assert(golfScore(1, 1) === "Hole-in-one!", "<code>golfScore(1, 1)</code> should return "Hole-in-one!"");'
  - text: '<code>golfScore(5, 5)</code> deve retornar &quot;Par&quot;'
    testString: 'assert(golfScore(5, 5) === "Par", "<code>golfScore(5, 5)</code> should return "Par"");'
  - text: '<code>golfScore(4, 5)</code> deve retornar &quot;Bogey&quot;'
    testString: 'assert(golfScore(4, 5) === "Bogey", "<code>golfScore(4, 5)</code> should return "Bogey"");'
  - text: '<code>golfScore(4, 6)</code> deve retornar &quot;Double Bogey&quot;'
    testString: 'assert(golfScore(4, 6) === "Double Bogey", "<code>golfScore(4, 6)</code> should return "Double Bogey"");'
  - text: '<code>golfScore(4, 7)</code> deve retornar &quot;Go Home!&quot;'
    testString: 'assert(golfScore(4, 7) === "Go Home!", "<code>golfScore(4, 7)</code> should return "Go Home!"");'
  - text: '<code>golfScore(5, 9)</code> deve retornar &quot;Go Home!&quot;'
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
