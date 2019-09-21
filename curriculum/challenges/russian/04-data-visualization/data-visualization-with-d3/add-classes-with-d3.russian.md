---
id: 587d7fa7367417b2b2512bc8
title: Add Classes with D3
challengeType: 6
forumTopicId: 301473
localeTitle: Добавить классы с D3
---

## Description
<section id='description'>
Использование большого количества встроенных стилей в HTML-элементах трудно справиться даже для небольших приложений. Легче добавить класс к элементам и стиль этого класса один раз с использованием правил CSS. D3 имеет метод <code>attr()</code> для добавления любого элемента HTML к элементу, включая имя класса. Метод <code>attr()</code> работает так же, как это делает <code>style()</code> . Он принимает значения, разделенные запятыми, и может использовать функцию обратного вызова. Вот пример добавления класса «container» к выбору: <code>selection.attr(&quot;class&quot;, &quot;container&quot;);</code>
</section>

## Instructions
<section id='instructions'>
Добавьте метод <code>attr()</code> в код в редакторе и поместите класс <code>bar</code> в элементы <code>div</code> .
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
