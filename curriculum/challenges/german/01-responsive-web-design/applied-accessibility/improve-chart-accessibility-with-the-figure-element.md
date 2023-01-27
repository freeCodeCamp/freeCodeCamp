---
id: 587d778a367417b2b2512aa5
title: Verbessere den Zugriff auf Diagramme mit dem Figure-Element
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMqtE'
forumTopicId: 301015
dashedName: improve-chart-accessibility-with-the-figure-element
---

# --description--

Mit HTML5 wurde das `figure`-Element und das zugehörige `figcaption` eingeführt. Zusammen verwendet, umschließen diese Elemente eine visuelle Darstellung (wie ein Bild, ein Diagramm oder eine Tabelle) zusammen mit ihrer Beschriftung. Durch das Zusammenfassen dieser Elemente wird der Zugriff auf den Inhalt in zweifacher Hinsicht verbessert, da zusammengehörige Inhalte semantisch gruppiert werden und eine Textalternative zur Erläuterung der Abbildung `figure` bereitgestellt wird.

Bei Visualisierungen von Daten, wie z. B. Diagrammen, kann die Beschriftung verwendet werden, um die Trends oder Schlussfolgerungen für Benutzer mit Sehbehinderungen kurz zu erwähnen. Eine weitere Herausforderung besteht darin, wie man eine tabellarische Version der Daten des Diagramms für Screenreader-Benutzer außerhalb des Bildschirms darstellen kann (mit CSS).

Hier ist ein Beispiel - beachte, dass das `figcaption`-Element innerhalb des `figure`-Tags steht und mit anderen Elementen kombiniert werden kann:

```html
<figure>
  <img src="roundhouseDestruction.jpeg" alt="Photo of Camper Cat executing a roundhouse kick">
  <br>
  <figcaption>
    Master Camper Cat demonstrates proper form of a roundhouse kick.
  </figcaption>
</figure>
```

# --instructions--

Camper Cat arbeitet hart daran, ein gestapeltes Säulendiagramm zu erstellen, das zeigt, wie viel Zeit pro Woche für das Training in Tarnung, Kampf und Waffen aufgewendet werden muss. Hilf ihm, seine Seite besser zu strukturieren, indem du das `div`-Tag, das er verwendet hat, in ein `figure`-Tag und das `p`-Tag, das die Überschrift umgibt, in ein `figcaption`-Tag änderst.

# --hints--

Dein Code sollte ein `figure`  Tag haben.

```js
assert($('figure').length == 1);
```

Dein Code sollte ein `figcaption` Tag haben.

```js
assert($('figcaption').length == 1);
```

Dein Code sollte keine `div` Tags haben.

```js
assert($('div').length == 0);
```

Dein Code sollte keine `p` Tags haben.

```js
assert($('p').length == 0);
```

Die `figcaption`-Element sollte ein Kindelement des `figure`-Tags sein.

```js
assert($('figure').children('figcaption').length == 1);
```

Dein `figure`-Element sollte ein schließendes Tag haben.

```js
assert(
  code.match(/<\/figure>/g) &&
    code.match(/<\/figure>/g).length === code.match(/<figure>/g).length
);
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
    <section>

      <!-- Only change code below this line -->
      <div>
        <!-- Stacked bar chart will go here -->
        <br>
        <p>Breakdown per week of time to spend training in stealth, combat, and weapons.</p>
      </div>
      <!-- Only change code above this line -->

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
    <section>
      <figure>
        <!-- Stacked bar chart will go here -->
        <br>
        <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
      </figure>
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
