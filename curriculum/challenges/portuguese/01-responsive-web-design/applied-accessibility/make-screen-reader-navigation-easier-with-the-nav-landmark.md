---
id: 587d7788367417b2b2512aa2
title: Facilitar a navegação do leitor de tela com o ponto de referência nav
challengeType: 0
videoUrl: 'https://scrimba.com/c/czVwWSv'
forumTopicId: 301024
dashedName: make-screen-reader-navigation-easier-with-the-nav-landmark
---

# --description--

O elemento `nav` é outro item HTML5 com o recurso de ponto de referência integrado para facilitar a navegação do leitor de tela. Essa tag destina-se a envolver os principais links de navegação em sua página.

Se os mesmos links se repetirem tanto no cabeçalho quanto no rodapé da página, não é necessário marcar os links do rodapé com uma tag `nav` também. Usar um `footer` (abordado no próximo desafio) é suficiente.

# --instructions--

O Camper Cat incluiu links de navegação no topo da página de treinamento, mas os envolveu em uma `div`. Altere a `div` para uma tag `nav` para melhorar a acessibilidade da página.

# --hints--

O código deve ter uma tag `nav`.

```js
assert($('nav').length == 1);
```

A tag `nav` deve envolver o `ul` e os itens de lista.

```js
assert($('nav').children('ul').length == 1);
```

O código não deve ter nenhuma tag `div`.

```js
assert($('div').length == 0);
```

O elemento `nav` deve ter uma tag de fechamento.

```js
assert(
  code.match(/<\/nav>/g) &&
    code.match(/<\/nav>/g).length === code.match(/<nav>/g).length
);
```

# --seed--

## --seed-contents--

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

# --solutions--

```html
<body>
  <header>
    <h1>Training with Camper Cat</h1>

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
</body>
```
