---
id: 587d78a4367417b2b2512ad2
title: Tertiärfarben kennenlernen
challengeType: 0
forumTopicId: 301057
dashedName: learn-about-tertiary-colors
---

# --description--

Computermonitore und andere Device-Bildschirme erzeugen unterschiedliche Farben, indem sie entsprechende Anteile von rotem, grünem und blauem Licht kombinieren. Dies wird in der modernen Farbtheorie als additives RGB-Farbmodell bezeichnet. Rot (R), Grün (G) und Blau (B) werden Primärfarben genannt. Das Mischen von zwei primären Farben erzeugt die sekundären Farben Cyan (G + B), Magenta (R + B) und Gelb (R + G). Du hast diese Farben bereits in der Komplementärfarben-Aufgabe gesehen. Diese sekundären Farben komplementieren jene Primärfarbe, die bei ihrer Erstellung nicht verwendet wird, und befinden sich auf dem Farbkreis gegenüber von ihr. Zum Beispiel wird Magenta aus Rot und Blau erstellt und es ist komplementär zu Grün.

Tertiärfarben ergeben sich aus der Kombination einer Primärfarbe mit einem ihrer sekundären Nachbarn. Zum Beispiel ergeben im RGB-Farbmodell Rot (primär) und Gelb (sekundär) Orange (tertiär). Dies erweitert einen einfachen Farbkreis um sechs Farben auf insgesamt zwölf.

Es gibt verschiedene Methoden zur Auswahl von Farbkombinationen, die zu stimmigen Designs führen. Zum Beispiel können tertiäre Farben im Split-Komplementär-Farbschema verwendet werden. Dieses Schema beginnt mit einer Grundfarbe, die dann mit zwei Farben kombiniert wird, die neben ihrer Komplementärfarbe liegen. Die drei Farben bieten einen starken visuellen Kontrast in einem Design, sind aber subtiler als die Verwendung zweier Komplementärfarben.

Hier sind drei Farben, die mit dem Split-Komplementär-Schema erstellt wurden:

<table class='table table-striped'><thead><tr><th>Farbe</th><th>Hex-Code</th></tr></thead><thead></thead><tbody><tr><td>orange</td><td>#FF7F00</td></tr><tr><td>cyan</td><td>#00FFFF</td></tr><tr><td>himbeerfarben</td><td>#FF007F</td></tr></tbody></table>

# --instructions--

Ändere die `background-color`-Eigenschaft der Klassen `orange`, `cyan` und `raspberry` (dt. Himbeere) auf ihren entsprechenden Farbwert. Stelle sicher, dass du Hex-Codes und nicht Farbnamen verwendest.

# --hints--

Das `div`-Element mit der Klasse `orange` sollte eine `background-color` von Orange haben.

```js
assert($('.orange').css('background-color') == 'rgb(255, 127, 0)');
```

Das `div`-Element mit der Klasse `cyan` sollte eine `background-color` von Cyan haben.

```js
assert($('.cyan').css('background-color') == 'rgb(0, 255, 255)');
```

Das `div`-Element mit der Klasse `raspberry` sollte eine himbeerfarbene `background-color` haben.

```js
assert($('.raspberry').css('background-color') == 'rgb(255, 0, 127)');
```

Alle `background-color`-Werte für die Farbklassen sollten Hex-Codes und nicht Farbnamen sein.

```js
assert(!/background-color:\s(orange|cyan|raspberry)/.test(code));
```

# --seed--

## --seed-contents--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #000000;
  }

  .cyan {
    background-color: #000000;
  }

  .raspberry {
    background-color: #000000;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>

<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```

# --solutions--

```html
<style>
  body {
    background-color: #FFFFFF;
  }

  .orange {
    background-color: #FF7F00;
  }

  .cyan {
    background-color: #00FFFF;
  }

  .raspberry {
    background-color: #FF007F;
  }

  div {
    height: 100px;
    width: 100px;
    margin-bottom: 5px;
  }
</style>
<div class="orange"></div>
<div class="cyan"></div>
<div class="raspberry"></div>
```
