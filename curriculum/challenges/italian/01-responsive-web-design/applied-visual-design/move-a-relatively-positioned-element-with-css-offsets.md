---
id: 587d781e367417b2b2512aca
title: Spostare un elemento posizionato relativamente con gli offset CSS
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bQEA4'
forumTopicId: 301065
dashedName: move-a-relatively-positioned-element-with-css-offsets
---

# --description--

Gli offset (scostamenti) CSS di `top` o `bottom`, e `left` o `right` dicono al browser di quanto spostare un elemento rispetto a dove risiederebbe nel normale flusso del documento. Stai allontanando un elemento da un dato punto, e questo sposta l'elemento lontano dal lato di riferimento (di fatto lo sposta nella direzione opposta). Come hai visto nell'ultima sfida, utilizzando l'offset `top` abbiamo spostato l'`h2` verso il basso. Allo stesso modo, usando un offset `left` sposterai un elemento verso destra.

# --instructions--

Usa gli spostamenti CSS per spostare `h2` di 15 pixel verso destra e 10 pixel verso l'alto.

# --hints--

Il tuo codice dovrebbe utilizzare un offset CSS per posizionare `h2` di 10px verso l'alto. In altre parole, spostalo di 10px lontano dal lato `bottom` rispetto alla sua posizione normale.

```js
assert($('h2').css('bottom') == '10px');
```

Il tuo codice dovrebbe utilizzare un offset CSS per posizionare relativamente l'`h2` di 15px verso destra. In altre parole, spostalo 15px lontano dal lato `left` di dove si trova normalmente.

```js
assert($('h2').css('left') == '15px');
```

# --seed--

## --seed-contents--

```html
<head>
<style>
  h2 {
    position: relative;


  }
</style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```

# --solutions--

```html
<head>
<style>
  h2 {
    position: relative;
    left: 15px;
    bottom: 10px;
  }
</style>
</head>
<body>
  <h1>On Being Well-Positioned</h1>
  <h2>Move me!</h2>
  <p>I still think the h2 is where it normally sits.</p>
</body>
```
