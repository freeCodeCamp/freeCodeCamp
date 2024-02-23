---
id: bad87fee1348bd9aedf08736
title: Aplica un estilo al elemento HTML body
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB77PHW'
forumTopicId: 18313
dashedName: style-the-html-body-element
---

# --description--

Ahora vamos comenzar de cero y hablaremos sobre la herencia CSS (en inglés: "CSS inheritance").

Toda página HTML tiene un elemento `body`.

# --instructions--

Para demostrar que el elemento `body` existe aquí, podemos asignarle un `background-color` black (negro).

Para ello, agregamos la siguiente declaración a nuestro elemento `style`:

```css
body {
  background-color: black;
}
```

# --hints--

Tu elemento `body` debe tener un `background-color` black (negro).

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

Tu regla CSS debe tener el formato correcto, usando llaves de apertura y de cierre.

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

Tu regla CSS debe terminar con un punto y coma.

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

# --seed--

## --seed-contents--

```html
<style>

</style>
```

# --solutions--

```html
<style>
body {
  background-color: black;
}
</style>
```
