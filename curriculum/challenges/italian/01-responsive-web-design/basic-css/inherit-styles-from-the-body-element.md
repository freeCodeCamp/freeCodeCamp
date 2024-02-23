---
id: bad87fee1348bd9aedf08746
title: Ereditare gli stili dall'elemento Body
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bmdtR'
forumTopicId: 18204
dashedName: inherit-styles-from-the-body-element
---

# --description--

Abbiamo visto che ogni pagina HTML ha un elemento `body`, e che anche il suo elemento `body` può essere stilizzato con CSS.

Ricorda, puoi stilizzare il tuo elemento `body` proprio come qualsiasi altro elemento HTML, e tutti gli altri elementi erediteranno gli stili dell'elemento `body`.

# --instructions--

Per prima cosa, crea un elemento `h1` con il testo `Hello World`

Quindi, dai a tutti gli elementi sulla tua pagina il colore `green` aggiungendo `color: green;` alla tua dichiarazione di stile dell'elemento `body`.

Infine, dai al tuo elemento `body` la font-family di `monospace` aggiungendo `font-family: monospace;` alla tua dichiarazione di stile per l'elemento `body`.

# --hints--

Dovresti creare un elemento `h1`.

```js
assert($('h1').length > 0);
```

Il tuo elemento `h1` dovrebbe contenere il testo `Hello World`.

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .text()
      .match(/hello world/i)
);
```

Il tuo elemento `h1` dovrebbe avere un tag di chiusura.

```js
assert(
  code.match(/<\/h1>/g) &&
    code.match(/<h1/g) &&
    code.match(/<\/h1>/g).length === code.match(/<h1/g).length
);
```

Il tuo elemento `body` dovrebbe avere la proprietà `color` di `green`.

```js
assert($('body').css('color') === 'rgb(0, 128, 0)');
```

Il tuo elemento `body` dovrebbe avere la proprietà `font-family` di `monospace`.

```js
assert(
  $('body')
    .css('font-family')
    .match(/monospace/i)
);
```

Il tuo elemento `h1` dovrebbe ereditare il font `monospace` dal tuo elemento `body`.

```js
assert(
  $('h1').length > 0 &&
    $('h1')
      .css('font-family')
      .match(/monospace/i)
);
```

Il tuo elemento `h1` dovrebbe ereditare il colore `green` dal tuo elemento `body`.

```js
assert($('h1').length > 0 && $('h1').css('color') === 'rgb(0, 128, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: black;
  }

</style>
```

# --solutions--

```html
<style>
  body {
    background-color: black;
    font-family: monospace;
    color: green;
  }

</style>
<h1>Hello World!</h1>
```
