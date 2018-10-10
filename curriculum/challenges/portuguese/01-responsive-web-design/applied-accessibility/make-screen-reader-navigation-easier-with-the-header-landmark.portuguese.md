---
id: 587d7787367417b2b2512aa1
title: Make Screen Reader Navigation Easier with the header Landmark
challengeType: 0
videoUrl: ''
localeTitle: Facilitar a navegação do leitor de tela com o cabeçalho Landmark
---

## Description
<section id="description"> O próximo elemento HTML5 que adiciona significado semântico e melhora a acessibilidade é a tag de <code>header</code> . Ele é usado para envolver informações introdutórias ou links de navegação para sua tag pai e funciona bem em torno do conteúdo que é repetido na parte superior em várias páginas. <code>header</code> compartilha o recurso de ponto de referência incorporado que você viu com o <code>main</code> , permitindo que as tecnologias de assistência naveguem rapidamente para esse conteúdo. <strong>Nota</strong> <br> <code>header</code> é destinado para uso na tag <code>body</code> do seu documento HTML. Isso é diferente do elemento <code>head</code> , que contém o título da página, meta informações etc. </section>

## Instructions
<section id="instructions"> Camper Cat está escrevendo alguns ótimos artigos sobre treinamento ninja, e quer adicionar uma página para eles em seu site. Altere a <code>div</code> superior que atualmente contém o <code>h1</code> para uma tag de <code>header</code> . </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Seu código deve ter uma tag de <code>header</code> .
    testString: 'assert($("header").length == 1, "Your code should have one <code>header</code> tag.");'
  - text: Suas tags de <code>header</code> devem envolver o <code>h1</code> .
    testString: 'assert($("header").children("h1").length == 1, "Your <code>header</code> tags should wrap around the <code>h1</code>.");'
  - text: Seu código não deve ter tags <code>div</code> .
    testString: 'assert($("div").length == 0, "Your code should not have any <code>div</code> tags.");'
  - text: Certifique-se de que seu elemento de <code>header</code> tenha uma tag de fechamento.
    testString: 'assert(code.match(/<\/header>/g) && code.match(/<\/header>/g).length === code.match(/<header>/g).length, "Make sure your <code>header</code> element has a closing tag.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>

  <div>
    <h1>Training with Camper Cat</h1>
  </div>


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
