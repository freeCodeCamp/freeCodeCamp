---
id: 587d78a9367417b2b2512aea
title: Natürlichere Bewegungen mittels Bézierkurven erzeugen
challengeType: 0
videoUrl: 'https://scrimba.com/c/c7akWUv'
forumTopicId: 301063
dashedName: make-motion-more-natural-using-a-bezier-curve
---

# --description--

In dieser Aufgabe wird ein Element animiert, das die Bewegung eines Jonglierballs simulieren soll. In früheren Aufgaben wurden die `linear`- und `ease-out`-Bézierkurven behandelt, jedoch stellt keine davon die Jonglierbewegung akkurat dar. Dafür musst du eine Bézierkurve individuell anpassen.

Die `animation-timing-function` wiederholt sich automatisch bei jedem Keyframe, wenn `animation-iteration-count` (dt. Anzahl der Animationsdurchläufe) auf infinite (dt. unendlich) gesetzt wird. Da in der Mitte der Animation (bei `50%`) eine Keyframe-Regel definiert ist, ergeben sich zwei identische Animationsabläufe für die Aufwärts- und Abwärtsbewegung des Balles.

Die folgende kubische Bézierkurve simuliert eine Jonglierbewegung:

```css
cubic-bezier(0.3, 0.4, 0.5, 1.6);
```

Beachte, dass der Wert von y2 größer als 1 ist. Obwohl die kubische Bézierkurve auf einem Koordinatensystem von 1 x 1 platziert ist und dieses nur x-Werte von 0 bis 1 akzeptiert, kann der y-Wert größer als 1 sein. Dadurch entsteht eine Springbewegung, die sich gut zur Simulation eines Jonglierballs eignet.

# --instructions--

Ändere den Wert der `animation-timing-function` des Elements mit der Id `green` in eine `cubic-bezier`-Funktion mit x1, y1, x2, y2 Werten von 0.311, 0.441, 0.444, 1.649.

# --hints--

Der Wert der Eigenschaft `animation-timing-function` für das Element mit der Id `green` sollte wie angegeben eine `cubic-bezier`-Funktion mit x1, y1, x2, y2 Werten sein.

```js
assert(
  $('#green').css('animation-timing-function') ==
    'cubic-bezier(0.311, 0.441, 0.444, 1.649)'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.69, 0.1, 1, 0.1);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```

# --solutions--

```html
<style>
  .balls {
    border-radius: 50%;
    position: fixed;
    width: 50px;
    height: 50px;
    top: 60%;
    animation-name: jump;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #red {
    background: red;
    left: 25%;
    animation-timing-function: linear;
  }
  #blue {
    background: blue;
    left: 50%;
    animation-timing-function: ease-out;
  }
  #green {
    background: green;
    left: 75%;
    animation-timing-function: cubic-bezier(0.311, 0.441, 0.444, 1.649);
  }

  @keyframes jump {
    50% {
      top: 10%;
    }
  }
</style>
<div class="balls" id="red"></div>
<div class="balls" id="blue"></div>
<div class="balls" id="green"></div>
```
