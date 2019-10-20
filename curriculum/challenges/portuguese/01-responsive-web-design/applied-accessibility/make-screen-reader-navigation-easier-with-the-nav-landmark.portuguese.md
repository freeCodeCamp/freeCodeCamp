---
id: 587d7788367417b2b2512aa2
title: Make Screen Reader Navigation Easier with the nav Landmark
challengeType: 0
videoUrl: ''
localeTitle: Torne a navegação do leitor de tela mais fácil com o marco de navegação
---

## Description
<section id="description"> O elemento <code>nav</code> é outro item HTML5 com o recurso de marco incorporado para facilitar a navegação do leitor de tela. Esta tag destina-se a envolver os links principais de navegação na sua página. Se houver links de sites repetidos na parte inferior da página, não será necessário marcar aqueles com uma tag de <code>nav</code> também. Usar um <code>footer</code> (coberto no próximo desafio) é suficiente. </section>

## Instructions
<section id="instructions"> O Camper Cat incluiu links de navegação no topo de sua página de treinamento, mas os envolveu em uma <code>div</code> . Altere o <code>div</code> para uma tag de <code>nav</code> para melhorar a acessibilidade em sua página. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve ter uma tag de <code>nav</code> .
    testString: 'assert($("nav").length == 1, "Your code should have one <code>nav</code> tag.");'
  - text: Suas tags de <code>nav</code> devem envolver o <code>ul</code> e seus itens de lista.
    testString: 'assert($("nav").children("ul").length == 1, "Your <code>nav</code> tags should wrap around the <code>ul</code> and its list items.");'
  - text: Seu código não deve ter tags <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: Certifique-se de que seu elemento <code>nav</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/nav>/g) && code.match(/<\/nav>/g).length === code.match(/<nav>/g).length, "Make sure your <code>nav</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Training with Camper Cat</h1>

    <div>
      <ul>
        <li><a href="#stealth">Stealth &amp; Agility</a></li>
        <li><a href="#combat">Combat</a></li>
        <li><a href="#weapons">Weapons</a></li>
      </ul>
    </div>

  </header>
  <main>
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
