---
id: 587d778d367417b2b2512aaa
title: Rendere gli elementi visibili solo a uno screen reader usando del CSS ad hoc
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJ8QGkhJ'
forumTopicId: 301020
dashedName: make-elements-only-visible-to-a-screen-reader-by-using-custom-css
---

# --description--

Hai notato che tutte le sfide di accessibilità viste finora non hanno utilizzato alcun CSS? Questo mostra quanto è importante utilizzare una struttura logica e dei tag semanticamente significativi intorno al contenuto, prima di introdurre l'aspetto del visual design.

Tuttavia, la magia dei CSS può anche migliorare l'accessibilità sulla tua pagina quando vuoi nascondere visivamente i contenuti destinati solo agli screen reader. Questo accade quando le informazioni sono in formato visivo (come un grafico), ma gli utenti degli screen reader hanno bisogno di una presentazione alternativa (come una tabella) per accedere ai dati. Il CSS è utilizzato per posizionare gli elementi destinati solo agli screen reader fuori dall'area visiva della finestra del browser.

Ecco un esempio delle regole CSS che lo rendono possibile:

```css
.sr-only {
  position: absolute;
  left: -10000px;
  width: 1px;
  height: 1px;
  top: auto;
  overflow: hidden;
}
```

**Nota:** I seguenti approcci CSS NON fara la stessa cosa:

<ul>
<li><code>display: none;</code> o <code>visibility: hidden;</code> nascondono i contenuti a tutti, compresi gli utenti degli screen reader</li>
<li>Assegnare valori nulli per le dimensioni in pixel, come <code>width: 0px; height: 0px;</code> rimuove l'elemento dal flusso del documento, di conseguenza gli screen reader lo ignoreranno</li>
</ul>

# --instructions--

Camper Cat ha creato un bel grafico a barre sovrapposte per la sua pagina di allenamento, e ha messo i dati in una tabella per i suoi utenti ipovedenti. La tabella ha già una classe `sr-only`, ma le regole CSS non sono ancora complete. Assegna a `position` il valore `absolute`, a `left` il valore `-10000px`, e a `width` e `height` il valore `1px`.

# --hints--

Il tuo codice dovrebbe impostare la proprietà `position` della classe `sr-only` al valore `absolute`.

```js
assert($('.sr-only').css('position') == 'absolute');
```

Il tuo codice dovrebbe impostare la proprietà `left` della classe `sr-only` ad un valore di `-10000px`.

```js
assert($('.sr-only').css('left') == '-10000px');
```

Il tuo codice dovrebbe impostare la proprietà `width` della classe `sr-only` ad un valore di `1` pixel.

```js
assert(code.match(/width:\s*?1px/gi));
```

Il tuo codice dovrebbe impostare la proprietà `height` della classe `sr-only` ad un valore di `1` pixel.

```js
assert(code.match(/height:\s*?1px/gi));
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
  .sr-only {
    position: ;
    left: ;
    width: ;
    height: ;
    top: auto;
    overflow: hidden;
  }
  </style>
</head>
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
  <section>
    <h2>Master Camper Cat's Beginner Three Week Training Program</h2>
    <figure>
      <!-- Stacked bar chart of weekly training -->
      <p>[Stacked bar chart]</p>
      <br />
      <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
    </figure>
    <table class="sr-only">
      <caption>Hours of Weekly Training in Stealth, Combat, and Weapons</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Stealth &amp; Agility</th>
          <th scope="col">Combat</th>
          <th scope="col">Weapons</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Week One</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Week Two</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Week Three</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section id="stealth">
    <h2>Stealth &amp; Agility Training</h2>
    <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
    <article><h3>No training is NP-complete without parkour</h3></article>
  </section>
  <section id="combat">
    <h2>Combat Training</h2>
    <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
    <article><h3>Goodbye, world: 5 proven ways to knock out an opponent</h3></article>
  </section>
  <section id="weapons">
    <h2>Weapons Training</h2>
    <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
    <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

```html
<head>
  <style>
  .sr-only {
    position: absolute;
    left: -10000px;
    width: 1px;
    height: 1px;
    top: auto;
    overflow: hidden;
  }
  </style>
</head>
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
  <section>
    <h2>Master Camper Cat's Beginner Three Week Training Program</h2>
    <figure>
      <!-- Stacked bar chart of weekly training -->
      <p>[Stacked bar chart]</p>
      <br />
      <figcaption>Breakdown per week of time to spend training in stealth, combat, and weapons.</figcaption>
    </figure>
    <table class="sr-only">
      <caption>Hours of Weekly Training in Stealth, Combat, and Weapons</caption>
      <thead>
        <tr>
          <th></th>
          <th scope="col">Stealth &amp; Agility</th>
          <th scope="col">Combat</th>
          <th scope="col">Weapons</th>
          <th scope="col">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">Week One</th>
          <td>3</td>
          <td>5</td>
          <td>2</td>
          <td>10</td>
        </tr>
        <tr>
          <th scope="row">Week Two</th>
          <td>4</td>
          <td>5</td>
          <td>3</td>
          <td>12</td>
        </tr>
        <tr>
          <th scope="row">Week Three</th>
          <td>4</td>
          <td>6</td>
          <td>3</td>
          <td>13</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section id="stealth">
    <h2>Stealth &amp; Agility Training</h2>
    <article><h3>Climb foliage quickly using a minimum spanning tree approach</h3></article>
    <article><h3>No training is NP-complete without parkour</h3></article>
  </section>
  <section id="combat">
    <h2>Combat Training</h2>
    <article><h3>Dispatch multiple enemies with multithreaded tactics</h3></article>
    <article><h3>Goodbye, world: 5 proven ways to knock out an opponent</h3></article>
  </section>
  <section id="weapons">
    <h2>Weapons Training</h2>
    <article><h3>Swords: the best tool to literally divide and conquer</h3></article>
    <article><h3>Breadth-first or depth-first in multi-weapon training?</h3></article>
  </section>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
