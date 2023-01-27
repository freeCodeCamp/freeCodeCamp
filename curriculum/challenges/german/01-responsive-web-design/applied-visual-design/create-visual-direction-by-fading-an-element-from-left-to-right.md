---
id: 587d78a7367417b2b2512ae2
title: Erstelle eine visuelle Richtung, indem ein Element von links nach rechts verblasst
challengeType: 0
videoUrl: 'https://scrimba.com/c/cGJqqAE'
forumTopicId: 301054
dashedName: create-visual-direction-by-fading-an-element-from-left-to-right
---

# --description--

Bei dieser Aufgabe änderst du die `opacity`-Eigenschaft (dt. Deckkraft) eines animierten Elements so, dass es allmählich ausgeblendet wird, während es sich der rechten Bildschirmseite nähert.

In der gezeigten Animation bewegt sich das runde Element mit dem Farbverlauf bis zur 50%-Marke der Animation nach rechts, entsprechend der `@keyframes`-Regel.

# --instructions--

Wähle das Element mit der Id `ball` und füge die Eigenschaft `opacity` hinzu, die bei `50%` auf 0.1 festgelegt ist, damit das Element ausgeblendet wird, während es sich nach rechts bewegt.

# --hints--

Die `keyframes`-Regel zum Ausblenden sollte die Eigenschaft `opacity` auf 0.1 bei 50% setzen.

```js
assert(
  code.match(
    /@keyframes fade\s*?{\s*?50%\s*?{\s*?(?:left:\s*?60%;\s*?opacity:\s*?0?\.1;|opacity:\s*?0?\.1;\s*?left:\s*?60%;)/gi
  )
);
```

# --seed--

## --seed-contents--

```html
<style>

  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;

    }
  }

</style>

<div id="ball"></div>
```

# --solutions--

```html
<style>
  #ball {
    width: 70px;
    height: 70px;
    margin: 50px auto;
    position: fixed;
    left: 20%;
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    animation-name: fade;
    animation-duration: 3s;
  }

  @keyframes fade {
    50% {
      left: 60%;
      opacity: 0.1;
    }
  }
</style>
<div id="ball"></div>
```
