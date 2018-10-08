---
id: 587d7fa8367417b2b2512bc9
title: Update the Height of an Element Dynamically
required:
  - src: 'https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js'
challengeType: 6
---

## Description
<section id='description'>
The previous challenges covered how to display data from an array and how to add CSS classes. You can combine these lessons to create a simple bar chart. There are two steps to this:
1) Create a <code>div</code> for each data point in the array
2) Give each <code>div</code> a dynamic height, using a callback function in the <code>style()</code> method that sets height equal to the data value
Recall the format to set a style using a callback function:
<code>selection.style("cssProperty", (d) => d)</code>
</section>

## Instructions
<section id='instructions'>
Add the <code>style()</code> method to the code in the editor to set the <code>height</code> property for each element. Use a callback function to return the value of the data point with the string "px" added to it.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The first <code>div</code> should have a <code>height</code> of 12 pixels.
    testString: 'assert($("div").eq(0).css("height") == "12px", "The first <code>div</code> should have a <code>height</code> of 12 pixels.");'
  - text: The second <code>div</code> should have a <code>height</code> of 31 pixels.
    testString: 'assert($("div").eq(1).css("height") == "31px", "The second <code>div</code> should have a <code>height</code> of 31 pixels.");'
  - text: The third <code>div</code> should have a <code>height</code> of 22 pixels.
    testString: 'assert($("div").eq(2).css("height") == "22px", "The third <code>div</code> should have a <code>height</code> of 22 pixels.");'
  - text: The fourth <code>div</code> should have a <code>height</code> of 17 pixels.
    testString: 'assert($("div").eq(3).css("height") == "17px", "The fourth <code>div</code> should have a <code>height</code> of 17 pixels.");'
  - text: The fifth <code>div</code> should have a <code>height</code> of 25 pixels.
    testString: 'assert($("div").eq(4).css("height") == "25px", "The fifth <code>div</code> should have a <code>height</code> of 25 pixels.");'
  - text: The sixth <code>div</code> should have a <code>height</code> of 18 pixels.
    testString: 'assert($("div").eq(5).css("height") == "18px", "The sixth <code>div</code> should have a <code>height</code> of 18 pixels.");'
  - text: The seventh <code>div</code> should have a <code>height</code> of 29 pixels.
    testString: 'assert($("div").eq(6).css("height") == "29px", "The seventh <code>div</code> should have a <code>height</code> of 29 pixels.");'
  - text: The eighth <code>div</code> should have a <code>height</code> of 14 pixels.
    testString: 'assert($("div").eq(7).css("height") == "14px", "The eighth <code>div</code> should have a <code>height</code> of 14 pixels.");'
  - text: The ninth <code>div</code> should have a <code>height</code> of 9 pixels.
    testString: 'assert($("div").eq(8).css("height") == "9px", "The ninth <code>div</code> should have a <code>height</code> of 9 pixels.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

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

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
