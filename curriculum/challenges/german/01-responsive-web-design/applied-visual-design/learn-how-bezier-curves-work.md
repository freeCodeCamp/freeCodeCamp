---
id: 587d78a9367417b2b2512ae8
title: Lerne wie Bézierkurven funktionieren
challengeType: 0
videoUrl: 'https://scrimba.com/c/c9bDrs8'
forumTopicId: 301058
dashedName: learn-how-bezier-curves-work
---

# --description--

In der letzten Aufgabe wurde die CSS-Eigenschaft `animation-timing-function` sowie ein paar weitere Schlüsselwörter, die die Geschwindigkeit einer Animation während ihrer Ablaufdauer verändern, vorgestellt. Neben Schlüsselwörtern bietet CSS eine weitere Möglichkeit, um Animationen noch genauer kontrollieren zu können, nämlich mittels Bézierkurven.

In CSS-Animationen benutzt man Bézierkurven mit der `cubic-bezier`-Funktion. Die Form der Kurve repräsentiert den Ablauf der Animation. Die Kurve befindet sich auf einem 1 mal 1 großen Koordinatensystem. Die x-Achse dieses Koordinatensystems repräsentiert die Dauer der Animation (wie eine Zeitskala) und die y-Achse ist die Änderung in der Animation.

Die `cubic-bezier`-Funktion besteht aus vier Hauptpunkten. Diese befinden sich auf dem 1 mal 1 großen Raster und heißen: `p0`, `p1`, `p2` und `p3`. `p0` und `p3` sind vordefiniert. Sie sind die Anfangs- und Endpunkte und befinden sich immer an den Positionen (0, 0) und (1, 1). Indem du die x- und y-Werte der anderen beiden Punkte bestimmst - d. h. dadurch, wo du sie im Koordinatensystem platzierst - gibst du die Form der Animationskurve vor. Dies erreicht man in CSS, indem man die x- und y-Werte der `p1` und `p2` "Anker"-Punkte in folgender Form deklariert: `(x1, y1, x2, y2)`. Hier sehen wir ein ganzes Beispiel einer Bézierkurve in CSS:

```css
animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
```

Im obigen Beispiel sind die x- und y-Werte für jeden Punkt gleich. (x1 = 0.25 = y1 und x2 = 0.75 = y2) Wie du dich vielleicht aus Geometrieunterricht erinnerst, ergibt das eine gerade Linie zwischen dem Ursprungspunkt (0, 0) und dem Endpunkt (1, 1). Diese Animation ändert ein Element linear über ihre Dauer und hat denselben Effekt wie die Verwendung des Schlüsselworts `linear`. Mit anderen Worten: Sie verändert sich mit konstanter Geschwindigkeit.

# --instructions--

Ändere für das Element mit der ID `ball1` den Wert der Eigenschaft `animation-timing-function` von `linear` in eine äquivalente `cubic-bezier`-Funktion. Verwende die im obigen Beispiel angegebenen Punktwerte.

# --hints--

Der Wert der Eigenschaft `animation-timing-function` für das Element mit der ID `ball1` sollte eine gleichartige lineare `cubic-bezier` Funktion sein.

```js
assert(
  $('#ball1').css('animation-timing-function') ==
    'cubic-bezier(0.25, 0.25, 0.75, 0.75)'
);
```

Der Wert der Eigenschaft `animation-timing-function` für das Element mit der ID `ball2` sollte sich nicht ändern.

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

  .balls{
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
    left: 27%;
    animation-timing-function: linear;
  }
  #ball2 {
    left: 56%;
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

# --solutions--

```html
<style>

  .balls{
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
    left: 27%;
    animation-timing-function: cubic-bezier(0.25, 0.25, 0.75, 0.75);
  }
  #ball2 {
    left: 56%;
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
