---
id: 587d7fa8367417b2b2512bc9
title: Update the Height of an Element Dynamically
challengeType: 6
forumTopicId: 301493
dashedName: update-the-height-of-an-element-dynamically
---

# --description--

The previous challenges covered how to display data from an array and how to add CSS classes. Du kannst diese Lektionen kombinieren, um ein einfaches Balkendiagramm zu erstellen. Hierfür gibt es zwei Schritte:

1) Erstelle einen `div` für jeden Datenpunkt im Array

2) Gebe jedem `div` eine dynamische Höhe. Dies erreichst du mithilfe einer Callback-Funktion, die in der `style()`-Methode die Höhe auf den Datenwert setzt.

Recall the format to set a style using a callback function:

```js
selection.style("cssProperty", (d) => d)
```

# --instructions--

Add the `style()` method to the code in the editor to set the `height` property for each element. Verwende eine Callback-Funktion, um den Wert des Datenpunkts sowie den darauffolgenden String `px` zurückzugeben.

# --hints--

Der erste `div` sollte über eine `height` von `12` Pixel verfügen.

```js
assert($('div').eq(0)[0].style.height === '12px');
```

Der zweite `div` sollte über eine `height` von `31` Pixel verfügen.

```js
assert($('div').eq(1)[0].style.height === '31px');
```

Der dritte `div` sollte über eine `height` von `22` Pixel verfügen.

```js
assert($('div').eq(2)[0].style.height === '22px');
```

Der vierte `div` sollte über eine `height` von `17` Pixel verfügen.

```js
assert($('div').eq(3)[0].style.height === '17px');
```

Der fünfte `div` sollte über eine `height` von `25` Pixel verfügen.

```js
assert($('div').eq(4)[0].style.height === '25px');
```

Der sechste `div` sollte über eine `height` von `18` Pixel verfügen.

```js
assert($('div').eq(5)[0].style.height === '18px');
```

Der siebte `div` sollte über eine `height` von `29` Pixel verfügen.

```js
assert($('div').eq(6)[0].style.height === '29px');
```

Der achte `div` sollte über eine `height` von `14` Pixel verfügen.

```js
assert($('div').eq(7)[0].style.height === '14px');
```

Der neunte `div` sollte über eine `height` von `9` Pixel verfügen.

```js
assert($('div').eq(8)[0].style.height === '9px');
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      // Add your code below this line



      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    display: inline-block;
    background-color: blue;
  }
</style>
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("div")
      .data(dataset)
      .enter()
      .append("div")
      .attr("class", "bar")
      .style('height', d => `${d}px`)
  </script>
</body>
```
