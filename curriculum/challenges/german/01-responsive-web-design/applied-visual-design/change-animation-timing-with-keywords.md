---
id: 587d78a8367417b2b2512ae7
title: Das Timing von Animationen mit Schlüsselwörtern ändern
challengeType: 0
videoUrl: 'https://scrimba.com/c/cJKvwCM'
forumTopicId: 301045
dashedName: change-animation-timing-with-keywords
---

# --description--

In CSS-Animationen steuert die Eigenschaft `animation-timing-function` wie schnell sich ein animiertes Element über die Dauer der Animation ändert. Wenn die Animation ein Auto ist, das sich von Punkt A nach Punkt B in einer bestimmten Zeit bewegt (die `animation-duration`), beschreibt die `animation-timing-function`, wie das Auto während des Fahrens beschleunigt und verlangsamt.

Es gibt eine Reihe vordefinierter Schlüsselwörter für beliebte Optionen. Der Standardwert `ease` zum Beispiel beginnt langsam, beschleunigt sich in der Mitte und verlangsamt sich am Ende wieder. Weitere Optionen sind `ease-out`, welche am Anfang schnell ist und sich dann verlangsamt, `ease-in`, welche am Anfang langsam ist und sich am Ende beschleunigt oder `linear`, welche eine konstante Animationsgeschwindigkeit im gesamten Programm anwendet.

# --instructions--

Füge für die Elemente mit einer Id von `ball1` und `ball2`, jeweils eine Eigenschaft `animation-timing-function` hinzu und setze `#ball1` auf `linear` und `#ball2` auf `ease-out`. Beachte den Unterschied zwischen der Bewegung der Elemente während der Animationen und dass die beiden zusammen enden, da sie die gleiche `animation-duration` von 2 Sekunden haben.

# --hints--

Der Wert der Eigenschaft `animation-timing-function` für das Element mit der Id `ball1` sollte `linear` sein.

```js
const ball1Animation = __helpers.removeWhiteSpace(
  $('#ball1').css('animation-timing-function')
);
assert(ball1Animation == 'linear' || ball1Animation == 'cubic-bezier(0,0,1,1)');
```

Der Wert der Eigenschaft `animation-timing-function` für das Element mit der Id `ball2` sollte `ease-out` sein.

```js
const ball2Animation = __helpers.removeWhiteSpace(
  $('#ball2').css('animation-timing-function')
);
assert(
  ball2Animation == 'ease-out' || ball2Animation == 'cubic-bezier(0,0,0.58,1)'
);
```

# --seed--

## --seed-contents--

```html
<style>

  .balls {
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left:27%;

  }
  #ball2 {
    left:56%;

  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }

</style>

<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```

# --solutions--

```html
<style>
  .balls {
    border-radius: 50%;
    background: linear-gradient(
      35deg,
      #ccffff,
      #ffcccc
    );
    position: fixed;
    width: 50px;
    height: 50px;
    margin-top: 50px;
    animation-name: bounce;
    animation-duration: 2s;
    animation-iteration-count: infinite;
  }
  #ball1 {
    left:27%;
    animation-timing-function: linear;
  }
  #ball2 {
    left:56%;
    animation-timing-function: ease-out;
  }

  @keyframes bounce {
    0% {
      top: 0px;
    }
    100% {
      top: 249px;
    }
  }
</style>
<div class="balls" id="ball1"></div>
<div class="balls" id="ball2"></div>
```
