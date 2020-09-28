---
id: 587d7fa7367417b2b2512bc8
title: Add Classes with D3
challengeType: 6
forumTopicId: 301473
---

## Description
<section id='description'>
Using a lot of inline styles on HTML elements gets hard to manage, even for smaller apps. It's easier to add a class to elements and style that class one time using CSS rules. D3 has the <code>attr()</code> method to add any HTML attribute to an element, including a class name.
The <code>attr()</code> method works the same way that <code>style()</code> does. It takes comma-separated values, and can use a callback function. Here's an example to add a class of "container" to a selection:
<code>selection.attr("class", "container");</code>

Note that the "class" parameter will remain the same whenever you need to add a class and only the "container" parameter will change.
</section>

## Instructions
<section id='instructions'>
Add the <code>attr()</code> method to the code in the editor and put a class of <code>bar</code> on the <code>div</code> elements.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>div</code> elements should have a class of <code>bar</code>.
    testString: assert($('div').attr('class') == "bar");
  - text: Your code should use the <code>attr()</code> method.
    testString: assert(code.match(/\.attr/g));

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
      // Add your code below this line



      // Add your code above this line
  </script>
</body>
```

</div>



</section>

## Solution
<section id='solution'>

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
      // Add your code below this line
      .attr("class","bar");
      // Add your code above this line
  </script>
</body>
```

</section>
