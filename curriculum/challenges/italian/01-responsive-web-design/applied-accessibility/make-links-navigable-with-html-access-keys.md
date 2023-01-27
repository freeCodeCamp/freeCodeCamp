---
id: 587d7790367417b2b2512aaf
title: Rendere i link navigabili con le chiavi di accesso HTML
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQvmaTp'
forumTopicId: 301021
dashedName: make-links-navigable-with-html-access-keys
---

# --description--

HTML offre l'attributo `accesskey` per specificare una scorciatoia da tastiera per attivare o portare il focus su un elemento. L'aggiunta di un attributo `accesskey` può rendere la navigazione più efficiente per chi usa solo la tastiera.

HTML5 permette di utilizzare questo attributo su qualsiasi elemento, ma esso è particolarmente utile quando viene utilizzato con un elemento interattivo. Questo include link, pulsanti e controlli dei moduli.

Ecco un esempio:

```html
<button accesskey="b">Important Button</button>
```

# --instructions--

Camper Cat vuole che i link intorno ai due titoli degli articoli del blog abbiano delle scorciatoie da tastiera, in modo che gli utenti possano passare rapidamente alla storia completa. Aggiungi un attributo `accesskey` ad entrambi i link e imposta il primo a `g` (per Garfield) e il secondo a `c` (per Chuck Norris).

# --hints--

Il tuo codice dovrebbe avere un attributo `accesskey` sul tag `a` con l' `id` di `first`.

```js
assert($('#first').attr('accesskey'));
```

Il tuo codice dovrebbe avere un attributo `accesskey` sul tag `a` con l' `id` di `second`.

```js
assert($('#second').attr('accesskey'));
```

Il tuo codice dovrebbe impostare l'attributo `accesskey` sul tag `a` con l'`id` di `first` a `g`. Nota che c'è differenza tra lettere maiuscole e minuscole.

```js
assert($('#first').attr('accesskey') == 'g');
```

Il tuo codice dovrebbe impostare l'attributo `accesskey` sul tag `a` con l'`id` di `second` a `c`. Nota che c'è differenza tra lettere maiuscole e minuscole.

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
