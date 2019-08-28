---
id: 587d7fa7367417b2b2512bc7
title: Change Styles Based on Data
challengeType: 6
forumTopicId: 301479
localeTitle: Изменение стилей на основе данных
---

## Description
<section id='description'>
D3 - о визуализации и представлении данных. Вероятно, вы захотите изменить стиль элементов на основе данных. Вы можете использовать функцию обратного вызова в методе <code>style()</code> для изменения стиля для разных элементов. Например, вы можете покрасить синюю точку данных, если она имеет значение менее 20, и наоборот. Вы можете использовать функцию обратного вызова в методе <code>style()</code> и включать условную логику. Функция обратного вызова использует параметр <code>d</code> для представления точки данных: <blockquote> selection.style (&quot;color&quot;, (d) =&gt; { <br> / * Логика, возвращающая цвет, основанный на условии * / <br> }); </blockquote> Метод <code>style()</code> не ограничивается настройкой <code>color</code> - его можно использовать и с другими свойствами CSS.
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
    testString: assert($('h2').eq(0).css('color') == "rgb(255, 0, 0)");
  - text: The second <code>h2</code> should have a <code>color</code> of green.
    testString: assert($('h2').eq(1).css('color') == "rgb(0, 128, 0)");
  - text: The third <code>h2</code> should have a <code>color</code> of green.
    testString: assert($('h2').eq(2).css('color') == "rgb(0, 128, 0)");
  - text: The fourth <code>h2</code> should have a <code>color</code> of red.
    testString: assert($('h2').eq(3).css('color') == "rgb(255, 0, 0)");
  - text: The fifth <code>h2</code> should have a <code>color</code> of green.
    testString: assert($('h2').eq(4).css('color') == "rgb(0, 128, 0)");
  - text: The sixth <code>h2</code> should have a <code>color</code> of red.
    testString: assert($('h2').eq(5).css('color') == "rgb(255, 0, 0)");
  - text: The seventh <code>h2</code> should have a <code>color</code> of green.
    testString: assert($('h2').eq(6).css('color') == "rgb(0, 128, 0)");
  - text: The eighth <code>h2</code> should have a <code>color</code> of red.
    testString: assert($('h2').eq(7).css('color') == "rgb(255, 0, 0)");
  - text: The ninth <code>h2</code> should have a <code>color</code> of red.
    testString: assert($('h2').eq(8).css('color') == "rgb(255, 0, 0)");

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
// solution required
```

</section>
