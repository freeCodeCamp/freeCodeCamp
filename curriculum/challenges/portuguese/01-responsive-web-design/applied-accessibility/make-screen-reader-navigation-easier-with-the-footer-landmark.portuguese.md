---
id: 587d7788367417b2b2512aa3
title: Make Screen Reader Navigation Easier with the footer Landmark
challengeType: 0
videoUrl: ''
localeTitle: Torne a navegação do leitor de tela mais fácil com o rodapé Landmark
---

## Description
<section id="description"> Semelhante ao <code>header</code> e <code>nav</code> , o elemento de <code>footer</code> tem um recurso de referência integrado que permite que dispositivos de assistência naveguem rapidamente até ele. É usado principalmente para conter informações de direitos autorais ou links para documentos relacionados que geralmente ficam na parte inferior de uma página. </section>

## Instructions
<section id="instructions"> A página de treinamento da Camper Cat está fazendo um bom progresso. Altere a <code>div</code> ele usou para envolver suas informações de direitos autorais na parte inferior da página em um elemento de <code>footer</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve ter uma tag de <code>footer</code> .
    testString: 'assert($("footer").length == 1, "Your code should have one <code>footer</code> tag.");'
  - text: Seu código não deve ter tags <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: Seu código deve ter uma tag de <code>footer</code> abertura e fechamento.
    testString: 'assert(code.match(/<footer>\s*&copy; 2018 Camper Cat\s*<\/footer>/g), "Your code should have an opening and closing <code>footer</code> tag.");'

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


  <div>&copy; 2018 Camper Cat</div>


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
