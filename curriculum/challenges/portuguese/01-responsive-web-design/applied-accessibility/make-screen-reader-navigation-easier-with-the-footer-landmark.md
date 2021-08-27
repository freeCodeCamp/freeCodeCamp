---
id: 587d7788367417b2b2512aa3
title: Facilitar a navegação do leitor de tela com o ponto de referência footer
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVrDh8'
forumTopicId: 301022
dashedName: make-screen-reader-navigation-easier-with-the-footer-landmark
---

# --description--

Semelhante a `header` e `nav`, o elemento `footer` possui um recurso de ponto de referência integrado que permite que dispositivos auxiliares naveguem rapidamente até ele. Essa tag é usada principalmente para conter informações de direitos autorais ou links para documentos relacionados, que geralmente ficam na parte inferior de uma página.

# --instructions--

A página de treinamento do Camper Cat está avançando bem. Altere a `div` que ele usou para envolver suas informações de copyright na parte inferior da página para o elemento `footer`.

# --hints--

O código deve ter uma tag `footer`.

```js
assert($('footer').length == 1);
```

O código não deve ter nenhuma tag `div`.

```js
assert($('div').length == 0);
```

O código deve ter uma tag de abertura e fechamento `footer`.

```js
assert(code.match(/<footer>\s*&copy; 2018 Camper Cat\s*<\/footer>/g));
```

# --seed--

## --seed-contents--

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

# --solutions--

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


  <footer>&copy; 2018 Camper Cat</footer>


</body>
```
