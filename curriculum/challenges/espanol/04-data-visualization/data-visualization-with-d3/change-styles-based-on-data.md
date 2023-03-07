---
id: 587d7fa7367417b2b2512bc7
title: Cambia estilos con base en los datos
challengeType: 6
forumTopicId: 301479
dashedName: change-styles-based-on-data
---

# --description--

D3 se trata de la visualización y presentación de datos. Probablemente vayas a querer estilizar los elementos con base en los datos. For example, you may want to color a data point blue if it has a value less than 20, and red otherwise. You can use a callback function in the `style()` method and include the conditional logic. The callback function uses the `d` parameter to represent the data point:

```js
selection.style("color", (d) => {

});
```

The `style()` method is not limited to setting the `color` - it can be used with other CSS properties as well.

# --instructions--

Add the `style()` method to the code in the editor to set the `color` of the `h2` elements conditionally. Write the callback function so if the data value is less than 20, it returns red, otherwise it returns green.

**Note:** You can use if-else logic, or the ternary operator.

# --hints--

The first `h2` should have a `color` of red.

```js
assert($('h2').eq(0).css('color') == 'rgb(255, 0, 0)');
```

The second `h2` should have a `color` of green.

```js
assert($('h2').eq(1).css('color') == 'rgb(0, 128, 0)');
```

The third `h2` should have a `color` of green.

```js
assert($('h2').eq(2).css('color') == 'rgb(0, 128, 0)');
```

The fourth `h2` should have a `color` of red.

```js
assert($('h2').eq(3).css('color') == 'rgb(255, 0, 0)');
```

The fifth `h2` should have a `color` of green.

```js
assert($('h2').eq(4).css('color') == 'rgb(0, 128, 0)');
```

The sixth `h2` should have a `color` of red.

```js
assert($('h2').eq(5).css('color') == 'rgb(255, 0, 0)');
```

The seventh `h2` should have a `color` of green.

```js
assert($('h2').eq(6).css('color') == 'rgb(0, 128, 0)');
```

The eighth `h2` should have a `color` of red.

```js
assert($('h2').eq(7).css('color') == 'rgb(255, 0, 0)');
```

The ninth `h2` should have a `color` of red.

```js
assert($('h2').eq(8).css('color') == 'rgb(255, 0, 0)');
```

# --seed--

## --seed-contents--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      // Add your code below this line



      // Add your code above this line
  </script>
</body>
```

# --solutions--

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      .style("color", (d) => d < 20 ? "red" : "green")
  </script>
</body>
```
