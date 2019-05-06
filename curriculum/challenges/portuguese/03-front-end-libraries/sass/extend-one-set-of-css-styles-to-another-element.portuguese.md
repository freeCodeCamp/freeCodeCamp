---
id: 587d7fa5367417b2b2512bbd
title: Extend One Set of CSS Styles to Another Element
challengeType: 0
videoUrl: ''
localeTitle: Estenda um conjunto de estilos CSS para outro elemento
---

## Description
<section id="description"> O Sass possui um recurso chamado <code>extend</code> que facilita a obtenção das regras de CSS de um elemento e a criação delas em outro. Por exemplo, o bloco abaixo de regras CSS <code>.panel</code> uma classe <code>.panel</code> . Tem uma <code>background-color</code> , <code>height</code> e <code>border</code> . <blockquote> .painel{ <br> cor de fundo: vermelho; <br> altura: 70 px; <br> borda: 2px verde sólido; <br> } </blockquote> Agora você quer outro painel chamado <code>.big-panel</code> . Ele tem as mesmas propriedades de base que o <code>.panel</code> , mas também precisa de <code>width</code> e <code>font-size</code> . É possível copiar e colar as regras CSS iniciais de <code>.panel</code> , mas o código se torna repetitivo à medida que você adiciona mais tipos de painéis. A diretiva <code>extend</code> é uma maneira simples de reutilizar as regras escritas para um elemento e depois adicionar mais para outra: <blockquote> .big-panel { <br> @extend .panel; <br> largura: 150px; <br> tamanho da fonte: 2em; <br> } </blockquote> O <code>.big-panel</code> terá as mesmas propriedades que o <code>.panel</code> , além dos novos estilos. </section>

## Instructions
<section id="instructions"> Faça uma aula <code>.info-important</code> que <code>.info</code> e também tenha uma <code>background-color</code> definida como magenta. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Sua turma de <code>info-important</code> deve ter uma <code>background-color</code> definida como <code>magenta</code> .
    testString: 'assert(code.match(/\.info-important\s*?{[\s\S]*background-color\s*?:\s*?magenta\s*?;[\s\S]*}/gi), "Your <code>info-important</code> class should have a <code>background-color</code> set to <code>magenta</code>.");'
  - text: Sua classe <code>info-important</code> deve usar <code>@extend</code> para herdar o estilo da classe <code>info</code> .
    testString: 'assert(code.match(/\.info-important\s*?{[\s\S]*@extend\s*?.info\s*?;[\s\S]*/gi), "Your <code>info-important</code> class should use <code>@extend</code> to inherit the styling from the <code>info</code> class.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style type='text/sass'>
  h3{
    text-align: center;
  }
  .info{
    width: 200px;
    border: 1px solid black;
    margin: 0 auto;
  }




</style>
<h3>Posts</h3>
<div class="info-important">
  <p>This is an important post. It should extend the class ".info" and have its own CSS styles.</p>
</div>

<div class="info">
  <p>This is a simple post. It has basic styling and can be extended for other uses.</p>
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
