---
id: 587d7790367417b2b2512aaf
title: Links mit HTML-Tastaturkürzel navigierbar machen
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQvmaTp'
forumTopicId: 301021
dashedName: make-links-navigable-with-html-access-keys
---

# --description--

HTML bietet die `accesskey`-Eigenschaft, um eine Shortcut-Taste zu bestimmen, die ein Element aktiviert oder in den Fokus bringt. Das Hinzufügen eines `accesskey`-Attributs kann die Navigation für Benutzer, die nur die Tastatur verwenden, effizienter machen.

HTML5 lässt diese Eigenschaft für jedes Element zu, aber sie ist insbesondere dann nützlich, wenn man sie mit interaktiven Elementen benutzt. Dazu zählen Links, Buttons und Formularsteuerelemente.

Hier ist ein Beispiel:

```html
<button accesskey="b">Important Button</button>
```

# --instructions--

Camper Cat möchte, dass die Links rund um die beiden Blog-Artikel-Titel mit Tastaturkürzeln versehen werden, damit die Benutzer seiner Website schnell zur vollständigen Geschichte navigieren können. Füge ein `accesskey`-Attribut zu beiden Links hinzu und setze den ersten auf `g` (für Garfield) und den zweiten auf `c` (für Chuck Norris).

# --hints--

Dein Code sollte ein `accesskey`-Attribut zum `a`-Tag mit der `id` von `first` hinzufügen.

```js
assert($('#first').attr('accesskey'));
```

Dein Code sollte ein `accesskey`-Attribut zum `a`-Tag mit der `id` von `second` hinzufügen.

```js
assert($('#second').attr('accesskey'));
```

Dein Code sollte das `accesskey`-Attribut auf dem `a`-Tag mit der `id` von `first` auf `g` setzen. Beachte, dass die Groß-/Kleinschreibung eine Rolle spielt.

```js
assert($('#first').attr('accesskey') == 'g');
```

Dein Code sollte das `accesskey`-Attribut auf dem `a`-Tag mit der `id` von `second` auf `c` setzen. Beachte, dass die Groß-/Kleinschreibung eine Rolle spielt.

```js
assert($('#second').attr('accesskey') == 'c');
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
