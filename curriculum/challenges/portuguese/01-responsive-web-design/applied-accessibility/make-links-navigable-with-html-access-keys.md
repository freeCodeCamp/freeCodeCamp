---
id: 587d7790367417b2b2512aaf
title: Fazer com que os links fiquem navegáveis ​​com chaves de acesso HTML
challengeType: 0
videoUrl: 'https://scrimba.com/c/cQvmaTp'
forumTopicId: 301021
dashedName: make-links-navigable-with-html-access-keys
---

# --description--

O HTML oferece o atributo `accesskey` para especificar uma tecla de atalho para ativar ou levar o foco para um elemento. Usar o atributo `accesskey` pode tornar a navegação mais eficiente para aqueles que usam somente o teclado.

O HTML5 permite que este atributo seja usado em qualquer elemento, mas ele é particularmente útil quando usado com elementos interativos. Isso inclui links, botões e inputs de formulário.

Exemplo:

```html
<button accesskey="b">Important Button</button>
```

# --instructions--

O Camper Cat quer que os links em torno dos títulos dos dois artigos do blog tenham atalhos de teclado para que os usuários de seu site possam navegar rapidamente para a história completa. Adicione um atributo `accesskey` a ambos os links e defina o primeiro como `g` (para Garfield) e o segundo como `c` (para Chuck Norris).

# --hints--

O código deve adicionar um atributo `accesskey` à tag `a` com o `id` de `first`.

```js
assert($('#first').attr('accesskey'));
```

O código deve adicionar um atributo `accesskey` à tag `a` com o `id` de `second`.

```js
assert($('#second').attr('accesskey'));
```

O código deve definir o atributo `accesskey` na tag `a` com o `id` de `first` para `g`. Observe que maiúsculas e minúsculas diferem.

```js
assert($('#first').attr('accesskey') == 'g');
```

O código deve definir o atributo `accesskey` na tag `a` com o `id` de `second` para `c`. Observe que maiúsculas e minúsculas diferem.

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
