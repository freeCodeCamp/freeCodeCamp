---
id: 587d7787367417b2b2512aa1
title: Haz que la navegación del lector de pantalla sea más fácil con el encabezado Landmark
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB76vtv'
forumTopicId: 301023
dashedName: make-screen-reader-navigation-easier-with-the-header-landmark
---

# --description--

El siguiente elemento HTML5 que agrega significado semántico y mejora la accesibilidad es la etiqueta `header`. Se usa para envolver información introductoria o enlaces de navegación para su etiqueta principal y funciona bien con el contenido que se repite en la parte superior en varias páginas.

`header` comparte la función landmark integrada que viste con `main`, lo que permite a las tecnologías de asistencia navegar rápidamente a ese contenido.

**Nota:** El `header` está diseñado para usarse dentro de la etiqueta `body` de tu documento HTML. Es diferente al elemento `head`, que contiene el título de la página, la meta información, etc.

# --instructions--

Camper Cat está escribiendo algunos grandes artículos sobre el entrenamiento ninja, y quiere añadir una página para ellos a su sitio. Cambia la parte superior `div` que actualmente contiene el `h1` a una etiqueta `header`.

# --hints--

Tu código debe tener una etiqueta `header`.

```js
assert($('header').length == 1);
```

Tus etiquetas `header` deben envolver `h1`.

```js
assert($('header').children('h1').length == 1);
```

Tu código no debe tener ninguna etiqueta `div`.

```js
assert($('div').length == 0);
```

Tu elemento `header` debe tener una etiqueta de cierre.

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
