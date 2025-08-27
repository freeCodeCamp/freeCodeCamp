---
id: 587d7790367417b2b2512aaf
title: Make Links Navigable with HTML Access Keys
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQvmaTp'
forumTopicId: 301021
dashedName: make-links-navigable-with-html-access-keys
---

# --description--

HTML offers the `accesskey` attribute to specify a shortcut key to activate or bring focus to an element. Adding an `accesskey` attribute can make navigation more efficient for keyboard-only users.

HTML5 allows this attribute to be used on any element, but it's particularly useful when it's used with interactive ones. This includes links, buttons, and form controls.

Here's an example:

```html
<button accesskey="b">Important Button</button>
```

# --instructions--

Camper Cat wants the links around the two blog article titles to have keyboard shortcuts so his site's users can quickly navigate to the full story. Add an `accesskey` attribute to both links and set the first one to `g` (for Garfield) and the second one to `c` (for Chuck Norris).

# --hints--

Your code should add an `accesskey` attribute to the `a` tag with the `id` of `first`.

```js
assert.isTrue(document.querySelector('#first')?.hasAttribute('accesskey'));
```

Your code should add an `accesskey` attribute to the `a` tag with the `id` of `second`.

```js
assert.isTrue(document.querySelector('#second')?.hasAttribute('accesskey'));
```

Your code should set the `accesskey` attribute on the `a` tag with the `id` of `first` to `g`. Note that case matters.

```js
assert.equal(document.querySelector('#first')?.getAttribute('accesskey'), 'g');
```

Your code should set the `accesskey` attribute on the `a` tag with the `id` of `second` to `c`. Note that case matters.

```js
assert.equal(document.querySelector('#second')?.getAttribute('accesskey'), 'c');
```

# --seed--

## --seed-contents--

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


    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```

# --solutions--

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


    <p>Chuck Norris is widely regarded as the premier martial artist on the planet, and it's a complete coincidence that anyone who disagrees with this fact mysteriously disappears soon after. But the real question is, is he a cat person?...</p>
  </article>
  <footer>&copy; 2018 Camper Cat</footer>
</body>
```
