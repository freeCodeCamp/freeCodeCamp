---
id: 587d7fa8367417b2b2512bca
title: Change the Presentation of a Bar Chart
challengeType: 6
forumTopicId: 301481
dashedName: change-the-presentation-of-a-bar-chart
---

# --description--

The last challenge created a bar chart, but there are a couple of formatting changes that could improve it:

1) Add space between each bar to visually separate them, which is done by adding a margin to the CSS for the `bar` class

2) Increase the height of the bars to better show the difference in values, which is done by multiplying the value by a number to scale the height

# --instructions--

First, add a `margin` of `2px` to the `bar` class in the `style` tag. Next, change the callback function in the `style()` method so it returns a value `10` times the original data value (plus the `px`).

**Note:** Multiplying each data point by the *same* constant only alters the scale. It's like zooming in, and it doesn't change the meaning of the underlying data.

# --hints--

The first `div` should have a `height` of `120` pixels and a `margin` of `2` pixels.

```js
assert(
  $('div').eq(0).css('height') == '120px' &&
    $('div').eq(0).css('margin-right') == '2px'
);
```

The second `div` should have a `height` of `310` pixels and a `margin` of `2` pixels.

```js
assert(
  $('div').eq(1).css('height') == '310px' &&
    $('div').eq(1).css('margin-right') == '2px'
);
```

The third `div` should have a `height` of `220` pixels and a `margin` of `2` pixels.

```js
assert(
  $('div').eq(2).css('height') == '220px' &&
    $('div').eq(2).css('margin-right') == '2px'
);
```

The fourth `div` should have a `height` of `170` pixels and a `margin` of `2` pixels.

```js
assert(
  $('div').eq(3).css('height') == '170px' &&
    $('div').eq(3).css('margin-right') == '2px'
);
```

The fifth `div` should have a `height` of `250` pixels and a `margin` of `2` pixels.

```js
assert(
  $('div').eq(4).css('height') == '250px' &&
    $('div').eq(4).css('margin-right') == '2px'
);
```

The sixth `div` should have a `height` of `180` pixels and a `margin` of `2` pixels.

```js
assert(
  $('div').eq(5).css('height') == '180px' &&
    $('div').eq(5).css('margin-right') == '2px'
);
```

The seventh `div` should have a `height` of `290` pixels and a `margin` of `2` pixels.

```js
assert(
  $('div').eq(6).css('height') == '290px' &&
    $('div').eq(6).css('margin-right') == '2px'
);
```

The eighth `div` should have a `height` of `140` pixels and a `margin` of `2` pixels.

```js
assert(
  $('div').eq(7).css('height') == '140px' &&
    $('div').eq(7).css('margin-right') == '2px'
);
```

The ninth `div` should have a `height` of `90` pixels and a `margin` of `2` pixels.

```js
assert(
  $('div').eq(8).css('height') == '90px' &&
    $('div').eq(8).css('margin-right') == '2px'
);
```

# --seed--

## --seed-contents--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    /* Add your code below this line */

    
    /* Add your code above this line */
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
      .style("height", (d) => (d + "px")) // Change this line
  </script>
</body>
```

# --solutions--

```html
<style>
  .bar {
    width: 25px;
    height: 100px;
    margin: 2px;
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
      .style("height", (d) => (d * 10 + "px"))
  </script>
</body>
```
