---
id: 587d7faa367417b2b2512bd2
title: Add Labels to D3 Elements
challengeType: 6
videoUrl: ''
localeTitle: Добавить ярлыки в элементы D3
---

## Description
<section id="description"> D3 позволяет вам наметить элемент графа, например панель, используя <code>text</code> элемент SVG. Подобно элементу <code>rect</code> , <code>text</code> элемент должен иметь атрибуты <code>x</code> и <code>y</code> , чтобы поместить его на холст SVG. Он также должен получить доступ к данным для отображения этих значений. D3 дает вам высокий уровень контроля над тем, как вы назовете свои бары. </section>

## Instructions
<section id="instructions"> Код в редакторе уже привязывает данные к каждому новому <code>text</code> элементу. Сначала добавьте <code>text</code> узлы в <code>svg</code> . Затем добавьте атрибуты для координат <code>x</code> и <code>y</code> . Они должны быть рассчитаны так же, как и <code>rect</code> , за исключением того, что значение <code>y</code> для <code>text</code> должно помещать ярлык на 3 единицы выше, чем планка. Наконец, используйте метод D3 <code>text()</code> чтобы установить метку равной значению точки данных. <strong>Заметка</strong> <br> Чтобы ярлык находился выше бара, решите, должно ли значение <code>y</code> для <code>text</code> быть на 3 больше или на 3 меньше значения <code>y</code> для панели. </section>

## Tests
<section id='tests'>

```yml
tests:
  - text: Первый <code>text</code> элемент должен иметь метку 12 и значение <code>y</code> 61.
    testString: 'assert($("text").eq(0).text() == "12" && $("text").eq(0).attr("y") == "61", "The first <code>text</code> element should have a label of 12 and a <code>y</code> value of 61.");'
  - text: Второй <code>text</code> элемент должен иметь метку 31 и значение <code>y</code> 4.
    testString: 'assert($("text").eq(1).text() == "31" && $("text").eq(1).attr("y") == "4", "The second <code>text</code> element should have a label of 31 and a <code>y</code> value of 4.");'
  - text: Третий <code>text</code> элемент должен иметь метку 22 и значение <code>y</code> 31.
    testString: 'assert($("text").eq(2).text() == "22" && $("text").eq(2).attr("y") == "31", "The third <code>text</code> element should have a label of 22 and a <code>y</code> value of 31.");'
  - text: Четвертый <code>text</code> элемент должен иметь метку 17 и значение <code>y</code> 46.
    testString: 'assert($("text").eq(3).text() == "17" && $("text").eq(3).attr("y") == "46", "The fourth <code>text</code> element should have a label of 17 and a <code>y</code> value of 46.");'
  - text: Пятый <code>text</code> элемент должен иметь метку 25 и значение <code>y</code> 22.
    testString: 'assert($("text").eq(4).text() == "25" && $("text").eq(4).attr("y") == "22", "The fifth <code>text</code> element should have a label of 25 and a <code>y</code> value of 22.");'
  - text: Шестой <code>text</code> элемент должен иметь метку 18 и значение <code>y</code> 43.
    testString: 'assert($("text").eq(5).text() == "18" && $("text").eq(5).attr("y") == "43", "The sixth <code>text</code> element should have a label of 18 and a <code>y</code> value of 43.");'
  - text: Седьмой <code>text</code> элемент должен иметь метку 29 и значение <code>y</code> 10.
    testString: 'assert($("text").eq(6).text() == "29" && $("text").eq(6).attr("y") == "10", "The seventh <code>text</code> element should have a label of 29 and a <code>y</code> value of 10.");'
  - text: Восьмой <code>text</code> элемент должен иметь метку 14 и значение <code>y</code> 55.
    testString: 'assert($("text").eq(7).text() == "14" && $("text").eq(7).attr("y") == "55", "The eighth <code>text</code> element should have a label of 14 and a <code>y</code> value of 55.");'
  - text: Девятый <code>text</code> элемент должен иметь метку 9 и значение <code>y</code> 70.
    testString: 'assert($("text").eq(8).text() == "9" && $("text").eq(8).attr("y") == "70", "The ninth <code>text</code> element should have a label of 9 and a <code>y</code> value of 70.");'

```

</section>

## Challenge Seed
<section id='challengeSeed'>

<div id='html-seed'>

```html
<body>
  <script>
    const dataset = [12, 31, 22, 17, 25, 18, 29, 14, 9];

    const w = 500;
    const h = 100;

    const svg = d3.select("body")
                  .append("svg")
                  .attr("width", w)
                  .attr("height", h);

    svg.selectAll("rect")
       .data(dataset)
       .enter()
       .append("rect")
       .attr("x", (d, i) => i * 30)
       .attr("y", (d, i) => h - 3 * d)
       .attr("width", 25)
       .attr("height", (d, i) => 3 * d)
       .attr("fill", "navy");

    svg.selectAll("text")
       .data(dataset)
       .enter()
       // Add your code below this line




       // Add your code above this line
  </script>
<body>

```

</div>



</section>

## Solution
<section id='solution'>

```js
// solution required
```
</section>
