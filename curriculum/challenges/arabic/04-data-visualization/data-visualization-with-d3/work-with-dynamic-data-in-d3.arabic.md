---
id: 587d7fa7367417b2b2512bc5
title: Work with Dynamic Data in D3
challengeType: 6
videoUrl: ''
localeTitle: ''
---

## Description
undefined

## Instructions
undefined

## Tests
<section id='tests'>

```yml
tests:
  - text: ''
    testString: 'assert($("h2").eq(0).text() == "12 USD", "The first <code>h2</code> should have the text "12 USD".");'
  - text: ''
    testString: 'assert($("h2").eq(1).text() == "31 USD", "The second <code>h2</code> should have the text "31 USD".");'
  - text: ''
    testString: 'assert($("h2").eq(2).text() == "22 USD", "The third <code>h2</code> should have the text "22 USD".");'
  - text: ''
    testString: 'assert($("h2").eq(3).text() == "17 USD", "The fourth <code>h2</code> should have the text "17 USD".");'
  - text: ''
    testString: 'assert($("h2").eq(4).text() == "25 USD", "The fifth <code>h2</code> should have the text "25 USD".");'
  - text: ''
    testString: 'assert($("h2").eq(5).text() == "18 USD", "The sixth <code>h2</code> should have the text "18 USD".");'
  - text: ''
    testString: 'assert($("h2").eq(6).text() == "29 USD", "The seventh <code>h2</code> should have the text "29 USD".");'
  - text: ''
    testString: 'assert($("h2").eq(7).text() == "14 USD", "The eighth <code>h2</code> should have the text "14 USD".");'
  - text: ''
    testString: 'assert($("h2").eq(8).text() == "9 USD", "The ninth <code>h2</code> should have the text "9 USD".");'

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
      // Add your code below this line

      .text("New Title");

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
