---
id: 587d7fab367417b2b2512bda
title: Erstelle eine lineare Skala mit D3
challengeType: 6
forumTopicId: 301483
dashedName: create-a-linear-scale-with-d3
---

# --description--

The bar and scatter plot charts both plotted data directly onto the SVG canvas. Wäre jedoch die Höhe eines Balkens oder eines Datenpunkts größer als die SVG-Höhen- oder Breitenwerte, würde er außerhalb des SVG-Bereichs liegen.

In D3 gibt es Skalen, die bei der Darstellung von Daten helfen. `scales` are functions that tell the program how to map a set of raw data points onto the pixels of the SVG canvas.

Nehmen wir an, du hast eine SVG-Canvas der Größe 100x500 und möchtest das Bruttoinlandsprodukt (BIP) für eine Reihe von Ländern darstellen. Die Zahlen wären im Milliarden- oder Billionen-Dollar-Bereich. You provide D3 a type of scale to tell it how to place the large GDP values into that 100x500-sized area.

It's unlikely you would plot raw data as-is. Before plotting it, you set the scale for your entire data set, so that the `x` and `y` values fit your canvas width and height.

D3 has several scale types. For a linear scale (usually used with quantitative data), there is the D3 method `scaleLinear()`:

```js
const scale = d3.scaleLinear()
```

Standardmäßig verwendet eine Skala die Identitätsbeziehung. The value of the input is the same as the value of the output. Wie man das ändern kann, ist Gegenstand einer separaten Aufgabenstellung.

# --instructions--

Change the `scale` variable to create a linear scale. Then set the `output` variable to the scale called with an input argument of `50`.

# --hints--

Der Text im `h2` sollte `50` sein.

```js
assert($('h2').text() == '50');
```

Dein Code sollte die `scaleLinear()`-Methode verwenden.

```js
assert(code.match(/\.scaleLinear/g));
```

The `output` variable should call `scale` with an argument of `50`.

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
