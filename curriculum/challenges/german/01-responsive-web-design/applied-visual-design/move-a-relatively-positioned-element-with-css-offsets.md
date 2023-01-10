---
id: 587d781e367417b2b2512aca
title: Versetze ein relativ positioniertes Element mit CSS-Offsets
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bQEA4'
forumTopicId: 301065
dashedName: move-a-relatively-positioned-element-with-css-offsets
---

# --description--

Die CSS-Offsets von `top` oder `bottom` bzw. `left` oder `right` teilen dem Browser mit, wie weit er ein Element im Verhältnis zu dessen Ursprungsposition im normalen Fluss versetzen soll. Ein Offset setzt ein Element von einer gegebenen Position ab, somit bewegt sich dieses Element von der referenzierten Seite weg (effektiv in die entgegengesetzte Richtung). Wie du in der letzten Aufgabe gesehen hast, bewegte der `top`-Offset die Überschrift `h2` nach unten. Analog dazu, bewegt ein `left`-Offset ein Element nach rechts.

# --instructions--

Verwende Offsets, um die `h2` um 15 Pixel nach rechts und 10 Pixel nach oben zu bewegen.

# --hints--

Dein Code sollte Offsets verwenden, um die `h2` 10px relativ nach oben zu versetzen. Anders ausgedrückt, setze es 10px von `bottom` ab, wo es sich normalerweise befindet.

```js
assert($('h2').css('bottom') == '10px');
```

Dein Code sollte Offsets verwenden, um die `h2` 15px relativ nach rechts zu versetzen. Anders ausgedrückt, setze es 15px von `left` ab, wo es sich normalerweise befindet.

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
