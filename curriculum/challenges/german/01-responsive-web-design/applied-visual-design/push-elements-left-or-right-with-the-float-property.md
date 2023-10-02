---
id: 587d78a3367417b2b2512ace
title: Verschiebe Elemente mit der float-Eigenschaft nach links oder rechts
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MDqu2'
forumTopicId: 301066
dashedName: push-elements-left-or-right-with-the-float-property
---

# --description--

Das nächste Mittel zur Positionierung verwendet nicht die `position`-, sondern `float`-Eigenschaft von Elementen. Float-Elemente sind nicht Teil des normalen Flusses und werden entweder in Richtung der linken (`left`) oder rechten (`right`) Seite ihres übergeordneten Containers geschoben. Float wird üblicherweise gemeinsam mit der Eigenschaft `width` verwendet, um festzulegen, wie viel horizontalen Platz das Element benötigt.

# --instructions--

Das angegebene Markup würde gut als Zweispalten-Layout, mit den `section`- und `aside`-Elementen nebeneinander, funktionieren. Gib dem Element `#left` eine `float`-Eigenschaft von `left` und dem Element `#right` eine `float`-Eigenschaft von `right`.

# --hints--

Das Element mit der Id `left` sollte einen `float`-Wert von `left` haben.

```js
assert($('#left').css('float') == 'left');
```

Das Element mit der Id `right` sollte einen `float`-Wert von `right` haben.

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
