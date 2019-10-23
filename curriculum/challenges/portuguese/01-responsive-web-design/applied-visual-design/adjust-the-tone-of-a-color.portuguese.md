---
id: 587d78a4367417b2b2512ad5
title: Adjust the Tone of a Color
challengeType: 0
videoUrl: ''
localeTitle: Ajustar o tom de uma cor
---

## Description
<section id="description"> A opção <code>hsl()</code> no CSS também facilita o ajuste do tom de uma cor. Misturar branco com um tom puro cria um tom dessa cor, e adicionar preto fará sombra. Alternativamente, um tom é produzido pela adição de cinza ou por tingimento e sombreamento. Lembre-se de que &#39;s&#39; e &#39;l&#39; de <code>hsl()</code> significam saturação e luminosidade, respectivamente. O percentual de saturação altera a quantidade de cinza e o percentual de luminosidade determina o quanto branco ou preto está na cor. Isso é útil quando você tem um matiz de base que você gosta, mas precisa de variações diferentes dele. </section>

## Instructions
<section id="instructions"> A barra de navegação neste site atualmente herda sua <code>background-color</code> de <code>background-color</code> do elemento de <code>header</code> . Começando com essa cor como base, adicione uma <code>background-color</code> ao elemento de <code>nav</code> para que ele use o mesmo matiz ciano, mas tenha 80% de saturação e 25% de valores de luminosidade para alterar seu tom e tom. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: O elemento <code>nav</code> deve ter uma <code>background-color</code> de <code>background-color</code> do tom ciano ajustado usando a propriedade <code>hsl()</code> .
    testString: 'assert(code.match(/nav\s*?{\s*?background-color:\s*?hsl\(180,\s*?80%,\s*?25%\)/gi), "The <code>nav</code> element should have a <code>background-color</code> of the adjusted cyan tone using the <code>hsl()</code> property.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<style>
  header {
    background-color: hsl(180, 90%, 35%);
    color: #FFFFFF;
  }

  nav {

  }

  h1 {
    text-indent: 10px;
    padding-top: 10px;
  }

  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }

  nav li {
    display: inline;
    margin-right: 20px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>

<header>
  <h1>Cooking with FCC!</h1>
  <nav>
    <ul>
      <li><a href="#">Home</a></li>
      <li><a href="#">Classes</a></li>
      <li><a href="#">Contact</a></li>
    </ul>
  </nav>
</header>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
