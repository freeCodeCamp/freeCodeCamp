---
id: 587d7fa7367417b2b2512bc5
title: Work with Dynamic Data in D3
challengeType: 6
isHidden: false
forumTopicId: 301498
---

## Description
<section id='description'>
The last two challenges cover the basics of displaying data dynamically with D3 using the <code>data()</code> and <code>enter()</code> methods. These methods take a data set and, together with the <code>append()</code> method, create a new DOM element for each entry in the data set.
In the previous challenge, you created a new <code>h2</code> element for each item in the <code>dataset</code> array, but they all contained the same text, "New Title". This is because you have not made use of the data that is bound to each of the <code>h2</code> elements.
The D3 <code>text()</code> method can take a string or a callback function as an argument:
<code>selection.text((d) => d)</code>
In the example above, the parameter <code>d</code> refers to a single entry in the dataset that a selection is bound to.
Using the current example as context, the first <code>h2</code> element is bound to 12, the second <code>h2</code> element is bound to 31, the third <code>h2</code> element is bound to 22, and so on.
</section>

## Instructions
<section id='instructions'>
Change the <code>text()</code> method so that each <code>h2</code> element displays the corresponding value from the <code>dataset</code> array with a single space and "USD". For example, the first heading should be "12 USD".
</section>

## Tests
<section id='tests'>

```yml
tests:
  - text: The first <code>h2</code> should have the text "12 USD".
    testString: assert($('h2').eq(0).text() == "12 USD");
  - text: The second <code>h2</code> should have the text "31 USD".
    testString: assert($('h2').eq(1).text() == "31 USD");
  - text: The third <code>h2</code> should have the text "22 USD".
    testString: assert($('h2').eq(2).text() == "22 USD");
  - text: The fourth <code>h2</code> should have the text "17 USD".
    testString: assert($('h2').eq(3).text() == "17 USD");
  - text: The fifth <code>h2</code> should have the text "25 USD".
    testString: assert($('h2').eq(4).text() == "25 USD");
  - text: The sixth <code>h2</code> should have the text "18 USD".
    testString: assert($('h2').eq(5).text() == "18 USD");
  - text: The seventh <code>h2</code> should have the text "29 USD".
    testString: assert($('h2').eq(6).text() == "29 USD");
  - text: The eighth <code>h2</code> should have the text "14 USD".
    testString: assert($('h2').eq(7).text() == "14 USD");
  - text: The ninth <code>h2</code> should have the text "9 USD".
    testString: assert($('h2').eq(8).text() == "9 USD");

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

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    d3.select("body").selectAll("h2")
      .data(dataset)
      .enter()
      .append("h2")
      .text((d) => `${d} USD`);

  </script>
</body>

```

</section>
