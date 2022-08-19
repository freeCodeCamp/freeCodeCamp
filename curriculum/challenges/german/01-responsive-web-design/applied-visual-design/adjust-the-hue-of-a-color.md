---
id: 587d78a4367417b2b2512ad4
title: Einen Farbton anpassen
challengeType: 0
videoUrl: 'https://scrimba.com/c/cPp38TZ'
forumTopicId: 301036
dashedName: adjust-the-hue-of-a-color
---

# --description--

Farben haben verschiedene Eigenschaften wie Farbton, Sättigung und Helligkeit. Mit CSS3 wurde die Funktion `hsl()` als alternative Möglichkeit zur Auswahl einer Farbe eingeführt, indem diese Merkmale direkt angegeben werden.

**Hue** (dt. Farbton) ist das, was wir im Allgemeinen als "Farbe" bezeichnen. Wenn du dir ein Farbspektrum vorstellst, das auf der linken Seite rot beginnt, dann in der Mitte grün ist und blau auf der rechten Seite, dann beschreibt der Farbton, wo eine Farbe entlang dieser Linie platziert ist. In `hsl()` wird ein Farbkreis-Modell statt einem linearen Spektrum verwendet, wobei der Winkel des Farbtons auf diesem Kreis einem Wert zwischen 0 und 360 entspricht.

**Saturation** (dt. Sättigung) ist der Anteil von Grau in einer Farbe. Eine vollständig gesättigte Farbe enthält gar kein Grau und eine minimal gesättigte Farbe besteht fast nur aus Grau. Dieser Wert wird als Prozentsatz angegeben. Dabei entspricht 100 % einer vollständigen Sättigung.

**Lightness** (dt. Helligkeit) beschreibt den Anteil von Weiß oder Schwarz in einer Farbe. Dies wird ebenfalls als Prozentsatz zwischen 0 % (schwarz) und 100 % (weiß) ausgedrückt, wobei 50 % der normalen Farbe entspricht.

Hier sind einige Beispiele für die Verwendung von `hsl()` mit vollständig gesättigten Farben bei mittlerer Helligkeit:

<table class='table table-striped'><thead><tr><th>Farbe</th><th>HSL</th></tr></thead><tbody><tr><td>rot</td><td>hsl(0, 100%, 50%)</td></tr><tr><td>gelb</td><td>hsl(60, 100%, 50%)</td></tr><tr><td>grün</td><td>hsl(120, 100%, 50%)</td></tr><tr><td>cyan</td><td>hsl(180, 100%, 50%)</td></tr><tr><td>blau</td><td>hsl(240, 100%, 50%)</td></tr><tr><td>magenta</td><td>hsl(300, 100%, 50%)</td></tr></tbody></table>

# --instructions--

Ändere die `background-color` für jedes `div`-Element, basierend auf den Klassennamen (`green`, `cyan`, oder `blue`) mit `hsl()`. Alle drei sollten volle Sättigung und eine normale Helligkeit haben.

# --hints--

Dein Code sollte die `hsl()` Funktion verwenden, um die Farbe Grün zu deklarieren.

```js
assert(code.match(/\.green\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

Dein Code sollte die `hsl()` Funktion verwenden, um die Farbe Cyan zu deklarieren.

```js
assert(code.match(/\.cyan\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

Dein Code sollte die `hsl()` Funktion verwenden, um die Farbe Blau zu deklarieren.

```js
assert(code.match(/\.blue\s*?{\s*?background-color\s*:\s*?hsl/gi));
```

Das `div`-Element mit der Klasse `green` sollte eine `background-color` von Grün haben.

```js
assert($('.green').css('background-color') == 'rgb(0, 255, 0)');
```

Das `div`-Element mit der Klasse `cyan` sollte eine `background-color` von Cyan haben.

```js
assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
```

Das `div`-Element mit der Klasse `blue` sollte eine `background-color` von Blau haben.

```js
assert($('.blue').css('background-color') == 'rgb(0, 0, 255)');
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .green {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .blue {
    background-color: #000000;
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>

<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .green {
    background-color: hsl(120, 100%, 50%);
  }

  .cyan {
    background-color:   hsl(180, 100%, 50%);
  }

  .blue {
    background-color: hsl(240, 100%, 50%);
  }

  div {
    display: inline-block;
    height: 100px;
    width: 100px;
  }
</style>
<div class="green"></div>
<div class="cyan"></div>
<div class="blue"></div>
```
