---
id: 587d7fa6367417b2b2512bc2
title: Add Document Elements with D3
challengeType: 6
forumTopicId: 301474
---

## Description
<section id='description'>
D3 has several methods that let you add and change elements in your document.
The <code>select()</code> method selects one element from the document. It takes an argument for the name of the element you want and returns an HTML node for the first element in the document that matches the name. Here's an example:
<code>const anchor = d3.select("a");</code>
The above example finds the first anchor tag on the page and saves an HTML node for it in the variable <code>anchor</code>. You can use the selection with other methods. The "d3" part of the example is a reference to the D3 object, which is how you access D3 methods.
Two other useful methods are <code>append()</code> and <code>text()</code>.
The <code>append()</code> method takes an argument for the element you want to add to the document. It appends an HTML node to a selected item, and returns a handle to that node.
The <code>text()</code> method either sets the text of the selected node, or gets the current text. To set the value, you pass a string as an argument inside the parentheses of the method.
Here's an example that selects an unordered list, appends a list item, and adds text:

```js
d3.select("ul")
  .append("li")
  .text("Very important item");
```

D3 allows you to chain several methods together with periods to perform a number of actions in a row.
</section>

## Instructions
<section id='instructions'>
Use the <code>select</code> method to select the <code>body</code> tag in the document. Then <code>append</code> an <code>h1</code> tag to it, and add the text "Learning D3" into the <code>h1</code> element.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The <code>body</code> should have one <code>h1</code> element.
    testString: assert($('body').children('h1').length == 1);
  - text: The <code>h1</code> element should have the text "Learning D3" in it.
    testString: assert($('h1').text() == "Learning D3");
  - text: Your code should access the <code>d3</code> object.
    testString: assert(code.match(/d3/g));
  - text: Your code should use the <code>select</code> method.
    testString: assert(code.match(/\.select/g));
  - text: Your code should use the <code>append</code> method.
    testString: assert(code.match(/\.append/g));
  - text: Your code should use the <code>text</code> method.
    testString: assert(code.match(/\.text/g));

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
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
    d3.select("body")
      .append("h1")
      .text("Learning D3")
  </script>
</body>
```

</section>
