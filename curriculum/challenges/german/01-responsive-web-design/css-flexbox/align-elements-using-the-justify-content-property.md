---
id: 587d78ac367417b2b2512af6
title: Ausrichten von Elementen mit der Eigenschaft justify-content
challengeType: 0
videoUrl: 'https://scrimba.com/p/pVaDAv/c43gnHm'
forumTopicId: 301102
dashedName: align-elements-using-the-justify-content-property
---

# --description--

Manchmal füllen die Flex-Elemente innerhalb eines Flex-Containers nicht den gesamten Platz im Container aus. Es ist üblich, CSS mitzuteilen, wie die Flex-Elemente ausgerichtet und verteilt werden sollen. Glücklicherweise hat die Eigenschaft `justify-content` mehrere Optionen, um dies zu tun. Doch bevor du dich mit diesen Optionen beschäftigst, musst du zunächst einige wichtige Begriffe verstehen.

<a href="https://www.freecodecamp.org/news/flexbox-the-ultimate-css-flex-cheatsheet/" target="_blank" rel="noopener noreferrer nofollow">Hier erfährst du mehr zu Flexbox-Eigenschaften</a>

Erinnere dich daran, dass beim Einsetzen eines Flex-Containers als Reihe, die Flex-Elemente von links nach rechts nebeneinander platziert werden. Ein Flex-Container, der als Spalte eingestellt ist, platziert die Flex-Elemente in einem vertikalen Stapel von oben nach unten. Bei jedem dieser Elemente wird die Richtung der Flex-Elemente als **Hauptachse** bezeichnet. Bei einer Reihe ist das eine horizontale Linie, die durch jedes Element verläuft. Und bei einer Spalte ist die Hauptachse eine vertikale Linie, die durch die Elemente verläuft.

Es gibt verschiedene Möglichkeiten, wie du die Flex-Elemente entlang der Hauptachse anordnen kannst. Eine der am häufigsten verwendete Möglichkeit ist `justify-content: center;`, womit du alle Flex-Elemente in die Mitte des Flex-Containers ausrichtest. Weitere Möglichkeiten sind:

<ul><li><code>flex-start</code>: Richtet die Elemente am Anfang des Flex-Containers aus. Bei einer Zeile werden die Elemente dadurch nach links in den Container verschoben. Bei einer Spalte werden die Elemente dadurch an den Anfang des Containers verschoben. Dies ist die Standardausrichtung, wenn kein <code>justify-content</code> angegeben ist.</li><li><code>flex-end</code>: Richtet Elemente am Ende des Flex-Containers aus. Bei einer Reihe werden die Elemente dadurch nach rechts in den Container verschoben. Bei einer Spalte werden die Elemente dadurch an den unteren Rand des Containers verschoben.</li><li><code>space-between</code>: Richtet die Elemente an der Mitte der Hauptachse aus, wobei zusätzlicher Platz zwischen den Elementen eingefügt wird. Das erste und das letzte Element werden an den äußersten Rand des Flex-Containers geschoben. In einer Reihe liegt zum Beispiel das erste Element an der linken Seite des Containers, das letzte Element liegt an der rechten Seite des Containers und der verbleibende Platz wird gleichmäßig auf die anderen Elemente verteilt.</li><li><code>space-around</code>: ähnelt <code>space-between</code>, aber das erste und das letzte Element werden nicht an den Rändern des Containers fixiert, sondern der Platz wird um alle Elemente herum verteilt, mit einem halben Abstand an beiden Enden des Flex-Containers.</li><li><code>space-evenly</code>: Verteilt den Platz zwischen den Flex-Items gleichmäßig mit einem vollen Abstand an beiden Enden des Flex-Containers.</li></ul>

# --instructions--

Ein Beispiel hilft, diese Eigenschaft in Aktion zu zeigen. Füge die CSS-Eigenschaft `justify-content` zum Element `#box-container` hinzu und gib ihm den Wert `center`.

**Bonus**  
Probiere die anderen Optionen für die Eigenschaft `justify-content` im Code-Editor aus, um ihre Unterschiede zu sehen. Beachte aber, dass der Wert `center` der einzige ist, der diese Aufgabe bestehen kann.

# --hints--

Das Element `#box-container` sollte eine `justify-content`-Eigenschaft besitzen, die auf einen Wert von `center` gesetzt ist.

```js
assert($('#box-container').css('justify-content') == 'center');
```

# --seed--

## --seed-contents--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;

  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```

# --solutions--

```html
<style>
  #box-container {
    background: gray;
    display: flex;
    height: 500px;
    justify-content: center;
  }
  #box-1 {
    background-color: dodgerblue;
    width: 25%;
    height: 100%;
  }

  #box-2 {
    background-color: orangered;
    width: 25%;
    height: 100%;
  }
</style>

<div id="box-container">
  <div id="box-1"></div>
  <div id="box-2"></div>
</div>
```
