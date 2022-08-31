---
id: 587d781d367417b2b2512ac8
title: Den Hover-Status eines Anchor-Tags anpassen
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakRGcm'
forumTopicId: 301035
dashedName: adjust-the-hover-state-of-an-anchor-tag
---

# --description--

Diese Aufgabe wird die Verwendung von Pseudo-Klassen vorstellen. Eine Pseudo-Klasse ist ein Schlüsselwort, welches man einem Selektor hinzufügen kann, um einen bestimmten Zustand des Elements auszuwählen.

Zum Beispiel kann das Styling für den Hover-Status eines Anchor-Tags mit dem Pseudoklassen-Selektor `:hover` geändert werden. Hier ist der CSS-Code um die `color` des Anker-Tags während des Hover-Statuses auf Rot zu ändern:

```css
a:hover {
  color: red;
}
```

# --instructions--

Der Texteditor enthält eine CSS-Regel, um alle `a`-Tags schwarz zu stylen. Füge eine Regel hinzu, damit die `color` Blau ist, wenn der Benutzer über das `a`-Tag fährt.

# --hints--

Die Anchor-Tag-`color` sollte Schwarz bleiben, füge nur CSS-Regeln für den `:hover`-Status hinzu.

```js
assert($('a').css('color') == 'rgb(0, 0, 0)');
```

Das Anchor-Tag sollte die `color` Blau haben, wenn man darüber fährt.

```js
assert(
  code.match(
    /a:hover\s*?{\s*?color:\s*?(blue|rgba\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?,\s*?1\s*?\)|#00F|rgb\(\s*?0\s*?,\s*?0\s*?,\s*?255\s*?\))\s*?;\s*?}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  a {
    color: #000;
  }



</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```

# --solutions--

```html
<style>
  a {
    color: #000;
  }
  a:hover {
    color: rgba(0,0,255,1);
  }
</style>
<a href="https://freecatphotoapp.com/" target="_blank">CatPhotoApp</a>
```
