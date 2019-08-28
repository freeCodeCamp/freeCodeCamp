---
id: 587d7fa7367417b2b2512bc5
title: Work with Dynamic Data in D3
challengeType: 6
forumTopicId: 301498
localeTitle: Работа с динамическими данными в D3
---

## Description
<section id='description'>
Последние две проблемы охватывают основы динамического отображения данных с помощью D3 с использованием методов <code>data()</code> и <code>enter()</code> . Эти методы берут набор данных и вместе с методом <code>append()</code> создают новый элемент DOM для каждой записи в наборе данных. В предыдущей задаче вы создали новый элемент <code>h2</code> для каждого элемента массива <code>dataset</code> , но все они содержали один и тот же текст «Новое название». Это связано с тем, что вы не использовали данные, привязанные к каждому из элементов <code>h2</code> . Метод D3 <code>text()</code> может принимать строку или функцию обратного вызова в качестве аргумента: <code>selection.text((d) =&gt; d)</code> В приведенном выше примере параметр <code>d</code> ссылается на одну запись в наборе данных, которая связана с выбором к. Используя текущий пример как контекст, первый элемент <code>h2</code> привязан к 12, второй элемент <code>h2</code> привязан к 31, третий элемент <code>h2</code> привязан к 22 и так далее.
</section>

## Instructions
<section id='instructions'>
Измените метод <code>text()</code> чтобы каждый элемент <code>h2</code> отображал соответствующее значение из массива <code>dataset</code> с одним пробелом и «USD». Например, первый заголовок должен быть «12 долларов США».
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
// solution required
```

</section>
