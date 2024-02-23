---
id: 587d78a3367417b2b2512ad1
title: Komplementärfarben kennenlernen
challengeType: 0
videoUrl: 'https://scrimba.com/c/c2MD3Tr'
forumTopicId: 301056
dashedName: learn-about-complementary-colors
---

# --description--

Die Farbtheorie und ihr Einfluss im Design-Bereich ist ein umfassendes Thema und in den folgenden Aufgaben werden nur die Grundlagen vorgestellt. Auf einer Website kann Farbe die Aufmerksamkeit auf Inhalte lenken, Emotionen auslösen und visuelle Harmonie schaffen. Die Verwendung verschiedener Farbkombinationen kann das Aussehen einer Website gravierend verändern und das Erstellen einer fein abgestimmten, dem Inhalte angepassten Farbpalette bedarf mitunter einiger Arbeit.

Der Farbkreis ist ein nützliches Werkzeug, um zu visualisieren, wie Farben miteinander in Beziehung stehen. Er besteht aus kreisförmig angeordneten Farbtönen, wobei ähnliche Töne nahe zusammen und unterschiedliche weiter auseinander liegen. Wenn zwei Farben auf dem Farbkreis gegenüber stehen, nennt man sie Komplementärfarben. Zusammengemischt neutralisieren sie sich und kreieren ein Grau. Nebeneinandergestellt wirken sie jedoch kräftig und sie erzeugen einen starken visuellen Kontrast.

Einige Beispiele für Komplementärfarben mit ihren HEX-Werten:

<blockquote>rot (#FF0000) und cyan (#00FFFF)<br>grün (#00FF00) und magenta (#FF00FF)<br>blau (#0000FF) und gelb (#FFFF00)</blockquote>

Dies unterscheidet sich von dem älteren Farbkreismodell mit den Grundfarben Gelb, Rot und Blau, welches andere Primär- und Komplementärfarben hat und du vielleicht aus der Schule kennst. Die moderne Farbtheorie verwendet das additive RGB-Modell (wie auf einem Computerbildschirm) und das subtraktive CMY(K)-Modell (wie im Druck).

Es gibt online viele Farbauswahltools mit einer Option zum Finden einer Komplementärfarbe.

**Tipp:** Der bewusste Einsatz von Farben kann die visuelle Attraktivität einer Seite deutlich erhöhen. Allerdings sollte Farbe nicht alleine verwendet werden, um wichtige Informationen zu vermitteln, weil Nutzer mit Sehbeeinträchtigungen diese eventuell nicht wahrnehmen können. Dieses Thema wird bei den Aufgaben zur angewandten Barrierefreiheit näher behandelt.

# --instructions--

Ändere die `background-color`-Eigenschaft der Klassen `blue` und `yellow` auf Farben entsprechend ihrem Klassennamen. Sieh dir bewusst an, wie dieselben Farben nebeneinandergestellt anders wirken als auf einem weißen Hintergrund.

# --hints--

Das `div`-Element mit der Klasse `blue` sollte eine `background-color` von blue haben.

```js
assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
```

Das `div`-Element mit der Klasse `yellow` sollte eine `background-color` von yellow haben.

```js
assert($('.yellow').css('background-color') == 'rgb(255, 255, 0)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: #000000;
  }
  .yellow {
    background-color: #000000;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }
  .blue {
    background-color: blue;
  }
  .yellow {
    background-color: yellow;
  }
  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="blue"></div>
<div class="yellow"></div>
```
