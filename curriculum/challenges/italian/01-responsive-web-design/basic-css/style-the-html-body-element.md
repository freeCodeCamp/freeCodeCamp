---
id: bad87fee1348bd9aedf08736
title: Stilizzare l'elemento Body
challengeType: 0
videoUrl: 'https://scrimba.com/c/cB77PHW'
forumTopicId: 18313
dashedName: style-the-html-body-element
---

# --description--

Ora iniziamo a parlare dell'ereditarietà dei CSS.

Ogni pagina HTML ha un elemento `body`.

# --instructions--

Possiamo dimostrare che l'elemento `body` esiste dandogli un `background-color` nero.

Possiamo farlo aggiungendo quanto segue al nostro elemento `style`:

```css
body {
  background-color: black;
}
```

# --hints--

Il tuo elemento `body` dovrebbe avere il `background-color` nero.

```js
assert($('body').css('background-color') === 'rgb(0, 0, 0)');
```

La regola CSS dovrebbe essere formattata correttamente con entrambe le parentesi graffe di apertura e chiusura.

```js
assert(
  code.match(/<style>\s*body\s*\{\s*background.*\s*:\s*.*;\s*\}\s*<\/style>/i)
);
```

La tua regola CSS dovrebbe terminare con un punto e virgola.

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
