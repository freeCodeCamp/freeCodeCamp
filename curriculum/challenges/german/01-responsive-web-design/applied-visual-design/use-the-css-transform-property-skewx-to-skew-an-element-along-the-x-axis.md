---
id: 587d78a6367417b2b2512adb
title: Verwende die transform-Eigenschaft skewX, um ein Element entlang der x-Achse zu verzerren
challengeType: 0
videoUrl: 'https://scrimba.com/c/cyLP8Sr'
forumTopicId: 301074
dashedName: use-the-css-transform-property-skewx-to-skew-an-element-along-the-x-axis
---

# --description--

Die nächste Funktion der Eigenschaft `transform` ist `skewX()`, die das ausgewählte Element entlang seiner x-Achse (horizontal) um einen bestimmten Grad verzerrt.

Der folgende Code verzerrt das Absatzelement um -32 Grad entlang der x-Achse.

```css
p {
  transform: skewX(-32deg);
}
```

# --instructions--

Verzerre das Element mit der Id `bottom` um 24 Grad entlang der x-Achse mit der `transform`-Eigenschaft.

# --hints--

Das Element mit der Id `bottom` sollte um 24 Grad entlang seiner X-Achse verzerrt werden.

```js
assert(code.match(/#bottom\s*?{\s*?.*?\s*?transform:\s*?skewX\(24deg\);/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;

  }
</style>

<div id="top"></div>
<div id="bottom"></div>
```

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin:  50px auto;
  }
  #top {
    background-color: red;
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>
<div id="top"></div>
<div id="bottom"></div>
```
