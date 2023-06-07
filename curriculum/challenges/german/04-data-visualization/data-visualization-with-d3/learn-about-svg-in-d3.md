---
id: 587d7fa8367417b2b2512bcb
title: Mehr über SVG in D3 erfahren
challengeType: 6
forumTopicId: 301489
dashedName: learn-about-svg-in-d3
---

# --description--

<dfn>SVG</dfn> steht für <dfn>Scalable Vector Graphics</dfn> (Skalierbare Vektorgrafiken).

Hier bedeutet „skalierbar“, dass ein heran- oder herausgezoomtes Objekt nicht verpixelt erscheint. Es passt sich dem Display-System an – ganz gleich, ob es sich um einen kleinen Handy- oder einen großen TV-Bildschirm handelt.

SVG wird zur Erstellung gängiger geometrischer Formen verwendet. Da D3 Daten in einer visuellen Darstellung abbildet, verwendet es SVG, um die Formen für die Visualisierung zu erstellen. SVG-Formen für eine Webseite müssen innerhalb eines `svg`-HTML-Tags stehen.

CSS kann zwar ebenfalls skalierbar sein, wenn in Stylesheets relative Einheiten verwendet werden (wie `vh`, `vw` oder Prozentangaben), allerdings bietet die Nutzung von SVG mehr Flexibilität, wenn es um die Erstellung von Datenvisualisierungen geht.

# --instructions--

Füge einen `svg`-Knoten mithilfe von `append()` dem `body` hinzu. Gebe diesem ein `width`-Attribut auf die angegebene `w`-Konstante und ein `height`-Attribut auf die angegebene `h`-Konstante unter Verwendung der `attr()` oder `style()`-Methoden. Du wirst den Knoten in der Ausgabe sehen, da sein `style`-Tag über eine `background-color` von Pink verfügt.

**Hinweis:** Bei der Verwendung von `attr()` haben Breiten- und Höhenattribute keine Einheiten. Das ist der Grundbaustein für Skalierung – das Element wird immer ein Breiten-Höhenverhältnis von 5:1 haben, unabhängig von der Zoomstufe.

# --hints--

Dein Dokument sollte 1 `svg`-Element enthalten.

```js
assert($('svg').length == 1);
```

Das `svg`-Element sollte entweder über ein `width`-Attribut von `500` oder über eine zugewiesene Breite von `500px` verfügen.

```js
assert($('svg').attr('width') == '500' || $('svg').css('width') == '500px');
```

Das `svg`-Element sollte entweder über ein `height`-Attribut von `100` oder über eine zugewiesene Höhe von `100px` verfügen.

```js
assert($('svg').attr('height') == '100' || $('svg').css('height') == '100px');
```

# --seed--

## --seed-contents--

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  // Add your code below this line



                  // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  svg {
    background-color: pink;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h)
  </script>
</body>
```
