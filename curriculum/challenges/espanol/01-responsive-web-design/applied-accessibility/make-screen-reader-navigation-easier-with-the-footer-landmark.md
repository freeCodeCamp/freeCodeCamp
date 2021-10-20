---
id: 587d7788367417b2b2512aa3
title: Haz que la navegación del lector de pantalla sea más fácil con el footer Landmark
challengeType: 0
videoUrl: 'https://scrimba.com/c/crVrDh8'
forumTopicId: 301022
dashedName: make-screen-reader-navigation-easier-with-the-footer-landmark
---

# --description--

Similar a `header` y `nav`, el elemento `footer` tiene una característica de referencia incorporada que permite a los dispositivos de asistencia navegar rápidamente hacia él. Se utiliza principalmente para contener información sobre derechos de autor o enlaces a documentos relacionados que normalmente se encuentran en la parte inferior de una página.

# --instructions--

La página de entrenamiento del Camper Cat está progresando bien. Cambia el `div` que utilizó para envolver su información de copyright en la parte inferior de la página a un elemento `footer`.

# --hints--

Tu código debe tener una etiqueta `footer`.

```js
assert($('footer').length == 1);
```

Tu código no debe tener ninguna etiqueta `div`.

```js
assert($('div').length == 0);
```

Tu código debe tener una etiqueta `footer` de apertura y cierre.

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
