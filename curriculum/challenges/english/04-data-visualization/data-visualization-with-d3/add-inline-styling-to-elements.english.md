---
id: 587d7fa7367417b2b2512bc6
title: Add Inline Styling to Elements
challengeType: 6
isHidden: false
forumTopicId: 301475
---

## Description
<section id='description'>
D3 lets you add inline CSS styles on dynamic elements with the <code>style()</code> method.
The <code>style()</code> method takes a comma-separated key-value pair as an argument. Here's an example to set the selection's text color to blue:
<code>selection.style("color","blue");</code>
</section>

## Instructions
<section id='instructions'>
Add the <code>style()</code> method to the code in the editor to make all the displayed text have a <code>font-family</code> of <code>verdana</code>.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your <code>h2</code> elements should have a <code>font-family</code> of verdana.
    testString: assert($('h2').css('font-family') == 'verdana');
  - text: Your code should use the <code>style()</code> method.
    testString: assert(code.match(/\.style/g));

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

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => (d + " USD"))
      .style("font-family", "verdana")

  </script>
</body>

```

</section>
