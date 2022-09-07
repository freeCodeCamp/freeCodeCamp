---
id: 587d7787367417b2b2512aa1
title: Vereinfache Screenreader-Navigation mit der Grenzrolle eines Header-Elements
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB76vtv'
forumTopicId: 301023
dashedName: make-screen-reader-navigation-easier-with-the-header-landmark
---

# --description--

Das nächste HTML5-Element das semantische Aussagekraft verleiht und der Barrierefreiheit dient, ist das `header`-Tag (engl. "Kopfzeile"). Es wird verwendet, um einleitende Informationen oder Navigationslinks für sein übergeordnetes Tag zusammenzufassen und eignet sich gut für Inhalte, die auf mehreren Seiten oben wiederholt werden.

`header` hat ebenfalls eine inhärente Grenzrolle, wie du das bereits von `main` kennst und erlaubt assistiven Technologien schnell zu diesem Inhalt zu navigieren.

**Hinweis:** Der `header` ist für den `body` des HTML-Dokuments vorgesehen. Er unterscheidet sich vom `head`-Element, welches den Seitentitel, Metainformationen, etc. beinhaltet.

# --instructions--

Camper Cat schreibt einige großartige Artikel über Ninja-Training und möchte eine Seite für sie zu seiner Website hinzufügen. Ändere das obere `div`, welches im Moment das `h1`-Element beinhaltet, in ein `header`-Tag.

# --hints--

Dein Code sollte ein `header`-Tag beinhalten.

```js
assert($('header').length == 1);
```

Dein `header`-Tag sollte das `h1`-Element umfassen.

```js
assert($('header').children('h1').length == 1);
```

Dein Code sollte keine `div`-Tags enthalten.

```js
assert($('div').length == 0);
```

Dein `header`-Element sollte ein schließendes Tag haben.

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
