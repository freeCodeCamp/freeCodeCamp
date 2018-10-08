---
id: 587d7fa7367417b2b2512bc7
title: Change Styles Based on Data
required:
  - src: 'https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js'
challengeType: 6
---

## Description
<section id='description'>
D3 is about visualization and presentation of data. It's likely you'll want to change the styling of elements based on the data. You can use a callback function in the <code>style()</code> method to change the styling for different elements.
For example, you may want to color a data point blue if has a value less than 20, and red otherwise. You can use a callback function in the <code>style()</code> method and include the conditional logic. The callback function uses the <code>d</code> parameter to represent the data point:
<blockquote>selection.style("color", (d) => {<br>&nbsp;&nbsp;/* Logic that returns the color based on a condition */<br>});</blockquote>
The <code>style()</code> method is not limited to setting the <code>color</code> - it can be used with other CSS properties as well.
</section>

## Instructions
<section id='instructions'>
Add the <code>style()</code> method to the code in the editor to set the <code>color</code> of the <code>h2</code> elements conditionally. Write the callback function so if the data value is less than 20, it returns "red", otherwise it returns "green".
<strong>Note</strong><br>You can use if-else logic, or the ternary operator.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The first <code>h2</code> should have a <code>color</code> of red.
    testString: 'assert($("h2").eq(0).css("color") == "rgb(255, 0, 0)", "The first <code>h2</code> should have a <code>color</code> of red.");'
  - text: The second <code>h2</code> should have a <code>color</code> of green.
    testString: 'assert($("h2").eq(1).css("color") == "rgb(0, 128, 0)", "The second <code>h2</code> should have a <code>color</code> of green.");'
  - text: The third <code>h2</code> should have a <code>color</code> of green.
    testString: 'assert($("h2").eq(2).css("color") == "rgb(0, 128, 0)", "The third <code>h2</code> should have a <code>color</code> of green.");'
  - text: The fourth <code>h2</code> should have a <code>color</code> of red.
    testString: 'assert($("h2").eq(3).css("color") == "rgb(255, 0, 0)", "The fourth <code>h2</code> should have a <code>color</code> of red.");'
  - text: The fifth <code>h2</code> should have a <code>color</code> of green.
    testString: 'assert($("h2").eq(4).css("color") == "rgb(0, 128, 0)", "The fifth <code>h2</code> should have a <code>color</code> of green.");'
  - text: The sixth <code>h2</code> should have a <code>color</code> of red.
    testString: 'assert($("h2").eq(5).css("color") == "rgb(255, 0, 0)", "The sixth <code>h2</code> should have a <code>color</code> of red.");'
  - text: The seventh <code>h2</code> should have a <code>color</code> of green.
    testString: 'assert($("h2").eq(6).css("color") == "rgb(0, 128, 0)", "The seventh <code>h2</code> should have a <code>color</code> of green.");'
  - text: The eighth <code>h2</code> should have a <code>color</code> of red.
    testString: 'assert($("h2").eq(7).css("color") == "rgb(255, 0, 0)", "The eighth <code>h2</code> should have a <code>color</code> of red.");'
  - text: The ninth <code>h2</code> should have a <code>color</code> of red.
    testString: 'assert($("h2").eq(8).css("color") == "rgb(255, 0, 0)", "The ninth <code>h2</code> should have a <code>color</code> of red.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
