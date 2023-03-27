---
id: 587d7fac367417b2b2512bdb
title: Set a Domain and a Range on a Scale
challengeType: 6
forumTopicId: 301491
dashedName: set-a-domain-and-a-range-on-a-scale
---

# --description--

Standardmäßig verwenden Skalen die Identitätsbeziehung. Das bedeutet, dass der Eingabewert dem Ausgabewert zugeordnet wird. Jedoch können Skalen viel flexibler und interessanter sein.

Angenommen ein Datensatz hat Werte zwischen 50 und 480. Dies ist die Eingangsinformation für eine Skala, die auch als <dfn>Domäne</dfn> bezeichnet wird.

You want to map those points along the `x` axis on the SVG, between 10 units and 500 units. This is the output information, also known as the <dfn>range</dfn>.

Die `domain()`- und `range()`-Methoden legen diese Werte für die Skala fest. Both methods take an array of at least two elements as an argument. Hier ist ein Beispiel:

```js
scale.domain([50, 480]);
scale.range([10, 500]);
scale(50)
scale(480)
scale(325)
scale(750)
d3.scaleLinear()
```

Die folgenden Werte werden, in dieser Reihenfolge, in der Konsole angezeigt: `10`, `500`, `323.37`, and `807.67`.

Beachte, dass die Skala die lineare Beziehung zwischen Domäne und Bereichswerten verwendet, um herauszufinden, was die Ausgabe für eine gegebene Zahl sein soll. The minimum value in the domain (50) maps to the minimum value (10) in the range.

# --instructions--

Erstelle eine Skala und setze die Domain auf `[250, 500]` und erweitere auf `[10, 150]`.

**Note:** You can chain the `domain()` and `range()` methods onto the `scale` variable.

# --hints--

Dein Code sollte die `domain()`-Methode verwenden.

```js
assert(code.match(/\.domain/g));
```

Die `domain()` der `scale` sollte auf `[250, 500]` gesetzt werden.

```js
assert(JSON.stringify(scale.domain()) == JSON.stringify([250, 500]));
```

Dein Code sollte die `range()`-Methode verwenden.

```js
assert(code.match(/\.range/g));
```

Der `range()` von `scale` sollte auf `[10, 150]` gesetzt werden.

```js
assert(JSON.stringify(scale.range()) == JSON.stringify([10, 150]));
```

Der Text im `h2` sollte `-102` sein.

```js
assert($('h2').text() == '-102');
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    // Add your code below this line
    const scale = d3.scaleLinear();



    // Add your code above this line
    const output = scale(50);
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
    scale.domain([250, 500])
    scale.range([10, 150])
    const output = scale(50);
    d3.select("body")
      .append("h2")
      .text(output);
  </script>
</body>
```
