---
id: 587d7fab367417b2b2512bda
title: Erstelle eine lineare Skala mit D3
challengeType: 6
forumTopicId: 301483
dashedName: create-a-linear-scale-with-d3
---

# --description--

The bar and scatter plot charts both plotted data directly onto the SVG. Wäre jedoch die Höhe eines Balkens oder eines Datenpunkts größer als die SVG-Höhen- oder Breitenwerte, würde er außerhalb des SVG-Bereichs liegen.

In D3 gibt es Skalen, die bei der Darstellung von Daten helfen. `scales` are functions that tell the program how to map a set of raw data points onto the pixels of the SVG.

For example, say you have a 100x500-sized SVG and you want to plot Gross Domestic Product (GDP) for a number of countries. Die Zahlen wären im Milliarden- oder Billionen-Dollar-Bereich. Du übergibst D3 einen Skalierungstyp, mit welchem du ihm mitteilst, wie die hohen BIP-Werte in dem 100x500 großen Bereich zu platzieren sind.

Es ist unwahrscheinlich, dass du die Rohdaten so darstellen würdest, wie sie sind. Before plotting it, you set the scale for your entire data set, so that the `x` and `y` values fit your SVG width and height.

D3 verfügt über verschiedene Skalierungstypen. Möchtest du eine lineare Skalierung (wie sie für quantitative Daten meist verwendet wird), verwendest du die D3-Methode `scaleLinear()`:

```js
const scale = d3.scaleLinear()
```

Standardmäßig verwendet eine Skala die Identitätsbeziehung. Ein- und Ausgabewerte sind gleich. Wie man das ändern kann, ist Gegenstand einer separaten Aufgabenstellung.

# --instructions--

Ändere die `scale`-Variable so, dass eine lineare Skala entsteht. Setze dann die `output`-Variable auf die Skala, die mit einem Eingabeargument von `50` aufgerufen wird.

# --hints--

Der Text im `h2` sollte `50` sein.

```js
assert($('h2').text() == '50');
```

Dein Code sollte die `scaleLinear()`-Methode verwenden.

```js
assert(code.match(/\.scaleLinear/g));
```

Die `output`-Variable sollte `scale` mit dem Argument `50` aufrufen.

```js
assert(output == 50 && code.match(/scale\(\s*?50\s*?\)/g));
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line

    const scale = undefined; // Create the scale here
    const output = scale(); // Call scale with an argument here

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>
```

# --solutions--

```html
<body>
  <script>

    const scale = d3.scaleLinear();
    const output = scale(50); 

    d3.select("body")
      .append("h2")
      .text(output);

  </script>
</body>
```
