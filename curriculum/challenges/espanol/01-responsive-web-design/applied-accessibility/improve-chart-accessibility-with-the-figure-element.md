---
id: 587d778a367417b2b2512aa5
title: Mejora la accesibilidad de gráficos con el elemento figure
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJMqtE'
forumTopicId: 301015
dashedName: improve-chart-accessibility-with-the-figure-element
---

# --description--

HTML5 introdujo el elemento `figure` y el `figcaption` relacionado. Cuando se usan juntos, estos elementos envuelven una representación visual (como puede ser una imagen, diagrama o gráfico) junto con su leyenda. Envolviendo estos elementos da un impulso de accesibilidad doble al agrupar semánticamente el contenido relacionado y proporciona una alternativa de texto explicando la figura `figure`.

En visualizaciones de datos como gráficos, la leyenda o "figcaption" puede ser utilizada para resumir en formato de texto las tendencias o conclusiones, para beneficio de usuarios con discapacidades visuales. Otro de los desafíos se ocupa cómo mover fuera de la pantalla una versión en formato de tabla con los datos del gráfico (usando CSS) para ayudar a usuarios de lectores de pantalla.

Aquí hay un ejemplo: Ten en cuenta que el elemento `figcaption` va dentro de las etiquetas `figure` y se puede combinar con otros elementos:

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

Camper Cat está trabajando para crear un gráfico de barras apiladas que muestre la cantidad de tiempo semanal a dedicar en entrenamiento en sigilo, combate y armas. Ayúdalo a estructurar mejor su página cambiando la etiqueta `div` que usó por una etiqueta `figure`, y cambiando la etiqueta `p` que rodea la leyenda por una etiqueta `figcaption`.

# --hints--

Tu código debe tener una etiqueta `figure`.

```js
assert($('figure').length == 1);
```

Tu código debe tener una etiqueta `figcaption`.

```js
assert($('figcaption').length == 1);
```

Tu código no debe tener ninguna etiqueta `div`.

```js
assert($('div').length == 0);
```

Tu código no debe tener ninguna etiqueta `p`.

```js
assert($('p').length == 0);
```

La etiqueta `figcaption` debe ser un hijo de la etiqueta `figure`.

```js
assert($('figure').children('figcaption').length == 1);
```

Tu elemento `figure` debe tener una etiqueta de cierre.

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
