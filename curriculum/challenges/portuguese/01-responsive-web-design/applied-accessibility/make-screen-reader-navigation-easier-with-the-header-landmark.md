---
id: 587d7787367417b2b2512aa1
title: Facilitar a navegação do leitor de tela com o ponto de referência header
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB76vtv'
forumTopicId: 301023
dashedName: make-screen-reader-navigation-easier-with-the-header-landmark
---

# --description--

O próximo elemento HTML5 que adiciona significado semântico e melhora a acessibilidade é a tag `header`. Ela é usada para envolver informações introdutórias ou links de navegação e funciona bem em torno do conteúdo que é repetido no topo em várias páginas.

O elemento `header` compartilha o recurso de referência incorporado que você viu em `main`, permitindo que tecnologias de assistência naveguem rapidamente até esse conteúdo.

**Observação: ** o elemento `header` deve ser usado na tag `body` do seu documento HTML. É diferente do elemento `head`, que contém o título da página, metadados, etc.

# --instructions--

O Camper Cat está escrevendo ótimos artigos sobre treinamento de ninjas e deseja adicionar uma página para eles no site. Altere a `div` superior que atualmente contém o `h1` para uma tag `header`.

# --hints--

O código deve ter uma tag `header`.

```js
assert($('header').length == 1);
```

A tag `header` deve envolver o `h1`.

```js
assert($('header').children('h1').length == 1);
```

O código não deve ter nenhuma tag `div`.

```js
assert($('div').length == 0);
```

O elemento `header` deve ter uma tag de fechamento.

```js
assert(
  code.match(/<\/header>/g) &&
    code.match(/<\/header>/g).length === code.match(/<header>/g).length
);
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<body>

  <header>
    <h1>Training with Camper Cat</h1>
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
