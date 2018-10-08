---
id: 587d7fa6367417b2b2512bc3
title: Select a Group of Elements with D3
required:
  - src: 'https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js'
challengeType: 6
---

## Description
<section id='description'>
D3 also has the <code>selectAll()</code> method to select a group of elements. It returns an array of HTML nodes for all the items in the document that match the input string. Here's an example to select all the anchor tags in a document:
<code>const anchors = d3.selectAll("a");</code>
Like the <code>select()</code> method, <code>selectAll()</code> supports method chaining, and you can use it with other methods.
</section>

## Instructions
<section id='instructions'>
Select all of the <code>li</code> tags in the document, and change their text to "list item" by chaining the <code>.text()</code> method.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: 'There should be 3 <code>li</code> elements on the page, and the text in each one should say "list item". Capitalization and spacing should match exactly.'
    testString: 'assert($("li").text().match(/list item/g).length == 3, "There should be 3 <code>li</code> elements on the page, and the text in each one should say "list item". Capitalization and spacing should match exactly.");'
  - text: Your code should access the <code>d3</code> object.
    testString: 'assert(code.match(/d3/g), "Your code should access the <code>d3</code> object.");'
  - text: Your code should use the <code>selectAll</code> method.
    testString: 'assert(code.match(/\.selectAll/g), "Your code should use the <code>selectAll</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <ul>
    <li>Example</li>
    <li>Example</li>
    <li>Example</li>
  </ul>
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

```js
// solution required
```
</section>
