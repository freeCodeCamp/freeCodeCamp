---
id: 587d78a6367417b2b2512adc
title: Verwende die transform-Eigenschaft skewY, um ein Element entlang der y-Achse zu verzerren
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MZ2uB'
forumTopicId: 301075
dashedName: use-the-css-transform-property-skewy-to-skew-an-element-along-the-y-axis
---

# --description--

Da die `skewX()`-Funktion ein ausgewähltes Element entlang der x-Achse um einen bestimmten Grad krümmt, überrascht es nicht, dass `skewY()` ein Element entlang der y-Achse verzerrt.

# --instructions--

Verzerre das Element mit der Id `top` um -10 Grad entlang der y-Achse mithilfe der Eigenschaft `transform`.

# --hints--

Das Element mit der Id `top` sollte um -10 Grad entlang seiner y-Achse verzerrt werden.

```js
assert(code.match(/#top\s*?{\s*?.*?\s*?transform:\s*?skewY\(-10deg\);/g));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
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

# --solutions--

```html
<style>
  div {
    width: 70%;
    height: 100px;
    margin: 50px auto;
  }
  #top {
    background-color: red;
    transform: skewY(-10deg);
  }
  #bottom {
    background-color: blue;
    transform: skewX(24deg);
  }
</style>
<div id="top"></div>
<div id="bottom"></div>
```
