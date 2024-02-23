---
id: 587d7787367417b2b2512aa1
title: Rahisisha Uelekezaji wa Kisoma skrini kwa kutumia alama kuu ya kichwa
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB76vtv'
forumTopicId: 301023
dashedName: make-screen-reader-navigation-easier-with-the-header-landmark
---

# --description--

Kipengele kinachofuata cha HTML5 kinachoongeza maana ya kisemantiki na kuboresha ufikivu ni lebo ya `header`. Hutumika kufunga maelezo ya utangulizi au viungo vya usogezaji kwa lebo yake kuu na hufanya kazi vyema katika maudhui ambayo yanarudiwa katika sehemu ya juu kwenye kurasa nyingi.

`header` hushiriki kipengele muhimu kilichopachikwa ulichokiona na `main`, ikiruhusu teknolojia saidizi kuelekeza kwa maudhui hayo kwa haraka.

**Kumbuka:** `header` inakusudiwa kutumika katika lebo ya `body` ya hati yako ya HTML. Ni tofauti na kipengele cha `head`, ambacho kina kichwa cha ukurasa, taarifa ya meta n.k.

# --instructions--

Camper Cat anaandika baadhi ya nakala nzuri kuhusu mafunzo ya ninja, na anataka kuwaongezea ukurasa kwenye tovuti yake. Badilisha `div` ya juu ambayo kwa sasa ina `h1` kuwa `header` badala yake.

# --hints--

Code yako unapaswa kuwa na lebo moja ya `header`.

```js
assert($('header').length == 1);
```

Lebo zako za `header` zinapaswa kuzunguka `h1`.

```js
assert($('header').children('h1').length == 1);
```

Code yako haipaswi kuwa na lebo zozote za `div`.

```js
assert($('div').length == 0);
```

Kipengele chako cha `header` kinapaswa kuwa na lebo ya kufunga.

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
