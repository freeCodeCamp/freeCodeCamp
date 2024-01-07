---
id: 587d78a7367417b2b2512ae1
title: Bewegung mittels CSS-Animation kreieren
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7amZfW'
forumTopicId: 301051
dashedName: create-movement-using-css-animation
---

# --description--

Wenn Elemente eine spezifizierte `position` haben, z. B. fest als `fixed`, oder relativ als `relative`, können die CSS-Offset-Eigenschaften rechts als `right`, links als `left`, oben als `top` und unten als `bottom` in Animationsregeln verwendet werden, um Bewegungen zu schaffen.

Wie im Beispiel unten gezeigt, kannst du das Element nach oben schieben, indem du die `top`-Eigenschaft des `50%`-Keyframes auf 50px setzt, aber auf 0px für den ersten (`0%`) und den letzten (`100%`)-Keyframe lässt.

```css
@keyframes rainbow {
  0% {
    background-color: blue;
    top: 0px;
  }
  50% {
    background-color: green;
    top: 50px;
  }
  100% {
    background-color: yellow;
    top: 0px;
  }
}
```

# --instructions--

Füge der Animation des `div` eine horizontale Bewegung hinzu. Verwende die `left`-Offset-Eigenschaft, in der `@keyframes`-Regel, sodass der Regenbogen mit 0px bei `0%` beginnt, sich zu 25px bei `50%` und schließlich zu -25px bei `100%` bewegt. Ersetze nicht die `top`-Eigenschaft im Editor. Die Animation sollte sowohl vertikale als auch horizontale Bewegungen haben.

# --hints--

Die `@keyframes`-Regel für `0%` sollte den `left`-Offset von 0px verwenden.

```js
assert(code.match(/[^50]0%\s*?{[\s\S]*?left:\s*?0px(;[\s\S]*?|\s*?)}/gi));
```

Die `@keyframes`-Regel für `50%` sollte den `left`-Offset von 25px verwenden.

```js
assert(code.match(/50%\s*?{[\s\S]*?left:\s*?25px(;[\s\S]*?|\s*?)}/gi));
```

Die `@keyframes`-Regel für `100%` sollte den `left`-Offset von -25px verwenden.

```js
assert(code.match(/100%\s*?{[\s\S]*?left:\s*?-25px(;[\s\S]*?|\s*?)}/gi));
```

# --seed--

## --seed-contents--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;

    }
    50% {
      background-color: green;
      top: 50px;

    }
    100% {
      background-color: yellow;
      top: 0px;

    }
  }
</style>

<div id="rect"></div>
```

# --solutions--

```html
<style>
  div {
    height: 40px;
    width: 70%;
    background: black;
    margin: 50px auto;
    border-radius: 5px;
    position: relative;
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
      top: 0px;
      left: 0px;
    }
    50% {
      background-color: green;
      top: 50px;
      left: 25px;
    }
    100% {
      background-color: yellow;
      top: 0px;
      left: -25px;
    }
  }
</style>
<div id="rect"></div>
```
