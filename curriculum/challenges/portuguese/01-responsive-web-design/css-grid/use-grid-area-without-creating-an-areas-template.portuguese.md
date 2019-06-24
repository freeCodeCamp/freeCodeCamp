---
id: 5a94fe2669fb03452672e45e
title: Use grid-area Without Creating an Areas Template
challengeType: 0
videoUrl: ''
localeTitle: Usar área de grade sem criar um modelo de áreas
---

## Description
<section id="description"> A propriedade de <code>grid-area</code> você aprendeu no último desafio pode ser usada de outra maneira. Se sua grade não tiver um modelo de áreas para referência, você pode criar uma área em tempo real para que um item seja colocado assim: <blockquote> item1 {grid-area: 1/1/2/4; } </blockquote> Isso está usando os números de linha que você aprendeu anteriormente para definir onde a área para este item será. Os números no exemplo acima representam esses valores: <blockquote> área de grade: linha horizontal para iniciar em / linha vertical para iniciar em / linha horizontal para terminar em / linha vertical para terminar em; </blockquote> Assim, o item no exemplo consumirá as linhas entre as linhas 1 e 2 e as colunas entre as linhas 1 e 4. </section>

## Instructions
<section id="instructions"> Usando a propriedade <code>grid-area</code> , coloque o elemento com a classe <code>item5</code> entre a terceira e a quarta linhas horizontais e entre a primeira e a quarta linhas verticais. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: A classe <code>item5</code> deve ter uma propriedade <code>grid-area</code> de tal forma que esteja entre a terceira e a quarta linhas horizontais e entre a primeira e a quarta linhas verticais.
    testString: 'assert(code.match(/.item5\s*?{[\s\S]*grid-area\s*?:\s*?3\s*?\/\s*?1\s*?\/\s*?4\s*?\/\s*?4\s*?;[\s\S]*}/gi));'
```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1{background:LightSkyBlue;}
  .item2{background:LightSalmon;}
  .item3{background:PaleTurquoise;}
  .item4{background:LightPink;}

  .item5 {
    background: PaleGreen;
    /* add your code below this line */


    /* add your code above this line */
  }

  .container {
    font-size: 40px;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-gap: 10px;
  }
</style>

<div class="container">
  <div class="item1">1</div>
  <div class="item2">2</div>
  <div class="item3">3</div>
  <div class="item4">4</div>
  <div class="item5">5</div>
</div>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
