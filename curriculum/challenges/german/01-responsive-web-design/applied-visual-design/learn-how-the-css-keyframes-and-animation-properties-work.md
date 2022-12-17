---
id: 587d78a7367417b2b2512adf
title: Erfahre wie CSS @keyframes und Animationseigenschaften funktionieren
challengeType: 0
videoUrl: 'https://scrimba.com/c/cakprhv'
forumTopicId: 301059
dashedName: learn-how-the-css-keyframes-and-animation-properties-work
---

# --description--

Um ein Element zu animieren, musst du die Animationseigenschaften und die `@keyframes`-Regel kennen. Die Animationseigenschaften beziehen sich auf das Verhalten der gesamten Animation und die `@keyframes`-Regel bestimmt, welche Elementeigenschaften im Laufe der Animation geändert werden. Es gibt insgesamt acht Animationseigenschaften. In dieser Aufgabe gehen wir es langsam an und konzentrieren uns zunächst auf die beiden Wichtigsten:

Mit der Eigenschaft `animation-name` legt man die Namen von Animationen fest, die später mit `@keyframes` verwendet werden, um CSS-Regeln ihren entsprechenden Animationen zuzuweisen.

Mit `animation-duration` bestimmt man die Animationsdauer.

Mit `@keyframes` beschreibt man was wann innerhalb einer Animation passiert. Dies geschieht durch die Angabe von CSS-Eigenschaften für bestimmte "Frames" (Anm.: ähnlich Schlüsselbildern in der Zeichentrickproduktion) während der Animation, mit Prozentsätzen zwischen 0% und 100%. Wenn du dies mit einem Film vergleichst, würden die CSS-Eigenschaften für 0% beschreiben wie die Elemente in der Eröffnungsszene aussehen. Die CSS-Eigenschaften für 100% würden dem entsprechend das Aussehen der Elemente im Abspann beschreiben. Dann vollzieht CSS die "Verwandlung" (engl. transition) und berechnet die dazwischenliegende Übergangssequenz. Hier ist ein Beispiel, um die Nutzung von `@keyframes` und der Animationseigenschaften zu veranschaulichen:

```css
#anim {
  animation-name: colorful;
  animation-duration: 3s;
}

@keyframes colorful {
  0% {
    background-color: blue;
  }
  100% {
    background-color: yellow;
  }
}
```

Für das Element mit der Id `anim`, setzt das obige Code-Snippet den `animation-name` auf `colorful` und die `animation-duration` auf 3 Sekunden. Dann verweist die `@keyframes`-Regel auf die Animationseigenschaften mit dem Namen `colorful`. Es legt die Farbe Blau am Animationsanfang (0%) fest, die am Ende zu Gelb übergehen wird (100%). Du bist allerdings nicht auf Anfang-Ende-Übergänge beschränkt. Du kannst die Elementeigenschaften für jeden Prozentsatz zwischen 0% und 100% festlegen.

# --instructions--

Erstelle eine Animation für das Element mit der Id `rect`, indem du den `animation-name` auf `rainbow` und die `animation-duration` auf 4 Sekunden setzt. Als Nächstes deklarierst du eine `@keyframes`-Regel und setzt die Hintergrundfarbe `background-color` am Anfang der Animation (`0%`) auf Blau, in der Mitte der Animation (`50%`) auf Grün und am Ende der Animation (`100%`) auf Gelb.

# --hints--

Das Element mit der Id `rect` sollte eine `animation-name`-Eigenschaft mit einem Wert von `rainbow` haben.

```js
assert($('#rect').css('animation-name') == 'rainbow');
```

Das Element mit der Id `rect` sollte eine `animation-duration` von 4 Sekunden haben.

```js
assert($('#rect').css('animation-duration') == '4s');
```

Die `@keyframes`-Regel sollte als `animation-name` den Wert `rainbow` verwenden.

```js
assert(code.match(/@keyframes\s+?rainbow\s*?{/g));
```

Die `@keyframes`-Regel für `rainbow` sollte bei 0% eine `background-color` von `blue` verwenden.

```js
assert(code.match(/0%\s*?{\s*?background-color:\s*?blue;\s*?}/gi));
```

Die `@keyframes`-Regel für `rainbow` sollte bei 50% eine `background-color` von `green` verwenden.

```js
assert(code.match(/50%\s*?{\s*?background-color:\s*?green;\s*?}/gi));
```

Die `@keyframes`-Regel für rainbow sollte bei 100% eine `background-color` von `yellow` verwenden.

```js
assert(code.match(/100%\s*?{\s*?background-color:\s*?yellow;\s*?}/gi));
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
  }

  #rect {


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
  }

  #rect {
    animation-name: rainbow;
    animation-duration: 4s;
  }

  @keyframes rainbow {
    0% {
      background-color: blue;
    }
    50% {
      background-color: green;
    }
    100% {
      background-color: yellow;
    }
  }
</style>
<div id="rect"></div>
```
