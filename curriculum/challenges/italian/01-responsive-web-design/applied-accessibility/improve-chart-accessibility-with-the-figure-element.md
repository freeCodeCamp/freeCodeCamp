---
id: 587d778a367417b2b2512aa5
title: Migliorare l'accessibilità di un grafico con l'elemento figure
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMqtE'
forumTopicId: 301015
dashedName: improve-chart-accessibility-with-the-figure-element
---

# --description--

HTML5 ha introdotto l'elemento `figure`, insieme al relativo `figcaption`. Usati insieme, questi elementi contengono una rappresentazione visiva (come un'immagine, un diagramma o un grafico) e la sua didascalia. Avvolgere questi elementi insieme dà un doppio impulso di accessibilità raggruppando semanticamente i contenuti correlati e fornendo un testo alternativo che spiega la `figure`.

Per la visualizzazione di dati come nei grafici, la didascalia può essere utilizzata per annotare brevemente le tendenze o i risultati per gli utenti ipovedenti. Un'altra sfida spiegherà come spostare una versione tabulare dei dati del grafico fuori dallo schermo (utilizzando CSS) per chi utilizza uno screen reader.

Ecco un esempio - nota che il `figcaption` va dentro i tag `figure` e può essere combinato con altri elementi:

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

Camper Cat sta lavorando sodo per creare un grafico a barre che mostra la quantità di tempo settimanale da trascorrere allenandosi in invisibilità, combattimento e armi. Aiutalo a strutturare meglio la sua pagina cambiando il tag `div` che usava con un tag `figure`, e il tag `p` che circonda la didascalia con un tag `figcaption`.

# --hints--

Il tuo codice dovrebbe avere un tag `figure`.

```js
assert($('figure').length == 1);
```

Il tuo codice dovrebbe avere un tag `figcaption`.

```js
assert($('figcaption').length == 1);
```

Il tuo codice non dovrebbe avere alcun tag `div`.

```js
assert($('div').length == 0);
```

Il tuo codice non dovrebbe avere alcun tag `p`.

```js
assert($('p').length == 0);
```

La `figcaption` dovrebbe essere un elemento figlio (child) del tag `figure`.

```js
assert($('figure').children('figcaption').length == 1);
```

Il tuo elemento `figure` dovrebbe avere un tag di chiusura.

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
