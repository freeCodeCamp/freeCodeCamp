---
id: 587d7fa7367417b2b2512bc4
title: Work with Data in D3
required:
  - src: 'https://cdnjs.cloudflare.com/ajax/libs/d3/4.3.0/d3.min.js'
challengeType: 6
---

## Description
<section id='description'>
The D3 library focuses on a data-driven approach. When you have a set of data, you can apply D3 methods to display it on the page. Data comes in many formats, but this challenge uses a simple array of numbers.
The first step is to make D3 aware of the data. The <code>data()</code> method is used on a selection of DOM elements to attach the data to those elements. The data set is passed as an argument to the method.
A common workflow pattern is to create a new element in the document for each piece of data in the set. D3 has the <code>enter()</code> method for this purpose.
When <code>enter()</code> is combined with the <code>data()</code> method, it looks at the selected elements from the page and compares them to the number of data items in the set. If there are fewer elements than data items, it creates the missing elements.
Here is an example that selects a <code>ul</code> element and creates a new list item based on the number of entries in the array:
<blockquote>&lt;body&gt;<br>&nbsp;&nbsp;&lt;ul&gt;&lt;/ul&gt;<br>&nbsp;&nbsp;&lt;script&gt;<br>&nbsp;&nbsp;&nbsp;&nbsp;const dataset = ["a", "b", "c"];<br>&nbsp;&nbsp;&nbsp;&nbsp;d3.select("ul").selectAll("li")<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.data(dataset)<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.enter()<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.append("li")<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.text("New item");<br>&nbsp;&nbsp;&lt;/script&gt;<br>&lt;/body&gt;</blockquote>
It may seem confusing to select elements that don't exist yet. This code is telling D3 to first select the <code>ul</code> on the page. Next, select all list items, which returns an empty selection. Then the <code>data()</code> method reviews the dataset and runs the following code three times, once for each item in the array. The <code>enter()</code> method sees there are no <code>li</code> elements on the page, but it needs 3 (one for each piece of data in <code>dataset</code>). New <code>li</code> elements are appended to the <code>ul</code> and have the text "New item".
</section>

## Instructions
<section id='instructions'>
Select the <code>body</code> node, then select all <code>h2</code> elements. Have D3 create and append an <code>h2</code> tag for each item in the <code>dataset</code> array. The text in the <code>h2</code> should say "New Title". Your code should use the <code>data()</code> and <code>enter()</code> methods.
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Your document should have 9 <code>h2</code> elements.
    testString: 'assert($("h2").length == 9, "Your document should have 9 <code>h2</code> elements.");'
  - text: The text in the <code>h2</code> elements should say "New Title". The capitalization and spacing should match exactly.
    testString: 'assert($("h2").text().match(/New Title/g).length == 9, "The text in the <code>h2</code> elements should say "New Title". The capitalization and spacing should match exactly.");'
  - text: Your code should use the <code>data()</code> method.
    testString: 'assert(code.match(/\.data/g), "Your code should use the <code>data()</code> method.");'
  - text: Your code should use the <code>enter()</code> method.
    testString: 'assert(code.match(/\.enter/g), "Your code should use the <code>enter()</code> method.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

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
