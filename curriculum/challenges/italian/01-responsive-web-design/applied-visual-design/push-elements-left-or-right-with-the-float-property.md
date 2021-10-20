---
id: 587d78a3367417b2b2512ace
title: Spingere gli elementi a sinistra o a destra con la proprietà float
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDqu2'
forumTopicId: 301066
dashedName: push-elements-left-or-right-with-the-float-property
---

# --description--

Il prossimo strumento di posizionamento non utilizza effettivamente `position`, ma imposta la proprietà `float` di un elemento. Gli elementi fluttuanti vengono rimossi dal normale flusso di un documento e spinti verso `left` o `right` dell'elemento che li contiene. È comunemente usato con la proprietà `width` per specificare quanto spazio orizzontale viene richiesto dall'elemento fluttuante.

# --instructions--

Il "markup" dato funzionerebbe bene con un layout a due colonne, con gli elementi `section` e `aside` uno accanto all'altro. Dai all'oggetto `#left` un `float` di `left` e all'oggetto `#right` un `float` di `right`.

# --hints--

L'elemento con id `left` dovrebbe avere un `float` di `left`.

```js
assert($('#left').css('float') == 'left');
```

L'elemento con id `right` dovrebbe avere un `float` di `right`.

```js
assert($('#right').css('float') == 'right');
```

# --seed--

## --seed-contents--

```html
<head>
  <style>
    #left {

      width: 50%;
    }
    #right {

      width: 40%;
    }
    aside, section {
      padding: 2px;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>
```

# --solutions--

```html
<head>
  <style>
    #left {
      float: left;
      width: 50%;
    }
    #right {
      float: right;
      width: 40%;
    }
    aside, section {
      padding: 2px;
      background-color: #ccc;
    }
  </style>
</head>
<body>
  <header>
    <h1>Welcome!</h1>
  </header>
  <section id="left">
    <h2>Content</h2>
    <p>Good stuff</p>
  </section>
  <aside id="right">
    <h2>Sidebar</h2>
    <p>Links</p>
  </aside>
</body>
```
