---
id: 587d7790367417b2b2512aaf
title: Haz que los enlaces sean navegables con claves de acceso HTML
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQvmaTp'
forumTopicId: 301021
dashedName: make-links-navigable-with-html-access-keys
---

# --description--

HTML ofrece el atributo `accesskey` para especificar una tecla de acceso directo para activar o enfocar un elemento. Añadiendo un atributo `accesskey` puede hacer que la navegación sea más eficiente para los usuarios que solo utilizan teclado.

HTML5 permite que este atributo se use en cualquier elemento, pero es particularmente útil cuando se usa con elementos interactivos. Esto incluye enlaces, botones y controles de formulario.

Aquí hay un ejemplo:

```html
<button accesskey="b">Important Button</button>
```

# --instructions--

Camper Cat quiere que los enlaces alrededor de los dos títulos de artículos de blog tengan atajos de teclado para que los usuarios de su sitio puedan navegar rápidamente a la historia completa. Agrega un atributo `accesskey` a ambos enlaces y establece el primero en `g` (para Garfield) y el segundo en `c` (para Chuck Norris).

# --hints--

Tu código debe agregar un atributo `accesskey` a la etiqueta `a` con el `id` de `first`.

```js
assert($('#first').attr('accesskey'));
```

Tu código debe agregar un atributo `accesskey` a la etiqueta `a` con el `id` de `second`.

```js
assert($('#second').attr('accesskey'));
```

Tu código debe establecer el atributo `accesskey` en la etiqueta `a` con el `id` de `first` en `g`. Ten en cuenta que las mayúsculas y minúsculas importan.

```js
assert($('#first').attr('accesskey') == 'g');
```

Tu código debe establecer `accesskey` en la etiqueta `a` con el `id` de `second` en `c`. Ten en cuenta que las mayúsculas y minúsculas importan.

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
