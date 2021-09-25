---
id: 587d78a3367417b2b2512ad0
title: Centrare un elemento orizzontalmente usando la proprietà margin
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLJqU4'
forumTopicId: 301043
dashedName: center-an-element-horizontally-using-the-margin-property
---

# --description--

Un'altra tecnica di posizionamento è quella di centrare un blocco orizzontalmente. Un modo per farlo è quello di impostare il suo `margin` ad un valore auto.

Questo metodo funziona anche per le immagini. Per impostazione predefinita, le immagini sono elementi in linea, ma possono essere cambiate in elementi di tipo blocco impostando la proprietà `display` su `block`.

# --instructions--

Centra il `div` sulla pagina aggiungendo una proprietà `margin` con un valore `auto`.

# --hints--

Il `div` dovrebbe avere un `margin` impostato su `auto`.

```js
assert(new __helpers.CSSHelp(document).getStyle('div')?.margin === 'auto');
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;

  }
</style>
<div></div>
```

# --solutions--

```html
<style>
  div {
    background-color: blue;
    height: 100px;
    width: 100px;
    margin: auto;
  }
</style>
<div></div>
```
