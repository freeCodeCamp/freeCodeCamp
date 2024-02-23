---
id: 587d781e367417b2b2512acc
title: Sperren eines Elements im Browserfenster mit der Positionierungseigenschaft fixed
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDNUR'
forumTopicId: 301061
dashedName: lock-an-element-to-the-browser-window-with-fixed-positioning
---

# --description--

Das nächste Layoutschema, das CSS anbietet, ist die Positionierungseigenschaft `fixed`. Dies ist eine Art absoluter Positionierung, die ein Element relativ zum Browserfenster sperrt. Ähnlich wie bei der absoluten Positionierung, wird es mit den Offset-Eigenschaften verwendet und entfernt auch das Element aus dem normalen Fluss des Dokuments. Andere Elemente "realisieren" nicht mehr, wo sie positioniert sind, was an anderer Stelle Layoutanpassungen erfordern kann.

Ein wichtiger Unterschied zwischen `fixed` und `absolute` Positionierung ist, dass sich ein fix positioniertes Element nicht bewegt, wenn ein Nutzer scrollt.

# --instructions--

Die Navigationsleiste im Code ist mit einer Id von `navbar` markiert. Ändere seine `position` auf `fixed` und gib ihm einen Offset von 0 Pixel von `top` und 0 Pixel von `left`. Nachdem du den Code hinzugefügt hast, scrolle im Vorschaufenster auf und ab, um zu sehen, wie die Navigationsleiste an ihrem Platz bleibt.

# --hints--

Das `#navbar`-Element sollte eine `position`-Eigenschaft mit Wert `fixed` haben.

```js
assert($('#navbar').css('position') == 'fixed');
```

Dein Code sollte einen `top`-Offset von 0 Pixel auf dem `#navbar`-Element verwenden.

```js
assert($('#navbar').css('top') == '0px');
```

Dein Code sollte einen `left`-Offset von 0 Pixel auf dem `#navbar`-Element verwenden.

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
