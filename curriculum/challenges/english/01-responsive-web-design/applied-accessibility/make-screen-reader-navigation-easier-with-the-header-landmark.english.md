---
id: 587d7787367417b2b2512aa1
title: Make Screen Reader Navigation Easier with the header Landmark
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB76vtv'
forumTopicId: 301023
---

## Description
<section id='description'>
The next HTML5 element that adds semantic meaning and improves accessibility is the <code>header</code> tag. It's used to wrap introductory information or navigation links for its parent tag and works well around content that's repeated at the top on multiple pages.
<code>header</code> shares the embedded landmark feature you saw with <code>main</code>, allowing assistive technologies to quickly navigate to that content.
<strong>Note:</strong> The <code>header</code> is meant for use in the <code>body</code> tag of your HTML document. This is different than the <code>head</code> element, which contains the page's title, meta information, etc.
</section>

## Instructions
<section id='instructions'>
Camper Cat is writing some great articles about ninja training, and wants to add a page for them to his site. Change the top <code>div</code> that currently contains the <code>h1</code> to a <code>header</code> tag instead.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should have one <code>header</code> tag.
    testString: assert($('header').length == 1);
  - text: Your <code>header</code> tags should wrap around the <code>h1</code>.
    testString: assert($('header').children('h1').length == 1);
  - text: Your code should not have any <code>div</code> tags.
    testString: assert($('div').length == 0);
  - text: Your <code>header</code> element should have a closing tag.
    testString: assert(code.match(/<\/header>/g) && code.match(/<\/header>/g).length === code.match(/<header>/g).length);

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

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

</section>
