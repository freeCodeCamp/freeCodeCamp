---
id: 587d7787367417b2b2512aa1
title: Rendere più semplice la navigazione dagli screen reader con il riferimento all'header
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB76vtv'
forumTopicId: 301023
dashedName: make-screen-reader-navigation-easier-with-the-header-landmark
---

# --description--

Il prossimo elemento HTML5 che aggiunge significato semantico e migliora l'accessibilità è il tag `header`. È usato per contenere informazioni introduttive o link di navigazione per il suo tag genitore e funziona bene intorno a contenuti che si ripetono in cima a più pagine dello stesso sito.

`header` condivide il riferimento incorporato che hai visto con `main`, consentendo alle tecnologie assistive di navigare rapidamente a quel contenuto.

**Nota:** L'`header` è destinato all'uso all'interno del tag `body` del tuo documento HTML. È diverso dall'elemento `head`, che contiene il titolo della pagina, meta informazioni, ecc.

# --instructions--

Camper Cat sta scrivendo alcuni grandi articoli sull'allenamento ninja, e vuole aggiungere al suo sito una pagina dedicata ad essi. Cambia il `div` che attualmente contiene l'`h1` con un tag `header`.

# --hints--

Il tuo codice dovrebbe avere un tag `header`.

```js
assert($('header').length == 1);
```

I tag `header` dovrebbero racchiudere il tag `h1`.

```js
assert($('header').children('h1').length == 1);
```

Il tuo codice non dovrebbe avere alcun tag `div`.

```js
assert($('div').length == 0);
```

Il tuo elemento `header` dovrebbe avere un tag di chiusura.

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
