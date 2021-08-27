---
id: 587d781e367417b2b2512acc
title: Bloccare un elemento sulla finestra del browser con il posizionamento Fixed
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDNUR'
forumTopicId: 301061
dashedName: lock-an-element-to-the-browser-window-with-fixed-positioning
---

# --description--

Il successivo schema di layout che CSS offre è la posizione `fixed`, che è un tipo di posizionamento assoluto che posiziona un elemento relativamente alla finestra del browser. Simile al posizionamento assoluto, esso è utilizzato con le proprietà di offset e anch'esso rimuove l'elemento dal normale flusso del documento. Gli altri elementi non "realizzano" più dove sono posizionati, il che potrebbe richiedere delle altre modifiche al layout.

Un'altra differenza chiave tra le posizioni `fixed` e `absolute` è che un elemento con una posizione fixed non si muove quando l'utente scrolla la pagina.

# --instructions--

La barra di navigazione nel codice è etichettata con un id `navbar`. Cambia la sua `position` a `fixed`, e dalle un offset `top` di 0 pixel e un offset `left` di 0 pixel. Dopo aver aggiunto il codice, scorri la finestra di preview per vedere come la barra di navigazione rimane in posizione.

# --hints--

L'elemento `#navbar` deve avere una `position` impostata su `fixed`.

```js
assert($('#navbar').css('position') == 'fixed');
```

Il tuo codice deve avere un offset `top` di 0 pixel sull'elemento `#navbar`.

```js
assert($('#navbar').css('top') == '0px');
```

Il tuo codice deve usare un offset `left` di 0 pixel sull'elemento `#navbar`.

```js
assert($('#navbar').css('left') == '0px');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {



    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```

# --solutions--

```html
<style>
  body {
    min-height: 150vh;
  }
  #navbar {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background-color: #767676;
  }
  nav ul {
    margin: 0px;
    padding: 5px 0px 5px 30px;
  }
  nav li {
    display: inline;
    margin-right: 20px;
  }
  a {
    text-decoration: none;
  }
</style>
<body>
  <header>
    <h1>Welcome!</h1>
    <nav id="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">Contact</a></li>
      </ul>
    </nav>
  </header>
  <p>I shift up when the #navbar is fixed to the browser window.</p>
</body>
```
