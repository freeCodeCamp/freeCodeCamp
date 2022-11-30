---
id: 587d7fac367417b2b2512bdc
title: >-
  Use the d3.max and d3.min Functions to Find Minimum and Maximum Values in a Dataset
challengeType: 6
forumTopicId: 301496
dashedName: >-
  use-the-d3-max-and-d3-min-functions-to-find-minimum-and-maximum-values-in-a-dataset
---

# --description--

Die D3-Methoden `domain()` und `range()` haben diese Informationen für deine Skala basierend auf den Daten festgelegt. Es gibt ein paar Methoden, um das zu vereinfachen.

Wenn du eine Domain festlegen möchtest, solltest du oft die Mindest- und Maximalwerte eines Datensatzes verwenden. Der Versuch, diese Werte manuell zu finden, kann, insbesondere bei einem großen Datensatz, zu Fehlern führen.

D3 hat zwei Methoden - `min()` und `max()`, um diese Informationen zurückzugeben. Here's an example:

```js
const exampleData = [34, 234, 73, 90, 6, 52];
d3.min(exampleData)
d3.max(exampleData)
```

A dataset may have nested arrays, like the `[x, y]` coordinate pairs that were in the scatter plot example. In diesem Fall musst du D3 sagen, wie es das Maximum und das Minimum berechnen kann. Glücklicherweise nimmt sowohl die Methode `min()` als auch `max()` eine Callback-Funktion an. In diesem Beispiel ist das Callback-Funktionsargument `d` für das aktuelle interne Array. The callback needs to return the element from the inner array (the `x` or `y` value) over which you want to compute the maximum or minimum. Hier ist ein Beispiel dafür, wie man die minimalen und maximalen Werte mit einem Array von Arrays findet:

```js
const locationData = [[1, 7],[6, 3],[8, 3]];
const minX = d3.min(locationData, (d) => d[0]);
```

`minX` würde den Wert `1` haben.

# --instructions--

The `positionData` array holds sub arrays of x, y, and z coordinates. Use a D3 method to find the maximum value of the z coordinate (the third value) from the arrays and save it in the `output` variable.

# --hints--

Der Text in `h2` sollte `8` sein.

```js
assert(output == 8 && $('h2').text() == '8');
```

Dein Code sollte die `max()`-Methode verwenden.

```js
assert(
  code.match(/\.max/g),
  'Your code should use the <code>max()</code> method.'
);
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]
    // Add your code below this line

    const output = undefined; // Change this line

    // Add your code above this line

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const positionData = [[1, 7, -4],[6, 3, 8],[2, 9, 3]]

    const output = d3.max(positionData, (d) => d[2])

    d3.select("body")
      .append("h2")
      .text(output)
  </script>
</body>
```
