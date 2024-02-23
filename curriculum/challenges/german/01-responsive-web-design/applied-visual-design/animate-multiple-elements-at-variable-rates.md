---
id: 587d78a8367417b2b2512ae6
title: Mehrere Elemente mit unterschiedlicher Geschwindigkeit animieren
challengeType: 0
videoUrl: 'https://scrimba.com/c/cnpWZc9'
forumTopicId: 301042
dashedName: animate-multiple-elements-at-variable-rates
---

# --description--

In der vorherigen Aufgabe hast du die Geschwindigkeit zweier ähnlich animierter Elemente verändert, indem du deren `@keyframes`-Regel abgeändert hast. Du kannst denselben Effekt erzielen, indem du mehreren Elementen via `animation-duration` eine unterschiedliche Animationsdauer zuweist.

In der im Texteditor laufenden Animation funkeln drei Sterne synchron in einer Endlosschleife. Um sie mit unterschiedlicher Geschwindigkeit funkeln zu lassen, kannst du die `animation-duration`-Eigenschaft je auf andere Werte setzen.

# --instructions--

Setze die `animation-duration` der Elemente mit den Klassen `star-1`, `star-2` und `star-3` auf 1s, 0.9s, und 1.1s.

# --hints--

Die `animation-duration`-Eigenschaft für den Stern mit der Klasse `star-1` sollte weiterhin 1s betragen.

```js
assert($('.star-1').css('animation-duration') == '1s');
```

Die `animation-duration`-Eigenschaft für den Stern mit Klasse `star-2` sollte 0.9s betragen.

```js
assert($('.star-2').css('animation-duration') == '0.9s');
```

Die `animation-duration`-Eigenschaft für den Stern mit Klasse `star-3` sollte 1.1s betragen.

```js
assert($('.star-3').css('animation-duration') == '1.1s');
```

# --seed--

## --seed-contents--

```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  @keyframes twinkle {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>

<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
<div class="star-3 stars"></div>
```

# --solutions--

```html
<style>
  .stars {
    background-color: white;
    height: 30px;
    width: 30px;
    border-radius: 50%;
    animation-iteration-count: infinite;
  }

  .star-1 {
    margin-top: 15%;
    margin-left: 60%;
    animation-duration: 1s;
    animation-name: twinkle;
  }

  .star-2 {
    margin-top: 25%;
    margin-left: 25%;
    animation-duration: 0.9s;
    animation-name: twinkle;
  }

  .star-3 {
    margin-top: 10%;
    margin-left: 50%;
    animation-duration: 1.1s;
    animation-name: twinkle;
  }

  @keyframes twinkle {
    20% {
      transform: scale(0.5);
      opacity: 0.5;
    }
  }

  #back {
    position: fixed;
    padding: 0;
    margin: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(black, #000099, #66c2ff, #ffcccc, #ffeee6);
  }
</style>
<div id="back"></div>
<div class="star-1 stars"></div>
<div class="star-2 stars"></div>
<div class="star-3 stars"></div>
```
