---
id: 587d778d367417b2b2512aaa
title: Make Elements Only Visible to a Screen Reader by Using Custom CSS
challengeType: 0
videoUrl: ''
localeTitle: Tornar os elementos visíveis apenas para um leitor de tela usando CSS personalizado
---

## Description
<section id="description"> Você já reparou que todos os desafios de acessibilidade aplicados até agora não usaram nenhum CSS? Isso é para mostrar a importância de um esboço de documento lógico e usar tags semanticamente significativas ao redor do seu conteúdo antes de introduzir o aspecto do design visual. No entanto, a mágica do CSS também pode melhorar a acessibilidade em sua página quando você deseja ocultar visualmente o conteúdo destinado apenas a leitores de tela. Isso acontece quando as informações estão em um formato visual (como um gráfico), mas os usuários de leitores de tela precisam de uma apresentação alternativa (como uma tabela) para acessar os dados. O CSS é usado para posicionar os elementos somente leitura da tela fora da área visual da janela do navegador. Aqui está um exemplo das regras CSS que fazem isso: <blockquote>.sr-only {<br>&nbsp;&nbsp;position: absolute;<br>&nbsp;&nbsp;left: -10000px;<br>&nbsp;&nbsp;width: 1px;<br>&nbsp;&nbsp;height: 1px;<br>&nbsp;&nbsp;top: auto;<br>&nbsp;&nbsp;overflow: hidden;<br>}</blockquote> <strong>Nota</strong> <br> As seguintes abordagens CSS NÃO farão o mesmo: <ul><li> <code>display: none;</code> ou <code>visibility: hidden;</code> oculta conteúdo para todos, incluindo usuários de leitores de tela </li><li> Valores zero para tamanhos de pixel, como <code>width: 0px; height: 0px;</code> remove esse elemento do fluxo do seu documento, o que significa que os leitores de tela o ignoram </li></ul></section>

## Instructions
<section id="instructions"> O Camper Cat criou um gráfico de barras muito legal para sua página de treinamento e colocou os dados em uma tabela para seus usuários com deficiência visual. A tabela já tem uma classe <code>sr-only</code> , mas as regras CSS ainda não foram preenchidas. Atribua à <code>position</code> um valor absoluto, a <code>left</code> um valor de -10000px e a <code>width</code> e a <code>height</code> ambos os valores de 1px. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve definir a propriedade de <code>position</code> da classe <code>sr-only</code> para um valor absoluto.
    testString: 'assert($(".sr-only").css("position") == "absolute", "Your code should set the <code>position</code> property of the <code>sr-only</code> class to a value of absolute.");'
  - text: Seu código deve definir a propriedade <code>left</code> da classe <code>sr-only</code> para um valor de -10000px.
    testString: 'assert($(".sr-only").css("left") == "-10000px", "Your code should set the <code>left</code> property of the <code>sr-only</code> class to a value of -10000px.");'
  - text: Seu código deve definir a propriedade <code>width</code> da classe <code>sr-only</code> para um valor de 1 pixel.
    testString: 'assert(code.match(/width:\s*?1px/gi), "Your code should set the <code>width</code> property of the <code>sr-only</code> class to a value of 1 pixel.");'
  - text: Seu código deve definir a propriedade <code>height</code> da classe <code>sr-only</code> para um valor de 1 pixel.
    testString: 'assert(code.match(/height:\s*?1px/gi), "Your code should set the <code>height</code> property of the <code>sr-only</code> class to a value of 1 pixel.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<head>
  <style>
  .sr-only {
    position: ;
    left: ;
    width: ;
    height: ;
    top: auto;
    overflow: hidden;
  }
  </style>
</head>
<body>
  <header>
    <h1>Training</h1>
    <nav>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </nav>
  </header>
  <section>
    <h2>Master Camper Cat's Beginner Three Week Training Program</h2>
    <figure>
      <!-- Stacked bar chart of weekly training-->
      <p>[Stacked bar chart]</p>
      <br />
      <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
    </figure>
    <table class="sr-only">
      <caption>Hours of Weekly Training in Stealth, Combat, and Weapons</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Stealth &amp; Agility</th>
          <th scope="col">Combat</th>
          <th scope="col">Weapons</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Week One</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Week Two</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Week Three</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section id="stealth">
    <h2>Stealth &amp; Agility Training</h2>
    <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
    <article><h3>No training is NP-complete without parkour</h3></article>
  </section>
  <section id="combat">
    <h2>Combat Training</h2>
    <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
    <article><h3>Goodbye, world: 5 proven ways to knock out an opponent</h3></article>
  </section>
  <section id="weapons">
    <h2>Weapons Training</h2>
    <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
    <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
