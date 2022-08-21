---
id: 587d78a5367417b2b2512ad9
title: Verwende die transform-Eigenschaft mit scale, um die Größe eines Elements zu ändern
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MZVSg'
forumTopicId: 301076
dashedName: use-the-css-transform-scale-property-to-change-the-size-of-an-element
---

# --description--

Um die Skalierung eines Elements zu ändern, bietet CSS die Eigenschaft `transform` zusammen mit der Funktion `scale()`. Das folgende Code-Beispiel verdoppelt die Größe aller Absatzelemente auf der Seite:

```css
p {
  transform: scale(2);
}
```

# --instructions--

Vergrößere das Element mit der Id `ball2` auf das 1,5-fache seiner ursprünglichen Größe.

# --hints--

Die Eigenschaft `transform` für `#ball2` sollte so eingestellt werden, dass er 1,5-mal so groß ist.

```js
assert(
  code.match(
    /#ball2\s*?{\s*?left:\s*?65%;\s*?transform:\s*?scale\(1\.5\);\s*?}|#ball2\s*?{\s*?transform:\s*?scale\(1\.5\);\s*?left:\s*?65%;\s*?}/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>
  .ball {
    width: 40px;
    height: 40px;
    margin: 50 auto;
    position: fixed;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    border-radius: 50%;
  }
  #ball1 {
    left: 20%;
  }
  #ball2 {
    left: 65%;

  }


</style>

<div class="ball" id= "ball1"></div>
<div class="ball" id= "ball2"></div>
```

# --solutions--

```html
<style>
  .ball {
    width: 40px;
    height: 40px;
    margin: 50 auto;
    position: fixed;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    border-radius: 50%;
  }
  #ball1 {
    left: 20%;
  }
  #ball2 {
    left: 65%;
    transform: scale(1.5);
  }
</style>
<div class="ball" id= "ball1"></div>
<div class="ball" id= "ball2"></div>
```
