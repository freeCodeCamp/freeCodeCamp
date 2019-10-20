---
id: 5a94fe7769fb03452672e463
title: Use Media Queries to Create Responsive Layouts
challengeType: 0
videoUrl: ''
localeTitle: Use consultas de mídia para criar layouts responsivos
---

## Description
<section id="description"> A CSS Grid pode ser uma maneira fácil de tornar seu site mais responsivo usando consultas de mídia para reorganizar as áreas da grade, alterar as dimensões de uma grade e reorganizar o posicionamento dos itens. Na visualização, quando a largura da janela de visualização é de 300 px ou mais, o número de colunas muda de 1 para 2. A área de publicidade ocupa a coluna da esquerda completamente. </section>

## Instructions
<section id="instructions"> Quando a largura da janela de visualização for de <code>400px</code> ou mais, faça a área de cabeçalho ocupar completamente a linha superior e a área de rodapé ocupará completamente a linha inferior. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'Quando a <code>container</code> visualização é de <code>400px</code> ou mais, a classe de <code>container</code> deve ter uma propriedade de <code>grid-template-areas</code> na qual as áreas de cabeçalho e rodapé ocupam as linhas superior e inferior, respectivamente, e anúncio e conteúdo ocupam as colunas esquerda e direita da linha do meio.'
    testString: 'assert(code.match(/@media\s*?\(\s*?min-width\s*?:\s*?400px\s*?\)[\s\S]*.container\s*?{[\s\S]*grid-template-areas\s*?:\s*?"\s*?header\s*?header\s*?"\s*?"\s*?advert\s*?content\s*?"\s*?"\s*?footer\s*?footer\s*?"\s*?;[\s\S]*}/gi), "When the viewport is <code>400px</code> or more, <code>container</code> class should have a <code>grid-template-areas</code> property in which the footer and header areas occupy the top and bottom rows respectively and advert and content occupy the left and right columns of the middle row.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  .item1 {
    background: LightSkyBlue;
    grid-area: header;
  }

  .item2 {
    background: LightSalmon;
    grid-area: advert;
  }

  .item3 {
    background: PaleTurquoise;
    grid-area: content;
  }

  .item4 {
    background: lightpink;
    grid-area: footer;
  }

  .container {
    font-size: 1.5em;
    min-height: 300px;
    width: 100%;
    background: LightGray;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px auto 1fr auto;
    grid-gap: 10px;
    grid-template-areas:
      "header"
      "advert"
      "content"
      "footer";
  }

  @media (min-width: 300px){
    .container{
      grid-template-columns: auto 1fr;
      grid-template-rows: auto 1fr auto;
      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";
    }
  }

  @media (min-width: 400px){
    .container{
      /* change the code below this line */

      grid-template-areas:
        "advert header"
        "advert content"
        "advert footer";

    /* change the code above this line */
    }
  }
</style>

<div class="container">
  <div class="item1">header</div>
  <div class="item2">advert</div>
  <div class="item3">content</div>
  <div class="item4">footer</div>
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
