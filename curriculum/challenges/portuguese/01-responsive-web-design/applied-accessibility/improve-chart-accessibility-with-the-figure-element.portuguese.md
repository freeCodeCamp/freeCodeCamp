---
id: 587d778a367417b2b2512aa5
title: Improve Chart Accessibility with the figure Element
challengeType: 0
videoUrl: ''
localeTitle: Melhore a acessibilidade do gráfico com a figura Element
---

## Description
<section id="description"> O HTML5 introduziu o elemento <code>figure</code> , juntamente com a <code>figcaption</code> relacionada. Usados ​​em conjunto, esses itens envolvem uma representação visual (como uma imagem, diagrama ou gráfico) junto com sua legenda. Isso proporciona um aumento de acessibilidade duplo por meio do conteúdo relacionado ao agrupamento semanticamente e fornece uma alternativa em texto que explica a <code>figure</code> . Para visualizações de dados, como gráficos, a legenda pode ser usada para observar brevemente as tendências ou conclusões para usuários com deficiências visuais. Outro desafio abrange como mover uma versão da tabela dos dados do gráfico para fora da tela (usando CSS) para usuários de leitores de tela. Aqui está um exemplo - note que o <code>figcaption</code> vai dentro da <code>figure</code> tags e pode ser combinado com outros elementos: <blockquote> &lt;figure&gt; <br> &lt;img src = &quot;roundhouseDestruction.jpeg&quot; alt = &quot;Foto do Camper Cat executando um roundhouse kick&quot;&gt; <br> &lt;br&gt; <br> &lt;figcaption&gt; <br> Mestre Camper Cat demonstra a forma correta de um chute circular. <br> &lt;/ figcaption&gt; <br> &lt;/ figure&gt; <br></blockquote></section>

## Instructions
<section id="instructions"> Camper Cat está trabalhando duro para criar um gráfico de barras empilhadas mostrando a quantidade de tempo por semana para treinar em furtividade, combate e armas. Ajude-o a estruturar melhor sua página, alterando a tag <code>div</code> ele usou para uma tag <code>figure</code> e a tag <code>p</code> que circunda a legenda para uma tag <code>figcaption</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve ter uma tag de <code>figure</code> .
    testString: 'assert($("figure").length == 1, "Your code should have one <code>figure</code> tag.");'
  - text: Seu código deve ter uma tag <code>figcaption</code> .
    testString: 'assert($("figcaption").length == 1, "Your code should have one <code>figcaption</code> tag.");'
  - text: Seu código não deve ter tags <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: Seu código não deve ter tags <code>p</code> .
    testString: 'assert($("p").length == 0, "Your code should not have any <code>p</code> tags.");'
  - text: A <code>figcaption</code> deve ser um filho da tag de <code>figure</code> .
    testString: 'assert($("figure").children("figcaption").length == 1, "The <code>figcaption</code> should be a child of the <code>figure</code> tag.");'
  - text: Certifique-se de que seu elemento <code>figure</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/figure>/g) && code.match(/<\/figure>/g).length === code.match(/<figure>/g).length, "Make sure your <code>figure</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
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
  <main>
    <section>

      <!-- Add your code below this line -->
      <div>
        <!-- Stacked bar chart will go here -->
        <br>
        <p>Breakdown per week of time to spend training in stealth, combat, and weapons.</p>
      </div>
      <!-- Add your code above this line -->

    </section>
    <section id="stealth">
      <h2>Stealth &amp; Agility Training</h2>
      <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
      <article><h3>No training is NP-complete without parkour</h3></article>
    </section>
    <section id="combat">
      <h2>Combat Training</h2>
      <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
      <article><h3>Goodbye world: 5 proven ways to knock out an opponent</h3></article>
    </section>
    <section id="weapons">
      <h2>Weapons Training</h2>
      <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
      <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
    </section>
  </main>
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
