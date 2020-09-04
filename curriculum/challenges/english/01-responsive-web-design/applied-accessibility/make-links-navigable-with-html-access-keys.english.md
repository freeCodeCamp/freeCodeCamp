---
id: 587d7790367417b2b2512aaf
title: Make Links Navigable with HTML Access Keys
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQvmaTp'
forumTopicId: 301021
---

## Description
<section id='description'>
HTML offers the <code>accesskey</code> attribute to specify a shortcut key to activate or bring focus to an element. This can make navigation more efficient for keyboard-only users.
HTML5 allows this attribute to be used on any element, but it's particularly useful when it's used with interactive ones. This includes links, buttons, and form controls.
Here's an example:
<code>&lt;button accesskey=&quot;b&quot;&gt;Important Button&lt;/button&gt;</code>
</section>

## Instructions
<section id='instructions'>
Camper Cat wants the links around the two blog article titles to have keyboard shortcuts so his site's users can quickly navigate to the full story. Add an <code>accesskey</code> attribute to both links and set the first one to "g" (for Garfield) and the second one to "c" (for Chuck Norris).
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your code should add an <code>accesskey</code> attribute to the <code>a</code> tag with the <code>id</code> of "first".
    testString: assert($('#first').attr('accesskey'));
  - text: Your code should add an <code>accesskey</code> attribute to the <code>a</code> tag with the <code>id</code> of "second".
    testString: assert($('#second').attr('accesskey'));
  - text: Your code should set the <code>accesskey</code> attribute on the <code>a</code> tag with the <code>id</code> of "first" to "g". Note that case matters.
    testString: assert($('#first').attr('accesskey') == 'g');
  - text: Your code should set the <code>accesskey</code> attribute on the <code>a</code> tag with the <code>id</code> of "second" to "c". Note that case matters.
    testString: assert($('#second').attr('accesskey') == 'c');

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>


    <h2><a id="first" href="#">The Garfield Files: Lasagna as Training Fuel?</a></h2>


    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <article>


    <h2><a id="second" href="#">Is Chuck Norris a Cat Person?</a></h2>


    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

```html
<body>
  <header>
    <h1>Deep Thoughts with Master Camper Cat</h1>
  </header>
  <article>


    <h2><a id="first" accesskey="g" href="#">The Garfield Files: Lasagna as Training Fuel?</a></h2>


    <p>The internet is littered with varying opinions on nutritional paradigms, from catnip paleo to hairball cleanses. But let's turn our attention to an often overlooked fitness fuel, and examine the protein-carb-NOM trifecta that is lasagna...</p>
  </article>
  <article>


    <h2><a id="second" accesskey="c" href="#">Is Chuck Norris a Cat Person?</a></h2>


    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

</section>
